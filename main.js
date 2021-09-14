UTmusic="";
lwx=0;
lwy=0;
rwx=0;
rwy=0;


function preload() {
    UTmusic = loadSound("lollolol.mp3");  
  }


function setup() {
    canvas=createCanvas(500,400);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
console.log("pls stop MODEL HAS BEEN LOADEDDDDDDDDDDDDD!")
}

function draw() {
    image(video,0,0,500,400);
}

function playMusic () {
    UTmusic.play();
    UTmusic.setVolume(1);
    UTmusic.rate(1);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results+"NOTE:results has been deployed");

        lwx=results[0].pose.leftWrist.x;
        lwy=results[0].pose.leftWrist.y;
        console.log(lwx+"results of lw x and y"+lwy);

        rwx=results[0].pose.rightWrist.x;
        rwy=results[0].pose.rightWrist.y;
       console.log(rwx+"results of rw x and y"+rwy);
    }
}