var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//#region Background
var titleBackGround = new Image();
titleBackGround.src = "./UI/title.png";
var backGround = new Image();
backGround.src = "./UI/background.png";
var backGroundUI = new Image();
backGroundUI.src = "./UI/backgroundUI.png";
var UIEnd = new Image();
UIEnd.src = "./UI/UIEnd.png";
//#endregion

//#region UIPos
var UI1Pos = [0, 7*32*4];
var UI2Pos = [1*32*4, 7*32*4];
var UI3Pos = [2*32*4, 7*32*4];
var UI4Pos = [3*32*4, 7*32*4];
var UI5Pos = [4*32*4, 7*32*4];
var UI6Pos = [6*32*4, 7*32*4];
var UI7Pos = [8*32*4, 7*32*4];
var UIemptPos = [0, 0];
//#endregion

//#region UI Image
var heart = new Image();
heart.src = "./UI/heart.png"
var coin = new Image();
coin.src = "./UI/coin.png"
var bgmImage = new Image();
bgmImage.src = "./UI/bgmOff.png"
var bgmSelect = false;
//#endregion

//#region UI Image
var UIbtn1Up = ["./UI/UIbtn1_1Up.png", "./UI/UIbtn1_2Up.png", "./UI/UIbtn1_3Up.png"]
var UIbtn1Down = ["./UI/UIbtn1_1Down.png", "./UI/UIbtn1_2Down.png", "./UI/UIbtn1_3Down.png"]
var UI1SLT = ["./UI/UI1SLT1.png", "./UI/UI1SLT2.png", "./UI/UI1SLT3.png"]
var UI1G = ["./UI/75G.png", "./UI/150G.png", "./UI/250G.png", "./UI/1000G.png", "./UI/2000G.png"]

var UIbtn2Up = ["./UI/UIbtn2_1Up.png", "./UI/UIbtn2_2Up.png", "./UI/UIbtn2_3Up.png"]
var UIbtn2Down = ["./UI/UIbtn2_1Down.png", "./UI/UIbtn2_2Down.png", "./UI/UIbtn2_3Down.png"]
var UI2SLT = ["./UI/UI2SLT1.png", "./UI/UI2SLT2.png", "./UI/UI2SLT3.png"]
var UI2G = ["./UI/100G.png", "./UI/150G.png", "./UI/200G.png", "./UI/1000G.png", "./UI/2000G.png"]

var UIbtn3Up = ["./UI/UIbtn3_1Up.png", "./UI/UIbtn3_2Up.png", "./UI/UIbtn3_3Up.png"]
var UIbtn3Down = ["./UI/UIbtn3_1Down.png", "./UI/UIbtn3_2Down.png", "./UI/UIbtn3_3Down.png"]
var UI3SLT = ["./UI/UI3SLT1.png", "./UI/UI3SLT2.png", "./UI/UI3SLT3.png"]
var UI3G = ["./UI/150G.png", "./UI/200G.png", "./UI/250G.png", "./UI/1000G.png", "./UI/2000G.png"]

var UIbtn4Up = ["./UI/UIbtn4_1Up.png", "./UI/UIbtn4_2Up.png", "./UI/UIbtn4_3Up.png"]
var UIbtn4Down = ["./UI/UIbtn4_1Down.png", "./UI/UIbtn4_2Down.png", "./UI/UIbtn4_3Down.png"]
var UI4SLT = ["./UI/UI4SLT1.png", "./UI/UI4SLT2.png", "./UI/UI4SLT3.png"]
var UI4G = ["./UI/300G.png", "./UI/450G.png", "./UI/600G.png", "./UI/1000G.png", "./UI/2000G.png"]
//#endregion

//#region UI
var UIbtn1 = new Image();
UIbtn1.src = "./UI/UIbtn1_1Up.png";
var UIbtn2 = new Image();
UIbtn2.src = "./UI/UIbtn2_1Up.png";
var UIbtn3 = new Image();
UIbtn3.src = "./UI/UIbtn3_1Up.png";
var UIbtn4 = new Image();
UIbtn4.src = "./UI/UIbtn4_1Up.png";
var UIbtn5 = new Image();
UIbtn5.src = "./UI/UIbtn5Up.png";
var UIbtn6 = new Image();
UIbtn6.src = "./UI/UIbtn6Up.png";
var UIbtn7 = new Image();
UIbtn7.src = "./UI/UIbtn7Up.png";
var UIempt = new Image();
UIempt.src = "./UI/empty.png";

var UIYes = new Image();
UIYes.src = "./UI/Yes1.png";
var UINo = new Image();
UINo.src = "./UI/No1.png";

var bgm = new Audio();
bgm.src = './Sound/wait.mp3';
bgm.autoplay = true;
bgm.volume = 0.2;
bgm.loop = true;
//#endregion

//#region etc...
var UISelect = 0;
var spawnTimer = 0;
var spawnRate = [5*60, 4*60, 4*60, 3*60, 3*60];
var spawnNum = 0;
var spawnPosY = 0;
var phase = 0;
var phaseCnt = 0;
var phaseRate = 60*20;
var round = 0;
var wait = true;
var gold = 500; 
var goldCnt = 0;
var sellMod = false;
var endPhase = false;
var score = 0;
var hearts = 3;
var title = true;
var gameStart = false;
var tbY = 0;
var value = 1;
var valueCount = 0;
//#endregion

//#region 닭 공격 효과음
var popSounds = []; 
for(var i=0; i < 20; i++){
	var popSound = new Audio('./Sound/pop.mp3');
	popSound.volume = 0.3;
	popSounds.push(popSound);
}
//#endregion

//#region 고양이 공격 효과음
var swingSounds = [];
for(var i=0; i < 20; i++){
	var swingSound = new Audio('./Sound/swing.mp3');
	swingSound.volume = 0.4;
	swingSounds.push(swingSound);
}
//#endregion

//#region 다람쥐 공격 효과음
var sparkSounds = [];
for(var i=0; i < 20; i++){
	var sparkSound = new Audio('./Sound/spark.mp3');
	sparkSound.volume = 0.2;
	sparkSounds.push(sparkSound);
}
//#endregion

//#region 닭 애니메이션
var chickenLevel = 1;
var chickenIdleLv1_1 = new Image();
var chickenIdleLv1_2 = new Image();
chickenIdleLv1_1.src = "./Entity/Anim/chicken_idle_lv1_1.png";
chickenIdleLv1_2.src = "./Entity/Anim/chicken_idle_lv1_2.png";
var chickenIdleLv2_1 = new Image();
var chickenIdleLv2_2 = new Image();
chickenIdleLv2_1.src = "./Entity/Anim/chicken_idle_lv2_1.png";
chickenIdleLv2_2.src = "./Entity/Anim/chicken_idle_lv2_2.png";
var chickenIdleLv3_1 = new Image();
var chickenIdleLv3_2 = new Image();
chickenIdleLv3_1.src = "./Entity/Anim/chicken_idle_lv3_1.png";
chickenIdleLv3_2.src = "./Entity/Anim/chicken_idle_lv3_2.png";
var chickens = [];

var eggImg = new Image();
eggImg.src = "./Entity/Anim/egg.png";
var eggs = [];
//#endregion

