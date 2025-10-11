const modal = document.getElementById('modal');
const successModal = document.getElementById('successModal');
const backButton = document.querySelector('button[class*="bg-cyan-700"]');
// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileCloseBtn = document.getElementById('mobile-close-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMobileMenuBtn = document.getElementById('close-mobile-menu');
// bookmark-span
// const bookmarkSpan = document.querySelector('.bookmark-span');

let bookmarked = false;

function openModal() {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function isBookmarked(isBoomarked) {
    if(isBoomarked) {
        document.getElementById("bookmark-span").innerHTML = "Bookmark";
    } else {
        document.getElementById("bookmark-span").innerHTML = "Bookmarked";
        
    }
}

document.getElementById("bookmark-span").addEventListener('click', function () {
    bookmarked = !bookmarked; // change the state l'état
    isBookmarked(bookmarked); // Call the function
});

function openSuccessModal() {
    successModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeSuccessModal() {
    successModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    closeModal(); // close the main modal 
}

function handleRewardSelection(rewardType, amount = null) {
    
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
    
    // amount validation
    if (amount && parseInt(amount) < minAmount) {
        alert(`The minimum amount for ${rewardName} is $${minAmount}`);
        return;
    }
    
    if (!amount || amount === '') {
        alert('Please enter an amount');
        return;
    }
    
    // close the main modal and open sucess modal 
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

// Manage the section's displaying according to the user selection

function handleRadioSelection(rewardType) {
    
    const pledgeSections = document.querySelectorAll('[id$="-pledge-section"]');
    pledgeSections.forEach(section => {
        section.classList.add('hidden');
    });
    
    const targetSection = document.getElementById(`${rewardType}-pledge-section`);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }
}

// add event listeners to the radio buttons
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
    mobileMenuBtn.classList.add('hidden');
    mobileCloseBtn.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
    mobileMenuBtn.classList.remove('hidden');
    mobileCloseBtn.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

mobileMenuBtn.addEventListener('click', openMobileMenu);
mobileCloseBtn.addEventListener('click', closeMobileMenu);
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