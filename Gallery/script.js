// ===== DOM Elements =====
const galleryGrid = document.getElementById('galleryGrid');
const galleryLoader = document.getElementById('galleryLoader');
const endMessage = document.getElementById('endMessage');
const endText = document.getElementById('endText');
const photoCount = document.getElementById('photoCount');
const filterButtons = document.querySelectorAll('.filter-btn');

// Lightbox elements
const lightbox = document.getElementById('lightbox');
const lightboxBackdrop = document.getElementById('lightboxBackdrop');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxCategory = document.getElementById('lightboxCategory');
const lightboxDate = document.getElementById('lightboxDate');
const lightboxDescription = document.getElementById('lightboxDescription');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const mobilePrev = document.getElementById('mobilePrev');
const mobileNext = document.getElementById('mobileNext');

// ===== State =====
let activeCategory = 'All';
let filteredItems = [...galleryItems];
let visibleCount = 12;
let isLoading = false;
let selectedIndex = -1;

// ===== Initialize =====
function init() {
  renderGallery();
  setupFilterListeners();
  setupLightboxListeners();
  setupInfiniteScroll();
  updatePhotoCount();
}

// ===== Filter Functions =====
function setupFilterListeners() {
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;
      setActiveCategory(category);
    });
  });
}

function setActiveCategory(category) {
  activeCategory = category;
  
  // Update button states
  filterButtons.forEach(btn => {
    const isActive = btn.dataset.category === category;
    btn.classList.toggle('filter-btn-active', isActive);
    btn.setAttribute('aria-selected', isActive);
  });
  
  // Filter items
  filteredItems = category === 'All' 
    ? [...galleryItems] 
    : galleryItems.filter(item => item.category === category);
  
  // Reset and re-render
  visibleCount = 12;
  galleryGrid.innerHTML = '';
  renderGallery();
  updatePhotoCount();
  updateEndMessage();
}

function updatePhotoCount() {
  const categoryText = activeCategory === 'All' ? 'total' : activeCategory;
  photoCount.textContent = `${filteredItems.length} photos in ${categoryText}`;
}

// ===== Gallery Rendering =====
function renderGallery() {
  const itemsToShow = filteredItems.slice(0, visibleCount);
  const existingCount = galleryGrid.children.length;
  
  itemsToShow.slice(existingCount).forEach((item, index) => {
    const card = createGalleryCard(item, existingCount + index);
    galleryGrid.appendChild(card);
  });
  
  updateEndMessage();
}

function createGalleryCard(item, index) {
  const article = document.createElement('article');
  article.className = `gallery-card ${item.aspectRatio === 'portrait' ? 'portrait' : ''}`;
  article.style.animationDelay = `${(index % 12) * 100}ms`;
  article.setAttribute('role', 'button');
  article.setAttribute('tabindex', '0');
  article.setAttribute('aria-label', `View ${item.title}`);
  
  article.innerHTML = `
    <div class="gallery-card-skeleton"></div>
    <img 
      src="${item.imageUrl}" 
      alt="${item.title}"
      class="gallery-card-image"
      loading="lazy"
      style="opacity: 0;"
    >
    <div class="gallery-card-overlay"></div>
    <span class="tag-badge">${item.category}</span>
    <div class="gallery-card-content">
      <h3 class="gallery-card-title">${item.title}</h3>
      <div class="gallery-card-date">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        <span>${item.date}</span>
      </div>
    </div>
    <div class="gallery-card-gradient"></div>
  `;
  
  // Handle image load
  const img = article.querySelector('img');
  const skeleton = article.querySelector('.gallery-card-skeleton');
  
  img.onload = () => {
    img.style.opacity = '1';
    skeleton.style.display = 'none';
  };
  
  // Click handler
  article.addEventListener('click', () => openLightbox(item));
  article.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openLightbox(item);
    }
  });
  
  return article;
}

// ===== Infinite Scroll =====
function setupInfiniteScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !isLoading && visibleCount < filteredItems.length) {
        loadMore();
      }
    });
  }, { rootMargin: '200px' });
  
  observer.observe(galleryLoader);
}

function loadMore() {
  if (isLoading || visibleCount >= filteredItems.length) return;
  
  isLoading = true;
  galleryLoader.classList.remove('hidden');
  
  // Simulate network delay
  setTimeout(() => {
    visibleCount = Math.min(visibleCount + 12, filteredItems.length);
    renderGallery();
    isLoading = false;
    
    if (visibleCount >= filteredItems.length) {
      galleryLoader.classList.add('hidden');
    }
  }, 500);
}

function updateEndMessage() {
  const hasMore = visibleCount < filteredItems.length;
  
  if (hasMore) {
    endMessage.style.display = 'none';
    galleryLoader.classList.remove('hidden');
  } else {
    galleryLoader.classList.add('hidden');
    endMessage.style.display = 'flex';
    endText.textContent = `You've seen all photos`;
  }
}

// ===== Lightbox =====
function setupLightboxListeners() {
  lightboxBackdrop.addEventListener('click', closeLightbox);
  lightboxClose.addEventListener('click', closeLightbox);
  
  lightboxPrev.addEventListener('click', showPrevious);
  lightboxNext.addEventListener('click', showNext);
  mobilePrev.addEventListener('click', showPrevious);
  mobileNext.addEventListener('click', showNext);
  
  document.addEventListener('keydown', handleKeydown);
}

function handleKeydown(e) {
  if (!lightbox.classList.contains('active')) return;
  
  switch (e.key) {
    case 'Escape':
      closeLightbox();
      break;
    case 'ArrowLeft':
      showPrevious();
      break;
    case 'ArrowRight':
      showNext();
      break;
  }
}

function openLightbox(item) {
  selectedIndex = filteredItems.findIndex(i => i.id === item.id);
  updateLightboxContent(item);
  updateNavigationButtons();
  
  lightbox.classList.add('active');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  selectedIndex = -1;
}

function updateLightboxContent(item) {
  lightboxImage.src = item.imageUrl;
  lightboxImage.alt = item.title;
  lightboxTitle.textContent = item.title;
  lightboxCategory.textContent = item.category;
  lightboxDate.textContent = item.date;

  // 🔥 USE DESCRIPTION AS LINK
  if (item.description && item.description.startsWith("http")) {
    lightboxDescription.href = item.description;
    lightboxDescription.style.display = "inline-flex";
  } else {
    lightboxDescription.style.display = "none";
  }
}


function updateNavigationButtons() {
  const hasPrev = selectedIndex > 0;
  const hasNext = selectedIndex < filteredItems.length - 1;
  
  lightboxPrev.disabled = !hasPrev;
  lightboxNext.disabled = !hasNext;
  mobilePrev.disabled = !hasPrev;
  mobileNext.disabled = !hasNext;
}

function showPrevious() {
  if (selectedIndex > 0) {
    selectedIndex--;
    updateLightboxContent(filteredItems[selectedIndex]);
    updateNavigationButtons();
  }
}

function showNext() {
  if (selectedIndex < filteredItems.length - 1) {
    selectedIndex++;
    updateLightboxContent(filteredItems[selectedIndex]);
    updateNavigationButtons();
  }
}

// ===== Start =====
document.addEventListener('DOMContentLoaded', init);
