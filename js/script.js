const employeesSlider = new Swiper('.employees-slider', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 35,
  navigation: {
    nextEl: '#employees-slider-btn-next',
    prevEl: '#employees-slider-btn-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  pagination: {
    el: '.employees-slider__pagination',
    type: 'fraction',
  },
  breakpoints: {  
    '0': {
      slidesPerView: 1,
      spaceBetween: 25,
    },
    '576': {
      slidesPerView: 2,
      spaceBetween: 28,
    },
    '1040': {
      slidesPerView: 3,
      spaceBetween: 32,
    }
  },
});


let header = document.querySelector('.header-sticky');

window.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY;

  if (scrollPosition > 40) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});


const tabsBtn = document.querySelectorAll('.tab-btn');
const tabsContent = document.querySelectorAll('.tab-content');

const openTabContent = (e) => {
  const tabTarget = e.currentTarget;
  const tab = tabTarget.dataset.tab;

  tabsBtn.forEach((btn) => {
    btn.classList.remove('active');
  })

  tabsContent.forEach((content) => {
    content.classList.remove('active');
  })

  tabTarget.classList.add('active');
  document.querySelector(`#${tab}`).classList.add('active');
}

tabsBtn.forEach((tab) => {
  tab.addEventListener('click', openTabContent)
})


const faqBtnShowMore = document.getElementById('faq-btn-show-more');

faqBtnShowMore.addEventListener('click', () => {
  document.querySelectorAll('.faq__item').forEach(item => (
    item.classList.remove('hidden')
  ));

  faqBtnShowMore.style.display = 'none';
});

const faqTextShowMore = document.querySelectorAll('.faq__answer-show__more').forEach(btn => {
  btn.addEventListener('click', () => {
    const text = btn.previousSibling.previousSibling;
    text.classList.add('long');

    btn.style.display = 'none';
  })
})