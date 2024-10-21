

// Массив с треками (добавьте свои треки сюда)
const tracks = [
    {
        title: "Нужна Победа",
        artist: "Roma Mizman - MiR",
        file: "muz/Нужна победа.wav", // Путь к вашему аудио файлу
        cover: "muz/Нужна победа.jpeg" // Путь к изображению для трека
    },
    {
        title: "О Любви",
        artist: "Roma Mizman - MiR",
        file: "muz/О любви.wav",
        cover: "muz/О любви.jpeg"
    }
    // Добавляйте новые треки здесь
];

// Инициализация проигрывателя
const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const cover = document.getElementById('cover');
const progress = document.getElementById('progress');
const tracksContainer = document.getElementById('tracks');

let currentTrackIndex = 0;

// Загрузка треков в карточки
tracks.forEach((track, index) => {
    const trackCard = document.createElement('div');
    trackCard.classList.add('track-card');
    trackCard.innerHTML = `
        <h2>${track.title}</h2>
        <p>${track.artist}</p>
        <button onclick="playTrack(${index})">Слушать</button>
        <a href="${track.file}" download><button>Скачать</button></a>
    `;
    tracksContainer.appendChild(trackCard);
});

// Функция для воспроизведения трека
function playTrack(index) {
    currentTrackIndex = index;
    audio.src = tracks[currentTrackIndex].file;
    cover.src = tracks[currentTrackIndex].cover;
    audio.play();
    playBtn.textContent = "❚❚";
}

// Обработчик кнопки play/pause
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = "❚❚";
    } else {
        audio.pause();
        playBtn.textContent = "▶";
    }
});

// Обновление прогресс-ползунка
audio.addEventListener('timeupdate', () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
});

// Обработчик для изменения прогресса
progress.addEventListener('input', () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

