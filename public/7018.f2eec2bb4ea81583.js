"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7018],{7018:(C,g,i)=>{i.r(g),i.d(g,{AccountPageModule:()=>_});var a=i(6895),u=i(433),n=i(8008),d=i(5017),r=i(655),h=i(5819),t=i(4650),c=i(9846),f=i(3071);function A(e,s){if(1&e){const o=t.EpF();t.TgZ(0,"ion-item-sliding")(1,"ion-item",8)(2,"ion-thumbnail",2),t._UZ(3,"ion-img",9),t.qZA(),t.TgZ(4,"ion-label")(5,"h2")(6,"b"),t._uU(7),t.qZA()(),t.TgZ(8,"h3",10)(9,"b"),t._uU(10),t.ALo(11,"date"),t.qZA()()()(),t.TgZ(12,"ion-item-options",11)(13,"ion-item-option",12),t.NdJ("tap",function(){const p=t.CHM(o).$implicit,m=t.oxw();return t.KtG(m.accountDetail(p.id))}),t._UZ(14,"ion-icon",13),t.qZA(),t.TgZ(15,"ion-item-option",14),t.NdJ("tap",function(){const p=t.CHM(o).$implicit,m=t.oxw();return t.KtG(m.accountUpdate(p.id))}),t._UZ(16,"ion-icon",15),t.qZA()()()}if(2&e){const o=s.$implicit;t.xp6(3),t.s9C("src",o.avatar),t.xp6(4),t.Oqu(o.name),t.xp6(3),t.Oqu(t.xi3(11,3,o.created,"short"))}}const y=[{path:"",component:(()=>{class e{constructor(o,l,v,p,m,Z,U){this.router=o,this.cd=l,this.navCtrl=v,this.alertCtrl=p,this.popoverCtrl=m,this.uiService=Z,this.userService=U}ngOnInit(){this.loadUsers()}regresar(){this.navCtrl.navigateBack("/tabs/home")}menu(o){return(0,r.mG)(this,void 0,void 0,function*(){yield(yield this.popoverCtrl.create({mode:"md",event:o,backdropDismiss:!0,component:h.M})).present()})}loadUsers(){this.userService.getUsers().subscribe(o=>{console.log(o),this.usuarios=o,this.cd.detectChanges()})}accountDetail(o){this.navCtrl.navigateForward(`/account-detail/${o}`)}accountUpdate(o){this.navCtrl.navigateForward(`/account-update/${o}`)}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(d.F0),t.Y36(t.sBO),t.Y36(n.SH),t.Y36(n.Br),t.Y36(n.Dh),t.Y36(c.F),t.Y36(f.K))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-account"]],decls:11,vars:1,consts:[[1,"ion-no-border"],["color","primary"],["slot","start"],["fill","clear",3,"tap"],["md","arrow-back-sharp","slot","icon-only","color","light"],["src","../../../assets/images/logo_small.png",1,"logo-header"],[1,"ion-padding"],[4,"ngFor","ngForOf"],["button","","lines","none"],[3,"src"],[1,"ion-text-wrap"],["slot","end"],["color","primary",3,"tap"],["md","eye-sharp","slot","icon-only","color","light"],["color","tertiary",3,"tap"],["md","create-sharp","slot","icon-only","color","light"]],template:function(o,l){1&o&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2)(3,"ion-button",3),t.NdJ("tap",function(){return l.regresar()}),t._UZ(4,"ion-icon",4),t.qZA()(),t.TgZ(5,"ion-title"),t._UZ(6,"ion-img",5),t._uU(7," Account "),t.qZA()()(),t.TgZ(8,"ion-content",6)(9,"ion-list"),t.YNc(10,A,17,6,"ion-item-sliding",7),t.qZA()()),2&o&&(t.xp6(10),t.Q6J("ngForOf",l.usuarios))},dependencies:[a.sg,n.YG,n.Sm,n.W2,n.Gu,n.gu,n.Xz,n.Ie,n.u8,n.IK,n.td,n.Q$,n.q_,n.Bs,n.wd,n.sr,a.uU]}),e})()}];let P=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(y),d.Bz]}),e})(),_=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[a.ez,u.u5,n.Pc,P]}),e})()},9846:(C,g,i)=>{i.d(g,{F:()=>d});var a=i(655),u=i(4650),n=i(8008);let d=(()=>{class r{constructor(t,c){this.alertController=t,this.toastController=c}alertaInformativaLogin(t,c,f){return(0,a.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:t,subHeader:c,message:f,buttons:["OK"]})).present()})}alertaInformativa(t){return(0,a.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({message:t,buttons:["OK"]})).present()})}presentToast(t){return(0,a.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:t,duration:1500,position:"bottom",cssClass:"miToast"})).present()})}}return r.\u0275fac=function(t){return new(t||r)(u.LFG(n.Br),u.LFG(n.yF))},r.\u0275prov=u.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);