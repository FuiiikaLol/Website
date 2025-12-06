const keys = document.querySelectorAll('.key');
const soundUrl = 'https://raw.githubusercontent.com/shajidhasan/mechanical-keyboard-sound/master/public/sounds/blue/a.mp3';

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
        playSound();
    });
});
