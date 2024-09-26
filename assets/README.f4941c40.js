import{T as e}from"./component.f9e366e0.js";import{_ as t,d as a,r as d,o,c as s}from"./site.66dd0425.js";const r=a({props:{docType:String},components:{TdesignDoc:e},provide:{info:{spline:"base",toc:!0,title:"Fab \u60AC\u6D6E\u6309\u94AE",description:null,isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686018,componentName:"fab",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_fab_page.dart" target="_blank" rel="noopener noreferrer">td_fab_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>Icon Fab \u7EAF\u56FE\u6807\u60AC\u6D6E\u6309\u94AE</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildPureIconFab(BuildContext context) {
    return _buildRowDemo([
      const TDFab(
        theme: TDFabTheme.primary,
      )
    ]);
  }</pre>
</td-code-block>
<p>Icon Fab with Text \u56FE\u6807\u52A0\u6587\u5B57\u60AC\u6D6E\u6309\u94AE</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildTextFab(BuildContext context) {
    return _buildRowDemo([
      const TDFab(
        theme: TDFabTheme.primary,
        text: 'Floating',
      )
    ]);
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u72B6\u6001">1 \u7EC4\u4EF6\u72B6\u6001 <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u72B6\u6001"></a></h3>
<p>Fab Theme \u60AC\u6D6E\u6309\u94AE\u4E3B\u9898</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildThemeFab(BuildContext context) {
    return _buildRowDemoWidthDescription([
      {
        'component': const TDFab(
          theme: TDFabTheme.primary,
        ),
        'desc': 'Primary'
      },
      {
        'component': const TDFab(
          theme: TDFabTheme.defaultTheme,
        ),
        'desc': 'Default'
      },
      {
        'component': const TDFab(
          theme: TDFabTheme.light,
        ),
        'desc': 'Light'
      },
      {
        'component': const TDFab(
          theme: TDFabTheme.danger,
        ),
        'desc': 'Danger'
      },
    ]);
  }</pre>
</td-code-block>
<p>Fab Shape \u60AC\u6D6E\u6309\u94AE\u5F62\u72B6</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildShapeFab(BuildContext context) {
    return _buildRowDemoWidthDescription([
      {
        'component': const TDFab(
          theme: TDFabTheme.primary,
          shape: TDFabShape.circle,
        ),
        'desc': 'Circle'
      },
      {
        'component': const TDFab(
          theme: TDFabTheme.primary,
          shape: TDFabShape.square,
        ),
        'desc': 'Square'
      },
    ]);
  }</pre>
</td-code-block>
<p>Fab Size \u60AC\u6D6E\u6309\u94AE\u5C3A\u5BF8</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSizeFab(BuildContext context) {
    return _buildRowDemoWidthDescription([
      {
        'component': const TDFab(
          theme: TDFabTheme.primary,
          size: TDFabSize.large,
        ),
        'desc': 'Large'
      },
      {
        'component': const TDFab(
          theme: TDFabTheme.primary,
          size: TDFabSize.medium,
        ),
        'desc': 'Medium'
      },
      {
        'component': const TDFab(
          theme: TDFabTheme.primary,
          size: TDFabSize.small,
        ),
        'desc': 'Small'
      },
      {
        'component': const TDFab(
          theme: TDFabTheme.primary,
          size: TDFabSize.extraSmall,
        ),
        'desc': 'extraSmall'
      },
    ]);
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdfab">TDFab</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdfab">TDFab <a class="header-anchor" href="#tdfab"></a></h3>
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
<td>key</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>theme</td>
<td>TDFabTheme</td>
<td>TDFabTheme.defaultTheme</td>
<td>\u4E3B\u9898</td>
</tr>
<tr>
<td>shape</td>
<td>TDFabShape</td>
<td>TDFabShape.circle</td>
<td>\u5F62\u72B6</td>
</tr>
<tr>
<td>size</td>
<td>TDFabSize</td>
<td>TDFabSize.large</td>
<td>\u5927\u5C0F</td>
</tr>
<tr>
<td>text</td>
<td>String?</td>
<td>-</td>
<td>\u6587\u672C</td>
</tr>
<tr>
<td>onClick</td>
<td>VoidCallback?</td>
<td>-</td>
<td>\u70B9\u51FB\u4E8B\u4EF6</td>
</tr>
<tr>
<td>icon</td>
<td>Icon?</td>
<td>-</td>
<td>\u56FE\u6807</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function c(i,p,l,m,h,b){const n=d("tdesign-doc");return o(),s(n)}var D=t(r,[["render",c]]);export{D as default};
