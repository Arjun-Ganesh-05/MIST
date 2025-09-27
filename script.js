
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const displayText = document.getElementById('displayText');

    if (toggleButton && displayText) {
        toggleButton.addEventListener('click', () => {
            
            if (displayText.style.display === 'none' || displayText.style.display === '') {
                displayText.style.display = 'block';
            } else {
                displayText.style.display = 'none';
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const alertButton = document.getElementById('alertButton');

    if (alertButton) {
        alertButton.addEventListener('click', () => {
        
            const name = prompt("Please enter your Name:");
            const regNumber = prompt("Please enter your Registration Number:");
            const phoneNumber = prompt("Please enter your Phone Number:");

            if (name === null || regNumber === null || phoneNumber === null) {
               
                return; 
            }

           
            const message = 
                "User Information:\n\n" +
                "Name: " + name + "\n" +
                "Registration Number: " + regNumber + "\n" +
                "Phone Number: " + phoneNumber;

            alert(message);
        });
    }
});