// Functionality for the "Glazing MIST" section (Screenshot 2)
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const displayText = document.getElementById('displayText');

    if (toggleButton && displayText) {
        toggleButton.addEventListener('click', () => {
            // Toggles the display style between 'block' (show) and 'none' (hide)
            if (displayText.style.display === 'none' || displayText.style.display === '') {
                displayText.style.display = 'block';
            } else {
                displayText.style.display = 'none';
            }
        });
    }
});

// --- UPDATED Functionality for the "About Us" section (Screenshot 3) ---
document.addEventListener('DOMContentLoaded', () => {
    const alertButton = document.getElementById('alertButton');

    if (alertButton) {
        alertButton.addEventListener('click', () => {
            // Use the 'prompt' function to ask the user for input
            // The second argument is a default value
            const name = prompt("Please enter your Name:");
            const regNumber = prompt("Please enter your Registration Number:");
            const phoneNumber = prompt("Please enter your Phone Number:");

            // Check if the user clicked 'Cancel' on any prompt
            if (name === null || regNumber === null || phoneNumber === null) {
                // Do nothing or alert a cancel message
                return; 
            }

            // Generate the alert message using the user's input
            const message = 
                "User Information:\n\n" +
                "Name: " + name + "\n" +
                "Registration Number: " + regNumber + "\n" +
                "Phone Number: " + phoneNumber;

            // Display the JS alert with the dynamic information
            alert(message);
        });
    }
});