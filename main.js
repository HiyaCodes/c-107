//https://teachablemachine.withgoogle.com/models/z3obkFghx/model.json
function start_classification(){
navigator.mediaDevices.getUserMedia({
    audio:true
})
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/z3obkFghx/model.json",modelReady)
}
function modelReady(){
    classifier.classify(gotResults)
}
function gotResults(error,results){
    console.log("got results")
}