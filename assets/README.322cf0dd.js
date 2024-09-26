import{T as n}from"./component.9b32f023.js";import{_ as e,d as o,r as a,o as d,c as r}from"./site.b6fa4b6e.js";const l=o({props:{docType:String},components:{TdesignDoc:n},provide:{info:{spline:"base",toc:!0,title:"Button \u6309\u94AE",description:"\u7528\u4E8E\u5F00\u542F\u4E00\u4E2A\u95ED\u73AF\u7684\u64CD\u4F5C\u4EFB\u52A1\uFF0C\u5982\u201C\u5220\u9664\u201D\u5BF9\u8C61\u3001\u201C\u8D2D\u4E70\u201D\u5546\u54C1\u7B49\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686014,componentName:"button",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_button_page.dart" target="_blank" rel="noopener noreferrer">td_button_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u57FA\u7840\u6309\u94AE</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  @Demo(group: 'button')
  TDButton _buildPrimaryFillButton(BuildContext context) {
    return const TDButton(
      text: '\u586B\u5145\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.fill,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.primary,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildLightFillButton(BuildContext context) {
    return const TDButton(
      text: '\u586B\u5145\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.fill,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.light,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildDefaultFillButton(BuildContext context) {
    return const TDButton(
      text: '\u586B\u5145\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.fill,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.defaultTheme,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildPrimaryStrokeButton(BuildContext context) {
    return const TDButton(
      text: '\u63CF\u8FB9\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.primary,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildPrimaryTextButton(BuildContext context) {
    return const TDButton(
      text: '\u6587\u5B57\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.text,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.primary,
    );
  }</pre>
</td-code-block>
<p>\u56FE\u6807\u6309\u94AE</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildRectangleIconButton(BuildContext context) {
    return const TDButton(
      text: '\u586B\u5145\u6309\u94AE',
      icon: TDIcons.app,
      size: TDButtonSize.large,
      type: TDButtonType.fill,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.primary,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildSquareIconButton(BuildContext context) {
    return const TDButton(
      icon: TDIcons.app,
      size: TDButtonSize.large,
      type: TDButtonType.fill,
      shape: TDButtonShape.square,
      theme: TDButtonTheme.primary,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildLoadingIconButton(BuildContext context) {
    return TDButton(
      text: '\u52A0\u8F7D\u4E2D',
      iconWidget: TDLoading(
        size: TDLoadingSize.small,
        icon: TDLoadingIcon.circle,
        iconColor: TDTheme.of(context).whiteColor1,
      ),
      size: TDButtonSize.large,
      type: TDButtonType.fill,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.primary,
    );
  }</pre>
</td-code-block>
<p>\u5E7D\u7075\u6309\u94AE</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildPrimaryGhostButton(BuildContext context) {
    return const TDButton(
      text: '\u5E7D\u7075\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.ghost,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.primary,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildDangerGhostButton(BuildContext context) {
    return const TDButton(
      text: '\u5E7D\u7075\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.ghost,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.danger,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildDefaultGhostButton(BuildContext context) {
    return const TDButton(
      text: '\u5E7D\u7075\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.ghost,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.defaultTheme,
    );
  }</pre>
</td-code-block>
<p>\u7EC4\u5408\u6309\u94AE</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildCombinationButtons(BuildContext context) {
    return Row(
      children: const [
        SizedBox(
          width: 16,
        ),
        Expanded(
            child: TDButton(
          text: '\u586B\u5145\u6309\u94AE',
          size: TDButtonSize.large,
          type: TDButtonType.fill,
          shape: TDButtonShape.rectangle,
          theme: TDButtonTheme.light,
        )),
        SizedBox(
          width: 16,
        ),
        Expanded(
            child: TDButton(
          text: '\u586B\u5145\u6309\u94AE',
          size: TDButtonSize.large,
          type: TDButtonType.fill,
          shape: TDButtonShape.rectangle,
          theme: TDButtonTheme.primary,
        )),
        SizedBox(
          width: 16,
        ),
      ],
    );
  }</pre>
</td-code-block>
<p>\u901A\u680F\u6309\u94AE</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildFilledFillButton(BuildContext context) {
    return const TDButton(
      text: '\u586B\u5145\u6309\u94AE',
      icon: TDIcons.app,
      size: TDButtonSize.large,
      type: TDButtonType.fill,
      theme: TDButtonTheme.primary,
      isBlock: true,
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u72B6\u6001">1 \u7EC4\u4EF6\u72B6\u6001 <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u72B6\u6001"></a></h3>
<p>\u6309\u94AE\u7981\u7528\u72B6\u6001</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildDisablePrimaryFillButton(BuildContext context) {
    return const TDButton(
      text: '\u586B\u5145\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.fill,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.primary,
      disabled: true,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildDisableLightFillButton(BuildContext context) {
    return const TDButton(
      text: '\u586B\u5145\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.fill,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.light,
      disabled: true,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildDisableDefaultFillButton(BuildContext context) {
    return const TDButton(
      text: '\u586B\u5145\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.fill,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.defaultTheme,
      disabled: true,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildDisablePrimaryStrokeButton(BuildContext context) {
    return const TDButton(
      text: '\u63CF\u8FB9\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.primary,
      disabled: true,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildDisablePrimaryTextButton(BuildContext context) {
    return const TDButton(
      text: '\u6587\u5B57\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.text,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.primary,
      disabled: true,
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u4E3B\u9898">1 \u7EC4\u4EF6\u4E3B\u9898 <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u4E3B\u9898"></a></h3>
<p>\u6309\u94AE\u5C3A\u5BF8</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildLargeButton(BuildContext context) {
    return const TDButton(
      text: '\u6309\u94AE48',
      size: TDButtonSize.large,
      type: TDButtonType.fill,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.primary,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildMediumButton(BuildContext context) {
    return const TDButton(
      text: '\u6309\u94AE40',
      size: TDButtonSize.medium,
      type: TDButtonType.fill,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.primary,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildSmallButton(BuildContext context) {
    return const TDButton(
      text: '\u6309\u94AE32',
      size: TDButtonSize.small,
      type: TDButtonType.fill,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.primary,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildExtraSmallButton(BuildContext context) {
    return const TDButton(
      text: '\u6309\u94AE28',
      size: TDButtonSize.extraSmall,
      type: TDButtonType.fill,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.primary,
    );
  }</pre>
</td-code-block>
<p>\u6309\u94AE\u5F62\u72B6</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  @Demo(group: 'button')
  TDButton _buildPrimaryFillButton(BuildContext context) {
    return const TDButton(
      text: '\u586B\u5145\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.fill,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.primary,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildSquareIconButton(BuildContext context) {
    return const TDButton(
      icon: TDIcons.app,
      size: TDButtonSize.large,
      type: TDButtonType.fill,
      shape: TDButtonShape.square,
      theme: TDButtonTheme.primary,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildRoundButton(BuildContext context) {
    return const TDButton(
      text: '\u586B\u5145\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.fill,
      shape: TDButtonShape.round,
      theme: TDButtonTheme.primary,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildCircleButton(BuildContext context) {
    return const TDButton(
      icon: TDIcons.app,
      size: TDButtonSize.large,
      type: TDButtonType.fill,
      shape: TDButtonShape.circle,
      theme: TDButtonTheme.primary,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildFilledButton(BuildContext context) {
    return const TDButton(
      text: '\u586B\u5145\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.fill,
      shape: TDButtonShape.filled,
      theme: TDButtonTheme.primary,
    );
  }</pre>
</td-code-block>
<p>\u6309\u94AE\u4E3B\u9898</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildDefaultFillButton(BuildContext context) {
    return const TDButton(
      text: '\u586B\u5145\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.fill,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.defaultTheme,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildDefaultStrokeButton(BuildContext context) {
    return const TDButton(
      text: '\u63CF\u8FB9\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.defaultTheme,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildDefaultTextButton(BuildContext context) {
    return const TDButton(
      text: '\u6587\u5B57\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.text,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.defaultTheme,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  @Demo(group: 'button')
  TDButton _buildPrimaryFillButton(BuildContext context) {
    return const TDButton(
      text: '\u586B\u5145\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.fill,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.primary,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildPrimaryStrokeButton(BuildContext context) {
    return const TDButton(
      text: '\u63CF\u8FB9\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.primary,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildPrimaryTextButton(BuildContext context) {
    return const TDButton(
      text: '\u6587\u5B57\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.text,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.primary,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildDangerFillButton(BuildContext context) {
    return const TDButton(
      text: '\u586B\u5145\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.fill,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.danger,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildDangerStrokeButton(BuildContext context) {
    return const TDButton(
      text: '\u63CF\u8FB9\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.danger,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildDangerTextButton(BuildContext context) {
    return const TDButton(
      text: '\u6587\u5B57\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.text,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.danger,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildLightFillButton(BuildContext context) {
    return const TDButton(
      text: '\u586B\u5145\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.fill,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.light,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildLightStrokeButton(BuildContext context) {
    return const TDButton(
      text: '\u63CF\u8FB9\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.light,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDButton _buildLightTextButton(BuildContext context) {
    return const TDButton(
      text: '\u6587\u5B57\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.text,
      shape: TDButtonShape.rectangle,
      theme: TDButtonTheme.light,
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdbuttonstyle">TDButtonStyle</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdbutton">TDButton</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdbuttonstyle">TDButtonStyle <a class="header-anchor" href="#tdbuttonstyle"></a></h3>
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
<td>backgroundColor</td>
<td>Color?</td>
<td>-</td>
<td>\u80CC\u666F\u989C\u8272</td>
</tr>
<tr>
<td>frameColor</td>
<td>Color?</td>
<td>-</td>
<td>\u8FB9\u6846\u989C\u8272</td>
</tr>
<tr>
<td>textColor</td>
<td>Color?</td>
<td>-</td>
<td>\u6587\u5B57\u989C\u8272</td>
</tr>
<tr>
<td>frameWidth</td>
<td>double?</td>
<td>-</td>
<td>\u8FB9\u6846\u5BBD\u5EA6</td>
</tr>
<tr>
<td>radius</td>
<td>BorderRadiusGeometry?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u5706\u89D2</td>
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
<td>TDButtonStyle.generateFillStyleByTheme</td>
<td>\u751F\u6210\u4E0D\u540C\u4E3B\u9898\u7684\u586B\u5145\u6309\u94AE\u6837\u5F0F</td>
</tr>
<tr>
<td>TDButtonStyle.generateOutlineStyleByTheme</td>
<td>\u751F\u6210\u4E0D\u540C\u4E3B\u9898\u7684\u63CF\u8FB9\u6309\u94AE\u6837\u5F0F</td>
</tr>
<tr>
<td>TDButtonStyle.generateTextStyleByTheme</td>
<td>\u751F\u6210\u4E0D\u540C\u4E3B\u9898\u7684\u6587\u672C\u6309\u94AE\u6837\u5F0F</td>
</tr>
<tr>
<td>TDButtonStyle.generateGhostStyleByTheme</td>
<td>\u751F\u6210\u4E0D\u540C\u4E3B\u9898\u7684\u5E7D\u7075\u6309\u94AE\u6837\u5F0F</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tdbutton">TDButton <a class="header-anchor" href="#tdbutton"></a></h3>
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
<td>text</td>
<td>String?</td>
<td>-</td>
<td>\u6587\u672C\u5185\u5BB9</td>
</tr>
<tr>
<td>size</td>
<td>TDButtonSize</td>
<td>TDButtonSize.medium</td>
<td>\u5C3A\u5BF8</td>
</tr>
<tr>
<td>type</td>
<td>TDButtonType</td>
<td>TDButtonType.fill</td>
<td>\u7C7B\u578B\uFF1A\u586B\u5145\uFF0C\u63CF\u8FB9\uFF0C\u6587\u5B57</td>
</tr>
<tr>
<td>shape</td>
<td>TDButtonShape</td>
<td>TDButtonShape.rectangle</td>
<td>\u5F62\u72B6\uFF1A\u5706\u89D2\uFF0C\u80F6\u56CA\uFF0C\u65B9\u5F62\uFF0C\u5706\u5F62\uFF0C\u586B\u5145</td>
</tr>
<tr>
<td>theme</td>
<td>TDButtonTheme?</td>
<td>-</td>
<td>\u4E3B\u9898</td>
</tr>
<tr>
<td>child</td>
<td>Widget?</td>
<td>-</td>
<td>\u81EA\u63A7\u4EF6</td>
</tr>
<tr>
<td>disabled</td>
<td>bool</td>
<td>false</td>
<td>\u7981\u6B62\u70B9\u51FB</td>
</tr>
<tr>
<td>isBlock</td>
<td>bool</td>
<td>false</td>
<td>\u662F\u5426\u4E3A\u901A\u680F\u6309\u94AE</td>
</tr>
<tr>
<td>style</td>
<td>TDButtonStyle?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u6709\u5219\u4F18\u5148\u7528\u5B83\uFF0C\u6CA1\u6709\u5219\u6839\u636Etype\u548Ctheme\u9009\u53D6.\u5982\u679C\u8BBE\u7F6E\u4E86style,\u5219activeStyle\u548CdisableStyle\u4E5F\u5E94\u8BE5\u8BBE\u7F6E</td>
</tr>
<tr>
<td>activeStyle</td>
<td>TDButtonStyle?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u70B9\u51FB\u6837\u5F0F\uFF0C\u6709\u5219\u4F18\u5148\u7528\u5B83\uFF0C\u6CA1\u6709\u5219\u6839\u636Etype\u548Ctheme\u9009\u53D6</td>
</tr>
<tr>
<td>disableStyle</td>
<td>TDButtonStyle?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u7981\u7528\u6837\u5F0F\uFF0C\u6709\u5219\u4F18\u5148\u7528\u5B83\uFF0C\u6CA1\u6709\u5219\u6839\u636Etype\u548Ctheme\u9009\u53D6</td>
</tr>
<tr>
<td>textStyle</td>
<td>TextStyle?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u53EF\u70B9\u51FB\u72B6\u6001\u6587\u672C\u6837\u5F0F</td>
</tr>
<tr>
<td>disableTextStyle</td>
<td>TextStyle?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u4E0D\u53EF\u70B9\u51FB\u72B6\u6001\u6587\u672C\u6837\u5F0F</td>
</tr>
<tr>
<td>width</td>
<td>double?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u5BBD\u5EA6</td>
</tr>
<tr>
<td>height</td>
<td>double?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u9AD8\u5EA6</td>
</tr>
<tr>
<td>onTap</td>
<td>TDButtonEvent?</td>
<td>-</td>
<td>\u70B9\u51FB\u4E8B\u4EF6</td>
</tr>
<tr>
<td>icon</td>
<td>IconData?</td>
<td>-</td>
<td>\u56FE\u6807icon</td>
</tr>
<tr>
<td>iconWidget</td>
<td>Widget?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u56FE\u6807icon\u63A7\u4EF6</td>
</tr>
<tr>
<td>onLongPress</td>
<td>TDButtonEvent?</td>
<td>-</td>
<td>\u957F\u6309\u4E8B\u4EF6</td>
</tr>
<tr>
<td>margin</td>
<td>EdgeInsetsGeometry?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49margin</td>
</tr>
<tr>
<td>padding</td>
<td>EdgeInsetsGeometry?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49padding</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function u(i,p,c,s,T,D){const t=a("tdesign-doc");return d(),r(t)}var g=e(l,[["render",u]]);export{g as default};
