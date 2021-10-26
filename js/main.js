//* Código para abrir e fechar o menu do site

const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

toggle.forEach((item) =>{
  item.addEventListener('click', () =>{
    nav.classList.toggle('show')
  })
})

//* código para fechar o menu, quando um item é clicado

const links = document.querySelectorAll('nav ul li a');

links.forEach(item => {
  item.addEventListener('click', () => {
    nav.classList.remove('show')
  });
})