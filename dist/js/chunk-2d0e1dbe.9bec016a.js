(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e1dbe"],{"7bda":function(t,c,a){"use strict";a.r(c);var e=a("7a23"),o={class:"container"},n={class:"table mt-4"},i=Object(e["h"])("thead",null,[Object(e["h"])("tr",null,[Object(e["h"])("th",{width:"250"}," 圖片 "),Object(e["h"])("th",null,"商品名稱"),Object(e["h"])("th",null," 售價 "),Object(e["h"])("th",null," 編輯 ")])],-1),s={class:"h3"},l={class:"btn-group"};function d(t,c,a,d,r,u){var h=Object(e["C"])("infomodal");return Object(e["t"])(),Object(e["e"])("div",o,[Object(e["h"])("table",n,[i,Object(e["h"])("tbody",null,[(Object(e["t"])(!0),Object(e["e"])(e["a"],null,Object(e["A"])(r.productsData,(function(t,c){return Object(e["t"])(),Object(e["e"])("tr",{key:t.id},[Object(e["h"])("td",null,[Object(e["h"])("img",{src:t.imageUrl,class:"img-thumbnail",alt:""},null,8,["src"])]),Object(e["h"])("td",null,Object(e["F"])(t.title),1),Object(e["h"])("td",null,[Object(e["h"])("div",null,"打折前"+Object(e["F"])(t.origin_price),1),Object(e["h"])("div",s,"打折後"+Object(e["F"])(t.price),1)]),Object(e["h"])("td",null,[Object(e["h"])("div",l,[Object(e["h"])("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:function(t){return u.infoOpen(c)}}," 詳細資訊 ",8,["onClick"]),Object(e["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(c){return u.addCart(t.id)}}," 加入購物車 ",8,["onClick"])])])])})),128))])]),Object(e["h"])(h,{ref:"infoComponent"},null,512)])}a("99af");var r={id:"productModal2",ref:"infoModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},u={class:"modal-dialog modal-lg"},h={class:"modal-content border-0"},b=Object(e["h"])("div",{class:"modal-header bg-dark text-white"},[Object(e["h"])("h5",{id:"productModalLabel",class:"modal-title"}," 詳細資訊 "),Object(e["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),p={class:"modal-body"},O={class:"row"},j={class:"col-8"},f={class:"card"},m={class:"card-body"},g={class:"card-text"},v={class:"col-4"},D={class:"list-group"},y={class:"list-group-item"},C={class:"list-group-item"},k={class:"list-group-item"},w={class:"list-group-item"},F={class:"list-group-item"};function x(t,c,a,o,n,i){return Object(e["t"])(),Object(e["e"])("div",r,[Object(e["h"])("div",u,[Object(e["h"])("div",h,[b,Object(e["h"])("div",p,[Object(e["h"])("div",O,[Object(e["h"])("div",j,[Object(e["h"])("div",f,[Object(e["h"])("img",{src:n.productData.imageUrl,class:"card-img-top",alt:"..."},null,8,["src"]),Object(e["h"])("div",m,[Object(e["h"])("p",g,Object(e["F"])(n.productData.content),1)])])]),Object(e["h"])("div",v,[Object(e["h"])("ul",D,[Object(e["h"])("li",y,"產品名稱 "+Object(e["F"])(n.productData.title),1),Object(e["h"])("li",C,"種類 "+Object(e["F"])(n.productData.category),1),Object(e["h"])("li",k,"單位 "+Object(e["F"])(n.productData.unit),1),Object(e["h"])("li",w,"原價 "+Object(e["F"])(n.productData.origin_price),1),Object(e["h"])("li",F,"折扣價 "+Object(e["F"])(n.productData.price),1)]),Object(e["h"])("div",null,[Object(e["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm mt-1",onClick:c[1]||(c[1]=function(){return i.addCart&&i.addCart.apply(i,arguments)})}," 加入購物車 ")])])])])])])],512)}var I=a("7c2b"),$=a.n(I),M={data:function(){return{productData:[],modal:"",infoId:""}},mounted:function(){this.modal=new $.a(this.$refs.infoModal,{keyboard:!1,backdrop:"static"})},methods:{open:function(t){var c=this;this.infoId=t;var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua1993","/product/").concat(this.infoId);this.$http(a).then((function(t){t.data.success?(c.productData=t.data.product,c.modal.show()):alert(t.data.message)})).catch((function(t){console.log(t.response)}))},addCart:function(){var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua1993","/cart"),c={product_id:this.infoId,qty:1};this.$http.post(t,{data:c}).then((function(t){t.data.success,alert(t.data.message)})).catch((function(t){console.log(t)}))}}};M.render=x;var _=M,q={data:function(){return{productsData:[],infoId:""}},components:{infomodal:_},created:function(){this.getData()},methods:{getData:function(){var t=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua1993","/products/all");this.$http.get(c).then((function(c){t.productsData=c.data.products}))},addCart:function(t){var c=this;console.log(t);var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua1993","/cart"),e={product_id:t,qty:1};this.$http.post(a,{data:e}).then((function(t){t.data.success?(alert(t.data.message),c.getData()):alert(t.data.message)})).catch((function(t){console.log(t)}))},infoOpen:function(t){this.infoId=this.productsData[t].id,this.$refs.infoComponent.open(this.infoId)}}};q.render=d;c["default"]=q}}]);
//# sourceMappingURL=chunk-2d0e1dbe.9bec016a.js.map