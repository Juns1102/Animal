var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var backGround = new Image();
backGround.src = "./UI/background.png";

var UI1Pos = [0, 7*32*4];
var UI2Pos = [1*32*4, 7*32*4];
var UI3Pos = [2*32*4, 7*32*4];
var UI4Pos = [3*32*4, 7*32*4];
var UI5Pos = [4*32*4, 7*32*4];
var UI6Pos = [6*32*4, 7*32*4];
var UI7Pos = [8*32*4, 7*32*4];
var UIemptPos = [0, 0];

var heart = new Image();
heart.src = "./UI/heart.png"
var coin = new Image();
coin.src = "./UI/coin.png"
var bgmImage = new Image();
bgmImage.src = "./UI/bgmOff.png"
var bgmSelect = false;

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

var bgm = new Audio();
bgm.src = './Sound/wait.mp3';
bgm.autoplay = true;
bgm.volume = 0.2;
bgm.loop = true;

//닭 공격 효과음
var popSounds = []; 
for(var i=0; i < 20; i++){
	var popSound = new Audio('./Sound/pop.mp3');
	popSound.volume = 0.3;
	popSounds.push(popSound);
}

//고양이 공격 효과음
var swingSounds = [];
for(var i=0; i < 20; i++){
	var swingSound = new Audio('./Sound/swing.mp3');
	swingSound.volume = 0.4;
	swingSounds.push(swingSound);
}

//다람쥐 공격 효과음
var sparkSounds = [];
for(var i=0; i < 20; i++){
	var sparkSound = new Audio('./Sound/spark.mp3');
	sparkSound.volume = 0.2;
	sparkSounds.push(sparkSound);
}

//닭 애니메이션
var chickenIdle1 = new Image();
var chickenIdle2 = new Image();
chickenIdle1.src = "./Entity/Anim/chicken_idle_1.png";
chickenIdle2.src = "./Entity/Anim/chicken_idle_2.png";
var chickens = [];

var eggImg = new Image();
eggImg.src = "./Entity/Anim/egg.png";
var eggs = [];

var catIdle1 = new Image();
var catIdle2 = new Image();
catIdle1.src = "./Entity/Anim/cat_idle_1.png";
catIdle2.src = "./Entity/Anim/cat_idle_2.png";
var cats = [];

var catAttack1 = new Image();
var catAttack2 = new Image();
catAttack1.src = "./Entity/Anim/cat_attack_1.png";
catAttack2.src = "./Entity/Anim/cat_attack_2.png";

var catAttackEffect = new Image();
catAttackEffect.src = "./Entity/Anim/cat_attack_effect.png";
var catAttackEffects = [];


//양 애니메이션
var sheepIdle1 = new Image();
var sheepIdle2 = new Image();
sheepIdle1.src = "./Entity/Anim/sheep_idle_1.png";
sheepIdle2.src = "./Entity/Anim/sheep_idle_2.png";
var sheeps = [];

//다람쥐 애니메이션
var squirrelIdle1 = new Image();
var squirrelIdle2 = new Image();
squirrelIdle1.src = "./Entity/Anim/squirrel_idle_1.png";
squirrelIdle2.src = "./Entity/Anim/squirrel_idle_2.png";
var squirrels = [];

var squirrelAttack1 = new Image();
var squirrelAttack2 = new Image();
squirrelAttack1.src = "./Entity/Anim/squirrel_attack_1.png";
squirrelAttack2.src = "./Entity/Anim/squirrel_attack_2.png";

var squirrelAttackEffect1 = new Image();
var squirrelAttackEffect2 = new Image();
var squirrelAttackEffect3 = new Image();
var squirrelAttackEffect4 = new Image();
var squirrelAttackEffect5 = new Image();
squirrelAttackEffect1.src = "./Entity/Anim/thunder_1.png";
squirrelAttackEffect2.src = "./Entity/Anim/thunder_2.png";
squirrelAttackEffect3.src = "./Entity/Anim/thunder_3.png";
squirrelAttackEffect4.src = "./Entity/Anim/thunder_4.png";
squirrelAttackEffect5.src = "./Entity/Anim/thunder_5.png";
var squirrelAttackEffects = [];

var enemies = [];

var kbIdle1 = new Image();
var kbIdle2 = new Image();
kbIdle1.src = "./Entity/Anim/killerBee_idle_1.png";
kbIdle2.src = "./Entity/Anim/killerBee_idle_2.png";

var kbMove1 = new Image();
var kbMove2 = new Image();
kbMove1.src = "./Entity/Anim/killerBee_move_1.png";
kbMove2.src = "./Entity/Anim/killerBee_move_2.png";

var kbAttack1 = new Image();
var kbAttack2 = new Image();
kbAttack1.src = "./Entity/Anim/killerBee_attack_1.png";
kbAttack2.src = "./Entity/Anim/killerBee_attack_2.png";

var kbAttackEffect = new Image();
kbAttackEffect.src = "./UI/empty.png";
var kbAttackEffects = [];

var foxIdle1 = new Image();
var foxIdle2 = new Image();
foxIdle1.src = "./Entity/Anim/fox_idle_1.png";
foxIdle2.src = "./Entity/Anim/fox_idle_2.png";

var foxMove1 = new Image();
var foxMove2 = new Image();
foxMove1.src = "./Entity/Anim/fox_move_1.png";
foxMove2.src = "./Entity/Anim/fox_move_2.png";

var foxAttack1 = new Image();
var foxAttack2 = new Image();
foxAttack1.src = "./Entity/Anim/fox_attack_1.png";
foxAttack2.src = "./Entity/Anim/fox_attack_2.png";

var foxAttackEffect = new Image();
foxAttackEffect.src = "./UI/empty.png";
var foxAttackEffects = [];

var ratelIdle1 = new Image();
var ratelIdle2 = new Image();
ratelIdle1.src = "./Entity/Anim/ratel_idle_1.png";
ratelIdle2.src = "./Entity/Anim/ratel_idle_2.png";

