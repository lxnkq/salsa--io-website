// Script to hide loader after 2 seconds and show the main content
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 2000); // 2-second delay

    // Add dynamic rank emojis (this can be customized further)
    const rankEmoji = document.getElementById('rank-emoji');
    const ranks = ['⭐', '🌟', '🔥', '💀', '👑']; // Example ranks
    let randomRank = ranks[Math.floor(Math.random() * ranks.length)];
    rankEmoji.textContent = randomRank;
});
// Rank emoji selector
document.getElementById('apply-rank').addEventListener('click', function () {
    const selectedRank = document.getElementById('rank-selector').value;
    document.getElementById('rank-emoji').textContent = selectedRank;
});
// Store selected rank in localStorage
document.getElementById('apply-rank').addEventListener('click', function () {
    const selectedRank = document.getElementById('rank-selector').value;
    localStorage.setItem('userRank', selectedRank);
    document.getElementById('rank-emoji').textContent = selectedRank;
});

// Load the stored rank when the page loads
document.addEventListener("DOMContentLoaded", function () {
    const savedRank = localStorage.getItem('userRank');
    if (savedRank) {
        document.getElementById('rank-emoji').textContent = savedRank;
    }
});
// Store selected rank in localStorage
document.getElementById('apply-rank').addEventListener('click', function () {
    const selectedRank = document.getElementById('rank-selector').value;
    localStorage.setItem('userRank', selectedRank);
    document.getElementById('rank-emoji').textContent = selectedRank;
});

// Load the stored rank when the page loads
document.addEventListener("DOMContentLoaded", function () {
    const savedRank = localStorage.getItem('userRank');
    if (savedRank) {
        document.getElementById('rank-emoji').textContent = savedRank;
    }
});
