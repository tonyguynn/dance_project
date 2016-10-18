function setup(){
  createCanvas(475, 475);
  background(0);
  console.log("Ready to listen to Input -->");
}

function draw(){
  //draw creates infinite loop; background & rectangles
  background(0);

  strokeWeight(10);
  stroke(255,255,255,255);
  fill(127,10,200,255);
  rect(50, 100, 150, 100);

  strokeWeight(10);
  stroke(255,255,255,255);
  fill(0,10,200,255);
  rect(250, 100, 150, 100);

  stroke(255,255,255,255);
  fill(0,155,200,255);
  rect(50, 200, 150, 100);

  stroke(255,255,255,255);
  fill(155,0,0,255);
  rect(250, 200, 150, 100);

  stroke(255,255,255,255);
  fill(100,100,100,255);
  rect(50, 300, 150, 100);

  stroke(255,255,255,255);
  fill(50,155,0,255);
  rect(250, 300, 150, 100);
}

function mouseClicked() {
  //every time that a mouse is clicked
  if(mouseX>50&&mouseX<200&&mouseY>100&&mouseY<200){
    console.log("tiger");
    httpGet('/trigger_1');
  }
//evaluates what gets clicked
  if(mouseX>250&&mouseX<400&&mouseY>100&&mouseY<200){
    //this code above defines a box if all conditions are met
    console.log("clicked on trigger_2");
    httpGet('/trigger_2');
  }

  if(mouseX>50&&mouseX<200&&mouseY>200&&mouseY<300){
    //this code above defines a box if all conditions are met
    console.log("clicked on trigger_3");
    httpGet('/trigger_3');
  }
  if(mouseX>250&&mouseX<400&&mouseY>200&&mouseY<300){
    //this code above defines a box if all conditions are met
    console.log("clicked on trigger_4");
    httpGet('/trigger_4');
  }
  if(mouseX>50&&mouseX<200&&mouseY>300&&mouseY<400){
    //this code above defines a box if all conditions are met
    console.log("clicked on trigger_5");
    httpGet('/trigger_5');
  }
  if(mouseX>250&&mouseX<400&&mouseY>300&&mouseY<400){
    //this code above defines a box if all conditions are met
    console.log("clicked on trigger_6");
    httpGet('/trigger_6');
  }
}
