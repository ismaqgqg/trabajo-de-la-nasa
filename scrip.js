// Función para abrir página en la misma ventana
function openPage(page) {
    const secciones = document.querySelectorAll(".seccion");
    secciones.forEach(seccion => {
      seccion.style.display = "none";
    });
    document.getElementById(page).style.display = "block";
  }
  
  // Evento para cambiar clase active en el menú
  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        openPage(link.textContent.toLowerCase());
      });
    });
  });
  
  // Evento para mostrar/ocultar menú responsive
  const menuBtn = document.querySelector('.menu-btn');
  const navMenu = document.querySelector('nav ul');
  
  menuBtn.addEventListener('click', function() {
    navMenu.classList.toggle('show');
  });
  
  // Evento para cerrar menú responsive al hacer clic fuera del menú
  document.addEventListener('click', function(event) {
    if (!navMenu.contains(event.target) && !menuBtn.contains(event.target)) {
      navMenu.classList.remove('show');
    }
  });
  
  // Función para agregar evento de scroll suave
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  
  scrollLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const id = link.getAttribute('href').slice(1);
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: 'smooth' });
    });
  });