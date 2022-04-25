
const image = document.getElementById("img");
const boxImages = document.getElementById("image");

// tablica przechowująca ścieżki do zdjęć wyświetlanych w ramce
var images = [
    "../Styles/Images/img1.jpeg",
    "../Styles/Images/img2.jpg",
    "../Styles/Images/img3.jpg",
    "../Styles/Images/img4.jpg",
    "../Styles/Images/img5.jpg",
    "../Styles/Images/img6.jpg",
    "../Styles/Images/img7.jpg",
    "../Styles/Images/img8.jpg",
]

// wyświetlanie zdjęć w ramce
var changeImageInterval = setInterval (function (){
    var img = images[Math.floor(Math.random() * images.length)];
    image.src=img;
},2000)

//zatrzymanie wyświetlania zdjęc
boxImages.addEventListener('click', function(){
    clearInterval(changeImageInterval)
});   

// wyświetlanie komunikatu pośpieszającego
setTimeout(function (){
    document.getElementById("message").style.visibility = "visible";
    }, 4000);


// var problemButtons = document.getElementsByClassName("click problem");
// var links = ["https://www.youtube.com/embed/KWLb-p6f0gY",]

// problemButtons[0].addEventListener('click', openPage(0))

// function openPage(problem){
    // console.log(links[problem]);
    // const video = document.getElementById("film");
    // video.src=links[problem];