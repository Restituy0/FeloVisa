// Menú móvil
document.querySelector('.mobile-menu-btn').addEventListener('click', function () {
    // En una implementación real, aquí iría la lógica para mostrar/ocultar el menú móvil.
    // Por ejemplo, podrías añadir/quitar una clase 'active' al nav-links y controlar su display con CSS.
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column'; /* Para que los enlaces se apilen en móvil */
        navLinks.style.position = 'absolute';
        navLinks.style.top = '60px'; /* Ajusta según la altura de tu nav */
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.backgroundColor = 'var(--white)';
        navLinks.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        navLinks.style.padding = '15px 0';
        navLinks.style.alignItems = 'center';
    }
});
// Ocultar menú móvil si se redimensiona a desktop
window.addEventListener('resize', function () {
    const navLinks = document.querySelector('.nav-links');
    if (window.innerWidth >= 768) { // Coincide con el media query de desktop
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'row';
        navLinks.style.position = 'static';
        navLinks.style.boxShadow = 'none';
        navLinks.style.padding = '0';
    } else {
        navLinks.style.display = 'none'; // Ocultar por defecto en móvil si no está activo
    }
});