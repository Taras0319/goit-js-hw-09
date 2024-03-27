const feedbackForm = document.querySelector('.feedback-form');

document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const { email, message } = JSON.parse(savedData);
        fillFormFields(email, message);
    }
});

feedbackForm.addEventListener('input', handleFormInput);
feedbackForm.addEventListener('submit', handleFormSubmit);

function fillFormFields(email, message) {
    feedbackForm.elements.email.value = email || '';
    feedbackForm.elements.message.value = message || '';
}

function handleFormInput() {
    const email = feedbackForm.elements.email.value.trim();
    const message = feedbackForm.elements.message.value.trim();
    saveFormData(email, message);
}

function saveFormData(email, message) {
    const formData = { email, message };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function handleFormSubmit(event) {
    event.preventDefault();

    const email = feedbackForm.elements.email.value.trim();
    const message = feedbackForm.elements.message.value.trim();
    
    if (!email || !message) {
        alert('Будь ласка, заповніть усі поля!');
        return;
    }

    console.log({ email, message });
    
    feedbackForm.reset();
    localStorage.removeItem('feedback-form-state');
}