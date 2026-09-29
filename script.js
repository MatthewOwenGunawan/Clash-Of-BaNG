const cards = document.querySelectorAll('.troop-card');
cards.forEach(card => {
    card.addEventListener('click', function() {
        cards.forEach(c => {
            if(c !== this) c.classList.remove('active');
        });
        this.classList.toggle('active');
    });
});

const guardTrigger = document.querySelector('.guard-trigger');
const skelCard = document.querySelector('.skeleton-king-card'); 

if(guardTrigger && skelCard) {
    guardTrigger.addEventListener('mouseenter', () => {
        skelCard.classList.add('show-guard'); 
    });
    
    guardTrigger.addEventListener('mouseleave', () => {
        skelCard.classList.remove('show-guard'); 
    });
}

const registerForm = document.getElementById('registerForm');
const errorMessage = document.getElementById('error-message');

if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        if (errorMessage) {
            errorMessage.innerText = ""; 
            errorMessage.style.color = "#ff4d4d"; 
        }

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const male = document.getElementById('male').checked;
        const female = document.getElementById('female').checked;
        const age = document.getElementById('age').value;
        const reason = document.getElementById('reason').value; 
        const terms = document.getElementById('terms').checked;

        if (name.trim() === "") {
            errorMessage.innerText = "Name cannot be empty.";
            return; 
        }

        if (email.indexOf('@') === -1 || email.indexOf('.') === -1 || email.indexOf('@') > email.lastIndexOf('.')) {
            errorMessage.innerText = "Please enter a valid email address.";
            return;
        }

        if (!male && !female) {
            errorMessage.innerText = "Please select your gender.";
            return;
        }

        if (age === "" || parseInt(age) < 13) {
            errorMessage.innerText = "You must be at least 13 years old to join.";
            return;
        }

        if (reason.trim() === "") {
            errorMessage.innerText = "Please provide a reason to join.";
            return;
        }
        if (reason.trim().length < 10) {
            errorMessage.innerText = "Reason must be at least 10 characters long.";
            return;
        }

        if (!terms) {
            errorMessage.innerText = "You must agree to the Terms & Conditions.";
            return;
        }

        if (errorMessage) {
            errorMessage.style.color = "#4ade80"; 
            errorMessage.innerText = "Registration successful! Welcome to Clash of BaNG!";
        }

        const modal = document.getElementById('successModal');
        if (modal) {
            modal.style.display = 'flex'; 
        }
        
        registerForm.reset(); 

        setTimeout(() => {
            window.location.href = "index.html"; 
        }, 2500);
    });
}

const closeModalBtn = document.getElementById('closeModalBtn');
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', function() {
        const modal = document.getElementById('successModal');
        if (modal) {
            modal.style.display = 'none'; 
            
            window.location.href = "index.html"; 
        }
    });
}