"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7310],{7310:(v,l,e)=>{e.r(l),e.d(l,{CorzinImgPageModule:()=>I});var p=e(6895),u=e(433),r=e(8008),c=e(5017),m=e(8879),o=e(4650),d=e(759),g=e(9485);const z=["swiper"];function f(i,s){if(1&i&&(o.TgZ(0,"div",12),o._UZ(1,"img",13),o.qZA()),2&i){const n=o.oxw();o.xp6(1),o.s9C("src",n.corzin.imgWorks,o.LSH)}}m.ZP.use([m.LG]);const h=[{path:"",component:(()=>{class i{constructor(n,t,a){this.route=n,this.navCtrl=t,this.corzinService=a,this.corzin={title:"",text:"",imgWorks:""},this.config={zoom:{maxRatio:10,minRatio:.2}}}ngOnInit(){this.loadCorzinImg(this.route.snapshot.params.id)}loadCorzinImg(n){this.route.params.subscribe(t=>{console.log(["id"]),this.corzin=this.corzinService.getCorzin(n)})}regresar(){this.navCtrl.navigateBack("corzin")}ngAfterContentChecked(){this.swiper&&this.swiper.updateSwiper({})}zoom(n){const t=this.swiper.swiperRef.zoom;n?t.in():t.out()}}return i.\u0275fac=function(n){return new(n||i)(o.Y36(c.gz),o.Y36(r.SH),o.Y36(d.w))},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-corzin-img"]],viewQuery:function(n,t){if(1&n&&o.Gf(z,5),2&n){let a;o.iGM(a=o.CRH())&&(t.swiper=a.first)}},decls:24,vars:2,consts:[["color","dark",3,"tap"],["md","arrow-back-sharp","color","light"],["color","light"],[1,"fondoImgUser"],[3,"config"],["swiper",""],["swiperSlide",""],["size","4",1,"ion-text-center"],["fill","clear","color","light",1,"miBoton",3,"tap"],["md","remove-sharp","slot","start"],["md","close-sharp","slot","start"],["md","add-sharp","slot","start"],[1,"swiper-zoom-container"],[3,"src"]],template:function(n,t){1&n&&(o.TgZ(0,"div")(1,"div")(2,"ion-chip",0),o.NdJ("tap",function(){return t.regresar()}),o._UZ(3,"ion-icon",1),o.TgZ(4,"ion-label",2),o._uU(5),o.qZA()()(),o.TgZ(6,"div",3)(7,"swiper",4,5),o.YNc(9,f,2,1,"ng-template",6),o.qZA()()(),o.TgZ(10,"ion-footer")(11,"ion-row")(12,"ion-col",7)(13,"ion-button",8),o.NdJ("tap",function(){return t.zoom(!1)}),o._UZ(14,"ion-icon",9),o._uU(15," Out "),o.qZA()(),o.TgZ(16,"ion-col",7)(17,"ion-button",8),o.NdJ("tap",function(){return t.regresar()}),o._UZ(18,"ion-icon",10),o._uU(19," Close "),o.qZA()(),o.TgZ(20,"ion-col",7)(21,"ion-button",8),o.NdJ("tap",function(){return t.zoom(!0)}),o._UZ(22,"ion-icon",11),o._uU(23," In "),o.qZA()()()()),2&n&&(o.xp6(5),o.hij(" ",t.corzin.title," "),o.xp6(2),o.Q6J("config",t.config))},dependencies:[r.YG,r.hM,r.wI,r.fr,r.gu,r.Q$,r.Nd,g.nF,g.YC],styles:[".swiper{width:100%;height:400px}.swiper-slide{display:flex;flex-direction:column;align-items:center;justify-content:center}\n"],encapsulation:2}),i})()}];let C=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[c.Bz.forChild(h),c.Bz]}),i})(),I=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[p.ez,u.u5,r.Pc,C,g.kz]}),i})()}}]);