window.AudioContext = window.AudioContext || window.webkitAudioContext;
const ctx = new AudioContext();
let oscillator;
// isPlaying is True when sound play
let isPlaying = false;

document.querySelector("#play").addEventListener("click", () => {
	// If it is playing, prevent it from being played twice.
	if (isPlaying) return;
	// setting oscillator.
	oscillator = ctx.createOscillator();
	oscillator.type = "sine";
	oscillator.frequency.setValueAtTime(440,ctx.currentTime);
	oscillator.connect(ctx.destination);
	oscillator.start();
	isPlaying = true;
});

document.querySelector("#stop").addEventListener("click", () => {
	oscillator?.stop();
	isPlaying = false;
});
