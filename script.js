let string = "";

function playButtonSound() {
    var sound = document.getElementById("buttonSound");
    sound.playbackRate += 0.001;
    sound.currentTime = 0; 
    sound.play();
  }
  

let buttony = document.querySelectorAll('.buttons');
Array.from(buttony).forEach((buttons) => {
    buttons.addEventListener('click', (e) => {
        playButtonSound()
        try{
        let values = e.target.value;
        if (values == '=') {
            if(string == ""){
                document.querySelector('input').value = "";
            }
            else{

                string = eval(string);
                document.querySelector('input').value = string;
            }
        }
        else if (values == 'c') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (values == 'd') {
            var newStr = string.substring(0, string.length - 1);
            string = newStr;
            document.querySelector('input').value = string;
        }
        else {
            string = string + values;
            document.querySelector('input').value = string;
        }
        string = document.querySelector('input').value;
    }
    catch{
        document.querySelector('input').value = "Invalid";
    }
    })
})

