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


// MODAL
const openModalBtns = document.querySelectorAll(".openModalBtn");
const closeModals = document.querySelectorAll(".close");

openModalBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
  });
});

closeModals.forEach((closeButton) => {
  closeButton.addEventListener("click", () => {
    const modalId = closeButton.parentElement.parentElement.id;
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
  });
});

window.addEventListener("click", (e) => {
  closeModals.forEach((closeButton) => {
    const modalId = closeButton.parentElement.parentElement.id;
    const modal = document.getElementById(modalId);
    
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });
});
// MODAL END



// KELILING
function kelPersegi() {
    // parseFloat = memori sementara
    var nilai1 = parseFloat(document.getElementById("sisiPersegi").value),
        hasil  = 4 * nilai1;
    document.getElementById("hasil_kel_persegi").textContent = hasil;
}
function kelPersegiPanjang() {
    var nilai1 = parseFloat(document.getElementById("panjangPersegi").value),
        nilai2 = parseFloat(document.getElementById("lebarPersegi").value),
        hasil  = 2 * (nilai1 + nilai2);
    document.getElementById("hasil_kel_persegi_panjang").textContent = hasil;
}
function kelLingkaran() {
    var nilai1     = parseFloat(document.getElementById("jari_jari").value),
        hasil      = 2 * 3.14 * nilai1,
        pembulatan = hasil.toFixed(2);
    document.getElementById("hasil_kel_lingkaran").textContent = pembulatan;
}

// LUAS
function luasPersegi() {
    var nilai1 = parseFloat(document.getElementById("luasPersegi").value),
        hasil  = nilai1 * nilai1;
    document.getElementById("hasil_luas_persegi").textContent = hasil;
}
function luasPersegiPanjang() {
    var nilai1 = parseFloat(document.getElementById("panjangPersegiPanjang").value),
        nilai2 = parseFloat(document.getElementById("lebarPersegiPanjang").value),
        hasil  = nilai1 * nilai2;
    document.getElementById("hasil_luas_persegi_panjang").textContent = hasil;
}
function luasLingkaran() {
    var nilai1 = parseFloat(document.getElementById("luas_jari_jari").value),
        hasil  = 3.14 * (nilai1 * nilai1);
    document.getElementById("hasil_luas_lingkaran").textContent = hasil;
}

// VOLUME
function volKubus() {
    var nilai1 = parseFloat(document.getElementById("rusuk_kubus").value),
        hasil  = nilai1 * nilai1 * nilai1;
    document.getElementById("hasil_vol_kubus").textContent = hasil;
}
function volBalok() {
    var nilai1 = parseFloat(document.getElementById("volPanjang").value),
        nilai2 = parseFloat(document.getElementById("volLebar").value),
        nilai3 = parseFloat(document.getElementById("volTinggi").value),
        hasil  = nilai1 * nilai2 * nilai3;
    document.getElementById("hasil_vol_balok").textContent = hasil;
}
function volBola() {
    var nilai1 = parseFloat(document.getElementById("jari_bola").value),
        hasil  = 1.3333 * 3.14 * (nilai1 * nilai1 * nilai1);
        pembulatan = hasil.toFixed(2);
    document.getElementById("hasil_vol_bola").textContent = pembulatan;
}