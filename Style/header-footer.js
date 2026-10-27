(function () {
    var menu = document.getElementById('menu');
    var overlay = document.getElementById('menuOverlay');
    var menuOpen = document.getElementById('menuOpen');
    var menuClose = document.getElementById('menuClose');

    function openMenu() { menu.classList.add('active'); overlay.classList.add('active'); }
    function closeMenu() { menu.classList.remove('active'); overlay.classList.remove('active'); }

    menuOpen.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    window.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu();
    });
})();
