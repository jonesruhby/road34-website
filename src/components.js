
export function renderNav() {
  const header = document.getElementById('global-header');
  if (!header) return;

  const currentPath = window.location.pathname;
  const isHome = currentPath.endsWith('index.html') || currentPath === '/';
  const isShop = currentPath.endsWith('shop.html');
  const isSpecials = currentPath.endsWith('specials.html');
  const isContact = currentPath.endsWith('contact.html');

  header.innerHTML = `
    <nav>
      <div class="container">
        <div class="brand">
          <a href="/index.html" class="logo">
            <img src="images/road34-logo.jpg" alt="Road 34 Logo" class="nav-logo-img">
            <span>ROAD 34</span>
          </a>
        </div>
        <ul class="nav-links">
          <li><a href="/index.html" class="${isHome ? 'active' : ''}">The Hub</a></li>
          <li><a href="/shop.html" class="${isShop ? 'active' : ''}">Bike Shop</a></li>
          <li><a href="/specials.html" class="${isSpecials ? 'active' : ''}">Menu & Specials</a></li>
          <li><a href="/contact.html" class="${isContact ? 'active' : ''}">Contact</a></li>
        </ul>
      </div>
    </nav>
  `;
}

export function renderFooter() {
  const footer = document.getElementById('global-footer');
  if (!footer) return;

  footer.innerHTML = `
    <div class="container footer-content">
      <div class="footer-info">
        <h3>Road 34</h3>
        <p><i class="ph ph-map-pin"></i> 1213 W Elizabeth St</p>
        <p><a href="mailto:bikeshop@road34.com" class="accent-link"><i class="ph ph-envelope"></i> bikeshop@road34.com</a></p>
      </div>
      <div class="footer-social">
        <a href="https://instagram.com/road34bikeshop" target="_blank">@road34bikeshop</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; ${new Date().getFullYear()} Road 34. All rights reserved.</p>
    </div>
  `;
}
