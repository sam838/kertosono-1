(window.webpackJsonp=window.webpackJsonp||[]).push([[69,13,29,32],{367:function(t,n,e){var content=e(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(57).default)("3816dc61",content,!0,{sourceMap:!1})},368:function(t,n,e){"use strict";e(367)},369:function(t,n,e){var l=e(56)(!1);l.push([t.i,'.offcanvas-navigation ul{padding-left:0}.offcanvas-navigation ul li{border-bottom:1px solid hsla(0,0%,100%,.15)}.offcanvas-navigation ul li.menu-item-has-children .sub-menu{height:0;opacity:0;transition:.3s;visibility:hidden}.offcanvas-navigation ul li.menu-item-has-children.active>.sub-menu{height:100%;opacity:1;visibility:visible;padding-left:0}.offcanvas-navigation ul li a{color:#fff;font-size:16px;font-weight:500;padding:10px 0;display:block}.offcanvas-navigation ul li a:hover{color:#1292ee}.offcanvas-navigation ul.sub-menu{margin-left:15px;transition:.4s}.offcanvas-navigation ul.sub-menu li{list-style:none;border:none}.offcanvas-navigation ul.sub-menu li a{color:#fff;font-weight:400}.offcanvas-navigation ul.sub-menu li a:hover{color:#1292ee}.offcanvas-navigation ul.sub-menu li .sub-menu li a{font-size:13px;padding:5px 0}.offcanvas-navigation ul li.menu-item-has-children{position:relative;display:block}.offcanvas-navigation ul li.menu-item-has-children a{display:inline-block}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand i:before{transform:rotate(0)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand{top:5px;right:0;width:35px;height:35px;cursor:pointer;line-height:35px;position:absolute;text-align:center;background-color:hsla(0,0%,100%,.1)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand:hover{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i{display:block;border-bottom:1px solid #fff;position:relative;width:10px;text-align:center;top:50%;left:50%;transform:translate(-50%,-50%)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i:before{width:100%;content:"";border-bottom:1px solid #fff;display:block;position:absolute;top:0;transform:rotate(90deg);transition:.4s}',""]),t.exports=l},370:function(t,n,e){"use strict";e.r(n);var l={name:"MobileNavMenu",mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),n=t.querySelectorAll(".sub-menu"),e=t.querySelectorAll("a"),i=0;i<n.length;i++)n[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var l=t.querySelectorAll(".menu-expand"),o=l.length,r=0;r<o;r++)l[r].addEventListener("click",(function(t){d(t)}));for(var c=0;c<e.length;c++)e[c].addEventListener("click",(function(){m()}));var d=function(t){t.currentTarget.parentElement.classList.toggle("active")},m=function(){var t=document.querySelector("#offcanvas-mobile-menu");null==t||t.classList.remove("active")}}},o=(e(368),e(54)),component=Object(o.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"mobile-navigation"},[n("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[n("ul",[n("li",[n("n-link",{attrs:{to:"/"}},[t._v("Beranda")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("Tentang")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/unit"}},[t._v("Unit")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/news"}},[t._v("Berita")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/ppdb"}},[t._v("PPDB")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/career"}},[t._v("Karir")])],1)])])])}),[],!1,null,null,null);n.default=component.exports},371:function(t,n,e){"use strict";e.r(n);e(1),e(47),e(55);var l={components:{MobileNavigation:function(){return Promise.resolve().then(e.bind(null,370))}},methods:{mobiletoggleClass:function(t,n){var e=document.querySelector("#offcanvas-menu");"addClass"===t?e.classList.add(n):e.classList.remove(n)}}},o=e(54),component=Object(o.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"popup-mobile-menu popup-mobile-visiable",attrs:{id:"offcanvas-menu"}},[n("div",{staticClass:"mobile-menu-overlay",on:{click:function(n){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}}),t._v(" "),n("div",{staticClass:"inner custom-scrollbar"},[n("div",{staticClass:"mobile-header"},[n("div",{staticClass:"logo"},[n("n-link",{staticStyle:{color:"white"},attrs:{to:"/"}},[n("img",{staticClass:"dark-logo",attrs:{src:"/images/logo/yoga-logo.png",alt:"site logo"}})])],1),t._v(" "),n("button",{staticClass:"mobile-close-btn",on:{click:function(n){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}})]),t._v(" "),n("div",{staticClass:"menu-content"},[n("MobileNavigation")],1)])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{MobileNavigation:e(370).default})},372:function(t,n,e){"use strict";e.r(n);var l={props:["items","title","backgroundUrl"]},o=e(54),component=Object(o.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"page-title-section section-padding-top bg-cover",style:{backgroundImage:"url(".concat(t.backgroundUrl,")")},attrs:{"data-overlay":"0.7"}},[n("div",{staticClass:"page-title"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v(t._s(t.title))])])]),t._v(" "),n("div",{staticClass:"page-breadcrumb position-static"},[n("div",{staticClass:"container"},[n("b-breadcrumb",{staticClass:"page-breadcrumb",attrs:{items:t.items}})],1)])])}),[],!1,null,null,null);n.default=component.exports},465:function(t,n,e){"use strict";e.r(n);e(1),e(47),e(55);var l={components:{OffCanvasMobileMenu:function(){return Promise.resolve().then(e.bind(null,371))},BreadcrumbOne:function(){return Promise.resolve().then(e.bind(null,372))}},data:function(){return{items:[{text:"Beranda",to:"/"},{text:"Detail Unit",active:!0}]}},head:function(){return{title:"Detail Unit"}}},o=e(54),component=Object(o.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"main-container"},[n("OffCanvasMobileMenu"),t._v(" "),n("BreadcrumbOne",{attrs:{items:t.items,title:"TKK ST. MARIA SIDOARJO",backgroundUrl:"/images/bg/unit-2.png"}}),t._v(" "),t._m(0)],1)}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"section-padding"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-4 col-md-6 col-12"},[n("div",{staticClass:"work-left work-details",attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"portfolio-main-info"},[n("h2",{staticClass:"title"},[t._v("TENTANG TKK ST. MARIA SIDOARJO")]),t._v(" "),n("div",{staticClass:"work-details-list mt-40"},[n("div",{staticClass:"details-list"},[n("label",[t._v("Berdiri")]),t._v(" "),n("span",[t._v("16 Juli 1989")])]),t._v(" "),n("div",{staticClass:"details-list"},[n("label",[t._v("Sarana Prasarana")]),t._v(" "),n("li",[t._v("Taman Bermain")]),t._v(" "),n("li",[t._v("Ruang Audio")]),t._v(" "),n("li",[t._v("Perpustakaan")]),t._v(" "),n("li",[t._v("Ruang UKS")]),t._v(" "),n("li",[t._v("Media Bermain")])]),t._v(" "),n("div",{staticClass:"details-list"},[n("label",[t._v("Ekstrakurikuler")]),t._v(" "),n("li",[t._v("Menari")]),t._v(" "),n("li",[t._v("Vokal")]),t._v(" "),n("li",[t._v("Menggambar")]),t._v(" "),n("li",[t._v("Drumband")])]),t._v(" "),n("div",{staticClass:"details-list"},[n("label",[t._v("Prestasi")]),t._v(" "),n("li",[t._v("Lomba Tari Juara 1 tingkat TK")]),t._v(" "),n("li",[t._v("Lomba Paduan Suara Juara 3 di Dempo, Malang")])])])])])]),t._v(" "),n("div",{staticClass:"col-lg-7 col-md-6 offset-lg-1 col-12"},[n("div",{staticClass:"work-left work-details mt-30"},[n("div",{staticClass:"work-main-info"},[n("div",{staticClass:"work-content"},[n("h6",{staticClass:"title",attrs:{"data-aos":"fade-up"}},[t._v("\n                  TENTANG TKK ST. MARIA SIDOARJO\n                ")]),t._v(" "),n("div",{staticClass:"desc mt-40"},[n("div",{staticClass:"content mb-20",attrs:{"data-aos":"fade-up"}},[n("p",[t._v("\n                      Pada awal perkembangan pendidikan Katolik di Sidoarjo,\n                      sekolah-sekolah di unit sub perwakilan Sidoarjo dipimpin\n                      oleh Romo FX Dumo Purnomo. Romo mengadakan rapat bersama\n                      para kepala sekolah dan guru dengan pembahasan tentang\n                      perkembangan sekolah di Sidoarjo salah satunya adalah\n                      keberadaan sekolah swasta non-Katolik di wilayah\n                      Sidoarjo.\n                    ")])]),t._v(" "),n("div",{staticClass:"content mb-20",attrs:{"data-aos":"fade-up"}},[n("p",[t._v("\n                      Melalui hal tersebut, bemunculan banyak keluhan umat\n                      Katolik yang menyekolahkan anaknya di sekolah swasta\n                      non-Katolik. Oleh karena itu Romo dan beberapa umat\n                      Katolik di Sidoarjo mencetuskan ide untuk mulai membuka\n                      TK berlandaskan keagamaan Katolik. Maka mulai dilakukan\n                      proses rekrutmen guru TKK dengan syarat utama untuk\n                      mendirikan TKK adalah mencari tenaga pendidik harus\n                      memiliki ijazah TKK. Setelah mendapatkan guru yang\n                      memiliki potensi, akhirnya langsung bergerak menyusun\n                      program persiapan untuk membuka TKK. Setelah persiapan\n                      selesai, maka TKK St. Maria Sidoarjo mulai beroperasi\n                      tepatnya pada tanggal 16 Juli 1989.\n                    ")])]),t._v(" "),n("div",{staticClass:"content mb-40",attrs:{"data-aos":"fade-up"}},[n("p",[t._v("\n                      Untuk pengembangan sekolah berikutnya TKK St. Maria\n                      Sidoarjo mengadakan rapat wali murid di awal tahun dan\n                      akhir tahun kegiatan ini bertujuan untuk peningkatan\n                      mutu sekolah. Kemudian dalam rangka rangka meningkatkan\n                      jumlah murid setiap tahunnya, TKK St. Maria Sidoarjo\n                      membuat gebrakan baru untuk mempromosikan TKK melalui\n                      pembuatan spanduk, brosur, pentas seni dan berbagai\n                      macam kegiatan lain.\n                    ")])])])])])])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"custom-column-thumbnail mt-60",attrs:{"data-aos":"fade-up"}},[n("img",{staticClass:"w-100",attrs:{src:"/images/project/details-4.png",alt:"Agency"}})])])]),t._v(" "),n("div",{staticClass:"row mt-60"},[n("div",{staticClass:"col-lg-4 col-md-12 col-12"},[n("div",{staticClass:"digital-marketing",attrs:{"data-aos":"fade-up"}},[n("h3",{staticClass:"heading heading-h3"},[t._v("TKK St. Maria Sidoarjo")])])]),t._v(" "),n("div",{staticClass:"col-lg-7 col-md-12 col-12 offset-lg-1"},[n("div",{staticClass:"digital-marketing",attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"inner"},[n("p",[t._v("\n                Pada awal perkembangan pendidikan Katolik di Sidoarjo,\n                sekolah-sekolah di unit sub perwakilan Sidoarjo dipimpin oleh\n                Romo FX Dumo Purnomo. Romo mengadakan rapat bersama para\n                kepala sekolah dan guru dengan pembahasan tentang perkembangan\n                sekolah di Sidoarjo salah satunya adalah keberadaan sekolah\n                swasta non-Katolik di wilayah Sidoarjo.\n              ")])])])])]),t._v(" "),n("div",{staticClass:"custom-layout-gallery mt-60"},[n("div",{staticClass:"row mtn-30"},[n("div",{staticClass:"col-lg-6 col-md-6 col-12 mt-30"},[n("div",{staticClass:"thumbnail",attrs:{"data-aos":"fade-up"}},[n("img",{staticClass:"w-100",attrs:{src:"/images/project/unit-details-1.png",alt:"Agency"}})])]),t._v(" "),n("div",{staticClass:"col-lg-6 col-md-6 col-12 mt-30"},[n("div",{staticClass:"thumbnail",attrs:{"data-aos":"fade-up"}},[n("img",{staticClass:"w-100",attrs:{src:"/images/project/unit-details-2.png",alt:"Agency"}})])]),t._v(" "),n("div",{staticClass:"col-lg-6 col-md-6 col-12 mt-30"},[n("div",{staticClass:"thumbnail",attrs:{"data-aos":"fade-up"}},[n("img",{staticClass:"w-100",attrs:{src:"/images/project/unit-details-5.png",alt:"Agency"}})])]),t._v(" "),n("div",{staticClass:"col-lg-6 col-md-6 col-12 mt-30"},[n("div",{staticClass:"thumbnail",attrs:{"data-aos":"fade-up"}},[n("img",{staticClass:"w-100",attrs:{src:"/images/project/unit-details-6.png",alt:"Agency"}})])]),t._v(" "),n("div",{staticClass:"col-lg-6 col-md-6 col-12 mt-30"},[n("div",{staticClass:"thumbnail",attrs:{"data-aos":"fade-up"}},[n("img",{staticClass:"w-100",attrs:{src:"/images/project/unit-details-7.png",alt:"Agency"}})])]),t._v(" "),n("div",{staticClass:"col-lg-6 col-md-6 col-12 mt-30"},[n("div",{staticClass:"thumbnail",attrs:{"data-aos":"fade-up"}},[n("img",{staticClass:"w-100",attrs:{src:"/images/project/unit-details-8.png",alt:"Agency"}})])]),t._v(" "),n("div",{staticClass:"col-lg-12 mt-30"},[n("div",{staticClass:"thumbnail",attrs:{"data-aos":"fade-up"}},[n("img",{staticClass:"w-100",attrs:{src:"/images/project/details-3.png",alt:"Agency"}})])])])])])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{OffCanvasMobileMenu:e(371).default,BreadcrumbOne:e(372).default})}}]);