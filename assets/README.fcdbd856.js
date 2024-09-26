import{T as n}from"./component.9b32f023.js";import{_ as d,d as e,r as o,o as r,c as a}from"./site.b6fa4b6e.js";const l=e({props:{docType:String},components:{TdesignDoc:n},provide:{info:{spline:"base",toc:!0,title:"Text \u6587\u672C",description:null,isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686021,componentName:"text",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_text_page.dart" target="_blank" rel="noopener noreferrer">td_text_page.dart</a></p>
<h3 id="_1-\u4F7F\u7528\u793A\u4F8B">1 \u4F7F\u7528\u793A\u4F8B <a class="header-anchor" href="#_1-\u4F7F\u7528\u793A\u4F8B"></a></h3>
<p>\u7CFB\u7EDFText:</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSystemText(BuildContext context) {
    return Text(
      exampleTxt,
    );
  }</pre>
</td-code-block>
<p>\u666E\u901ATDText:</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildNormalTDText(BuildContext context) {
    return TDText(
      exampleTxt,
    );
  }</pre>
</td-code-block>
<p>\u6307\u5B9A\u5E38\u7528\u5C5E\u6027:</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildGeneralProp(BuildContext context) {
    return TDText(
      exampleTxt,
      font: TDTheme.of(context).fontHeadlineLarge,
      textColor: TDTheme.of(context).brandNormalColor,
      backgroundColor: TDTheme.of(context).brandFocusColor,
    );
  }</pre>
</td-code-block>
<p>style\u8986\u76D6textColor,\u4E0D\u8986\u76D6font:</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildStyleCoverColor(BuildContext context) {
    return TDText(
      exampleTxt,
      font: TDTheme.of(context).fontBodyLarge,
      textColor: TDTheme.of(context).brandNormalColor,
      style: TextStyle(color: TDTheme.of(context).errorNormalColor),
    );
  }</pre>
</td-code-block>
<p>style\u8986\u76D6textColor\u548Cfont:</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildStyleCoverColorAndFont(BuildContext context) {
    return TDText(
      exampleTxt,
      font: TDTheme.of(context).fontBodyLarge,
      textColor: TDTheme.of(context).brandNormalColor,
    );
  }</pre>
</td-code-block>
<p>TDText.rich\u6D4B\u8BD5:</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildRichText(BuildContext context) {
    return TDText.rich(
      TextSpan(children: [
        TDTextSpan(
            text: 'TDTextSpan1',
            font: TDTheme.of(context).fontTitleExtraLarge,
            textColor: TDTheme.of(context).warningNormalColor,
            isTextThrough: true,
            lineThroughColor: TDTheme.of(context).brandNormalColor,
            style: TextStyle(color: TDTheme.of(context).errorNormalColor)),
        TextSpan(
            text: 'TextSpan2',
            style: TextStyle(
                fontSize: 14, color: TDTheme.of(context).brandNormalColor)),
        const WidgetSpan(
            child: Icon(
          TDIcons.setting,
          size: 24,
        )),
      ]),
      font: TDTheme.of(context).fontBodyLarge,
      textColor: TDTheme.of(context).brandNormalColor,
      style:
          TextStyle(color: TDTheme.of(context).errorNormalColor, fontSize: 32),
    );
  }</pre>
</td-code-block>
<p>\u83B7\u53D6\u7CFB\u7EDFText:</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _getSystemText(BuildContext context) {
    return TDText(
      exampleTxt,
      backgroundColor: TDTheme.of(context).brandFocusColor,
    ).getRawText(context: context);
  }</pre>
</td-code-block>
<p>\u4E2D\u6587\u5C45\u4E2D:\uFF08\u5E26\u6709\u82F1\u6587\u53EF\u80FD\u4E0D\u5C45\u4E2D\uFF09</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildVerticalCenterText(BuildContext context) {
    return TDText(
      '\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u817E\u8BAF\u79D1\u6280',
      // font: Font(size: 100, lineHeight: 100),
      forceVerticalCenter: true,
      backgroundColor: TDTheme.of(context).brandFocusColor,
    );
  }</pre>
</td-code-block>
<p>\u81EA\u5B9A\u4E49\u5185\u90E8padding:</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildCustomPaddingText(BuildContext context) {
    return TDTextConfiguration(
      paddingConfig: CustomTextPaddingConfig(),
      child: const CustomPaddingText(),
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdtext">TDText</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdtextspan">TDTextSpan</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdtextconfiguration">TDTextConfiguration</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdtext">TDText <a class="header-anchor" href="#tdtext"></a></h3>
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
<td>data</td>
<td>null</td>
<td>data</td>
<td>\u4EE5\u4E0B\u7CFB\u7EDFtext\u5C5E\u6027\uFF0C\u91CA\u4E49\u8BF7\u53C2\u8003\u7CFB\u7EDF[Text]\u4E2D\u6CE8\u91CA</td>
</tr>
<tr>
<td>font</td>
<td>Font?</td>
<td>-</td>
<td>\u5B57\u4F53\u5C3A\u5BF8\uFF0C\u5305\u542B\u5927\u5C0Fsize\u548C\u884C\u9AD8height</td>
</tr>
<tr>
<td>fontWeight</td>
<td>FontWeight?</td>
<td>-</td>
<td>\u5B57\u4F53\u7C97\u7EC6</td>
</tr>
<tr>
<td>fontFamily</td>
<td>FontFamily?</td>
<td>-</td>
<td>\u5B57\u4F53ttf</td>
</tr>
<tr>
<td>textColor</td>
<td>Color</td>
<td>Colors.black</td>
<td>\u6587\u672C\u989C\u8272</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>Color?</td>
<td>-</td>
<td>\u80CC\u666F\u989C\u8272</td>
</tr>
<tr>
<td>isTextThrough</td>
<td>bool?</td>
<td>false</td>
<td>\u662F\u5426\u662F\u6A2A\u7EBF\u7A7F\u8FC7\u6837\u5F0F(\u5220\u9664\u7EBF)</td>
</tr>
<tr>
<td>lineThroughColor</td>
<td>Color?</td>
<td>Colors.white</td>
<td>\u5220\u9664\u7EBF\u989C\u8272\uFF0C\u5BF9\u5E94TestStyle\u7684decorationColor</td>
</tr>
<tr>
<td>package</td>
<td>String?</td>
<td>-</td>
<td>\u5B57\u4F53\u5305\u540D</td>
</tr>
<tr>
<td>style</td>
<td>TextStyle?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u7684TextStyle\uFF0C\u5176\u4E2D\u6307\u5B9A\u7684\u5C5E\u6027\uFF0C\u5C06\u8986\u76D6\u6269\u5C55\u7684\u5916\u5C42\u5C5E\u6027</td>
</tr>
<tr>
<td>strutStyle</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>textAlign</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>textDirection</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>locale</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>softWrap</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>overflow</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>textScaleFactor</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>maxLines</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>semanticsLabel</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>textWidthBasis</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>textHeightBehavior</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>forceVerticalCenter</td>
<td>bool</td>
<td>false</td>
<td>\u662F\u5426\u5F3A\u5236\u5C45\u4E2D</td>
</tr>
<tr>
<td>isInFontLoader</td>
<td>bool</td>
<td>false</td>
<td>\u662F\u5426\u5728FontLoader\u4E2D\u4F7F\u7528</td>
</tr>
<tr>
<td>fontFamilyUrl</td>
<td>String?</td>
<td>-</td>
<td>\u662F\u5426\u7981\u7528\u61D2\u52A0\u8F7DFontFamily\u7684\u80FD\u529B</td>
</tr>
<tr>
<td>key</td>
<td></td>
<td>-</td>
<td></td>
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
<td>TDText.rich</td>
<td>\u5BCC\u6587\u672C\u6784\u9020\u65B9\u6CD5</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tdtextspan">TDTextSpan <a class="header-anchor" href="#tdtextspan"></a></h3>
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
<td>context</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>font</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>fontWeight</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>fontFamily</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>textColor</td>
<td></td>
<td>Colors.black</td>
<td></td>
</tr>
<tr>
<td>isTextThrough</td>
<td></td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>lineThroughColor</td>
<td></td>
<td>Colors.white</td>
<td></td>
</tr>
<tr>
<td>package</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>text</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>children</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>style</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>recognizer</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>mouseCursor</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>onEnter</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>onExit</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>semanticsLabel</td>
<td></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tdtextconfiguration">TDTextConfiguration <a class="header-anchor" href="#tdtextconfiguration"></a></h3>
<h4 id="\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5-2">\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5 <a class="header-anchor" href="#\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5-2"></a></h4>
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
<td>child</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>paddingConfig</td>
<td>TDTextPaddingConfig?</td>
<td>-</td>
<td>forceVerticalCenter=true\u65F6\uFF0C\u5185\u7F6Epadding\u914D\u7F6E</td>
</tr>
<tr>
<td>globalFontFamily</td>
<td>FontFamily?</td>
<td>-</td>
<td>\u5168\u5C40\u5B57\u4F53,kTextNeedGlobalFontFamily=true\u65F6\u751F\u6548</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function s(i,c,p,h,g,x){const t=o("tdesign-doc");return r(),a(t)}var f=d(l,[["render",s]]);export{f as default};
