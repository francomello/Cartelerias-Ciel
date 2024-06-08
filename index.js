document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menuButton");
    const menuContent = document.getElementById("menuContent");
    const items = document.querySelectorAll(".item");
    const overlay = document.getElementById("overlay");
    const closeBtn = document.getElementById("closeBtn");
    const overlayContent = document.getElementById("overlayContent");

    menuButton.addEventListener("click", function() {
        menuContent.classList.toggle("open");
        menuContent.style.display = menuContent.style.display === "block" ? "none" : "block";
    });

    items.forEach(item => {
        item.addEventListener("click", function() {
            const img = this.querySelector("img").outerHTML;
            const title = this.querySelector("h6").outerHTML;
            const text = this.querySelector("p").outerHTML;

            const content = `
                <div class="overlay-image">${img}</div>
                <div class="overlay-text">${title}${text}</div>
            `;

            overlayContent.innerHTML = content;
            overlay.classList.add("active");
        });
    });

    closeBtn.addEventListener("click", function() {
        closeOverlay();
    });

    overlay.addEventListener("click", function(e) {
        if (e.target === overlay) {
            closeOverlay();
        }
    });

    window.addEventListener("scroll", function() {
        if (window.scrollY === 0) {
            closeOverlay();
        }
    });

    function closeOverlay() {
        overlay.classList.remove("active");
        overlayContent.innerHTML = "";
    }

    // Agregar efecto de tipeo
    const text = "Hola!, En Cartelerias Ciel nos dedicamos a diseñar y fabricar los carteles que necesites, a la medida que gustes, con el diseño que prefieras y al mejor precio!";
    const typewriterElement = document.getElementById('typewriter');
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            typewriterElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 45); // Cambia el número para ajustar la velocidad
        }
    }

    typeWriter();
});

(function() {
    emailjs.init("TU_CLAVE_PUBLICA");
})();

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('TU_SERVICIO_ID', 'TU_PLANTILLA_ID', '#contact-form')
        .then(function(response) {
            console.log('Correo enviado con éxito!', response.status, response.text);
        }, function(error) {
            console.log('Error al enviar el correo:', error);
        });
}

function sendWhatsApp() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
  
    const whatsappMessage = `Hola, mi nombre es ${name} y mi número de teléfono es ${phone}. ${message}`;
    const whatsappURL = `https://wa.me/YOUR_PHONE_NUMBER?text=${encodeURIComponent(whatsappMessage)}`;
  
    window.open(whatsappURL, '_blank');
  }
  