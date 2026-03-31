let currentShop = 'house';

/* ---- page switching ---- */
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('subnav').classList.remove('visible');

  if (page === 'shop') {
    showShop(currentShop);
    return;
  }
  const map = { home: 'page-home', brand: 'page-brand', location: 'page-location' };
  if (map[page]) document.getElementById(map[page]).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showShop(tab) {
  currentShop = tab;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('subnav').classList.add('visible');
  document.querySelectorAll('.subnav a').forEach(a => a.classList.remove('active'));

  const pages  = { house: 'page-house', limited: 'page-limited', merch: 'page-merch' };
  const tabIds = { house: 'tab-house',  limited: 'tab-limited',  merch: 'tab-merch' };

  if (pages[tab]) document.getElementById(pages[tab]).classList.add('active');
  if (tabIds[tab]) document.getElementById(tabIds[tab]).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---- hamburger ---- */
function toggleMenu() {
  const ham  = document.getElementById('ham');
  const menu = document.getElementById('mob-menu');
  ham.classList.toggle('open');
  menu.classList.toggle('open');
}

function closeMenu() {
  document.getElementById('ham').classList.remove('open');
  document.getElementById('mob-menu').classList.remove('open');
}

/* ---- cart toast ---- */
function addCart(name) {
  const notif = document.getElementById('notif');
  notif.textContent = `✓  ${name} added to cart`;
  notif.classList.add('show');
  setTimeout(() => notif.classList.remove('show'), 2400);
}

/* start */
showPage('shop');