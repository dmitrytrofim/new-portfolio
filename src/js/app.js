//@mark imports
// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// import { Splide } from '@splidejs/splide';
// import PhotoSwipeLightbox from '../../node_modules/photoswipe/dist/photoswipe-lightbox.esm.min.js';
// import LocomotiveScroll from 'locomotive-scroll';
import { tsParticles } from '@tsparticles/engine';
import { loadStarsPreset } from '@tsparticles/preset-stars';

//@mark app
class App {
 constructor() {
  this.page = document.querySelector('.page');
  this.box = document.querySelector('.box');
  this.btnsNav = document.querySelectorAll('.navigation__btn');
  this.particlesIds = [
   'tsparticles-main',
   'tsparticles-about',
   'tsparticles-skills',
   'tsparticles-portfolio',
  ];
  this.tabs = {
   btns: document.querySelectorAll('[data-tabs-btn]'),
   boxes: document.querySelectorAll('[data-tabs-box]'),
  };
 }
 //@mark turnBox
 turnBox() {
  let curBtn = 0;
  let block = false;
  this.btnsNav.forEach((btn, i) => {
   btn.addEventListener('click', () => {
    if (block) return;
    let turn = -90 * i;
    if (curBtn === 0 && i === 3) turn = 90;
    if (curBtn === 3 && i === 0) turn = -360;
    this.btnsNav.forEach((b) => b.classList.remove('j-active'));
    btn.classList.add('j-active');
    this.box.setAttribute(
     'style',
     `transform: rotateY(${turn}deg); transition: transform 2s ease-in-out 0s;`
    );
    block = true;
    this.box.addEventListener('transitionend', (e) => {
     if (e.target === this.box) {
      this.box.setAttribute(
       'style',
       `transform: rotateY(${-90 * i}deg); transform 0s ease-in-out 0s;`
      );
      block = false;
     }
    });
    curBtn = i;
   });
  });
 }
 //@mark initParticles
 initParticles() {
  this.particlesIds.forEach((id) => {
   (async () => {
    await loadStarsPreset(tsParticles);
    await tsParticles.load({
     id: id,
     options: {
      preset: 'stars',
      background: {
       opacity: 0,
      },
     },
    });
   })();
  });
 }
 switch() {
  this.tabs.btns.forEach((btn, i) => {
   btn.addEventListener('click', () => {
    let box = this.tabs.boxes[i];

    this.tabs.btns.forEach((el) => el.classList.remove('j-active'));
    this.tabs.boxes.forEach((el) => {
     el.classList.remove('j-show');
     if (box !== el) {
      el
       .querySelectorAll('.portfolio__card')
       .forEach((card) => card.classList.remove('j-anim'));
     } else {
      setTimeout(() => {
       el
        .querySelectorAll('.portfolio__card')
        .forEach((card) => card.classList.add('j-anim'));
      }, 0);
     }
    });

    btn.classList.add('j-active');
    box.classList.add('j-show');
   });
  });
 }
 //@mark start
 start() {
  if (this.box) this.turnBox();
  if (this.tabs.btns[0]) this.switch();
  this.initParticles();
 }
}
const app = new App().start();
