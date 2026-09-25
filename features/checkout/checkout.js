document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('checkout-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('🎉 Payment of $348.00 received! Your order is placed.');
    });
});
