const modal = document.getElementById('modal');
const successModal = document.getElementById('successModal');
const backButton = document.querySelector('button[class*="bg-cyan-700"]');
// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMobileMenuBtn = document.getElementById('close-mobile-menu');

function openModal() {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function openSuccessModal() {
    successModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeSuccessModal() {
    successModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    closeModal(); // Ferme aussi la modal principale
}

// Gestion des boutons "Select Reward" dans la modal
function handleRewardSelection(rewardType, amount = null) {
    // Validation du montant selon le type de récompense
    let minAmount = 1;
    let rewardName = '';
    
    switch(rewardType) {
        case 'no-reward':
            minAmount = 1;
            rewardName = 'No Reward';
            break;
        case 'bamboo-stand':
            minAmount = 25;
            rewardName = 'Bamboo Stand';
            break;
        case 'black-edition':
            minAmount = 75;
            rewardName = 'Black Edition Stand';
            break;
        default:
            minAmount = 1;
            rewardName = 'Unknown';
    }
    
    // Validation du montant
    if (amount && parseInt(amount) < minAmount) {
        alert(`Le montant minimum pour ${rewardName} est de $${minAmount}`);
        return;
    }
    
    if (!amount || amount === '') {
        alert('Veuillez entrer un montant');
        return;
    }
    
    console.log('Reward selected:', rewardType, 'Amount:', amount);
    
    // Ferme la modal principale et ouvre la modal de remerciement
    closeModal();
    openSuccessModal();
}

backButton.addEventListener('click', openModal);

modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        closeModal();
    }
});

successModal.addEventListener('click', function (e) {
    if (e.target === successModal) {
        closeSuccessModal();
    }
});

// Gestion de l'affichage des sections de pledge selon la sélection
function handleRadioSelection(rewardType) {
    // Cacher toutes les sections de pledge
    const pledgeSections = document.querySelectorAll('[id$="-pledge-section"]');
    pledgeSections.forEach(section => {
        section.classList.add('hidden');
    });
    
    // Afficher la section correspondante
    const targetSection = document.getElementById(`${rewardType}-pledge-section`);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }
}

// Ajouter les event listeners pour les radio buttons
document.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.querySelectorAll('input[name="reward"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                console.log("input id: "+this.id);
                handleRadioSelection(this.id);
            }
        });
    });
});

function openMobileMenu() {
    mobileMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

mobileMenuBtn.addEventListener('click', openMobileMenu);
closeMobileMenuBtn.addEventListener('click', closeMobileMenu);

// Close mobile menu when clicking outside
mobileMenu.addEventListener('click', function (e) {
    if (e.target === mobileMenu) {
        closeMobileMenu();
    }
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            closeModal();
        }
        if (!successModal.classList.contains('hidden')) {
            closeSuccessModal();
        }
        if (!mobileMenu.classList.contains('hidden')) {
            closeMobileMenu();
        }
    }
});