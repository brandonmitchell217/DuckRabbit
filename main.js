gsap.registerPlugin(ScrollTrigger)
const amberBtn = document.querySelector('.amberBtn')
const amberSlide = document.querySelector('.amberSlide')
const brownBtn = document.querySelector('.brownBtn')
const brownSlide = document.querySelector('.brownSlide')
const hoppyBtn = document.querySelector('.hoppyBtn')
const hoppySlide = document.querySelector('.hoppySlide')

// amberBtn.addEventListener('click', () => {
//   amberSlide.style.transform = 'translate(0, -50%)'
// })
// brownBtn.addEventListener('click', () => {
//   brownSlide.style.transform = 'translate(0, -50%)'
// })
// hoppyBtn.addEventListener('click', () => {
//   hoppySlide.style.transform = 'translate(0, -50%)'
// })

const selectionBtns = document.querySelectorAll('.selectionBtn')
const btnArray = Array.from(selectionBtns)
const slides = document.querySelectorAll('.slide')

window.addEventListener('DOMContentLoaded', () => {
  selectionBtns[0].classList.add('active')
})

gsap.from('.stoutSlide', {
  scrollTrigger: '#beers',
  start: 'top top',
  end: 'bottom bottom',
  opacity: 0,
  x: 500,
  anticipatePin: 1,
})
gsap.from('.selections button', {
  scrollTrigger: '#beers',
  start: 'bottom bottom',
  end: 'bottom bottom',
  x: -500,
  stagger: 0.5,
  anticipatePin: 1,
})

for (let i = 0; i < selectionBtns.length && i < slides.length; i++) {
  slides[i] === selectionBtns[i]
  selectionBtns[i].addEventListener('click', () => {
    selectionBtns.forEach((btn) => {
      btn.classList.remove('active')
    })
    if (selectionBtns[i].classList.contains('active')) {
      selectionBtns[i].classList.remove('active')
    } else {
      selectionBtns[i].classList.add('active')
    }
    slides.forEach((slide) => {
      slide.style.transform = 'translate(160%, -50%)'
    })
    slides[i].style.transform = 'translate(0, -50%)'
    const tl = gsap.timeline({ delay: 0.25 })
    tl.from('.title', { duration: 1.5, opacity: 0, x: 300 })
    tl.from('.redRec', { duration: 1, x: '100%' }, '-=1')
    tl.from('.content', { duration: 1.5, opacity: 0, x: 300 }, '-=1.5')
    tl.from('.beer', { duration: 1.5, x: '100%', opacity: 0 }, '-=1.2')
    tl.from('.abv', { duration: 1.5, opacity: 0 }, '-=1')
  })
}
// for (let i = 0; i < selectionBtns.length; i++) {
//   selectionBtns[i].addEventListener('click', () => {
//     selectionBtns.forEach((btn) => {
//       btn.classList.remove('active')
//     })
//     if (selectionBtns[i].classList.contains('active')) {
//       selectionBtns[i].classList.remove('active')
//     } else {
//       selectionBtns[i].classList.add('active')
//     }
//   })
//   selectionBtns[i].addEventListener('click', (e) => {
//     console.log(e.target)
//   })
// }

// function slideSelect(e) {
//    for (let i = 0; i < slides.length; i++) {

//    }
// }
