"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2470],{2470:(R,u,i)=>{i.r(u),i.d(u,{IntroPageModule:()=>I});var f=i(6895),v=i(433),e=i(8008),d=i(5017),s=i(655),g=i(65),m=i(6893),o=i(4650),p=i(849),h=i(7556);let C=(()=>{class t{constructor(n,a,l,c){this.storage=n,this.navCtrl=a,this.modalCtrl=l,this.authService=c}ngOnInit(){this.loadStorage()}continuarEmail(){return(0,s.mG)(this,void 0,void 0,function*(){yield g.u.set({key:m.o,value:"true"}),this.navCtrl.navigateForward("/login",{replaceUrl:!0}),this.modalCtrl.dismiss()})}loadStorage(){return(0,s.mG)(this,void 0,void 0,function*(){yield this.storage.create()})}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(p.K),o.Y36(e.SH),o.Y36(e.IN),o.Y36(h.e))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-modal-login"]],decls:14,vars:0,consts:[[1,"ion-no-border"],["expand","block","shape","round","color","primary",1,"miBotonRegister"],["md","logo-google","slot","start","color","light"],["expand","block","shape","round","color","secondary",1,"miBotonRegister"],["md","logo-facebook","slot","start","color","light"],["expand","block","shape","round","color","tertiary",1,"miBotonRegister",3,"tap"],["md","mail-sharp","slot","start","color","light"]],template:function(n,a){1&n&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),o._uU(3," Iniciar Sesi\xf3n "),o.qZA()()(),o.TgZ(4,"ion-content")(5,"ion-button",1),o._UZ(6,"ion-icon",2),o._uU(7," Continuar con Google "),o.qZA(),o.TgZ(8,"ion-button",3),o._UZ(9,"ion-icon",4),o._uU(10," Continuar con Facebook "),o.qZA(),o.TgZ(11,"ion-button",5),o.NdJ("tap",function(){return a.continuarEmail()}),o._UZ(12,"ion-icon",6),o._uU(13," Continuar con E-Mail "),o.qZA()())},dependencies:[e.YG,e.W2,e.Gu,e.gu,e.wd,e.sr],styles:["ion-title[_ngcontent-%COMP%]{font-size:1.2em;font-weight:700;text-align:center}.miBotonRegister[_ngcontent-%COMP%]{font-weight:700;text-transform:none;margin-bottom:20px}"]}),t})(),y=(()=>{class t{constructor(n,a,l,c,P){this.router=n,this.storage=a,this.navCtrl=l,this.modalCtrl=c,this.authService=P}ngOnInit(){this.loadStorage()}continuarEmail(){return(0,s.mG)(this,void 0,void 0,function*(){yield g.u.set({key:m.o,value:"true"}),this.navCtrl.navigateForward("/register",{replaceUrl:!0}),this.modalCtrl.dismiss()})}loadStorage(){return(0,s.mG)(this,void 0,void 0,function*(){yield this.storage.create()})}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(d.F0),o.Y36(p.K),o.Y36(e.SH),o.Y36(e.IN),o.Y36(h.e))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-modal-register"]],decls:14,vars:0,consts:[[1,"ion-no-border"],["expand","block","shape","round","color","primary",1,"miBotonRegister"],["md","logo-google","slot","start","color","light"],["expand","block","shape","round","color","secondary",1,"miBotonRegister"],["md","logo-facebook","slot","start","color","light"],["expand","block","shape","round","color","tertiary",1,"miBotonRegister",3,"tap"],["md","mail-sharp","slot","start","color","light"]],template:function(n,a){1&n&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),o._uU(3," Registrate "),o.qZA()()(),o.TgZ(4,"ion-content")(5,"ion-button",1),o._UZ(6,"ion-icon",2),o._uU(7," Continuar con Google "),o.qZA(),o.TgZ(8,"ion-button",3),o._UZ(9,"ion-icon",4),o._uU(10," Continuar con Facebook "),o.qZA(),o.TgZ(11,"ion-button",5),o.NdJ("tap",function(){return a.continuarEmail()}),o._UZ(12,"ion-icon",6),o._uU(13," Continuar con E-Mail "),o.qZA()())},dependencies:[e.YG,e.W2,e.Gu,e.gu,e.wd,e.sr],styles:["ion-title[_ngcontent-%COMP%]{font-size:1.2em;font-weight:700;text-align:center}.miBotonRegister[_ngcontent-%COMP%]{font-weight:700;text-transform:none;margin-bottom:20px}"]}),t})();const b=[{path:"",component:(()=>{class t{constructor(n){this.modalCtrl=n}ngOnInit(){}modalLogin(){return(0,s.mG)(this,void 0,void 0,function*(){yield(yield this.modalCtrl.create({mode:"md",breakpoints:[0,.5,.8],initialBreakpoint:.5,component:C})).present()})}modalRegister(){return(0,s.mG)(this,void 0,void 0,function*(){yield(yield this.modalCtrl.create({mode:"md",breakpoints:[0,.5,.8],initialBreakpoint:.5,component:y})).present()})}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(e.IN))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-intro"]],decls:7,vars:0,consts:[[1,"ion-no-border"],["color","light"],["expand","block","shape","round","color","primary",3,"tap"],["expand","block","shape","round","color","secondary",3,"tap"]],template:function(n,a){1&n&&(o._UZ(0,"ion-content"),o.TgZ(1,"ion-footer",0)(2,"ion-toolbar",1)(3,"ion-button",2),o.NdJ("tap",function(){return a.modalRegister()}),o._uU(4," Create una cuenta "),o.qZA(),o.TgZ(5,"ion-button",3),o.NdJ("tap",function(){return a.modalLogin()}),o._uU(6," Ya tienes una cuenta?? "),o.qZA()()())},dependencies:[e.YG,e.W2,e.fr,e.sr],styles:["ion-content[_ngcontent-%COMP%]{--padding-top: 30%;--padding-start: 10%;--padding-end: 10%;--background: url(fondo_login.f1451885f0016a74.jpg) 0 0/100% 100% no-repeat}ion-button[_ngcontent-%COMP%]{font-size:1.2em;font-weight:700;--padding-top: 10px;--padding-bottom: 10px;text-transform:none!important;margin-top:20px;margin-bottom:20px}"]}),t})()}];let Z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[d.Bz.forChild(b),d.Bz]}),t})();var M=i(5642);let I=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[f.ez,v.u5,e.Pc,Z,M.K]}),t})()}}]);