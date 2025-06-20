/**
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 * - Зміна за посиланням
 */
//!======================================================

const cat = {
  name: 'Marsik',
  age: 3,
  color: 'black',
  breed: 'Noname',

  sleep() {
    console.log('Zzzz');
  },
  eat() {
    console.log('Ням ням');
  },
  scratch() {
    console.log('||| |||');
  },
};

const dog = {
  name: 'Lord',
  age: 2,
  breed: 'Spaniel',

  sayWoof() {
    console.log('woof woof');
  },
};

cat.sleep();

dog.sayWoof();
//!======================================================
const playlist = {
  name: 'My amazing playlist',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
  link: '',
  img: '',

  changeName(newName) {
    this.name = newName;
  },

  addTrack(track) {
    this.tracks.push(track);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

console.log(playlist.tracks);

playlist.addTrack('ACDC - Thunder');
playlist.addTrack('Wishmaster');

console.log(playlist.tracks);
