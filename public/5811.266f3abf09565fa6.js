"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5811],{5811:(w,g,l)=>{l.r(g),l.d(g,{ContactoPageModule:()=>y});var p=l(6895),d=l(433),i=l(8008),c=l(3304),s=l(7705),o=l(4650);function u(n,a){if(1&n){const t=o.EpF();o.TgZ(0,"map-marker",24,25),o.NdJ("mapClick",function(){const m=o.CHM(t).$implicit,k=o.MAs(1),T=o.oxw();return o.KtG(T.openInfo(k,m.info,m.infoBody))}),o.qZA()}if(2&n){const t=a.$implicit;o.Q6J("position",t.position)("icon",t.icon)("title",t.title)("options",t.options)}}function f(n,a){1&n&&o._UZ(0,"ion-input",15)}function h(n,a){1&n&&o._UZ(0,"ion-input",26)}function _(n,a){1&n&&o._UZ(0,"ion-icon",27)}function C(n,a){1&n&&o._UZ(0,"ion-icon",28)}const Z=[{path:"",component:(()=>{class n{constructor(t){this.router=t,this.markersHotel=[{id:0,title:"TheLandonHotel",position:{lat:40.4857,lng:-5.99676},icon:"assets/images/logo_small.png",info:"TheLandonHotel",infoBody:"Hotel Rural para disfrutar de actividades al aire libre o en el hotel",options:{animation:google.maps.Animation.BOUNCE}}],this.options={center:{lat:40.48573,lng:-5.99676},zoom:16,mapTypeId:"roadmap"},this.markers=[],this.infoContentHeader="",this.infoContentBody="",this.showPwd=!1}ngOnInit(){}addMarker(){this.markers=this.markersHotel}openInfo(t,e,r){this.infoContentHeader=e,this.infoContentBody=r,this.info.open(t)}regresar(){this.router.navigate(["/tabs/home"])}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(c.F0))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-contacto"]],viewQuery:function(t,e){if(1&t&&(o.Gf(s.b6,5),o.Gf(s.ch,5)),2&t){let r;o.iGM(r=o.CRH())&&(e.map=r.first),o.iGM(r=o.CRH())&&(e.info=r.first)}},decls:45,vars:8,consts:[[1,"ion-no-border"],["color","primary"],["slot","start"],["fill","clear",3,"tap"],["md","arrow-back-sharp","slot","icon-only","color","light"],["src","../../../assets/images/logo_small.png",1,"logo-header"],["color","light",1,"ion-text-center"],[1,"googlemaps"],["width","100%","height","250px","display","block",3,"options","mapClick"],[3,"position","icon","title","options","mapClick",4,"ngFor","ngForOf"],[1,"ion-text-center"],[1,"ion-text-wrap"],[1,"input-group"],["lines","none"],["position","floating"],["type","text"],["type","email"],["type","text",4,"ngIf"],["type","password",4,"ngIf"],["fill","clear","slot","end","color","dark",3,"tap"],["slot","icon-only","name","eye","color","dark",4,"ngIf"],["slot","icon-only","name","eye-off","color","dark",4,"ngIf"],["expand","block","shape","round",1,"miBoton"],["md","send-sharp","slot","end","color","light"],[3,"position","icon","title","options","mapClick"],["content","mapMarker"],["type","password"],["slot","icon-only","name","eye","color","dark"],["slot","icon-only","name","eye-off","color","dark"]],template:function(t,e){1&t&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2)(3,"ion-button",3),o.NdJ("tap",function(){return e.regresar()}),o._UZ(4,"ion-icon",4),o.qZA()(),o.TgZ(5,"ion-title"),o._UZ(6,"ion-img",5),o._uU(7," Contacto "),o.qZA()(),o.TgZ(8,"ion-toolbar",1)(9,"ion-text",6)(10,"h3"),o._uU(11,"Tap on the icon!!"),o.qZA()()()(),o.TgZ(12,"ion-content")(13,"div",7)(14,"google-map",8),o.NdJ("mapClick",function(){return e.addMarker()}),o.YNc(15,u,2,4,"map-marker",9),o.TgZ(16,"map-info-window")(17,"h3",10),o._uU(18),o.qZA(),o.TgZ(19,"p",11)(20,"b"),o._uU(21),o.qZA()()()()(),o.TgZ(22,"div",12)(23,"h1",10)(24,"strong"),o._uU(25,"Fill the form"),o.qZA()(),o.TgZ(26,"ion-item",13)(27,"ion-label",14),o._uU(28,"Name"),o.qZA(),o._UZ(29,"ion-input",15),o.qZA(),o.TgZ(30,"ion-item",13)(31,"ion-label",14),o._uU(32,"Email"),o.qZA(),o._UZ(33,"ion-input",16),o.qZA(),o.TgZ(34,"ion-item",13)(35,"ion-label",14),o._uU(36,"Password"),o.qZA(),o.YNc(37,f,1,0,"ion-input",17),o.YNc(38,h,1,0,"ion-input",18),o.TgZ(39,"ion-button",19),o.NdJ("tap",function(){return e.showPwd=!e.showPwd}),o.YNc(40,_,1,0,"ion-icon",20),o.YNc(41,C,1,0,"ion-icon",21),o.qZA()(),o.TgZ(42,"ion-button",22),o._uU(43," Send "),o._UZ(44,"ion-icon",23),o.qZA()()()),2&t&&(o.xp6(14),o.Q6J("options",e.options),o.xp6(1),o.Q6J("ngForOf",e.markers),o.xp6(3),o.Oqu(e.infoContentHeader),o.xp6(3),o.Oqu(e.infoContentBody),o.xp6(16),o.Q6J("ngIf",e.showPwd),o.xp6(1),o.Q6J("ngIf",!e.showPwd),o.xp6(2),o.Q6J("ngIf",e.showPwd),o.xp6(1),o.Q6J("ngIf",!e.showPwd))},dependencies:[p.sg,p.O5,i.YG,i.Sm,i.W2,i.Gu,i.gu,i.Xz,i.pK,i.Ie,i.Q$,i.yW,i.wd,i.sr,i.j9,s.b6,s.ch,s.O_],styles:[".googlemaps[_ngcontent-%COMP%]{width:100%;height:250px}.input-group[_ngcontent-%COMP%]{background:#fff;border-radius:10px;border:2px solid #000;overflow:hidden;margin:15px}"]}),n})()}];let P=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[c.Bz.forChild(Z),c.Bz]}),n})(),y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[p.ez,d.u5,i.Pc,P,s.Y4]}),n})()}}]);