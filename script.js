document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed(".typing", {
        strings: ["<strong>Web Developer</strong>", "<strong>Programmer</strong>", "<strong>Designer</strong>"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        smartBackspace: true, // Optional: If you want to remove only the last typed string
        contentType: 'html' // Enable HTML rendering
    });
});
