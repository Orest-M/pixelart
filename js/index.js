const divFather = document.querySelector('.div-father');
const finalBtn = document.querySelector('.final-btn');
const palette = document.querySelector('.palette');

divFather.addEventListener('click', onClick);
palette.addEventListener('click', onChangeColor);
finalBtn.addEventListener('click', onFinalBtnClick);

let currentColor = null;

for (i = 0; i < 1215; i++) {
  const div = document.createElement('div');
  div.style.width = '20px';
  div.style.height = '20px';
  div.style.border = '1px solid #676767';
  div.style.display = 'flex';
  div.style.flexWrap = 'wrap';
  divFather.append(div);
}

function onClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'DIV') {
    return;
  }

  evt.target.style.backgroundColor = currentColor;
}

function onChangeColor(evt) {
  evt.preventDefault();

  currentColor = evt.target.dataset.color;
}

function onFinalBtnClick() {
  location.reload();
}
