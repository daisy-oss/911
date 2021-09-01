song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function setup(){
 canvas=createCanvas(500,550);
 canvas.center();
 video=createCapture(VIDEO);
 video.hide();

 poseNet=ml5.poseNet(VIDEO,modelLoded);
 poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,500,550);
}

function preload(){
song=loadSound("music.mp3");

}

function song21(){
    song.play();
    song.rate(1.5);
    song.setVolume(1);
}

function modelLoded(){
    console.log("yay, its working");
}

function gotPoses(results,error){
    if(results.length > 0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftwristX ="+leftWristX+"leftwristY ="+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristy=results[0].pose.rightWrist.y;
        console.log("rightwristX ="+rightWristX+"rightwristY ="+rightWristY);
    }
    else{
        console.error(error);
    }
}