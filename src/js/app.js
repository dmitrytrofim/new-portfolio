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
  this.navPanel = document.querySelector('.navigation');
  this.btnsNav = document.querySelectorAll('.navigation__btn');
  this.particlesIds = [
   'tsparticles-main',
   'tsparticles-about',
   'tsparticles-skills',
   'tsparticles-portfolio',
  ];
  this.sidesInner = document.querySelectorAll('.box__side-inner');
  this.tabs = {
   btns: document.querySelectorAll('[data-tabs-btn]'),
   boxes: document.querySelectorAll('[data-tabs-box]'),
  };
  this.titles = document.querySelectorAll('.title');
  this.preloader = document.querySelector('.preloader');
 }
 //@mark turnBox
 turnBox() {
  let curBtn = 0;
  let block = false;
  this.btnsNav.forEach((btn, i) => {
   btn.addEventListener('click', () => {
    this.box.classList.add('j-overflow');
    if (curBtn === i) return;
    if (block) return;
    this.sidesInner.forEach((inner) => {
     if (inner.dataset.side === btn.dataset.nav) {
      inner.classList.add('j-scroll');
     } else {
      inner.classList.remove('j-scroll');
     }
    });
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
     this.box.classList.remove('j-overflow');
     if (e.target === this.box) {
      this.sidesInner.forEach((inner) => (inner.scrollTop = 0));
      this.box.setAttribute(
       'style',
       `transform: rotateY(${-90 * i}deg); transform 0s ease-in-out 0s;`
      );
      this.titles.forEach((ttl) => {
       ttl.querySelectorAll('span').forEach((sp) => {
        sp.setAttribute('style', '');
       });
      });
      if (this.titles[i - 1]) {
       const letters = this.titles[i - 1].querySelectorAll('span');
       letters.forEach((lt, idx) => {
        lt.setAttribute(
         'style',
         `animation: anime-title 5s linear ${idx / 8}s;`
        );
       });
      }
      block = false;
     }
    });
    curBtn = i;
   });
  });

  let blockKeysNav = true;
  this.navPanel.addEventListener('animationend', () => {
   blockKeysNav = false;
   this.navPanel.classList.add('j-keys');
  });

  window.addEventListener('keydown', (e) => {
   if (blockKeysNav) return;
   let nextSide = curBtn >= 3 ? 0 : curBtn + 1;
   let prevSide = curBtn <= 0 ? 3 : curBtn - 1;
   if (e.key === 'ArrowRight') {
    this.btnsNav[nextSide].click();
   }
   if (e.key === 'ArrowLeft') {
    this.btnsNav[prevSide].click();
   }
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
 //@mark animeTitle
 animeTitle() {
  this.titles.forEach((msg) => {
   msg.innerHTML = msg.textContent.replace(/(\S)/g, '<span>$1</span>');
  });
 }
 //@mark start
 start() {
  window.addEventListener('load', () => {
   if (this.box) this.turnBox();
   if (this.tabs.btns[0]) this.switch();
   if (this.titles[0]) this.animeTitle();
   this.initParticles();
   this.preloader.classList.add('j-hide');
   this.box.classList.add('j-anime');
   this.navPanel.classList.add('j-anime');
  });
 }
}
const app = new App().start();
