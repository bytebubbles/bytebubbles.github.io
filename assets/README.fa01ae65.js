import{T as n}from"./component.0f8980d6.js";import{_ as e,d as o,r as a,o as r,c as i}from"./site.4473ad53.js";const d=o({props:{docType:String},components:{TdesignDoc:n},provide:{info:{spline:"base",toc:!0,title:"Toast \u8F7B\u63D0\u793A",description:"\u7528\u4E8E\u8F7B\u91CF\u7EA7\u53CD\u9988\u6216\u63D0\u793A\uFF0C\u4E0D\u4F1A\u6253\u65AD\u7528\u6237\u64CD\u4F5C\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686022,componentName:"toast",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_toast_page.dart" target="_blank" rel="noopener noreferrer">td_toast_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u7EAF\u6587\u5B57</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _textToast(BuildContext context) {
    return TDButton(
      onTap: () {
        TDToast.showText('\u8F7B\u63D0\u793A\u6587\u5B57\u5185\u5BB9', context: context);
      },
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      isBlock: true,
      text: '\u7EAF\u6587\u5B57',
    );
  }</pre>
</td-code-block>
<p>\u591A\u884C\u6587\u5B57</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _multipleToast(BuildContext context) {
    return TDButton(
      onTap: () {
        TDToast.showText('\u6700\u591A\u4E00\u884C\u5C55\u793A\u5341\u4E2A\u6C49\u5B57\u5BBD\u5EA6\u9650\u5236\u6700\u591A\u4E0D\u8D85\u8FC7\u4E09\u884C\u6587\u5B57', context: context);
      },
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      isBlock: true,
      text: '\u591A\u884C\u6587\u5B57',
    );
  }</pre>
</td-code-block>
<p>\u5E26\u6A2A\u5411\u56FE\u6807</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _horizontalIconToast(BuildContext context) {
    return TDButton(
      onTap: () {
        TDToast.showIconText('\u5E26\u6A2A\u5411\u56FE\u6807',
            icon: TDIcons.check_circle, context: context);
      },
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      isBlock: true,
      text: '\u5E26\u6A2A\u5411\u56FE\u6807',
    );
  }</pre>
</td-code-block>
<p>\u5E26\u7AD6\u5411\u56FE\u6807</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _verticalIconToast(BuildContext context) {
    return TDButton(
      onTap: () {
        TDToast.showIconText('\u5E26\u7AD6\u5411\u56FE\u6807',
            icon: TDIcons.check_circle,
            direction: IconTextDirection.vertical,
            context: context);
      },
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      isBlock: true,
      text: '\u5E26\u7AD6\u5411\u56FE\u6807',
    );
  }</pre>
</td-code-block>
<p>\u52A0\u8F7D\u72B6\u6001</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _loadingToast(BuildContext context) {
    return TDButton(
      onTap: () {
        TDToast.showLoading(context: context);
      },
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      isBlock: true,
      text: '\u52A0\u8F7D\u72B6\u6001',
    );
  }</pre>
</td-code-block>
<p>\u52A0\u8F7D\u72B6\u6001(\u65E0\u6587\u5B57)</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _loadingWithoutTextToast(BuildContext context) {
    return TDButton(
      onTap: () {
        TDToast.showLoadingWithoutText(context: context);
      },
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      isBlock: true,
      text: '\u52A0\u8F7D\u72B6\u6001\uFF08\u65E0\u6587\u6848\uFF09',
    );
  }</pre>
</td-code-block>
<p>\u505C\u6B62\u52A0\u8F7D</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _dismissLoadingToast(BuildContext context) {
    return const TDButton(
      onTap: TDToast.dismissLoading,
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      isBlock: true,
      text: '\u505C\u6B62\u52A0\u8F7D',
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u72B6\u6001">1 \u7EC4\u4EF6\u72B6\u6001 <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u72B6\u6001"></a></h3>
<p>\u6210\u529F\u63D0\u793A</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _successToast(BuildContext context) {
    return TDButton(
      onTap: () {
        TDToast.showSuccess('\u6210\u529F\u6587\u6848',context: context);
      },
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      isBlock: true,
      text: '\u6210\u529F\u63D0\u793A',
    );
  }</pre>
</td-code-block>
<p>\u6210\u529F\u63D0\u793A(\u7AD6\u5411)</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _successVerticalToast(BuildContext context) {
    return TDButton(
      onTap: () {
        TDToast.showSuccess('\u6210\u529F\u6587\u6848',
            direction: IconTextDirection.vertical, context: context);
      },
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      isBlock: true,
      text: '\u6210\u529F\u63D0\u793A(\u7AD6\u5411)',
    );
  }</pre>
</td-code-block>
<p>\u8B66\u544A\u63D0\u793A</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _warningToast(BuildContext context) {
    return TDButton(
      onTap: () {
        TDToast.showWarning('\u8B66\u544A\u6587\u6848',
            direction: IconTextDirection.horizontal, context: context);
      },
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      isBlock: true,
      text: '\u8B66\u544A\u63D0\u793A',
    );
  }</pre>
</td-code-block>
<p>\u8B66\u544A\u63D0\u793A(\u7AD6\u5411)</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _warningVerticalToast(BuildContext context) {
    return TDButton(
      onTap: () {
        TDToast.showWarning('\u8B66\u544A\u6587\u6848',
            direction: IconTextDirection.vertical, context: context);
      },
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      isBlock: true,
      text: '\u8B66\u544A\u63D0\u793A(\u7AD6\u5411)',
    );
  }</pre>
</td-code-block>
<p>\u5931\u8D25\u63D0\u793A</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _failToast(BuildContext context) {
    return TDButton(
      onTap: () {
        TDToast.showFail('\u5931\u8D25\u6587\u6848',
            direction: IconTextDirection.horizontal, context: context);
      },
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      isBlock: true,
      text: '\u5931\u8D25\u63D0\u793A',
    );
  }</pre>
</td-code-block>
<p>\u5931\u8D25\u63D0\u793A(\u7AD6\u5411)</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _failVerticalToast(BuildContext context) {
    return TDButton(
      onTap: () {
        TDToast.showFail('\u5931\u8D25\u6587\u6848',
            direction: IconTextDirection.vertical, context: context);
      },
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      isBlock: true,
      text: '\u5931\u8D25\u63D0\u793A(\u7AD6\u5411)',
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdtoast">TDToast</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdtoast">TDToast <a class="header-anchor" href="#tdtoast"></a></h3>
<h4 id="\u9759\u6001\u65B9\u6CD5">\u9759\u6001\u65B9\u6CD5 <a class="header-anchor" href="#\u9759\u6001\u65B9\u6CD5"></a></h4>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8FD4\u56DE\u7C7B\u578B</th>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>showText</td>
<td></td>
<td>required String? text,  required BuildContext context,  Duration duration,  int? maxLines,  BoxConstraints? constraints,</td>
<td>\u666E\u901A\u6587\u672CToast</td>
</tr>
<tr>
<td>showIconText</td>
<td></td>
<td>required String? text,  IconData? icon,  IconTextDirection direction,  required BuildContext context,  Duration duration,</td>
<td>\u5E26\u56FE\u6807\u7684Toast</td>
</tr>
<tr>
<td>showSuccess</td>
<td></td>
<td>required String? text,  IconTextDirection direction,  required BuildContext context,  Duration duration,</td>
<td>\u6210\u529F\u63D0\u793AToast</td>
</tr>
<tr>
<td>showWarning</td>
<td></td>
<td>required String? text,  IconTextDirection direction,  required BuildContext context,  Duration duration,</td>
<td>\u8B66\u544AToast</td>
</tr>
<tr>
<td>showFail</td>
<td></td>
<td>required String? text,  IconTextDirection direction,  required BuildContext context,  Duration duration,</td>
<td>\u5931\u8D25\u63D0\u793AToast</td>
</tr>
<tr>
<td>showLoading</td>
<td></td>
<td>required BuildContext context,  String? text,  Duration duration,</td>
<td>\u5E26\u6587\u6848\u7684\u52A0\u8F7DToast</td>
</tr>
<tr>
<td>showLoadingWithoutText</td>
<td></td>
<td>required BuildContext context,  String? text,  Duration duration,</td>
<td>\u4E0D\u5E26\u6587\u6848\u7684\u52A0\u8F7DToast</td>
</tr>
<tr>
<td>dismissLoading</td>
<td></td>
<td></td>
<td>\u5173\u95ED\u52A0\u8F7DToast</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function s(c,l,p,T,u,g){const t=a("tdesign-doc");return r(),i(t)}var h=e(d,[["render",s]]);export{h as default};
