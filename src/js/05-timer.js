const startBtn = document.querySelector('button[data-action-start]');
const stopBtn = document.querySelector('button[data-action-stop]');
const clockface = document.querySelector('.js-clockface');
//!======================================================

// const timer = {
//   intervalId: null,
//   initTime: null,

//   start() {
//     console.log(this.intervalId);

//     if (this.intervalId) {
//       console.log('Таймер вже існує');
//       return;
//     }

//     console.log('Таймер запущено');
//     this.initTime = Date.now();
//     this.intervalId = setInterval(() => {
//       this.tick();
//     }, 1000);
//   },

//   stop() {
//     clearInterval(this.intervalId);
//     this.intervalId = null;
//     console.log('Таймер зупинено');
//   },

//   tick() {
//     const currentTime = Date.now();

//     const diff = currentTime - this.initTime;

//     const timeObj = getTimeComponents(diff);
//     const timeStr = time2Str(timeObj);

//     clockface.textContent = timeStr;
//   },
// };

// startBtn.addEventListener('click', () => {
//   timer.start();
// });

// stopBtn.addEventListener('click', () => {
//   timer.stop();
// });

// function getTimeComponents(time) {
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   return { hours, mins, secs };
// }

// function time2Str({ hours, mins, secs }) {
//   const hoursStr = pad(hours);
//   const minsStr = pad(mins);
//   const secsStr = pad(secs);

//   return `${hoursStr}:${minsStr}:${secsStr}`;
// }

function pad(value) {
  return String(value).padStart(2, '0');
}

function ms2str(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  const hoursStr = pad(hours);
  const minsStr = pad(mins);
  const secsStr = pad(secs);

  return `${hoursStr}:${minsStr}:${secsStr}`;
}

// //!======================================================

let intervalId;
let initTime = new Date();

startBtn.addEventListener('click', () => {
  if (intervalId) return;

  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const diff = initTime - currentTime;
    const str = ms2str(diff);
    clockface.textContent = str;

    if (diff < 1000) {
      clearInterval(intervalId);
    }
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
});

// "Не розумію чому у прикладах 1-3 друга година:
// console.log(new Date(""2030"")); // ""Tue Jan 01 2030 02:00:00 GMT+0200""
// console.log(new Date(""2030-03"")); // ""Fri Mar 01 2030 02:00:00 GMT+0200""
// console.log(new Date(""2030-03-16"")); // ""Sat Mar 16 2030 02:00:00 GMT+0200""
// console.log(new Date(""2030-03-16T14:25:00"")); // ""Sat Mar 16 2030 14:25:00 GMT+0200""
// "
