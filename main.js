song1 = "";
song2 = "";

leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;

song1_status = "";
song2_status = "";

preload()
{
    song1 = loadSound("t1.mp3");
    song2 = loadSound("t2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("#FF0000")

song1_status = song1.isPlaying();
song2_status = song2.isPlaying();

if(scoreLeftWrist > 0.2)
    {
        circle(leftWristX, leftWristY,20);
        song2.stop().

        if(song1_status = false)
        {
            song1.play()
            document.getElementById("song_name").innerHTML = "Playing Song1"
        }
    }

    if(scoreRightWrist > 0.2)
    {
        circle(rightWristX, rightWristY,20);
        song2.stop().

        if(song2_status = false)
        {
            song2.play()
            document.getElementById("song_name").innerHTML = "Playing Song2"
        }
    }

}




function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log("scoreLeftWrist =" + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
    }
}