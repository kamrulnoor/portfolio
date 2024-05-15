document.addEventListener("DOMContentLoaded", function () {
    const textArray = [
        "Crafting innovative solutions by intertwining computer science,",
        "data analytics, business acumen, and intuitive UX/UI design",
        "to address human-centered problems."
    ];
    const typingSpeed = 50; // Adjust typing speed in milliseconds
    const lineDelay = 500; // Delay between lines in milliseconds
    let textIndex = 0;
    let charIndex = 0;

    function typeLine() {
        if (charIndex < textArray[textIndex].length) {
            document.getElementById(`typed-text-${textIndex}`).textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeLine, typingSpeed);
        } else {
            charIndex = 0;
            textIndex++;
            if (textIndex < textArray.length) {
                setTimeout(typeLine, lineDelay);
            } else {
                document.querySelector(".cursor").style.display = "none"; // Hide cursor after typing is done
            }
        }
    }

    typeLine();
});
