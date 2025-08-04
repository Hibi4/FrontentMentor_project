const modal = document.getElementById('modal');
const backButton = document.querySelector('button[class*="bg-cyan-700"]');

function openModal() {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

backButton.addEventListener('click', openModal);

modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});