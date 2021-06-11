webpackJsonp([1],{"/Aas":function(t,s){},L3HI:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("header",[e("nav",{staticClass:"navbar is-primary",attrs:{role:"navigation","aria-label":"main navigation"}},[e("div",{staticClass:"navbar-brand"},[e("div",{staticClass:"hero-body"},[e("h1",{staticClass:"title"},[t._v(t._s(t.title))])])])]),t._v(" "),e("nav",{staticClass:"panel"},[e("p",{staticClass:"panel-tabs"},[e("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),e("router-link",{attrs:{to:"howto"}},[t._v("How to")])],1)])]),t._v(" "),e("router-view"),t._v(" "),e("footer",{staticClass:"footer"},[e("div",{staticClass:"content has-text-centered"},[e("p",[e("strong",[t._v(t._s(t.title))]),t._v(" by "),e("a",{attrs:{href:"https://kaisportfolio.work/"}},[t._v("Kai Adachi")])])])])],1)},staticRenderFns:[]};var i=e("VU/8")({name:"App",data:function(){return{title:"松さん"}}},n,!1,function(t){e("L3HI")},null,null).exports,o=e("/ocq"),r=e("MICi"),c=e.n(r),l=e("mtWM"),v=e.n(l),u={delimiters:["[[","]]"],data:function(){return{results:[],cssSelector:"",formData:{kw:"",pages:null,cssSelectors:[]},processing:!1}},computed:{notNumber:function(){var t=Number(this.formData.pages);return!!c()(t)||t>3}},methods:{submit:function(){var t=this;this.startProcessing(),v.a.post("/api",this.formData).then(function(s){console.log(s),t.results=s.data,t.endProcessing()}).catch(function(s){console.log(s),t.endProcessing()})},downloadCSV:function(){var t="\ufeff";this.results.forEach(function(s){s.forEach(function(s){t+=s+","}),t+="\n"});var s=new Blob([t],{type:"text/csv"}),e=document.createElement("a");e.href=window.URL.createObjectURL(s),e.download="Result.csv",e.click()},addCss:function(){var t=this.cssSelector;this.formData.cssSelectors.push(t),this.cssSelector=""},startProcessing:function(){this.processing=!0},endProcessing:function(){this.processing=!1},isProcessing:function(){return this.processing}}},p={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("form",{staticClass:"box",on:{submit:function(s){return s.preventDefault(),t.submit.apply(null,arguments)}}},[e("span",{staticClass:"tag"},[t._v("入力情報")]),t._v(" "),e("div",{staticClass:"box"},[e("div",{staticClass:"field"},[e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.kw,expression:"formData.kw"}],staticClass:"input is-primary",attrs:{type:"text",placeholder:"KW"},domProps:{value:t.formData.kw},on:{input:function(s){s.target.composing||t.$set(t.formData,"kw",s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"field"},[e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.formData.pages,expression:"formData.pages",modifiers:{number:!0}}],staticClass:"input is-primary",attrs:{type:"text",placeholder:"ページ数"},domProps:{value:t.formData.pages},on:{input:function(s){s.target.composing||t.$set(t.formData,"pages",t._n(s.target.value))},blur:function(s){return t.$forceUpdate()}}}),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:t.notNumber,expression:"notNumber"}]},[t._v("数値を入力してください。最大取得可能ページは3ページまでです。")])])]),t._v(" "),e("div",{staticClass:"field"},[e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.cssSelector,expression:"cssSelector"}],staticClass:"input is-primary",attrs:{type:"text",placeholder:"CSSセレクタ"},domProps:{value:t.cssSelector},on:{input:function(s){s.target.composing||(t.cssSelector=s.target.value)}}})])]),t._v(" "),e("p",[t._v(t._s(t.cssSelector))]),t._v(" "),e("button",{staticClass:"button is-primary is-outlined is-small",on:{click:function(s){return s.preventDefault(),t.addCss()}}},[t._v("CSSセレクタを追加")])]),t._v(" "),e("span",{staticClass:"tag"},[t._v("出力情報")]),t._v(" "),e("div",{staticClass:"box"},[e("p",[t._v("KW: "),e("strong",[t._v(t._s(t.formData.kw))])]),t._v(" "),e("p",[t._v("ページ数: "),e("strong",[t._v(t._s(t.formData.pages))])]),t._v(" "),e("p",[t._v("CSSセレクタ: "),e("strong",[t._v(t._s(t.formData.cssSelectors))])])]),t._v(" "),e("div",{staticClass:"has-text-centered go-crawl"},[e("input",{staticClass:"button is-success is-rounded is-medium",attrs:{disabled:t.isProcessing(),type:"submit",value:"Go Crawl！"}}),t._v(" "),t.isProcessing()?e("p",{staticClass:"is-text"},[t._v("\n        実行中です..\n      ")]):t._e()]),t._v(" "),e("div",{staticClass:"box"},[e("h2",[t._v("Results")]),t._v(" "),e("ul",t._l(t.results,function(s){return e("li",[t._v(t._s(s))])}),0)]),t._v(" "),e("button",{staticClass:"button is-primary is-outlined",on:{click:function(s){return s.preventDefault(),t.downloadCSV.apply(null,arguments)}}},[t._m(0),t._v("\n      csvダウンロード\n    ")])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-download"})])}]};var d=e("VU/8")(u,p,!1,function(t){e("On+H")},"data-v-7d298849",null).exports,_={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"box"},[e("div",{staticClass:"notification is-primary"},[e("p",[t._v("\n      1. 入力情報にGoogleにて検索したいKWと、取得したいページ数、CSSセレクタを書き込む\n    ")]),t._v(" "),e("p",[t._v("\n      例えば、KW: 松の育て方, ページ数: 1, CSSセレクタ: h1 とすれば「松の育て方」で検索した上位10件のh1情報とURLが取得される\n    ")]),t._v(" "),e("p",[t._v("URLとタイトルはデフォルトで取得する")]),t._v(" "),e("p",[t._v("CSSセレクタはh1,h2など複数指定可能")]),t._v(" "),e("p",[t._v("ページは負荷を考慮して3ページ、最大30件までとしている")])]),t._v(" "),e("div",{staticClass:"notification is-primary"},[e("p",[t._v("2. 出力情報を確認し、Go Crawlボタンを押す")]),t._v(" "),e("p",[t._v("入力したKWとページ数は自動で出力項目へ反映される")]),t._v(" "),e("p",[t._v("CSSセレクタに関しては入力後、「CSSセレクタに追加」ボタンにて手動で追加")])]),t._v(" "),e("div",{staticClass:"notification is-primary"},[e("p",[t._v("3. Resultsに結果が吐き出されるので、良さそうであればCSVダウンロードボタンよりダウンロードを行う。")])]),t._v(" "),e("div",{staticClass:"notification is-warning"},[e("p",[t._v("※注意点")]),t._v(" "),e("p",[t._v("CSSセレクタを検証ツールなどでコピペしてくるとき、nth-childなどchild要素を持ったものは、nth-of-typeに変更すること。")]),t._v(" "),e("p",[t._v("例: nth-child(3) → nth-of-type(3)")])])])}]},m=e("VU/8")(null,_,!1,null,null,null).exports;a.a.use(o.a);var f=new o.a({mode:"history",routes:[{path:"/",name:"Home",component:d},{path:"/howto",name:"Howto",component:m}]});e("cwFx"),e("/Aas");a.a.config.productionTip=!1,new a.a({el:"#app",router:f,components:{App:i},template:"<App/>"})},"On+H":function(t,s){},cwFx:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.b3e7ec21edb177a1ab1d.js.map