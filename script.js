const welcomeMessageElement = document.getElementById('Welcome-message');

document.addEventListener('DOMContentLoaded',()=> { 
    //Prompt the user for their name once page loads.

    if (window.prompt)
         { const userName = prompt('What is your name?') || 'Alien';
    welcomeMessageElement.textContent= `Welcome, ${userName}, to the best experience of your life`;
    } 
});


const likeButtons = document.querySelectorAll('Like-button');

likeButtons.forEach(button => {
    button.addEventListener('click',function() {

       const parentSection = this.parentElement;

        const countSpan = parentSection.querySelector('.count');

        let currentCount = parseInt(countSpan.textContent);

        currentCount++;

        countSpan.textContent = currentCount;
          });
    });





