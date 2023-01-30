const body = document.querySelector("body");
setInterval(() => {
    var randomizer = (Math.floor(Math.random() * 100));
    body.style.fontSize = `${randomizer}px`;
}, 1000);