const STORAGE_KEY = 'modonstore_products_v1';
const WA_NUMBER = '212654283265';

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
    description: '5G-ready smartphone with pro-grade camera and vivid screen.'
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
    description: 'Compact audio with deep bass and all-day battery life.'
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
    description: 'Hydrating serum with niacinamide for brighter, healthier skin.'
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
    description: 'Lightweight everyday jacket designed for comfort and movement.'
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
    description: 'Modern dining pieces crafted for elevated everyday living.'
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
    description: 'A complete skincare bundle for dewy, fresh-looking skin.'
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
    description: 'Slim design, fitness tracking, and a premium finish.'
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
    description: 'Vibrant shades with long-wear color and soft hydration.'
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
    description: 'Responsive everyday trainers for movement and comfort.'
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
    description: 'Adjustable lighting designed for focused work and calm evenings.'
  }
];

const cart = [];
let products = loadProducts();
let selectedCategory = 'All';

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
const productForm = document.getElementById('productForm');
const adminProductList = document.getElementById('adminProductList');
const resetFormBtn = document.getElementById('resetForm');

function loadProducts() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(stored) && stored.length) {
      return stored;
    }
  } catch (error) {
    console.warn('Could not load stored products:', error);
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
  let filtered =
    selectedCategory === 'All'
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
    .map(
      (category) => `
        <button
          type="button"
          class="category-btn ${selectedCategory === category ? 'active' : ''}"
          data-category="${category}"
        >
          ${category}
        </button>
      `
    )
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
    .map(
      (product) => `
        <article class="product-card" aria-label="${product.name}">
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

            <div class="price-row product-price-row">
              <strong>${formatCurrency(product.price)}</strong>
              <span>${formatCurrency(product.oldPrice || product.price)}</span>
            </div>

            <button type="button" class="btn btn-primary add-to-cart" data-id="${product.id}">
              Add to cart
            </button>
          </div>
        </article>
      `
    )
    .join('');

  document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = Number(button.dataset.id);
      const product = products.find((item) => item.id === productId);
      if (!product) return;

      cart.push(product);
      updateCartUI();
      renderCheckout();
    });
  });
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
    .map(
      (product) => `
        <div class="checkout-item">
          <div>
            <h4>${product.name}</h4>
            <small>${product.category}</small>
          </div>
          <strong>${formatCurrency(product.price)}</strong>
        </div>
      `
    )
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
  document.getElementById('productId').value = '';
  document.getElementById('productName').value = '';
  document.getElementById('productCategory').value = '';
  document.getElementById('productPrice').value = '';
  document.getElementById('productOldPrice').value = '';
  document.getElementById('productRating').value = '4.7';
  document.getElementById('productTag').value = '';
  document.getElementById('productImage').value = '';
  document.getElementById('productDescription').value = '';
}

function renderAdminProducts() {
  adminProductList.innerHTML = products
    .map(
      (product) => `
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
      `
    )
    .join('');

  document.querySelectorAll('.edit-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const product = products.find((item) => item.id === Number(button.dataset.id));
      if (!product) return;

      document.getElementById('productId').value = product.id;
      document.getElementById('productName').value = product.name;
      document.getElementById('productCategory').value = product.category;
      document.getElementById('productPrice').value = product.price;
      document.getElementById('productOldPrice').value = product.oldPrice || '';
      document.getElementById('productRating').value = product.rating;
      document.getElementById('productTag').value = product.tag || '';
      document.getElementById('productImage').value = product.image;
      document.getElementById('productDescription').value = product.description;

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

  const productId = document.getElementById('productId').value;
  const productData = {
    id: productId ? Number(productId) : Date.now(),
    name: document.getElementById('productName').value.trim(),
    category: document.getElementById('productCategory').value.trim(),
    price: Number(document.getElementById('productPrice').value),
    oldPrice: Number(document.getElementById('productOldPrice').value || 0),
    rating: Number(document.getElementById('productRating').value),
    tag: document.getElementById('productTag').value.trim() || 'New',
    image: document.getElementById('productImage').value.trim(),
    description: document.getElementById('productDescription').value.trim()
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

initializeCategories();
renderProducts();
renderCheckout();
renderAdminProducts();
setCardMasking();
updateCartUI();
resetProductForm();

const waLink = document.querySelector('.whatsapp-float');
if (waLink) {
  waLink.setAttribute('href', `https://wa.me/${WA_NUMBER}`);
}
