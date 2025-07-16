let colorPalette = [];
const LENGTH = 9;

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < LENGTH; i++) {
    let hex = getRangomColor();
    let color = {
      hex,
      rgb: hexToRgb(hex),
    };

    items.push(color);
  }

  colorPalette = [...items];
}

function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}

function hexToRgb(hex) {
  let red = parseInt(hex.substring(1, 3), 16);
  let green = parseInt(hex.substring(3, 5), 16);
  let blue = parseInt(hex.substring(5, 7), 16);
  return `${red}, ${green}, ${blue}`;
}

createPaletteItems();
//!======================================================

const refs = {
  itemList: document.querySelector('.js-colors-box'),
  modalElement: document.querySelector('.modal'),
  btnReloadColor: document.querySelector('.js-reload-color'),
  backdropElem: document.querySelector('.js-backdrop'),
};

console.log(colorPalette);

//!======================================================

function colorTemplate(item) {
  return `<li class="color-item" data-color="${item.hex}">
          <button class="color-body" style="background-color: ${item.hex};"></button>
          <div class="color-footer">
            <div>HEX: ${item.hex}</div>
            <div>RGB: ${item.rgb}</div>
            <div></div>
          </div>
        </li>`;
}

function colorsTemplate(items) {
  return items.map(colorTemplate).join('\n');
}

refs.btnReloadColor.addEventListener('click', () => {
  createPaletteItems();
  const markup = colorsTemplate(colorPalette);
  refs.itemList.innerHTML = markup;
});

//!======================================================

refs.itemList.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const activeElem = refs.itemList.querySelector('.active');
  if (activeElem) {
    activeElem.classList.toggle('active');
  }

  const liElem = e.target.closest('li');
  liElem.classList.toggle('active');

  console.log(liElem);
  console.log(liElem.dataset);

  const color = liElem.dataset.color;
  document.body.style.backgroundColor = color;
});
