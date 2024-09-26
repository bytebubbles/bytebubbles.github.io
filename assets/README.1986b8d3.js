import{T as t}from"./component.9b32f023.js";import{_ as e,d,r as i,o as a,c as r}from"./site.b6fa4b6e.js";const o=d({props:{docType:String},components:{TdesignDoc:t},provide:{info:{spline:"base",toc:!0,title:"Link \u94FE\u63A5",description:"\u5F53\u529F\u80FD\u4F7F\u7528\u56FE\u6807\u5373\u53EF\u8868\u610F\u6E05\u695A\u65F6\uFF0C\u53EF\u4F7F\u7528\u7EAF\u56FE\u6807\u60AC\u6D6E\u6309\u94AE\uFF0C\u4F8B\u5982\uFF1A\u6DFB\u52A0\u3001\u53D1\u5E03\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686019,componentName:"link",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_link_page.dart" target="_blank" rel="noopener noreferrer">td_link_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u57FA\u7840\u6587\u5B57\u94FE\u63A5</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _basicTypeBasic(BuildContext context) {
    return Container(
        color: TDTheme.of(context).whiteColor1,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: _buildLinksWithType(TDLinkType.basic),
        ));
  }</pre>
</td-code-block>
<p>\u4E0B\u5212\u7EBF\u6587\u5B57\u94FE\u63A5</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _withUnderline(BuildContext context) {
    return Container(
        color: TDTheme.of(context).whiteColor1,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: _buildLinksWithType(TDLinkType.withUnderline),
        ));
  }</pre>
</td-code-block>
<p>\u524D\u7F6E\u56FE\u6807\u6587\u5B57\u94FE\u63A5</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _withPrefixIcon(BuildContext context) {
    return Container(
        color: TDTheme.of(context).whiteColor1,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: _buildLinksWithType(TDLinkType.withPrefixIcon),
        ));
  }</pre>
</td-code-block>
<p>\u540E\u7F6E\u56FE\u6807\u6587\u5B57\u94FE\u63A5</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _withSuffixIcon(BuildContext context) {
    return Container(
        color: TDTheme.of(context).whiteColor1,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: _buildLinksWithType(TDLinkType.withSuffixIcon),
        ));
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u72B6\u6001">1 \u7EC4\u4EF6\u72B6\u6001 <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u72B6\u6001"></a></h3>
<p>\u4E0D\u540C\u4E3B\u9898</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildLinkStats(BuildContext context) {
    return _buildLinkWithStyles(TDLinkState.normal);
  }</pre>
</td-code-block>
<p>\u7981\u7528\u72B6\u6001</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildDisabledLinkStats(BuildContext context) {
    return _buildLinkWithStyles(TDLinkState.disabled);
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u6837\u5F0F">1 \u7EC4\u4EF6\u6837\u5F0F <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u6837\u5F0F"></a></h3>
<p>\u94FE\u63A5\u5C3A\u5BF8</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildLinkSizes(BuildContext context) {
    return Container(
        color: TDTheme.of(context).whiteColor1,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            _buildLinkWithSizeAndStyle(TDLinkStyle.primary, TDLinkSize.small),
            const SizedBox(height: 48, width: 40),
            _buildLinkWithSizeAndStyle(TDLinkStyle.primary, TDLinkSize.medium),
            const SizedBox(height: 48, width: 40),
            _buildLinkWithSizeAndStyle(TDLinkStyle.primary, TDLinkSize.large),
          ],
        ));
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdlink">TDLink</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdlink">TDLink <a class="header-anchor" href="#tdlink"></a></h3>
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
<td>label</td>
<td>String</td>
<td>-</td>
<td>link \u5C55\u793A\u7684\u6587\u672C</td>
</tr>
<tr>
<td>uri</td>
<td>Uri?</td>
<td>-</td>
<td>link \u8DF3\u8F6C\u7684uri</td>
</tr>
<tr>
<td>prefixIcon</td>
<td>Icon?</td>
<td>-</td>
<td>\u524D\u7F6E icon</td>
</tr>
<tr>
<td>suffixIcon</td>
<td>Icon?</td>
<td>-</td>
<td>\u540E\u7F6E icon</td>
</tr>
<tr>
<td>linkClick</td>
<td>LinkClick?</td>
<td>-</td>
<td>link \u88AB\u70B9\u51FB\u4E4B\u540E\u6240\u91C7\u53D6\u7684\u52A8\u4F5C\uFF0C\u4F1A\u5C06uri\u5F53\u505A\u53C2\u6570\u4F20\u5165\u5230\u8BE5\u65B9\u6CD5\u5F53\u4E2D</td>
</tr>
<tr>
<td>type</td>
<td>TDLinkType</td>
<td>TDLinkType.basic</td>
<td>link \u7C7B\u578B</td>
</tr>
<tr>
<td>style</td>
<td>TDLinkStyle</td>
<td>TDLinkStyle.defaultStyle</td>
<td>link \u98CE\u683C</td>
</tr>
<tr>
<td>state</td>
<td>TDLinkState</td>
<td>TDLinkState.normal</td>
<td>link \u72B6\u6001</td>
</tr>
<tr>
<td>size</td>
<td>TDLinkSize</td>
<td>TDLinkSize.medium</td>
<td>link \u5927\u5C0F</td>
</tr>
<tr>
<td>color</td>
<td>Color?</td>
<td>-</td>
<td>link \u6587\u672C\u7684\u989C\u8272\uFF0C\u5982\u679C\u4E0D\u8BBE\u7F6E\u5219\u6839\u636E\u72B6\u6001\u548C\u98CE\u683C\u8FDB\u884C\u8BA1\u7B97</td>
</tr>
<tr>
<td>iconSize</td>
<td>double?</td>
<td>-</td>
<td>link icon \u5927\u5C0F\uFF0C\u5982\u679C\u4E0D\u8BBE\u7F6E\u5219\u6839\u636E\u72B6\u6001\u548C\u98CE\u683C\u8FDB\u884C\u8BA1\u7B97</td>
</tr>
<tr>
<td>fontSize</td>
<td>double?</td>
<td>-</td>
<td>link \u6587\u672C\u7684\u5B57\u4F53\u5927\u5C0F\uFF0C\u5982\u679C\u4E0D\u8BBE\u7F6E\u5219\u6839\u636E\u72B6\u6001\u548C\u98CE\u683C\u8FDB\u884C\u8BA1\u7B97</td>
</tr>
<tr>
<td>leftGapWithIcon</td>
<td>double?</td>
<td>-</td>
<td>\u524D\u7F6Eicon\u548C\u6587\u672C\u4E4B\u95F4\u7684\u95F4\u9694\uFF0C\u5982\u679C\u4E0D\u8BBE\u7F6E\u5219\u6839\u636E\u72B6\u6001\u548C\u98CE\u683C\u8FDB\u884C\u8BA1\u7B97</td>
</tr>
<tr>
<td>rightGapWithIcon</td>
<td>double?</td>
<td>-</td>
<td>\u540E\u7F6Eicon\u548C\u6587\u672C\u4E4B\u95F4\u7684\u95F4\u9694\uFF0C\u5982\u679C\u4E0D\u8BBE\u7F6E\u5219\u6839\u636E\u72B6\u6001\u548C\u98CE\u683C\u8FDB\u884C\u8BA1\u7B97</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function l(s,c,p,h,g,k){const n=i("tdesign-doc");return a(),r(n)}var u=e(o,[["render",l]]);export{u as default};
