"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6738],{6314:(k,l,r)=>{r.r(l),r.d(l,{CorzinMapaPageModule:()=>M});var c=r(6895),C=r(433),a=r(8008),m=r(3304),s=r(7705),o=r(4650);function u(n,e){if(1&n){const t=o.EpF();o.TgZ(0,"map-marker",7,8),o.NdJ("mapClick",function(){const g=o.CHM(t).$implicit,z=o.MAs(1),h=o.oxw();return o.KtG(h.openInfo(z,g.info,g.infoBody))}),o.qZA()}if(2&n){const t=e.$implicit;o.Q6J("position",t.position)("icon",t.icon)("title",t.title)("options",t.options)}}const d=[{path:"",component:(()=>{class n{constructor(t){this.navCtrl=t,this.markersCorzin=[{id:0,title:"Felipe El Corz\xedn",position:{lat:41.456702968223546,lng:2.2172632272216926},icon:"assets/corzin/marcador-corzin.png",info:"Felipe El Corz\xedn",infoBody:"Consultor Web Mobile",options:{animation:google.maps.Animation.BOUNCE}}],this.options={center:{lat:41.456702968223546,lng:2.2172632272216926},zoom:16,mapTypeId:"roadmap"},this.markers=[],this.infoContentHeader="",this.infoContentBody=""}ngOnInit(){}addMarker(){this.markers=this.markersCorzin}openInfo(t,i,p){this.infoContentHeader=i,this.infoContentBody=p,this.info.open(t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(a.SH))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-corzin-mapa"]],viewQuery:function(t,i){if(1&t&&(o.Gf(s.b6,5),o.Gf(s.ch,5)),2&t){let p;o.iGM(p=o.CRH())&&(i.map=p.first),o.iGM(p=o.CRH())&&(i.info=p.first)}},decls:19,vars:4,consts:[["color","primary"],["slot","start"],["src","../../../assets/corzin/logo_small.png","alt","logo",1,"logo-header"],[1,"ion-text-center"],["width","100%","height","100%","display","block",3,"options","mapClick"],[3,"position","icon","title","options","mapClick",4,"ngFor","ngForOf"],[1,"ion-text-wrap"],[3,"position","icon","title","options","mapClick"],["content","mapMarker"]],template:function(t,i){1&t&&(o.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),o._UZ(3,"ion-back-button"),o.qZA(),o.TgZ(4,"ion-title"),o._UZ(5,"img",2),o._uU(6," Felipe El Corz\xedn "),o.qZA()(),o.TgZ(7,"ion-toolbar",0)(8,"h3",3),o._uU(9,"Toca en el mapa!!"),o.qZA()()(),o.TgZ(10,"ion-content")(11,"google-map",4),o.NdJ("mapClick",function(){return i.addMarker()}),o.YNc(12,u,2,4,"map-marker",5),o.TgZ(13,"map-info-window")(14,"h3",3),o._uU(15),o.qZA(),o.TgZ(16,"p",6)(17,"b"),o._uU(18),o.qZA()()()()()),2&t&&(o.xp6(11),o.Q6J("options",i.options),o.xp6(1),o.Q6J("ngForOf",i.markers),o.xp6(3),o.Oqu(i.infoContentHeader),o.xp6(3),o.Oqu(i.infoContentBody))},dependencies:[c.sg,a.oU,a.Sm,a.W2,a.Gu,a.wd,a.sr,a.cs,s.b6,s.ch,s.O_]}),n})()}];let f=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[m.Bz.forChild(d),m.Bz]}),n})(),M=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[c.ez,C.u5,a.Pc,f,s.Y4]}),n})()}}]);