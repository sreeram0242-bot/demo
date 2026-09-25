document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const statusBox = document.getElementById('status-box');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;

        statusBox.className = 'status-alert success';
        statusBox.textContent = `Welcome back! Signing in as ${email}...`;
        statusBox.style.display = 'block';

        setTimeout(() => {
            alert(`Logged in successfully as ${email}!`);
        }, 600);
    });
});
