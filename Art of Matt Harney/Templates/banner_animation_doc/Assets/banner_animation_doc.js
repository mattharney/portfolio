(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"banner_animation_doc_atlas_", frames: [[1232,6644,1230,300],[6160,6342,1230,300],[3696,6342,1230,300],[0,6644,1230,300],[2464,6342,1230,300],[0,6342,1230,300],[2464,6644,1230,300],[4928,6342,1230,300],[3696,6644,1230,300],[1232,6342,1230,300],[4928,6644,1230,300],[3696,6040,1230,300],[2464,6040,1230,300],[4928,6040,1230,300],[6160,6040,1230,300],[6160,3926,1230,300],[1232,4228,1230,300],[3696,3926,1230,300],[0,4228,1230,300],[4928,3926,1230,300],[0,302,1230,300],[3696,0,1230,300],[4928,0,1230,300],[6160,0,1230,300],[1232,302,1230,300],[1232,0,1230,300],[2464,0,1230,300],[2464,302,1230,300],[0,0,1230,300],[1232,3322,1230,300],[6160,3020,1230,300],[0,3322,1230,300],[3696,3322,1230,300],[6160,3322,1230,300],[3696,3020,1230,300],[2464,3322,1230,300],[4928,3322,1230,300],[4928,3020,1230,300],[1232,3624,1230,300],[2464,3926,1230,300],[6160,3624,1230,300],[0,3926,1230,300],[4928,3624,1230,300],[1232,3926,1230,300],[2464,3624,1230,300],[0,3624,1230,300],[3696,3624,1230,300],[3696,6946,1230,300],[6160,6946,1230,300],[0,7248,1230,300],[4928,6946,1230,300],[1232,7248,1230,300],[0,6946,1230,300],[6160,6644,1230,300],[1232,6946,1230,300],[2464,6946,1230,300],[4928,4228,1230,300],[6160,4228,1230,300],[0,4832,1230,300],[2464,4228,1230,300],[0,5134,1230,300],[4928,4832,1230,300],[2464,4832,1230,300],[1232,4832,1230,300],[1232,5134,1230,300],[2464,4530,1230,300],[0,4530,1230,300],[4928,4530,1230,300],[3696,4228,1230,300],[1232,4530,1230,300],[3696,4530,1230,300],[6160,4530,1230,300],[3696,4832,1230,300],[6160,4832,1230,300],[0,604,1230,300],[2464,1208,1230,300],[1232,604,1230,300],[3696,906,1230,300],[3696,604,1230,300],[6160,302,1230,300],[6160,604,1230,300],[0,906,1230,300],[3696,302,1230,300],[2464,604,1230,300],[1232,906,1230,300],[2464,906,1230,300],[4928,604,1230,300],[4928,906,1230,300],[0,1208,1230,300],[6160,906,1230,300],[1232,1208,1230,300],[4928,302,1230,300],[3696,1510,1230,300],[1232,1812,1230,300],[6160,1208,1230,300],[0,2114,1230,300],[6160,1812,1230,300],[0,1510,1230,300],[3696,1812,1230,300],[2464,1812,1230,300],[1232,2114,1230,300],[4928,1812,1230,300],[2464,2114,1230,300],[4928,1510,1230,300],[3696,1208,1230,300],[4928,1208,1230,300],[1232,1510,1230,300],[2464,1510,1230,300],[6160,1510,1230,300],[0,1812,1230,300],[6160,5436,1230,300],[2464,5134,1230,300],[6160,5738,1230,300],[0,6040,1230,300],[3696,5134,1230,300],[1232,5738,1230,300],[0,5436,1230,300],[3696,5738,1230,300],[4928,5134,1230,300],[6160,5134,1230,300],[3696,5436,1230,300],[4928,5738,1230,300],[1232,6040,1230,300],[2464,5738,1230,300],[1232,5436,1230,300],[4928,5436,1230,300],[2464,5436,1230,300],[0,5738,1230,300],[3696,2416,1230,300],[3696,2718,1230,300],[1232,3020,1230,300],[2464,2718,1230,300],[1232,2718,1230,300],[0,2718,1230,300],[4928,2718,1230,300],[6160,2718,1230,300],[0,2416,1230,300],[1232,2416,1230,300],[0,3020,1230,300],[2464,3020,1230,300],[4928,2416,1230,300],[2464,2416,1230,300],[3696,2114,1230,300],[4928,2114,1230,300],[6160,2416,1230,300],[6160,2114,1230,300],[6160,7248,1230,300],[3696,7248,1230,300],[4928,7248,1230,300],[2464,7248,1230,300]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.train_banner_test_00000 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00001 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00002 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00003 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00004 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00005 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00006 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00007 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00008 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00009 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00010 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00011 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00012 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00013 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00014 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00015 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00016 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00017 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00018 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00019 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00020 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00021 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00022 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00023 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00024 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00025 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00026 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00027 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00028 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00029 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00030 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00031 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00032 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00033 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00034 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00035 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00036 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00037 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00038 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00039 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00040 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00041 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00042 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00043 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00044 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00045 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00046 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00047 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00048 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00049 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00050 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00051 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00052 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00053 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00054 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00055 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00056 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00057 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00058 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00059 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00060 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00061 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00062 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00063 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00064 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00065 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00066 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00067 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00068 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00069 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00070 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00071 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00072 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00073 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00074 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00075 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00076 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00077 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00078 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00079 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00080 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00081 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00082 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00083 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00084 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00085 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00086 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00087 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00088 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00089 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00090 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00091 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00092 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00093 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00094 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00095 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00096 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00097 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00098 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00099 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00100 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00101 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00102 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00103 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00104 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00105 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00106 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00107 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00108 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00109 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00110 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00111 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00112 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00113 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00114 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00115 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00116 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00117 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00118 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00119 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00120 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00121 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00122 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00123 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00124 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00125 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00126 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00127 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00128 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00129 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00130 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00131 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00132 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00133 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00134 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00135 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00136 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00137 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00138 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00139 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00140 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00141 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00142 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00143 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00144 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00145 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00146 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00147 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00148 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.train_banner_test_00149 = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.banner_animation_doc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.train_banner_test_00000();
	this.instance.parent = this;
	this.instance.setTransform(1,0);

	this.instance_1 = new lib.train_banner_test_00001();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,0);

	this.instance_2 = new lib.train_banner_test_00002();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1,0);

	this.instance_3 = new lib.train_banner_test_00003();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1,0);

	this.instance_4 = new lib.train_banner_test_00004();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1,0);

	this.instance_5 = new lib.train_banner_test_00005();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1,0);

	this.instance_6 = new lib.train_banner_test_00006();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1,0);

	this.instance_7 = new lib.train_banner_test_00007();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1,0);

	this.instance_8 = new lib.train_banner_test_00008();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1,0);

	this.instance_9 = new lib.train_banner_test_00009();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1,0);

	this.instance_10 = new lib.train_banner_test_00010();
	this.instance_10.parent = this;
	this.instance_10.setTransform(1,0);

	this.instance_11 = new lib.train_banner_test_00011();
	this.instance_11.parent = this;
	this.instance_11.setTransform(1,0);

	this.instance_12 = new lib.train_banner_test_00012();
	this.instance_12.parent = this;
	this.instance_12.setTransform(1,0);

	this.instance_13 = new lib.train_banner_test_00013();
	this.instance_13.parent = this;
	this.instance_13.setTransform(1,0);

	this.instance_14 = new lib.train_banner_test_00014();
	this.instance_14.parent = this;
	this.instance_14.setTransform(1,0);

	this.instance_15 = new lib.train_banner_test_00015();
	this.instance_15.parent = this;
	this.instance_15.setTransform(1,0);

	this.instance_16 = new lib.train_banner_test_00016();
	this.instance_16.parent = this;
	this.instance_16.setTransform(1,0);

	this.instance_17 = new lib.train_banner_test_00017();
	this.instance_17.parent = this;
	this.instance_17.setTransform(1,0);

	this.instance_18 = new lib.train_banner_test_00018();
	this.instance_18.parent = this;
	this.instance_18.setTransform(1,0);

	this.instance_19 = new lib.train_banner_test_00019();
	this.instance_19.parent = this;
	this.instance_19.setTransform(1,0);

	this.instance_20 = new lib.train_banner_test_00020();
	this.instance_20.parent = this;
	this.instance_20.setTransform(1,0);

	this.instance_21 = new lib.train_banner_test_00021();
	this.instance_21.parent = this;
	this.instance_21.setTransform(1,0);

	this.instance_22 = new lib.train_banner_test_00022();
	this.instance_22.parent = this;
	this.instance_22.setTransform(1,0);

	this.instance_23 = new lib.train_banner_test_00023();
	this.instance_23.parent = this;
	this.instance_23.setTransform(1,0);

	this.instance_24 = new lib.train_banner_test_00024();
	this.instance_24.parent = this;
	this.instance_24.setTransform(1,0);

	this.instance_25 = new lib.train_banner_test_00025();
	this.instance_25.parent = this;
	this.instance_25.setTransform(1,0);

	this.instance_26 = new lib.train_banner_test_00026();
	this.instance_26.parent = this;
	this.instance_26.setTransform(1,0);

	this.instance_27 = new lib.train_banner_test_00027();
	this.instance_27.parent = this;
	this.instance_27.setTransform(1,0);

	this.instance_28 = new lib.train_banner_test_00028();
	this.instance_28.parent = this;
	this.instance_28.setTransform(1,0);

	this.instance_29 = new lib.train_banner_test_00029();
	this.instance_29.parent = this;
	this.instance_29.setTransform(1,0);

	this.instance_30 = new lib.train_banner_test_00030();
	this.instance_30.parent = this;
	this.instance_30.setTransform(1,0);

	this.instance_31 = new lib.train_banner_test_00031();
	this.instance_31.parent = this;
	this.instance_31.setTransform(1,0);

	this.instance_32 = new lib.train_banner_test_00032();
	this.instance_32.parent = this;
	this.instance_32.setTransform(1,0);

	this.instance_33 = new lib.train_banner_test_00033();
	this.instance_33.parent = this;
	this.instance_33.setTransform(1,0);

	this.instance_34 = new lib.train_banner_test_00034();
	this.instance_34.parent = this;
	this.instance_34.setTransform(1,0);

	this.instance_35 = new lib.train_banner_test_00035();
	this.instance_35.parent = this;
	this.instance_35.setTransform(1,0);

	this.instance_36 = new lib.train_banner_test_00036();
	this.instance_36.parent = this;
	this.instance_36.setTransform(1,0);

	this.instance_37 = new lib.train_banner_test_00037();
	this.instance_37.parent = this;
	this.instance_37.setTransform(1,0);

	this.instance_38 = new lib.train_banner_test_00038();
	this.instance_38.parent = this;
	this.instance_38.setTransform(1,0);

	this.instance_39 = new lib.train_banner_test_00039();
	this.instance_39.parent = this;
	this.instance_39.setTransform(1,0);

	this.instance_40 = new lib.train_banner_test_00040();
	this.instance_40.parent = this;
	this.instance_40.setTransform(1,0);

	this.instance_41 = new lib.train_banner_test_00041();
	this.instance_41.parent = this;
	this.instance_41.setTransform(1,0);

	this.instance_42 = new lib.train_banner_test_00042();
	this.instance_42.parent = this;
	this.instance_42.setTransform(1,0);

	this.instance_43 = new lib.train_banner_test_00043();
	this.instance_43.parent = this;
	this.instance_43.setTransform(1,0);

	this.instance_44 = new lib.train_banner_test_00044();
	this.instance_44.parent = this;
	this.instance_44.setTransform(1,0);

	this.instance_45 = new lib.train_banner_test_00045();
	this.instance_45.parent = this;
	this.instance_45.setTransform(1,0);

	this.instance_46 = new lib.train_banner_test_00046();
	this.instance_46.parent = this;
	this.instance_46.setTransform(1,0);

	this.instance_47 = new lib.train_banner_test_00047();
	this.instance_47.parent = this;
	this.instance_47.setTransform(1,0);

	this.instance_48 = new lib.train_banner_test_00048();
	this.instance_48.parent = this;
	this.instance_48.setTransform(1,0);

	this.instance_49 = new lib.train_banner_test_00049();
	this.instance_49.parent = this;
	this.instance_49.setTransform(1,0);

	this.instance_50 = new lib.train_banner_test_00050();
	this.instance_50.parent = this;
	this.instance_50.setTransform(1,0);

	this.instance_51 = new lib.train_banner_test_00051();
	this.instance_51.parent = this;
	this.instance_51.setTransform(1,0);

	this.instance_52 = new lib.train_banner_test_00052();
	this.instance_52.parent = this;
	this.instance_52.setTransform(1,0);

	this.instance_53 = new lib.train_banner_test_00053();
	this.instance_53.parent = this;
	this.instance_53.setTransform(1,0);

	this.instance_54 = new lib.train_banner_test_00054();
	this.instance_54.parent = this;
	this.instance_54.setTransform(1,0);

	this.instance_55 = new lib.train_banner_test_00055();
	this.instance_55.parent = this;
	this.instance_55.setTransform(1,0);

	this.instance_56 = new lib.train_banner_test_00056();
	this.instance_56.parent = this;
	this.instance_56.setTransform(1,0);

	this.instance_57 = new lib.train_banner_test_00057();
	this.instance_57.parent = this;
	this.instance_57.setTransform(1,0);

	this.instance_58 = new lib.train_banner_test_00058();
	this.instance_58.parent = this;
	this.instance_58.setTransform(1,0);

	this.instance_59 = new lib.train_banner_test_00059();
	this.instance_59.parent = this;
	this.instance_59.setTransform(1,0);

	this.instance_60 = new lib.train_banner_test_00060();
	this.instance_60.parent = this;
	this.instance_60.setTransform(1,0);

	this.instance_61 = new lib.train_banner_test_00061();
	this.instance_61.parent = this;
	this.instance_61.setTransform(1,0);

	this.instance_62 = new lib.train_banner_test_00062();
	this.instance_62.parent = this;
	this.instance_62.setTransform(1,0);

	this.instance_63 = new lib.train_banner_test_00063();
	this.instance_63.parent = this;
	this.instance_63.setTransform(1,0);

	this.instance_64 = new lib.train_banner_test_00064();
	this.instance_64.parent = this;
	this.instance_64.setTransform(1,0);

	this.instance_65 = new lib.train_banner_test_00065();
	this.instance_65.parent = this;
	this.instance_65.setTransform(1,0);

	this.instance_66 = new lib.train_banner_test_00066();
	this.instance_66.parent = this;
	this.instance_66.setTransform(1,0);

	this.instance_67 = new lib.train_banner_test_00067();
	this.instance_67.parent = this;
	this.instance_67.setTransform(1,0);

	this.instance_68 = new lib.train_banner_test_00068();
	this.instance_68.parent = this;
	this.instance_68.setTransform(1,0);

	this.instance_69 = new lib.train_banner_test_00069();
	this.instance_69.parent = this;
	this.instance_69.setTransform(1,0);

	this.instance_70 = new lib.train_banner_test_00070();
	this.instance_70.parent = this;
	this.instance_70.setTransform(1,0);

	this.instance_71 = new lib.train_banner_test_00071();
	this.instance_71.parent = this;
	this.instance_71.setTransform(1,0);

	this.instance_72 = new lib.train_banner_test_00072();
	this.instance_72.parent = this;
	this.instance_72.setTransform(1,0);

	this.instance_73 = new lib.train_banner_test_00073();
	this.instance_73.parent = this;
	this.instance_73.setTransform(1,0);

	this.instance_74 = new lib.train_banner_test_00074();
	this.instance_74.parent = this;
	this.instance_74.setTransform(1,0);

	this.instance_75 = new lib.train_banner_test_00075();
	this.instance_75.parent = this;
	this.instance_75.setTransform(1,0);

	this.instance_76 = new lib.train_banner_test_00076();
	this.instance_76.parent = this;
	this.instance_76.setTransform(1,0);

	this.instance_77 = new lib.train_banner_test_00077();
	this.instance_77.parent = this;
	this.instance_77.setTransform(1,0);

	this.instance_78 = new lib.train_banner_test_00078();
	this.instance_78.parent = this;
	this.instance_78.setTransform(1,0);

	this.instance_79 = new lib.train_banner_test_00079();
	this.instance_79.parent = this;
	this.instance_79.setTransform(1,0);

	this.instance_80 = new lib.train_banner_test_00080();
	this.instance_80.parent = this;
	this.instance_80.setTransform(1,0);

	this.instance_81 = new lib.train_banner_test_00081();
	this.instance_81.parent = this;
	this.instance_81.setTransform(1,0);

	this.instance_82 = new lib.train_banner_test_00082();
	this.instance_82.parent = this;
	this.instance_82.setTransform(1,0);

	this.instance_83 = new lib.train_banner_test_00083();
	this.instance_83.parent = this;
	this.instance_83.setTransform(1,0);

	this.instance_84 = new lib.train_banner_test_00084();
	this.instance_84.parent = this;
	this.instance_84.setTransform(1,0);

	this.instance_85 = new lib.train_banner_test_00085();
	this.instance_85.parent = this;
	this.instance_85.setTransform(1,0);

	this.instance_86 = new lib.train_banner_test_00086();
	this.instance_86.parent = this;
	this.instance_86.setTransform(1,0);

	this.instance_87 = new lib.train_banner_test_00087();
	this.instance_87.parent = this;
	this.instance_87.setTransform(1,0);

	this.instance_88 = new lib.train_banner_test_00088();
	this.instance_88.parent = this;
	this.instance_88.setTransform(1,0);

	this.instance_89 = new lib.train_banner_test_00089();
	this.instance_89.parent = this;
	this.instance_89.setTransform(1,0);

	this.instance_90 = new lib.train_banner_test_00090();
	this.instance_90.parent = this;
	this.instance_90.setTransform(1,0);

	this.instance_91 = new lib.train_banner_test_00091();
	this.instance_91.parent = this;
	this.instance_91.setTransform(1,0);

	this.instance_92 = new lib.train_banner_test_00092();
	this.instance_92.parent = this;
	this.instance_92.setTransform(1,0);

	this.instance_93 = new lib.train_banner_test_00093();
	this.instance_93.parent = this;
	this.instance_93.setTransform(1,0);

	this.instance_94 = new lib.train_banner_test_00094();
	this.instance_94.parent = this;
	this.instance_94.setTransform(1,0);

	this.instance_95 = new lib.train_banner_test_00095();
	this.instance_95.parent = this;
	this.instance_95.setTransform(1,0);

	this.instance_96 = new lib.train_banner_test_00096();
	this.instance_96.parent = this;
	this.instance_96.setTransform(1,0);

	this.instance_97 = new lib.train_banner_test_00097();
	this.instance_97.parent = this;
	this.instance_97.setTransform(1,0);

	this.instance_98 = new lib.train_banner_test_00098();
	this.instance_98.parent = this;
	this.instance_98.setTransform(1,0);

	this.instance_99 = new lib.train_banner_test_00099();
	this.instance_99.parent = this;
	this.instance_99.setTransform(1,0);

	this.instance_100 = new lib.train_banner_test_00100();
	this.instance_100.parent = this;
	this.instance_100.setTransform(1,0);

	this.instance_101 = new lib.train_banner_test_00101();
	this.instance_101.parent = this;
	this.instance_101.setTransform(1,0);

	this.instance_102 = new lib.train_banner_test_00102();
	this.instance_102.parent = this;
	this.instance_102.setTransform(1,0);

	this.instance_103 = new lib.train_banner_test_00103();
	this.instance_103.parent = this;
	this.instance_103.setTransform(1,0);

	this.instance_104 = new lib.train_banner_test_00104();
	this.instance_104.parent = this;
	this.instance_104.setTransform(1,0);

	this.instance_105 = new lib.train_banner_test_00105();
	this.instance_105.parent = this;
	this.instance_105.setTransform(1,0);

	this.instance_106 = new lib.train_banner_test_00106();
	this.instance_106.parent = this;
	this.instance_106.setTransform(1,0);

	this.instance_107 = new lib.train_banner_test_00107();
	this.instance_107.parent = this;
	this.instance_107.setTransform(1,0);

	this.instance_108 = new lib.train_banner_test_00108();
	this.instance_108.parent = this;
	this.instance_108.setTransform(1,0);

	this.instance_109 = new lib.train_banner_test_00109();
	this.instance_109.parent = this;
	this.instance_109.setTransform(1,0);

	this.instance_110 = new lib.train_banner_test_00110();
	this.instance_110.parent = this;
	this.instance_110.setTransform(1,0);

	this.instance_111 = new lib.train_banner_test_00111();
	this.instance_111.parent = this;
	this.instance_111.setTransform(1,0);

	this.instance_112 = new lib.train_banner_test_00112();
	this.instance_112.parent = this;
	this.instance_112.setTransform(1,0);

	this.instance_113 = new lib.train_banner_test_00113();
	this.instance_113.parent = this;
	this.instance_113.setTransform(1,0);

	this.instance_114 = new lib.train_banner_test_00114();
	this.instance_114.parent = this;
	this.instance_114.setTransform(1,0);

	this.instance_115 = new lib.train_banner_test_00115();
	this.instance_115.parent = this;
	this.instance_115.setTransform(1,0);

	this.instance_116 = new lib.train_banner_test_00116();
	this.instance_116.parent = this;
	this.instance_116.setTransform(1,0);

	this.instance_117 = new lib.train_banner_test_00117();
	this.instance_117.parent = this;
	this.instance_117.setTransform(1,0);

	this.instance_118 = new lib.train_banner_test_00118();
	this.instance_118.parent = this;
	this.instance_118.setTransform(1,0);

	this.instance_119 = new lib.train_banner_test_00119();
	this.instance_119.parent = this;
	this.instance_119.setTransform(1,0);

	this.instance_120 = new lib.train_banner_test_00120();
	this.instance_120.parent = this;
	this.instance_120.setTransform(1,0);

	this.instance_121 = new lib.train_banner_test_00121();
	this.instance_121.parent = this;
	this.instance_121.setTransform(1,0);

	this.instance_122 = new lib.train_banner_test_00122();
	this.instance_122.parent = this;
	this.instance_122.setTransform(1,0);

	this.instance_123 = new lib.train_banner_test_00123();
	this.instance_123.parent = this;
	this.instance_123.setTransform(1,0);

	this.instance_124 = new lib.train_banner_test_00124();
	this.instance_124.parent = this;
	this.instance_124.setTransform(1,0);

	this.instance_125 = new lib.train_banner_test_00125();
	this.instance_125.parent = this;
	this.instance_125.setTransform(1,0);

	this.instance_126 = new lib.train_banner_test_00126();
	this.instance_126.parent = this;
	this.instance_126.setTransform(1,0);

	this.instance_127 = new lib.train_banner_test_00127();
	this.instance_127.parent = this;
	this.instance_127.setTransform(1,0);

	this.instance_128 = new lib.train_banner_test_00128();
	this.instance_128.parent = this;
	this.instance_128.setTransform(1,0);

	this.instance_129 = new lib.train_banner_test_00129();
	this.instance_129.parent = this;
	this.instance_129.setTransform(1,0);

	this.instance_130 = new lib.train_banner_test_00130();
	this.instance_130.parent = this;
	this.instance_130.setTransform(1,0);

	this.instance_131 = new lib.train_banner_test_00131();
	this.instance_131.parent = this;
	this.instance_131.setTransform(1,0);

	this.instance_132 = new lib.train_banner_test_00132();
	this.instance_132.parent = this;
	this.instance_132.setTransform(1,0);

	this.instance_133 = new lib.train_banner_test_00133();
	this.instance_133.parent = this;
	this.instance_133.setTransform(1,0);

	this.instance_134 = new lib.train_banner_test_00134();
	this.instance_134.parent = this;
	this.instance_134.setTransform(1,0);

	this.instance_135 = new lib.train_banner_test_00135();
	this.instance_135.parent = this;
	this.instance_135.setTransform(1,0);

	this.instance_136 = new lib.train_banner_test_00136();
	this.instance_136.parent = this;
	this.instance_136.setTransform(1,0);

	this.instance_137 = new lib.train_banner_test_00137();
	this.instance_137.parent = this;
	this.instance_137.setTransform(1,0);

	this.instance_138 = new lib.train_banner_test_00138();
	this.instance_138.parent = this;
	this.instance_138.setTransform(1,0);

	this.instance_139 = new lib.train_banner_test_00139();
	this.instance_139.parent = this;
	this.instance_139.setTransform(1,0);

	this.instance_140 = new lib.train_banner_test_00140();
	this.instance_140.parent = this;
	this.instance_140.setTransform(1,0);

	this.instance_141 = new lib.train_banner_test_00141();
	this.instance_141.parent = this;
	this.instance_141.setTransform(1,0);

	this.instance_142 = new lib.train_banner_test_00142();
	this.instance_142.parent = this;
	this.instance_142.setTransform(1,0);

	this.instance_143 = new lib.train_banner_test_00143();
	this.instance_143.parent = this;
	this.instance_143.setTransform(1,0);

	this.instance_144 = new lib.train_banner_test_00144();
	this.instance_144.parent = this;
	this.instance_144.setTransform(1,0);

	this.instance_145 = new lib.train_banner_test_00145();
	this.instance_145.parent = this;
	this.instance_145.setTransform(1,0);

	this.instance_146 = new lib.train_banner_test_00146();
	this.instance_146.parent = this;
	this.instance_146.setTransform(1,0);

	this.instance_147 = new lib.train_banner_test_00147();
	this.instance_147.parent = this;
	this.instance_147.setTransform(1,0);

	this.instance_148 = new lib.train_banner_test_00148();
	this.instance_148.parent = this;
	this.instance_148.setTransform(1,0);

	this.instance_149 = new lib.train_banner_test_00149();
	this.instance_149.parent = this;
	this.instance_149.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).to({state:[{t:this.instance_99}]},1).to({state:[{t:this.instance_100}]},1).to({state:[{t:this.instance_101}]},1).to({state:[{t:this.instance_102}]},1).to({state:[{t:this.instance_103}]},1).to({state:[{t:this.instance_104}]},1).to({state:[{t:this.instance_105}]},1).to({state:[{t:this.instance_106}]},1).to({state:[{t:this.instance_107}]},1).to({state:[{t:this.instance_108}]},1).to({state:[{t:this.instance_109}]},1).to({state:[{t:this.instance_110}]},1).to({state:[{t:this.instance_111}]},1).to({state:[{t:this.instance_112}]},1).to({state:[{t:this.instance_113}]},1).to({state:[{t:this.instance_114}]},1).to({state:[{t:this.instance_115}]},1).to({state:[{t:this.instance_116}]},1).to({state:[{t:this.instance_117}]},1).to({state:[{t:this.instance_118}]},1).to({state:[{t:this.instance_119}]},1).to({state:[{t:this.instance_120}]},1).to({state:[{t:this.instance_121}]},1).to({state:[{t:this.instance_122}]},1).to({state:[{t:this.instance_123}]},1).to({state:[{t:this.instance_124}]},1).to({state:[{t:this.instance_125}]},1).to({state:[{t:this.instance_126}]},1).to({state:[{t:this.instance_127}]},1).to({state:[{t:this.instance_128}]},1).to({state:[{t:this.instance_129}]},1).to({state:[{t:this.instance_130}]},1).to({state:[{t:this.instance_131}]},1).to({state:[{t:this.instance_132}]},1).to({state:[{t:this.instance_133}]},1).to({state:[{t:this.instance_134}]},1).to({state:[{t:this.instance_135}]},1).to({state:[{t:this.instance_136}]},1).to({state:[{t:this.instance_137}]},1).to({state:[{t:this.instance_138}]},1).to({state:[{t:this.instance_139}]},1).to({state:[{t:this.instance_140}]},1).to({state:[{t:this.instance_141}]},1).to({state:[{t:this.instance_142}]},1).to({state:[{t:this.instance_143}]},1).to({state:[{t:this.instance_144}]},1).to({state:[{t:this.instance_145}]},1).to({state:[{t:this.instance_146}]},1).to({state:[{t:this.instance_147}]},1).to({state:[{t:this.instance_148}]},1).to({state:[{t:this.instance_149}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(616,150,1230,300);
// library properties:
lib.properties = {
	id: '1DBCFCD6E163744C88799ED187E4045C',
	width: 1230,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/banner_animation_doc_atlas_.png", id:"banner_animation_doc_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1DBCFCD6E163744C88799ED187E4045C'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;