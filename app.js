const STORAGE_KEY = 'modonstore_products_v1';
const WA_NUMBER = '212654283265';
const ADMIN_QUERY_KEY = 'owner';

const defaultProducts = [
  {
    id: 1,
    name: 'Galaxy A55 Smartphone',
    category: 'Phones',
    price: 499,
    oldPrice: 699,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    tag: 'Popular',
    description: '5G-ready smartphone with pro-grade camera and vivid screen.',
    features: ['6.6-inch AMOLED display', '50MP pro camera', '128GB storage', 'Fast charging support']
  },
  {
    id: 2,
    name: 'Aurora Wireless Earbuds',
    category: 'Electronics',
    price: 179,
    oldPrice: 229,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
    tag: 'Hot',
    description: 'Compact audio with deep bass and all-day battery life.',
    features: ['Deep bass sound', 'Up to 30 hours battery', 'Noise reduction', 'Water resistant']
  },
  {
    id: 3,
    name: 'Luna Skin Serum',
    category: 'Cosmetics',
    price: 64,
    oldPrice: 89,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
    tag: 'Best seller',
    description: 'Hydrating serum with niacinamide for brighter, healthier skin.',
    features: ['Hydrating formula', 'Brightening effect', 'Suitable for all skin types', 'Dermatologically tested']
  },
  {
    id: 4,
    name: 'Urban Street Jacket',
    category: 'Clothing',
    price: 149,
    oldPrice: 189,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    tag: 'New',
    description: 'Lightweight everyday jacket designed for comfort and movement.',
    features: ['Premium outer shell', 'Water-resistant finish', 'Comfortable lining', 'Modern street fit']
  },
  {
    id: 5,
    name: 'Minimal Ceramic Set',
    category: 'Home',
    price: 89,
    oldPrice: 120,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
    tag: 'Top rated',
    description: 'Modern dining pieces crafted for elevated everyday living.',
    features: ['Dishwasher safe', 'Minimal design', 'Premium ceramic finish', 'Perfect for daily use']
  },
  {
    id: 6,
    name: 'Glow Ritual Kit',
    category: 'Beauty',
    price: 109,
    oldPrice: 149,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80',
    tag: 'Featured',
    description: 'A complete skincare bundle for dewy, fresh-looking skin.',
    features: ['Cleanser + toner + cream', 'Hydra boosting care', 'Gentle for sensitive skin', 'Daily ritual bundle']
  },
  {
    id: 7,
    name: 'Nova Smartwatch',
    category: 'Accessories',
    price: 239,
    oldPrice: 299,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
    tag: 'Trending',
    description: 'Slim design, fitness tracking, and a premium finish.',
    features: ['Heart rate monitor', 'Fitness tracking', 'Bluetooth and GPS', 'Customizable watch faces']
  },
  {
    id: 8,
    name: 'Essence Lip Collection',
    category: 'Cosmetics',
    price: 52,
    oldPrice: 74,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=900&q=80',
    tag: 'Limited',
    description: 'Vibrant shades with long-wear color and soft hydration.',
    features: ['Soft matte finish', 'Long-wear pigment', 'Comfortable texture', 'Velvet touch']
  },
  {
    id: 9,
    name: 'Flex Running Sneakers',
    category: 'Sports',
    price: 199,
    oldPrice: 249,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    tag: 'Sports',
    description: 'Responsive everyday trainers for movement and comfort.',
    features: ['Lightweight cushioning', 'Breathable mesh', 'Daily wear comfort', 'Street-ready style']
  },
  {
    id: 10,
    name: 'Aero Desk Lamp',
    category: 'Home',
    price: 79,
    oldPrice: 99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    tag: 'Smart',
    description: 'Adjustable lighting designed for focused work and calm evenings.',
    features: ['Adjustable brightness', 'Warm and cool tones', 'Energy efficient', 'Minimal desk design']
  }
];

const cart = [];
let products = loadProducts();
let selectedCategory = 'All';
let isOwnerMode = false;

