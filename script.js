const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
});


const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav .container ul li");
    window.onscroll = () => {
        var current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 80) {
                current = section.getAttribute("id");
            }
        });

        navLi.forEach((li) => {
            li.classList.remove("active");
            if (li.classList.contains(current)) {
                li.classList.add("active");
            }
        });
    };





// ==================================

$('video').click(function(){
	// Toggle Magic Here
    this[this.paused ? 'play' : 'pause']();
});

