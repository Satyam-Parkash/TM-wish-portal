// TM Wish Portal Main Script


// --- Fetch and display festival name and image from query string ---
const urlParams = new URLSearchParams(window.location.search); // Get URL parameters
const festival = urlParams.get('festival') || 'Festival'; // Default to 'Festival' if not provided
const imgUrl = urlParams.get('img'); // Get image URL if provided

// Set main heading
document.getElementById('festivalNameText').textContent = `Happy ${festival}`;

// Set image if img parameter is present
const festivalImage = document.getElementById('festivalImage');
if (imgUrl) {
    festivalImage.src = imgUrl;
    festivalImage.style.display = 'block';
} else {
    festivalImage.style.display = 'none';
}

// --- Create floating balloons ---
function createBalloon() {
    // Create a balloon div with random color and position
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = `${Math.random() * 100}vw`;
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    balloon.style.animationDuration = `${Math.random() * 5 + 5}s`;
    document.body.appendChild(balloon);
    // Remove balloon after animation
    setTimeout(() => balloon.remove(), 10000);
}

// --- Create confetti ---
function createConfetti() {
    // Create a confetti div with random color and position
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(confetti);
    // Remove confetti after animation
    setTimeout(() => confetti.remove(), 5000);
}

// --- Generate balloons and confetti continuously ---
setInterval(createBalloon, 500); // Balloons every 0.5s
setInterval(createConfetti, 100); // Confetti every 0.1s

// --- Share on WhatsApp ---
function shareOnWhatsApp() {
    // Compose WhatsApp message and open share link
    const message = `Celebrate ${festival} with joy! Share the festive spirit with this wish from Tech Masala: ${window.location.href}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}
