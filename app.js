

const navButtons = document.querySelectorAll(".right-option");

navButtons.forEach(button => {
    button.addEventListener("click", () => {

        const text = button.innerText.toLowerCase();

        if (text === "home") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

        else if (text === "about us") {
            document.querySelector(".about-us-main")
                .scrollIntoView({ behavior: "smooth" });
        }

        else if (text === "notes") {
            document.querySelector(".boxes")
                .scrollIntoView({ behavior: "smooth" });
        }

        else if (text === "contact us") {
            document.querySelector(".footer")
                .scrollIntoView({ behavior: "smooth" });
        }

        else if (text === "videos") {
            alert("Videos section coming soon!");
        }
    });
});




const exploreBtn = document.querySelector(".primary");
const learnBtn = document.querySelector(".secondary");

exploreBtn.addEventListener("click", () => {
    document.querySelector(".boxes")
        .scrollIntoView({ behavior: "smooth" });
});

learnBtn.addEventListener("click", () => {
    document.querySelector(".about-us-main")
        .scrollIntoView({ behavior: "smooth" });
});




const buyButtons = document.querySelectorAll(".btn");

buyButtons.forEach(button => {
    if (button.innerText === "Buy now") {

        button.addEventListener("click", () => {
            alert("Thank you for your interest! Contact us on WhatsApp to purchase notes.");
        });

    }
});




const boxes = document.querySelectorAll(".box1");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});

boxes.forEach(box => {
    box.style.opacity = "0";
    box.style.transform = "translateY(30px)";
    box.style.transition = "0.6s ease";

    observer.observe(box);
});



const footerText = document.querySelector(".four p");

footerText.innerHTML =
`© ${new Date().getFullYear()} TMR Basics. Founded by Tarendra Rahangdale.`;