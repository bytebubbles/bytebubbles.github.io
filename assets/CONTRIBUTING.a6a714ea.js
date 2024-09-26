import{T as t}from"./component.9b32f023.js";import{_ as i,d as l,r as a,o as n,c as s}from"./site.b6fa4b6e.js";const o=l({props:{docType:String},components:{TdesignDoc:t},provide:{info:{spline:"explain",toc:!0,title:"\u8D21\u732E\u6307\u5357",description:"",isComponent:!1,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686003,componentName:null,docMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#\u9879\u76EE\u5730\u5740">\u9879\u76EE\u5730\u5740</a><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#\u5F00\u53D1\u89C4\u8303">\u5F00\u53D1\u89C4\u8303</a></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#\u5171\u5EFA\u6D41\u7A0B">\u5171\u5EFA\u6D41\u7A0B</a></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#\u9A8C\u6536\u6807\u51C6-\u6682\u5B9A">\u9A8C\u6536\u6807\u51C6(\u6682\u5B9A)</a></li></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#sdk\u4F9D\u8D56\u7248\u672C">SDK\u4F9D\u8D56\u7248\u672C</a></li></ol></nav><h2 id="\u9879\u76EE\u5730\u5740">\u9879\u76EE\u5730\u5740 <a class="header-anchor" href="#\u9879\u76EE\u5730\u5740"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter" target="_blank" rel="noopener noreferrer">TDesign-Flutter</a></p>
<p>\u7EC4\u4EF6\u9879\u76EE\uFF1Atdesign-component</p>
<p>\u5B98\u7F51\u9879\u76EE\uFF1Atdesign-site</p>
<h3 id="\u5F00\u53D1\u89C4\u8303">\u5F00\u53D1\u89C4\u8303 <a class="header-anchor" href="#\u5F00\u53D1\u89C4\u8303"></a></h3>
<ul>
<li>\u7EC4\u4EF6\u547D\u540D\u89C4\u8303\uFF1A\u4EE5TD\u4E3A\u524D\u7F00\uFF0C\u7EC4\u4EF6\u540D\u79F0\u3001API\u540D\u79F0\u53C2\u8003TDesign\u73B0\u6709\u7EC4\u4EF6\u548CAPI\u547D\u540D\uFF0C\u53EF\u4EE5\u6839\u636Eflutter\u539F\u751FWidget\u7684\u7279\u70B9\u8FDB\u884C\u4FEE\u6539\u3002\u7EC4\u4EF6API\u4EE5\u6EE1\u8DB3\u8BBE\u8BA1\u8981\u6C42\u548C\u4F7F\u7528\u4E3A\u51C6\uFF0C\u53EF\u6839\u636Eflutter\u7279\u70B9\u505A\u7CBE\u7B80\u6216\u5B9A\u5236\u3002</li>
<li>\u7EC4\u4EF6\u5E93\u7528\u5230\u7684\u6240\u6709\u8272\u503C\u3001\u5706\u89D2\u3001\u5B57\u4F53\u5B57\u53F7\u7B49\u6837\u5F0F\u5C5E\u6027\u9700\u5168\u90E8\u5B9A\u4E49\u5728\u4E3B\u9898\u4E2D\u3002</li>
<li>\u4EE3\u7801\u89C4\u8303\u9075\u5FAA\u817E\u8BAFDart\u4EE3\u7801\u89C4\u8303\u3002</li>
<li>\u5BF9\u4E8E\u7CFB\u7EDF\u539F\u6709\u7EC4\u4EF6\uFF0C\u5982Text,Image\u7B49\uFF0C\u5E94\u517C\u5BB9\u7CFB\u7EDF\u539F\u7EC4\u4EF6\u529F\u80FD\uFF0C\u53EA\u80FD\u6269\u5C55\uFF0C\u4E0D\u80FD\u9609\u5272\uFF0C\u4EE5\u514D\u4E1A\u52A1\u9700\u8981\u4F7F\u7528\u7CFB\u7EDF\u529F\u80FD\u65F6\uFF0C\u5FC5\u987B\u653E\u5F03TDesign\u63A7\u4EF6\u3002</li>
<li>\u793A\u4F8B\u9875\u9762\u5C3D\u91CF\u4F7F\u7528ExamplePage+ExampleModule+ExampleItem\u7EC4\u5408\uFF0C\u6309\u7167\u793A\u4F8B\u7A3F\u7684\u5E03\u5C40\u5B9E\u73B0\uFF1B\u9875\u9762\u5199\u5B8C\u540E\uFF0C\u5728main.dart\u4E2D\u4FEE\u6539exampleMap\u5BF9\u5E94\u7EC4\u4EF6\u7684isTodo\u5C5E\u6027\u5373\u53EF\u3002</li>
<li>\u7EC4\u4EF6API\u548C\u6F14\u793A\u4EE3\u7801\uFF0C\u8BF7\u53C2\u8003<code>demo_tool/README.md</code>\u6587\u4EF6\u3002</li>
<li>\u7EC4\u4EF6\u5185\u90E8\u7684\u56FA\u5B9A\u6587\u6848,\u90FD\u5E94\u8BE5\u62BD\u79BB\u5230TDResourceDelegate\u4E2D\u7EDF\u4E00\u7BA1\u7406,\u65B9\u4FBF\u4E1A\u52A1\u8FDB\u884C\u56FD\u9645\u5316\u9002\u914D</li>
</ul>
<h3 id="\u5171\u5EFA\u6D41\u7A0B">\u5171\u5EFA\u6D41\u7A0B <a class="header-anchor" href="#\u5171\u5EFA\u6D41\u7A0B"></a></h3>
<ul>
<li>\u62C9\u53D6\u5F00\u53D1\u5206\u652F\uFF1A\u5EFA\u8BAE\u5C06\u9879\u76EEfork\u5230\u81EA\u5DF1github,\u6BCF\u4E2A\u7EC4\u4EF6\u4ECEmain\u5206\u652F\u62C9\u53D6\u5BF9\u5E94\u5F00\u53D1\u5206\u652F\uFF0C\u547D\u540D\u4E3Afeature/\u7EC4\u4EF6\u540D\u5C0F\u5199_\u4E0B\u5212\u7EBF</li>
<li>\u5B9E\u73B0\u7EC4\u4EF6\uFF1A\u7EC4\u4EF6\u4E2D\u7684\u5C5E\u6027\u8BF7\u5C3D\u91CF\u4F7F\u7528TDTheme\u63D0\u4F9B\u7684\u516C\u5171\u5C5E\u6027\uFF0C\u4F7F\u7528\u65B9\u6CD5\u53C2\u8003'\u4E3B\u9898-\u989C\u8272'\u9875\u9762</li>
<li>\u7F16\u5199\u793A\u4F8B\u9875\uFF1A\u793A\u4F8B\u9875\u8BF7\u5C3D\u91CF\u4F7F\u7528ExamplePage+ExampleModule+ExampleItem\u7EC4\u5408\uFF0C\u53C2\u8003\u793A\u4F8B\u7A3F\u5E03\u5C40\u5B9E\u73B0\u3002</li>
<li>\u6F14\u793A\u4EE3\u7801\uFF1A\u6BCF\u4E2A\u7EC4\u4EF6\u793A\u4F8B\uFF0C\u5C3D\u91CF\u5C06\u539F\u5B50\u6027\u4EE3\u7801\u63D0\u53D6\u6210\u72EC\u7ACB\u65B9\u6CD5\uFF0C\u5E76\u6DFB\u52A0@Demo\u6CE8\u89E3\uFF0C\u65B9\u4FBF\u751F\u6210\u6F14\u793A\u4EE3\u7801\u3002\u5176\u4E2D\uFF0C@Demo\u6CE8\u89E3\u7684'group'\u53C2\u6570\u9700\u4E0EExamplePage\u7684'exampleCodeGroup'\u53C2\u6570\u4E00\u81F4\u3002\u5199\u6CD5\u8BF7\u53C2\u8003'\u5706\u89D2-\u57FA\u7840'\u9875\u3002</li>
<li>flutterAOP: \u5982\u679C\u53EF\u4EE5\uFF0C\u5EFA\u8BAE\u5207\u6362\u5230flutter 3.10.0\u5206\u652F\uFF0C\u5E76\u6DFB\u52A0AOP\u8865\u4E01\uFF0C\u751F\u6210\u6F14\u793A\u4EE3\u7801\u3002</li>
<li>API\u6587\u6863\uFF1AAPI\u6587\u6863\u7531\u5DE5\u5177\u7EDF\u4E00\u751F\u6210\uFF0C\u8BF7\u5C3D\u91CF\u6DFB\u52A0\u5B57\u6BB5\u7684\u8BE6\u7EC6\u6CE8\u91CA\uFF0C\u5E76\u5C06\u6784\u9020\u65B9\u6CD5\u4F5C\u4E3A\u7C7B\u540D\u4E0B\u7684\u7B2C\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u5B57\u6BB5\u653E\u5728\u6784\u9020\u65B9\u6CD5\u4E4B\u4E0B\uFF0C\u5177\u4F53\u5199\u6CD5\u8BF7\u53C2\u8003TDText\u3002</li>
<li>\u4EE3\u7801\u89C4\u8303\uFF1A\u5F00\u53D1\u5B8C\u6210\u540E\uFF0C\u8BF7\u68C0\u67E5'Dart Analysis'\u4E0B\u7684\u63D0\u793A\uFF0C\u5C3D\u91CF\u7B26\u5408\u4EE3\u7801\u89C4\u8303\u3002</li>
<li>\u5355\u5143\u6D4B\u8BD5\uFF1A\u6DFB\u52A0\u672A\u5728\u793A\u4F8B\u7A3F\u4E2D\u4F53\u73B0\uFF0C\u4F46\u6709\u5FC5\u8981\u9A8C\u8BC1\u7684\u7EC4\u4EF6\u6837\u5F0F\uFF0C\u8BF7\u6DFB\u52A0\u5230ExamplePage\u7684'test'\u53C2\u6570\u4E2D\u3002</li>
<li>\u5408\u5E76\u4EE3\u7801: \u4E0A\u8FF0\u68C0\u67E5\u5B8C\u6210\u540E\uFF0C\u8BF7\u53D1\u8D77pr\uFF0C\u5408\u5E76\u5230dev\u5206\u652F\uFF0C\u5E76\u540C\u6B65\u9879\u76EE\u7EC4\u9A8C\u6536\u3002</li>
</ul>
<h3 id="\u9A8C\u6536\u6807\u51C6-\u6682\u5B9A">\u9A8C\u6536\u6807\u51C6(\u6682\u5B9A) <a class="header-anchor" href="#\u9A8C\u6536\u6807\u51C6-\u6682\u5B9A"></a></h3>
<ul>
<li>\u79FB\u52A8\u7AEF\u793A\u4F8B\u9875\u9762\u5C55\u793A(\u89C6\u89C9\u9A8C\u6536)</li>
<li>\u5B9E\u9645\u4F7F\u7528\u5C55\u793A(\u529F\u80FD\u9A8C\u6536,\u6682\u4E0D\u9700\u5904\u7406)</li>
<li>\u4EE3\u7801\u89C4\u8303(\u517C\u5BB9\u6307\u5B9A\u7684\u6700\u4F4E\u7248\u672CSDK)</li>
<li>API\u9A8C\u6536</li>
</ul>
<h2 id="sdk\u4F9D\u8D56\u7248\u672C">SDK\u4F9D\u8D56\u7248\u672C <a class="header-anchor" href="#sdk\u4F9D\u8D56\u7248\u672C"></a></h2>
<p>dart: &quot;&gt;=2.19.0 &lt;4.0.0&quot;</p>
<p>flutter: &quot;&gt;=3.7.0&quot;</p>
`,demoMd:"<td-doc-empty></td-doc-empty>",apiMd:"<td-doc-empty></td-doc-empty>",designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function d(c,r,p,m,_,g){const e=a("tdesign-doc");return n(),s(e)}var f=i(o,[["render",d]]);export{f as default};
