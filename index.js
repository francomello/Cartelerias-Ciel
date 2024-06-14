document.addEventListener('DOMContentLoaded', function () {
  // Inicializar EmailJS
  emailjs.init("USbBDU2JCWnAG9EWY");

  // Manejar las tarjetas
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
      const cardId = card.getAttribute('data-card-id');
      const overlay = document.getElementById(`overlay-${cardId}`);
      const close = document.querySelector(`#close-${cardId}[data-close-id="${cardId}"]`);

      if (overlay && close) {
          card.addEventListener('click', function () {
              overlay.style.display = 'flex';
          });

          close.addEventListener('click', function () {
              overlay.style.display = 'none';
          });

          overlay.addEventListener('click', function (e) {
              if (e.target === overlay) {
                  overlay.style.display = 'none';
              }
          });
      }
  });

  // Manejar el botón de menú
  const menuButton = document.getElementById('menuButton');
  const menuContent = document.getElementById('menuContent');

  menuButton.addEventListener('click', function () {
      menuContent.classList.toggle('show');
  });

  // Cerrar overlay al hacer scroll
  window.addEventListener("scroll", function () {
      if (window.scrollY === 0) {
          closeOverlay();
      }
  });

  function closeOverlay() {
      const overlays = document.querySelectorAll('.overlay');
      overlays.forEach(overlay => {
          overlay.style.display = 'none';
      });
  }

  // Agregar efecto de tipeo
  const text = "Hola!, En Cartelerias Ciel nos dedicamos a diseñar y fabricar los carteles que necesites, a la medida que gustes, con el diseño que prefieras y al mejor precio!";
  const typewriterElement = document.getElementById("typewriter");
  let index = 0;

  function typeWriter() {
      if (index < text.length) {
          typewriterElement.innerHTML += text.charAt(index);
          index++;
          setTimeout(typeWriter, 20); // Cambia el número para ajustar la velocidad
      }
  }

  typeWriter();

  // Manejar el envío del formulario
  document.getElementById('contact-form').addEventListener('submit', sendEmail);

  function sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm("service_0m9gjyb", "template_w2v53j9", "#contact-form").then(
          function (response) {
              console.log("Correo enviado con éxito!", response.status, response.text);
              alert('Email enviado con éxito!');
              document.getElementById('contact-form').reset(); // Limpiar el formulario después de enviar
          },
          function (error) {
              console.log("Error al enviar el correo:", error);
              alert('Error al enviar el email. Por favor, inténtalo de nuevo más tarde.');
          }
      );
  }

  // Flecha de desplazamiento
  const arrow = document.getElementById('arrow');

  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
          arrow.style.opacity = '0';
      } else {
          arrow.style.opacity = '1';
      }
  });
});