//#region 고양이 애니메이션
var catLevel = 1;
var catIdleLv1_1 = new Image();
var catIdleLv1_2 = new Image();
catIdleLv1_1.src = "./Entity/Anim/cat_idle_lv1_1.png";
catIdleLv1_2.src = "./Entity/Anim/cat_idle_lv1_2.png";
var catIdleLv2_1 = new Image();
var catIdleLv2_2 = new Image();
catIdleLv2_1.src = "./Entity/Anim/cat_idle_lv2_1.png";
catIdleLv2_2.src = "./Entity/Anim/cat_idle_lv2_2.png";
var catIdleLv3_1 = new Image();
var catIdleLv3_2 = new Image();
catIdleLv3_1.src = "./Entity/Anim/cat_idle_lv3_1.png";
catIdleLv3_2.src = "./Entity/Anim/cat_idle_lv3_2.png";

var catAttackLv1_1 = new Image();
var catAttackLv1_2 = new Image();
catAttackLv1_1.src = "./Entity/Anim/cat_attack_lv1_1.png";
catAttackLv1_2.src = "./Entity/Anim/cat_attack_lv1_2.png";
var catAttackLv2_1 = new Image();
var catAttackLv2_2 = new Image();
catAttackLv2_1.src = "./Entity/Anim/cat_attack_lv2_1.png";
catAttackLv2_2.src = "./Entity/Anim/cat_attack_lv2_2.png";
var catAttackLv3_1 = new Image();
var catAttackLv3_2 = new Image();
catAttackLv3_1.src = "./Entity/Anim/cat_attack_lv3_1.png";
catAttackLv3_2.src = "./Entity/Anim/cat_attack_lv3_2.png";
var cats = [];

var catAttackEffect = new Image();
catAttackEffect.src = "./Entity/Anim/cat_attack_effect.png";
var catAttackEffects = [];
//#endregion

//#region 양 애니메이션
var sheepLevel = 1;
var sheepIdleLv1_1 = new Image();
var sheepIdleLv1_2 = new Image();
sheepIdleLv1_1.src = "./Entity/Anim/sheep_idle_lv1_1.png";
sheepIdleLv1_2.src = "./Entity/Anim/sheep_idle_lv1_2.png";
var sheepIdleLv2_1 = new Image();
var sheepIdleLv2_2 = new Image();
sheepIdleLv2_1.src = "./Entity/Anim/sheep_idle_lv2_1.png";
sheepIdleLv2_2.src = "./Entity/Anim/sheep_idle_lv2_2.png";
var sheepIdleLv3_1 = new Image();
var sheepIdleLv3_2 = new Image();
sheepIdleLv3_1.src = "./Entity/Anim/sheep_idle_lv3_1.png";
sheepIdleLv3_2.src = "./Entity/Anim/sheep_idle_lv3_2.png";
var sheeps = [];
//#endregion

//#region 다람쥐 애니메이션
var squirrelLevel = 1;
var squirrelIdleLv1_1 = new Image();
var squirrelIdleLv1_2 = new Image();
squirrelIdleLv1_1.src = "./Entity/Anim/squirrel_idle_lv1_1.png";
squirrelIdleLv1_2.src = "./Entity/Anim/squirrel_idle_lv1_2.png";
var squirrelIdleLv2_1 = new Image();
var squirrelIdleLv2_2 = new Image();
squirrelIdleLv2_1.src = "./Entity/Anim/squirrel_idle_lv2_1.png";
squirrelIdleLv2_2.src = "./Entity/Anim/squirrel_idle_lv2_2.png";
var squirrelIdleLv3_1 = new Image();
var squirrelIdleLv3_2 = new Image();
squirrelIdleLv3_1.src = "./Entity/Anim/squirrel_idle_lv3_1.png";
squirrelIdleLv3_2.src = "./Entity/Anim/squirrel_idle_lv3_2.png";

var squirrelAttackLv1_1 = new Image();
var squirrelAttackLv1_2 = new Image();
squirrelAttackLv1_1.src = "./Entity/Anim/squirrel_attack_lv1_1.png";
squirrelAttackLv1_2.src = "./Entity/Anim/squirrel_attack_lv1_2.png";
var squirrelAttackLv2_1 = new Image();
var squirrelAttackLv2_2 = new Image();
squirrelAttackLv2_1.src = "./Entity/Anim/squirrel_attack_lv2_1.png";
squirrelAttackLv2_2.src = "./Entity/Anim/squirrel_attack_lv2_2.png";
var squirrelAttackLv3_1 = new Image();
var squirrelAttackLv3_2 = new Image();
squirrelAttackLv3_1.src = "./Entity/Anim/squirrel_attack_lv3_1.png";
squirrelAttackLv3_2.src = "./Entity/Anim/squirrel_attack_lv3_2.png";
var squirrels = [];

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
//#endregion

var enemies = [];

//#region벌 애니메이션
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
//#endregion

//#region 여우 애니메이션
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

var foxAttackEffect1 = new Image();
var foxAttackEffect2 = new Image();
foxAttackEffect1.src = "./Entity/Anim/bite1.png";
foxAttackEffect2.src = "./Entity/Anim/bite2.png"
var foxAttackEffects = [];
//#endregion

//#region 벌꿀오소리 애니메이션
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

var ratelAttackEffect1 = new Image();
var ratelAttackEffect2 = new Image();
ratelAttackEffect1.src = "./Entity/Anim/bite1.png";
ratelAttackEffect2.src = "./Entity/Anim/bite2.png";
var ratelAttackEffects = [];
//#endregion

//#region악어 애니메이션
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

var crocodileAttackEffect1 = new Image();
var crocodileAttackEffect2 = new Image();
crocodileAttackEffect1.src = "./Entity/Anim/croco_Bite1.png";
crocodileAttackEffect2.src = "./Entity/Anim/croco_Bite2.png";
var crocodileAttackEffects = [];
//#endregion

//#region곰 애니메이션
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
//#endregion

//#region 능력치
var chickenHp = [30, 45, 60];
var chickenMaxCoolTime = [200, 150, 100];
var eggDamage = [10, 15, 20];

var catHp = [60, 120, 220];
var catMaxCoolTime = [100, 85, 70];
var catDamage = [25, 35, 50];

var sheepHp = [150, 250, 400];

var squirrelHp = [15, 30, 45];
var squirrelMaxCoolTime = [200, 175, 250];
var squirrelDamage = [15, 20, 30];

var kbHp = [30, 35, 40, 45, 50];
var kbCt = [100, 90, 80, 70, 60];
var kbSpeed = [4, 5, 6, 7, 8];
var kbDamage = [15, 20, 30, 35, 45];

var foxHp = [80, 110, 130, 130, 180];
var foxCt = [200, 200, 200, 200, 200];
var foxDamage = [22, 25, 38, 31, 35];

var ratelHp = [120, 145, 170, 195, 220];
var ratelCt = [200, 200, 200, 200, 200];
var ratelDamage = [30, 30, 40, 40, 50];

var crocsHp = [300, 300, 300, 450, 600];
var crocsCt = [300, 300, 300, 300, 300];
var crocsDamage = [45, 45, 45, 55, 70];

var bearHp = [1200, 1200, 1200, 1200, 2000];
var bearCt = [250, 250, 250, 250, 250];
var bearDamage = [150, 150, 150, 150, 150];

var chickenGold = [75, 150, 250];
var catGold = [100, 150, 200];
var sheepGold = [150, 200, 250];
var squirrelGold = [300, 450, 600];
var clearGold = [500, 1000, 1500];
//#endregion

//#region 몬스터 확률   
                 //페이즈
