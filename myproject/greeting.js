// Function to determine the greeting based on the current time of day
function generateGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greetingMessage = '';

    // Determine the time of day and set the greeting message
    if (hours < 12) {
        greetingMessage = 'Good Morning!';
    } else if (hours < 18) {
        greetingMessage = 'Good Afternoon!';
    } else {
        greetingMessage = 'Good Evening!';
    }

    // Display the greeting message in the 'greeting' section
    const greetingElement = document.getElementById('greeting');
    greetingElement.innerHTML = `<h2>${greetingMessage}</h2><p>Welcome to my portfolio. I hope you enjoy your visit!</p>`;
}

// Call the function to generate the greeting when the page loads
generateGreeting();
