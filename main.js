leftWristX=0;
rightWristX=0;
difference=0;

function setup () {
    video= createCapture(VIDEO);
    video.size(550, 500);

    canvas= createCanvas(550, 500);
    canvas.position(900,250);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}

function modelLoaded () {
    console.log('PoseNet Is Initialized!')
}

function draw() {
    background("#fc0303");
    textSize(difference);
    fill("#32a852");
    text('Youssef', 50, 400);
}

function gotPose(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}