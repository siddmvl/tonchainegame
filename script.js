document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('radio-player');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const volumeSlider = document.getElementById('volume-slider');
    const trackInfo = document.getElementById('track-info');

    let isPlaying = false;

    playPauseBtn.addEventListener('click', togglePlayPause);
    volumeSlider.addEventListener('input', adjustVolume);

    function togglePlayPause() {
        if (isPlaying) {
            audio.pause();
            playPauseBtn.textContent = 'Play';
        } else {
            audio.play();
            playPauseBtn.textContent = 'Pause';
        }
        isPlaying = !isPlaying;
    }

    function adjustVolume() {
        audio.volume = volumeSlider.value;
    }

    // Simulating track info updates
    function updateTrackInfo() {
        const tracks = [
            'Relaxing Piano Sonata',
            'Soothing Nature Sounds',
            'Calm Ocean Waves',
            'Gentle Rain Meditation',
            'Tranquil Forest Ambience'
        ];
        setInterval(() => {
            const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
            trackInfo.textContent = randomTrack;
        }, 10000); // Update every 10 seconds
    }

    updateTrackInfo();
});