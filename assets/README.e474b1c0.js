import{T as e}from"./component.6878da95.js";import{_ as n,d as a,r as d,o as l,c as o}from"./site.6fe70e23.js";const r=a({props:{docType:String},components:{TdesignDoc:e},provide:{info:{spline:"base",toc:!0,title:"TreeSelect \u6811\u5F62\u9009\u62E9\u5668",description:"\u9002\u7528\u4E8E\u9009\u62E9\u6811\u5F62\u7684\u6570\u636E\u7ED3\u6784",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686022,componentName:"tree-select",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_tree_select_page.dart" target="_blank" rel="noopener noreferrer">td_tree_select_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u57FA\u7840\u6811\u5F62\u9009\u62E9</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildDefaultTreeSelect(BuildContext context) {
    var options = <TDSelectOption>[];

    for (var i = 1; i <= 10; i++) {
      options.add(TDSelectOption(label: '\u9009\u9879$i', value: i, children: []));

      for (var j = 1; j <= 10; j++) {
        options[i - 1].children.add(
            TDSelectOption(label: '\u9009\u9879$i.$j', value: i * 10 + j, children: []));
      }
    }

    return TDTreeSelect(
      options: options,
      defaultValue: values1,
      onChange: (val, level) {
        print('$val, $level');
      },
    );
  }</pre>
</td-code-block>
<p>\u591A\u9009\u6811\u5F62\u9009\u62E9</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildMultipleTreeSelect(BuildContext context) {
    var options = <TDSelectOption>[];

    for (var i = 1; i <= 10; i++) {
      options.add(TDSelectOption(label: '\u9009\u9879$i', value: i, children: []));

      for (var j = 1; j <= 10; j++) {
        options[i - 1].children.add(
            TDSelectOption(label: '\u9009\u9879$i.$j', value: i * 10 + j, children: []));
      }
    }

    return TDTreeSelect(
      options: options,
      defaultValue: values2,
      multiple: true,
      onChange: (val, level) {
        print('$val, $level');
      },
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u72B6\u6001">1 \u7EC4\u4EF6\u72B6\u6001 <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u72B6\u6001"></a></h3>
<p>\u4E09\u7EA7\u6811\u5F62\u9009\u62E9</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildThirdTreeSelect(BuildContext context) {
    var options = <TDSelectOption>[];

    for (var i = 1; i <= 10; i++) {
      options.add(TDSelectOption(label: '\u9009\u9879$i', value: i, children: []));

      for (var j = 1; j <= 10; j++) {
        options[i - 1].children.add(
            TDSelectOption(label: '\u9009\u9879$i.$j', value: i * 10 + j, children: []));

        for (var k = 1; k <= 10; k++) {
          options[i - 1].children[j - 1].children.add(
              TDSelectOption(label: '\u9009\u9879$i.$j.$k', value: i * 100 + j * 10 + k));
        }
      }
    }

    return TDTreeSelect(
      options: options,
      defaultValue: values3,
      onChange: (val, level) {
        print('$val, $level');
      },
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdselectoption">TDSelectOption</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdtreeselect">TDTreeSelect</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdselectoption">TDSelectOption <a class="header-anchor" href="#tdselectoption"></a></h3>
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
<td>label</td>
<td>String</td>
<td>-</td>
<td>\u6807\u7B7E</td>
</tr>
<tr>
<td>value</td>
<td>int</td>
<td>-</td>
<td>\u503C</td>
</tr>
<tr>
<td>children</td>
<td>List<TDSelectOption></td>
<td>const []</td>
<td>\u5B50\u9009\u9879</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tdtreeselect">TDTreeSelect <a class="header-anchor" href="#tdtreeselect"></a></h3>
<h4 id="\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5-1">\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5 <a class="header-anchor" href="#\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5-1"></a></h4>
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
<td>key</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>options</td>
<td>List<TDSelectOption></td>
<td>const []</td>
<td>\u5C55\u793A\u7684\u9009\u9879\u5217\u8868</td>
</tr>
<tr>
<td>defaultValue</td>
<td>List<dynamic></td>
<td>const []</td>
<td>\u521D\u59CB\u503C\uFF0C\u5BF9\u5E94options\u4E2D\u7684value\u503C</td>
</tr>
<tr>
<td>onChange</td>
<td>TDTreeSelectChangeEvent?</td>
<td>-</td>
<td>\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316</td>
</tr>
<tr>
<td>multiple</td>
<td>bool</td>
<td>false</td>
<td>\u652F\u6301\u591A\u9009</td>
</tr>
<tr>
<td>style</td>
<td>TDTreeSelectStyle</td>
<td>TDTreeSelectStyle.normal</td>
<td>\u4E00\u7EA7\u83DC\u5355\u6837\u5F0F</td>
</tr>
<tr>
<td>height</td>
<td>double</td>
<td>336</td>
<td>\u9AD8\u5EA6</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function s(i,c,p,h,g,u){const t=d("tdesign-doc");return l(),o(t)}var m=n(r,[["render",s]]);export{m as default};
