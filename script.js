// Sample game data fetched from a mock API
const gameData = [
    {
        id: 1,
        title: "🚗 Speed Racing",
        description: "Experience high-speed racing with realistic graphics and thrilling challenges!",
        image: "https://i.imgur.com/PM7Q2Vq.jpg",
        url: "#"
    },
    {
        id: 2,
        title: "🏹 Archery Master",
        description: "Test your archery skills and aim for the bullseye in this action-packed game.",
        image: "https://i.imgur.com/K1tPNTm.jpg",
        url: "#"
    },
    {
        id: 3,
        title: "🏆 Soccer League",
        description: "Lead your football team to victory in a fast-paced soccer championship.",
        image: "https://i.imgur.com/TbKM88E.jpg",
        url: "#"
    },
    {
        id: 4,
        title: "🕹️ Retro Arcade",
        description: "Relive the classic retro games with fun and exciting challenges.",
        image: "https://i.imgur.com/9sY5M4w.jpg",
        url: "#"
    }
];

// Select DOM elements
const gameList = document.getElementById("gameList");
const gameModal = document.getElementById("gameModal");
const gameTitle = document.getElementById("gameTitle");
const gameImage = document.getElementById("gameImage");
const gameDescription = document.getElementById("gameDescription");
const playGameBtn = document.getElementById("playGame");
const downloadGameBtn = document.getElementById("downloadGame");
const closeModal = document.querySelector(".close");

// Load games dynamically
function loadGames() {
    gameData.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <h3>${game.title}</h3>
            <p>${game.description.substring(0, 50)}...</p>
        `;
        gameCard.addEventListener("click", () => showGameDetails(game));
        gameList.appendChild(gameCard);
    });
}

// Show game details in modal
function showGameDetails(game) {
    gameTitle.innerText = game.title;
    gameImage.src = game.image;
    gameDescription.innerText = game.description;

    playGameBtn.onclick = () => {
        alert(`🎮 Launching ${game.title}!`);
    };

    downloadGameBtn.onclick = () => {
        alert(`⬇️ Downloading ${game.title}...`);
    };

    gameModal.style.display = "block";
}

// Close modal
closeModal.onclick = () => {
    gameModal.style.display = "none";
};

// Close modal when clicking outside content
window.onclick = (e) => {
    if (e.target === gameModal) {
        gameModal.style.display = "none";
    }
};

// Load games on page load
loadGames();
