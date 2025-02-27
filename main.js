let body = document.querySelector('body')
function dardMode() {
    body.style.backgroundColor = "#000";
    body.style.color = "#fff";
}

function lightMode() {
    body.style.backgroundColor = "#fff";
    body.style.color = "#000";

}

document.querySelectorAll('.Btn').forEach(button => {
    button.addEventListener('click', function() {
       
        document.querySelectorAll('.Btn').forEach(btn => btn.classList.remove('Btn2'));
        this.classList.add('Btn2');
    });
});
