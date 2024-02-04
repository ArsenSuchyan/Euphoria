

// const icon = document.querySelector('.actions__item--button');

// icon.addEventListener ('click', function () {
//    document.documentElement.classList.toggle('menu-open');
// })





function changeHeader() {
   const menu = document.querySelector('.menu__body')



   const actions = document.createElement('div')

   actions.classList.add('menu__actions')

   const actionsItems = document.querySelectorAll('.actions__item--main')

   console.log(actionsItems)

   actionsItems.forEach ((item) => {
      actions.append(item)
   })

   console.log(actions)

   menu.prepend(actions)
}


let viewportWidth = window.innerWidth

if (viewportWidth < 634) {
   changeHeader()
   console.log('go')
}



const icon = document.querySelector('.womens-clothing__open-filter')

const filter = document.querySelector('.filter')

const price = document.querySelector('.filter__price')

const colors = document.querySelector('.filter__colors')

const size = document.querySelector('.filter__size')

const style = document.querySelector('.filter__dress-style')


document.addEventListener('click', documentActions) 


function documentActions(e) {
   const target = e.target
   console.log(target)
   if (target.closest('.actions__item--button')) {
      document.documentElement.classList.toggle('menu-open');
   } else if (target.closest('.womens-clothing__open-filter')) {
      document.documentElement.classList.toggle('filter-open')
      filter.prepend(icon)
   } else if (target.closest('.filter__header-price')) {
      price.classList.toggle('open')
   } else if (target.closest('.filter__header-colors')) {
      colors.classList.toggle('open')
   } else if (target.closest('.filter__header-size')) {
      size.classList.toggle('open')
   } else if (target.closest('.filter__header-style')) {
      style.classList.toggle('open')
   } 
} 





// Слайдери


const heroSlider = document.querySelector('.hero')

const newArrivalSlider = document.querySelector('.new-arrival__items')



if(heroSlider) {
   new Swiper('.hero', {
      // Optional parameters
      loop: true,
   
      // If we need pagination
      pagination: {
      el: '.hero__pagination',
      clickable: true
      },
   
      // Navigation arrows
      navigation: {
      nextEl: '.hero__swiper-arrow--right',
      prevEl: '.hero__swiper-arrow--left',
      },
   });
}


if(newArrivalSlider) {
   new Swiper('.new-arrival__items', {
      // Optional parameters
      loop: true,
      autoHeight: true,
      slidesPerView: 4,
      spaceBetween: 39,
      
   
      // Navigation arrows
      navigation: {
      nextEl: '.new-arrival__arrow--right',
      prevEl: 'new-arrival__arrow--left',
      },
      breakpoints: {
         1: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
         450: {
           slidesPerView: 2,
           spaceBetween: 20,
         },
         768: {
           slidesPerView: 3,
           spaceBetween: 30,
         },
         1024: {
           slidesPerView: 4,
           spaceBetween: 39,
         },
       }
   });
}