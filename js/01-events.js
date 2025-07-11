/**
 * Подія сlick
 *
 * - addEventListener
 * - removeEventListener
 *
 * Натискаючи на кнопку "Click me" змусь
 * червоний квадратик зміщуватись на 50px по діагоналі
 */

// onTargetEvent - onBtnElemClick
// handleTargetEvent - handleUserFormClick
// targetEventHandler - btnElemClickHandler

// const clickMeBtnElem = document.querySelector('.js-click');
// clickMeBtnElem.addEventListener('click', handleBtnClick1);
// clickMeBtnElem.removeEventListener('click', handleBtnClick1);

// function handleBtnClick1() {
//   console.log('Hello Click1');
// }
// function handleBtnClick2() {
//   console.log('Hello Click2');
// }
// function handleBtnClick3() {
//   console.log('Hello Click3');
// }
//!======================================================

const btnElem = document.querySelector('.js-click');
const boxElem = document.querySelector('.js-box');

const position = {
  left: 100,
  top: 100,
};

btnElem.addEventListener('click', () => {
  boxElem.style.left = `${position.left}px`;
  boxElem.style.top = `${position.top}px`;
  position.left += 10;
  position.top += 10;
});
