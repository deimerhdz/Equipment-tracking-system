import{a as L}from"./chunk-PQIZKA6A.js";import{a as B}from"./chunk-JWLIMLOG.js";import{$ as v,C as x,D as h,H as S,K as i,L as a,M as c,P as M,R as m,U as f,V as g,e as I,ha as A,ia as E,ja as F,ka as j,ma as u,o as p,oa as b,pa as s,q as n,r as l,s as d}from"./chunk-LDKAS3T6.js";var D=()=>["/dashboard/equipments"],G=()=>["/dashboard/reports"],R=(()=>{let t=class t{constructor(){this.authService=n(s)}logout(){this.authService.logout()}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=l({type:t,selectors:[["app-navbar"]],standalone:!0,features:[f],decls:17,vars:4,consts:[[1,"navbar","navbar-expand-lg","bg-body-tertiary"],[1,"container-fluid"],["href","#",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],["routerLinkActive","active",1,"nav-item","cursor",3,"routerLink"],[1,"nav-link"],[1,"nav-item",3,"click"],["href","#",1,"nav-link"]],template:function(r,C){r&1&&(i(0,"nav",0)(1,"div",1)(2,"a",2),m(3,"Equipments traking system"),a(),i(4,"button",3),c(5,"span",4),a(),i(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),m(10,"Equipments"),a()(),i(11,"li",7)(12,"a",8),m(13,"Reports"),a()(),i(14,"li",9),M("click",function(){return C.logout()}),i(15,"a",10),m(16,"Salir"),a()()()()()()),r&2&&(h(8),S("routerLink",g(2,D)),h(3),S("routerLink",g(3,G)))},dependencies:[u,F,j]});let e=t;return e})();var q=I(B());var w=(()=>{let t=class t{constructor(){this.authService=n(s),this.sockectService=n(L),this.user=x(()=>this.authService.currentUser())}ngOnInit(){this.sockectService.notifications$().subscribe(o=>{q.default.fire({position:"top-end",icon:"success",title:o,showConfirmButton:!1,timer:1500})})}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=l({type:t,selectors:[["app-dashboard-layout"]],standalone:!0,features:[f],decls:3,vars:0,consts:[[1,"container"]],template:function(r,C){r&1&&(c(0,"app-navbar"),i(1,"div",0),c(2,"router-outlet"),a())},dependencies:[v,A,R]});let e=t;return e})();var N=(e,t)=>{let k=n(s);return k.authStatus()==b.authenticated?!0:(k.authStatus()==b.checking||n(E).navigateByUrl("/auth/login"),!1)};var O=[{path:"",component:w,canActivate:[N],children:[{path:"equipments",loadChildren:()=>import("./chunk-YETFK56T.js").then(e=>e.EquipmentModule)},{path:"reports",loadChildren:()=>import("./chunk-WYMKIBFQ.js").then(e=>e.ReportModule)},{path:"**",redirectTo:"equipments"}]}],T=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=d({type:t}),t.\u0275inj=p({imports:[u.forChild(O),u]});let e=t;return e})();var lt=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=d({type:t}),t.\u0275inj=p({imports:[v,T]});let e=t;return e})();export{lt as DashboardModule};
