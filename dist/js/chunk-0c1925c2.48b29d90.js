(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c1925c2"],{"1dde":function(t,e,a){var c=a("d039"),n=a("b622"),l=a("2d00"),o=n("species");t.exports=function(t){return l>=51||!c((function(){var e=[],a=e.constructor={};return a[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},8418:function(t,e,a){"use strict";var c=a("c04e"),n=a("9bf2"),l=a("5c6c");t.exports=function(t,e,a){var o=c(e);o in t?n.f(t,o,l(0,a)):t[o]=a}},"99af":function(t,e,a){"use strict";var c=a("23e7"),n=a("d039"),l=a("e8b5"),o=a("861d"),r=a("7b0b"),s=a("50c4"),u=a("8418"),i=a("65f0"),d=a("1dde"),b=a("b622"),m=a("2d00"),f=b("isConcatSpreadable"),g=9007199254740991,p="Maximum allowed index exceeded",h=m>=51||!n((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),j=d("concat"),O=function(t){if(!o(t))return!1;var e=t[f];return void 0!==e?!!e:l(t)},v=!h||!j;c({target:"Array",proto:!0,forced:v},{concat:function(t){var e,a,c,n,l,o=r(this),d=i(o,0),b=0;for(e=-1,c=arguments.length;e<c;e++)if(l=-1===e?o:arguments[e],O(l)){if(n=s(l.length),b+n>g)throw TypeError(p);for(a=0;a<n;a++,b++)a in l&&u(d,b,l[a])}else{if(b>=g)throw TypeError(p);u(d,b++,l)}return d.length=b,d}})},b0c0:function(t,e,a){var c=a("83ab"),n=a("9bf2").f,l=Function.prototype,o=l.toString,r=/^\s*function ([^ (]*)/,s="name";c&&!(s in l)&&n(l,s,{configurable:!0,get:function(){try{return o.call(this).match(r)[1]}catch(t){return""}}})},d398:function(t,e,a){"use strict";a.r(e);a("b0c0");var c=a("7a23"),n={class:"container"},l=Object(c["g"])("div",{class:"h2"},"購物車列表",-1),o={class:"table mt-4"},r=Object(c["g"])("thead",null,[Object(c["g"])("tr",null,[Object(c["g"])("th",null,"品名"),Object(c["g"])("th",null,"單價"),Object(c["g"])("th",{width:"150"},"數量"),Object(c["g"])("th",null,"總價"),Object(c["g"])("th",null,"編輯")])],-1),s={class:"input-group input-group-sm"},u={class:"input-group"},i={colspan:"4"},d={class:"my-5 row justify-content-center"},b=Object(c["g"])("div",{class:"h2"},"預訂資料",-1),m={class:"mb-3"},f=Object(c["g"])("label",{for:"name",class:"form-label"},"姓名",-1),g={class:"mb-3"},p=Object(c["g"])("label",{for:"email",class:"form-label"},"Email",-1),h={class:"mb-3"},j=Object(c["g"])("label",{for:"phone",class:"form-label"},"電話",-1),O={class:"mb-3"},v=Object(c["g"])("label",{for:"phone",class:"form-label"},"地址",-1),y={class:"mb-3"},C=Object(c["g"])("label",{for:"message",class:"form-label"},"留言",-1),x=Object(c["g"])("div",{class:"text-end"},[Object(c["g"])("button",{type:"submit",class:"btn btn-danger"},"送出訂單")],-1);function V(t,e,a,V,w,k){var q=Object(c["z"])("Field"),U=Object(c["z"])("error-message"),D=Object(c["z"])("Form");return Object(c["s"])(),Object(c["d"])("div",n,[l,Object(c["g"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:e[1]||(e[1]=function(){return k.clearCart&&k.clearCart.apply(k,arguments)})}," 清空購物車 "),Object(c["g"])("table",o,[r,Object(c["g"])("tbody",null,[(Object(c["s"])(!0),Object(c["d"])(c["a"],null,Object(c["y"])(w.cartData,(function(t,e){return Object(c["s"])(),Object(c["d"])("tr",{key:t.id},[Object(c["g"])("td",null,Object(c["C"])(t.product.title),1),Object(c["g"])("td",null,Object(c["C"])(t.product.price),1),Object(c["g"])("td",null,[Object(c["g"])("div",s,[Object(c["g"])("div",u,[Object(c["K"])(Object(c["g"])("input",{"onUpdate:modelValue":function(e){return t.qty=e},min:"1",type:"number",class:"form-control",onBlur:function(t){return k.updataCart(e)}},null,40,["onUpdate:modelValue","onBlur"]),[[c["G"],t.qty,void 0,{number:!0}]])])])]),Object(c["g"])("td",null,Object(c["C"])(t.total),1),Object(c["g"])("td",null,[Object(c["g"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(e){return k.deleteItem(t.id)}}," 刪除 ",8,["onClick"])])])})),128))]),Object(c["g"])("tfoot",null,[Object(c["g"])("tr",null,[Object(c["g"])("td",i,"總計"+Object(c["C"])(w.final_total)+"元",1)])])]),Object(c["g"])("div",d,[b,Object(c["g"])(D,{ref:"order",class:"col-md-6",onSubmit:k.onSubmit},{default:Object(c["J"])((function(t){var a=t.errors;return[Object(c["g"])("div",m,[f,Object(c["g"])(q,{id:"name",name:"姓名",type:"text",class:["form-control",{"is-invalid":a["姓名"]}],placeholder:"請輸入姓名",rules:"required",modelValue:w.user.name,"onUpdate:modelValue":e[2]||(e[2]=function(t){return w.user.name=t})},null,8,["class","modelValue"]),Object(c["g"])(U,{name:"姓名",class:"invalid-feedback"})]),Object(c["g"])("div",g,[p,Object(c["g"])(q,{id:"email",name:"email",type:"email",class:["form-control",{"is-invalid":a["email"]}],placeholder:"請輸入 Email",rules:"email|required",modelValue:w.user.email,"onUpdate:modelValue":e[3]||(e[3]=function(t){return w.user.email=t})},null,8,["class","modelValue"]),Object(c["g"])(U,{name:"email",class:"invalid-feedback"})]),Object(c["g"])("div",h,[j,Object(c["g"])(q,{id:"phone",name:"電話",type:"tel",class:["form-control",{"is-invalid":a["電話"]}],placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:w.user.tel,"onUpdate:modelValue":e[4]||(e[4]=function(t){return w.user.tel=t})},null,8,["class","modelValue"]),Object(c["g"])(U,{name:"電話",class:"invalid-feedback"})]),Object(c["g"])("div",O,[v,Object(c["g"])(q,{id:"address",name:"地址",type:"tel",class:["form-control",{"is-invalid":a["地址"]}],placeholder:"請輸入地址",rules:"required",modelValue:w.user.address,"onUpdate:modelValue":e[5]||(e[5]=function(t){return w.user.address=t})},null,8,["class","modelValue"]),Object(c["g"])(U,{name:"地址",class:"invalid-feedback"})]),Object(c["g"])("div",y,[C,Object(c["K"])(Object(c["g"])("textarea",{class:"form-control",id:"exampleFormControlTextarea1",rows:"3","onUpdate:modelValue":e[6]||(e[6]=function(t){return w.message=t})},null,512),[[c["G"],w.message]])]),x]})),_:1},8,["onSubmit"])])])}a("99af");var w={data:function(){return{cartData:{},final_total:0,user:{name:"",email:"",tel:"",address:""},message:""}},mounted:function(){this.getCart()},methods:{getCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua1993","/cart");this.$http(e).then((function(e){e.data.success?(t.cartData=e.data.data.carts,t.final_total=e.data.data.final_total):alert(e.data.message)})).catch((function(t){console.log(t.response)}))},clearCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua1993","/carts");this.$http.delete(e).then((function(e){e.data.success?(alert(e.data.message),t.getCart()):alert(e.data.message)})).catch((function(t){console.log(t.response)}))},updataCart:function(t){var e=this,a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua1993","/cart/").concat(this.cartData[t].id),c={product_id:this.cartData[t].id,qty:this.cartData[t].qty};this.$http.put(a,{data:c}).then((function(t){t.data.success?(alert(t.data.message),e.getCart()):alert(t.data.message)})).catch((function(t){console.log(t.response)}))},deleteItem:function(t){var e=this,a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua1993","/cart/").concat(t);this.$http.delete(a).then((function(t){t.data.success?(alert(t.data.message),e.getCart()):alert(t.data.message)})).catch((function(t){console.log(t.response)}))},onSubmit:function(){var t=this,e={user:this.user,message:this.message},a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua1993","/order");this.$http.post(a,{data:e}).then((function(e){e.data.success?(alert(e.data.message),t.$refs.order.resetForm(),t.getCart()):alert(e.data.message)})).catch((function(t){console.log(t.response)}))}}};w.render=V;e["default"]=w}}]);
//# sourceMappingURL=chunk-0c1925c2.48b29d90.js.map