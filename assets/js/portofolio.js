// untuk swiper majalah other halaman portofolio.index
  var swiper = new Swiper("#majalahCarousel", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  var coverBookSwiper = new Swiper("#CoverbookCarousel", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//   untuk aos
AOS.init();

// untuk tahun di footer
const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;


// untuk icon navbar portofolio 
document.addEventListener("DOMContentLoaded", function () {
const storedCategory = localStorage.getItem("selectedCategory");
if (storedCategory) {
    showImages(storedCategory);
} else {
    showImages("vektor");
}

const links = document.querySelectorAll(".icon-links .nav-link");
links.forEach((link) => {
    if (link.getAttribute("data-page") === storedCategory) {
    link.classList.add("active");
    }
});
});

function showImages(category) {
const imageSets = document.querySelectorAll('[id$="-images"]');
imageSets.forEach((imageSet) => {
    if (imageSet.id === `${category}-images`) {
    imageSet.classList.remove("d-none");
    } else {
    imageSet.classList.add("d-none");
    }
});

const links = document.querySelectorAll(".icon-links .nav-link");
links.forEach((link) => {
    link.classList.remove("active");
});

const activeLink = document.querySelector(`[data-page="${category}"]`);
activeLink.classList.add("active");
localStorage.setItem("selectedCategory", category);
}