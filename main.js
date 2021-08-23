function setup() {
    canvas = createCanvas(370, 370);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
  
    classifier = ml5.imageClassifier("cocossd",modelloaded);
  
  }
  
  function draw() {
    image(video,0,0,370,370);
    classifier.classify(video,gotresult);
  
  }
  
  function modelloaded() {
    console.log("Model is loaded!@#$%^&*()");
  }
  
  function gotresult(error,results) {
    if(error) {
      console.error(error);
    }
  
    else{
      console.log(results);
    }
}