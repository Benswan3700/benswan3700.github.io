var userage;

userage=prompt("Enter your age for a personalize layout!")
if (userage >= 65) {
    output = "Free Friday Coffee Night for Senior!"
    document.getElementById('verify').style.color = 'pink';
    document.getElementById('verify').style.fontSize = '100px';
} else {
    output = "Enjoy Music and Make Memories!"
}
document.getElementById("verify").innerHTML = output;

