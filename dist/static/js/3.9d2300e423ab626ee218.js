webpackJsonp([3],{"9pdb":function(t,e){},FdjC:function(t,e){},KgXo:function(t,e,i){"use strict";var a={data:function(){return{positionY:0,timer:null}},mounted:function(){var t=this;this.timer=setInterval(function(){t.positionY++},600)},beforeDestroy:function(){clearInterval(this.timer)}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loading_container"},[e("div",{staticClass:"load_img",style:{backgroundPositionY:-this.positionY%7*2.5+"rem"}}),this._v(" "),e("svg",{staticClass:"load_ellipse",attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[e("ellipse",{staticStyle:{fill:"#ddd",stroke:"none"},attrs:{cx:"26",cy:"10",rx:"26",ry:"10"}})])])},staticRenderFns:[]};var n=i("VU/8")(a,s,!1,function(t){i("9pdb")},"data-v-2cc3fdcc",null);e.a=n.exports},QMjV:function(t,e){},R3ws:function(t,e){},X6d5:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Dd8w"),s=i.n(a),n=i("NYxO"),o={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"v-space"})},staticRenderFns:[]};var c=i("VU/8")({components:{},data:function(){return{}},props:{},watch:{},methods:{},filters:{},computed:{},created:function(){},mounted:function(){},destroyed:function(){}},o,!1,function(t){i("FdjC")},"data-v-e1316530",null).exports,r=i("X+2x"),l={components:{StarRating:i.n(r).a},data:function(){return{}},props:{data:{type:Object,default:function(){return{}}}},watch:{},methods:{toShopDetail:function(){this.$router.push({name:"shopdetail",params:{shopid:this.data.SupermarketCode}})}},filters:{},computed:{},created:function(){},mounted:function(){},destroyed:function(){}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shop-item",on:{click:t.toShopDetail}},[i("div",{staticClass:"left"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://p0.meituan.net/xianfu/168034337b679ad0a12c0e136328f102165888.jpg",expression:"'http://p0.meituan.net/xianfu/168034337b679ad0a12c0e136328f102165888.jpg'"}]})]),t._v(" "),i("div",{staticClass:"right"},[i("div",{staticClass:"name"},[t._v(t._s(t.data.Name))]),t._v(" "),i("div",{staticClass:"mid clearfix"},[i("star-rating",{staticClass:"fl",attrs:{"read-only":!0,"star-size":14,rating:4,"show-rating":!1}}),t._v(" "),i("span",{staticClass:"count fl"},[t._v("月售"+t._s(t.data.OrderNumber))]),t._v(" "),i("span",{staticClass:"distance fr"},[t._v(t._s(23)+"km")]),t._v(" "),i("span",{staticClass:"time fr"},[t._v(t._s(t.data.PSWhenLong)+"分钟")])],1),t._v(" "),i("div",{staticClass:"fee"},[i("span",{staticClass:"start"},[t._v("起送 ¥"+t._s(t.data.QSPrice))]),t._v(" "),i("span",{staticClass:"deliver"},[t._v("配送 ¥"+t._s(t.data.PSPrice))]),t._v(" "),i("span",{staticClass:"average"},[t._v("人均 ¥"+t._s(t.data.QSPrice))])]),t._v(" "),t._l(t.data.ManJian,function(e){return i("div",{key:e.ManJianCode,staticClass:"activity"},[i("p",[i("img",{attrs:{src:"http://p0.meituan.net/xianfu/c2c0f31d0ebf0f60af115d058169c492992.png"}}),t._v(t._s(e.ManJianName))])])})],2)])},staticRenderFns:[]};var u=i("VU/8")(l,d,!1,function(t){i("inxb")},"data-v-5dfff8eb",null).exports,f={components:{},data:function(){return{}},props:{txt:{type:String,default:"附近商家"}},watch:{},methods:{},filters:{},computed:{},created:function(){},mounted:function(){},destroyed:function(){}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-bar"},[e("span",[this._v(this._s(this.txt))])])},staticRenderFns:[]};var m=i("VU/8")(f,p,!1,function(t){i("QMjV")},"data-v-74fd0404",null).exports,h=i("KgXo"),v={components:{},data:function(){return{}},props:{title:{type:String,default:null},leftTxt:{type:String,default:null},rightTxt:{type:String,default:null},leftRes:{type:String,default:null},rightRes:{type:String,default:null}},watch:{},methods:{back:function(){this.$emit("back")},leftTxtClick:function(){this.$emit("leftTxtClick")},leftImgClick:function(){this.$emit("leftImgClick")},titleClick:function(){this.$emit("titleClick")},rightTxtClick:function(){this.$emit("rightTxtClick")},rightImgClick:function(){this.$emit("rightImgClick")}},filters:{},computed:{},created:function(){},mounted:function(){}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-bar"},[i("section",{staticClass:"left-part"},[t.leftRes?i("i",{class:t.leftRes,on:{click:t.leftImgClick}}):t.leftTxt?i("mt-button",{staticClass:"mt-button",on:{click:t.leftTxtClick}},[t._v(t._s(t.leftTxt))]):t._e()],1),t._v(" "),i("section",{staticClass:"middle-part"},[t.title?i("h1",{on:{click:t.titleClick}},[t._v(t._s(t.title))]):t._e()]),t._v(" "),i("section",{staticClass:"right-part"},[t.rightRes?i("i",{class:t.rightRes,on:{click:t.rightImgClick}}):t.rightTxt?i("mt-button",{staticClass:"mt-button",on:{click:t.rightTxtClick}},[t._v(t._s(t.rightTxt))]):t._e()],1)])},staticRenderFns:[]};var _=i("VU/8")(v,g,!1,function(t){i("R3ws")},"data-v-305c14a9",null).exports,C={components:{VSpace:c,ShopItem:u,TitleBar:m,Loading:h.a,ActionBar:_},data:function(){return{bottomNavValue:"home",showLoading:!0,topStatus:"",bannerData:[{id:"1",src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523328511&di=bb6631fb34c61a50f78ff9f7e4055c67&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb17eca8065380cd708ae52d1aa44ad345982815e.jpg"},{id:"2",src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522733793054&di=24a8926d478a3b073f3fc08579c7a548&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F140720%2F240470-140H00GK190.jpg"}],shoplist:[]}},computed:Object(n.c)(["latitude","longitude"]),methods:s()({bottomNavChange:function(t){this.bottomNavValue=t}},Object(n.b)(["SAVE_ADDRESS"]),{getNearList:function(){var t=this;this.$axios.get("/API_User/GetSupermarkeyList",{params:{CityName:"北京"}}).then(function(e){console.log(e),t.showLoading=!1,t.shoplist=e.data.Obj,t.cancelRefresh()}).catch(function(e){console.log(e),t.showLoading=!1,t.cancelRefresh()})},handleTopChange:function(t){this.topStatus=t},loadTop:function(){this.getNearList()},cancelRefresh:function(){"loading"===this.topStatus&&this.$refs.loadmore.onTopLoaded()},titleClick:function(){alert("titleClick")},leftImgClick:function(){alert("leftImgClick")},rightTxtClick:function(){alert("rightTxtClick")}}),mounted:function(){this.getNearList()}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("action-bar",{attrs:{title:"北京市后现代城",rightTxt:"用户名",leftRes:"iconfont icon-wxbsousuotuiguang"},on:{titleClick:t.titleClick,leftImgClick:t.leftImgClick,rightTxtClick:t.rightTxtClick}}),t._v(" "),i("mt-loadmore",{ref:"loadmore",staticClass:"main-content",attrs:{"top-method":t.loadTop},on:{"top-status-change":t.handleTopChange}},[i("div",{staticClass:"refresh-content"},[i("div",{staticClass:"banner"},[i("mt-swipe",{staticClass:"mt-swipe",attrs:{auto:3e3}},t._l(t.bannerData,function(t){return i("mt-swipe-item",{key:t.id},[i("img",{attrs:{src:t.src}})])}))],1),t._v(" "),i("v-space"),t._v(" "),i("div",{staticClass:"near-shops"},[i("title-bar",{attrs:{txt:"附近商家"}}),t._v(" "),t._l(t.shoplist,function(t){return i("shop-item",{key:t.SupermarketCode,attrs:{data:t}})})],2),t._v(" "),i("transition",{attrs:{name:"loading"}},[i("loading",{directives:[{name:"show",rawName:"v-show",value:t.showLoading,expression:"showLoading"}]})],1)],1),t._v(" "),i("div",{staticClass:"mint-loadmore-top",attrs:{slot:"top"},slot:"top"},[i("span",{directives:[{name:"show",rawName:"v-show",value:"loading"!==t.topStatus,expression:"topStatus !== 'loading'"}],class:{"is-rotate":"drop"===t.topStatus}},[t._v("↓")]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.topStatus,expression:"topStatus === 'loading'"}]},[i("mt-spinner",{attrs:{type:"snake"}})],1)])])],1)},staticRenderFns:[]};var b=i("VU/8")(C,k,!1,function(t){i("zA56")},"data-v-75de1706",null);e.default=b.exports},inxb:function(t,e){},zA56:function(t,e){}});
//# sourceMappingURL=3.9d2300e423ab626ee218.js.map