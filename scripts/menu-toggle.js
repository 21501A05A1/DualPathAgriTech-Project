document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.querySelector('nav ul');
    const menuClose = document.getElementById('menu-close');
    const navItems = document.querySelectorAll('nav ul li');

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('show');
    });

    menuClose.addEventListener('click', function() {
        navList.classList.remove('show');
    });

    // Handle dropdown in mobile view
    navItems.forEach(item => {
        item.addEventListener('click', function(event) {
            // Close other dropdowns if open
            navItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('show-dropdown');
                }
            });

            // Toggle the clicked item's dropdown
            item.classList.toggle('show-dropdown');
            event.stopPropagation();
        });
    });

    // Close dropdowns if clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav')) {
            navItems.forEach(item => {
                item.classList.remove('show-dropdown');
            });
        }
    });
});
