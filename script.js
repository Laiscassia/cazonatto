document.querySelectorAll('.gallery-item').forEach(item => {
    const img = item.querySelector('img');
    const hoverImage = item.getAttribute('data-hover');

    // Adiciona eventos de mouseover e mouseout
    item.addEventListener('mouseover', () => {
        img.style.opacity = '0'; // Torna a imagem original invisível
        item.style.backgroundImage = `url(${hoverImage})`; // Define a imagem de hover
        item.style.backgroundSize = 'cover'; // Ajusta o tamanho da imagem
    });

    item.addEventListener('mouseout', () => {
        img.style.opacity = '1'; // Torna a imagem original visível
        item.style.backgroundImage = 'none'; // Remove a imagem de hover
    });
});

// Função para trocar as imagens do carrossel
function changeProductCarousel(direction, index) {
    const carousel = document.getElementById(`carousel-${index}`);
    const totalImages = carousel.children.length;
    const currentTransform = parseInt(getComputedStyle(carousel).transform.split(',')[4]) || 0;
    const imageWidth = carousel.children[0].clientWidth;
    const newTransform = currentTransform + (direction * imageWidth);
    
    if (newTransform > 0) {
        carousel.style.transform = `translateX(-${(totalImages - 1) * imageWidth}px)`;
    } else if (newTransform < -(imageWidth * (totalImages - 1))) {
        carousel.style.transform = `translateX(0)`;
    } else {
        carousel.style.transform = `translateX(${newTransform}px)`;
    }
}
