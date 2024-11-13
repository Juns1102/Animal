var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var backGround = new Image();
backGround.src = "./background.png";

var UI1Pos = [0, 5*32*4];
var UI2Pos = [1*32*4, 5*32*4];
var UI3Pos = [2*32*4, 5*32*4];
var UI4Pos = [3*32*4, 5*32*4];
var UI5Pos = [4*32*4, 5*32*4];
var UI6Pos = [6*32*4, 5*32*4];
var UI7Pos = [8*32*4, 5*32*4];
var UIemptPos = [0, 0];

var UIbtn1 = new Image();
UIbtn1.src = "./UI/UIbtn1Up.png";
var UIbtn2 = new Image();
UIbtn2.src = "./UI/UIbtn2Up.png";
var UIbtn3 = new Image();
UIbtn3.src = "./UI/UIbtn3Up.png";
var UIbtn4 = new Image();
UIbtn4.src = "./UI/UIbtn4Up.png";
var UIbtn5 = new Image();
UIbtn5.src = "./UI/UIbtn5Up.png";
var UIbtn6 = new Image();
UIbtn6.src = "./UI/UIbtn6Up.png";
var UIbtn7 = new Image();
UIbtn7.src = "./UI/UIbtn7Up.png";
var UIempt = new Image();
UIempt.src = "./UI/empty.png";

var chickenIdle1 = new Image();
var chickenIdle2 = new Image();
chickenIdle1.src = "./Entity/Anim/chicken_idle_1.png";
chickenIdle2.src = "./Entity/Anim/chicken_idle_2.png";
var chickens = [];

var eggImg = new Image();
eggImg.src = "./Entity/egg.png"
var eggs = [];

var catIdle1 = new Image();
var catIdle2 = new Image();
catIdle1.src = "./Entity/Anim/cat_idle_1.png";
catIdle2.src = "./Entity/Anim/cat_idle_2.png";
var cats = [];

var sheepIdle1 = new Image();
var sheepIdle2 = new Image();
sheepIdle1.src = "./Entity/Anim/sheep_idle_1.png";
sheepIdle2.src = "./Entity/Anim/sheep_idle_2.png";
var sheeps = [];

var squirrelIdle1 = new Image();
var squirrelIdle2 = new Image();
squirrelIdle1.src = "./Entity/Anim/squirrel_idle_1.png";
squirrelIdle2.src = "./Entity/Anim/squirrel_idle_2.png";
var squirrels = [];

var enemies = [];

var foxImg = new Image();
foxImg.src = "./Entity/fox.png";
var foxes = [];

var crocodileImg = new Image();
crocodileImg.src = "./Entity/crocodile.png";
var crocs = [];

var ratelImg = new Image();
ratelImg.src = "./Entity/ratel.png";
var ratels = [];

var bearImg = new Image();
bearImg.src = "./Entity/bear.png";
var bears = [];

var UISelect = 0;
var spawnTimer = 0;
var spawnRate = [10*60, 8*60, 6*60, 4*60, 2*60];
var spawnNum = 0;
var spawnPosY = 0;
var phase = 0;
var phaseCnt = 0;
var phaseRate = 60*30;
var round = 0;
var wait = true;
var gold = 1000;
var goldCnt = 0;

var animalPer = [[50, 45, 40, 35, 30], 
			     [50, 45, 40, 35, 30],
			     [0, 10, 20, 25, 30],
			     [0, 0, 0, 5, 10]];

class Chicken{
	constructor(){
		this.hp = 1;
		this.x = 0;
		this.y = 0;
		this.lane = 0;
		this.coolTime = 0;
		this.anim = 0;
		this.frame = 0;
	}
	draw(){
		if(this.frame==0){
			ctx.drawImage(chickenIdle1, this.x, this.y);
		}
		else if(this.frame==1){
			ctx.drawImage(chickenIdle2, this.x, this.y);
		}
	}
}

class Egg{
	constructor(){
		this.x = 0;
		this.y = 0;
		this.lane = 0;
		this.width = 7*4;
		this.height = 6*4;
		this.coolTime = 0;
	}
	draw(){
		ctx.drawImage(eggImg, this.x, this.y);
	}
}

class Cat{
	constructor(){
		this.hp = 1;
		this.x = 0;
		this.y = 0;
		this.lane = 0;
		this.coolTime = 0;
		this.anim = 0;
		this.frame = 0;
	}
	draw(){
		if(this.frame==0){
			ctx.drawImage(catIdle1, this.x, this.y);
		}
		else if(this.frame==1){
			ctx.drawImage(catIdle2, this.x, this.y);
		}
	}
}

