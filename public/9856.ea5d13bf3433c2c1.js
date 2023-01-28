"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9856],{9856:(pe,Z,p)=>{p.r(Z),p.d(Z,{CorzinMapaPageModule:()=>de});var R=p(6895),Y=p(433),_=p(8008),F=p(5017),n=p(4650),h=p(1135),j=p(9751),m=p(7579),v=p(9841),W=p(3900),f=p(5698),z=p(4004),g=p(2722);const G=["*"];class u{_clearListeners(){for(const a of this._listeners)a.remove();this._listeners=[]}constructor(a){this._ngZone=a,this._pending=[],this._listeners=[],this._targetStream=new h.X(void 0)}getLazyEmitter(a){return this._targetStream.pipe((0,W.w)(e=>{const t=new j.y(s=>{if(!e)return void this._pending.push({observable:t,observer:s});const r=e.addListener(a,c=>{this._ngZone.run(()=>s.next(c))});return this._listeners.push(r),()=>r.remove()});return t}))}setTarget(a){const e=this._targetStream.value;a!==e&&(e&&(this._clearListeners(),this._pending=[]),this._targetStream.next(a),this._pending.forEach(t=>t.observable.subscribe(t.observer)),this._pending=[])}destroy(){this._clearListeners(),this._pending=[],this._targetStream.complete()}}const x={center:{lat:37.421995,lng:-122.084092},zoom:17,mapTypeId:"roadmap"},B="500px",H="500px";let d=(()=>{class i{set center(e){this._center=e}set zoom(e){this._zoom=e}set options(e){this._options=e||x}constructor(e,t,s){if(this._elementRef=e,this._ngZone=t,this._eventManager=new u(this._ngZone),this.height=B,this.width=H,this._options=x,this.mapInitialized=new n.vpe,this.authFailure=new n.vpe,this.boundsChanged=this._eventManager.getLazyEmitter("bounds_changed"),this.centerChanged=this._eventManager.getLazyEmitter("center_changed"),this.mapClick=this._eventManager.getLazyEmitter("click"),this.mapDblclick=this._eventManager.getLazyEmitter("dblclick"),this.mapDrag=this._eventManager.getLazyEmitter("drag"),this.mapDragend=this._eventManager.getLazyEmitter("dragend"),this.mapDragstart=this._eventManager.getLazyEmitter("dragstart"),this.headingChanged=this._eventManager.getLazyEmitter("heading_changed"),this.idle=this._eventManager.getLazyEmitter("idle"),this.maptypeidChanged=this._eventManager.getLazyEmitter("maptypeid_changed"),this.mapMousemove=this._eventManager.getLazyEmitter("mousemove"),this.mapMouseout=this._eventManager.getLazyEmitter("mouseout"),this.mapMouseover=this._eventManager.getLazyEmitter("mouseover"),this.projectionChanged=this._eventManager.getLazyEmitter("projection_changed"),this.mapRightclick=this._eventManager.getLazyEmitter("rightclick"),this.tilesloaded=this._eventManager.getLazyEmitter("tilesloaded"),this.tiltChanged=this._eventManager.getLazyEmitter("tilt_changed"),this.zoomChanged=this._eventManager.getLazyEmitter("zoom_changed"),this._isBrowser=(0,R.NF)(s),this._isBrowser){const r=window;this._existingAuthFailureCallback=r.gm_authFailure,r.gm_authFailure=()=>{this._existingAuthFailureCallback&&this._existingAuthFailureCallback(),this.authFailure.emit()}}}ngOnChanges(e){(e.height||e.width)&&this._setSize();const t=this.googleMap;t&&(e.options&&t.setOptions(this._combineOptions()),e.center&&this._center&&t.setCenter(this._center),e.zoom&&null!=this._zoom&&t.setZoom(this._zoom),e.mapTypeId&&this.mapTypeId&&t.setMapTypeId(this.mapTypeId))}ngOnInit(){this._isBrowser&&(this._mapEl=this._elementRef.nativeElement.querySelector(".map-container"),this._setSize(),this._ngZone.runOutsideAngular(()=>{this.googleMap=new google.maps.Map(this._mapEl,this._combineOptions())}),this._eventManager.setTarget(this.googleMap),this.mapInitialized.emit(this.googleMap))}ngOnDestroy(){this._eventManager.destroy(),this._isBrowser&&(window.gm_authFailure=this._existingAuthFailureCallback)}fitBounds(e,t){this._assertInitialized(),this.googleMap.fitBounds(e,t)}panBy(e,t){this._assertInitialized(),this.googleMap.panBy(e,t)}panTo(e){this._assertInitialized(),this.googleMap.panTo(e)}panToBounds(e,t){this._assertInitialized(),this.googleMap.panToBounds(e,t)}getBounds(){return this._assertInitialized(),this.googleMap.getBounds()||null}getCenter(){return this._assertInitialized(),this.googleMap.getCenter()}getClickableIcons(){return this._assertInitialized(),this.googleMap.getClickableIcons()}getHeading(){return this._assertInitialized(),this.googleMap.getHeading()}getMapTypeId(){return this._assertInitialized(),this.googleMap.getMapTypeId()}getProjection(){return this._assertInitialized(),this.googleMap.getProjection()||null}getStreetView(){return this._assertInitialized(),this.googleMap.getStreetView()}getTilt(){return this._assertInitialized(),this.googleMap.getTilt()}getZoom(){return this._assertInitialized(),this.googleMap.getZoom()}get controls(){return this._assertInitialized(),this.googleMap.controls}get data(){return this._assertInitialized(),this.googleMap.data}get mapTypes(){return this._assertInitialized(),this.googleMap.mapTypes}get overlayMapTypes(){return this._assertInitialized(),this.googleMap.overlayMapTypes}_setSize(){if(this._mapEl){const e=this._mapEl.style;e.height=null===this.height?"":U(this.height)||B,e.width=null===this.width?"":U(this.width)||H}}_combineOptions(){var e,t;const s=this._options||{};return{...s,center:this._center||s.center||x.center,zoom:null!==(e=null!==(t=this._zoom)&&void 0!==t?t:s.zoom)&&void 0!==e?e:x.zoom,mapTypeId:this.mapTypeId||s.mapTypeId||x.mapTypeId}}_assertInitialized(){}}return i.\u0275fac=function(e){return new(e||i)(n.Y36(n.SBq),n.Y36(n.R0b),n.Y36(n.Lbi))},i.\u0275cmp=n.Xpm({type:i,selectors:[["google-map"]],inputs:{height:"height",width:"width",mapTypeId:"mapTypeId",center:"center",zoom:"zoom",options:"options"},outputs:{mapInitialized:"mapInitialized",authFailure:"authFailure",boundsChanged:"boundsChanged",centerChanged:"centerChanged",mapClick:"mapClick",mapDblclick:"mapDblclick",mapDrag:"mapDrag",mapDragend:"mapDragend",mapDragstart:"mapDragstart",headingChanged:"headingChanged",idle:"idle",maptypeidChanged:"maptypeidChanged",mapMousemove:"mapMousemove",mapMouseout:"mapMouseout",mapMouseover:"mapMouseover",projectionChanged:"projectionChanged",mapRightclick:"mapRightclick",tilesloaded:"tilesloaded",tiltChanged:"tiltChanged",zoomChanged:"zoomChanged"},exportAs:["googleMap"],features:[n.TTD],ngContentSelectors:G,decls:2,vars:0,consts:[[1,"map-container"]],template:function(e,t){1&e&&(n.F$t(),n._UZ(0,"div",0),n.Hsn(1))},encapsulation:2,changeDetection:0}),i})();const X=/([A-Za-z%]+)$/;function U(i){return null==i?"":X.test(i)?i:`${i}px`}let T=(()=>{class i{set options(e){this._options.next(e||{})}set position(e){this._position.next(e)}constructor(e,t,s){this._googleMap=e,this._elementRef=t,this._ngZone=s,this._eventManager=new u(this._ngZone),this._options=new h.X({}),this._position=new h.X(void 0),this._destroy=new m.x,this.closeclick=this._eventManager.getLazyEmitter("closeclick"),this.contentChanged=this._eventManager.getLazyEmitter("content_changed"),this.domready=this._eventManager.getLazyEmitter("domready"),this.positionChanged=this._eventManager.getLazyEmitter("position_changed"),this.zindexChanged=this._eventManager.getLazyEmitter("zindex_changed")}ngOnInit(){this._googleMap._isBrowser&&(this._combineOptions().pipe((0,f.q)(1)).subscribe(t=>{this._ngZone.runOutsideAngular(()=>{this.infoWindow=new google.maps.InfoWindow(t)}),this._eventManager.setTarget(this.infoWindow)}),this._watchForOptionsChanges(),this._watchForPositionChanges())}ngOnDestroy(){this._eventManager.destroy(),this._destroy.next(),this._destroy.complete(),this.infoWindow&&this.close()}close(){this._assertInitialized(),this.infoWindow.close()}getContent(){return this._assertInitialized(),this.infoWindow.getContent()||null}getPosition(){return this._assertInitialized(),this.infoWindow.getPosition()||null}getZIndex(){return this._assertInitialized(),this.infoWindow.getZIndex()}open(e,t){this._assertInitialized();const s=e?e.getAnchor():void 0;(this.infoWindow.get("anchor")!==s||!s)&&(this._elementRef.nativeElement.style.display="",this.infoWindow.open({map:this._googleMap.googleMap,anchor:s,shouldFocus:t}))}_combineOptions(){return(0,v.a)([this._options,this._position]).pipe((0,z.U)(([e,t])=>({...e,position:t||e.position,content:this._elementRef.nativeElement})))}_watchForOptionsChanges(){this._options.pipe((0,g.R)(this._destroy)).subscribe(e=>{this._assertInitialized(),this.infoWindow.setOptions(e)})}_watchForPositionChanges(){this._position.pipe((0,g.R)(this._destroy)).subscribe(e=>{e&&(this._assertInitialized(),this.infoWindow.setPosition(e))})}_assertInitialized(){}}return i.\u0275fac=function(e){return new(e||i)(n.Y36(d),n.Y36(n.SBq),n.Y36(n.R0b))},i.\u0275dir=n.lG2({type:i,selectors:[["map-info-window"]],hostAttrs:[2,"display","none"],inputs:{options:"options",position:"position"},outputs:{closeclick:"closeclick",contentChanged:"contentChanged",domready:"domready",positionChanged:"positionChanged",zindexChanged:"zindexChanged"},exportAs:["mapInfoWindow"]}),i})();const K={position:{lat:37.421995,lng:-122.084092}};let A=(()=>{class i{set title(e){this._title=e}set position(e){this._position=e}set label(e){this._label=e}set clickable(e){this._clickable=e}set options(e){this._options=e}set icon(e){this._icon=e}set visible(e){this._visible=e}constructor(e,t){this._googleMap=e,this._ngZone=t,this._eventManager=new u(this._ngZone),this.animationChanged=this._eventManager.getLazyEmitter("animation_changed"),this.mapClick=this._eventManager.getLazyEmitter("click"),this.clickableChanged=this._eventManager.getLazyEmitter("clickable_changed"),this.cursorChanged=this._eventManager.getLazyEmitter("cursor_changed"),this.mapDblclick=this._eventManager.getLazyEmitter("dblclick"),this.mapDrag=this._eventManager.getLazyEmitter("drag"),this.mapDragend=this._eventManager.getLazyEmitter("dragend"),this.draggableChanged=this._eventManager.getLazyEmitter("draggable_changed"),this.mapDragstart=this._eventManager.getLazyEmitter("dragstart"),this.flatChanged=this._eventManager.getLazyEmitter("flat_changed"),this.iconChanged=this._eventManager.getLazyEmitter("icon_changed"),this.mapMousedown=this._eventManager.getLazyEmitter("mousedown"),this.mapMouseout=this._eventManager.getLazyEmitter("mouseout"),this.mapMouseover=this._eventManager.getLazyEmitter("mouseover"),this.mapMouseup=this._eventManager.getLazyEmitter("mouseup"),this.positionChanged=this._eventManager.getLazyEmitter("position_changed"),this.mapRightclick=this._eventManager.getLazyEmitter("rightclick"),this.shapeChanged=this._eventManager.getLazyEmitter("shape_changed"),this.titleChanged=this._eventManager.getLazyEmitter("title_changed"),this.visibleChanged=this._eventManager.getLazyEmitter("visible_changed"),this.zindexChanged=this._eventManager.getLazyEmitter("zindex_changed")}ngOnInit(){this._googleMap._isBrowser&&(this._ngZone.runOutsideAngular(()=>{this.marker=new google.maps.Marker(this._combineOptions())}),this._assertInitialized(),this.marker.setMap(this._googleMap.googleMap),this._eventManager.setTarget(this.marker))}ngOnChanges(e){const{marker:t,_title:s,_position:r,_label:c,_clickable:l,_icon:M,_visible:y}=this;t&&(e.options&&t.setOptions(this._combineOptions()),e.title&&void 0!==s&&t.setTitle(s),e.position&&r&&t.setPosition(r),e.label&&void 0!==c&&t.setLabel(c),e.clickable&&void 0!==l&&t.setClickable(l),e.icon&&M&&t.setIcon(M),e.visible&&void 0!==y&&t.setVisible(y))}ngOnDestroy(){this._eventManager.destroy(),this.marker&&this.marker.setMap(null)}getAnimation(){return this._assertInitialized(),this.marker.getAnimation()||null}getClickable(){return this._assertInitialized(),this.marker.getClickable()}getCursor(){return this._assertInitialized(),this.marker.getCursor()||null}getDraggable(){return this._assertInitialized(),!!this.marker.getDraggable()}getIcon(){return this._assertInitialized(),this.marker.getIcon()||null}getLabel(){return this._assertInitialized(),this.marker.getLabel()||null}getOpacity(){return this._assertInitialized(),this.marker.getOpacity()||null}getPosition(){return this._assertInitialized(),this.marker.getPosition()||null}getShape(){return this._assertInitialized(),this.marker.getShape()||null}getTitle(){return this._assertInitialized(),this.marker.getTitle()||null}getVisible(){return this._assertInitialized(),this.marker.getVisible()}getZIndex(){return this._assertInitialized(),this.marker.getZIndex()||null}getAnchor(){return this._assertInitialized(),this.marker}_combineOptions(){var e,t;const s=this._options||K;return{...s,title:this._title||s.title,position:this._position||s.position,label:this._label||s.label,clickable:null!==(e=this._clickable)&&void 0!==e?e:s.clickable,map:this._googleMap.googleMap,icon:this._icon||s.icon,visible:null!==(t=this._visible)&&void 0!==t?t:s.visible}}_assertInitialized(){}}return i.\u0275fac=function(e){return new(e||i)(n.Y36(d),n.Y36(n.R0b))},i.\u0275dir=n.lG2({type:i,selectors:[["map-marker"]],inputs:{title:"title",position:"position",label:"label",clickable:"clickable",options:"options",icon:"icon",visible:"visible"},outputs:{animationChanged:"animationChanged",mapClick:"mapClick",clickableChanged:"clickableChanged",cursorChanged:"cursorChanged",mapDblclick:"mapDblclick",mapDrag:"mapDrag",mapDragend:"mapDragend",draggableChanged:"draggableChanged",mapDragstart:"mapDragstart",flatChanged:"flatChanged",iconChanged:"iconChanged",mapMousedown:"mapMousedown",mapMouseout:"mapMouseout",mapMouseover:"mapMouseover",mapMouseup:"mapMouseup",positionChanged:"positionChanged",mapRightclick:"mapRightclick",shapeChanged:"shapeChanged",titleChanged:"titleChanged",visibleChanged:"visibleChanged",zindexChanged:"zindexChanged"},exportAs:["mapMarker"],features:[n.TTD]}),i})(),le=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({}),i})();function he(i,a){if(1&i){const e=n.EpF();n.TgZ(0,"map-marker",7,8),n.NdJ("mapClick",function(){const r=n.CHM(e).$implicit,c=n.MAs(1),l=n.oxw();return n.KtG(l.openInfo(c,r.info,r.infoBody))}),n.qZA()}if(2&i){const e=a.$implicit;n.Q6J("position",e.position)("icon",e.icon)("title",e.title)("options",e.options)}}const ge=[{path:"",component:(()=>{class i{constructor(e){this.navCtrl=e,this.markersCorzin=[{id:0,title:"Felipe El Corz\xedn",position:{lat:41.456702968223546,lng:2.2172632272216926},icon:"assets/corzin/marcador-corzin.png",info:"Felipe El Corz\xedn",infoBody:"Consultor Web Mobile",options:{animation:google.maps.Animation.BOUNCE}}],this.options={center:{lat:41.456702968223546,lng:2.2172632272216926},zoom:16,mapTypeId:"roadmap"},this.markers=[],this.infoContentHeader="",this.infoContentBody=""}ngOnInit(){}addMarker(){this.markers=this.markersCorzin}openInfo(e,t,s){this.infoContentHeader=t,this.infoContentBody=s,this.info.open(e)}}return i.\u0275fac=function(e){return new(e||i)(n.Y36(_.SH))},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-corzin-mapa"]],viewQuery:function(e,t){if(1&e&&(n.Gf(d,5),n.Gf(T,5)),2&e){let s;n.iGM(s=n.CRH())&&(t.map=s.first),n.iGM(s=n.CRH())&&(t.info=s.first)}},decls:19,vars:4,consts:[["color","primary"],["slot","start"],["src","../../../assets/corzin/logo_small.png","alt","logo",1,"logo-header"],[1,"ion-text-center"],["width","100%","height","100%","display","block",3,"options","mapClick"],[3,"position","icon","title","options","mapClick",4,"ngFor","ngForOf"],[1,"ion-text-wrap"],[3,"position","icon","title","options","mapClick"],["content","mapMarker"]],template:function(e,t){1&e&&(n.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),n._UZ(3,"ion-back-button"),n.qZA(),n.TgZ(4,"ion-title"),n._UZ(5,"img",2),n._uU(6," Felipe El Corz\xedn "),n.qZA()(),n.TgZ(7,"ion-toolbar",0)(8,"h3",3),n._uU(9,"Toca en el mapa!!"),n.qZA()()(),n.TgZ(10,"ion-content")(11,"google-map",4),n.NdJ("mapClick",function(){return t.addMarker()}),n.YNc(12,he,2,4,"map-marker",5),n.TgZ(13,"map-info-window")(14,"h3",3),n._uU(15),n.qZA(),n.TgZ(16,"p",6)(17,"b"),n._uU(18),n.qZA()()()()()),2&e&&(n.xp6(11),n.Q6J("options",t.options),n.xp6(1),n.Q6J("ngForOf",t.markers),n.xp6(3),n.Oqu(t.infoContentHeader),n.xp6(3),n.Oqu(t.infoContentBody))},dependencies:[R.sg,_.oU,_.Sm,_.W2,_.Gu,_.wd,_.sr,_.cs,d,T,A]}),i})()}];let ce=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[F.Bz.forChild(ge),F.Bz]}),i})(),de=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[R.ez,Y.u5,_.Pc,ce,le]}),i})()}}]);