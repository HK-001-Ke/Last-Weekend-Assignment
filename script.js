
// Select all cards
const cards = document.querySelectorAll(".likes");

cards.forEach((card, index) => {
    const btn = card.querySelector(".Like-button");
    const countSpan = card.querySelector(".count");

    // Create a unique storage key for every card
    const storageKey = `likes_card_${index}`;

    // Load saved likes
    let likes = localStorage.getItem(storageKey)
        ? parseInt(localStorage.getItem(storageKey))
        : 0;

    // Display saved likes on load
    countSpan.textContent = likes;

    // When clicking the like button
    btn.addEventListener("click", () => {
        likes++;
        countSpan.textContent = likes;

        // Save new value
        localStorage.setItem(storageKey, likes);
    });
});

const welcomeMessageElement = document.getElementById('Welcome-Message');

        document.addEventListener('DOMContentLoaded', () => {
            // Prompt the user for their name when the page loads
            
            if (window.prompt) {
                const userName = prompt('What is your name?') || 'Alien'; // Set username as 'Alien' if they cancel.
                welcomeMessageElement.textContent = `✨Welcome, ${userName}, to The BEST Experience of your life.✨✨`;
            }
        });
        


    



