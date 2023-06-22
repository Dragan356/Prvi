window.addEventListener('load', init);

function init(){
    let i = document.querySelector('#select');

    i.addEventListener('change', izbor);
}

function izbor(){
    let i = document.querySelector('#select').value;

    document.querySelector('#izbor').innerText = "Izabran je broj: " + i;
}

