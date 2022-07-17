const btnArr = document.querySelectorAll(".btn");
const hiHat = new Audio("../assets/drumKit_sounds/hihat.wav");
const boom = new Audio("../assets/drumKit_sounds/boom.wav");
const clap = new Audio("../assets/drumKit_sounds/clap.wav");
const kick = new Audio("../assets/drumKit_sounds/kick.wav");
const openHat = new Audio("../assets/drumKit_sounds/openhat.wav");
const ride = new Audio("../assets/drumKit_sounds/ride.wav");
const snare = new Audio("../assets/drumKit_sounds/snare.wav");
const tink = new Audio("../assets/drumKit_sounds/tink.wav");
const tom = new Audio("../assets/drumKit_sounds/tom.wav");
const soundArr = [hiHat,ride,openHat,snare,clap,kick,tom,boom,tink]
console.log(tom)
btnArr.forEach((btn) => {
	btn.addEventListener("click", () => {
		console.log("Click");
		console.log(playSound(+btn.childNodes[1].textContent)) ;
	});
});

function playSound(num) {
    console.log(num)
    soundArr.forEach((sound) => {
        sound.currentTime = 0
        sound.pause()
    })
	switch (num) {
		case 1:
			soundArr[num-1].play();
			break;
		case 2:
			soundArr[num-1].play();
			break;
		case 3:
			soundArr[num-1].play();
			break;
		case 4:
			soundArr[num-1].play();
			break;
		case 5:
			soundArr[num-1].play();
			break;
		case 6:
			soundArr[num-1].play();
			break;
		case 7:
			soundArr[num-1].play();
			break;
		case 8:
			soundArr[num-1].play();
			break;
		case 9:
			soundArr[num-1].play();
			break;

		default:
			break;
	}
}