const categoryTabs = document.getElementById('categoryTabs');
const productGrid = document.getElementById('productGrid');
const sortSelect = document.getElementById('sortSelect');
const cartCount = document.getElementById('cartCount');
const checkoutItems = document.getElementById('checkoutItems');
const subtotalEl = document.getElementById('subtotal');
const shippingEl = document.getElementById('shipping');
const totalPriceEl = document.getElementById('totalPrice');
const summaryCountEl = document.getElementById('summaryCount');
const paymentForm = document.getElementById('paymentForm');
const adminSection = document.getElementById('admin');
const productForm = document.getElementById('productForm');
const adminProductList = document.getElementById('adminProductList');
const resetFormBtn = document.getElementById('resetForm');
const logoutAdminBtn = document.getElementById('logoutAdminBtn');
const productIdInput = document.getElementById('productId');
const productNameInput = document.getElementById('productName');
const productCategoryInput = document.getElementById('productCategory');
const productPriceInput = document.getElementById('productPrice');
const productOldPriceInput = document.getElementById('productOldPrice');
const productRatingInput = document.getElementById('productRating');
const productTagInput = document.getElementById('productTag');
const productImageInput = document.getElementById('productImage');
const productDescriptionInput = document.getElementById('productDescription');
const productModal = document.getElementById('productModal');
const closeModalBtn = document.getElementById('closeModal');
const productDetailContent = document.getElementById('productDetailContent');

function loadProducts() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(stored) && stored.length) {
      return stored;
    }
  } catch (error) {
    console.warn('Could not load products from localStorage', error);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProducts));
  return [...defaultProducts];
}

function saveProducts() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value);
}

function getCategories() {
  return ['All', ...new Set(products.map((product) => product.category))];
}

function getFilteredProducts() {
  let filtered = selectedCategory === 'All'
    ? [...products]
    : products.filter((product) => product.category === selectedCategory);

  const sortValue = sortSelect.value;

  if (sortValue === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortValue === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return filtered;
}

function initializeCategories() {
  const categories = getCategories();

  categoryTabs.innerHTML = categories
    .map((category) => `
      <button
        type="button"
        class="category-btn ${selectedCategory === category ? 'active' : ''}"
        data-category="${category}"
      >
        ${category}
      </button>
    `)
    .join('');

  document.querySelectorAll('.category-btn').forEach((button) => {
    button.addEventListener('click', () => {
      selectedCategory = button.dataset.category;
      initializeCategories();
      renderProducts();
    });
  });
}

function renderProducts() {
  const filteredProducts = getFilteredProducts();

  if (!filteredProducts.length) {
    productGrid.innerHTML = '<p class="empty-state">No products found in this category.</p>';
    return;
  }

  productGrid.innerHTML = filteredProducts
    .map((product) => `
      <article class="product-card">
        <button type="button" class="product-card-btn" data-product-id="${product.id}">
          <div class="product-image-wrap">
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
            <span class="product-tag">${product.tag || 'New'}</span>
          </div>

          <div class="product-info">
            <div class="product-meta">
              <span class="product-category">${product.category}</span>
              <span class="product-rating">★ ${product.rating}</span>
            </div>

            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>

            <div class="product-price-row">
              <strong>${formatCurrency(product.price)}</strong>
              <span>${formatCurrency(product.oldPrice || product.price)}</span>
            </div>
          </div>
        </button>
        <div class="product-info" style="padding-top:0;">
          <button type="button" class="btn btn-primary add-to-cart" data-id="${product.id}">
            Add to cart
          </button>
        </div>
      </article>
    `)
    .join('');

  document.querySelectorAll('.product-card-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = Number(button.dataset.productId);
      openProductDetail(productId);
    });
  });

  document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const productId = Number(button.dataset.id);
      const product = products.find((item) => item.id === productId);
      if (!product) return;

      cart.push(product);
      updateCartUI();
      renderCheckout();
    });
  });
}

