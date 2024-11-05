// Example data for each skill (with image paths)
const skillsData = {
    HTML: { title: "HTML", description: "Markup language for creating web pages.", experience: "5 years", image: "image/html.png" },
    CSS: { title: "CSS", description: "Styling language for designing web pages.", experience: "5 years", image: "image/css.png" },
    PHP: { title: "PHP", description: "Server-side scripting language for web development.", experience: "4 years", image: "image/php.png" },
    JavaScript: { title: "JavaScript", description: "Programming language for interactive web pages.", experience: "4 years", image: "image/js.png" },
    Java: { title: "Java", description: "High-level programming language for applications.", experience: "6 years", image: "image/java.png" },
    "C++": { title: "C++", description: "General-purpose programming language.", experience: "2 years", image: "image/c+.png" },
    Python: { title: "Python", description: "High-level programming language for general-purpose programming.", experience: "1 years", image: "image/PY.png" },
    C: { title: "C", description: "General-purpose programming language.", experience: "1 years", image: "image/C.png" },
    Git: { title: "Git", description: "Version control system for tracking changes in source code.", experience: "1 years", image: "image/git.png" },
    GitHub: { title: "GitHub", description: "Hosting service for version control using Git.", experience: "1 years", image: "image/github.png" },
    Mongodb: { title: "Mongodb", description: "NoSQL database program.", experience: "1 year", image: "image/mongodb.png" },
    MySQL: { title: "MySQL", description: "Relational database management system.", experience: "2 years", image: "image/mysql.png" }
};

// Function to show the modal with skill details
function showSkillDetails(skillName) {
    const skill = skillsData[skillName];
    if (skill) {
        document.getElementById("skill-title").innerText = skill.title;
        document.getElementById("skill-description").innerText = skill.description;
        document.getElementById("skill-experience").innerText = skill.experience;
        document.getElementById("skill-image").src = skill.image;
        document.getElementById("skill-modal").style.display = "flex";
    }
}

// Function to close the modal
function closeModal() {
    document.getElementById("skill-modal").style.display = "none";
}

// Add event listeners to skill cards
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('click', function () {
        const skillName = this.innerText.trim(); // Get the skill name
        showSkillDetails(skillName);
    });
});


// Add event listeners to skill cards
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('click', function () {
        const skillName = this.innerText.trim(); // Get the skill name
        showSkillDetails(skillName);
    });
});

// Load header and footer content
function loadHTML(elementId, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading file:', error));
}

// Load header and footer once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Load the header and footer
    loadHTML('header-container', 'header.html');
    loadHTML('footer-container', 'footer.html');

    // Typing animation code
    const options = {
        strings: ["Developer", "Designer", "Problem Solver"],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true,
    };

    new Typed(".typing", options);
});
