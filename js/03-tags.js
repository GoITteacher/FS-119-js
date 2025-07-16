const refs = {
  firstTagsList: document.querySelector('.tags-box[data-group="group-1"]'),
  secondTagsList: document.querySelector('.tags-box[data-group="group-2"]'),
};

refs.firstTagsList.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;
  const liElem = e.target.closest('li');
  liElem.classList.toggle('active');
});

refs.secondTagsList.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;

  const activeElem = e.currentTarget.querySelector('li.tag-item.active');
  activeElem.classList.toggle('active');

  const liElem = e.target.closest('li');
  liElem.classList.toggle('active');
});

function sendData() {
  const firstListElems = refs.firstTagsList.querySelectorAll('.active');
  const firstList = [...firstListElems].map(el => el.textContent.trim()).join();
  console.log(firstList);
}
