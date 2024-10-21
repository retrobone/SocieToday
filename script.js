document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nameInput = document.getElementById('name').value;

        if (nameInput.trim() === '') {
            alert('Please enter your name.');
            return;
        }

        alert(`Thank you, ${nameInput}! Your application has been submitted.`);
        
        form.reset();
    });
});