class Sheep{
	constructor(){
		this.hp = 1;
		this.x = 0;
		this.y = 0;
		this.lane = 0;
		this.coolTime = 0;
		this.anim = 0;
		this.frame = 0;
	}
	draw(){
		if(this.frame==0){
			ctx.drawImage(sheepIdle1, this.x, this.y);
		}
		else if(this.frame==1){
			ctx.drawImage(sheepIdle2, this.x, this.y);
		}
	}
}

class Squirrel{
	constructor(){
		this.hp = 1;
		this.x = 0;
		this.y = 0;
		this.lane = 0;
		this.coolTime = 0;
		this.anim = 0;
		this.frame = 0;
	}
	draw(){
		if(this.frame==0){
			ctx.drawImage(squirrelIdle1, this.x, this.y);
		}
		else if(this.frame==1){
			ctx.drawImage(squirrelIdle2, this.x, this.y);
		}
	}
}

class Fox{
	constructor(){
		this.hp = 3;
		this.x = 0;
		this.y = 0;
		this.lane = 0;
		this.coolTime = 0;
		this.gold = 50;
	}
	draw(){
		ctx.drawImage(foxImg, this.x, this.y);
	}
}

class Ratel{
	constructor(){
		this.hp = 3;
		this.x = 0;
		this.y = 0;
		this.lane = 0;
		this.coolTime = 0;
		this.gold = 80;
	}
	draw(){
		ctx.drawImage(ratelImg, this.x, this.y);
	}
}

class Crocodile{
	constructor(){
		this.hp = 3;
		this.x = 0;
		this.y = 0;
		this.lane = 0;
		this.coolTime = 0;
		this.gold = 100;
	}
	draw(){
		ctx.drawImage(crocodileImg, this.x, this.y);
	}
}

class Bear{
	constructor(){
		this.hp = 3;
		this.x = 0;
		this.y = 0;
		this.lane = 0;
		this.coolTime = 0;
		this.gold = 200;
	}
	draw(){
		ctx.drawImage(bearImg, this.x, this.y);
	}
}

function draw(){
	ctx.drawImage(backGround, 0, 0);
	drawUI();
	drawMob();
	if(wait == false){
		drawPJT();
	}
}

function font(){
	ctx.fillStyle = "yellow";
	ctx.font = "48px serif";
	ctx.fillText(gold, 32*8*4, 32*2);
}

function drawUI(){
	ctx.drawImage(UIbtn1, UI1Pos[0], UI1Pos[1]);
	ctx.drawImage(UIbtn2, UI2Pos[0], UI2Pos[1]);
	ctx.drawImage(UIbtn3, UI3Pos[0], UI3Pos[1]);
	ctx.drawImage(UIbtn4, UI4Pos[0], UI4Pos[1]);
	ctx.drawImage(UIbtn5, UI5Pos[0], UI5Pos[1]);
	ctx.drawImage(UIbtn6, UI6Pos[0], UI6Pos[1]);
	ctx.drawImage(UIbtn7, UI7Pos[0], UI7Pos[1]);
	ctx.drawImage(UIempt, UIemptPos[0], UIemptPos[1]);
	 font();
}

