(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e56225a"],{"28ef":function(t,e,a){"use strict";a("c72d")},6407:function(t,e,a){"use strict";var c=a("7a23"),n=Object(c["Q"])("data-v-37498a32");Object(c["w"])("data-v-37498a32");var i={"aria-label":"Page navigation example"},o={class:"pagination"},l=Object(c["h"])("span",{class:"page-link myMOUSE"}," Previous ",-1),s={class:"page-link myMOUSE"},d=Object(c["h"])("span",{class:"page-link myMOUSE"},"Next",-1);Object(c["u"])();var r=n((function(t,e,a,n,r,b){return Object(c["t"])(),Object(c["e"])("nav",i,[Object(c["h"])("ul",o,[Object(c["h"])("li",{class:["page-item",{disabled:!a.pagination.has_pre}],onClick:e[1]||(e[1]=function(){return b.clickPrev&&b.clickPrev.apply(b,arguments)})},[l],2),(Object(c["t"])(!0),Object(c["e"])(c["a"],null,Object(c["A"])(a.pagination.total_pages,(function(t,e){return Object(c["t"])(),Object(c["e"])("li",{key:e,class:["page-item",{active:a.pagination.current_page===t}],onClick:function(e){return b.clickPage(t)}},[Object(c["h"])("span",s,Object(c["F"])(t),1)],10,["onClick"])})),128)),Object(c["h"])("li",{class:["page-item",{disabled:!a.pagination.has_next}],onClick:e[2]||(e[2]=function(){return b.clickNext&&b.clickNext.apply(b,arguments)})},[d],2)])])})),b={data:function(){return{}},props:["page","pagination"],mounted:function(){},methods:{clickPage:function(t){this.$emit("refesh",t)},clickNext:function(){this.pagination.has_next&&this.$emit("refesh",this.page+1)},clickPrev:function(){this.pagination.has_pre&&this.$emit("refesh",this.page-1)}}};a("28ef");b.render=r,b.__scopeId="data-v-37498a32";e["a"]=b},c72d:function(t,e,a){},d4c1:function(t,e,a){"use strict";var c=a("7a23"),n={id:"deleteModel",ref:"deleteModel",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},i={class:"modal-dialog"},o={key:0,class:"modal-content border-0"},l={class:"modal-header bg-danger text-white"},s={id:"delProductModalLabel",class:"modal-title"},d=Object(c["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),r={class:"modal-body"},b=Object(c["g"])(" 是否刪除 "),u={class:"text-danger"},h=Object(c["g"])(" (刪除後將無法恢復)。 "),p={class:"modal-footer"},j=Object(c["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function O(t,e,a,O,f,m){return Object(c["t"])(),Object(c["e"])("div",n,[Object(c["h"])("div",i,["{}"!==JSON.stringify(a.delobject)?(Object(c["t"])(),Object(c["e"])("div",o,[Object(c["h"])("div",l,[Object(c["h"])("h5",s,[Object(c["h"])("span",null,"刪除"+Object(c["F"])(a.delobject.title),1)]),d]),Object(c["h"])("div",r,[b,Object(c["h"])("strong",u,Object(c["F"])(a.delobject.bodyInfo),1),h]),Object(c["h"])("div",p,[j,Object(c["h"])("button",{type:"button",class:"btn btn-danger",onClick:e[1]||(e[1]=function(){return m.clickDelete&&m.clickDelete.apply(m,arguments)})}," 確認刪除 ")])])):Object(c["f"])("",!0)])],512)}var f=a("7c2b"),m=a.n(f),g={data:function(){return{modal:""}},props:{delobject:{type:Object,default:function(){return{}}}},mounted:function(){this.modal=new m.a(this.$refs.deleteModel,{keyboard:!1})},methods:{open:function(){this.modal.show()},close:function(){this.modal.hide()},clickDelete:function(){this.$emit("clickDelete")}}};g.render=O;e["a"]=g},da25:function(t,e,a){"use strict";a.r(e);var c=a("7a23"),n={class:"container"},i={class:"table mt-4"},o=Object(c["h"])("thead",null,[Object(c["h"])("tr",null,[Object(c["h"])("th",null," 時間 "),Object(c["h"])("th",null,"Email"),Object(c["h"])("th",{class:"text-start"}," 購買項目 "),Object(c["h"])("th",{class:"text-start"}," 總價 "),Object(c["h"])("th",null," 是否付款 "),Object(c["h"])("th",null," 編輯 ")])],-1),l={class:"text-start"},s={class:"text-start"},d={class:"form-check form-switch"},r={key:0},b={key:1},u={class:"btn-group"};function h(t,e,a,h,p,j){var O=Object(c["C"])("pagination"),f=Object(c["C"])("orderInfo"),m=Object(c["C"])("deleteModel");return Object(c["t"])(),Object(c["e"])("div",n,[Object(c["h"])("table",i,[o,Object(c["h"])("tbody",null,[(Object(c["t"])(!0),Object(c["e"])(c["a"],null,Object(c["A"])(p.ordersData,(function(t){return Object(c["t"])(),Object(c["e"])("tr",{key:t.id},[Object(c["h"])("td",null,Object(c["F"])(j.date(t.create_at)),1),Object(c["h"])("td",null,Object(c["F"])(t.user.email),1),Object(c["h"])("td",l,[Object(c["h"])("ul",null,[(Object(c["t"])(!0),Object(c["e"])(c["a"],null,Object(c["A"])(t.products,(function(t,e){return Object(c["t"])(),Object(c["e"])("li",{key:e},Object(c["F"])(t.product.title)+" 數量："+Object(c["F"])(t.qty)+" "+Object(c["F"])(t.product.unit),1)})),128))])]),Object(c["h"])("td",s,Object(c["F"])(t.total),1),Object(c["h"])("td",null,[Object(c["h"])("div",d,[Object(c["O"])(Object(c["h"])("input",{class:"form-check-input",type:"checkbox",id:"switch".concat(t.id),"onUpdate:modelValue":function(e){return t.is_paid=e},onChange:function(e){return j.updateOrder(t)}},null,40,["id","onUpdate:modelValue","onChange"]),[[c["I"],t.is_paid]]),Object(c["h"])("label",{class:"form-check-label",for:"switch".concat(t.id)},[t.is_paid?(Object(c["t"])(),Object(c["e"])("span",r,"已付款")):(Object(c["t"])(),Object(c["e"])("span",b,"未付款"))],8,["for"])])]),Object(c["h"])("td",null,[Object(c["h"])("div",u,[Object(c["h"])("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:function(e){return j.callModal(t)}}," 瀏覽 ",8,["onClick"]),Object(c["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(e){return j.delModal(t.id,"訂單")}}," 刪除 ",8,["onClick"])])])])})),128))])]),Object(c["h"])(O,{pagination:p.pagination,page:p.page,onRefesh:j.getData},null,8,["pagination","page","onRefesh"]),Object(c["h"])(f,{ref:"productModal",orderinfo:p.info,onUpdateorderinfo:j.updateOrder},null,8,["orderinfo","onUpdateorderinfo"]),Object(c["h"])(m,{ref:"deleteModel",delobject:p.delobject,onClickDelete:j.deleteorder},null,8,["delobject","onClickDelete"])])}a("99af");var p=a("6407"),j={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},O={class:"modal-dialog modal-lg",role:"document"},f={class:"modal-content border-0"},m=Object(c["h"])("div",{class:"modal-header bg-dark text-white"},[Object(c["h"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(c["h"])("span",null,"訂單細節")]),Object(c["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),g={key:0,class:"modal-body"},v={class:"row"},k={class:"col-5"},y=Object(c["h"])("div",{class:"h2"},"用戶資訊",-1),M={class:"list-group list-group-flush"},x={class:"list-group-item"},$={class:"list-group-item"},w={class:"list-group-item"},C={class:"list-group-item"},F={class:"list-group-item"},D={class:"col-7"},_=Object(c["h"])("div",{class:"h2"},"訂單資訊",-1),P={class:"list-group list-group-flush"},I={class:"list-group-item"},S={class:"list-group-item"},U={class:"list-group-item"},L=Object(c["g"])("付款狀態 "),N={key:0},A={key:1},E=Object(c["h"])("div",{class:"h2"},"訂單產品",-1),J={class:"list-group list-group-flush"},q={class:"modal-footer"},R=Object(c["h"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1),V={key:0},Q={key:1};function z(t,e,a,n,i,o){return Object(c["t"])(),Object(c["e"])("div",j,[Object(c["h"])("div",O,[Object(c["h"])("div",f,[m,"{}"!==JSON.stringify(i.tempinfo)?(Object(c["t"])(),Object(c["e"])("div",g,[Object(c["h"])("div",v,[Object(c["h"])("div",k,[y,Object(c["h"])("ul",M,[Object(c["h"])("li",x,"客戶名稱 "+Object(c["F"])(i.tempinfo.user.address),1),Object(c["h"])("li",$,"email "+Object(c["F"])(i.tempinfo.user.email),1),Object(c["h"])("li",w,"郵寄地址 "+Object(c["F"])(i.tempinfo.user.address),1),Object(c["h"])("li",C,"聯絡電話 "+Object(c["F"])(i.tempinfo.user.tel),1),Object(c["h"])("li",F,"備註訊息 "+Object(c["F"])(i.tempinfo.message),1)])]),Object(c["h"])("div",D,[_,Object(c["h"])("ul",P,[Object(c["h"])("li",I,"訂單建立時間 "+Object(c["F"])(o.date(i.tempinfo.create_at)),1),Object(c["h"])("li",S,"訂單總價 "+Object(c["F"])(i.tempinfo.class="list-group-item"),1),Object(c["h"])("li",U,[L,i.tempinfo.is_paid?(Object(c["t"])(),Object(c["e"])("span",N,"已付款")):(Object(c["t"])(),Object(c["e"])("span",A,"未付款"))])]),E,Object(c["h"])("ul",J,[(Object(c["t"])(!0),Object(c["e"])(c["a"],null,Object(c["A"])(i.tempinfo.products,(function(t,e){return Object(c["t"])(),Object(c["e"])("li",{class:"list-group-item",key:e},Object(c["F"])(t.product.title)+" 數量："+Object(c["F"])(t.qty)+" "+Object(c["F"])(t.product.unit),1)})),128))])])]),Object(c["h"])("div",q,[R,Object(c["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=function(){return o.update&&o.update.apply(o,arguments)})},[i.tempinfo.is_paid?(Object(c["t"])(),Object(c["e"])("span",V,"取消付款")):(Object(c["t"])(),Object(c["e"])("span",Q,"確認付款"))])])])):Object(c["f"])("",!0)])])],512)}var B=a("7c2b"),G=a.n(B),H={props:{orderinfo:{type:Object,default:function(){return{}}}},data:function(){return{status:{},modal:"",tempinfo:{},isPaid:!1}},methods:{openModal:function(){this.modal.show()},hideModal:function(){this.modal.hide()},date:function(t){var e=new Date(1e3*t);return e.toLocaleDateString()},update:function(){this.tempinfo.is_paid=!this.tempinfo.is_paid,this.$emit("updateorderinfo",this.tempinfo)}},mounted:function(){this.modal=new G.a(this.$refs.modal)},watch:{orderinfo:function(){this.tempinfo=this.orderinfo}}};H.render=z;var K=H,T=a("d4c1"),W={data:function(){return{ordersData:{},pagination:{},page:1,editInfo:{},info:{},open:!1,delobject:{}}},components:{pagination:p["a"],orderInfo:K,deleteModel:T["a"]},created:function(){this.getData()},emits:{loadingpage:null},methods:{getData:function(t){var e=this;this.$emit("loadingpage",!0),void 0!==t&&(this.page=t);var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua1993","/admin/orders/?page=").concat(this.page);this.$http(a).then((function(t){t.data.success&&(e.ordersData=t.data.orders,e.pagination=t.data.pagination,e.page>e.pagination.total_pages&&(e.page-=1)),e.$emit("loadingpage",!1)})).catch((function(t){console.log(t.response)}))},callModal:function(t){this.info=t,this.open=!0,this.$refs.productModal.openModal()},delModal:function(t,e){this.delobject.delId=t,this.delobject.title=e,this.delobject.bodyInfo="刪除訂單".concat(t),this.$refs.deleteModel.open()},deleteorder:function(){var t=this;this.$emit("loadingpage",!0);var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua1993","/admin/order/").concat(this.delobject.delId);this.$http.delete(e).then((function(e){alert(e.data.message),e.data.success&&(t.$refs.deleteModel.close(),t.getData(t.page)),t.$emit("loadingpage",!1)})).catch((function(e){t.$emit("loadingpage",!1),console.log(e.response)}))},date:function(t){var e=new Date(1e3*t);return e.toLocaleDateString()},updateOrder:function(t){var e=this;this.$emit("loadingpage",!0);var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua1993","/admin/order/").concat(t.id);this.$http.put(a,{data:t}).then((function(t){t.data.success?(alert(t.data.message),e.getData(e.page)):alert(t.data.message),e.$emit("loadingpage",!1)})).catch((function(t){e.$emit("loadingpage",!1),console.log(t)}))}}};W.render=h;e["default"]=W}}]);
//# sourceMappingURL=chunk-4e56225a.b7a2f00b.js.map