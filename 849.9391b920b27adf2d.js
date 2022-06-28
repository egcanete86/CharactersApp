"use strict";(self.webpackChunkPersonajesApp=self.webpackChunkPersonajesApp||[]).push([[849],{491:(k,c,s)=>{s.r(c),s.d(c,{PersonajeModule:()=>x});var m=s(808),f=s(767),e=s(223),N=s(646);let h=(()=>{class i{constructor(){this.lastOptions=[],this.resetOptionsAfter=20,this.quantityOfQuerys=0,this.characters=this.buildCharacters()}getCharacterOptions(){let a=this.characters.sort(()=>Math.random()-.5);if(a=a.filter(o=>this.lastOptions.findIndex(M=>M===o.id)<0),a=a.splice(0,4),4!==a.length)throw"Characters must be 4";const d=[this.characters.find(o=>o==a[0]),this.characters.find(o=>o==a[1]),this.characters.find(o=>o==a[2]),this.characters.find(o=>o==a[3])],u=Math.floor(4*Math.random());return d[u].selected=!0,this.lastOptions.push(d[u].id),this.quantityOfQuerys>=this.resetOptionsAfter&&(this.lastOptions=[],this.quantityOfQuerys=0),this.quantityOfQuerys=this.quantityOfQuerys+1,(0,N.of)(d)}buildCharacters(){return[{id:1,name:"Abu",fileName:"abu"},{id:2,name:"Aladdin",fileName:"aladdin"},{id:3,name:"Amber",fileName:"amber"},{id:4,name:"Anna",fileName:"ana"},{id:5,name:"Antonio",fileName:"antonio"},{id:6,name:"Ariel",fileName:"ariel"},{id:7,name:"Aurora",fileName:"aurora"},{id:8,name:"Bambie",fileName:"bambie"},{id:9,name:"Baymax",fileName:"baymax"},{id:10,name:"Bestia",fileName:"beast"},{id:11,name:"Bella",fileName:"bella"},{id:12,name:"Blancanieves",fileName:"blancanieves"},{id:13,name:"Boris",fileName:"boris"},{id:14,name:"Camilo",fileName:"camilo"},{id:15,name:"Capit\xe1n Am\xe9rica",fileName:"capitan_america"},{id:16,name:"Capit\xe1n Garfio",fileName:"capitan_garfio"},{id:17,name:"Cenicienta",fileName:"cenicienta"},{id:18,name:"Chip",fileName:"chip"},{id:19,name:"Daisy",fileName:"daisy"},{id:20,name:"Dante",fileName:"dante"},{id:21,name:"Dash",fileName:"dash"},{id:22,name:"Demi",fileName:"demi"},{id:23,name:"Din Don",fileName:"din_don"},{id:24,name:"Donald",fileName:"donald"},{id:25,name:"Elena",fileName:"elena"},{id:26,name:"Elsa",fileName:"elsa"},{id:27,name:"Ernesto",fileName:"ernesto"},{id:28,name:"Flynn Rider",fileName:"eugine"},{id:29,name:"Frozono",fileName:"frozono"},{id:30,name:"Genio",fileName:"genio"},{id:31,name:"Goofy",fileName:"goofy"},{id:32,name:"Hector",fileName:"hector"},{id:33,name:"Honey Lemon",fileName:"honey_lemon"},{id:34,name:"Hulk",fileName:"hulk"},{id:35,name:"Iron Man",fileName:"iron_man"},{id:36,name:"Isabella",fileName:"isabella"},{id:37,name:"Jack Jack",fileName:"jack_jack"},{id:38,name:"Jazm\xedn",fileName:"jazmine"},{id:39,name:"Kim Possible",fileName:"kim_possible"},{id:40,name:"Lobito",fileName:"lobito"},{id:41,name:"Lumiere",fileName:"lumiere"},{id:42,name:"Maui",fileName:"maui"},{id:43,name:"Maximus",fileName:"maximus"},{id:44,name:"Merida",fileName:"merida"},{id:45,name:"Mickey Mouse",fileName:"mickey"},{id:46,name:"Migs",fileName:"migs"},{id:47,name:"Miguel",fileName:"miguel"},{id:48,name:"Minnie Mouse",fileName:"minnie"},{id:49,name:"Mirabel",fileName:"mirabel"},{id:50,name:"Miranda",fileName:"miranda"},{id:51,name:"Moana",fileName:"moana"},{id:52,name:"Mufasa",fileName:"mufasa"},{id:53,name:"Mulan",fileName:"mulan"},{id:54,name:"Mushu",fileName:"mushu"},{id:55,name:"Olaf",fileName:"olaf"},{id:56,name:"Oxana",fileName:"oxana"},{id:57,name:"Pascal",fileName:"pascal"},{id:58,name:"Peter Pan",fileName:"peter_pan"},{id:59,name:"Pocahontas",fileName:"pocahontas"},{id:60,name:"Pua",fileName:"pua"},{id:61,name:"Pumba",fileName:"pumba"},{id:62,name:"Rafiki",fileName:"rafiki"},{id:63,name:"Rajah",fileName:"rajah"},{id:64,name:"Ralph",fileName:"ralph"},{id:65,name:"Rapunzel",fileName:"rapunzel"},{id:66,name:"Robert",fileName:"robert"},{id:67,name:"Sebastian",fileName:"sebastian"},{id:68,name:"Se\xf1ora Potts",fileName:"senora_potts"},{id:69,name:"Simba",fileName:"simba"},{id:70,name:"Skylar",fileName:"skylar"},{id:71,name:"Sofia",fileName:"sofia"},{id:72,name:"Spiderman",fileName:"spiderman"},{id:73,name:"Stitch",fileName:"stich"},{id:74,name:"Thor",fileName:"thor"},{id:75,name:"Tiana",fileName:"tiana"},{id:76,name:"Timon",fileName:"timon"},{id:77,name:"Tinkerbell",fileName:"tinkerbell"},{id:78,name:"Ursula",fileName:"ursula"},{id:79,name:"Vampirina",fileName:"vampirina"},{id:80,name:"Vanellope",fileName:"vanellope"},{id:81,name:"Violeta",fileName:"violeta"},{id:82,name:"Wasabi",fileName:"wasabi"},{id:83,name:"Gregoria",fileName:"gregoria"},{id:84,name:"Jafar",fileName:"jafar"},{id:85,name:"Li Shang",fileName:"li_shang"},{id:86,name:"Wendy",fileName:"wendy"},{id:87,name:"Alegria",fileName:"alegria"},{id:88,name:"Alicia",fileName:"alicia"},{id:89,name:"Alya",fileName:"alya"},{id:90,name:"Buzz Lightyear",fileName:"buzz_lightyear"},{id:91,name:"Carlos",fileName:"carlos"},{id:92,name:"Catnoir",fileName:"catnoir"},{id:93,name:"Chloe",fileName:"chloe"},{id:94,name:"Clover",fileName:"clover"},{id:95,name:"Conejo Blanco",fileName:"conejo_blanco"},{id:96,name:"Cruella",fileName:"cruella"},{id:97,name:"Darth Vader",fileName:"darth_vader"},{id:98,name:"Dolores",fileName:"dolores"},{id:99,name:"Dory",fileName:"dory"},{id:100,name:"Dr. Strange",fileName:"dr_strange"},{id:101,name:"Dra. Juguetes",fileName:"dra_juguetes"},{id:102,name:"Dumbo",fileName:"dumbo"},{id:103,name:"Esmeralda",fileName:"esmeralda"},{id:104,name:"Evie",fileName:"evie"},{id:105,name:"Gato Sonriente",fileName:"gato_sonriente"},{id:106,name:"Geppetto",fileName:"geppetto"},{id:107,name:"Hans",fileName:"hans"},{id:108,name:"Hercules",fileName:"hercules"},{id:109,name:"Iago",fileName:"iago"},{id:110,name:"Isabel",fileName:"isabel"},{id:111,name:"James",fileName:"james"},{id:112,name:"Jay",fileName:"jay"},{id:113,name:"Jessie",fileName:"jessie"},{id:114,name:"Judy Hopps",fileName:"judy_hopps"},{id:115,name:"Kristoff",fileName:"kristoff"},{id:116,name:"Ladybug",fileName:"ladybug"},{id:117,name:"Leia",fileName:"leia"},{id:118,name:"Lotso",fileName:"lotso"},{id:119,name:"Luisa",fileName:"luisa"},{id:120,name:"Mal",fileName:"mal"},{id:121,name:"Malefica",fileName:"malefica"},{id:122,name:"Marie",fileName:"marie"},{id:123,name:"Marinette",fileName:"marinette"},{id:124,name:"Mate",fileName:"mate"},{id:125,name:"Mateo",fileName:"mateo"},{id:126,name:"Mike Wazowski",fileName:"mike_wazowski"},{id:127,name:"Naomi",fileName:"naomi"},{id:128,name:"Nemo",fileName:"nemo"},{id:129,name:"Ojo de Halc\xf3n",fileName:"ojo_de_halcon"},{id:130,name:"Pantera Negra",fileName:"pantera_negra"},{id:131,name:"Pepe Grillo",fileName:"pepe_grillo"},{id:132,name:"Pinocho",fileName:"pinocho"},{id:133,name:"Pluto",fileName:"pluto"},{id:134,name:"Quasimodo",fileName:"quasimodo"},{id:135,name:"Rayo McQueen",fileName:"rayo_mcqueen"},{id:136,name:"Reina de Corazones",fileName:"reina_de_corazones"},{id:137,name:"Reina Grimhilde",fileName:"reina_grimhilde"},{id:138,name:"Rex",fileName:"rex"},{id:139,name:"Russell",fileName:"russell"},{id:140,name:"Sally",fileName:"sally"},{id:141,name:"Slinky",fileName:"slinky"},{id:142,name:"Sulley",fileName:"sulley"},{id:143,name:"Thanos",fileName:"thanos"},{id:144,name:"Tigger",fileName:"tigger"},{id:145,name:"Tristeza",fileName:"tristeza"},{id:146,name:"Vision",fileName:"vision"},{id:147,name:"Viuda Negra",fileName:"viuda_negra"},{id:148,name:"Wall-e",fileName:"wall_e"},{id:149,name:"Winnie the Pooh",fileName:"winnie_the_pooh"},{id:150,name:"Woody",fileName:"woody"},{id:151,name:"Zuzo",fileName:"zuzo"},{id:152,name:"Boo",fileName:"boo"},{id:153,name:"Bruja Escarlata",fileName:"bruja_escarlata"},{id:154,name:"Carl Fredricksen",fileName:"carl_fredricksen"}]}}return i.\u0275fac=function(a){return new(a||i)},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),g=(()=>{class i{onRightClick(a){a.preventDefault()}}return i.\u0275fac=function(a){return new(a||i)},i.\u0275dir=e.lG2({type:i,selectors:[["","appDisableRightClick",""]],hostBindings:function(a,t){1&a&&e.NdJ("contextmenu",function(l){return t.onRightClick(l)})}}),i})(),j=(()=>{class i{constructor(){}set personajeName(a){this.imgSrc=`https://raw.githubusercontent.com/egcanete86/CharactersApp/main/src/assets/characters/${a}.png`}}return i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-personaje-picture"]],inputs:{personajeName:"personajeName",showPersonaje:"showPersonaje"},decls:2,vars:2,consts:[[1,"personaje-container"],["appDisableRightClick","","alt","personaje",1,"img-fluid",3,"src","ngClass"]],template:function(a,t){1&a&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.qZA()),2&a&&(e.xp6(1),e.Q6J("src",t.imgSrc,e.LSH)("ngClass",t.showPersonaje?"fade-in":"hidden-personaje"))},directives:[g,m.mk],styles:[".personaje-container[_ngcontent-%COMP%]{height:300px}img[_ngcontent-%COMP%]{height:250px;user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-drag:none;-webkit-user-select:none}.hidden-personaje[_ngcontent-%COMP%]{filter:brightness(0)}"]}),i})();function _(i,n){if(1&i){const a=e.EpF();e.TgZ(0,"li",2),e.NdJ("click",function(){const l=e.CHM(a).$implicit;return e.oxw().SelectPersonaje(l.id)}),e._uU(1),e.ALo(2,"uppercase"),e.qZA()}if(2&i){const a=n.$implicit;e.Q6J("id",a.id),e.xp6(1),e.hij(" ",e.lcZ(2,2,a.name)," ")}}let y=(()=>{class i{constructor(){this.personajes=[],this.selectPersonaje=new e.vpe}SelectPersonaje(a){this.selectPersonaje.emit(a)}}return i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-personaje-options"]],inputs:{personajes:"personajes"},outputs:{selectPersonaje:"selectPersonaje"},decls:3,vars:1,consts:[[1,"options-container"],[3,"id","click",4,"ngFor","ngForOf"],[3,"id","click"]],template:function(a,t){1&a&&(e.TgZ(0,"div",0)(1,"ul"),e.YNc(2,_,3,4,"li",1),e.qZA()()),2&a&&(e.xp6(2),e.Q6J("ngForOf",t.personajes))},directives:[m.sg],pipes:[m.gd],styles:["ul[_ngcontent-%COMP%]{list-style-type:none}li[_ngcontent-%COMP%]{background-color:#fff;border-radius:5px;border:1px solid rgba(0,0,0,.2);cursor:pointer;margin-bottom:10px;width:300px;border-color:dark;border-left:5px solid;border-bottom:5px solid}li[_ngcontent-%COMP%]:hover{color:#fff;background-color:#0000000d}.options-container[_ngcontent-%COMP%]{display:flex;padding-right:30px;justify-content:center}"]}),i})();function b(i,n){if(1&i){const a=e.EpF();e.TgZ(0,"app-personaje-options",11),e.NdJ("selectPersonaje",function(r){return e.CHM(a),e.oxw(2).checkAnswer(r)}),e.qZA()}if(2&i){const a=e.oxw(2);e.Q6J("personajes",a.personajeArr)}}function C(i,n){if(1&i){const a=e.EpF();e.TgZ(0,"div")(1,"h2",12),e._uU(2),e.ALo(3,"uppercase"),e.qZA(),e.TgZ(4,"button",13),e.NdJ("click",function(){return e.CHM(a),e.oxw(2).newGame()}),e._uU(5," Siguiente "),e.qZA()()}if(2&i){const a=e.oxw(2);e.xp6(2),e.Oqu(e.lcZ(3,1,a.message))}}function P(i,n){if(1&i&&(e.TgZ(0,"div",2)(1,"div",6)(2,"div",7),e._UZ(3,"app-personaje-picture",8),e.qZA(),e.TgZ(4,"div",0),e.YNc(5,b,1,1,"app-personaje-options",9),e.qZA(),e.TgZ(6,"div",0),e.YNc(7,C,6,3,"div",10),e.qZA()()()),2&i){const a=e.oxw();e.xp6(3),e.Q6J("personajeName",a.personaje.fileName)("showPersonaje",a.showPersonaje),e.xp6(2),e.Q6J("ngIf",!a.showAnswer),e.xp6(2),e.Q6J("ngIf",a.showAnswer)}}const v=[{path:"",component:(()=>{class i{constructor(a){this.httpService=a,this.personajeArr=[],this.showPersonaje=!1,this.showAnswer=!1,this.message="",this.puntos=0}ngOnInit(){this.newGame()}mixPersonajeArray(){this.httpService.getCharacterOptions().subscribe(a=>{this.personajeArr=a,this.personaje=this.personajeArr.find(t=>!0===t.selected)})}checkAnswer(a){!this.personaje||(this.showPersonaje=!0,this.showAnswer=!0,a===this.personaje.id?(this.puntos=this.puntos+1,this.message=`Correcto, ${this.personaje.name}`):(this.puntos=0,this.message=`Oops, era ${this.personaje.name}`))}newGame(){this.showPersonaje=!1,this.showAnswer=!1,this.personajeArr=[],this.personaje=void 0,this.mixPersonajeArray()}}return i.\u0275fac=function(a){return new(a||i)(e.Y36(h))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-main"]],decls:7,vars:2,consts:[[1,"row"],[1,"col"],[1,"row","justify-content-center","mt-4"],["src","https://raw.githubusercontent.com/egcanete86/CharactersApp/main/src/assets/disney.png","alt","disney",1,"mickey-img"],[1,"mickey-text"],["class","row justify-content-center mt-4",4,"ngIf"],[1,"col-sm-12","col-md-6","col-lg-6","col-xl-6"],[1,"row","mt-5"],[3,"personajeName","showPersonaje"],[3,"personajes","selectPersonaje",4,"ngIf"],[4,"ngIf"],[3,"personajes","selectPersonaje"],[1,"fade-in","text-white"],[1,"btn","btn-primary","mt-4",3,"click"]],template:function(a,t){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"img",3),e.TgZ(4,"h3",4),e._uU(5),e.qZA()(),e.YNc(6,P,8,4,"div",5),e.qZA()()),2&a&&(e.xp6(5),e.Oqu(t.puntos),e.xp6(1),e.Q6J("ngIf",t.personaje))},directives:[m.O5,j,y],pipes:[m.gd],styles:[".mickey-img[_ngcontent-%COMP%]{height:80px;width:110px}.mickey-text[_ngcontent-%COMP%]{position:absolute;top:55px;color:#fff}.fade-in[_ngcontent-%COMP%]{animation:fadeIn .3s;-webkit-animation:fadeIn .3s;-moz-animation:fadeIn .3s;-o-animation:fadeIn .3s;-ms-animation:fadeIn .3s}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}"]}),i})(),children:[{path:"**",redirectTo:"personajes"}]}];let w=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[f.Bz.forChild(v)],f.Bz]}),i})(),x=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[m.ez,w]]}),i})()}}]);