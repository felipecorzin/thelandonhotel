"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6950],{6950:(v,h,i)=>{i.r(h),i.d(h,{AccountDetailPageModule:()=>y});var s=i(6895),g=i(433),a=i(8008),p=i(3304),u=i(4464),o=i(4650),r=i(9846),d=i(3071);let f=(()=>{class t{constructor(n,e){this.renderer=n,this.domCtrl=e}onContentScroll(n){const e=n.detail.scrollTop;e>0?(this.moveImage=e/1.6,this.scaleImage=1):(this.scaleImage=-e/200+1,this.moveImage=e/1.6),this.domCtrl.write(()=>{this.renderer.setStyle(this.imageEl,"webkitTransform","translate3d(0,"+this.moveImage+"px,0) scale("+this.scaleImage+","+this.scaleImage+")")})}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(o.Qsj),o.Y36(a.Cb))},t.\u0275dir=o.lG2({type:t,selectors:[["","appParallax",""]],hostBindings:function(n,e){1&n&&o.NdJ("ionScroll",function(m){return e.onContentScroll(m)})},inputs:{imageEl:["appParallax","imageEl"]}}),t})();const P=[{path:"",component:(()=>{class t{constructor(n,e,c,m,_,C){this.route=n,this.navCtrl=e,this.alertCtrl=c,this.uiService=m,this.userService=_,this.document=C,this.user={id:"",email:"",avatar:"",address:"",city:"",name:"",phone:"",lat:0,lng:0,age:0,gender:"",aboutme:""},this.showLocationDetail=!1}ngOnInit(){this.loadUser(this.route.snapshot.params.id);const n=(0,u.n$)("pwa")?44:56;this.document.documentElement.style.setProperty("--header-position",`calc(env(safe-area-inset-top) + ${n}px)`)}onScroll(n){this.showLocationDetail=n.detail.scrollTop>40}loadUser(n){this.userService.getUser(n).subscribe(e=>{this.user=e,console.log(e)})}regresar(){this.navCtrl.navigateBack("/account")}accountUpdate(n){this.navCtrl.navigateForward(`/account-update/${n}`)}accountLocation(){this.navCtrl.navigateForward("/account-location")}dasherize(n){return n.replace(/[A-Z]/g,function(e,c){return(0!==c?"-":"")+e.toLowerCase()})}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(p.gz),o.Y36(a.SH),o.Y36(a.Br),o.Y36(r.F),o.Y36(d.K),o.Y36(s.K0))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-account-detail"]],decls:55,vars:12,consts:[[1,"ion-no-border"],["slot","start"],["fill","solid","color","dark","shape","round",3,"tap"],["md","arrow-back-sharp","slot","icon-only","color","light"],["slot","end"],["md","pencil-sharp","slot","icon-only","color","light"],["scrollEvents","true",3,"fullscreen","appParallax","ionScroll"],[1,"header-image"],["img",""],[1,"main"],["size","3"],["fill","clear"],["md","call-sharp","slot","icon-only","color","dark"],["md","chatbox-sharp","slot","icon-only","color","dark"],["md","mail-sharp","slot","icon-only","color","danger"],["fill","clear",3,"tap"],["md","map-sharp","slot","icon-only","color","primary"],["lines","none"],["md","mail-sharp","slot","icon-only","color","primary"],["fill","clear","slot","start"],["md","call-sharp","slot","icon-only","color","primary"],[1,"ion-text-center"],["fill","clear","slot","end"],["md","logo-whatsapp","slot","icon-only","color","success"]],template:function(n,e){if(1&n&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-button",2),o.NdJ("tap",function(){return e.regresar()}),o._UZ(4,"ion-icon",3),o.qZA()(),o.TgZ(5,"ion-buttons",4)(6,"ion-button",2),o.NdJ("tap",function(){return e.accountUpdate(e.user.id)}),o._UZ(7,"ion-icon",5),o.qZA()()()(),o.TgZ(8,"ion-content",6),o.NdJ("ionScroll",function(m){return e.onScroll(m)}),o._UZ(9,"div",7,8),o.TgZ(11,"div",9)(12,"ion-row")(13,"ion-col",10)(14,"ion-button",11),o._UZ(15,"ion-icon",12),o.qZA()(),o.TgZ(16,"ion-col",10)(17,"ion-button",11),o._UZ(18,"ion-icon",13),o.qZA()(),o.TgZ(19,"ion-col",10)(20,"ion-button",11),o._UZ(21,"ion-icon",14),o.qZA()(),o.TgZ(22,"ion-col",10)(23,"ion-button",15),o.NdJ("tap",function(){return e.accountLocation()}),o._UZ(24,"ion-icon",16),o.qZA()()()(),o.TgZ(25,"ion-list")(26,"ion-list-header")(27,"ion-label")(28,"h2")(29,"b"),o._uU(30,"Name: "),o.qZA(),o._uU(31),o.qZA(),o.TgZ(32,"h3")(33,"b"),o._uU(34,"Email: "),o.qZA(),o._uU(35),o.qZA(),o.TgZ(36,"h3")(37,"b"),o._uU(38,"Created: "),o.qZA(),o._uU(39),o.ALo(40,"date"),o.qZA()()(),o.TgZ(41,"ion-item",17)(42,"ion-label")(43,"b"),o._uU(44),o.qZA()(),o.TgZ(45,"ion-button",11),o._UZ(46,"ion-icon",18),o.qZA()(),o.TgZ(47,"ion-item",17)(48,"ion-button",19),o._UZ(49,"ion-icon",20),o.qZA(),o.TgZ(50,"ion-label",21)(51,"b"),o._uU(52),o.qZA()(),o.TgZ(53,"ion-button",22),o._UZ(54,"ion-icon",23),o.qZA()()()()),2&n){const c=o.MAs(10);o.xp6(8),o.Q6J("fullscreen",!0)("appParallax",c),o.xp6(1),o.Udp("background-image","url("+e.user.avatar+")"),o.xp6(22),o.Oqu(e.user.name),o.xp6(4),o.Oqu(e.user.email),o.xp6(4),o.Oqu(o.xi3(40,9,e.user.created,"short")),o.xp6(5),o.Oqu(e.user.email),o.xp6(8),o.Oqu(e.user.phone)}},dependencies:[a.YG,a.Sm,a.wI,a.W2,a.Gu,a.gu,a.Ie,a.Q$,a.q_,a.yh,a.Nd,a.sr,f,s.uU],styles:["ion-toolbar[_ngcontent-%COMP%]{--background: transparent}ion-toolbar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:25px}ion-content[_ngcontent-%COMP%]{position:absolute;--background: #f1f1f1;--padding-bottom: 50px}.light-bg[_ngcontent-%COMP%]{background:#ffffff;z-index:10}.header-image[_ngcontent-%COMP%]{background-repeat:no-repeat;background-position:center;background-size:cover;height:50vh;will-change:transform}ion-row[_ngcontent-%COMP%]{position:relative;border-radius:5px;background:#ffffff;border:2px solid #000}ion-list-header[_ngcontent-%COMP%]{--background: #f1f1f1}ion-content.inactivo[_ngcontent-%COMP%]{opacity:.4;background-color:#fdf2d1}.main[_ngcontent-%COMP%]{z-index:10;background:linear-gradient(var(--custombg) 20%,var(--ion-color-light) 30%)}"]}),t})()}];let Z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[p.Bz.forChild(P),p.Bz]}),t})(),A=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[s.ez]}),t})(),y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[s.ez,g.u5,a.Pc,Z,A]}),t})()},9846:(v,h,i)=>{i.d(h,{F:()=>p});var s=i(655),g=i(4650),a=i(8008);let p=(()=>{class u{constructor(r,d){this.alertController=r,this.toastController=d}alertaInformativaLogin(r,d,f){return(0,s.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:r,subHeader:d,message:f,buttons:["OK"]})).present()})}alertaInformativa(r){return(0,s.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({message:r,buttons:["OK"]})).present()})}presentToast(r){return(0,s.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:r,duration:1500,position:"bottom",cssClass:"miToast"})).present()})}}return u.\u0275fac=function(r){return new(r||u)(g.LFG(a.Br),g.LFG(a.yF))},u.\u0275prov=g.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);