function openProductDetail(productId) {
  const product = products.find((item) => item.id === Number(productId));
  if (!product) return;

  const similarProducts = products.filter((item) =>
    item.category === product.category && item.id !== product.id
  ).slice(0, 3);

  productDetailContent.innerHTML = `
    <div class="product-detail-layout">
      <div>
        <img class="product-detail-image" src="${product.image}" alt="${product.name}" />
      </div>
      <div class="product-detail-info">
        <span class="product-detail-category">${product.category}</span>
        <h3 class="product-detail-title">${product.name}</h3>
        <div class="detail-price-row">
          <strong>${formatCurrency(product.price)}</strong>
          <span>${formatCurrency(product.oldPrice || product.price)}</span>
        </div>
        <div class="detail-rating">★ ${product.rating} / 5</div>
        <p class="product-detail-description">${product.description}</p>

        <ul class="feature-list">
          ${(product.features || ['Premium quality', 'Fast shipping', 'Secure checkout']).map((feature) => `<li>${feature}</li>`).join('')}
        </ul>

        <div class="detail-actions">
          <button type="button" class="btn btn-primary add-to-cart" data-id="${product.id}">Add to cart</button>
          <button type="button" class="btn btn-secondary" data-buy-now="${product.id}">Buy now</button>
        </div>

        <div class="detail-card">
          <h4>Why customers love it</h4>
          <p>Premium quality, trusted delivery, and seamless shopping experience from MODONSTORE.</p>
        </div>
      </div>
    </div>

    <div class="detail-card">
      <h4>Similar products</h4>
      <div class="similar-grid">
        ${similarProducts.length ? similarProducts.map((item) => `
          <div class="similar-card">
            <img src="${item.image}" alt="${item.name}" />
            <div class="similar-card-content">
              <h5>${item.name}</h5>
              <p>${formatCurrency(item.price)}</p>
            </div>
          </div>
        `).join('') : '<p>No similar products available right now.</p>'}
      </div>
    </div>
  `;

  productModal.classList.remove('hidden');

  document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', (event) => {
      const productIdFromButton = Number(button.dataset.id);
      const found = products.find((item) => item.id === productIdFromButton);
      if (!found) return;
      cart.push(found);
      updateCartUI();
      renderCheckout();
      productModal.classList.add('hidden');
    });
  });

  document.querySelectorAll('[data-buy-now]').forEach((button) => {
    button.addEventListener('click', () => {
      const productIdFromButton = Number(button.dataset.buyNow);
      const found = products.find((item) => item.id === productIdFromButton);
      if (!found) return;
      cart.push(found);
      updateCartUI();
      renderCheckout();
      productModal.classList.add('hidden');
      document.getElementById('checkout').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function closeProductModal() {
  productModal.classList.add('hidden');
}

function updateCartUI() {
  cartCount.textContent = String(cart.length);
}

function renderCheckout() {
  if (!cart.length) {
    checkoutItems.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
    subtotalEl.textContent = formatCurrency(0);
    shippingEl.textContent = formatCurrency(0);
    totalPriceEl.textContent = formatCurrency(0);
    summaryCountEl.textContent = '0 items';
    return;
  }

  const subtotal = cart.reduce((sum, product) => sum + Number(product.price), 0);
  const shipping = subtotal > 150 ? 0 : 15;
  const total = subtotal + shipping;

  checkoutItems.innerHTML = cart
    .map((product) => `
      <div class="checkout-item">
        <div>
          <h4>${product.name}</h4>
          <small>${product.category}</small>
        </div>
        <strong>${formatCurrency(product.price)}</strong>
      </div>
    `)
    .join('');

  subtotalEl.textContent = formatCurrency(subtotal);
  shippingEl.textContent = formatCurrency(shipping);
  totalPriceEl.textContent = formatCurrency(total);
  summaryCountEl.textContent = `${cart.length} item${cart.length > 1 ? 's' : ''}`;
}

function setCardMasking() {
  const cardNumberInput = paymentForm.querySelector('input[name="cardNumber"]');
  const expiryInput = paymentForm.querySelector('input[name="expiry"]');
  const cvcInput = paymentForm.querySelector('input[name="cvc"]');

  cardNumberInput.addEventListener('input', (event) => {
    const digits = event.target.value.replace(/\D/g, '').slice(0, 16);
    event.target.value = digits.replace(/(.{4})/g, '$1 ').trim();
  });

  expiryInput.addEventListener('input', (event) => {
    let value = event.target.value.replace(/\D/g, '').slice(0, 4);
    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }
    event.target.value = value;
  });

  cvcInput.addEventListener('input', (event) => {
    event.target.value = event.target.value.replace(/\D/g, '').slice(0, 4);
  });
}

function resetProductForm() {
  productIdInput.value = '';
  productNameInput.value = '';
  productCategoryInput.value = '';
  productPriceInput.value = '';
  productOldPriceInput.value = '';
  productRatingInput.value = '4.7';
  productTagInput.value = '';
  productImageInput.value = '';
  productDescriptionInput.value = '';
}

function renderAdminProducts() {
  adminProductList.innerHTML = products
    .map((product) => `
      <div class="admin-product-item">
        <div class="admin-product-details">
          <strong>${product.name}</strong>
          <span>${product.category} • ${formatCurrency(product.price)}</span>
        </div>
        <div class="admin-actions">
          <button type="button" class="mini-btn edit-btn" data-id="${product.id}">Edit</button>
          <button type="button" class="mini-btn delete-btn" data-id="${product.id}">Delete</button>
        </div>
      </div>
    `)
    .join('');

  document.querySelectorAll('.edit-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const product = products.find((item) => item.id === Number(button.dataset.id));
      if (!product) return;

      productIdInput.value = product.id;
      productNameInput.value = product.name;
      productCategoryInput.value = product.category;
      productPriceInput.value = product.price;
      productOldPriceInput.value = product.oldPrice || '';
      productRatingInput.value = product.rating;
      productTagInput.value = product.tag || '';
      productImageInput.value = product.image;
      productDescriptionInput.value = product.description;

      window.location.hash = '#admin';
    });
  });

  document.querySelectorAll('.delete-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = Number(button.dataset.id);
      products = products.filter((product) => product.id !== productId);
      saveProducts();
      initializeCategories();
      renderProducts();
      renderAdminProducts();
    });
  });
}

