// Navbar
const Navbar          = document.querySelector(".navbar"),
      NavbarBrand     = document.querySelector(".navbar-brand"),
      NavbarItems     = document.querySelector(".links"),
      NavDropdownMenu = document.querySelector(".navbar_2"),
      HamburgerMenu   = document.querySelector(".toggle_btn i");


window.addEventListener("scroll", () => {
    if(window.pageYOffset > 0.1) {
        NavDropdownMenu.classList.add("fixed-top");
        NavbarBrand.classList.add("text-color");
        NavbarItems.classList.add("text-color");
        Navbar.classList.add("fixed-top", "background");
        HamburgerMenu.classList.add("text-color");

        const navItems = NavbarItems.querySelectorAll("a");
        for (let item of navItems) {
            item.classList.add("text-color");
        }
    }
    else {
        Navbar.classList.remove("fixed-top", "background");
        NavbarBrand.classList.remove("text-color");
        HamburgerMenu.classList.remove("text-color");

        const navItems = NavbarItems.querySelectorAll("a");
        for (let item of navItems) {
            item.classList.remove("text-color");
        }
    }
});



// Navbar Active
const menuItems = document.querySelectorAll('nav ul li a');


// jika nav items diclick
menuItems.forEach(item => {
    item.addEventListener('click', function() {
    // Menghapus kelas "active" dari semua elemen menu
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Menambahkan kelas "active" pada elemen menu yang diklik
    this.classList.add('active');
    });

});

const menuItemsHp = document.querySelectorAll('nav li a');

// jika nav items diclick
menuItemsHp.forEach(item => {
    item.addEventListener('click', function() {
    // Menghapus kelas "active" dari semua elemen menu
    menuItemsHp.forEach(item => {
        item.classList.remove('active');
    });
    
    // Menambahkan kelas "active" pada elemen menu yang diklik
    this.classList.add('active');
    });

});

// Navbar Active End


// Hamburger Menu
const toggleBtn     = document.querySelector(".toggle_btn"),
      toggleBtnIcon = document.querySelector(".toggle_btn i"),
      dropDownMenu  = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle("open")
    const isOpen = dropDownMenu.classList.contains("open")

    toggleBtnIcon.classList = isOpen
    ? "fa-solid fa-xmark text-color"
    : "fa-solid fa-bars-staggered text-color"
}

// Hamburger Menu End
// Navbar End