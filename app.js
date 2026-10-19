const products = [
  {
    id: 1,
    name: 'Galaxy A55 Smartphone',
    category: 'Phones',
    price: 499,
    oldPrice: 699,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
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
    image:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
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
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
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
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
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
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
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
    image:
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80',
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
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
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
    image:
      'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=900&q=80',
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
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
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
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    tag: 'Smart',
    description: 'Adjustable lighting designed for focused work and calm evenings.'
  },
  {
    id: 11,
    name: 'Echo Bluetooth Speaker',
    category: 'Electronics',
    price: 129,
    oldPrice: 179,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=900&q=80',
    tag: 'Deal',
    description: 'Portable sound with rich depth, deep bass, and wireless setup.'
  },
  {
    id: 12,
    name: 'Classic Cotton Shirt',
    category: 'Clothing',
    price: 69,
    oldPrice: 95,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
    tag: 'Classic',
    description: 'Premium cotton shirt with a relaxed fit and polished finish.'
  },
  {
    id: 13,
    name: 'Pro Camera Lens Kit',
    category: 'Accessories',
    price: 299,
    oldPrice: 389,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=80',
    tag: 'New',
    description: 'Create crisp images with premium optics built for mobile creators.'
  },
  {
    id: 14,
    name: 'Velvet Beauty Set',
    category: 'Beauty',
    price: 96,
    oldPrice: 130,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    tag: 'Gift set',
    description: 'Luxury beauty essentials for a polished daily routine.'
  },
  {
    id: 15,
    name: 'Apex Leather Backpack',
    category: 'Accessories',
    price: 159,
    oldPrice: 219,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
    tag: 'Travel',
    description: 'Structured everyday carry with premium texture and smart storage.'
  },
  {
    id: 16,
    name: 'Solis Phone Stand',
    category: 'Electronics',
    price: 45,
    oldPrice: 69,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
    tag: 'Essential',
    description: 'Adjustable stand for home office setups and hands-free viewing.'
  }
];

const categories = ['All', ...new Set(products.map((product) => product.category))];
const cart = [];

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

let selectedCategory = 'All';

function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value);
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
            <span class="product-tag">${product.tag}</span>
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
  const totalItems = cart.length;
  cartCount.textContent = totalItems;
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

  const subtotal = cart.reduce((sum, product) => sum + product.price, 0);
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

sortSelect.addEventListener('change', renderProducts);

initializeCategories();
renderProducts();
renderCheckout();
setCardMasking();
updateCartUI();



































































































































