document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-bar input');
    const clearIcon = document.querySelector('.search-bar .clear-icon');

    searchInput.addEventListener('input', function() {
        clearIcon.style.display = searchInput.value ? 'block' : 'none';
    });

    clearIcon.addEventListener('click', function() {
        searchInput.value = '';
        clearIcon.style.display = 'none';
        searchInput.focus();
    });

    const newButton = document.querySelector('.left-bar .button');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    newButton.addEventListener('click', function() {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function(event) {
        if (!newButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });

    const filesTab = document.getElementById('files-tab');
    const foldersTab = document.getElementById('folders-tab');
    const filesContent = document.getElementById('files-content');
    const foldersContent = document.getElementById('folders-content');
    
    filesTab.addEventListener('click', function() {
        filesTab.classList.add('active');
        foldersTab.classList.remove('active');
        filesContent.style.display = 'grid';
        foldersContent.style.display = 'none';
        filesTab.querySelector('i').classList.replace('fa-file-zipper', 'fa-check');
        foldersTab.querySelector('i').classList.replace('fa-check', 'fa-folder-open');
    });

    foldersTab.addEventListener('click', function() {
        foldersTab.classList.add('active');
        filesTab.classList.remove('active');
        filesContent.style.display = 'none';
        foldersContent.style.display = 'grid';
        foldersTab.querySelector('i').classList.replace('fa-folder-open', 'fa-check');
        filesTab.querySelector('i').classList.replace('fa-check', 'fa-file-zipper');
    });

    const sections = document.querySelectorAll('.left-bar .section');
    
    sections.forEach(section => {
        section.addEventListener('click', function() {
            sections.forEach(sec => sec.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Set default view
    filesTab.click();

    // Menú desplegable para .small-container
    const icons = document.querySelectorAll('.fa-ellipsis-vertical');

    icons.forEach(icon => {
        icon.addEventListener('click', function(event) {
            event.stopPropagation(); // Evitar que el click se propague

            const container = this.closest('.small-container');
            const menu = container.querySelector('.menu-dropdown');
            
            // Alternar el menú desplegable
            menu.classList.toggle('show');
            
            // Cambiar el color del contenedor
            if (menu.classList.contains('show')) {
                container.classList.add('active');
            } else {
                container.classList.remove('active');
            }
        });
    });

    // Ocultar menú al hacer clic fuera
    document.addEventListener('click', function(event) {
        const openMenus = document.querySelectorAll('.menu-dropdown.show');
        openMenus.forEach(menu => {
            if (!menu.contains(event.target)) {
                menu.classList.remove('show');
                menu.closest('.small-container').classList.remove('active');
            }
        });
    });
});

function toggleMenu(menuId, event) {
    // Prevent the click event from propagating
    event.stopPropagation();

    // Get all dropdown menus
    var menus = document.querySelectorAll('.menu-list');
    // Hide all menus except the one clicked
    menus.forEach(function(menu) {
        if (menu.id !== menuId) {
            menu.style.display = 'none';
        }
    });

    // Get the menu to toggle
    var menu = document.getElementById(menuId);
    // Toggle visibility of the clicked menu
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// Close all dropdowns when clicking outside of them
window.onclick = function(event) {
    if (!event.target.matches('.menu-button')) {
        var menus = document.querySelectorAll('.menu-list');
        menus.forEach(function(menu) {
            menu.style.display = 'none';
        });
    }
};
