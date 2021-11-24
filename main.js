nosex = 0
nosey = 0

function preload() {
    wig = loadImage("https://i.postimg.cc/7hNDfZf2/Purple-Hair.png");
}

function setup() {
    canvas = createCanvas(500, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenetmodel = ml5.poseNet(video, modelloaded);
    posenetmodel.on("pose", getbodypartlocations);
}

function draw() {
    image(video, 0, 0, 500, 350);
    stroke("purple");
    fill("red");
    image(wig, nosex, nosey, 290, 290);
}


function take_snap() {
    save("download.png");

}

function modelloaded() {
    console.log("Posenet has loaded")
}

function getbodypartlocations(results) {
    if (results.length > 0) {
        console.log(results);
        nosex = results[0].pose.nose.x - 212;
        nosey = results[0].pose.nose.y - 220;
        console.log(nosex);
        console.log(nosey);
    }
}