function drawMob(){
	chickens.forEach((a, i, o)=>{
		if(a.x < 0){
			o.splice(i, 1)
		}
		a.coolTime++;
		a.anim++;
		if(a.anim >= 30){
			if(a.frame == 0){
				a.frame = 1;
			}
			else if(a.frame == 1){
				a.frame = 0;
			}
			a.anim = 0;
		}
		if(a.coolTime > 180){
			a.coolTime = 0;
			var egg = new Egg();
			egg.x = a.x + 32*4;
			egg.y = a.y + 32*2-8;
			egg.lane = a.lane;
			eggs.push(egg);
		}
		a.draw();
	})
	cats.forEach((a, i, o)=>{
		if(a.x < 0){
			o.splice(i, 1)
		}
		a.coolTime++;
		a.anim++;
		if(a.anim >= 30){
			if(a.frame == 0){
				a.frame = 1;
			}
			else if(a.frame == 1){
				a.frame = 0;
			}
			a.anim = 0;
		}
		a.draw();
	})
	sheeps.forEach((a, i, o)=>{
		if(a.x < 0){
			o.splice(i, 1)
		}
		a.coolTime++;
		a.anim++;
		if(a.anim >= 30){
			if(a.frame == 0){
				a.frame = 1;
			}
			else if(a.frame == 1){
				a.frame = 0;
			}
			a.anim = 0;
		}
		a.draw();
	})
	squirrels.forEach((a, i, o)=>{
		if(a.x < 0){
			o.splice(i, 1)
		}
		a.coolTime++;
		a.anim++;
		if(a.anim >= 30){
			if(a.frame == 0){
				a.frame = 1;
			}
			else if(a.frame == 1){
				a.frame = 0;
			}
			a.anim = 0;
		}
		a.draw();
	})
	enemies.forEach((a, i, o)=>{
		if(a.x < -32*2*4){
			o.splice(i, 1)
		}
		a.x -= 3.5;
		a.draw();
	})
	/*foxes.forEach((a, i, o)=>{
		if(a.x < -32*2*4){
			o.splice(i, 1)
		}
		a.x -= 3.5;
		a.draw();
	})
	crocs.forEach((a, i, o)=>{
		if(a.x < -32*2*4){
			o.splice(i, 1)
		}
		a.x -= 3.5;
		a.draw();
	})
	ratels.forEach((a, i, o)=>{
		if(a.x < -32*2*4){
			o.splice(i, 1)
		}
		a.x -= 3.5;
		a.draw();
	})
	bears.forEach((a, i, o)=>{
		if(a.x < -32*2*4){
			o.splice(i, 1)
		}
		a.x -= 3.5;
		a.draw();
	})*/
}

function drawPJT(){//발사체
	eggs.forEach((a, i, o)=>{
		if(a.x > 10*32*4){
			o.splice(i, 1)
		}
		a.x += 5;
		if(collision(a, enemies) == true){
			o.splice(i, 1)
		}
		a.draw();
	})
}

function collision(team, enemy){
	var collide = false;
	enemy.forEach((a, i, o)=>{
		var difX = a.x - (team.x + team.width);
		console.debug(a.lane, team.lane);
		if(difX < 0 && (a.lane == team.lane)){
			a.hp--;
			if(a.hp <= 0){
				gold += a.gold;
				o.splice(i, 1)
			}
			collide = true;
		}
	})
	if(collide==true){
		return true;
	}
	else{
		return false;
	}
}

function mobSpawn(){
	spawnTimer++;
	phaseCnt++;
	if(phaseCnt > phaseRate){
		phaseCnt = 0;
		if(phase < 4){
			phase++;
		}
		else{
			wait = true;
			phase = 0;
		}
	}
	if(spawnTimer > spawnRate[phase]){
		spawnTimer = 0;
		randomNum = Math.floor(Math.random() * 100) + 1;
		console.log(randomNum, phase);
		if(randomNum < animalPer[0][phase]){ //Fox
			spawnPosY = Math.floor(Math.random() * 4) + 1;
			var fox = new Fox();
			fox.x = 32*10*4;
			fox.y = spawnPosY*32*4 - 16;
			fox.lane = spawnPosY;
			//foxes.push(fox);
			enemies.push(fox);
		}
		else if(randomNum >= animalPer[0][phase] && //Ratel
			    randomNum < animalPer[0][phase] + animalPer[1][phase]){
					spawnPosY = Math.floor(Math.random() * 4) + 1;
					var ratel = new Ratel();
					ratel.x = 32*10*4;
					ratel.y = spawnPosY*32*4 - 16;
					ratel.lane = spawnPosY;
					//ratels.push(ratel);
					enemies.push(ratel);
		}
		else if(randomNum >= animalPer[0][phase] + animalPer[1][phase] && //Crocodile
			    randomNum < animalPer[0][phase] + animalPer[1][phase] + animalPer[2][phase]){
					spawnPosY = Math.floor(Math.random() * 4) + 1;
					var crocodile = new Crocodile();
					crocodile.x = 32*10*4;
					crocodile.y = spawnPosY*32*4 - 16;
					crocodile.lane = spawnPosY;
					//crocs.push(crocodile);
					enemies.push(crocodile);
		}
		else if(randomNum >= animalPer[0][phase] + animalPer[1][phase] + animalPer[2][phase] &&
			    randomNum < animalPer[0][phase] + animalPer[1][phase] + animalPer[2][phase] + animalPer[3][phase]){
					spawnPosY = Math.floor(Math.random() * 3) + 1;
					var bear = new Bear();
					bear.x = 32*10*4;
					bear.y = spawnPosY*32*4 - 16;
					bear.lane = spawnPosY;
					//bears.push(bear);	
					enemies.push(bear);
		}
	}
}

function goldUp(){
	goldCnt++
	if(goldCnt >= 60){
		goldCnt = 0;
		gold += 10;
	}
}

