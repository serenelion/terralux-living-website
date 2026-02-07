// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 70;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle (if needed later)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Netlify form submission with success alert
const applicationForm = document.querySelector('form[name="terralux-living-application"]');
const formSuccess = document.getElementById('form-success');

if (applicationForm) {
    applicationForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const submitBtn = applicationForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(new FormData(applicationForm)).toString()
        })
            .then(function (response) {
                if (!response.ok) throw new Error('Form submission failed');
                applicationForm.hidden = true;
                formSuccess.hidden = false;
                formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
            })
            .catch(function () {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                alert('Something went wrong. Please try again or email us at membership@terraluxliving.com.');
            });
    });
}
