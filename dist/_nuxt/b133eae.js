(window.webpackJsonp=window.webpackJsonp||[]).push([[63,13,29,32],{367:function(t,e,n){var content=n(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("3816dc61",content,!0,{sourceMap:!1})},368:function(t,e,n){"use strict";n(367)},369:function(t,e,n){var l=n(56)(!1);l.push([t.i,'.offcanvas-navigation ul{padding-left:0}.offcanvas-navigation ul li{border-bottom:1px solid hsla(0,0%,100%,.15)}.offcanvas-navigation ul li.menu-item-has-children .sub-menu{height:0;opacity:0;transition:.3s;visibility:hidden}.offcanvas-navigation ul li.menu-item-has-children.active>.sub-menu{height:100%;opacity:1;visibility:visible;padding-left:0}.offcanvas-navigation ul li a{color:#fff;font-size:16px;font-weight:500;padding:10px 0;display:block}.offcanvas-navigation ul li a:hover{color:#1292ee}.offcanvas-navigation ul.sub-menu{margin-left:15px;transition:.4s}.offcanvas-navigation ul.sub-menu li{list-style:none;border:none}.offcanvas-navigation ul.sub-menu li a{color:#fff;font-weight:400}.offcanvas-navigation ul.sub-menu li a:hover{color:#1292ee}.offcanvas-navigation ul.sub-menu li .sub-menu li a{font-size:13px;padding:5px 0}.offcanvas-navigation ul li.menu-item-has-children{position:relative;display:block}.offcanvas-navigation ul li.menu-item-has-children a{display:inline-block}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand i:before{transform:rotate(0)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand{top:5px;right:0;width:35px;height:35px;cursor:pointer;line-height:35px;position:absolute;text-align:center;background-color:hsla(0,0%,100%,.1)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand:hover{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i{display:block;border-bottom:1px solid #fff;position:relative;width:10px;text-align:center;top:50%;left:50%;transform:translate(-50%,-50%)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i:before{width:100%;content:"";border-bottom:1px solid #fff;display:block;position:absolute;top:0;transform:rotate(90deg);transition:.4s}',""]),t.exports=l},370:function(t,e,n){"use strict";n.r(e);var l={name:"MobileNavMenu",mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),e=t.querySelectorAll(".sub-menu"),n=t.querySelectorAll("a"),i=0;i<e.length;i++)e[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var l=t.querySelectorAll(".menu-expand"),o=l.length,r=0;r<o;r++)l[r].addEventListener("click",(function(t){m(t)}));for(var c=0;c<n.length;c++)n[c].addEventListener("click",(function(){d()}));var m=function(t){t.currentTarget.parentElement.classList.toggle("active")},d=function(){var t=document.querySelector("#offcanvas-mobile-menu");null==t||t.classList.remove("active")}}},o=(n(368),n(54)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mobile-navigation"},[e("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[e("ul",[e("li",[e("n-link",{attrs:{to:"/"}},[t._v("Beranda")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/about"}},[t._v("Tentang")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/unit"}},[t._v("Unit")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/news"}},[t._v("Berita")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/ppdb"}},[t._v("PPDB")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/career"}},[t._v("Karir")])],1)])])])}),[],!1,null,null,null);e.default=component.exports},371:function(t,e,n){"use strict";n.r(e);n(1),n(47),n(55);var l={components:{MobileNavigation:function(){return Promise.resolve().then(n.bind(null,370))}},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},o=n(54),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"popup-mobile-menu popup-mobile-visiable",attrs:{id:"offcanvas-menu"}},[e("div",{staticClass:"mobile-menu-overlay",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}}),t._v(" "),e("div",{staticClass:"inner custom-scrollbar"},[e("div",{staticClass:"mobile-header"},[e("div",{staticClass:"logo"},[e("n-link",{staticStyle:{color:"white"},attrs:{to:"/"}},[e("img",{staticClass:"dark-logo",attrs:{src:"/images/logo/yoga-logo.png",alt:"site logo"}})])],1),t._v(" "),e("button",{staticClass:"mobile-close-btn",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}})]),t._v(" "),e("div",{staticClass:"menu-content"},[e("MobileNavigation")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MobileNavigation:n(370).default})},372:function(t,e,n){"use strict";n.r(e);var l={props:["items","title","backgroundUrl"]},o=n(54),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-title-section section-padding-top bg-cover",style:{backgroundImage:"url(".concat(t.backgroundUrl,")")},attrs:{"data-overlay":"0.7"}},[e("div",{staticClass:"page-title"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[t._v(t._s(t.title))])])]),t._v(" "),e("div",{staticClass:"page-breadcrumb position-static"},[e("div",{staticClass:"container"},[e("b-breadcrumb",{staticClass:"page-breadcrumb",attrs:{items:t.items}})],1)])])}),[],!1,null,null,null);e.default=component.exports},457:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{ppdbData:[{imgSrc:"/images/ppdb/tk-trop.png",title:"SDK ST. YUSUP TROPODO",category:"sd"},{imgSrc:"/images/ppdb/tk-3.png",title:"TKK KARITAS III",category:"tk"},{imgSrc:"/images/ppdb/tk-wiyung.png",title:"TKK ST. MARIA WIYUNG",category:"tk"},{imgSrc:"/images/ppdb/sd-unsur1.png",title:"SDK UNTUNG SUROPATI I",category:"sd"},{imgSrc:"/images/ppdb/sd-mary.png",title:"SDK ST. MARY",category:"sd"},{imgSrc:"/images/ppdb/sd-katarina.png",title:"SDK KATARINA",category:"sd"},{imgSrc:"/images/ppdb/smp-2.png",title:"SMPK KARITAS II",category:"smp"},{imgSrc:"/images/ppdb/smp-3.png",title:"SMPK KARITAS III",category:"smp"},{imgSrc:"/images/ppdb/smp-katarina.png",title:"SMPK KATARINA",category:"smp"},{imgSrc:"/images/ppdb/sma-karpil.png",title:"SMAK ST. YUSUP KARANGPILANG",category:"sma"},{imgSrc:"/images/ppdb/sma-3.png",title:"SMAK KARITAS III",category:"sma"},{imgSrc:"/images/ppdb/sma-unsur.png",title:"SMAK UNTUNG SUROPATI",category:"sma"}],mixer:null,items:[{text:"Beranda",to:"/"},{text:"PPDB",active:!0}]}},mounted:function(){var t=this;this.$nextTick((function(){var e=document.querySelector(".box");t.mixer=new t.mixitup(e)}))},head:function(){return{title:"Pendaftaran Siswa"}}},o=n(54),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-container"},[e("OffCanvasMobileMenu"),t._v(" "),e("BreadcrumbOne",{attrs:{items:t.items,title:"POSTER PPDB UNIT SEKOLAH\nYAYASAN YOHANNES GABRIEL PERWAKILAN I",backgroundUrl:"/images/bg/ppdb.png"}}),t._v(" "),e("div",{staticClass:"section-padding",style:{backgroundColor:"#f8faff"}},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 gutters box"},t._l(t.ppdbData,(function(n,l){return e("div",{key:l,staticClass:"col mix",class:n.category},[e("div",{staticClass:"single-portfolio"},[e("div",{staticClass:"thumbnail mb-30"},[e("img",{staticClass:"img-fluid",attrs:{src:n.imgSrc,alt:n.title}})]),t._v(" "),e("div",{staticClass:"content"},[e("h5",{staticClass:"title"},[e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.my-modal",modifiers:{"my-modal":!0}}]},[e("n-link",{attrs:{to:"#"}},[t._v(t._s(n.title))])],1)],1),t._v(" "),e("b-modal",{attrs:{id:"my-modal"}},[e("img",{staticClass:"img-fluid",attrs:{src:n.imgSrc,alt:n.title}})])],1)])])})),0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])])],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row align-items-center mb-30"},[e("div",{staticClass:"col-lg-5"},[e("div",{staticClass:"section-title-two"},[e("span",{staticClass:"sub-title"},[t._v("PENERIMAAN PESERTA DIDIK BARU")]),t._v(" "),e("h3",{staticClass:"title"},[t._v("Unit Yayasan Yohannes Gabriel")])])]),t._v(" "),e("div",{staticClass:"col-lg-7"},[e("div",{staticClass:"messonry-button text-lg-right text-left"},[e("button",{attrs:{"data-filter":"all"}},[e("span",{staticClass:"filter-text"},[t._v("SEMUA")])]),t._v(" "),e("button",{attrs:{"data-filter":".tk"}},[e("span",{staticClass:"filter-text"},[t._v("TK")])]),t._v(" "),e("button",{attrs:{"data-filter":".sd"}},[e("span",{staticClass:"filter-text"},[t._v("SD")])]),t._v(" "),e("button",{attrs:{"data-filter":".smp"}},[e("span",{staticClass:"filter-text"},[t._v("SMP")])]),t._v(" "),e("button",{attrs:{"data-filter":".sma"}},[e("span",{staticClass:"filter-text"},[t._v("SMA")])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"section-title-two mt-50"},[t("h1",{staticClass:"title"},[this._v("Pertanyaan Seputar PPDB")])])},function(){var t=this._self._c;return t("div",{staticClass:"col-12 mb-3"},[t("textarea",{attrs:{name:"message",placeholder:"Silahkan mengirimkan pertanyaan Anda seputar PPDB"}})])},function(){var t=this._self._c;return t("div",{staticClass:"col-12 text-left"},[t("button",{staticClass:"btn btn-primary btn-hover-secondary"},[this._v("Kirim")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{OffCanvasMobileMenu:n(371).default,BreadcrumbOne:n(372).default})}}]);