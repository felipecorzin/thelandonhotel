"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3162],{3162:(m,s,l)=>{l.r(s),l.d(s,{PlanDetailPageModule:()=>h});var g=l(6895),u=l(433),a=l(8008),r=l(5017),t=l(4650),p=l(374);const d=[{path:"",component:(()=>{class n{constructor(o,e,c){this.router=o,this.route=e,this.planService=c,this.plan={id:"",title:"",desc:"",date:"",time:"",img:""}}ngOnInit(){this.loadPlan(this.route.snapshot.params.id)}regresar(){this.router.navigate(["/tabs/plans"])}loadPlan(o){this.planService.getPlan(o).subscribe({next:e=>{this.plan=e,console.log(e)},error:e=>console.error(e)})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(r.F0),t.Y36(r.gz),t.Y36(p.D))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-plan-detail"]],decls:23,vars:5,consts:[[1,"ion-no-border"],["color","primary"],["slot","start"],["fill","clear",3,"tap"],["md","arrow-back-sharp","slot","icon-only","color","light"],[3,"src"],[1,"ion-text-center"]],template:function(o,e){1&o&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2)(3,"ion-button",3),t.NdJ("tap",function(){return e.regresar()}),t._UZ(4,"ion-icon",4),t.qZA()(),t.TgZ(5,"ion-title"),t._uU(6," PlanDetail "),t.qZA()()(),t.TgZ(7,"ion-content")(8,"ion-card")(9,"ion-card-header")(10,"ion-card-title"),t._uU(11),t.qZA()(),t.TgZ(12,"ion-card-content"),t._UZ(13,"img",5),t.TgZ(14,"h3")(15,"strong"),t._uU(16),t.qZA()(),t.TgZ(17,"h3")(18,"strong"),t._uU(19),t.qZA()(),t.TgZ(20,"p",6)(21,"strong"),t._uU(22),t.qZA()()()()()),2&o&&(t.xp6(11),t.hij(" ",e.plan.title," "),t.xp6(2),t.s9C("src",e.plan.img,t.LSH),t.xp6(3),t.Oqu(e.plan.date),t.xp6(3),t.Oqu(e.plan.time),t.xp6(3),t.Oqu(e.plan.desc))},dependencies:[a.YG,a.Sm,a.PM,a.FN,a.Zi,a.Dq,a.W2,a.Gu,a.gu,a.wd,a.sr],styles:["ion-card-title[_ngcontent-%COMP%]{font-size:1.5em;font-weight:700;--color: #000;text-align:center}img[_ngcontent-%COMP%]{width:100%;height:300px}"]}),n})()}];let P=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.Bz.forChild(d),r.Bz]}),n})(),h=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.ez,u.u5,a.Pc,P]}),n})()}}]);