webpackJsonp([7],{Ojwp:function(s,t){},i8IZ:function(s,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("X+2x"),e=i.n(a),l=i("GQaK"),c=i("TYxU"),n={components:{StarRating:e.a,CrossLine:c.a},data:function(){return{classMap:["decrease","discount","special","invoice","guarantee"]}},props:{seller:{type:Object}},watch:{seller:function(){var s=this;this.$nextTick(function(){s._initScroll(),s._initPicScroll()})}},methods:{_initScroll:function(){this.scroll?this.scroll.refresh():this.scroll=new l.a(this.$refs.sellerRefs,{click:!0})},_initPicScroll:function(){if(this.seller.pics){var s=126*this.seller.pics.length-6;this.$refs.picListRef.style.width=s+"px",this.picScroll?this.picScroll.refresh():this.picScroll=new l.a(this.$refs.picRef,{click:!0,scrollX:!0,eventPassthrough:"vertical"})}},toggleFavorites:function(s){s._constructed}},filters:{},computed:{},created:function(){},mounted:function(){var s=this;this.$nextTick(function(){s._initScroll(),s._initPicScroll()})},destroyed:function(){}},r={render:function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{ref:"sellerRefs",staticClass:"seller"},[i("div",{staticClass:"scroll-content"},[i("div",{staticClass:"overview"},[i("div",{staticClass:"collect"},[i("div",{staticClass:"name"},[s._v(s._s(s.seller.Name))]),s._v(" "),i("div",{staticClass:"star-wrapper"},[i("star-rating",{staticClass:"star",attrs:{"read-only":!0,"star-size":18,rating:4,"show-rating":!1}}),s._v(" "),i("span",{staticClass:"ratingCount"},[s._v("("+s._s(20)+")")])],1),s._v(" "),i("div",{staticClass:"sellCount"},[s._v("月售"+s._s(s.seller.OrderNumber)+"单")]),s._v(" "),i("div",{staticClass:"collect-icon",on:{click:s.toggleFavorites}},[i("i",{staticClass:"icon-favorite",class:{active:!0}}),s._v(" "),i("div",{staticClass:"text"},[s._v(s._s("已收藏"))])])]),s._v(" "),i("div",{staticClass:"param"},[i("div",{staticClass:"left"},[i("span",{staticClass:"text"},[s._v("起送价")]),s._v(" "),i("span",{staticClass:"price"},[i("span",{staticClass:"num"},[s._v(s._s(s.seller.QSPrice))]),s._v("元")])]),s._v(" "),i("div",{staticClass:"mid"},[i("span",{staticClass:"text"},[s._v("商家配送")]),s._v(" "),i("span",{staticClass:"price"},[i("span",{staticClass:"num"},[s._v(s._s(s.seller.QSPrice))]),s._v("元")])]),s._v(" "),i("div",{staticClass:"right"},[i("span",{staticClass:"text"},[s._v("平均配送时间")]),s._v(" "),i("span",{staticClass:"price"},[i("span",{staticClass:"num"},[s._v(s._s(s.seller.PSWhenLong))]),s._v("分钟")])])])]),s._v(" "),i("cross-line"),s._v(" "),i("div",{staticClass:"notice"},[i("h1",{staticClass:"title"},[s._v("公告与活动")]),s._v(" "),i("div",{staticClass:"text"},[s._v(s._s(s.seller.Notice))]),s._v(" "),s.seller.ManJian?i("ul",s._l(s.seller.ManJian,function(t){return i("li",{key:t.ManJianCode,staticClass:"support"},[i("span",{staticClass:"icon",class:s.classMap[1]}),s._v(" "),i("span",{staticClass:"description"},[s._v(s._s(t.ManJianName))])])})):s._e()]),s._v(" "),i("cross-line"),s._v(" "),i("div",{staticClass:"photo"},[i("h1",{staticClass:"title"},[s._v("商家实景")]),s._v(" "),i("div",{ref:"picRef",staticClass:"pic-wrapper"},[i("ul",{ref:"picListRef",staticClass:"pic-list"},s._l(s.seller.pics,function(s){return i("li",{key:s,staticClass:"pic-item"},[i("img",{attrs:{src:s}})])}))])]),s._v(" "),i("cross-line"),s._v(" "),i("div",{staticClass:"info"},[i("h1",{staticClass:"title"},[s._v("商家信息")]),s._v(" "),i("ul",s._l(s.seller.infos,function(t){return i("li",{key:t.id,staticClass:"item"},[s._v(s._s(t))])}))])],1)])},staticRenderFns:[]};var o=i("VU/8")(n,r,!1,function(s){i("Ojwp")},"data-v-a2e9984e",null);t.default=o.exports}});
//# sourceMappingURL=7.5e7b3ee8a71e9b49d40e.js.map