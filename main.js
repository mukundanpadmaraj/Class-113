function preload(){
}

function setup(){
    canvas=createCanvas(480,440);
    canvas.center();
    webcam=createCapture(VIDEO);
    webcam.size(480,440)
    webcam.hide()
}

function draw(){
    image(webcam, 0, 0, 480, 440)
    tint_color=document.getElementById("tint").value;
    tint(tint_color)
}

function take_snapshot(){
    save("tinting_fun.png")
}