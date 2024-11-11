var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = "480";
canvas.height = "320";

var dino = {
	x : 10,
	y : 200,
	width : 50,
	height : 50,
	draw(){
		ctx.fillStyle = 'green';
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

var img1 = new Image();
img1.src = 'cactus.png';

class Cactus{
	constructor(){
		this.x = 500;
		this.y = 200;
		this.width = 50;
		this.height = 50;
	}
	draw(){
		ctx.fillStyle = 'red';
		ctx.fillRect(this.x, this.y, this.width, this.height);
		//ctx.drawImage(img1, this.x, this.y)
	}
}

//import {Cactus} from './cactus.js';

var cactus = new Cactus();
cactus.draw()

var timer = 0;
var cactuses = [];
var jumpTimer = 0;
var animation;

function update(){
	animation = requestAnimationFrame(update)
	timer++;

	ctx.clearRect(0,0, canvas.width, canvas.height);

	if(timer % 400 == 0){
		var cactus = new Cactus();
		cactuses.push(cactus);
		cactus.draw();
	}

	cactuses.forEach((a, i, o)=>{
		if(a.x < 0){
			o.splice(i, 1)
		}
		a.x--;
		collision(dino, a);
		a.draw();
	})

	if(jumping==true){
		dino.y--;
		jumpTimer++;
	}
	if(jumping == false){
		if(dino.y < 200){
			dino.y++;
		}
	}
	if(jumpTimer > 100){
		jumping = false;
		jumpTimer = 0;
	}
	dino.draw();
}

update();

function collision(dino, cactus){
	var difX = cactus.x - (dino.x + dino.width);
	var difY = cactus.y - (dino.y + dino.height);
	if(difX < 0 && difY < 0){
		ctx.clearRect(0, 0, canvas.width, canvas.heigth);
		cancelAnimationFrame(animation)
	}
}


var jumping = false;
document.addEventListener('mousedown', (event) => {
	jumping = true;
})