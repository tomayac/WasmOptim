import prettyBytes from 'pretty-bytes';
import spinner from '/spinner.svg';
import {
  supportsFileHandleDragAndDrop,
  supportsFileSystemObserver,
} from './main.js';
import { supported as supportsFileSystemAccess } from 'browser-fs-access';
import { supportsGetUniqueId } from './util.js';
import {
  statsTemplate,
  statsHeader,
  resultsArea,
  observeChangesCheckbox,
  overwriteCheckbox,
} from './dom.js';
import { limit } from './util.js';

const uuidToFile = new Map();

const optimizeWasmFiles = async (wasmFilesBefore) => {
  statsHeader.hidden = false;
  resultsArea.closest('table').hidden = false;
  const tasks = [];

  for (const wasmFileBefore of wasmFilesBefore) {
    const uniqueId =
      supportsGetUniqueId && wasmFileBefore.handle
        ? await wasmFileBefore.handle.getUniqueId()
        : wasmFileBefore.name;
    let fileNameLabel;
    let beforeSizeLabel;
    let afterSizeLabel;
    let deltaSizeLabel;
    let spinnerImg;
    const existingFileName = resultsArea.querySelector(
      `[data-uuid="${uniqueId}"]`,
    );
    if (existingFileName) {
      const statsRow = existingFileName.closest('tr');
      fileNameLabel = statsRow.querySelector('.file-name');
      beforeSizeLabel = statsRow.querySelector('.before-size');
      afterSizeLabel = statsRow.querySelector('.after-size');
      deltaSizeLabel = statsRow.querySelector('.delta-size');
      spinnerImg = statsRow.querySelector('.spinner');
    } else {
      const stats = statsTemplate.content.cloneNode(true);
      fileNameLabel = stats.querySelector('.file-name');
      beforeSizeLabel = stats.querySelector('.before-size');
      afterSizeLabel = stats.querySelector('.after-size');
      deltaSizeLabel = stats.querySelector('.delta-size');
      spinnerImg = stats.querySelector('.spinner');
      resultsArea.append(stats);
    }
    spinnerImg.src = spinner;
    fileNameLabel.querySelector('code').textContent = wasmFileBefore.name;
    fileNameLabel.classList.add('processing');
    beforeSizeLabel.textContent = prettyBytes(wasmFileBefore.size);
    fileNameLabel.dataset.uuid = uniqueId;

    tasks.push(() => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(
          new URL('./binaryen-worker.js', import.meta.url),
        );
        worker.addEventListener('message', async (event) => {
          worker.terminate();
          spinnerImg.removeAttribute('src');
          fileNameLabel.classList.remove('processing');
          const { wasmFileAfter, error } = event.data;
          if (error) {
            reject(error);
            fileNameLabel.classList.add('error');
            afterSizeLabel.classList.add('error');
            deltaSizeLabel.classList.add('error');
            afterSizeLabel.textContent = error.name;
            deltaSizeLabel.textContent = error.message;
            return;
          }
          afterSizeLabel.textContent = prettyBytes(wasmFileAfter.size);
          const deltaSize = wasmFileAfter.size - wasmFileBefore.size;
          console.log(
            `${wasmFileBefore.name} processed → Before: ${wasmFileBefore.size} After: ${wasmFileAfter.size} Delta: ${deltaSize}`,
          );
          const deltaSizePercent = Math.abs(
            100 - (wasmFileAfter.size / wasmFileBefore.size) * 100,
          ).toFixed(2);
          deltaSizeLabel.textContent =
            Number(deltaSizePercent) === 0
              ? 'no change'
              : `${deltaSizePercent}% ${deltaSize < 0 ? 'smaller' : 'larger'}`;
          deltaSizeLabel.classList.add(
            Number(deltaSizePercent) === 0
              ? 'size-larger'
              : deltaSize < 0
                ? 'size-smaller'
                : 'size-larger',
          );
          uuidToFile.set(uniqueId, {
            file: wasmFileAfter,
            handle: wasmFileBefore.handle,
          });
          if (deltaSize < 0) {
            if (
              supportsFileHandleDragAndDrop &&
              supportsFileSystemAccess &&
              overwriteCheckbox.checked &&
              wasmFileBefore.handle
            ) {
              try {
                const writable = await wasmFileBefore.handle.createWritable();
                await writable.write(wasmFileAfter);
                await writable.close();
              } catch (error) {
                console.error(error.name, error.message);
              }
            }
          }
          if (
            supportsFileSystemObserver &&
            observeChangesCheckbox.checked &&
            wasmFileBefore.handle
          ) {
            const { getFileSystemChangeObserver } = await import(
              './file-system-observer.js'
            );
            const fileSystemChangeObserver = getFileSystemChangeObserver();
            fileSystemChangeObserver.observe(wasmFileBefore.handle);
            console.log(`${wasmFileBefore.name} → Observing changes`);
          }
          resolve();
        });
        worker.postMessage({ wasmFileBefore });
      });
    });
  }
  await limit(
    tasks,
    'hardwareConcurrency' in navigator
      ? Math.floor(navigator.hardwareConcurrency)
      : 4,
  );
};

export { optimizeWasmFiles, uuidToFile };
