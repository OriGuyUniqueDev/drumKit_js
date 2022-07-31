const btnArr = document.querySelectorAll(".btn");
const hiHat = new Howl({src:['/assets/drumKit_sounds/hihat.wav']});
const boom = new Howl({src:['/assets/drumKit_sounds/boom.wav']});
const clap = new Howl({src:['/assets/drumKit_sounds/clap.wav']});
const kick = new Howl({src:['/assets/drumKit_sounds/kick.wav']});
const openHat = new Howl({src:['/assets/drumKit_sounds/openhat.wav']});
const ride = new Howl({src:['/assets/drumKit_sounds/ride.wav']});;
const snare = new Howl({src:['/assets/drumKit_sounds/snare.wav']});;
const tink = new Howl({src:['/assets/drumKit_sounds/tink.wav']});;
const tom = new Howl({src:['/assets/drumKit_sounds/tom.wav']});;
const soundArr = [hiHat,ride,openHat,snare,clap,kick,tom,boom,tink]

btnArr.forEach((btn) => {
        btn.addEventListener("click", () => {
            playSound(+btn.childNodes[1].textContent);
        });

});
window.addEventListener("keydown", (e) => {
	if(+e.key !== 0) {
		playSound(+e.key);
		btnArr[+e.key - 1].style.transform = "scale(1.05)"
		btnArr[+e.key - 1].style.background = "rgba(93, 162, 198, 0.8)"
	}
	
});
window.addEventListener("keyup", (e) => {
	if(+e.key !== 0) {
		btnArr[+e.key - 1].style.transform = "scale(1)"
		btnArr[+e.key - 1].style.background = "#5da2c673"
	}
});

function playSound(num) {
    soundArr.forEach((sound) => {
        sound.stop()
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
