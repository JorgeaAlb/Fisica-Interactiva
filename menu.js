
    // Menú hamburguesa
    document.querySelector('.hamburger-btn').addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en enlaces (solo en móvil)
    document.querySelectorAll('nav ul li a').forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                document.querySelector('nav ul').classList.remove('active');
            }
        });
    });
