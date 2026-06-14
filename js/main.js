// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
}

// Fermer le menu après clic sur un lien
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
    });
});

// Formulaire de contact (Formspree)
/* const form = document.getElementById('contact-form');
const statusMsg = document.getElementById('form-status');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        statusMsg.textContent = 'Envoi en cours...';
        const formData = new FormData(form);
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                statusMsg.textContent = 'Message envoyé ! Je vous répondrai rapidement.';
                form.reset();
            } else {
                statusMsg.textContent = 'Erreur. Veuillez réessayer ou m’écrire directement à contact@maximilienmaba.com';
            }
        } catch (error) {
            statusMsg.textContent = 'Erreur réseau. Vérifiez votre connexion.';
        }
    });
}*/

// Animation des compteurs
const compteurs = document.querySelectorAll('.chiffre-nombre');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-target'));
            let current = 0;
            const increment = target / 50;
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    el.innerText = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    el.innerText = target;
                    if (el.querySelector('small')) {
                        el.innerHTML = target + '<small>%</small>';
                    }
                }
            };
            updateCounter();
            observer.unobserve(el);
        }
    });
}, { threshold: 0.5 });

compteurs.forEach(c => observer.observe(c));

// Lightbox pour le logo
const logo = document.getElementById('logoClick');
if (logo) {
    logo.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.className = 'modal-logo';
        modal.innerHTML = `
            <span>&times;</span>
            <img src="${logo.src}" alt="Logo agrandi">
        `;
        document.body.appendChild(modal);
        modal.style.display = 'flex';
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('modal-logo') || e.target.tagName === 'SPAN') {
                modal.remove();
            }
        });
    });
}