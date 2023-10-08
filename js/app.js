// Mengambil elemen menu
const contactMenuItem = document.querySelector('.navbar-item-contact');

// Menambahkan event listener untuk menu kontak
contactMenuItem.addEventListener('click', () => {
    loadContactPage(); // Memuat halaman kontak
});

// Fungsi untuk memuat halaman kontak sebagai Micro Frontend
const loadContactPage = async () => {
    const response = await fetch('pages/contact.html');
    const contactPageHTML = await response.text();
    document.querySelector('.container.has-text-centered').innerHTML = contactPageHTML;
};

// Mengambil elemen menu Home
const homeMenuItem = document.querySelector('.navbar-item-home');

// Menambahkan event listener untuk menu Home
homeMenuItem.addEventListener('click', () => {
    navigateToHomePage(); // Melakukan navigasi ke halaman utama
});

// Fungsi untuk melakukan navigasi ke halaman utama
const navigateToHomePage = () => {
    window.location.href = 'index.html'; // Mengganti URL ke halaman utama
};
