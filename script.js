// script.js - Lógica para o tema, animação e carrossel

// Alternador de tema
const themeToggleBtn = document.getElementById('thema-escolhido');
const themeIcon = themeToggleBtn.querySelector('i');

themeToggleBtn.addEventListener('click', () => {
    if (document.body.classList.toggle("light-mode")) {
        themeIcon.classList.remove("fa-regular");
        themeIcon.classList.add("fa-solid");
    } else {
        themeIcon.classList.remove("fa-solid");
        themeIcon.classList.add("fa-regular");
    }
});

// Animação de entrada dos cards (para desktop)
const cards = document.querySelectorAll('.project-cards-desktop .card-container, .project-cards-desktop .card-container2, .project-cards-desktop .card-container3');

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

function handleScrollAnimation() {
    cards.forEach(card => {
        if (isElementInViewport(card)) {
            card.classList.add('show');
        } else {
            card.classList.remove('show');
        }
    });
}

// Chama a função uma vez no carregamento da página
handleScrollAnimation();

// Adiciona o event listener para o scroll
window.addEventListener('scroll', handleScrollAnimation);

// Lógica para o carrossel mobile (agora com looping)
const carouselInner = document.querySelector('.carousel-inner');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const projectCards = document.querySelectorAll('.project-card');

let currentSlide = 0;
const totalSlides = projectCards.length;

function updateCarousel() {
    const offset = -currentSlide * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

// Inicializa o carrossel apenas se a tela for mobile
if (window.innerWidth <= 768) {
    updateCarousel();
}


// Botões de toggle para as descrições
const toggleButtons = document.querySelectorAll('.toggle-description-btn');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const parentContainer = button.closest('.experiencia-container');
        const description = parentContainer.querySelector('.descricao-experiencia');
        
        description.classList.toggle('visivel');
        button.classList.toggle('rotacionar');
    });
});