/*
 * Події миші
 * - mouseenter і mouseleave (це ховер)
 * - mousemove (chatty event - балакуча подія)
 */

const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseenter', () => {
//   const red = Math.round(Math.random() * 255);
//   const green = Math.round(Math.random() * 255);
//   const blue = Math.round(Math.random() * 255);
//   const rgb = `rgb(${red}, ${green}, ${blue})`;
//   boxRef.style.backgroundColor = rgb;
// });

// boxRef.addEventListener('mouseleave', () => {
//   console.log('leave');

//   boxRef.style.backgroundColor = '#3f51b5';
// });

//!======================================================
boxRef.firstElementChild.style.position = 'absolute';
boxRef.addEventListener('mousemove', e => {
  boxRef.firstElementChild.style.left = e.screenX - 50 + 'px';
  boxRef.firstElementChild.style.top = e.screenY - 50 + 'px';
});
