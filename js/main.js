//* Código para abrir e fechar o menu do site
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

toggle.forEach((item) =>{
  item.addEventListener('click', () =>{
    nav.classList.toggle('show')
  });
});

//* código para fechar o menu, quando um item é clicado
const links = document.querySelectorAll('nav ul li a');

links.forEach(item => {
  item.addEventListener('click', () => {
    nav.classList.remove('show')
  });
});

//* quando o usuário der o scroll, ele adiciona a classe scroll no header
function changeHeaderWhenScroll(){
  const header = document.querySelector('#header');
  const navHeight = header.offsetHeight;

  if(window.scrollY >= navHeight){
    header.classList.add("scroll");
  }else{
    header.classList.remove("scroll");
  }
}

// Slider
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination:{
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true

});

// ScrollReveal: mostrar elementos quando der scroll na página
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});

scrollReveal.reveal(
  `
    #home .text, #home .image,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .links
    footer .brand, footer .social
  `,
  {interval: 100}
);

// back-to-top
function backToTop(){
  let button = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () =>{
    if(window.scrollY >= 560) button.classList.add('show')
    else  button.classList.remove('show');
  });
}

// menu ativo conforme a seção visível na página
const sections = document.querySelectorAll('section[id]');

function activateMenuAtCurrentSection(){


  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;
  
  for(const section of sections){
    
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    console.log(sectionId);
    
    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;


    console.log(checkpointStart, checkpointEnd, checkpoint)
    
    if(checkpointStart && checkpointEnd){
      document.querySelector(`nav ul li a[href*=${sectionId}]`).classList.add('active');
      console.log(sectionId)
    }else{
      document.querySelector(`nav ul li a[href*=${sectionId}]`).classList.remove('active');
    }
  }
}

// When Scroll
window.addEventListener("scroll", () => {
  changeHeaderWhenScroll();
  backToTop();
  activateMenuAtCurrentSection();
});