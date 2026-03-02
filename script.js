document.addEventListener('DOMContentLoaded', () => {

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(section => {
        section.classList.add("hidden");
        observer.observe(section);
    });



    /*  ACTIVE NAVBAR LINK */

    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Default jump ko rokta hai

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 80; // navbar height
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth' // Smooth scroll effect
                });
            }
        });
    });

    document.getElementById("year").textContent = new Date().getFullYear();

});

/*Toggle*/
const toggle = document.getElementById("toggleBtn");
const nav = document.getElementById("navMenu");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        toggle.textContent = "✖";
    } else {
        toggle.textContent = "☰";
    }
});

/* link click pe close */
document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        toggle.textContent = "☰";
    });
});

/* Form Veledation */

const contactform = document.getElementById('contactform');
const errormsg = document.getElementById('error-msg');

contactform.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        errorDisplay.innerText = "Fill All Fields";
        errorDisplay.style.display = "block";

    } else {
        errorDisplay.style.display = "none";
        alert("Thank You! Your message Submit");
    }

});

