(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f6afec0"],{2919:function(t,e,a){},4130:function(t,e,a){"use strict";a("2919")},"498a":function(t,e,a){"use strict";var n=a("23e7"),r=a("58a8").trim,i=a("c8d2");n({target:"String",proto:!0,forced:i("trim")},{trim:function(){return r(this)}})},a434:function(t,e,a){"use strict";var n=a("23e7"),r=a("23cb"),i=a("a691"),s=a("50c4"),o=a("7b0b"),l=a("65f0"),u=a("8418"),c=a("1dde"),d=a("ae40"),m=c("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,h=Math.min,v=9007199254740991,b="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!m||!p},{splice:function(t,e){var a,n,c,d,m,p,g=o(this),_=s(g.length),w=r(t,_),y=arguments.length;if(0===y?a=n=0:1===y?(a=0,n=_-w):(a=y-2,n=h(f(i(e),0),_-w)),_+a-n>v)throw TypeError(b);for(c=l(g,n),d=0;d<n;d++)m=w+d,m in g&&u(c,d,g[m]);if(c.length=n,a<n){for(d=w;d<_-n;d++)m=d+n,p=d+a,m in g?g[p]=g[m]:delete g[p];for(d=_;d>_-n+a;d--)delete g[d-1]}else if(a>n)for(d=_-n;d>w;d--)m=d+n-1,p=d+a-1,m in g?g[p]=g[m]:delete g[p];for(d=0;d<a;d++)g[d+w]=arguments[d+2];return g.length=_-n+a,c}})},c8d2:function(t,e,a){var n=a("d039"),r=a("5899"),i="​᠎";t.exports=function(t){return n((function(){return!!r[t]()||i[t]()!=i||r[t].name!==t}))}},e99b:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shopparameter"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v(" 首页 ")]),a("el-breadcrumb-item",[t._v("商品管理")]),a("el-breadcrumb-item",[t._v("分类参数")])],1),a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("el-alert",{attrs:{title:"注意：只允许为第三级分类设置相关参数！","show-icon":"",type:"warning"}}),a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[t._v("选择商品分类：")]),a("el-cascader",{attrs:{options:t.options,props:t.optionProps},on:{change:t.handleChange},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"动态参数",name:"dynamic"}},[a("el-button",{attrs:{type:"primary",disabled:t.disabled},on:{click:t.addParameter}},[t._v(" 添加参数 ")]),a("shop-dynamic",{attrs:{"attr-list":t.attrs,value:t.value,title:t.title},on:{upload:t.upload}})],1),a("el-tab-pane",{attrs:{label:"静态属性",name:"static"}},[a("el-button",{attrs:{type:"primary",disabled:t.disabled},on:{click:t.addParameter}},[t._v(" 添加属性 ")]),a("shop-static",{attrs:{value:t.value,"attr-list":t.attrs,title:t.title},on:{upload:t.upload}})],1)],1),a("shop-dialog",{attrs:{visible:t.visible,title:["添加",t.title],value:t.value},on:{"update:visible":function(e){t.visible=e},dialogFormVisible:function(e){t.visible=!1},close:function(e){t.visible=!1},upload:t.upload}})],1)],1)},r=[],i=(a("4160"),a("ac1f"),a("1276"),a("159b"),a("96cf"),a("1da1")),s=a("c40e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dynamic"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.attrs,border:!0,stripe:!0},on:{"expand-change":t.expandChange}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._l(e.row.attr_vals,(function(n,r){return a("el-tag",{key:r,attrs:{closable:"","disable-transitions":!1,type:"success"},on:{close:function(a){return t.upCategories(e.row,n)}}},[t._v(" "+t._s(n)+" ")])})),e.row.inputVisible?a("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:function(a){return t.handleInputConfirm(e.row)}},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.handleInputConfirm(e.row)}},model:{value:e.row.inputValue,callback:function(a){t.$set(e.row,"inputValue",a)},expression:"scope.row.inputValue"}}):a("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(a){return t.showInput(e.row)}}},[t._v(" + New Tag ")])]}}])}),a("el-table-column",{attrs:{label:"序号",prop:"id",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.$index+1)+" ")]}}])}),a("el-table-column",{attrs:{label:"商品名称",prop:"attr_name"}}),a("el-table-column",{attrs:{label:"操作",prop:"caozuo"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(a){return t.editorParameter(e.row.attr_name,e.row.attr_id)}}},[t._v(" 编辑 ")]),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(a){return t.deleteParameter(e.row.attr_id)}}},[t._v(" 删除 ")])]}}])})],1),a("shop-dialog",{attrs:{visible:t.visible,title:["修改",t.title],value:t.value,attr_name:t.attr_name,attr_id:t.attr_id},on:{"update:visible":function(e){t.visible=e},dialogFormVisible:function(e){t.visible=!1},close:function(e){t.visible=!1},upload:t.upload}})],1)},l=[],u=(a("c975"),a("a15b"),a("a434"),a("498a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("el-dialog",{attrs:{title:t.title[0]+t.title[1],visible:t.visible,"before-close":t.close},on:{"update:visible":function(e){t.visible=e},close:t.close}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules}},[a("el-form-item",{attrs:{label:t.title[1],prop:"name","hide-required-asterisk":!0,"label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.close}},[t._v(" 取 消 ")]),a("el-button",{attrs:{type:"primary"},on:{click:t.dialogFormVisible}},[t._v(" 确 定 ")])],1)],1)],1)}),c=[],d=(a("b0c0"),a("a9e3"),{name:"",components:{},props:{visible:{type:Boolean},attr_name:{type:String},title:{type:Array},attr_id:{type:[Number,String]},value:{type:Array}},data:function(){return{form:{name:this.attr_name},rules:{name:[{required:!0,message:"请输入参数名称",trigger:"blur"}]},formLabelWidth:"120px"}},computed:{},watch:{attr_name:function(t,e){this.form.name=t}},created:function(){},mounted:function(){},methods:{close:function(){this.$emit("close")},dialogFormVisible:function(){"修改"==this.title[0]?this.PutCategories():"添加"==this.title[0]&&this.addCategories()},PutCategories:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a="动态参数"==t.title[1]?"many":"only",n=t.value[t.value.length-1],e.next=4,Object(s["c"])(n,t.attr_id,{attr_name:t.form.name,attr_sel:a});case 4:r=e.sent,200==r.meta.status&&(t.$message({message:r.meta.msg,type:"success"}),t.upload(),t.$emit("dialogFormVisible"));case 6:case"end":return e.stop()}}),e)})))()},addCategories:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.value),a="动态参数"==t.title[1]?"many":"only",n=t.value[t.value.length-1],e.next=5,Object(s["d"])(n,{attr_name:t.form.name,attr_sel:a,attr_vals:""});case 5:r=e.sent,201==r.meta.status&&(t.$message({message:r.meta.msg,type:"success"}),t.upload(),t.$emit("dialogFormVisible"),t.form.name="");case 7:case"end":return e.stop()}}),e)})))()},upload:function(){this.$emit("upload")}}}),m=d,p=a("2877"),f=Object(p["a"])(m,u,c,!1,null,"065ab174",null),h=f.exports,v={name:"",components:{ShopDialog:h},props:{title:{type:String},attrList:{type:[Array]},value:{type:[Array]}},data:function(){return{attrs:[],visible:!1,attr_name:"",attr_id:""}},computed:{},watch:{attrList:function(){this.attrs=this.attrList}},created:function(){},mounted:function(){},methods:{expandChange:function(){},deleteParameter:function(t){var e=this,a=this.value[this.value.length-1];this.$confirm("你确定要删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(s["b"])(a,t);case 2:r=n.sent,200==r.meta.status&&(e.$message({message:r.meta.msg,type:"success"}),e.$emit("upload"));case 4:case"end":return n.stop()}}),n)})))).catch((function(){}))},upCategories:function(t,e){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,i,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=[],t.attr_vals.forEach((function(t){t!==e&&r.push(t)})),i=a.value[a.value.length-1],n.next=5,Object(s["a"])(i,t.attr_id,{attr_name:t.attr_name,attr_sel:t.attr_sel,attr_vals:r.join(",")});case 5:o=n.sent,t.attr_vals.splice(t.attr_vals.indexOf(e),1),200==o.meta.status&&a.$message({message:o.meta.msg,type:"success"});case 8:case"end":return n.stop()}}),n)})))()},showInput:function(t){var e=this;t.inputVisible=!0,this.$nextTick((function(){e.$refs.saveTagInput.$refs.input.focus()}))},handleInputConfirm:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(""!==t.inputValue.trim()){a.next=4;break}return t.inputValue="",t.inputVisible=!1,a.abrupt("return");case 4:return n=e.value[e.value.length-1],t.inputValue&&t.attr_vals.push(t.inputValue),t.inputVisible=!1,t.inputValue="",a.next=10,Object(s["a"])(n,t.attr_id,{attr_name:t.attr_name,attr_sel:t.attr_sel,attr_vals:t.attr_vals.join(",")});case 10:r=a.sent,200==r.meta.status&&e.$message({message:r.meta.msg,type:"success"});case 12:case"end":return a.stop()}}),a)})))()},editorParameter:function(t,e){this.visible=!0,this.attr_name=t,this.attr_id=e},upload:function(){this.$emit("upload")}}},b=v,g=(a("f9f8"),Object(p["a"])(b,o,l,!1,null,"3ca6a10a",null)),_=g.exports,w={name:"ShopParameter",components:{"shop-dynamic":_,"shop-static":_,"shop-dialog":h},props:{},data:function(){return{disabled:!0,options:[],value:[],optionProps:{expandTrigger:"hover",value:"cat_id",label:"cat_name",children:"children"},activeName:"dynamic",attrList:[],attrs:[],visible:!1,title:""}},computed:{},watch:{},created:function(){this.getCategories()},mounted:function(){},methods:{getCategories:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["i"])();case 2:a=e.sent,t.options=a.data;case 4:case"end":return e.stop()}}),e)})))()},getGoodAttributes:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.value[e.value.length-1],a.next=3,Object(s["j"])(n,{sel:t});case 3:r=a.sent,e.attrList=r.data,e.dispose();case 6:case"end":return a.stop()}}),a)})))()},handleChange:function(){this.disabled=!1,"dynamic"==this.activeName?(this.title="动态参数",this.getGoodAttributes("many")):"static"==this.activeName&&(this.title="静态属性",this.getGoodAttributes("only"))},handleClick:function(t){0==t.index&&0!==this.value.length?(this.title="动态参数",this.getGoodAttributes("many")):1==t.index&&0!==this.value.length&&(this.title="静态属性",this.getGoodAttributes("only"))},upload:function(){"dynamic"==this.activeName?this.getGoodAttributes("many"):"static"==this.activeName&&this.getGoodAttributes("only"),console.log(789)},dispose:function(){var t=this;this.attrs=[],this.attrList.forEach((function(e){t.attrs.push({attr_id:e.attr_id,attr_name:e.attr_name,attr_sel:e.attr_sel,attr_vals:""!==e.attr_vals?e.attr_vals.split(","):[],attr_write:e.attr_write,cat_id:e.cat_id,delete_time:e.delete_time,inputValue:"",inputVisible:!1})}))},addParameter:function(){this.visible=!0}}},y=w,x=(a("4130"),Object(p["a"])(y,n,r,!1,null,"347120df",null));e["default"]=x.exports},ec50:function(t,e,a){},f9f8:function(t,e,a){"use strict";a("ec50")}}]);
//# sourceMappingURL=chunk-5f6afec0.55cece67.js.map