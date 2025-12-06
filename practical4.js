const keys = document.querySelectorAll('.key');
const soundUrl = '../css/single-key-press-393908.mp3';

const audioPool = [];
for (let i = 0; i < 20; i++) {
    const audio = new Audio(soundUrl);
    audio.volume = 1.0; 
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
        key.classList.add('active');
        playSound();
        setTimeout(() => {
            key.classList.remove('active');
        }, 100);
    });
});
