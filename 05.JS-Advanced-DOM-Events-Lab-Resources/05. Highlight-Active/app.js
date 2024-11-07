function focused() {
    /*const container = document.querySelector('div');

    container.addEventListener('focusin', function(event) {
        event.target.parentElement.classList.add('focused');
    });

    container.addEventListener('focusout', function(event) {
        event.target.parentElement.classList.remove('focused');
    });*/

    // Select all input fields
    const inputs = document.querySelectorAll('input');

    // Add event listeners for focus and blur events on each input field
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            // Add the "focused" class to the parent div when the input is focused
            input.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            // Remove the "focused" class from the parent div when the input is blurred
            input.parentElement.classList.remove('focused');
        });
    });
}