import{T as n}from"./component.9b32f023.js";import{_ as e,d,r,o as a,c as o}from"./site.b6fa4b6e.js";const l=d({props:{docType:String},components:{TdesignDoc:n},provide:{info:{spline:"base",toc:!0,title:"Textarea \u591A\u884C\u6587\u672C\u6846",description:"\u7528\u4E8E\u591A\u884C\u6587\u672C\u4FE1\u606F\u8F93\u5165\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686022,componentName:"textarea",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_textarea_page.dart" target="_blank" rel="noopener noreferrer">td_textarea_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u57FA\u7840\u591A\u6587\u672C\u8F93\u5165\u6846</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _basicType(BuildContext context) {
    return TDTextarea(
      controller: controller[0],
      hintText: '\u8BF7\u8F93\u5165\u6587\u5B57',
      maxLines: 4,
      minLines: 4,
      onChanged: (value) {
        setState(() {});
      },
    );
  }</pre>
</td-code-block>
<p>\u5E26\u6807\u9898\u591A\u6587\u672C\u8F93\u5165\u6846</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _basicTypeByTitle(BuildContext context) {
    return TDTextarea(
      controller: controller[1],
      label: '\u6807\u7B7E\u6587\u5B57',
      hintText: '\u8BF7\u8F93\u5165\u6587\u5B57',
      maxLines: 4,
      minLines: 4,
      onChanged: (value) {
        setState(() {});
      },
    );
  }</pre>
</td-code-block>
<p>\u81EA\u52A8\u589E\u9AD8\u591A\u6587\u672C\u8F93\u5165\u6846</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _autoHeightType(BuildContext context) {
    return TDTextarea(
      controller: controller[2],
      hintText: '\u8BF7\u8F93\u5165\u6587\u5B57',
      minLines: 1,
      onChanged: (value) {
        setState(() {});
      },
    );
  }</pre>
</td-code-block>
<p>\u8BBE\u7F6E\u5B57\u7B26\u6570\u9650\u5236</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _maxLengthType(BuildContext context) {
    return TDTextarea(
      controller: controller[3],
      label: '\u6807\u7B7E\u6587\u5B57',
      hintText: '\u8BF7\u8F93\u5165\u6587\u5B57',
      maxLines: 4,
      minLines: 4,
      maxLength: 500,
      indicator: true,
      onChanged: (value) {
        setState(() {});
      },
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u72B6\u6001">1 \u7EC4\u4EF6\u72B6\u6001 <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u72B6\u6001"></a></h3>
<p>\u7981\u7528\u72B6\u6001</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _disabledState(BuildContext context) {
    return TDTextarea(
      controller: controller[4],
      label: '\u6807\u7B7E\u6587\u5B57',
      hintText: '\u4E0D\u53EF\u7F16\u8F91\u6587\u5B57',
      maxLines: 4,
      minLines: 4,
      readOnly: true,
      onChanged: (value) {
        setState(() {});
      },
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u6837\u5F0F">1 \u7EC4\u4EF6\u6837\u5F0F <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u6837\u5F0F"></a></h3>
<p>\u7AD6\u6392\u6837\u5F0F</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _verticalStyle(BuildContext context) {
    return TDTextarea(
      controller: controller[5],
      label: '\u6807\u7B7E\u6587\u5B57',
      hintText: '\u8BF7\u8F93\u5165\u6587\u5B57',
      maxLines: 4,
      minLines: 4,
      maxLength: 500,
      indicator: true,
      layout: TDTextareaLayout.vertical,
      onChanged: (value) {
        setState(() {});
      },
    );
  }</pre>
</td-code-block>
<p>\u5361\u7247\u6837\u5F0F</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _cardStyle(BuildContext context) {
    return TDTextarea(
      controller: controller[6],
      label: '\u6807\u7B7E\u6587\u5B57',
      hintText: '\u8BF7\u8F93\u5165\u6587\u5B57',
      maxLines: 4,
      minLines: 4,
      maxLength: 500,
      indicator: true,
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(TDTheme.of(context).radiusExtraLarge),
      ),
      margin: EdgeInsets.only(right: TDTheme.of(context).spacer16, left: TDTheme.of(context).spacer16),
      onChanged: (value) {
        setState(() {});
      },
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7279\u6B8A\u6837\u5F0F">1 \u7279\u6B8A\u6837\u5F0F <a class="header-anchor" href="#_1-\u7279\u6B8A\u6837\u5F0F"></a></h3>
<p>\u6807\u7B7E\u5916\u7F6E\u8F93\u5165\u6846</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _extensionStyle(BuildContext context) {
    return TDTextarea(
      controller: controller[7],
      label: '\u6807\u7B7E\u6587\u5B57',
      hintText: '\u8BF7\u8F93\u5165\u6587\u5B57',
      maxLines: 4,
      minLines: 4,
      maxLength: 500,
      indicator: true,
      layout: TDTextareaLayout.vertical,
      bordered: true,
      onChanged: (value) {
        setState(() {});
      },
    );
  }</pre>
</td-code-block>
<p>\u81EA\u5B9A\u4E49\u6807\u9898</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _setLabel(BuildContext context) {
    return TDTextarea(
      controller: controller[9],
      label: '\u5730\u5740\u4FE1\u606F',
      // labelWidth: 100,
      labelIcon: Icon(
        TDIcons.location,
        size: 20,
        color: TDTheme.of(context).fontGyColor1,
      ),
      hintText: '\u8BF7\u8F93\u5165\u6587\u5B57',
      maxLines: 4,
      minLines: 4,
      maxLength: 500,
      indicator: true,
      onChanged: (value) {
        setState(() {});
      },
    );
  }</pre>
</td-code-block>
<p>\u5FC5\u586B\u548C\u8F85\u52A9\u8BF4\u660E</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _setStatus(BuildContext context) {
    return TDTextarea(
      controller: controller[10],
      label: '\u6807\u7B7E\u6587\u5B57',
      hintText: '\u8BF7\u8F93\u5165\u6587\u5B57',
      maxLines: 4,
      minLines: 4,
      maxLength: 500,
      indicator: true,
      layout: TDTextareaLayout.vertical,
      required: true,
      additionInfo: '\u8F85\u52A9\u8BF4\u660E',
      onChanged: (value) {
        setState(() {});
      },
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdtextarea">TDTextarea</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdtextarea">TDTextarea <a class="header-anchor" href="#tdtextarea"></a></h3>
<h4 id="\u7B80\u4ECB">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB"></a></h4>
<p>\u7528\u4E8E\u591A\u884C\u6587\u672C\u4FE1\u606F\u8F93\u5165</p>
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
<td>width</td>
<td>double?</td>
<td>-</td>
<td>\u8F93\u5165\u6846\u5BBD\u5EA6</td>
</tr>
<tr>
<td>textStyle</td>
<td>TextStyle?</td>
<td>-</td>
<td>\u6587\u672C\u989C\u8272</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>Color?</td>
<td>Colors.white</td>
<td>\u8F93\u5165\u6846\u80CC\u666F\u8272</td>
</tr>
<tr>
<td>decoration</td>
<td>Decoration?</td>
<td>-</td>
<td>\u8F93\u5165\u6846\u6837\u5F0F(\u5305\u62EC\u6807\u7B7E)</td>
</tr>
<tr>
<td>labelStyle</td>
<td>TextStyle?</td>
<td>-</td>
<td>\u5DE6\u4FA7\u6807\u7B7E\u6587\u672C\u6837\u5F0F</td>
</tr>
<tr>
<td>required</td>
<td>bool?</td>
<td>-</td>
<td>\u662F\u5426\u5FC5\u586B\u6807\u5FD7\uFF08\u7EA2\u8272*\uFF09</td>
</tr>
<tr>
<td>readOnly</td>
<td>bool?</td>
<td>false</td>
<td>\u662F\u5426\u53EA\u8BFB</td>
</tr>
<tr>
<td>autofocus</td>
<td>bool?</td>
<td>false</td>
<td>\u662F\u5426\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</td>
</tr>
<tr>
<td>onEditingComplete</td>
<td>VoidCallback?</td>
<td>-</td>
<td>\u70B9\u51FB\u952E\u76D8\u5B8C\u6210\u6309\u94AE\u65F6\u89E6\u53D1\u7684\u56DE\u8C03</td>
</tr>
<tr>
<td>onSubmitted</td>
<td>ValueChanged<String>?</td>
<td>-</td>
<td>\u70B9\u51FB\u952E\u76D8\u5B8C\u6210\u6309\u94AE\u65F6\u89E6\u53D1\u7684\u56DE\u8C03, \u53C2\u6570\u503C\u4E3A\u8F93\u5165\u7684\u5185\u5BB9</td>
</tr>
<tr>
<td>hintText</td>
<td>String?</td>
<td>-</td>
<td>\u63D0\u793A\u6587\u6848</td>
</tr>
<tr>
<td>inputType</td>
<td>TextInputType?</td>
<td>-</td>
<td>\u952E\u76D8\u7C7B\u578B\uFF0C\u6570\u5B57\u3001\u5B57\u6BCD</td>
</tr>
<tr>
<td>onChanged</td>
<td>ValueChanged<String>?</td>
<td>-</td>
<td>\u8F93\u5165\u6587\u672C\u53D8\u5316\u65F6\u56DE\u8C03</td>
</tr>
<tr>
<td>inputFormatters</td>
<td>List<TextInputFormatter>?</td>
<td>-</td>
<td>\u663E\u793A\u8F93\u5165\u5185\u5BB9\uFF0C\u5982\u9650\u5236\u957F\u5EA6(LengthLimitingTextInputFormatter(6))</td>
</tr>
<tr>
<td>inputDecoration</td>
<td>InputDecoration?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u8F93\u5165\u6846TextField\u7EC4\u4EF6\u6837\u5F0F</td>
</tr>
<tr>
<td>maxLines</td>
<td>int?</td>
<td>-</td>
<td>\u6700\u5927\u8F93\u5165\u884C\u6570</td>
</tr>
<tr>
<td>minLines</td>
<td>int?</td>
<td>4</td>
<td>\u6700\u5C0F\u8F93\u5165\u884C\u6570</td>
</tr>
<tr>
<td>focusNode</td>
<td>FocusNode?</td>
<td>-</td>
<td>\u83B7\u53D6\u6216\u8005\u53D6\u6D88\u7126\u70B9\u4F7F\u7528</td>
</tr>
<tr>
<td>controller</td>
<td>TextEditingController?</td>
<td>-</td>
<td>controller \u7528\u6237\u83B7\u53D6\u6216\u8005\u8D4B\u503C\u8F93\u5165\u5185\u5BB9</td>
</tr>
<tr>
<td>cursorColor</td>
<td>Color?</td>
<td>-</td>
<td>\u6E38\u6807\u989C\u8272</td>
</tr>
<tr>
<td>hintTextStyle</td>
<td>TextStyle?</td>
<td>-</td>
<td>\u63D0\u793A\u6587\u672C\u989C\u8272\uFF0C\u9ED8\u8BA4\u4E3A\u6587\u672C\u989C\u8272</td>
</tr>
<tr>
<td>labelWidget</td>
<td>Widget?</td>
<td>-</td>
<td>label\u7EC4\u4EF6\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49</td>
</tr>
<tr>
<td>textInputBackgroundColor</td>
<td>Color?</td>
<td>-</td>
<td>\u6587\u672C\u6846\u80CC\u666F\u8272</td>
</tr>
<tr>
<td>size</td>
<td>TDInputSize?</td>
<td>TDInputSize.large</td>
<td>\u8F93\u5165\u6846\u89C4\u683C</td>
</tr>
<tr>
<td>maxLength</td>
<td>int?</td>
<td>-</td>
<td>\u6700\u5927\u5B57\u6570\u9650\u5236</td>
</tr>
<tr>
<td>maxLengthEnforcement</td>
<td>MaxLengthEnforcement?</td>
<td>-</td>
<td>\u5982\u4F55\u6267\u884C\u8F93\u5165\u957F\u5EA6\u9650\u5236</td>
</tr>
<tr>
<td>allowInputOverMax</td>
<td>bool?</td>
<td>false</td>
<td>\u8D85\u51FA[maxLength]\u4E4B\u540E\u662F\u5426\u8FD8\u5141\u8BB8\u8F93\u5165</td>
</tr>
<tr>
<td>additionInfo</td>
<td>String?</td>
<td>''</td>
<td>\u9519\u8BEF\u63D0\u793A\u4FE1\u606F</td>
</tr>
<tr>
<td>additionInfoColor</td>
<td>Color?</td>
<td>-</td>
<td>\u9519\u8BEF\u63D0\u793A\u989C\u8272</td>
</tr>
<tr>
<td>textAlign</td>
<td>TextAlign?</td>
<td>-</td>
<td>\u6587\u5B57\u5BF9\u9F50\u65B9\u5411</td>
</tr>
<tr>
<td>label</td>
<td>String?</td>
<td>-</td>
<td>\u8F93\u5165\u6846\u6807\u9898</td>
</tr>
<tr>
<td>indicator</td>
<td>bool?</td>
<td>false</td>
<td>\u5426\u663E\u793A\u6587\u672C\u8BA1\u6570\u5668\uFF0C\u5982 0/140\uFF08\u5FC5\u987B\u8BBE\u7F6EmaxLength\uFF09</td>
</tr>
<tr>
<td>layout</td>
<td>TDTextareaLayout?</td>
<td>TDTextareaLayout.horizontal</td>
<td>\u6807\u9898\u8F93\u5165\u6846\u5E03\u5C40\u65B9\u5F0F\u3002\u53EF\u9009\u9879\uFF1Avertical/horizontal</td>
</tr>
<tr>
<td>autosize</td>
<td>bool?</td>
<td>-</td>
<td>\u662F\u5426\u81EA\u52A8\u589E\u9AD8\uFF0C\u503C\u4E3A true \u65F6\uFF0C[maxLines]\u4E0D\u751F\u6548</td>
</tr>
<tr>
<td>labelIcon</td>
<td>Widget?</td>
<td>-</td>
<td>\u8F93\u5165\u6846\u6807\u9898\u56FE\u6807</td>
</tr>
<tr>
<td>labelWidth</td>
<td>double?</td>
<td>-</td>
<td>\u8F93\u5165\u6846\u6807\u9898\u5BBD\u5EA6</td>
</tr>
<tr>
<td>margin</td>
<td>EdgeInsetsGeometry?</td>
<td>-</td>
<td>\u5916\u8FB9\u8DDD</td>
</tr>
<tr>
<td>padding</td>
<td>EdgeInsetsGeometry?</td>
<td>-</td>
<td>\u5185\u8FB9\u8DDD</td>
</tr>
<tr>
<td>textareaDecoration</td>
<td>Decoration?</td>
<td>-</td>
<td>\u8F93\u5165\u6846\u6837\u5F0F(\u4E0D\u5305\u62EC\u6807\u7B7E)</td>
</tr>
<tr>
<td>bordered</td>
<td>bool?</td>
<td>-</td>
<td>\u662F\u5426\u663E\u793A\u5916\u8FB9\u6846</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function i(s,c,p,g,h,x){const t=r("tdesign-doc");return a(),o(t)}var b=e(l,[["render",i]]);export{b as default};
