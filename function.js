


async function loadComponent(component) {
    try {
        const response = await fetch(component);
        if (!response.ok) {
            throw new Error(`Could not load ${component}: ${response.statusText}`);
        }
        const data = await response.text();
        document.getElementById(component.replace('.html', '')).innerHTML = data;
        if (component === 'main-content.html') {
            attachEventListeners();
        }
    } catch (error) {
        console.error(error);
    }
}

function attachEventListeners() {
    const submitButton = document.querySelector('.submit-btn');
    if (submitButton) {
        submitButton.addEventListener('click', validateForm);
    }

    const gitButtons = document.querySelectorAll('.git');
    gitButtons.forEach(function (gitButton) {
        gitButton.addEventListener('click', function () {
            window.location.href = "https://algorepublic.com/contact/";
        });
    });

    const esButtons = document.querySelectorAll('.es');
    esButtons.forEach(function (esButton) {
        esButton.addEventListener('click', function () {
            window.location.href = "https://algorepublic.com/services/";
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const components = [
        'nav-bar.html',
        'background.html',
        'main-content.html',
        'tech-rotate.html',
        'tech-services.html',
        'services-card.html',
        'growth.html',
        'project-rotate.html',
        'excellence.html',
        'work-showcase.html',
        'blog.html',
        'mail-call.html',
        'footer.html'
    ];

    // Load all components
    const loadPromises = components.map(loadComponent);
    Promise.all(loadPromises)
        .then(() => {
            console.log('All components loaded successfully');
            attachEventListeners();
        })
        .catch(error => {
            console.error('Error loading components:', error);
        });
});

function validateForm() {
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    document.getElementById('fullNameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    let isValid = true;

    if (!fullName) {
        document.getElementById('fullNameError').textContent = '*enter your full name.';
        isValid = false;
    }

    if (!email) {
        document.getElementById('emailError').textContent = '*enter your email.';
        isValid = false;
    }

    if (!message) {
        document.getElementById('messageError').textContent = '*enter your message.';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
}
