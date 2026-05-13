// Simple interaction logic
document.getElementById('reportForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your report. Your data has been encrypted and sent to the public ledger for verification.');
    this.reset();
});

// Logic to handle "Verification"
const verifyButtons = document.querySelectorAll('.verify-btn');
verifyButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        this.innerHTML = "✓ Verified";
        this.style.backgroundColor = "#27ae60";
        this.disabled = true;
    });
});

// Future: Integrate with Firebase Firestore
/*
db.collection("dailyWork").onSnapshot((snapshot) => {
    // Update the UI dynamically when govt uploads data
});
*/