var animalPer = [[[100, 90, 80, 70, 65],//killerBee
				  [0, 10, 15, 20, 20],  //fox
				  [0, 0, 5, 10, 15],    //ratel
				  [0, 0, 0, 0, 0],      //crocodile
				  [0, 0, 0, 0, 0]],     //bear
				[[65, 60, 55, 50, 40], 
				 [25, 25, 25, 30, 30], 
			     [10, 15, 20, 20, 30],
			     [0, 0, 0, 0, 0], 
			     [0, 0, 0, 0, 0]], 
				[[45, 40, 38, 35, 20], 
				[30, 30, 30, 30, 30], 
				[20, 22, 22, 23, 28], 
				[5, 8, 10, 12, 12],
				[0, 0, 0, 0, 0]],
				[[20, 18, 18, 14, 12], 
				[25, 25, 25, 25, 25], 
				[45, 43, 41, 38, 33], 
				[10, 14, 16, 20, 25],
				[0, 0, 0, 3, 5]],
				[[10, 10, 10, 10, 5], 
				[25, 25, 25, 30, 30], 
				[10, 15, 17, 20, 35], 
				[0, 0, 3, 5, 20],
				[0, 0, 0, 0, 10]]];
//#endregion

class Chicken{
	constructor(){
		this.hp = 0;
		this.level = chickenLevel;
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
		this.gold = 50;
		this.tag = "chicken";
	}
	draw(){
		if(this.frame==0){
			if(this.level==1){
				ctx.drawImage(chickenIdleLv1_1, this.x, this.y);
			}
			else if(this.level==2){
				ctx.drawImage(chickenIdleLv2_1, this.x, this.y);
			}
			else if(this.level>2){
				ctx.drawImage(chickenIdleLv3_1, this.x, this.y);
			}
		}
		else if(this.frame==1){
			if(this.level==1){
				ctx.drawImage(chickenIdleLv1_2, this.x, this.y);
			}
			else if(this.level==2){
				ctx.drawImage(chickenIdleLv2_2, this.x, this.y);
			}
			else if(this.level>2){
				ctx.drawImage(chickenIdleLv3_2, this.x, this.y);
			}
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
		this.damage = 0;
		this.attack = true;
		this.tag = "egg";
		this.level = 0;
	}
	draw(){
		ctx.drawImage(eggImg, this.x, this.y);
	}
}

class Cat{
	constructor(){
		this.hp = 0;
		this.level = catLevel;
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
		this.gold = 50;
		this.tag = "cat";
		this.attackRange = 16*4;
	}
	draw(){
		if(this.onAttack){
			if(this.frame==0){
				if(this.level==1){
					ctx.drawImage(catAttackLv1_1, this.x, this.y);
				}
				else if(this.level==2){
					ctx.drawImage(catAttackLv2_1, this.x, this.y);
				}
				else if(this.level>2){
					ctx.drawImage(catAttackLv3_1, this.x, this.y);
				}
			}
			else if(this.frame==1){
				if(this.level==1){
					ctx.drawImage(catAttackLv1_2, this.x, this.y);
				}
				else if(this.level==2){
					ctx.drawImage(catAttackLv2_2, this.x, this.y);
				}
				else if(this.level>2){
					ctx.drawImage(catAttackLv3_2, this.x, this.y);
				}
			}
		}
		else{
			if(this.frame==0){
				if(this.level==1){
					ctx.drawImage(catIdleLv1_1, this.x, this.y);
				}
				else if(this.level==2){
					ctx.drawImage(catIdleLv2_1, this.x, this.y);
				}
				else if(this.level>2){
					ctx.drawImage(catIdleLv3_1, this.x, this.y);
				}
			}
			else if(this.frame==1){
				if(this.level==1){
					ctx.drawImage(catIdleLv1_2, this.x, this.y);
				}
				else if(this.level==2){
					ctx.drawImage(catIdleLv2_2, this.x, this.y);
				}
				else if(this.level>2){
					ctx.drawImage(catIdleLv3_2, this.x, this.y);
				}
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
		this.damage = 0;
		this.tag = "catAttack";
		this.level = 0;
	}
	draw(){
		ctx.drawImage(catAttackEffect, this.x, this.y);
	}
}

class Sheep{
	constructor(){
		this.hp = 0;
		this.level = sheepLevel;
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
		this.gold = 50;
		this.tag = "sheep";
	}
	draw(){
		if(this.frame==0){
			if(this.level==1){
				ctx.drawImage(sheepIdleLv1_1, this.x, this.y);
			}
			else if(this.level==2){
				ctx.drawImage(sheepIdleLv2_1, this.x, this.y);
			}
			else if(this.level>2){
				ctx.drawImage(sheepIdleLv3_1, this.x, this.y);
			}
		}
		else if(this.frame==1){
			if(this.level==1){
				ctx.drawImage(sheepIdleLv1_2, this.x, this.y);
			}
			else if(this.level==2){
				ctx.drawImage(sheepIdleLv2_2, this.x, this.y);
			}
			else if(this.level>2){
				ctx.drawImage(sheepIdleLv3_2, this.x, this.y);
			}
		}
	}
}

class Squirrel{
	constructor(){
		this.hp = 1;
		this.level = squirrelLevel;
		this.x = 0;
		this.y = 0;
		this.width = 32*4;
		this.height = 32*4;
		this.laneX = 0;
		this.laneY = 0;
		this.coolTime = 300;
		this.maxCoolTime = 300;
		this.anim = 0;
		this.frame = 0;
		this.onAttack = false;
		this.afterAttack = false;
		this.gold = 50;
		this.tag = "squirrel";
		this.attackRange = 32*8*4;
	}
	draw(){
		if(this.onAttack){
			if(this.frame==0){
				if(this.level==1){
					ctx.drawImage(squirrelAttackLv1_1, this.x, this.y);
				}
				else if(this.level==2){
					ctx.drawImage(squirrelAttackLv2_1, this.x, this.y);
				}
				else if(this.level>2){
					ctx.drawImage(squirrelAttackLv3_1, this.x, this.y);
				}
			}
			else if(this.frame==1){
				if(this.level==1){
					ctx.drawImage(squirrelAttackLv1_2, this.x, this.y);
				}
				else if(this.level==2){
					ctx.drawImage(squirrelAttackLv2_2, this.x, this.y);
				}
				else if(this.level>2){
					ctx.drawImage(squirrelAttackLv3_2, this.x, this.y);
				}
			}
		}
		else{
			if(this.frame==0){
				if(this.level==1){
					ctx.drawImage(squirrelIdleLv1_1, this.x, this.y);
				}
				else if(this.level==2){
					ctx.drawImage(squirrelIdleLv2_1, this.x, this.y);
				}
				else if(this.level>2){
					ctx.drawImage(squirrelIdleLv3_1, this.x, this.y);
				}
			}
			else if(this.frame==1){
				if(this.level==1){
					ctx.drawImage(squirrelIdleLv1_2, this.x, this.y);
				}
				else if(this.level==2){
					ctx.drawImage(squirrelIdleLv2_2, this.x, this.y);
				}
				else if(this.level>2){
					ctx.drawImage(squirrelIdleLv3_2, this.x, this.y);
				}
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
		this.damage = 0;
		this.tag = "squirrelAttack";
		this.level = 0;
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
		this.hp = 30;
		this.x = 0;
		this.y = 0;
		this.width = 32*4;
		this.laneX = 0;
		this.laneY = 0;
		this.coolTime = 100;
		this.maxCoolTime = 100;
		this.anim = 0;
		this.frame = 0;
		this.frameTiming = 30;
		this.gold = 40;
		this.onAttack = false;
		this.afterAttack = false;
		this.speed = 5;
		this.maxSpeed = 5;
		this.tag = "killBee";
		this.stun = 0;
		this.score = 100;
		this.attackNum = 0;
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
		kbEffect.damage = kbDamage[round] * value;
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
		this.damage = 0;
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
		this.width = 64*4;
		this.laneX = 0;
		this.laneY = 0;
		this.coolTime = 10000;
		this.maxCoolTime = 100;
		this.anim = 0;
		this.frame = 0;
		this.frameTiming = 30;
		this.gold = 100;
		this.onAttack = false;
		this.afterAttack = false;
		this.speed = 2.5;
		this.maxSpeed = 3;
		this.tag = "fox";
		this.stun = 0;
		this.score = 100;
		this.attackNum = 0;
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
		foxEffect.damage = foxDamage[round] * value;
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
		this.damage = 0;
		this.tag = "foxAttack";
		this.anim = 0;
		this.frame = 0;
	}
	draw(){
		if(this.frame==0){
			ctx.drawImage(foxAttackEffect1, this.x - 16*4, this.y);
		}
		else if(this.frame==1){
			ctx.drawImage(foxAttackEffect2, this.x - 16*4, this.y);
		}
	}
}

class Ratel{
	constructor(){
		this.hp = 3;
		this.x = 0;
		this.y = 0;
		this.width = 64*4;
		this.laneX = 0;
		this.laneY = 0;
		this.coolTime = 10000;
		this.maxCoolTime = 100;
		this.anim = 0;
		this.frame = 0;
		this.frameTiming = 30;
		this.gold = 150;
		this.onAttack = false;
		this.speed = 1.5;
		this.maxSpeed = 2;
		this.tag = "ratel";
		this.stun = 0;
		this.score = 200;
		this.attackNum = 0;
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
		ratelEffect.damage = ratelDamage[round] * value;
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
		this.damage = 0;
		this.tag = "ratelAttack";
		this.anim = 0;
		this.frame = 0;
	}
	draw(){
		if(this.frame==0){
			ctx.drawImage(ratelAttackEffect1, this.x - 16*4, this.y);
		}
		else if(this.frame==1){
			ctx.drawImage(ratelAttackEffect2, this.x - 16*4, this.y);
		}
	}
}

class Crocodile{
	constructor(){
		this.hp = 3;
		this.x = 0;
		this.y = 0;
		this.width = 112*4;
		this.laneX = 0;
		this.laneY = 0;
		this.coolTime = 10000;
		this.maxCoolTime = 100;
		this.anim = 0;
		this.frame = 0;
		this.frameTiming = 30;
		this.gold = 300;
		this.onAttack = false;
		this.speed = 1;
		this.maxSpeed = 1;
		this.tag = "crocodile";
		this.stun = 0;
		this.score = 300;
		this.attackNum = 0;
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
		var crocodileEffect = new CrocodileAttack();
		crocodileEffect.damage = crocsDamage[round] * value;
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
		this.width = 16*4 + 32*4;
		this.height = 32*4;
		this.holdTime = 0;
		this.attack = true;
		this.damage = 0;
		this.tag = "crocodileAttack";
		this.anim = 0;
		this.frame = 0;
	}
	draw(){
		if(this.frame==0){
			ctx.drawImage(crocodileAttackEffect1, this.x - 16*4, this.y);
		}
		else if(this.frame==1){
			ctx.drawImage(crocodileAttackEffect2, this.x - 16*4, this.y);
		}
	}
}

class Bear{
	constructor(){
		this.hp = 1500;
		this.x = 0;
		this.y = 0;
		this.width = 48*32;
		this.laneX = 0;
		this.laneY = 0;
		this.coolTime = 10000;
		this.maxCoolTime = 100;
		this.anim = 0;
		this.frame = 0;
		this.frameTiming = 30;
		this.gold = 500;
		this.onAttack = false;
		this.speed = 0.3;
		this.maxSpeed = 0.3;
		this.tag = "bear";
		this.stun = 0;
		this.score = 400;
		this.attackNum = 0;
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
				if(this.frame==0 || this.frame==2){
					ctx.drawImage(bearIdle1, this.x, this.y);
				}
				else if(this.frame==1 || this.frame==3){
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
		bearEffect.damage = bearDamage[round] * value;
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
		this.damage = 0;
		this.tag = "bearAttack";
	}
	draw(){
		ctx.drawImage(bearAttackEffect, this.x, this.y);
	}
}

function draw(){ //drawUI, drawmob, drawPJT
	if(title == true){
		drawTitle();
	}
	else{
		if(hearts > 0){
			drawUI();
			drawMob();
			if(wait == false){
				drawPJT();
			}
		}
		else{
			drawEnd();
		}
	}
}

function drawTitle(){
	ctx.drawImage(titleBackGround, 0, tbY);
	if(gameStart==true){
		if(tbY != -64*4){
			tbY-=2;
		}
		else{
			title = false;
		}
	}
	if(bgmSelect == false){
		bgmImage.src = "./UI/bgmOff.png";
		bgm.pause();
	}
	else{
		bgmImage.src = "./UI/bgmOn.png";
		bgm.play();
	}
	ctx.drawImage(bgmImage, 32*9*4 + 50, 16 + 16*4);
	if(gameStart==false){
		ctx.drawImage(UIbtn7, 32*4*4, 32*4*4);
	}
}

function drawEnd(){
	ctx.drawImage(backGround, 0, 0);
	ctx.drawImage(UIEnd, 0, 0);
	ctx.drawImage(UIYes, 125*4, 148*4);
	ctx.drawImage(UINo, 125*4 + 32*4 + 7*4, 148*4);
	ctx.textBaseline = "top";
	ctx.textAlign = "left"
	ctx.fillStyle = "yellow";
	ctx.font = "48px Home Video";
	ctx.fillText(score, 162*4, 108*4);
}

function reset(){
	chickens.splice(0, chickens.length);
	eggs.splice(0, eggs.length);
	cats.splice(0, cats.length);
	catAttackEffects.splice(0, catAttackEffects.length);
	sheeps.splice(0, sheeps.length);
	squirrels.splice(0, squirrels.length);
	squirrelAttackEffects.splice(0, squirrelAttackEffects.length);
	enemies.splice(0, enemies.length);
	kbAttackEffects.splice(0, kbAttackEffects.length);
	foxAttackEffects.splice(0, foxAttackEffects.length);
	ratelAttackEffects.splice(0, ratelAttackEffects.length);
	crocodileAttackEffects.splice(0, crocodileAttackEffects.length);
	bearAttackEffects.splice(0, bearAttackEffects.length);
	gold = 500;
	hearts = 3;
	round = 0;
	phase = 0
	phaseCnt = 0;
	endPhase = false;
	spawnTimer = 0;
	goldCnt = 0;
	chickenLevel = 1;
	catLevel = 1;
	sheepLevel = 1;
	squirrelLevel = 1;
	score = 0;
	wait = true;
	value = 1;
	valueCount = 0;
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
	if(round<=3){
		ctx.fillText((round+1)+"-"+(phase+1), 32*10*4 - 8, 8);
	}
	if(round>3){
		ctx.fillText("INF", 32*10*4 - 8, 8);
	}
}

function drawUI(){
	ctx.drawImage(backGround, 0, 0);
	ctx.drawImage(backGroundUI, 0, 0);
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
		if(wait){
			a.coolTime = 0;
		}
		else{
			a.coolTime++;
		}
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
			egg.level = a.level;
			egg.damage = eggDamage[a.level-1];
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
				catAttackEffect.damage = catDamage[a.level-1];
				catAttackEffect.x = a.x + 32*4;
				catAttackEffect.y = a.y;
				catAttackEffect.laneY = a.laneY;
				catAttackEffect.level = a.level;
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
				squirrelAttack.level = a.level;
				squirrelAttack.damage = squirrelDamage[a.level-1];
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
		if(a.hp <=0){
			o.splice(i, 1)
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
				if(a.stun==0){
					a.coolTime++;
				}
			}
			if(a.tag == "bear"){
				if(a.anim >= 30){
					if(a.speed == 0){
						if(a.stun>0){
							if(a.frame == 0 || a.frame == 2){
								a.frame = 0;
							}
							else if(a.frame == 1 || a.frame == 3){
								a.frame = 1;
							}
						}
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
		if(a.x <= -32*2*4){
			o.splice(i, 1)
			hearts--;
			if(hearts <= 0){
				bgm.src = "./Sound/wait.mp3";
			}
		}
		a.draw();
	})
}

function mobStop(enemy){ //앞에 오브젝트가 있는지 검사 -> 있으면 멈추기 (enemy전용)
	var stop = false;
	chickens.forEach((a, i, o)=>{
		if(enemy.tag=="bear"){
			if(enemy.laneY == a.laneY || enemy.laneY+1 == a.laneY){
				if(enemy.x <= a.x + a.width - 32 && enemy.x + enemy.width - 16*4 >= a.x){
					stop = true;
				}
			}
		}
		else{
			if(enemy.laneY == a.laneY){
				if(enemy.x <= a.x + a.width && enemy.x + enemy.width/3 >= a.x){
					stop = true;
				}
			}
		}
	})
	cats.forEach((a, i, o)=>{
		if(enemy.tag=="bear"){
			if(enemy.laneY == a.laneY || enemy.laneY+1 == a.laneY){
				if(enemy.x <= a.x + a.width - 32 && enemy.x + enemy.width - 16*4 >= a.x){
					stop = true;
				}
			}
		}
		else{
			if(enemy.laneY == a.laneY){
				if(enemy.x <= a.x + a.width && enemy.x + enemy.width/3 >= a.x){
					stop = true;
				}
			}
		}
	})
	sheeps.forEach((a, i, o)=>{
		if(enemy.tag=="bear"){
			if(enemy.laneY == a.laneY || enemy.laneY+1 == a.laneY){
				if(enemy.x <= a.x + a.width - 32 && enemy.x + enemy.width - 16*4 >= a.x){
					stop = true;
				}
			}
		}
		else{
			if(enemy.laneY == a.laneY){
				if(enemy.x <= a.x + a.width && enemy.x + enemy.width/3 >= a.x){
					stop = true;
				}
			}
		}
	})
	squirrels.forEach((a, i, o)=>{
		if(enemy.tag=="bear"){
			if(enemy.laneY == a.laneY || enemy.laneY+1 == a.laneY){
				if(enemy.x <= a.x + a.width - 32 && enemy.x + enemy.width - 16*4 >= a.x){
					stop = true;
				}
			}
		}
		else{
			if(enemy.laneY == a.laneY){
				if(enemy.x <= a.x + a.width && enemy.x + enemy.width/3 >= a.x){
					stop = true;
				}
			}
		}
	})
	return stop;
}

function drawPJT(){ //발사체
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
		if(a.attack==true && a.frame == 0){
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
		if(a.attack==true && a.frame == 1){
			if(collision2(a, enemies) == true){
				a.attack = false;
			}
		}
		a.anim++;
		if(a.frame==1){
			a.holdTime++;
		}
		if(a.anim >= 30){
			if(a.frame == 0){
				a.frame = 1;
			}
			else if(a.holdTime >= 30){
				o.splice(i, 1)
			}
			a.anim = 0;
		}
		a.draw();
	})
	ratelAttackEffects.forEach((a, i, o)=>{
		if(a.attack==true && a.frame == 1){
			if(collision2(a, enemies) == true){
				a.attack = false;
			}
		}
		a.anim++;
		if(a.frame==1){
			a.holdTime++;
		}
		if(a.anim >= 30){
			if(a.frame == 0){
				a.frame = 1;
			}
			else if(a.holdTime >= 30){
				o.splice(i, 1)
			}
			a.anim = 0;
		}
		a.draw();
	})
	crocodileAttackEffects.forEach((a, i, o)=>{
		if(a.attack==true && a.frame == 1){
			if(collision2(a, enemies) == true){
				a.attack = false;
			}
		}
		a.anim++;
		if(a.frame==1){
			a.holdTime++;
		}
		if(a.anim >= 30){
			if(a.frame == 0){
				a.frame = 1;
			}
			else if(a.holdTime >= 30){
				o.splice(i, 1)
			}
			a.anim = 0;
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

function collision(team, enemy){ //공격이 적과 맞았는지 검사(아군 전용)
	var collide = false;
	enemy.slice().reverse().forEach((a, i, o)=>{
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
				}
				collide = true;
			}
		}
		else{
			if(difX < 0 && (a.laneY == team.laneY)){
				if(team.tag == "egg"){
					if(team.attack == true){
						a.hp -= team.damage;
						team.attack = false;
					}
				}
				else{
					console.debug(a.hp, team.damage);
					a.hp -= team.damage;
					console.debug(a.hp);
				}
				if(team.tag == "squirrelAttack"){
					a.stun = 30;
				}
				if(a.hp <= 0){
					gold += a.gold;
					score += a.score;
				}
				collide = true;
			}
		}
	})
	return collide;
}

function collision2(enemy){ //공격이 아군과 맞았는지 검사(enemy전용)
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
	return stop;
}

function attackRange(team, enemy){ //공격 사거리에 적이 들어왔는지 검사(아군 전용)
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

function mobSpawn(){ //확률에 맞게 랜덤으로 적 스폰
	spawnTimer++;
	if(round < 4){
		phaseCnt++;
		if(phaseCnt > phaseRate){
			if(phase < 4){
				phaseCnt = 0;
				phase++;
			}
			else{
				endPhase = true;
				if(round==3 && phase==4){
					round++;
				}
				else if(enemies[0]==undefined){
					if(round <= 2){
						gold+=clearGold[round];
					}
					round++;
					wait = true;
					bgm.src = "./Sound/wait.mp3";
					phaseCnt = 0;
					UIbtn5.src = "./UI/UIbtn5Up.png";
					UIbtn7.src = "./UI/UIbtn7Up.png";
					phase = 0;
					endPhase = false;
					spawnTimer = 0;
					eggs.splice(0, eggs.length);
					catAttackEffects.splice(0, catAttackEffects.length);
					squirrelAttackEffects.splice(0, squirrelAttackEffects.length);
					kbAttackEffects.splice(0, kbAttackEffects.length);
					foxAttackEffects.splice(0, foxAttackEffects.length);
					ratelAttackEffects.splice(0, ratelAttackEffects.length);
					crocodileAttackEffects.splice(0, crocodileAttackEffects.length);
					bearAttackEffects.splice(0, bearAttackEffects.length);
				}
			}
		}
		if(phase <= 4 && !endPhase){
			if(spawnTimer > spawnRate[phase]){
				spawnTimer = 0;
				randomNum = Math.floor(Math.random() * 100) + 1;
				if(randomNum < animalPer[round][0][phase]){ //Fox
					spawnPosY = Math.floor(Math.random() * 4) + 3;
					var kb = new KillBee();
					kb.hp = kbHp[round];
					kb.speed = kbSpeed[round];
					kb.maxCoolTime = kbCt[round];
					kb.x = 32*10*4;
					kb.y = spawnPosY*32*4 - 16;
					kb.laneY = spawnPosY;
					enemies.push(kb);
				}
				else if(randomNum >= animalPer[round][0][phase] && //Ratel
						randomNum < animalPer[round][0][phase] + animalPer[round][1][phase]){
							spawnPosY = Math.floor(Math.random() * 4) + 3;
							var fox = new Fox();
							fox.hp = foxHp[round];
							fox.maxCoolTime = foxCt[round];
							fox.x = 32*10*4;
							fox.y = spawnPosY*32*4 - 16;
							fox.laneY = spawnPosY;
							enemies.push(fox);
				}
				else if(randomNum >= animalPer[round][0][phase] + animalPer[round][1][phase] && //Crocodile
						randomNum < animalPer[round][0][phase] + animalPer[round][1][phase] + animalPer[round][2][phase]){
							spawnPosY = Math.floor(Math.random() * 4) + 3;
							var ratel = new Ratel();
							ratel.hp = ratelHp[round];
							ratel.maxCoolTime = ratelCt[round];
							ratel.x = 32*10*4;
							ratel.y = spawnPosY*32*4 - 16;
							ratel.laneY = spawnPosY;
							enemies.push(ratel);
				}
				else if(randomNum >= animalPer[round][0][phase] + animalPer[round][1][phase] + animalPer[round][2][phase] &&
						randomNum < animalPer[round][0][phase] + animalPer[round][1][phase] + animalPer[round][2][phase] + animalPer[round][3][phase]){
							spawnPosY = Math.floor(Math.random() * 4) + 3;
							var crocodile = new Crocodile();
							crocodile.hp = crocsHp[round];
							crocodile.maxCoolTime = crocsCt[round];
							crocodile.x = 32*10*4;
							crocodile.y = spawnPosY*32*4 - 16;
							crocodile.laneY = spawnPosY;
							enemies.push(crocodile);
				}
				else if(randomNum >= animalPer[round][0][phase] + animalPer[round][1][phase] + animalPer[round][2][phase] + animalPer[round][3][phase] &&
						randomNum < animalPer[round][0][phase] + animalPer[round][1][phase] + animalPer[round][2][phase] + animalPer[round][3][phase] + animalPer[round][4][phase]){
							spawnPosY = Math.floor(Math.random() * 2) + 3;
							var bear = new Bear();
							bear.hp = bearHp[round];
							bear.maxCoolTime = bearCt[round];
							bear.x = 32*10*4;
							bear.y = spawnPosY*32*4 - 16;
							bear.laneY = spawnPosY;
							enemies.push(bear);
				}
			}
		}
	}
	else{
		valueCount++;
		if(valueCount >= 10*60){
			valueCount = 0;
			value += 0.1;
			console.debug("쌔짐");
		}
		if(spawnTimer > spawnRate[phase]){
			spawnTimer = 0;
			randomNum = Math.floor(Math.random() * 100) + 1;
			if(randomNum < animalPer[round][0][phase]){ 
				spawnPosY = Math.floor(Math.random() * 4) + 3;
				var kb = new KillBee();
				kb.hp = kbHp[round] * value;
				kb.speed = kbSpeed[round] * value;
				kb.maxCoolTime = kbCt[round];
				kb.x = 32*10*4;
				kb.y = spawnPosY*32*4 - 16;
				kb.laneY = spawnPosY;
				enemies.push(kb);
			}
			else if(randomNum >= animalPer[round][0][phase] && 
					randomNum < animalPer[round][0][phase] + animalPer[round][1][phase]){
						spawnPosY = Math.floor(Math.random() * 4) + 3;
						var fox = new Fox();
						fox.hp = foxHp[round] * value;
						fox.maxCoolTime = foxCt[round];
						fox.x = 32*10*4;
						fox.y = spawnPosY*32*4 - 16;
						fox.laneY = spawnPosY;
						enemies.push(fox);
			}
			else if(randomNum >= animalPer[round][0][phase] + animalPer[round][1][phase] && //Crocodile
					randomNum < animalPer[round][0][phase] + animalPer[round][1][phase] + animalPer[round][2][phase]){
						spawnPosY = Math.floor(Math.random() * 4) + 3;
						var ratel = new Ratel();
						ratel.hp = ratelHp[round] * value;
						ratel.maxCoolTime = ratelCt[round];
						ratel.x = 32*10*4;
						ratel.y = spawnPosY*32*4 - 16;
						ratel.laneY = spawnPosY;
						enemies.push(ratel);
			}
			else if(randomNum >= animalPer[round][0][phase] + animalPer[round][1][phase] + animalPer[round][2][phase] &&
					randomNum < animalPer[round][0][phase] + animalPer[round][1][phase] + animalPer[round][2][phase] + animalPer[round][3][phase]){
						spawnPosY = Math.floor(Math.random() * 4) + 3;
						var crocodile = new Crocodile();
						crocodile.hp = crocsHp[round] * value;
						crocodile.maxCoolTime = crocsCt[round];
						crocodile.x = 32*10*4;
						crocodile.y = spawnPosY*32*4 - 16;
						crocodile.laneY = spawnPosY;
						enemies.push(crocodile);
			}
			else if(randomNum >= animalPer[round][0][phase] + animalPer[round][1][phase] + animalPer[round][2][phase] + animalPer[round][3][phase] &&
					randomNum < animalPer[round][0][phase] + animalPer[round][1][phase] + animalPer[round][2][phase] + animalPer[round][3][phase] + animalPer[round][4][phase]){
						spawnPosY = Math.floor(Math.random() * 4) + 2;
						var bear = new Bear();
						bear.hp = bearHp[round] * value;
						bear.maxCoolTime = bearCt[round];
						bear.x = 32*10*4;
						bear.y = spawnPosY*32*4 - 16;
						bear.laneY = spawnPosY;
						enemies.push(bear);
			}
		}
	}
}

function goldUp(){ //기본 골드 증가..
	goldCnt++
	if(goldCnt >= 60 && round < 4){
		goldCnt = 0;
		gold += 10;
	}
}

function update(){ //draw, goldUP, mobSpawn
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	if(wait == false && hearts > 0){
		goldUp();
		mobSpawn();
	}
	draw();
	//clearInterval(interval);
}

var interval = setInterval(update, 16); //대략 60프레임으로 고정... update반복

function clickPointer(event){ //마우스로 클릭한 지점 읽어오기
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
	if(dx >= 32*4*4 && dx < 32*6*4){
		if(dy >= 32*4*4 && dy < 32*5*4){
			gameStart = true;
		}
	} 
	if(hearts <= 0){
		if(dx >= 129*4 && dx < 129*4 + 24*4 &&
			dy >= 158*4 && dy < 158*4 + 11*4){
			reset();
		}
		if(dx >= 125*4 + 32*4 + 15*4 && dx < 125*4 + 32*4 + 15*4 + 18*4 &&
			dy >= 158*4 && dy < 158*4 + 11*4){
			title = true;
			gameStart = false;
			tbY = 0;
			bgm.src = './Sound/wait.mp3';
			reset();
		}
	}
	if(dy>=UI1Pos[1]){
		UIChanger(dx, dy);
	}
	else{
		if(dy > 32*4*3 && dy < UI1Pos[1] && dx >= 32*4 && dx <32*4*9){
			placeMob(dx, dy);
		}
	}
}

function UIChanger(x, y){ //클릭한 UI에 맞는 마우스 커서 생성
	if(y>=UI1Pos[1]){
		if(x>=UI1Pos[0] && x<UI2Pos[0]){
			UIbtn1.src = UIbtn1Down[chickenLevel-1];
			if(UISelect == 1){
				UISelect = 0;
				UIempt.src = "./UI/empty.png";
			}
			else if(UISelect == 5){
				UISelect = 0;
				UIempt.src = "./UI/empty.png";
				if(chickenLevel == 1 && gold >= 1000){
					chickenLevel = 2;
					gold -= 1000;
				}
				else if(chickenLevel == 2 && gold >= 2000){
					chickenLevel = 3;
					gold -= 2000;
				}
			}
			else if(chickenLevel == 1 && gold >= chickenGold[chickenLevel-1]){
				UISelect = 1;
				UIempt.src = UI1SLT[chickenLevel-1];
			}
			else if(chickenLevel == 2 && gold >= chickenGold[chickenLevel-1]){
				UISelect = 1;
				UIempt.src = UI1SLT[chickenLevel-1];
			}
			else if(chickenLevel == 3 && gold >= chickenGold[chickenLevel-1]){
				UISelect = 1;
				UIempt.src = UI1SLT[chickenLevel-1];
			}
		}
		else if(x>=UI2Pos[0] && x<UI3Pos[0]){
			UIbtn2.src = UIbtn2Down[catLevel-1];
			if(UISelect == 2){
				UISelect = 0;
				UIempt.src = "./UI/empty.png";
			}
			else if(UISelect == 5){
				UISelect = 0;
				UIempt.src = "./UI/empty.png";
				if(catLevel == 1 && gold >= 1000){
					catLevel = 2;
					gold -= 1000;
				}
				else if(catLevel == 2 && gold >= 2000){
					catLevel = 3;
					gold -= 2000;
				}
			}
			else if(catLevel == 1 && gold >= catGold[catLevel-1]){
				UISelect = 2;
				UIempt.src = UI2SLT[catLevel-1];
			}
			else if(catLevel == 2 && gold >= catGold[catLevel-1]){
				UISelect = 2;
				UIempt.src = UI2SLT[catLevel-1];
			}
			else if(catLevel == 3 && gold >= catGold[catLevel-1]){
				UISelect = 2;
				UIempt.src = UI2SLT[catLevel-1];
			}
		}
		else if(x>=UI3Pos[0] && x<UI4Pos[0]){
			UIbtn3.src = UIbtn3Down[sheepLevel-1];
			if(UISelect == 3){
				UISelect = 0;
				UIempt.src = "./UI/empty.png";
			}
			else if(UISelect == 5){
				UISelect = 0;
				UIempt.src = "./UI/empty.png";
				if(sheepLevel == 1 && gold >= 1000){
					sheepLevel = 2;
					gold -= 1000;
				}
				else if(sheepLevel == 2 && gold >= 2000){
					sheepLevel = 3;
					gold -= 2000;
				}
			}
			else if(sheepLevel == 1 && gold >= sheepGold[sheepLevel-1]){
				UISelect = 3;
				UIempt.src = UI3SLT[sheepLevel-1];
			}
			else if(sheepLevel == 2 && gold >= sheepGold[sheepLevel-1]){
				UISelect = 3;
				UIempt.src = UI3SLT[sheepLevel-1];
			}
			else if(sheepLevel == 3 && gold >= sheepGold[sheepLevel-1]){
				UISelect = 3;
				UIempt.src = UI3SLT[sheepLevel-1];
			}
		}
		else if(x>=UI4Pos[0] && x<UI5Pos[0]){
			UIbtn4.src = UIbtn4Down[squirrelLevel-1];
			if(UISelect == 4){
				UISelect = 0;
				UIempt.src = "./UI/empty.png";
			}
			else if(UISelect == 5){
				UISelect = 0;
				UIempt.src = "./UI/empty.png";
				if(squirrelLevel == 1 && gold >= 1000){
					squirrelLevel = 2;
					gold -= 1000;
				}
				else if(squirrelLevel == 2 && gold >= 2000){
					squirrelLevel = 3;
					gold -= 2000;
				}
			}
			else if(squirrelLevel == 1 && gold >= squirrelGold[squirrelLevel - 1]){
				UISelect = 4;
				UIempt.src = UI4SLT[squirrelLevel-1];
			}
			else if(squirrelLevel == 2 && gold >= squirrelGold[squirrelLevel - 1]){
				UISelect = 4;
				UIempt.src = UI4SLT[squirrelLevel-1];
			}
			else if(squirrelLevel == 3 && gold >= squirrelGold[squirrelLevel - 1]){
				UISelect = 4;
				UIempt.src = UI4SLT[squirrelLevel-1];
			}
		}
		else if(x>=UI5Pos[0] && x<UI6Pos[0] && wait){
			UIbtn5.src = "./UI/UIbtn5Down.png"
			if(UISelect == 5){
				UISelect = 0;
				UIempt.src = "./UI/empty.png";
			}
			else{
				UISelect = 5;
				UIempt.src = "./UI/upgrade.png";
			}
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

function UIReset(){ //UIReset
	UIbtn1.src = UIbtn1Up[chickenLevel-1];
	UIbtn2.src = UIbtn2Up[catLevel-1];
	UIbtn3.src = UIbtn3Up[sheepLevel-1];
	UIbtn4.src = UIbtn4Up[squirrelLevel-1];
	UIbtn6.src = "./UI/UIbtn6Up.png";
	if(wait){
		UIbtn5.src = "./UI/UIbtn5Up.png";
		UIbtn7.src = "./UI/UIbtn7Up.png";
	}
	else{
		UIbtn5.src = "./UI/UIbtn5X.png";
		UIbtn7.src = "./UI/UIbtn7X.png";
	}
}

function follow(x, y){ //마우스 커서가 마우스를 따라오게 하기
	UIemptPos[0] = x - ctx.canvas.offsetLeft - 64;
	UIemptPos[1] = y - ctx.canvas.offsetTop - 64;
	if(UISelect==0){
		UIempt.src = "./UI/empty.png";
		if(UIemptPos[1] + 64>=UI1Pos[1]){
			if(UIemptPos[0] + 64>=UI1Pos[0] && UIemptPos[0] + 64<UI2Pos[0]){
				UIbtn1.src = UI1G[chickenLevel-1];
			}
			else{
				UIbtn1.src = UIbtn1Up[chickenLevel-1];
			}
			if(UIemptPos[0] + 64>=UI2Pos[0] && UIemptPos[0] + 64<UI3Pos[0]){
				UIbtn2.src = UI2G[catLevel-1];
			}
			else{
				UIbtn2.src = UIbtn2Up[catLevel-1];
			}
			if(UIemptPos[0] + 64>=UI3Pos[0] && UIemptPos[0] + 64<UI4Pos[0]){
				UIbtn3.src = UI3G[sheepLevel-1];
			}
			else{
				UIbtn3.src = UIbtn3Up[sheepLevel-1];
			}
			if(UIemptPos[0] + 64>=UI4Pos[0] && UIemptPos[0] + 64<UI5Pos[0]){
				UIbtn4.src = UI4G[squirrelLevel-1];
			}
			else{
				UIbtn4.src = UIbtn4Up[squirrelLevel-1];
			}
		}
		else{
			UIbtn1.src = UIbtn1Up[chickenLevel-1];
			UIbtn2.src = UIbtn2Up[catLevel-1];
			UIbtn3.src = UIbtn3Up[sheepLevel-1];
			UIbtn4.src = UIbtn4Up[squirrelLevel-1];
		}
	}
	else if(UISelect==1){
		UIempt.src = UI1SLT[chickenLevel-1];
	}
	else if(UISelect==2){
		UIempt.src = UI2SLT[catLevel-1];
	}
	else if(UISelect==3){
		UIempt.src = UI3SLT[sheepLevel-1];
	}
	else if(UISelect==4){
		UIempt.src = UI4SLT[squirrelLevel-1];
	}
	else if(UISelect==5){
		UIempt.src = "./UI/upgrade.png";
		if(UIemptPos[1] + 64>=UI1Pos[1]){
			if(UIemptPos[0] + 64>=UI1Pos[0] && UIemptPos[0] + 64<UI2Pos[0]){
				if(chickenLevel <= 2){
					UIbtn1.src = UI1G[chickenLevel+2];
				}
			}
			else{
				UIbtn1.src = UIbtn1Up[chickenLevel-1];
			}
			if(UIemptPos[0] + 64>=UI2Pos[0] && UIemptPos[0] + 64<UI3Pos[0]){
				if(catLevel <= 2){
					UIbtn2.src = UI2G[catLevel+2];
				}
			}
			else{
				UIbtn2.src = UIbtn2Up[catLevel-1];
			}
			if(UIemptPos[0] + 64>=UI3Pos[0] && UIemptPos[0] + 64<UI4Pos[0]){
				if(sheepLevel <= 2){
					UIbtn3.src = UI3G[sheepLevel+2];
				}
			}
			else{
				UIbtn3.src = UIbtn3Up[sheepLevel-1];
			}
			if(UIemptPos[0] + 64>=UI4Pos[0] && UIemptPos[0] + 64<UI5Pos[0]){
				if(squirrelLevel <= 2){
					UIbtn4.src = UI4G[squirrelLevel+2];
				}
			}
			else{
				UIbtn4.src = UIbtn4Up[squirrelLevel-1];
			}
		}
		else{
			UIbtn1.src = UIbtn1Up[chickenLevel-1];
			UIbtn2.src = UIbtn2Up[catLevel-1];
			UIbtn3.src = UIbtn3Up[sheepLevel-1];
			UIbtn4.src = UIbtn4Up[squirrelLevel-1];
		}
	}
	else if(UISelect==6){
		UIempt.src = "./UI/sell.png";
	}
	if(hearts <= 0){
		if(UIemptPos[0] + 64 >= 129*4 && UIemptPos[0] + 64 < 129*4 + 24*4 &&
			UIemptPos[1] + 64 >= 158*4 && UIemptPos[1] + 64 < 158*4 + 11*4){
			UIYes.src = "./UI/Yes2.png";
		}
		else{
			UIYes.src = "./UI/Yes1.png";
		}
		if(UIemptPos[0] + 64 >= 125*4 + 32*4 + 15*4 && UIemptPos[0] + 64 < 125*4 + 32*4 + 15*4 + 18*4 &&
			UIemptPos[1] + 64 >= 158*4 && UIemptPos[1] + 64 < 158*4 + 11*4){
			UINo.src = "./UI/No2.png";
		}
		else{
			UINo.src = "./UI/No1.png";
		}
	}
}

function placeMob(x, y){ //클릭한 몹을 좌표에 배치하기
	if(UISelect==1){
		if(searchMob(parseInt(x/(32*4)), parseInt(y/(32*4))) == false){
			var chicken = new Chicken();
			chicken.hp = chickenHp[chickenLevel-1];
			chicken.maxCoolTime = chickenMaxCoolTime[chickenLevel-1];
			chicken.x = x-x%(32*4);
			chicken.y = y-y%(32*4);
			chicken.laneX = parseInt(x/(32*4));
			chicken.laneY = parseInt(y/(32*4));
			gold -= chickenGold[chickenLevel - 1];
			chickens.push(chicken);
			UIempt.src = "./UI/empty.png";
			UISelect=0;
		}
	}
	else if(UISelect==2){
		if(searchMob(parseInt(x/(32*4)), parseInt(y/(32*4))) == false){
			var cat = new Cat();
			cat.hp = catHp[catLevel-1];
			cat.maxCoolTime = catMaxCoolTime[catLevel-1];
			cat.x = x-x%(32*4);
			cat.y = y-y%(32*4);
			cat.laneX = parseInt(x/(32*4));
			cat.laneY = parseInt(y/(32*4));
			gold -= catGold[catLevel - 1];
			cats.push(cat);
			UIempt.src = "./UI/empty.png";
			UISelect=0;
		}
	}
	else if(UISelect==3){
		if(searchMob(parseInt(x/(32*4)), parseInt(y/(32*4))) == false){
			var sheep = new Sheep();
			sheep.hp = sheepHp[sheepLevel-1];
			sheep.x = x-x%(32*4);
			sheep.y = y-y%(32*4);
			sheep.laneX = parseInt(x/(32*4));
			sheep.laneY = parseInt(y/(32*4));
			gold -= sheepGold[sheepLevel - 1];
			sheeps.push(sheep);
			UIempt.src = "./UI/empty.png";
			UISelect=0;
		}
	}
	else if(UISelect==4){
		if(searchMob(parseInt(x/(32*4)), parseInt(y/(32*4))) == false){
			var squirrel = new Squirrel();
			squirrel.hp = squirrelHp[squirrelLevel-1];
			squirrel.maxCoolTime = squirrelMaxCoolTime[squirrelLevel-1];
			squirrel.x = x-x%(32*4);
			squirrel.y = y-y%(32*4);
			squirrel.laneX = parseInt(x/(32*4));
			squirrel.laneY = parseInt(y/(32*4));
			gold -= squirrelGold[squirrelLevel - 1];
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

function sellMob(x, y){ //클릭한 몹을 팔기
	chickens.forEach((a, i, o)=>{
		if(a.laneX == x && a.laneY == y){
			gold += a.gold;
			o.splice(i, 1)
		}
	})
	cats.forEach((a, i, o)=>{
		if(a.laneX == x && a.laneY == y){
			gold += a.gold;
			o.splice(i, 1)
		}
	})
	sheeps.forEach((a, i, o)=>{
		if(a.laneX == x && a.laneY == y){
			gold += a.gold;
			o.splice(i, 1)
		}
	})
	squirrels.forEach((a, i, o)=>{
		if(a.laneX == x && a.laneY == y){
			gold += a.gold;
			o.splice(i, 1)
		}
	})
}

function searchMob(x, y){ //같은 좌표에 중복설치 못하게 막기...
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
	enemies.forEach((a, i, o)=>{
		if(a.x <= x*32*4 + 24*4 && a.x + a.width >= x*32*4 && a.laneY == y){
			placeIn = true;
		}
	})
	return placeIn;
}

canvas.addEventListener('mousedown', clickPointer); //마우스 버튼down시 event 발생
canvas.addEventListener('mouseup', UIReset); //마우스 버튼up시 event 발생
canvas.addEventListener('mousemove', (e)=> {follow(e.pageX, e.pageY);}); //마우스 움직일때마다 event 발생