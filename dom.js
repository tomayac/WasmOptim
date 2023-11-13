const loadWasmButton = document.querySelector('#load-wasm');
const loadDirectoryButton = document.querySelector('#load-directory');
const beforeSize = document.querySelector('#before-size');
const afterSize = document.querySelector('#after-size');
const deltaSize = document.querySelector('#delta-size');
const dropArea = document.querySelector('#drop-area');
const resultsArea = document.querySelector('#results-area');
const statsTemplate = document.querySelector('#stats-template');
const exampleTemplate = document.querySelector('#example-template');
const statsHeader = document.querySelector('#stats-header');
const overwriteCheckbox = document.querySelector('#overwrite-checkbox');
const observeChangesCheckbox = document.querySelector(
  '#observe-changes-checkbox',
);
const examplesList = document.querySelector('#examples-list');

export {
  loadWasmButton,
  loadDirectoryButton,
  beforeSize,
  afterSize,
  deltaSize,
  dropArea,
  resultsArea,
  statsTemplate,
  exampleTemplate,
  statsHeader,
  overwriteCheckbox,
  observeChangesCheckbox,
  examplesList,
};
