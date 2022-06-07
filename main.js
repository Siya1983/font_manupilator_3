function setup(){
video = createCapture(VIDEO);
video.size(500, 550);

canvas= createCanvas(550, 400);
canvas.position(560, 150);

poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
console.log("Initialized the posenet")
}

function gotPoses(results){
if(results.length > 0 ){
    console.log(results)
}
}