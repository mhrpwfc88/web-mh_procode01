// JavaScript untuk toggling menu mobile
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  console.log('Tombol menu diklik'); // Tambahkan ini untuk debugging
  mobileMenu.classList.toggle('hidden');
});
