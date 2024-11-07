function validate() {
    // Select the email input field
    const emailInput = document.getElementById('email');

    // Define the email validation regex pattern
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Add event listener for the change event
    emailInput.addEventListener('change', () => {
        // Check if the email input matches the pattern
        if (emailPattern.test(emailInput.value)) {
            // Remove the "error" class if the input is valid
            emailInput.classList.remove('error');
        } else {
            // Add the "error" class if the input is invalid
            emailInput.classList.add('error');
        }
    });
}