var ratelMove1 = new Image();
var ratelMove2 = new Image();
ratelMove1.src = "./Entity/Anim/ratel_move_1.png";
ratelMove2.src = "./Entity/Anim/ratel_move_2.png";

var ratelAttack1 = new Image();
var ratelAttack2 = new Image();
ratelAttack1.src = "./Entity/Anim/ratel_attack_1.png";
ratelAttack2.src = "./Entity/Anim/ratel_attack_2.png";

var ratelAttackEffect = new Image();
ratelAttackEffect.src = "./UI/empty.png";
var ratelAttackEffects = [];

var crocodileIdle1 = new Image();
var crocodileIdle2 = new Image();
crocodileIdle1.src = "./Entity/Anim/crocodile_idle_1.png";
crocodileIdle2.src = "./Entity/Anim/crocodile_idle_2.png";

var crocodileMove1 = new Image();
var crocodileMove2 = new Image();
crocodileMove1.src = "./Entity/Anim/crocodile_move_1.png";
crocodileMove2.src = "./Entity/Anim/crocodile_move_2.png";

var crocodileAttack1 = new Image();
var crocodileAttack2 = new Image();
crocodileAttack1.src = "./Entity/Anim/crocodile_attack_1.png";
crocodileAttack2.src = "./Entity/Anim/crocodile_attack_2.png";

var crocodileAttackEffect = new Image();
crocodileAttackEffect.src = "./UI/empty.png";
var crocodileAttackEffects = [];

var bearImg = new Image();
bearImg.src = "./Entity/bear.png";
var bearIdle1 = new Image();
var bearIdle2 = new Image();
bearIdle1.src = "./Entity/Anim/bear_idle_1.png";
bearIdle2.src = "./Entity/Anim/bear_idle_2.png";

var bearMove1 = new Image();
var bearMove2 = new Image();
var bearMove3 = new Image();
var bearMove4 = new Image();
bearMove1.src = "./Entity/Anim/bear_move_1.png";
bearMove2.src = "./Entity/Anim/bear_move_2.png";
bearMove3.src = "./Entity/Anim/bear_move_3.png";
bearMove4.src = "./Entity/Anim/bear_move_4.png";

var bearAttack1 = new Image();
var bearAttack2 = new Image();
bearAttack1.src = "./Entity/Anim/bear_attack_1.png";
bearAttack2.src = "./Entity/Anim/bear_attack_2.png";

var bearAttackEffect = new Image();
bearAttackEffect.src = "./Entity/Anim/bear_attack_effect.png";
var bearAttackEffects = [];

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
var sellMod = false;
var endPhase = false;
var score = 0;
var hearts = 3;

var animalPer = [[100, 40, 35, 20, 10], //killBee
				 [0, 25, 25, 30, 20], //fox
			     [0, 25, 25, 30, 20], //ratel
			     [0, 10, 15, 15, 35], //crocodile
			     [0, 0, 0, 5, 15]]; //bear

class Chicken{
	constructor(){
		this.hp = 1;
		this.x = 0;
		this.y = 0;
		this.width = 32*4;
		this.height = 32*4;
		this.laneX = 0;
		this.laneY = 0;
		this.coolTime = 0;
		this.maxCoolTime = 180;
		this.anim = 0;
		this.frame = 0;
		this.gold = 100;
		this.tag = "chicken";
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
		this.laneX = 0;
		this.laneY = 0;
		this.width = 7*4;
		this.height = 6*4;
		this.coolTime = 0;
		this.damage = 1;
		this.tag = "egg";
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
		this.width = 32*4;
		this.height = 32*4;
		this.laneX = 0;
		this.laneY = 0;
		this.coolTime = 100;
		this.maxCoolTime = 60;
		this.anim = 0;
		this.frame = 0;
		this.onAttack = false;
		this.afterAttack = false;
		this.gold = 200;
		this.tag = "cat";
		this.attackRange = 16*4;
	}
	draw(){
		if(this.onAttack){
			if(this.frame==0){
				ctx.drawImage(catAttack1, this.x, this.y);
			}
			else if(this.frame==1){
				ctx.drawImage(catAttack2, this.x, this.y);
			}
		}
		else{
			if(this.frame==0){
				ctx.drawImage(catIdle1, this.x, this.y);
			}
			else if(this.frame==1){
				ctx.drawImage(catIdle2, this.x, this.y);
			}
		}
	}
}

class CatAttack{
	constructor(){
		this.x = 0;
		this.y = 0;
		this.laneX = 0;
		this.laneY = 0;
		this.width = 16*4;
		this.height = 32*4;
		this.holdTime = 0;
		this.attack = true;
		this.damage = 3;
		this.tag = "catAttack";
	}
	draw(){
		ctx.drawImage(catAttackEffect, this.x, this.y);
	}
}

class Sheep{
	constructor(){
		this.hp = 2;
		this.x = 0;
		this.y = 0;
		this.width = 32*4;
		this.height = 32*4;
		this.laneX = 0;
		this.laneY = 0;
		this.coolTime = 0;
		this.maxCoolTime = 0;
		this.anim = 0;
		this.frame = 0;
		this.gold = 300;
		this.tag = "sheep";
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
		this.width = 32*4;
		this.height = 32*4;
		this.laneX = 0;
		this.laneY = 0;
		this.coolTime = 100;
		this.maxCoolTime = 100;
		this.anim = 0;
		this.frame = 0;
		this.onAttack = false;
		this.afterAttack = false;
		this.gold = 400;
		this.tag = "squirrel";
		this.attackRange = 32*8*4;
	}
	draw(){
		if(this.onAttack){
			if(this.frame==0){
				ctx.drawImage(squirrelAttack1, this.x, this.y);
			}
			else if(this.frame==1){
				ctx.drawImage(squirrelAttack2, this.x, this.y);
			}
		}
		else{
			if(this.frame==0){
				ctx.drawImage(squirrelIdle1, this.x, this.y);
			}
			else if(this.frame==1){
				ctx.drawImage(squirrelIdle2, this.x, this.y);
			}
		}
	}
}

