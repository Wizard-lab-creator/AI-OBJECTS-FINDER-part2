function setup(){
    canvas = createCanvas(400, 400)
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded");
    status = true;
}
function draw(){
    image(video, 0, 0, 400, 400);
}