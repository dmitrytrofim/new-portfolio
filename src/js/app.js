//@mark imports
// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// import { Splide } from '@splidejs/splide';
// import PhotoSwipeLightbox from '../../node_modules/photoswipe/dist/photoswipe-lightbox.esm.min.js';
// import LocomotiveScroll from 'locomotive-scroll';

//@mark app
class App {
 constructor() {
  this.page = document.querySelector('.page');
 }
 //@mark start
 start() {}
}
const app = new App().start();

const box = document.querySelector('.box');

let turn = 0;
window.addEventListener('click', () => {
 turn += 90;
 box.setAttribute('style', `transform: rotateY(-${turn}deg);`);
});
