var Prediction = "";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

var camera = document.getElementById("camera");



Webcam.attach('camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';});
}
console.log('ml5 version',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/OHfK9IrN9/model.json',model_loaded);

function model_loaded()
{
    console.log('modal loaded');
}