function update(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	if(wait == false){
		goldUp();
		mobSpawn();
	}
	draw();
	//clearInterval(interval);
}

var interval = setInterval(update, 16);

function clickPointer(event){
	const dx = event.clientX - ctx.canvas.offsetLeft;
	const dy = event.clientY - ctx.canvas.offsetTop;
	if(UISelect == 0){
		UIChanger(dx, dy);
	}
	else{
		if(dy > 32*4 && dy < UI1Pos[1]){
			placeMob(dx, dy);
		}
	}
}

function UIChanger(x, y){
	if(y>=UI1Pos[1]){
		if(x>=UI1Pos[0] && x<UI2Pos[0]){
			UIbtn1.src = "./UI/UIbtn1Down.png"
			if(gold >= 100){
				gold -= 100;
				UISelect = 1;
			}
		}
		else if(x>=UI2Pos[0] && x<UI3Pos[0]){
			UIbtn2.src = "./UI/UIbtn2Down.png"
			if(gold >= 200){
				gold -= 200;
				UISelect = 2;
			}
		}
		else if(x>=UI3Pos[0] && x<UI4Pos[0]){
			UIbtn3.src = "./UI/UIbtn3Down.png"
			if(gold >= 300){
				gold -= 300;
				UISelect = 3;
			}
		}
		else if(x>=UI4Pos[0] && x<UI5Pos[0]){
			UIbtn4.src = "./UI/UIbtn4Down.png"
			if(gold >= 400){
				gold -= 400;
				UISelect = 4;
			}
		}
		else if(x>=UI5Pos[0] && x<UI6Pos[0]){
			UIbtn5.src = "./UI/UIbtn5Down.png"
			UISelect = 0;
		}
		else if(x>=UI6Pos[0] && x<UI7Pos[0]){
			UIbtn6.src = "./UI/UIbtn6Down.png"
			UISelect = 0;
		}
		else if(x>=UI7Pos[0]){
			UIbtn7.src = "./UI/UIbtn7Down.png"
			wait = false;
			UISelect = 0;
		}
	}
}

function UIReset(){
	UIbtn1.src = "./UI/UIbtn1Up.png";
	UIbtn2.src = "./UI/UIbtn2Up.png";
	UIbtn3.src = "./UI/UIbtn3Up.png";
	UIbtn4.src = "./UI/UIbtn4Up.png";
	UIbtn5.src = "./UI/UIbtn5Up.png";
	UIbtn6.src = "./UI/UIbtn6Up.png";
	UIbtn7.src = "./UI/UIbtn7Up.png";
}

function follow(x, y){
	UIemptPos[0] = x - ctx.canvas.offsetLeft - 64;
	UIemptPos[1] = y - ctx.canvas.offsetTop - 64;
	if(UISelect==0){
		UIempt.src = "./UI/empty.png";
	}
	else if(UISelect==1){
		UIempt.src = "./UI/UI1SLT.png";
	}
	else if(UISelect==2){
		UIempt.src = "./UI/UI2SLT.png";
	}
	else if(UISelect==3){
		UIempt.src = "./UI/UI3SLT.png";
	}
	else if(UISelect==4){
		UIempt.src = "./UI/UI4SLT.png";
	}
}

function placeMob(x, y){
	if(UISelect==1){
		var chicken = new Chicken();
		chicken.x = x-x%(32*4);
		chicken.y = y-y%(32*4);
		chicken.lane = parseInt(y/(32*4));
		chickens.push(chicken);
	}
	else if(UISelect==2){
		var cat = new Cat();
		cat.x = x-x%(32*4);
		cat.y = y-y%(32*4);
		cat.lane = parseInt(y/(32*4));
		cats.push(cat);
	}
	else if(UISelect==3){
		var sheep = new Sheep();
		sheep.x = x-x%(32*4);
		sheep.y = y-y%(32*4);
		sheep.lane = parseInt(y/(32*4));
		sheeps.push(sheep);
	}
	else if(UISelect==4){
		var squirrel = new Squirrel();
		squirrel.x = x-x%(32*4);
		squirrel.y = y-y%(32*4);
		squirrel.lane = parseInt(y/(32*4));
		squirrels.push(squirrel);
	}
	UIempt.src = "./UI/empty.png";
	UISelect=0;
}

canvas.addEventListener('mousedown', clickPointer);
canvas.addEventListener('mouseup', UIReset);
canvas.addEventListener('mousemove', (e)=> {
	follow(e.pageX, e.pageY);
});