var hr, mn, sc;
var hr_angle, minute_angle, second_angle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  
translate(200,200);
rotate(-90);

hr = hour();
mc = minute();
sc = second();

second_angle = map(sc, 0,60,0,360);
minute_amgle = map(mn, 0,60,0,360);
hour_angle = map(hr % 12,0,12,0,360);

push();
rotate(second_angle);
stroke(255, 0, 0);
strokeWeight(7);
line(0,0,10,0);
pop();

push();
rotate(minute_angle);
stroke(0, 255, 0);
strokeWeight(7);
line(0,0,75,0);
pop();

push();
rotate(hour_angle);
stroke(0,0,255);
strokeWeight(7);
line(0,0,50,0);
pop();

stroke(255,0,255)
point(0,0)

strokeWeight(10);
noFill();

stroke(255,0,0);
arc(0,0,300,300,0,second_angle)

stroke(0,255,0);
arc(0,0,280,280,0,minute_angle)

stroke(0,0,255);
arc(0,0,260,260,0,hour_angle)

}