import{T as n}from"./component.0f8980d6.js";import{_ as e,d,r as a,o as s,c as o}from"./site.4473ad53.js";const r=d({props:{docType:String},components:{TdesignDoc:n},provide:{info:{spline:"base",toc:!0,title:"Empty \u7A7A\u72B6\u6001",description:"\u7528\u4E8E\u7A7A\u72B6\u6001\u65F6\u7684\u5360\u4F4D\u63D0\u793A\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686018,componentName:"empty",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_empty_page.dart" target="_blank" rel="noopener noreferrer">td_empty_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u56FE\u6807\u7A7A\u72B6\u6001</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconEmpty(BuildContext context) {
    return const TDEmpty(
      type: TDEmptyType.plain,
      emptyText: '\u63CF\u8FF0\u6587\u5B57',
    );
  }</pre>
</td-code-block>
<p>\u81EA\u5B9A\u4E49\u56FE\u7247\u7A7A\u72B6\u6001</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _imageEmpty(BuildContext context) {
    return TDEmpty(
      type: TDEmptyType.plain,
      emptyText: '\u63CF\u8FF0\u6587\u5B57',
      image: Container(
        width: 120,
        height: 120,
        decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(TDTheme.of(context).radiusDefault),
          image: const DecorationImage(image: AssetImage('assets/img/empty.png'))
        ),
      ),
    );
  }</pre>
</td-code-block>
<p>\u5E26\u64CD\u4F5C\u7A7A\u72B6\u6001</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _operationEmpty(BuildContext context) {
    return const TDEmpty(
      type: TDEmptyType.operation,
      operationText: '\u64CD\u4F5C\u6309\u94AE',
      emptyText: '\u63CF\u8FF0\u6587\u5B57',
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdempty">TDEmpty</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdempty">TDEmpty <a class="header-anchor" href="#tdempty"></a></h3>
<h4 id="\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5">\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5 <a class="header-anchor" href="#\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5"></a></h4>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>type</td>
<td>TDEmptyType</td>
<td>TDEmptyType.plain</td>
<td>\u7C7B\u578B\uFF0C\u4E3Aoperation\u6709\u64CD\u4F5C\u6309\u94AE\uFF0Cplain\u65E0\u6309\u94AE</td>
</tr>
<tr>
<td>image</td>
<td>Widget?</td>
<td>-</td>
<td>\u5C55\u793A\u56FE\u7247</td>
</tr>
<tr>
<td>emptyText</td>
<td>String?</td>
<td>-</td>
<td>\u63CF\u8FF0\u6587\u5B57</td>
</tr>
<tr>
<td>operationText</td>
<td>String?</td>
<td>-</td>
<td>\u64CD\u4F5C\u6309\u94AE\u6587\u6848</td>
</tr>
<tr>
<td>operationTheme</td>
<td>TDButtonTheme?</td>
<td>-</td>
<td>\u64CD\u4F5C\u6309\u94AE\u6587\u6848\u4E3B\u9898\u8272</td>
</tr>
<tr>
<td>onTapEvent</td>
<td>TDTapEvent?</td>
<td>-</td>
<td>\u70B9\u51FB\u4E8B\u4EF6</td>
</tr>
<tr>
<td>emptyTextColor</td>
<td>Color?</td>
<td>-</td>
<td>\u63CF\u8FF0\u6587\u5B57\u989C\u8272</td>
</tr>
<tr>
<td>emptyTextFont</td>
<td>Font?</td>
<td>-</td>
<td>\u63CF\u8FF0\u6587\u5B57\u5927\u5C0F</td>
</tr>
<tr>
<td>key</td>
<td></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function p(i,c,l,m,g,h){const t=a("tdesign-doc");return s(),o(t)}var b=e(r,[["render",p]]);export{b as default};
