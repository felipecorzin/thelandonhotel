"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1546],{1546:(A,_,r)=>{r.r(_),r.d(_,{AccountUpdatePageModule:()=>C});var d=r(6895),g=r(433),o=r(8008),p=r(3304),s=r(655),h=r(6388),e=r(4650),c=r(9846),m=r(3071);function M(a,u){if(1&a){const t=e.EpF();e.TgZ(0,"div",20),e.NdJ("tap",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.selectPhoto())}),e.qZA()}}function U(a,u){if(1&a){const t=e.EpF();e.TgZ(0,"ion-img",21)(1,"ion-input",10),e.NdJ("ngModelChange",function(l){e.CHM(t);const i=e.oxw();return e.KtG(i.user.avatar=l)}),e.qZA()()}if(2&a){const t=e.oxw();e.Q6J("src",t.user.avatar),e.xp6(1),e.Q6J("ngModel",t.user.avatar)}}const v=[{path:"",component:(()=>{class a{constructor(t,n,l,i){this.route=t,this.navCtrl=n,this.uiService=l,this.userService=i,this.user={id:"",email:"",avatar:"",address:"",city:"",name:"",phone:"",lat:0,lng:0,age:0,gender:"",aboutme:""},this.shouldAcive=!0,this.shouldGeolocation=!1}ngOnInit(){this.loadUser(this.route.snapshot.params.id)}regresar(){this.navCtrl.navigateBack("/account")}loadUser(t){this.userService.getUser(t).subscribe(n=>{this.user=n,console.log(n)})}selectPhoto(){return(0,s.mG)(this,void 0,void 0,function*(){const t=yield h.V1.getPhoto({quality:75,width:400,height:400,allowEditing:!1,source:h.oK.Prompt,resultType:h.dk.DataUrl});this.isSelected=!0,this.user.avatar=t.dataUrl})}getLocation(){this.shouldGeolocation&&navigator.geolocation.getCurrentPosition(t=>{this.user.lat=t.coords.latitude,this.user.lng=t.coords.longitude,console.log(this.user.lat,this.user.lng)})}accountUpdate(){this.userService.updateUser(this.user.id,this.user).subscribe(t=>{console.log(t),this.regresar(),this.uiService.presentToast("Updated user")},t=>{console.log(t)})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(p.gz),e.Y36(o.SH),e.Y36(c.F),e.Y36(m.K))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-account-update"]],decls:56,vars:11,consts:[[1,"ion-no-border"],["color","primary"],["slot","start"],["fill","clear",3,"tap"],["md","arrow-back-sharp","slot","icon-only","color","light"],["src","../../../assets/images/logo_small.png",1,"logo-header"],["id","img",3,"tap",4,"ngIf"],["id","avatar",3,"src",4,"ngIf"],["lines","none"],["position","floating"],["type","text",3,"ngModel","ngModelChange"],["type","tel",3,"ngModel","ngModelChange"],["type","number",3,"ngModel","ngModelChange"],["placeholder","Select gender",3,"ngModel","ngModelChange"],["value","Women"],["value","Man"],[3,"ngModel","ngModelChange","ionChange"],[3,"autoGrow","ngModel","ngModelChange"],["expand","block","shape","round",1,"miBoton",3,"tap"],["md","create-sharp","slot","end","color","light"],["id","img",3,"tap"],["id","avatar",3,"src"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2)(3,"ion-button",3),e.NdJ("tap",function(){return n.regresar()}),e._UZ(4,"ion-icon",4),e.qZA()(),e.TgZ(5,"ion-title"),e._UZ(6,"img",5),e._uU(7," AccountUpdate "),e.qZA()()(),e.TgZ(8,"ion-content")(9,"ion-list"),e.YNc(10,M,1,0,"div",6),e.YNc(11,U,2,2,"ion-img",7),e.TgZ(12,"ion-item",8)(13,"ion-label",9)(14,"strong"),e._uU(15,"Name"),e.qZA()(),e.TgZ(16,"ion-input",10),e.NdJ("ngModelChange",function(i){return n.user.name=i}),e.qZA()(),e.TgZ(17,"ion-item",8)(18,"ion-label",9)(19,"strong"),e._uU(20,"Phone"),e.qZA()(),e.TgZ(21,"ion-input",11),e.NdJ("ngModelChange",function(i){return n.user.phone=i}),e.qZA()(),e.TgZ(22,"ion-item",8)(23,"ion-label",9)(24,"strong"),e._uU(25,"Address"),e.qZA()(),e.TgZ(26,"ion-input",10),e.NdJ("ngModelChange",function(i){return n.user.address=i}),e.qZA()(),e.TgZ(27,"ion-item",8)(28,"ion-label",9)(29,"strong"),e._uU(30,"City"),e.qZA()(),e.TgZ(31,"ion-input",10),e.NdJ("ngModelChange",function(i){return n.user.city=i}),e.qZA()(),e.TgZ(32,"ion-item",8)(33,"ion-label",9)(34,"strong"),e._uU(35,"Age"),e.qZA()(),e.TgZ(36,"ion-input",12),e.NdJ("ngModelChange",function(i){return n.user.age=i}),e.qZA()(),e.TgZ(37,"ion-item",8)(38,"ion-select",13),e.NdJ("ngModelChange",function(i){return n.user.gender=i}),e.TgZ(39,"ion-select-option",14),e._uU(40,"Women"),e.qZA(),e.TgZ(41,"ion-select-option",15),e._uU(42,"Man"),e.qZA()()(),e.TgZ(43,"ion-item",8)(44,"ion-label")(45,"b"),e._uU(46,"Location User"),e.qZA()(),e.TgZ(47,"ion-toggle",16),e.NdJ("ngModelChange",function(i){return n.shouldGeolocation=i})("ionChange",function(){return n.getLocation()}),e.qZA()(),e.TgZ(48,"ion-item",8)(49,"ion-label",9)(50,"strong"),e._uU(51,"About Me"),e.qZA()(),e.TgZ(52,"ion-textarea",17),e.NdJ("ngModelChange",function(i){return n.user.aboutme=i}),e.qZA()()(),e.TgZ(53,"ion-button",18),e.NdJ("tap",function(){return n.accountUpdate()}),e._uU(54," AccountUpdate "),e._UZ(55,"ion-icon",19),e.qZA()()),2&t&&(e.xp6(10),e.Q6J("ngIf",!n.isSelected),e.xp6(1),e.Q6J("ngIf",n.isSelected),e.xp6(5),e.Q6J("ngModel",n.user.name),e.xp6(5),e.Q6J("ngModel",n.user.phone),e.xp6(5),e.Q6J("ngModel",n.user.address),e.xp6(5),e.Q6J("ngModel",n.user.city),e.xp6(5),e.Q6J("ngModel",n.user.age),e.xp6(2),e.Q6J("ngModel",n.user.gender),e.xp6(9),e.Q6J("ngModel",n.shouldGeolocation),e.xp6(5),e.Q6J("autoGrow",!0)("ngModel",n.user.aboutme))},dependencies:[d.O5,g.JJ,g.On,o.YG,o.Sm,o.W2,o.Gu,o.gu,o.Xz,o.pK,o.Ie,o.Q$,o.q_,o.t9,o.n0,o.g2,o.wd,o.ho,o.sr,o.w,o.as,o.QI,o.j9],styles:["#img[_ngcontent-%COMP%]{background:url(avatar.a873f6944a1bc18a.png);width:100px;height:100px;margin:0 auto}#avatar[_ngcontent-%COMP%]{width:100px;height:100px;margin:0 auto}ion-select[_ngcontent-%COMP%]{--placeholder-color: #000;--placeholder-opacity: 1;width:100%;justify-content:center}"]}),a})()}];let f=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[p.Bz.forChild(v),p.Bz]}),a})(),C=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[d.ez,g.u5,o.Pc,f]}),a})()},9846:(A,_,r)=>{r.d(_,{F:()=>p});var d=r(655),g=r(4650),o=r(8008);let p=(()=>{class s{constructor(e,c){this.alertController=e,this.toastController=c}alertaInformativaLogin(e,c,m){return(0,d.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:e,subHeader:c,message:m,buttons:["OK"]})).present()})}alertaInformativa(e){return(0,d.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({message:e,buttons:["OK"]})).present()})}presentToast(e){return(0,d.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:e,duration:1500,position:"bottom",cssClass:"miToast"})).present()})}}return s.\u0275fac=function(e){return new(e||s)(g.LFG(o.Br),g.LFG(o.yF))},s.\u0275prov=g.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);