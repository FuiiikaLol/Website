const keys = document.querySelectorAll('.key');
const soundUrl = 'https://assets.mixkit.co/active_storage/sfx/2361/2361-preview.mp3';

const audioPool = [];
for (let i = 0; i < 10; i++) {
    const audio = new Audio(soundUrl);
    audio.volume = 0.5; 
    audioPool.push(audio);
}

let poolIndex = 0;

function playSound() {
    const audio = audioPool[poolIndex];
    audio.currentTime = 0;
    audio.play().catch(error => console.log(error));
    
    poolIndex = (poolIndex + 1) % audioPool.length;
}

keys.forEach(key => {
    key.addEventListener('mousedown', () => {
        playSound();
    });
});
