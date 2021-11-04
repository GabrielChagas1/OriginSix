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
const header = document.querySelector('#header');

const navHeight = header.offsetHeight;

window.addEventListener("scroll", () => {
  if(window.scrollY >= navHeight){
    header.classList.add("scroll");
  }else{
    header.classList.remove("scroll");
  }
});

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
  `,
  {interval: 100}
)