function handleProductSubmit(event) {
  event.preventDefault();

  const productId = productIdInput.value;
  const productData = {
    id: productId ? Number(productId) : Date.now(),
    name: productNameInput.value.trim(),
    category: productCategoryInput.value.trim(),
    price: Number(productPriceInput.value),
    oldPrice: Number(productOldPriceInput.value || 0),
    rating: Number(productRatingInput.value),
    tag: productTagInput.value.trim() || 'New',
    image: productImageInput.value.trim(),
    description: productDescriptionInput.value.trim(),
    features: [
      'Premium quality',
      'Fast shipping',
      'Secure checkout',
      'Modern design'
    ]
  };

  if (!productData.name || !productData.category || !productData.image || !productData.description) {
    return;
  }

  if (productId) {
    products = products.map((product) =>
      product.id === Number(productId) ? { ...product, ...productData } : product
    );
  } else {
    products.unshift(productData);
  }

  saveProducts();
  initializeCategories();
  renderProducts();
  renderAdminProducts();
  resetProductForm();
}

function enableOwnerMode() {
  isOwnerMode = true;
  adminSection.classList.remove('hidden');
}

function disableOwnerMode() {
  isOwnerMode = false;
  adminSection.classList.add('hidden');
}

function checkOwnerMode() {
  const params = new URLSearchParams(window.location.search);
  const hasOwnerParam = params.get(ADMIN_QUERY_KEY) === '1';
  if (hasOwnerParam) {
    enableOwnerMode();
  } else {
    disableOwnerMode();
  }
}

logoutAdminBtn.addEventListener('click', () => {
  disableOwnerMode();
  const url = new URL(window.location.href);
  url.searchParams.delete(ADMIN_QUERY_KEY);
  window.history.replaceState({}, '', url);
});

paymentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const button = paymentForm.querySelector('button[type="submit"]');
  button.textContent = 'Payment successful';
  button.disabled = true;

  const message = document.createElement('p');
  message.className = 'success-message';
  message.textContent = 'Your payment was processed successfully. Order confirmation is on the way.';
  paymentForm.appendChild(message);
});

productForm.addEventListener('submit', handleProductSubmit);
resetFormBtn.addEventListener('click', resetProductForm);
sortSelect.addEventListener('change', renderProducts);
closeModalBtn.addEventListener('click', closeProductModal);
productModal.addEventListener('click', (event) => {
  if (event.target === productModal) {
    closeProductModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeProductModal();
  }
});

initializeCategories();
renderProducts();
renderCheckout();
renderAdminProducts();
setCardMasking();
updateCartUI();
checkOwnerMode();
resetProductForm();

const waLink = document.querySelector('.whatsapp-float');
if (waLink) {
  waLink.setAttribute('href', `https://wa.me/${WA_NUMBER}`);
}

window.addEventListener('popstate', checkOwnerMode);
