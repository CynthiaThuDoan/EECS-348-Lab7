// script.js

function changeLinkColorOnHover() {
    const emailLink = document.querySelector('a[href="mailto:cynthia23dot@gmail.com"]');
    const githubLink = document.querySelector('a[href="https://github.com/CynthiaThuDoan"]');
  
    emailLink.addEventListener('mouseenter', () => {
      emailLink.style.color = 'blue';
    });
    emailLink.addEventListener('mouseleave', () => {
      emailLink.style.color = ''; 
    });
  
    githubLink.addEventListener('mouseenter', () => {
      githubLink.style.color = 'blue'; 
    });
    githubLink.addEventListener('mouseleave', () => {
      githubLink.style.color = ''; 
    });
  }
  

  document.addEventListener('DOMContentLoaded', changeLinkColorOnHover);
  