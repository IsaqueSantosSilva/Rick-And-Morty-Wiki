"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[74],{74:(A,g,i)=>{i.r(g),i.d(g,{LocationsPageModule:()=>T});var u=i(6019),r=i(9010),e=i(7328),c=i(8725),o=i(865),f=i(4522),m=i(8816);const h=function(n){return[n]};function Z(n,a){if(1&n&&(o.TgZ(0,"ion-list"),o.TgZ(1,"ion-item",13),o.TgZ(2,"ion-label"),o._uU(3),o.qZA(),o._UZ(4,"ion-icon",14),o.qZA(),o.qZA()),2&n){const t=a.$implicit;o.xp6(1),o.Q6J("routerLink",o.VKq(2,h,"/locations-info/"+t.id)),o.xp6(2),o.Oqu(t.name)}}const d=[{path:"",component:(()=>{class n{constructor(t){this.http=t,this.locations=[],this.page=1,this.maxPages=7,this.getInfo()}getInfo(t){this.http.get(`https://rickandmortyapi.com/api/location?page=${this.page}`).subscribe(s=>{this.locations=this.locations.concat(s.results),t&&t.target.complete()})}loadMore(t){this.page++,this.getInfo(t),this.page===this.maxPages&&t.enable(!1)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(f.eN))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-locations"]],decls:22,vars:6,consts:[["slot","start"],["slot","end",1,"back-btn"],["defaultHref","home"],["slot","end",1,"menu-btn"],["menu","main-menu"],["slot","end"],["routerLink","/home"],["routerLink","/characters"],["routerLink","/locations"],[3,"fullscreen"],["placeholder",'Try "Earth (C-137)"',3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],["loadingSpinner","bubbles",3,"ionInfinite"],["id","item",3,"routerLink"],["name","arrow-forward-outline"]],template:function(t,s){1&t&&(o.TgZ(0,"ion-header"),o.TgZ(1,"ion-toolbar"),o.TgZ(2,"ion-title",0),o._uU(3,"Locations"),o.qZA(),o.TgZ(4,"ion-buttons",1),o._UZ(5,"ion-back-button",2),o.qZA(),o.TgZ(6,"ion-buttons",3),o._UZ(7,"ion-menu-button",4),o.qZA(),o.TgZ(8,"ion-buttons",5),o.TgZ(9,"ul"),o.TgZ(10,"li",6),o._uU(11,"Home"),o.qZA(),o.TgZ(12,"li",7),o._uU(13,"Characters"),o.qZA(),o.TgZ(14,"li",8),o._uU(15,"Locations"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(16,"ion-content",9),o.TgZ(17,"ion-searchbar",10),o.NdJ("ngModelChange",function(l){return s.searchTerm=l}),o.qZA(),o.YNc(18,Z,5,4,"ion-list",11),o.ALo(19,"filter"),o.TgZ(20,"ion-infinite-scroll",12),o.NdJ("ionInfinite",function(l){return s.loadMore(l)}),o._UZ(21,"ion-infinite-scroll-content"),o.qZA(),o.qZA()),2&t&&(o.xp6(16),o.Q6J("fullscreen",!0),o.xp6(1),o.Q6J("ngModel",s.searchTerm),o.xp6(1),o.Q6J("ngForOf",o.xi3(19,3,s.locations,s.searchTerm)))},directives:[e.Gu,e.sr,e.wd,e.Sm,e.oU,e.cs,e.fG,e.YI,c.rH,e.W2,e.VI,e.j9,r.JJ,r.On,u.sg,e.ju,e.MB,e.q_,e.Ie,e.Q$,e.gu],pipes:[m.Z],styles:["ion-list[_ngcontent-%COMP%]{margin:0 auto}"]}),n})()}];let p=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[c.Bz.forChild(d)],c.Bz]}),n})(),T=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[u.ez,r.u5,e.Pc,p,m.h]]}),n})()}}]);