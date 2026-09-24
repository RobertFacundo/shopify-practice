console.log('hero-animation.js loaded')
console.log('GSAP loaded:', typeof gsap !== 'undefined')

const heroContent = document.querySelector('.hero__content')
const heroElements = document.querySelectorAll('.hero__content > *')

console.log(heroElements)

gsap.from(heroElements, {
  opacity: 0,
  x: -50,
  duration: 1,
  stagger: 0.2
})
