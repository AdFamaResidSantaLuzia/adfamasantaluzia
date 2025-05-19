 function openLightbox(imgSrc) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  
  
  document.body.classList.add('lightbox-open');
  
  lightbox.style.display = 'flex';
  lightboxImg.src = imgSrc;
  
  document.body.style.overflow = 'hidden';
  
 
  void lightbox.offsetWidth;
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  
  document.body.classList.remove('lightbox-open');
  
 
  lightbox.style.display = 'none';
  
  
  document.body.style.overflow = 'auto';
}


document.addEventListener('DOMContentLoaded', function() {
  // Close when clicking outside image or on X button
  document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this || e.target.classList.contains('close-btn')) {
      closeLightbox();
    }
  });
  
  // Close with ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.getElementById('lightbox').style.display === 'flex') {
      closeLightbox();
    }
  });
});

// Botão Voltar ao Topo
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  backToTopBtn.classList.toggle('visible', window.scrollY > 300);
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function openLightbox(imgSrc) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const video = document.getElementById('lightbox-video');
  
  // Configura para imagem
  img.src = imgSrc;
  img.style.display = 'block';
  video.style.display = 'none';
  video.src = '';
  
  lightbox.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function openVideoLightbox(videoUrl) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const video = document.getElementById('lightbox-video');
  
  // Configura para vídeo
  video.src = videoUrl;
  video.style.display = 'block';
  img.style.display = 'none';
  
  lightbox.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  const video = document.getElementById('lightbox-video');
  
  lightbox.style.display = 'none';
  video.src = ''; // Para parar o vídeo
  document.body.style.overflow = 'auto';
}

fetch('https://api.countapi.xyz/hit/adfamasantaluzia/homepage')
    .then(response => response.json())
    .then(data => {
      document.getElementById('contador').textContent = data.value;
    });