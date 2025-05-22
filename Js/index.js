// Configurações da galeria
let galleryImages = [];
let currentImageIndex = 0;

// Funções do Lightbox
function openLightbox(imgSrc) {
  galleryImages = Array.from(document.querySelectorAll('.gallery-item')).map(item => 
    item.onclick.toString().match(/'([^']+)'/)[1]
  );
  currentImageIndex = galleryImages.indexOf(imgSrc);
  
  document.getElementById('lightbox-img').src = imgSrc;
  document.getElementById('lightbox').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function navigateGallery(direction) {
  currentImageIndex = (currentImageIndex + direction + galleryImages.length) % galleryImages.length;
  document.getElementById('lightbox-img').src = galleryImages[currentImageIndex];
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Lightbox
  document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.classList.contains('close-btn') || e.target === document.getElementById('lightbox')) {
      closeLightbox();
    }
  });

  // Teclado
  document.addEventListener('keydown', (e) => {
    if (document.getElementById('lightbox').style.display === 'flex') {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateGallery(-1);
      if (e.key === 'ArrowRight') navigateGallery(1);
    }
  });

  // Botão "Voltar ao Topo"
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      backToTopBtn.classList.toggle('visible', window.scrollY > 300);
    });
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});