class SquirrelAttack{
	constructor(){
		this.x = 0;
		this.y = 0;
		this.laneX = 0;
		this.laneY = 0;
		this.width = 32*8*4;
		this.height = 32*4;
		this.holdTime = 0;
		this.attack = true;
		this.damage = 1;
		this.tag = "squirrelAttack";
		this.anim = 0;
		this.frame = 0;
	}
	draw(){
		if(this.frame==0){
			ctx.drawImage(squirrelAttackEffect1, this.x, this.y);
		}
		else if(this.frame==1){
			ctx.drawImage(squirrelAttackEffect2, this.x, this.y);
		}
		else if(this.frame==2){
			ctx.drawImage(squirrelAttackEffect3, this.x, this.y);
		}
		else if(this.frame==3){
			ctx.drawImage(squirrelAttackEffect4, this.x, this.y);
		}
		else if(this.frame==4){
			ctx.drawImage(squirrelAttackEffect5, this.x, this.y);
		}
	}
}

class KillBee{
	constructor(){
		this.hp = 3;
		this.x = 0;
		this.y = 0;
		this.laneX = 0;
		this.laneY = 0;
		this.coolTime = 100;
		this.maxCoolTime = 100;
		this.anim = 0;
		this.frame = 0;
		this.frameTiming = 30;
		this.gold = 50;
		this.onAttack = false;
		this.afterAttack = false;
		this.speed = 3.5;
		this.maxSpeed = 3.5;
		this.tag = "killBee";
		this.stun = 0;
		this.score = 100;
	}
	draw(){
		if(this.speed == 0){
			if(this.onAttack == true){
				if(this.frame==0){
					ctx.drawImage(kbAttack1, this.x, this.y);
				}
				else if(this.frame==1){
					ctx.drawImage(kbAttack2, this.x, this.y);
				}
			}
			else{
				if(this.frame==0){
					ctx.drawImage(kbIdle1, this.x, this.y);
				}
				else if(this.frame==1){
					ctx.drawImage(kbIdle2, this.x, this.y);
				}
			}
		}
		else{
			if(this.frame==0){
				ctx.drawImage(kbMove1, this.x, this.y);
			}
			else if(this.frame==1){
				ctx.drawImage(kbMove2, this.x, this.y);
			}
		}
	}
	attack(){
		var kbEffect = new KBAttack();
		kbEffect.x = this.x - kbEffect.width;
		kbEffect.y = this.y;
		kbEffect.laneY = this.laneY;
		kbEffect.draw();
		kbAttackEffects.push(kbEffect);
	}
}

class KBAttack{
	constructor(){
		this.x = 0;
		this.y = 0;
		this.laneX = 0;
		this.laneY = 0;
		this.width = 16*4;
		this.height = 32*4;
		this.holdTime = 0;
		this.attack = true;
		this.damage = 1;
		this.tag = "kbAttack";
	}
	draw(){
		ctx.drawImage(kbAttackEffect, this.x, this.y);
	}
}

class Fox{
	constructor(){
		this.hp = 3;
		this.x = 0;
		this.y = 0;
		this.laneX = 0;
		this.laneY = 0;
		this.coolTime = 100;
		this.maxCoolTime = 100;
		this.anim = 0;
		this.frame = 0;
		this.frameTiming = 30;
		this.gold = 50;
		this.onAttack = false;
		this.afterAttack = false;
		this.speed = 3.5;
		this.maxSpeed = 3.5;
		this.tag = "fox";
		this.stun = 0;
		this.score = 100;
	}
	draw(){
		if(this.speed == 0){
			if(this.onAttack == true){
				if(this.frame==0){
					ctx.drawImage(foxAttack1, this.x, this.y);
				}
				else if(this.frame==1){
					ctx.drawImage(foxAttack2, this.x, this.y);
				}
			}
			else{
				if(this.frame==0){
					ctx.drawImage(foxIdle1, this.x, this.y);
				}
				else if(this.frame==1){
					ctx.drawImage(foxIdle2, this.x, this.y);
				}
			}
		}
		else{
			if(this.frame==0){
				ctx.drawImage(foxMove1, this.x, this.y);
			}
			else if(this.frame==1){
				ctx.drawImage(foxMove2, this.x, this.y);
			}
		}
	}
	attack(){
		var foxEffect = new FoxAttack();
		foxEffect.x = this.x - foxEffect.width;
		foxEffect.y = this.y;
		foxEffect.laneY = this.laneY;
		foxEffect.draw();
		foxAttackEffects.push(foxEffect);
	}
}

class FoxAttack{
	constructor(){
		this.x = 0;
		this.y = 0;
		this.laneX = 0;
		this.laneY = 0;
		this.width = 16*4;
		this.height = 32*4;
		this.holdTime = 0;
		this.attack = true;
		this.damage = 1;
		this.tag = "foxAttack";
	}
	draw(){
		ctx.drawImage(foxAttackEffect, this.x, this.y);
	}
}

class Ratel{
	constructor(){
		this.hp = 3;
		this.x = 0;
		this.y = 0;
		this.laneX = 0;
		this.laneY = 0;
		this.coolTime = 100;
		this.maxCoolTime = 100;
		this.anim = 0;
		this.frame = 0;
		this.frameTiming = 30;
		this.gold = 80;
		this.onAttack = false;
		this.speed = 3.5;
		this.maxSpeed = 3.5;
		this.tag = "ratel";
		this.stun = 0;
		this.score = 200;
	}
	draw(){
		if(this.speed == 0){
			if(this.onAttack == true){
				if(this.frame==0){
					ctx.drawImage(ratelAttack1, this.x, this.y);
				}
				else if(this.frame==1){
					ctx.drawImage(ratelAttack2, this.x, this.y);
				}
			}
			else{
				if(this.frame==0){
					ctx.drawImage(ratelIdle1, this.x, this.y);
				}
				else if(this.frame==1){
					ctx.drawImage(ratelIdle2, this.x, this.y);
				}
			}
		}
		else{
			if(this.frame==0){
				ctx.drawImage(ratelMove1, this.x, this.y);
			}
			else if(this.frame==1){
				ctx.drawImage(ratelMove2, this.x, this.y);
			}
		}
	}
	attack(){
		var ratelEffect = new RatelAttack();
		ratelEffect.x = this.x - ratelEffect.width;
		ratelEffect.y = this.y;
		ratelEffect.laneY = this.laneY;
		ratelEffect.draw();
		ratelAttackEffects.push(ratelEffect);
	}
}

