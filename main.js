Rolling_song="";
CITY_song="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    Rolling_song = loadSound("ROLLING.mp3");
    CITY_song = loadSound("CITY.mp3");
}

function draw(){
    image(video,0,0,600,530);
}