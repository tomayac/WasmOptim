import { globalStats } from './dom.js';
import prettyBytes from 'pretty-bytes';

const STATS_ENDPOINT = 'https://wasmoptim-stats.glitch.me';
const headers = {
  'Content-Type': 'application/json',
};

const sendStats = async (beforeSize, afterSize) => {
  try {
    const body = JSON.stringify({ beforeSize, afterSize });
    const response = await fetch(`${STATS_ENDPOINT}/saved-bytes`, {
      method: 'POST',
      headers,
      body,
    });
    await response.json();
  } catch (error) {
    if (location.hostname === 'localhost') {
      return;
    }
    console.error(error.name, error.message);
  }
};

const getStats = async () => {
  try {
    const response = await fetch(`${STATS_ENDPOINT}/saved-bytes`, {
      headers,
    });
    const stats = await response.json();
    globalStats.hidden = false;
    const statsFiles = globalStats.querySelector('.global-stats-files');
    const statsSize = globalStats.querySelector('.global-stats-size');
    const statsPercent = globalStats.querySelector('.global-stats-percent');
    statsFiles.textContent = `${new Intl.NumberFormat().format(
      stats.entryCount,
    )}&nbsp;${stats.entryCount === 1 ? 'file' : 'files'}`;
    statsSize.textContent = prettyBytes(stats.totalBytesSaved).replace(
      ' ',
      ' ',
    );
    statsPercent.textContent = Number(stats.averagePercentageSaved).toFixed(2);
  } catch (error) {
    if (location.hostname === 'localhost') {
      return;
    }
    console.error(error.name, error.message);
  }
};

getStats();

export { sendStats, getStats };