class RatelAttack{
	constructor(){
		this.x = 0;
		this.y = 0;
		this.laneX = 0;
		this.laneY = 0;
		this.width = 16*4;
		this.height = 32*4;
		this.holdTime = 0;
		this.attack = true;
		this.damage = 1;
		this.tag = "ratelAttack";
	}
	draw(){
		ctx.drawImage(ratelAttackEffect, this.x, this.y);
	}
}

class Crocodile{
	constructor(){
		this.hp = 3;
		this.x = 0;
		this.y = 0;
		this.laneX = 0;
		this.laneY = 0;
		this.coolTime = 100;
		this.maxCoolTime = 100;
		this.anim = 0;
		this.frame = 0;
		this.frameTiming = 30;
		this.gold = 100;
		this.onAttack = false;
		this.speed = 3.5;
		this.maxSpeed = 3.5;
		this.tag = "crocodile";
		this.stun = 0;
		this.score = 300;
	}
	draw(){
		if(this.speed == 0){
			if(this.onAttack == true){
				if(this.frame==0){
					ctx.drawImage(crocodileAttack1, this.x, this.y);
				}
				else if(this.frame==1){
					ctx.drawImage(crocodileAttack2, this.x, this.y);
				}
			}
			else{
				if(this.frame==0){
					ctx.drawImage(crocodileIdle1, this.x, this.y);
				}
				else if(this.frame==1){
					ctx.drawImage(crocodileIdle2, this.x, this.y);
				}
			}
		}
		else{
			if(this.frame==0){
				ctx.drawImage(crocodileMove1, this.x, this.y);
			}
			else if(this.frame==1){
				ctx.drawImage(crocodileMove2, this.x, this.y);
			}
		}
	}
	attack(){
		var crocodileEffect = new FoxAttack();
		crocodileEffect.x = this.x - crocodileEffect.width;
		crocodileEffect.y = this.y;
		crocodileEffect.laneY = this.laneY;
		crocodileEffect.draw();
		crocodileAttackEffects.push(crocodileEffect);
	}
}

class CrocodileAttack{
	constructor(){
		this.x = 0;
		this.y = 0;
		this.laneX = 0;
		this.laneY = 0;
		this.width = 16*4;
		this.height = 32*4;
		this.holdTime = 0;
		this.attack = true;
		this.damage = 1;
		this.tag = "crocodileAttack";
	}
	draw(){
		ctx.drawImage(crocodileAttackEffect, this.x, this.y);
	}
}

class Bear{
	constructor(){
		this.hp = 3;
		this.x = 0;
		this.y = 0;
		this.laneX = 0;
		this.laneY = 0;
		this.coolTime = 100;
		this.maxCoolTime = 100;
		this.anim = 0;
		this.frame = 0;
		this.frameTiming = 30;
		this.gold = 200;
		this.onAttack = false;
		this.speed = 3.5;
		this.maxSpeed = 3.5;
		this.tag = "bear";
		this.stun = 0;
		this.score = 400;
	}
	draw(){
		if(this.speed == 0){
			if(this.onAttack == true){
				if(this.frame==0){
					ctx.drawImage(bearAttack1, this.x, this.y);
				}
				else if(this.frame==1){
					ctx.drawImage(bearAttack2, this.x, this.y);
				}
			}
			else{
				if(this.frame==0){
					ctx.drawImage(bearIdle1, this.x, this.y);
				}
				else if(this.frame==1){
					ctx.drawImage(bearIdle2, this.x, this.y);
				}
			}
		}
		else{
			if(this.frame==0){
				ctx.drawImage(bearMove1, this.x, this.y);
			}
			else if(this.frame==1){
				ctx.drawImage(bearMove2, this.x, this.y);
			}
			else if(this.frame==2){
				ctx.drawImage(bearMove3, this.x, this.y);
			}
			else if(this.frame==3){
				ctx.drawImage(bearMove4, this.x, this.y);
			}
		}
	}
	attack(){
		var bearEffect = new BearAttack();
		bearEffect.x = this.x - 32*4;
		bearEffect.y = this.y;
		bearEffect.laneY = this.laneY;
		bearEffect.draw();
		bearAttackEffects.push(bearEffect);
	}
}

