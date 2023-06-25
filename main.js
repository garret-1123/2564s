video = "";
objects = []
status = ""
function preload(){
    video = createVideo('video.mp4')
    video.hide()
}

function setup() {
    canvas = createCanvas(480,380)
    canvas.center()
}

function draw() {
    image(video,0,0,480,380)
    if (status!="") {

        object_detector.detect(video,gotResult)
        for (i = 0; i < objects.length; i++) {
document.getElementById("status").innerHTML = "Status: Objetos detect"
document.getElementById("number").innerHTML = objects.length
fill('#ff0000')
percent = floor(objects[i].confidence*100)
text(objects[i].label + "" + percent + "" + objects[i].x + 15 + objects[i].y + 15)
noFill()
stroke('#ff0000')
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
        }
    }
}
function gotResult(error, results) {
if (error) console.log(error)
console.log(results)
objects = results
}

function start() {
object_detector = ml5.objectDetector('cocossd', modelLoaded)
document.getElementById("status").innerHTML = "Carregando objetos"

}
function modelLoaded() {
    console.log("Loaded!")
    status = true
    video.loop()
    video.speed(1)
    video.volume(0)
}