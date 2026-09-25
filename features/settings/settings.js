document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('settings-form');
    const saveAlert = document.getElementById('save-alert');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        saveAlert.style.display = 'block';
        
        setTimeout(() => {
            saveAlert.style.display = 'none';
        }, 3000);
    });
});
