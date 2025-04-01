const volumeSlider = document.getElementById("volumen-slider");
const info = document.getElementById("info");
const powerOnOff = document.querySelector(".switch-button__checkbox");
const bank = document.querySelector(".switch-button__checkboxt"); // Corregido

let power = false;
let currentVolume = parseFloat(volumeSlider.value);
let currentKit = "Smooth Piano Kit"; // Inicia con Smooth Piano

const songs = {
  "Smooth Piano Kit": {
    Q: ["Chord 1", "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"],
    W: ["Chord 2", "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"],
    E: ["Chord 3", "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"],
    A: ["Shaker", "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"],
    S: ["Open HH", "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"],
    D: ["Closed HH", "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"],
    Z: ["Punchy Kick","https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"],
    X: [ "Side Stick", "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"],
    C: ["Snare", "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"],
  },
  "Heater Kit": {
    Q: ["Heater 1", "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"],
    W: ["Heater 2", "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"],
    E: ["Heater 3", "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"],
    A: ["Heater 4","https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"],
    S: ["Clap", "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"],
    D: ["Open HH", "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"],
    Z: ["Kick n' hat", "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"],
    X: ["Kick", "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"],
    C: ["Closed HH", "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"],
  },
};

powerOnOff.addEventListener("change", () => {
  power = powerOnOff.checked;
});


bank.addEventListener("change", () => {
  currentKit = bank.checked ? "Heater Kit" : "Smooth Piano Kit"; 
  info.textContent = currentKit;
});


function playSound(key) {
  if (!power) return; 

  const sound = songs[currentKit][key];
  if (sound) {
    const audio = new Audio(sound[1]); 
    audio.volume = currentVolume;
    info.textContent = sound[0];
    audio.play();
  }
}

document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", () => {
    playSound(button.id);
  });
});

volumeSlider.addEventListener("input", (e) => {
  currentVolume = parseFloat(e.target.value);
  info.textContent = Math.round(currentVolume * 100); 
});