class BearAttack{
	constructor(){
		this.x = 0;
		this.y = 0;
		this.laneX = 0;
		this.laneY = 0;
		this.width = 16*4;
		this.height = 32*4;
		this.holdTime = 0;
		this.attack = true;
		this.damage = 1;
		this.tag = "bearAttack";
	}
	draw(){
		ctx.drawImage(bearAttackEffect, this.x, this.y);
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
	ctx.textBaseline = "top";
	ctx.textAlign = "left"
	ctx.fillStyle = "yellow";
	ctx.font = "48px Home Video";
	ctx.fillText(gold, 16*4 + 16, 32*3 - 11);
	ctx.textAlign = "end";
	ctx.fillStyle = "white";
	ctx.fillText("score", 32*5*4+32*2 + 10, 8);
	ctx.fillStyle = "white";
	ctx.fillText(score, 32*5*4+32*2 + 10, 32*2-15 + 8);
	ctx.fillStyle = "white";
	ctx.fillText((round+1)+"-"+(phase+1), 32*10*4 - 8, 8);
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
	if(bgmSelect == false){
		bgmImage.src = "./UI/bgmOff.png";
		bgm.pause();
	}
	else{
		bgmImage.src = "./UI/bgmOn.png";
		bgm.play();
		
	}
	ctx.drawImage(bgmImage, 32*9*4 + 50, 16 + 16*4);
	if(hearts>=1){
		ctx.drawImage(heart, 8, 8);
	}
	if(hearts>=2){
		ctx.drawImage(heart, 16+16*4, 8);
	}
	if(hearts>=3){
		ctx.drawImage(heart, 24+16*4*2, 8);
	}
	ctx.drawImage(coin, 8, 16 + 16*4);
	font();
}

function drawMob(){
	chickens.forEach((a, i, o)=>{
		if(a.hp <= 0){
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
		if(a.coolTime > a.maxCoolTime && !wait){
			for(var i=0; i<popSounds.length; i++){
				if(popSounds[i].paused){
					popSounds[i].play();
					break;
				}
			}
			a.coolTime = 0;
			var egg = new Egg();
			egg.x = a.x + 32*4;
			egg.y = a.y + 32*2-8;
			egg.laneY = a.laneY;
			eggs.push(egg);
		}
		a.draw();
	})
	cats.forEach((a, i, o)=>{
		if(a.hp <= 0){
			o.splice(i, 1)
		}
		a.anim++;
		if(attackRange(a, enemies) == true && a.coolTime >= a.maxCoolTime){
			a.afterAttack = false;
			a.coolTime = 0;
			a.anim = 0;
			a.onAttack = true;
			a.frame = 0;
		}
		if(a.onAttack){
			if(a.anim >= 30 && a.frame == 0){
				for(var i=0; i<swingSounds.length; i++){
					if(swingSounds[i].paused){
						swingSounds[i].play();
						break;
					}
				}
				a.frame = 1;
				a.anim = 0;
				var catAttackEffect = new CatAttack();
				catAttackEffect.x = a.x + 32*4;
				catAttackEffect.y = a.y;
				catAttackEffect.laneY = a.laneY;
				catAttackEffect.draw();
				catAttackEffects.push(catAttackEffect);
			}
			else if(a.anim >= 30 && a.frame == 1){
				a.afterAttack = true;
				a.onAttack = false;
			}
		}
		else{
			if(a.afterAttack){
				a.coolTime++;
			}
			if(a.anim >= 30){
				if(a.frame == 0){
					a.frame = 1;
				}
				else if(a.frame == 1){
					a.frame = 0;
				}
				a.anim = 0;
			}
		}
		a.draw();
	})
	sheeps.forEach((a, i, o)=>{
		if(a.hp <= 0){
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
		if(a.hp <= 0){
			o.splice(i, 1)
		}
		a.anim++;
		if(attackRange(a, enemies) == true && a.coolTime >= a.maxCoolTime){
			a.afterAttack = false;
			a.coolTime = 0;
			a.anim = 0;
			a.onAttack = true;
			a.frame = 0;
		}
		if(a.onAttack){
			if(a.anim >= 15 && a.frame == 0){
				for(var i=0; i<sparkSounds.length; i++){
					if(sparkSounds[i].paused){
						sparkSounds[i].play();
						break;
					}
				}
				a.frame = 1;
				a.anim = 0;
				var squirrelAttack = new SquirrelAttack();
				squirrelAttack.x = a.x + 32*4;
				squirrelAttack.y = a.y;
				squirrelAttack.laneY = a.laneY;
				squirrelAttack.draw();
				squirrelAttackEffects.push(squirrelAttack);
			}
			else if(a.anim >= 25 && a.frame == 1){
				a.afterAttack = true;
				a.onAttack = false;
				a.frame = 1;
				a.anim = 0;
			}
		}
		else{
			if(a.afterAttack){
				a.coolTime++;
			}
			if(a.anim >= 30){
				if(a.frame == 0){
					a.frame = 1;
				}
				else if(a.frame == 1){
					a.frame = 0;
				}
				a.anim = 0;
			}
		}
		a.draw();
	})
	enemies.forEach((a, i, o)=>{
		if(a.x < -32*2*4){
			o.splice(i, 1)
			hearts--;
		}
		a.anim++;
		if(a.stun > 0){
			a.speed = 0;
			a.stun--;
		}
		else if(mobStop(a) == true){
			a.speed = 0;
			if(a.coolTime >= a.maxCoolTime){
				a.afterAttack = false;
				a.coolTime = 0;
				a.anim = 0;
				a.onAttack = true;
				a.frame = 0;
			}
		}
		else if(mobStop(a) == false){
			if(a.onAttack == false){
				a.speed = a.maxSpeed;
			}
		}
		if(a.onAttack){
			if(a.anim >= a.frameTiming && a.frame == 0){
				// for(var i=0; i<swingSounds.length; i++){
				// 	if(swingSounds[i].paused){
				// 		swingSounds[i].play();
				// 		break;
				// 	}
				// }
				a.frame = 1;
				a.anim = 0;
				a.attack();
			}
			else if(a.anim >= a.frameTiming && a.frame == 1){
				a.afterAttack = true;
				a.onAttack = false;
				a.frame = 0;
				a.anim = 0;
			}
		}
		else{
			if(a.afterAttack){
				a.coolTime++;
			}
			if(a.tag == "bear"){
				if(a.anim >= 30){
					if(a.speed == 0){
						if(a.frame == 0){
							a.frame = 1;
						}
						else if(a.frame == 1){
							a.frame = 0;
						}
					}
					else{
						if(a.frame == 0){
							a.frame = 1;
						}
						else if(a.frame == 1){
							a.frame = 2;
						}
						else if(a.frame == 2){
							a.frame = 3;
						}
						else if(a.frame == 3){
							a.frame = 0;
						}
					}
					a.anim = 0;
				}
			}
			else{
				if(a.anim >= 30){
					if(a.frame == 0){
						a.frame = 1;
					}
					else if(a.frame == 1){
						a.frame = 0;
					}
					a.anim = 0;
				}
			}
		}
		a.x -= a.speed;
		a.draw();
	})
}

function mobStop(enemy){
	var stop = false;
	chickens.forEach((a, i, o)=>{
		if(enemy.tag=="bear"){
			if(enemy.laneY == a.laneY || enemy.laneY+1 == a.laneY){
				if(enemy.x <= a.x + a.width - 32){
					stop = true;
				}
			}
		}
		else{
			if(enemy.laneY == a.laneY){
				if(enemy.x <= a.x + a.width){
					stop = true;
				}
			}
		}
	})
	cats.forEach((a, i, o)=>{
		if(enemy.tag=="bear"){
			if(enemy.laneY == a.laneY || enemy.laneY+1 == a.laneY){
				if(enemy.x <= a.x + a.width - 32){
					stop = true;
				}
			}
		}
		else{
			if(enemy.laneY == a.laneY){
				if(enemy.x <= a.x + a.width){
					stop = true;
				}
			}
		}
	})
	sheeps.forEach((a, i, o)=>{
		if(enemy.tag=="bear"){
			if(enemy.laneY == a.laneY || enemy.laneY+1 == a.laneY){
				if(enemy.x <= a.x + a.width - 32){
					stop = true;
				}
			}
		}
		else{
			if(enemy.laneY == a.laneY){
				if(enemy.x <= a.x + a.width){
					stop = true;
				}
			}
		}
	})
	squirrels.forEach((a, i, o)=>{
		if(enemy.tag=="bear"){
			if(enemy.laneY == a.laneY || enemy.laneY+1 == a.laneY){
				if(enemy.x <= a.x + a.width - 32){
					stop = true;
				}
			}
		}
		else{
			if(enemy.laneY == a.laneY){
				if(enemy.x <= a.x + a.width){
					stop = true;
				}
			}
		}
	})
	return stop;
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
	catAttackEffects.forEach((a, i, o)=>{
		if(a.attack==true){
			if(collision(a, enemies) == true){
				a.attack = false;
			}
		}
		a.holdTime++;
		if(a.holdTime >= 30){
			o.splice(i, 1)
		}
		a.draw();
	})
	squirrelAttackEffects.forEach((a, i, o)=>{
		if(a.attack==true && a.anim == 3){
			if(collision(a, enemies) == true){
				a.attack = false;
			}
		}
		a.anim++;
		if(a.frame==4){
			a.holdTime++;
		}
		if(a.anim >= 5){
			if(a.frame == 0){
				a.frame = 1;
			}
			else if(a.frame == 1){
				a.frame = 2;
			}
			else if(a.frame == 2){
				a.frame = 3;
			}
			else if(a.frame == 3){
				a.frame = 4;
			}
			else if(a.holdTime >= 5){
				o.splice(i, 1)
			}
			a.anim = 0;
		}
		a.draw();
	})
	foxAttackEffects.forEach((a, i, o)=>{
		if(a.attack==true){
			if(collision2(a) == true){
				a.attack = false;
			}
		}
		a.holdTime++;
		if(a.holdTime >= 30){
			o.splice(i, 1)
		}
		a.draw();
	})
	ratelAttackEffects.forEach((a, i, o)=>{
		if(a.attack==true){
			if(collision2(a) == true){
				a.attack = false;
			}
		}
		a.holdTime++;
		if(a.holdTime >= 30){
			o.splice(i, 1)
		}
		a.draw();
	})
	crocodileAttackEffects.forEach((a, i, o)=>{
		if(a.attack==true){
			if(collision2(a) == true){
				a.attack = false;
			}
		}
		a.holdTime++;
		if(a.holdTime >= 30){
			o.splice(i, 1)
		}
		a.draw();
	})
	kbAttackEffects.forEach((a, i, o)=>{
		if(a.attack==true){
			if(collision2(a) == true){
				a.attack = false;
			}
		}
		a.holdTime++;
		if(a.holdTime >= 30){
			o.splice(i, 1)
		}
		a.draw();
	})
	bearAttackEffects.forEach((a, i, o)=>{
		if(a.attack==true){
			if(collision2(a) == true){
				a.attack = false;
			}
		}
		a.holdTime++;
		if(a.holdTime >= 30){
			o.splice(i, 1)
		}
		a.draw();
	})
}

function collision(team, enemy){
	var collide = false;
	enemy.forEach((a, i, o)=>{
		var difX = a.x - (team.x + team.width);
		if(a.tag=="bear"){
			if(difX < -32 && ((a.laneY == team.laneY) || (a.laneY + 1) == team.laneY)){
				a.hp -= team.damage;
				if(team.tag == "squirrelAttack"){
					a.stun = 30;
				}
				if(a.hp <= 0){
					gold += a.gold;
					score += a.score;
					o.splice(i, 1)
				}
				collide = true;
			}
		}
		else{
			if(difX < 0 && (a.laneY == team.laneY)){
				a.hp -= team.damage;
				if(team.tag == "squirrelAttack"){
					a.stun = 30;
				}
				if(a.hp <= 0){
					gold += a.gold;
					score += a.score;
					o.splice(i, 1)
				}
				collide = true;
			}
		}
	})
	return collide;
}

function collision2(enemy){
	var stop = false;
	chickens.forEach((a, i, o)=>{
		if(enemy.tag=="bearAttack"){
			if(enemy.laneY == a.laneY || enemy.laneY+1 == a.laneY){
				if(enemy.x + enemy.width <= a.x + a.width){
					a.hp -= enemy.damage;
					stop = true;
				}
			}
		}
		else{
			if(enemy.laneY == a.laneY){
				if(enemy.x <= a.x + a.width){
					a.hp -= enemy.damage;
					stop = true;
				}
			}
		}
	})
	cats.forEach((a, i, o)=>{
		if(enemy.tag=="bearAttack"){
			if(enemy.laneY == a.laneY || enemy.laneY+1 == a.laneY){
				if(enemy.x + enemy.width <= a.x + a.width){
					a.hp -= enemy.damage;
					stop = true;
				}
			}
		}
		else{
			if(enemy.laneY == a.laneY){
				if(enemy.x <= a.x + a.width){
					a.hp -= enemy.damage;
					stop = true;
				}
			}
		}
	})
	sheeps.forEach((a, i, o)=>{
		if(enemy.tag=="bearAttack"){
			if(enemy.laneY == a.laneY || enemy.laneY+1 == a.laneY){
				if(enemy.x + enemy.width <= a.x + a.width){
					a.hp -= enemy.damage;
					stop = true;
				}
			}
		}
		else{
			if(enemy.laneY == a.laneY){
				if(enemy.x <= a.x + a.width){
					a.hp -= enemy.damage;
					stop = true;
				}
			}
		}
	})
	squirrels.forEach((a, i, o)=>{
		if(enemy.tag=="bearAttack"){
			if(enemy.laneY == a.laneY || enemy.laneY+1 == a.laneY){
				if(enemy.x + enemy.width <= a.x + a.width){
					a.hp--;
					stop = true;
				}
			}
		}
		else{
			if(enemy.laneY == a.laneY){
				if(enemy.x <= a.x + a.width){
					a.hp--;
					stop = true;
				}
			}
		}
	})
	return stop;
}

function attackRange(team, enemy){
	var collide = false;
	enemy.forEach((a)=>{
		var difX = a.x - (team.x + team.width + team.attackRange);
		if(a.tag=="bear"){
			if(difX < 0 && ((a.laneY == team.laneY) || (a.laneY + 1) == team.laneY)){
				collide = true;
			}
		}
		else{
			if(difX < 0 && (a.laneY == team.laneY)){
				collide = true;
			}
		}
	})
	return collide;
}

function mobSpawn(){
	spawnTimer++;
	phaseCnt++;
	if(phaseCnt > phaseRate){
		if(phase < 4){
			phaseCnt = 0;
			phase++;
		}
		else{
			endPhase = true;
			if(enemies[0]==undefined){
				wait = true;
				bgm.src = "./Sound/battle.mp3";
				phaseCnt = 0;
				UIbtn7.src = "./UI/UIbtn7Up.png";
				phase = 0;
				endPhase = false;
			}
		}
	}
	if(phase <= 4 && !endPhase){
		if(spawnTimer > spawnRate[phase]){
			spawnTimer = 0;
			randomNum = Math.floor(Math.random() * 100) + 1;
			if(randomNum < animalPer[0][phase]){ //Fox
				spawnPosY = Math.floor(Math.random() * 4) + 3;
				var kb = new KillBee();
				kb.x = 32*10*4;
				kb.y = spawnPosY*32*4 - 16;
				kb.laneY = spawnPosY;
				enemies.push(kb);
			}
			else if(randomNum >= animalPer[0][phase] && //Ratel
					randomNum < animalPer[0][phase] + animalPer[1][phase]){
						spawnPosY = Math.floor(Math.random() * 4) + 3;
						var fox = new Fox();
						fox.x = 32*10*4;
						fox.y = spawnPosY*32*4 - 16;
						fox.laneY = spawnPosY;
						enemies.push(fox);
			}
			else if(randomNum >= animalPer[0][phase] + animalPer[1][phase] && //Crocodile
					randomNum < animalPer[0][phase] + animalPer[1][phase] + animalPer[2][phase]){
						spawnPosY = Math.floor(Math.random() * 4) + 3;
						var ratel = new Ratel();
						ratel.x = 32*10*4;
						ratel.y = spawnPosY*32*4 - 16;
						ratel.laneY = spawnPosY;
						enemies.push(ratel);
			}
			else if(randomNum >= animalPer[0][phase] + animalPer[1][phase] + animalPer[2][phase] &&
					randomNum < animalPer[0][phase] + animalPer[1][phase] + animalPer[2][phase] + animalPer[3][phase]){
						spawnPosY = Math.floor(Math.random() * 4) + 3;
						var crocodile = new Crocodile();
						crocodile.x = 32*10*4;
						crocodile.y = spawnPosY*32*4 - 16;
						crocodile.laneY = spawnPosY;
						enemies.push(crocodile);
			}
			else if(randomNum >= animalPer[0][phase] + animalPer[1][phase] + animalPer[2][phase] + animalPer[3][phase] &&
					randomNum < animalPer[0][phase] + animalPer[1][phase] + animalPer[2][phase] + animalPer[3][phase] + animalPer[4][phase]){
						spawnPosY = Math.floor(Math.random() * 4) + 2;
						var bear = new Bear();
						bear.x = 32*10*4;
						bear.y = spawnPosY*32*4 - 16;
						bear.laneY = spawnPosY;
						enemies.push(bear);
		}
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
	if(dy >= 16 + 16*4 && dy<16 + 16*4 + 16*4){
		if(dx>=32*9*4 + 50 && dx<32*9*4 + 50+16*4){
			if(bgmSelect){
				bgmSelect=false;
			}
			else{
				bgmSelect=true;
			}
		}
	}
	if(dy>=UI1Pos[1]){
		UIChanger(dx, dy);
	}
	else{
		if(dy > 32*4*3 && dy < UI1Pos[1] && dx >= 32*4){
			placeMob(dx, dy);
		}
	}
}

function UIChanger(x, y){
	if(y>=UI1Pos[1]){
		if(x>=UI1Pos[0] && x<UI2Pos[0]){
			UIbtn1.src = "./UI/UIbtn1Down.png"
			if(UISelect == 1){
				UISelect = 0;
				UIempt.src = "./UI/empty.png";
			}
			else if(gold >= 100){
				UISelect = 1;
				UIempt.src = "./UI/UI1SLT.png";
			}
		}
		else if(x>=UI2Pos[0] && x<UI3Pos[0]){
			UIbtn2.src = "./UI/UIbtn2Down.png"
			if(UISelect == 2){
				UISelect = 0;
				UIempt.src = "./UI/empty.png";
			}
			else if(gold >= 200){
				UISelect = 2;
				UIempt.src = "./UI/UI2SLT.png";
			}
		}
		else if(x>=UI3Pos[0] && x<UI4Pos[0]){
			UIbtn3.src = "./UI/UIbtn3Down.png"
			if(UISelect == 3){
				UISelect = 0;
				UIempt.src = "./UI/empty.png";
			}
			else if(gold >= 300){
				UISelect = 3;
				UIempt.src = "./UI/UI3SLT.png";
			}
		}
		else if(x>=UI4Pos[0] && x<UI5Pos[0]){
			UIbtn4.src = "./UI/UIbtn4Down.png"
			if(UISelect == 4){
				UISelect = 0;
				UIempt.src = "./UI/empty.png";
			}
			else if(gold >= 400){
				UISelect = 4;
				UIempt.src = "./UI/UI4SLT.png";
			}
		}
		else if(x>=UI5Pos[0] && x<UI6Pos[0]){
			UIbtn5.src = "./UI/UIbtn5Down.png"
			UISelect = 0;
		}
		else if(x>=UI6Pos[0] && x<UI7Pos[0]){
			UIbtn6.src = "./UI/UIbtn6Down.png"
			if(UISelect == 6){
				UISelect = 0;
				UIempt.src = "./UI/empty.png";
			}
			else{
				UISelect = 6;
				UIempt.src = "./UI/sell.png";
			}
			sellMod = true;
		}
		else if(x>=UI7Pos[0] && wait){
			UIbtn7.src = "./UI/UIbtn7Down.png"
			bgm.src = "./Sound/battle.mp3"
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
	if(wait){
		UIbtn7.src = "./UI/UIbtn7Up.png";
	}
	else{
		UIbtn7.src = "./UI/UIbtn7X.png";
	}
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
	else if(UISelect==6){
		UIempt.src = "./UI/sell.png";
	}
}

function placeMob(x, y){
	if(UISelect==1){
		if(searchMob(parseInt(x/(32*4)), parseInt(y/(32*4))) == false){
			var chicken = new Chicken();
			chicken.x = x-x%(32*4);
			chicken.y = y-y%(32*4);
			chicken.laneX = parseInt(x/(32*4));
			chicken.laneY = parseInt(y/(32*4));
			gold -= chicken.gold;
			chickens.push(chicken);
			UIempt.src = "./UI/empty.png";
			UISelect=0;
		}
	}
	else if(UISelect==2){
		if(searchMob(parseInt(x/(32*4)), parseInt(y/(32*4))) == false){
			var cat = new Cat();
			cat.x = x-x%(32*4);
			cat.y = y-y%(32*4);
			cat.laneX = parseInt(x/(32*4));
			cat.laneY = parseInt(y/(32*4));
			gold -= cat.gold;
			cats.push(cat);
			UIempt.src = "./UI/empty.png";
			UISelect=0;
		}
	}
	else if(UISelect==3){
		if(searchMob(parseInt(x/(32*4)), parseInt(y/(32*4))) == false){
			var sheep = new Sheep();
			sheep.x = x-x%(32*4);
			sheep.y = y-y%(32*4);
			sheep.laneX = parseInt(x/(32*4));
			sheep.laneY = parseInt(y/(32*4));
			gold -= sheep.gold;
			sheeps.push(sheep);
			UIempt.src = "./UI/empty.png";
			UISelect=0;
		}
	}
	else if(UISelect==4){
		if(searchMob(parseInt(x/(32*4)), parseInt(y/(32*4))) == false){
			var squirrel = new Squirrel();
			squirrel.x = x-x%(32*4);
			squirrel.y = y-y%(32*4);
			squirrel.laneX = parseInt(x/(32*4));
			squirrel.laneY = parseInt(y/(32*4));
			gold -= squirrel.gold;
			squirrels.push(squirrel);
			UIempt.src = "./UI/empty.png";
			UISelect=0;
		}
	}
	else if(UISelect==6){
		sellMob(parseInt(x/(32*4)), parseInt(y/(32*4)))
		UIempt.src = "./UI/empty.png";
		UISelect=0;
	}
}

function sellMob(x, y){
	chickens.forEach((a, i, o)=>{
		if(a.laneX == x && a.laneY == y){
			gold += a.gold/2;
			o.splice(i, 1)
		}
	})
	cats.forEach((a, i, o)=>{
		if(a.laneX == x && a.laneY == y){
			gold += a.gold/2;
			o.splice(i, 1)
		}
	})
	sheeps.forEach((a, i, o)=>{
		if(a.laneX == x && a.laneY == y){
			gold += a.gold/2;
			o.splice(i, 1)
		}
	})
	squirrels.forEach((a, i, o)=>{
		if(a.laneX == x && a.laneY == y){
			gold += a.gold/2;
			o.splice(i, 1)
		}
	})
}

function searchMob(x, y){
	var placeIn = false;
	chickens.forEach((a, i, o)=>{
		if(a.laneX == x && a.laneY == y){
			placeIn = true;
		}
	})
	cats.forEach((a, i, o)=>{
		if(a.laneX == x && a.laneY == y){
			placeIn = true;
		}
	})
	sheeps.forEach((a, i, o)=>{
		if(a.laneX == x && a.laneY == y){
			placeIn = true;
		}
	})
	squirrels.forEach((a, i, o)=>{
		if(a.laneX == x && a.laneY == y){
			placeIn = true;
		}
	})
	return placeIn;
}

canvas.addEventListener('mousedown', clickPointer);
canvas.addEventListener('mouseup', UIReset);
canvas.addEventListener('mousemove', (e)=> {
	follow(e.pageX, e.pageY);
});