const calcTime = () => setInterval(() => {
    var showDate = Date.parse("24 Dec 2020 08:00:00 GMT");
    var currentTime = Date.now();
    console.log(showDate.toLocaleString());
    console.log(currentTime.toLocaleString());
    var diff = showDate - currentTime;
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    console.log(days);
    console.log(hours);
    console.log(minutes);
    console.log(seconds);
    document.getElementById('time-left').innerHTML = days + ':' + hours + ':' + minutes + ':' + seconds;

}, 1000);

var images = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const updateSlider = () => {
    images = shuffle(images);
    var indexes = [];
    for(var i = 1; i < 5; i++){
        
        var divEl = document.querySelector("#gallery-image" + i);
        var link = document.querySelector("#gallery-image" + i + ">a");
        var imageIndex = Math.floor(Math.random() * Math.floor(8));
        while(indexes.includes(imageIndex)){
            imageIndex = Math.floor(Math.random() * Math.floor(8));
        }
        indexes.push(imageIndex);
        console.log(indexes);
        var path = "./img/" + indexes[i - 1] + ".jpg"
        divEl.style.backgroundImage = "url('" + path + "')";
        link.setAttribute("href", path);
    }
    
}


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


document.addEventListener('DOMContentLoaded', () => {
    var url = window.location.href;
    if (url.includes("contact.html")) {
        var mymap = L.map('myMap', {
            dragging: false,
            zoomControl: false,
            scrollWheelZoom: false
        }).setView([49.8310486,18.1618058], 17);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
        }).addTo(mymap);

        L.marker([49.8310486,18.1618058]).addTo(mymap);
        calcTime();
    }
    if (url.includes("index.html")) {
        setInterval(updateSlider, 3000);
    }
});



