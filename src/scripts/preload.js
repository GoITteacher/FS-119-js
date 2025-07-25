import Toastify from 'toastify';
import 'toastify/dist/toastify.css';

window.addEventListener('click', () => {
  Toastify.success('Title', 'This is the body of the notification');
});
