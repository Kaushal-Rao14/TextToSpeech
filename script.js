const textarea = document.querySelector("textarea");
const speakButton = document.querySelector(".speech-button");
const resumeBtn = document.getElementById("resume");
const pauseBtn = document.getElementById("pause");
let audioMessage="";

speakButton.addEventListener("click", () => {
    resumeBtn.style.display = "none";
    pauseBtn.style.display = "block";
    //set the text
    audioMessage.text = textarea.value;
    //speak the text
    window.speechSynthesis.speak(audioMessage);
  });



resumeBtn.addEventListener("click", () => {
    pauseBtn.style.display = "block";
    resumeBtn.style.display = "none";
    //resume the audio if it is paused
    if (speechSynthesis.pause) {
      speechSynthesis.resume();
    }
  });
  
  pauseBtn.addEventListener("click", () => {
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
    //pause if speaking
    speechSynthesis.speaking ? speechSynthesis.pause() : "";
  });


 

  window.onload = () => {
    resumeBtn.style.display = "none";
    if ("speechSynthesis" in window) {
      audioMessage = new SpeechSynthesisUtterance();
    } else {
      alert("Speech Synthese is not supported");
    }
  };
  
