(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65e63ccd"],{"036c":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"userList"},[r("el-breadcrumb",{staticClass:"userlist",attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),r("el-breadcrumb-item",[t._v("用户管理")]),r("el-breadcrumb-item",[t._v("用户列表")])],1),r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"nav"},[r("div",{staticClass:"search-box"},[r("el-input",{staticClass:"search",attrs:{placeholder:"请输入内容"},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}}),r("el-button",{staticClass:"button",attrs:{icon:"el-icon-search"},on:{click:t.onSearch}})],1),r("el-button",{staticClass:"addButton",attrs:{type:"primary"},on:{click:t.onShow}},[t._v("添加用户")]),r("div",{staticClass:"Dialog"},[r("AddDialog",{attrs:{show:t.show},on:{"update:show":function(e){t.show=e}}})],1)],1),r("div",{staticClass:"data"},[r("Userlist",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{userlist:t.list,"element-loading-text":"拼命加载中"}})],1),r("div",{staticClass:"page"},[r("el-pagination",{attrs:{"current-page":t.page,"page-sizes":[2,5,10],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:t.total,disabled:t.loading},on:{"current-change":t.handleCurrentChange,"size-change":t.sizeChange}})],1)])],1)},a=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"userlist-box"},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.userlist,border:""}},[r("el-table-column",{attrs:{prop:"index",label:"#",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.$index+1)+" ")]}}])}),r("el-table-column",{attrs:{prop:"username",label:"姓名",width:"170"}}),r("el-table-column",{attrs:{prop:"email",label:"邮箱",width:"170"}}),r("el-table-column",{attrs:{prop:"mobile",label:"电话",width:"170"}}),r("el-table-column",{attrs:{prop:"role_name",label:"角色",width:"170"}}),r("el-table-column",{attrs:{prop:"address",label:"状态",width:"170"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949",disabled:e.row.statusDisabled},on:{change:function(r){return t.onStatusChange(e.row)}},model:{value:e.row.mg_state,callback:function(r){t.$set(e.row,"mg_state",r)},expression:"scope.row.mg_state"}})]}}])}),r("el-table-column",{attrs:{prop:"address",label:"操作"}},[r("el-row",{staticClass:"state"},[r("el-button",{staticClass:"states el-icon-edit",attrs:{type:"primary",size:"mini"}}),r("el-button",{staticClass:"states el-icon-delete",attrs:{type:"danger",size:"mini"},on:{click:t.onDelete}}),r("el-button",{staticClass:"states el-icon-s-tools",attrs:{type:"warning",size:"mini"}})],1)],1)],1)],1)},i=[],s=(r("d3b7"),r("25f0"),r("99af"),r("5829")),l=function(t){return Object(s["a"])({method:"GET",url:"/users",params:t})},c=function(t,e){return Object(s["a"])({method:"PUT",url:"users/".concat(t,"/state/").concat(e),params:{uId:t,type:e}})},u={name:"userlist-box",props:{userlist:{type:[String,Array,Object]}},data:function(){return{uId:0}},created:function(){},methods:{onStatusChange:function(t){var e=this;console.log(t),c(t.id.toString(),t.mg_state).then((function(r){console.log(r),1==t.mg_state&&e.$message({message:"用户状态已开启",type:"success"}),0==t.mg_state&&e.$message({message:"用户状态已关闭",type:"success"})}))},onDelete:function(){}}},d=u,f=(r("810d"),r("2877")),p=Object(f["a"])(d,o,i,!1,null,"5e3297b4",null),m=p.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"addDialog"},[r("el-dialog",{staticClass:"dialog",staticStyle:{width:"700px"},attrs:{title:"添加用户",visible:t.addDialogVisible},on:{"update:visible":function(e){t.addDialogVisible=e}}},[r("el-form",{staticStyle:{width:"300px"},attrs:{model:t.form,rules:t.Rules,size:"medium"}},[r("el-form-item",{staticClass:"dialogForm",attrs:{label:"新用户","label-width":t.formLabelWidth,prop:"name"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),r("el-form-item",{staticClass:"dialogForm",attrs:{label:"密码","label-width":t.formLabelWidth,prop:"password"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),r("el-form-item",{staticClass:"dialogForm",attrs:{label:"邮箱","label-width":t.formLabelWidth,prop:"email"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),r("el-form-item",{staticClass:"dialogForm",attrs:{label:"手机","label-width":t.formLabelWidth,prop:"mobile"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:t.onAddDialog}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v("确 定")])],1)],1)],1)},g=[],h=(r("a9e3"),r("8ba4"),{name:"AddDing",data:function(){var t=function(t,e,r){var n=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;if(!e)return r(new Error("邮箱不能为空"));setTimeout((function(){n.test(e)?r():r(new Error("请输入正确的邮箱格式"))}),100)},e=function(t,e,r){var n=/^1[3|4|5|7|8][0-9]{9}$/;if(!e)return r(new Error("电话号码不能为空"));setTimeout((function(){Number.isInteger(+e)?n.test(e)?r():r(new Error("电话号码格式不正确")):r(new Error("请输入数字值"))}),100)};return{form:{name:"",password:"",email:"",mobile:"",delivery:!1,type:[],resource:"",desc:""},formLabelWidth:"60px",Rules:{name:[{required:!0,message:"请输入账号名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:12,message:"长度在 6 到 12 个字符",trigger:"blur"}],email:[{required:!0,trigger:"blur",validator:t}],mobile:[{validator:e,required:!0,trigger:"blur"}]}}},props:{show:{type:Boolean,default:!1}},computed:{addDialogVisible:{get:function(){return this.show},set:function(t){this.$emit("update:show",t)}}},watch:{},methods:{onAddDialog:function(t,e){this.addDialogVisible=!1,this.$refs[t].resetFields()},submitForm:function(){console.log(this.form)}}}),v=h,w=(r("66cd"),Object(f["a"])(v,b,g,!1,null,"4fb0b3c6",null)),y=w.exports,x={name:"UserList",components:{Userlist:m,AddDialog:y},data:function(){return{page:1,pageSize:2,total:null,list:[],query:"",loading:!0,show:!1}},computed:{},watch:{},created:function(){this.onUserList()},mounted:function(){},methods:{onUserList:function(){var t=this;this.loading=!0;var e={pagenum:this.page,pagesize:this.pageSize,query:this.query};l(e).then((function(e){t.list=e.data.users,t.total=e.data.total,t.$message({message:"成功获取到用户信息",type:"success"}),t.loading=!1}))},sizeChange:function(t){this.pageSize=t,this.onUserList()},handleCurrentChange:function(t){this.page=t,this.onUserList()},onSearch:function(){this.onUserList()},onShow:function(){this.show=!0,console.log(123)}}},_=x,C=(r("178d"),Object(f["a"])(_,n,a,!1,null,"3dc349c0",null));e["default"]=C.exports},"128c":function(t,e,r){},"178d":function(t,e,r){"use strict";r("4ac1")},"1be4":function(t,e,r){var n=r("d066");t.exports=n("document","documentElement")},"1dde":function(t,e,r){var n=r("d039"),a=r("b622"),o=r("2d00"),i=a("species");t.exports=function(t){return o>=51||!n((function(){var e=[],r=e.constructor={};return r[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"25f0":function(t,e,r){"use strict";var n=r("6eeb"),a=r("825a"),o=r("d039"),i=r("ad6d"),s="toString",l=RegExp.prototype,c=l[s],u=o((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),d=c.name!=s;(u||d)&&n(RegExp.prototype,s,(function(){var t=a(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in l)?i.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},"2d00":function(t,e,r){var n,a,o=r("da84"),i=r("342f"),s=o.process,l=s&&s.versions,c=l&&l.v8;c?(n=c.split("."),a=n[0]+n[1]):i&&(n=i.match(/Edge\/(\d+)/),(!n||n[1]>=74)&&(n=i.match(/Chrome\/(\d+)/),n&&(a=n[1]))),t.exports=a&&+a},"342f":function(t,e,r){var n=r("d066");t.exports=n("navigator","userAgent")||""},"354e":function(t,e,r){},"37e8":function(t,e,r){var n=r("83ab"),a=r("9bf2"),o=r("825a"),i=r("df75");t.exports=n?Object.defineProperties:function(t,e){o(t);var r,n=i(e),s=n.length,l=0;while(s>l)a.f(t,r=n[l++],e[r]);return t}},"3bbe":function(t,e,r){var n=r("861d");t.exports=function(t){if(!n(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},"4ac1":function(t,e,r){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),a=r("5899"),o="["+a+"]",i=RegExp("^"+o+o+"*"),s=RegExp(o+o+"*$"),l=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(i,"")),2&t&&(r=r.replace(s,"")),r}};t.exports={start:l(1),end:l(2),trim:l(3)}},"5e89":function(t,e,r){var n=r("861d"),a=Math.floor;t.exports=function(t){return!n(t)&&isFinite(t)&&a(t)===t}},"65f0":function(t,e,r){var n=r("861d"),a=r("e8b5"),o=r("b622"),i=o("species");t.exports=function(t,e){var r;return a(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?n(r)&&(r=r[i],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"66cd":function(t,e,r){"use strict";r("354e")},7156:function(t,e,r){var n=r("861d"),a=r("d2bb");t.exports=function(t,e,r){var o,i;return a&&"function"==typeof(o=e.constructor)&&o!==r&&n(i=o.prototype)&&i!==r.prototype&&a(t,i),t}},"7b0b":function(t,e,r){var n=r("1d80");t.exports=function(t){return Object(n(t))}},"7c73":function(t,e,r){var n,a=r("825a"),o=r("37e8"),i=r("7839"),s=r("d012"),l=r("1be4"),c=r("cc12"),u=r("f772"),d=">",f="<",p="prototype",m="script",b=u("IE_PROTO"),g=function(){},h=function(t){return f+m+d+t+f+"/"+m+d},v=function(t){t.write(h("")),t.close();var e=t.parentWindow.Object;return t=null,e},w=function(){var t,e=c("iframe"),r="java"+m+":";return e.style.display="none",l.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(h("document.F=Object")),t.close(),t.F},y=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(e){}y=n?v(n):w();var t=i.length;while(t--)delete y[p][i[t]];return y()};s[b]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(g[p]=a(t),r=new g,g[p]=null,r[b]=t):r=y(),void 0===e?r:o(r,e)}},"810d":function(t,e,r){"use strict";r("128c")},8418:function(t,e,r){"use strict";var n=r("c04e"),a=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var i=n(e);i in t?a.f(t,i,o(0,r)):t[i]=r}},"8ba4":function(t,e,r){var n=r("23e7"),a=r("5e89");n({target:"Number",stat:!0},{isInteger:a})},"99af":function(t,e,r){"use strict";var n=r("23e7"),a=r("d039"),o=r("e8b5"),i=r("861d"),s=r("7b0b"),l=r("50c4"),c=r("8418"),u=r("65f0"),d=r("1dde"),f=r("b622"),p=r("2d00"),m=f("isConcatSpreadable"),b=9007199254740991,g="Maximum allowed index exceeded",h=p>=51||!a((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),v=d("concat"),w=function(t){if(!i(t))return!1;var e=t[m];return void 0!==e?!!e:o(t)},y=!h||!v;n({target:"Array",proto:!0,forced:y},{concat:function(t){var e,r,n,a,o,i=s(this),d=u(i,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?i:arguments[e],w(o)){if(a=l(o.length),f+a>b)throw TypeError(g);for(r=0;r<a;r++,f++)r in o&&c(d,f,o[r])}else{if(f>=b)throw TypeError(g);c(d,f++,o)}return d.length=f,d}})},a9e3:function(t,e,r){"use strict";var n=r("83ab"),a=r("da84"),o=r("94ca"),i=r("6eeb"),s=r("5135"),l=r("c6b6"),c=r("7156"),u=r("c04e"),d=r("d039"),f=r("7c73"),p=r("241c").f,m=r("06cf").f,b=r("9bf2").f,g=r("58a8").trim,h="Number",v=a[h],w=v.prototype,y=l(f(w))==h,x=function(t){var e,r,n,a,o,i,s,l,c=u(t,!1);if("string"==typeof c&&c.length>2)if(c=g(c),e=c.charCodeAt(0),43===e||45===e){if(r=c.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+c}for(o=c.slice(2),i=o.length,s=0;s<i;s++)if(l=o.charCodeAt(s),l<48||l>a)return NaN;return parseInt(o,n)}return+c};if(o(h,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var _,C=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof C&&(y?d((function(){w.valueOf.call(r)})):l(r)!=h)?c(new v(x(e)),r,C):x(e)},E=n?p(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;E.length>A;A++)s(v,_=E[A])&&!s(C,_)&&b(C,_,m(v,_));C.prototype=w,w.constructor=C,i(a,h,C)}},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d2bb:function(t,e,r){var n=r("825a"),a=r("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(r,[]),e=r instanceof Array}catch(o){}return function(r,o){return n(r),a(o),e?t.call(r,o):r.__proto__=o,r}}():void 0)},df75:function(t,e,r){var n=r("ca84"),a=r("7839");t.exports=Object.keys||function(t){return n(t,a)}},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-65e63ccd.742adf51.js.map