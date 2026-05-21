// Simple interaction logic
document.getElementById('reportForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your report. Your data (including uploaded evidence) has been encrypted and sent to the public ledger for verification.');
    this.reset();
    const fileNameDisplay = document.getElementById('fileNameDisplay');
    if (fileNameDisplay) fileNameDisplay.textContent = '';
});

// File upload interaction logic
const photoUpload = document.getElementById('photoUpload');
const fileNameDisplay = document.getElementById('fileNameDisplay');

if (photoUpload && fileNameDisplay) {
    photoUpload.addEventListener('change', function() {
        if (this.files && this.files.length > 0) {
            fileNameDisplay.textContent = `Selected File: ${this.files[0].name}`;
        } else {
            fileNameDisplay.textContent = '';
        }
    });
}

// AI Generate Description logic
const aiGenerateBtn = document.getElementById('aiGenerateBtn');
const issueDescription = document.getElementById('issueDescription');
const projectLocation = document.getElementById('projectLocation');

if (aiGenerateBtn && issueDescription) {
    aiGenerateBtn.addEventListener('click', function() {
        const location = projectLocation ? projectLocation.value : '';
        const baseDescription = location 
            ? `I am reporting a significant discrepancy observed at the ${location} project site. Upon recent inspection, the allocated funds do not appear to match the actual work progress. Construction materials are either missing or of subpar quality, and there is a noticeable lack of active labor on site.`
            : `I am reporting a discrepancy observed at a local infrastructure project. Despite the official status showing progress, the physical site indicates significant delays. The materials being used seem to be of inferior quality, raising concerns about proper fund utilization.`;
        
        // Simulate a slight typing delay or thinking process
        aiGenerateBtn.innerHTML = '<span class="sparkle-icon">⏳</span> Generating...';
        aiGenerateBtn.disabled = true;
        
        setTimeout(() => {
            issueDescription.value = baseDescription;
            aiGenerateBtn.innerHTML = '<span class="sparkle-icon">✨</span> Auto-Generate';
            aiGenerateBtn.disabled = false;
        }, 800);
    });
}

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
