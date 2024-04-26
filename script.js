const $ = (e) => document.querySelector(e);
const $$ = (e) => document.querySelectorAll(e);






// Under developmenttt
const togglerBtn = $('.toggler');
const tl = gsap.timeline({ defaults: {duration: 1, ease: "expo.inOut",}, paused: true });
const w = gsap.getProperty('.can', 'width');
const wW = window.innerWidth;
const duration = (wW > 1000) ? 0.7 : (wW > 700) ? 0.5 : 0.4;

tl
  .to('.orange > h1', { xPercent: 100 })
  .to('.orange > div > img:not(.can)', { xPercent: 150, rotation: 90 }, '<')
  // .to('.orange .can, .orange .clippy', { x: '-2vw' }, '<')
  .to('.orange .clippy > div', { x: -w*2 }, '<')
  .to('.orange', { clipPath: 'inset(0 100% 0 0)' }, '<')

  .from('.pineapple > h1', { xPercent: -100 }, '<')
  .from('.pineapple > div > img:not(.can)', { xPercent: -150, rotation: -90 }, '<')
  // .from('.pineapple .can, .pineapple .clippy', { x: '2vw' }, '<')
  .from('.pineapple .clippy > div', { x: w*2 }, '<')


let count = 1;
togglerBtn.addEventListener('click', () => {
  count ? (tl.play(), count--) : (tl.reverse(), count++);
});

