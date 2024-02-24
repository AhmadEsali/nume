// import 'normalize.css';
import './assets/scss/app.scss';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

gsap.from(".features__items", {
  scrollTrigger: {
    trigger: ".features__items",
    start: "top 80%",
  },
  x: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
});

gsap.utils.toArray('.team__item').forEach(item => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top bottom', // when the top of the item hits the bottom of the viewport
        end: 'bottom top', // when the bottom of the item hits the top of the viewport
        scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
      autoAlpha: 0.5, // start faded out
      y: 100, // start 100px below their final position
    });
  });

// animate testimonials section on scroll
gsap.from(".testimonials__items", {
  scrollTrigger: {
    trigger: ".testimonials__items",
    start: "top 80%",
  },
  x: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
});

// gsap.utils.toArray('.solutions__item').forEach((item, index) => {
//     const direction = item.classList.contains('solutions__item--large') ? -100 : 100;
//     gsap.from(item, {
//       scrollTrigger: {
//         trigger: item,
//         start: 'top bottom',
//         end: 'bottom top',
//         scrub: true,

//       },
//       x: direction,
//     });
//   });

gsap.from('.solutions__items',{
    scrollTrigger: {
        trigger: '.solutions__items',
        start: 'top 80%',
    },
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
    });

  gsap.utils.toArray('.stats__item').forEach(item => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top bottom', // when the top of the item hits the bottom of the viewport
        once: true, // trigger the animation only once
      },
      y: 100, // start 100px below their final position
      duration: 1, // animation duration in seconds
    });
  });