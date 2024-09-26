import{T as n}from"./component.6878da95.js";import{_ as e,d as o,r as d,o as r,c as l}from"./site.6fe70e23.js";const a=o({props:{docType:String},components:{TdesignDoc:n},provide:{info:{spline:"base",toc:!0,title:"CountDown \u5012\u8BA1\u65F6",description:"\u7528\u4E8E\u5B9E\u65F6\u5C55\u793A\u5012\u8BA1\u65F6\u6570\u503C\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686017,componentName:"count-down",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_count_down_page.dart" target="_blank" rel="noopener noreferrer">td_count_down_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u65F6\u5206\u79D2</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildSimple(BuildContext context) {
  return const TDCountDown(time: 60 * 60 * 1000);
}</pre>
</td-code-block>
<p>\u5E26\u6BEB\u79D2</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildMillisecondSimple(BuildContext context) {
  return const TDCountDown(time: 60 * 60 * 1000, millisecond: true);
}</pre>
</td-code-block>
<p>\u5E26\u65B9\u5F62\u5E95</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildSquareSimple(BuildContext context) {
  return const TDCountDown(time: 60 * 60 * 1000, theme: TDCountDownTheme.square);
}</pre>
</td-code-block>
<p>\u5E26\u5706\u5F62\u5E95</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildRoundSimple(BuildContext context) {
  return const TDCountDown(time: 60 * 60 * 1000, theme: TDCountDownTheme.round);
}</pre>
</td-code-block>
<p>\u5E26\u5355\u4F4D</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildUnitSimple(BuildContext context) {
  return const TDCountDown(time: 60 * 60 * 1000, theme: TDCountDownTheme.square, splitWithUnit: true);
}</pre>
</td-code-block>
<p>\u65E0\u5E95\u8272\u5E26\u5355\u4F4D</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildCustomUnitSimple(BuildContext context) {
  var style = TDCountDownStyle.generateStyle(context);
  style.timeColor = TDTheme.of(context).errorColor6;
  return TDCountDown(time: 60 * 60 * 1000, splitWithUnit: true, style: style);
}</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u5C3A\u5BF8">1 \u7EC4\u4EF6\u5C3A\u5BF8 <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u5C3A\u5BF8"></a></h3>
<p>\u7EAF\u6570\u5B57</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildSmallSize(BuildContext context) {
  return const TDCountDown(
    time: 60 * 60 * 1000,
    size: TDCountDownSize.small,
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildMediumSize(BuildContext context) {
  return const TDCountDown(
    time: 60 * 60 * 1000,
    size: TDCountDownSize.medium,
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildLargeSize(BuildContext context) {
  return const TDCountDown(
    time: 60 * 60 * 1000,
    size: TDCountDownSize.large,
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildSmallSize(BuildContext context) {
  return const TDCountDown(
    time: 60 * 60 * 1000,
    size: TDCountDownSize.small,
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildMediumSize(BuildContext context) {
  return const TDCountDown(
    time: 60 * 60 * 1000,
    size: TDCountDownSize.medium,
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildLargeSize(BuildContext context) {
  return const TDCountDown(
    time: 60 * 60 * 1000,
    size: TDCountDownSize.large,
  );
}</pre>
</td-code-block>
<p>\u5E26\u65B9\u5F62\u5E95</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildSquareSmallSize(BuildContext context) {
  return const TDCountDown(
    time: 60 * 60 * 1000,
    size: TDCountDownSize.small,
    theme: TDCountDownTheme.square,
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildSquareMediumSize(BuildContext context) {
  return const TDCountDown(
    time: 60 * 60 * 1000,
    size: TDCountDownSize.medium,
    theme: TDCountDownTheme.square,
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildSquareLargeSize(BuildContext context) {
  return const TDCountDown(
    time: 60 * 60 * 1000,
    size: TDCountDownSize.large,
    theme: TDCountDownTheme.square,
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildSquareSmallSize(BuildContext context) {
  return const TDCountDown(
    time: 60 * 60 * 1000,
    size: TDCountDownSize.small,
    theme: TDCountDownTheme.square,
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildSquareMediumSize(BuildContext context) {
  return const TDCountDown(
    time: 60 * 60 * 1000,
    size: TDCountDownSize.medium,
    theme: TDCountDownTheme.square,
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildSquareLargeSize(BuildContext context) {
  return const TDCountDown(
    time: 60 * 60 * 1000,
    size: TDCountDownSize.large,
    theme: TDCountDownTheme.square,
  );
}</pre>
</td-code-block>
<p>\u5E26\u5706\u5F62\u5E95</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildRoundSmallSize(BuildContext context) {
  return const TDCountDown(
    time: 60 * 60 * 1000,
    size: TDCountDownSize.small,
    theme: TDCountDownTheme.round,
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildRoundMediumSize(BuildContext context) {
  return const TDCountDown(
    time: 60 * 60 * 1000,
    size: TDCountDownSize.medium,
    theme: TDCountDownTheme.round,
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildRoundLargeSize(BuildContext context) {
  return const TDCountDown(
    time: 60 * 60 * 1000,
    size: TDCountDownSize.large,
    theme: TDCountDownTheme.round,
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildRoundSmallSize(BuildContext context) {
  return const TDCountDown(
    time: 60 * 60 * 1000,
    size: TDCountDownSize.small,
    theme: TDCountDownTheme.round,
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildRoundMediumSize(BuildContext context) {
  return const TDCountDown(
    time: 60 * 60 * 1000,
    size: TDCountDownSize.medium,
    theme: TDCountDownTheme.round,
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildRoundLargeSize(BuildContext context) {
  return const TDCountDown(
    time: 60 * 60 * 1000,
    size: TDCountDownSize.large,
    theme: TDCountDownTheme.round,
  );
}</pre>
</td-code-block>
<p>\u5E26\u5355\u4F4D</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildUnitSmallSize(BuildContext context) {
  return const TDCountDown(
    time: 60 * 60 * 1000,
    size: TDCountDownSize.small,
    theme: TDCountDownTheme.square,
    splitWithUnit: true,
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildUnitMediumSize(BuildContext context) {
  return const TDCountDown(
    time: 60 * 60 * 1000,
    size: TDCountDownSize.medium,
    theme: TDCountDownTheme.square,
    splitWithUnit: true,
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildUnitLargeSize(BuildContext context) {
  return const TDCountDown(
    time: 60 * 60 * 1000,
    size: TDCountDownSize.large,
    theme: TDCountDownTheme.square,
    splitWithUnit: true,
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildUnitSmallSize(BuildContext context) {
  return const TDCountDown(
    time: 60 * 60 * 1000,
    size: TDCountDownSize.small,
    theme: TDCountDownTheme.square,
    splitWithUnit: true,
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildUnitMediumSize(BuildContext context) {
  return const TDCountDown(
    time: 60 * 60 * 1000,
    size: TDCountDownSize.medium,
    theme: TDCountDownTheme.square,
    splitWithUnit: true,
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildUnitLargeSize(BuildContext context) {
  return const TDCountDown(
    time: 60 * 60 * 1000,
    size: TDCountDownSize.large,
    theme: TDCountDownTheme.square,
    splitWithUnit: true,
  );
}</pre>
</td-code-block>
<p>\u65E0\u5E95\u8272\u5E26\u5355\u4F4D</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildCustomUnitSmallSize(BuildContext context) {
  var style = TDCountDownStyle.generateStyle(context, size: TDCountDownSize.small);
  style.timeColor = TDTheme.of(context).errorColor6;
  return TDCountDown(
    time: 60 * 60 * 1000,
    splitWithUnit: true,
    style: style,
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildCustomUnitMediumSize(BuildContext context) {
  var style = TDCountDownStyle.generateStyle(context, size: TDCountDownSize.medium);
  style.timeColor = TDTheme.of(context).errorColor6;
  return TDCountDown(
    time: 60 * 60 * 1000,
    splitWithUnit: true,
    style: style,
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildCustomUnitLargeSize(BuildContext context) {
  var style = TDCountDownStyle.generateStyle(context, size: TDCountDownSize.large);
  style.timeColor = TDTheme.of(context).errorColor6;
  return TDCountDown(
    time: 60 * 60 * 1000,
    splitWithUnit: true,
    style: style,
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildCustomUnitSmallSize(BuildContext context) {
  var style = TDCountDownStyle.generateStyle(context, size: TDCountDownSize.small);
  style.timeColor = TDTheme.of(context).errorColor6;
  return TDCountDown(
    time: 60 * 60 * 1000,
    splitWithUnit: true,
    style: style,
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildCustomUnitMediumSize(BuildContext context) {
  var style = TDCountDownStyle.generateStyle(context, size: TDCountDownSize.medium);
  style.timeColor = TDTheme.of(context).errorColor6;
  return TDCountDown(
    time: 60 * 60 * 1000,
    splitWithUnit: true,
    style: style,
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDCountDown _buildCustomUnitLargeSize(BuildContext context) {
  var style = TDCountDownStyle.generateStyle(context, size: TDCountDownSize.large);
  style.timeColor = TDTheme.of(context).errorColor6;
  return TDCountDown(
    time: 60 * 60 * 1000,
    splitWithUnit: true,
    style: style,
  );
}</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdcountdown">TDCountDown</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdcountdownstyle">TDCountDownStyle</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdcountdowncontroller">TDCountDownController</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdcountdown">TDCountDown <a class="header-anchor" href="#tdcountdown"></a></h3>
<h4 id="\u7B80\u4ECB">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB"></a></h4>
<p>\u5012\u8BA1\u65F6\u7EC4\u4EF6</p>
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
<td>autoStart</td>
<td>bool</td>
<td>true</td>
<td>\u662F\u5426\u81EA\u52A8\u5F00\u59CB\u5012\u8BA1\u65F6</td>
</tr>
<tr>
<td>content</td>
<td>dynamic</td>
<td>'default'</td>
<td>'default' / Widget Function(int time) / Widget</td>
</tr>
<tr>
<td>format</td>
<td>String</td>
<td>'HH:mm:ss'</td>
<td>\u65F6\u95F4\u683C\u5F0F\uFF0CDD-\u65E5\uFF0CHH-\u65F6\uFF0Cmm-\u5206\uFF0Css-\u79D2\uFF0CSSS-\u6BEB\u79D2</td>
</tr>
<tr>
<td>millisecond</td>
<td>bool</td>
<td>false</td>
<td>\u662F\u5426\u5F00\u542F\u6BEB\u79D2\u7EA7\u6E32\u67D3</td>
</tr>
<tr>
<td>size</td>
<td>TDCountDownSize</td>
<td>TDCountDownSize.medium</td>
<td>\u5012\u8BA1\u65F6\u5C3A\u5BF8</td>
</tr>
<tr>
<td>splitWithUnit</td>
<td>bool</td>
<td>false</td>
<td>\u4F7F\u7528\u65F6\u95F4\u5355\u4F4D\u5206\u5272</td>
</tr>
<tr>
<td>theme</td>
<td>TDCountDownTheme</td>
<td>TDCountDownTheme.defaultTheme</td>
<td>\u5012\u8BA1\u65F6\u98CE\u683C</td>
</tr>
<tr>
<td>time</td>
<td>int</td>
<td>-</td>
<td>\u5FC5\u9700\uFF1B\u5012\u8BA1\u65F6\u65F6\u957F\uFF0C\u5355\u4F4D\u6BEB\u79D2</td>
</tr>
<tr>
<td>style</td>
<td>TDCountDownStyle?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u6709\u5219\u4F18\u5148\u7528\u5B83\uFF0C\u6CA1\u6709\u5219\u6839\u636Esize\u548Ctheme\u9009\u53D6</td>
</tr>
<tr>
<td>onChange</td>
<td>Function(int time)?</td>
<td>-</td>
<td>\u65F6\u95F4\u53D8\u5316\u65F6\u89E6\u53D1\u56DE\u8C03</td>
</tr>
<tr>
<td>onFinish</td>
<td>VoidCallback?</td>
<td>-</td>
<td>\u5012\u8BA1\u65F6\u7ED3\u675F\u65F6\u89E6\u53D1\u56DE\u8C03</td>
</tr>
<tr>
<td>controller</td>
<td>TDCountDownController?</td>
<td>-</td>
<td>\u63A7\u5236\u5668\uFF0C\u53EF\u63A7\u5236\u5F00\u59CB/\u6682\u505C/\u7EE7\u7EED/\u91CD\u7F6E</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tdcountdownstyle">TDCountDownStyle <a class="header-anchor" href="#tdcountdownstyle"></a></h3>
<h4 id="\u7B80\u4ECB-1">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB-1"></a></h4>
<p>\u5012\u8BA1\u65F6\u7EC4\u4EF6\u6837\u5F0F</p>
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
<td>timeWidth</td>
<td>double?</td>
<td>-</td>
<td>\u65F6\u95F4\u5BB9\u5668\u5BBD\u5EA6</td>
</tr>
<tr>
<td>timeHeight</td>
<td>double?</td>
<td>-</td>
<td>\u65F6\u95F4\u5BB9\u5668\u9AD8\u5EA6</td>
</tr>
<tr>
<td>timePadding</td>
<td>EdgeInsets?</td>
<td>-</td>
<td>\u65F6\u95F4\u5BB9\u5668\u5185\u8FB9\u8DDD</td>
</tr>
<tr>
<td>timeMargin</td>
<td>EdgeInsets?</td>
<td>-</td>
<td>\u65F6\u95F4\u5BB9\u5668\u5916\u8FB9\u8DDD</td>
</tr>
<tr>
<td>timeBox</td>
<td>BoxDecoration?</td>
<td>-</td>
<td>\u65F6\u95F4\u5BB9\u5668\u88C5\u9970</td>
</tr>
<tr>
<td>timeFontFamily</td>
<td>FontFamily?</td>
<td>-</td>
<td>\u65F6\u95F4\u5B57\u4F53</td>
</tr>
<tr>
<td>timeFontSize</td>
<td>double?</td>
<td>-</td>
<td>\u65F6\u95F4\u5B57\u4F53\u5C3A\u5BF8</td>
</tr>
<tr>
<td>timeFontHeight</td>
<td>double?</td>
<td>-</td>
<td>\u65F6\u95F4\u5B57\u4F53\u884C\u9AD8</td>
</tr>
<tr>
<td>timeFontWeight</td>
<td>FontWeight?</td>
<td>-</td>
<td>\u65F6\u95F4\u5B57\u4F53\u7C97\u7EC6</td>
</tr>
<tr>
<td>timeColor</td>
<td>Color?</td>
<td>-</td>
<td>\u65F6\u95F4\u5B57\u4F53\u989C\u8272</td>
</tr>
<tr>
<td>splitFontSize</td>
<td>double?</td>
<td>-</td>
<td>\u5206\u9694\u7B26\u5B57\u4F53\u5C3A\u5BF8</td>
</tr>
<tr>
<td>splitFontHeight</td>
<td>double?</td>
<td>-</td>
<td>\u5206\u9694\u7B26\u5B57\u4F53\u884C\u9AD8</td>
</tr>
<tr>
<td>splitFontWeight</td>
<td>FontWeight?</td>
<td>-</td>
<td>\u5206\u9694\u7B26\u5B57\u4F53\u7C97\u7EC6</td>
</tr>
<tr>
<td>splitColor</td>
<td>Color?</td>
<td>-</td>
<td>\u5206\u9694\u7B26\u5B57\u4F53\u989C\u8272</td>
</tr>
<tr>
<td>space</td>
<td>double?</td>
<td>-</td>
<td>\u65F6\u95F4\u4E0E\u5206\u9694\u7B26\u7684\u95F4\u9694</td>
</tr>
</tbody>
</table>
<h4 id="\u5DE5\u5382\u6784\u9020\u65B9\u6CD5">\u5DE5\u5382\u6784\u9020\u65B9\u6CD5 <a class="header-anchor" href="#\u5DE5\u5382\u6784\u9020\u65B9\u6CD5"></a></h4>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>TDCountDownStyle.generateStyle</td>
<td>\u751F\u6210\u9ED8\u8BA4\u6837\u5F0F</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tdcountdowncontroller">TDCountDownController <a class="header-anchor" href="#tdcountdowncontroller"></a></h3>
<h4 id="\u7B80\u4ECB-2">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB-2"></a></h4>
<p>\u5012\u8BA1\u65F6\u7EC4\u4EF6\u63A7\u5236\u5668\uFF0C\u53EF\u63A7\u5236\u5F00\u59CB(<code>start()</code>)/\u6682\u505C(<code>pause()</code>)/\u7EE7\u7EED(<code>resume()</code>)/\u91CD\u7F6E(<code>reset([int? time])</code>)</p>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function i(s,c,u,D,p,m){const t=d("tdesign-doc");return r(),l(t)}var T=e(a,[["render",i]]);export{T as default};
