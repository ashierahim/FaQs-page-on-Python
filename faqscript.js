function toggleMenu() {
    var menuContainer = document.querySelector('.menu-container');
    menuContainer.classList.toggle('active');
}
const faqs = document.querySelectorAll(".faq")

faqs.forEach((faq) => {
    faq.addEventListener("click", function() {
       
        faq.classList.toggle("active");
    });
});