
window.onload = function () {
    var navbar = document.getElementById('navbar');
    if (window.scrollY == 0) {
        navbar.classList.remove('white')
    } else if(window.scrollY > 380) {
        navbar.classList.add('white')
    }
    window.addEventListener('scroll', function (event) {
        if (window.scrollY == 0) {
            navbar.classList.remove('white')
        } else if(window.scrollY > 380) {
            navbar.classList.add('white')
        }
    })
}
