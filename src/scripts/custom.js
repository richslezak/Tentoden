// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap/js/dist/collapse.js';
import 'bootstrap/js/dist/dropdown.js';
import 'bootstrap/js/dist/offcanvas.js';
import 'bootstrap/js/dist/carousel.js';

const elements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('in-view', entry.isIntersecting);
    if (entry.isIntersecting) observer.unobserve(entry.target);
  });
});

elements.forEach((element) => {
  observer.observe(element);
});
