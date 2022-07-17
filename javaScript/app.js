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
    if('ontouchstart' in window){
        btn.addEventListener("touchstart", () => {
            playSound(+btn.childNodes[1].textContent);
            console.log(btn)
            btn.style.transition = "scale(1.05)"
        });
    }else{
        btn.addEventListener("click", () => {
            playSound(+btn.childNodes[1].textContent);
        });
    }	
});

function playSound(num) {
    console.log(num)
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
