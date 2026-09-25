document.addEventListener('DOMContentLoaded', () => {
    const reorderBtns = document.querySelectorAll('.reorder-btn');

    reorderBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const product = e.target.getAttribute('data-product');
            alert(`Opening action for ${product}...`);
        });
    });
});
