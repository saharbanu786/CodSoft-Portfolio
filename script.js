document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const sectionId = link.getAttribute("href");

            if (sectionId && sectionId.startsWith("#")) { 
                const section = document.querySelector(sectionId);
                
                if (section) {
                    section.scrollIntoView({
                        behavior: "smooth"
                    });
                } else {
                    console.error(`Section ${sectionId} not found.`);
                }
            }
        });
    });
});
