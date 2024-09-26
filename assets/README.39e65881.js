import{T as n}from"./component.f9e366e0.js";import{_ as e,d,r as i,o as r,c as a}from"./site.66dd0425.js";const o=d({props:{docType:String},components:{TdesignDoc:n},provide:{info:{spline:"base",toc:!0,title:"Divider \u5206\u5272\u7EBF",description:"\u7528\u4E8E\u5206\u5272\u3001\u7EC4\u7EC7\u3001\u7EC6\u5316\u6709\u4E00\u5B9A\u903B\u8F91\u7684\u7EC4\u7EC7\u5143\u7D20\u5185\u5BB9\u548C\u9875\u9762\u7ED3\u6784\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1727254820990,componentName:"divider",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A\u54C8\u54C8\u54C8">\u4EE3\u7801\u6F14\u793A\u54C8\u54C8\u54C8 <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A\u54C8\u54C8\u54C8"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_divider_page.dart" target="_blank" rel="noopener noreferrer">td_divider_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u6C34\u5E73\u5206\u5272\u7EBF</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _verticalDivider(BuildContext context) {
    return SizedBox(
      height: 20,
      child: Container(
        alignment: Alignment.center,
        child: const TDDivider(),
      ),
    );
  }</pre>
</td-code-block>
<p>\u5E26\u6587\u5B57\u6C34\u5E73\u5206\u5272\u7EBF</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _verticalTextDivider(BuildContext context) {
    return Column(
      children: const [
        TDDivider(
          text: '\u6587\u5B57\u4FE1\u606F',
          alignment: TextAlignment.left,
        ),
        SizedBox(
          height: 20,
        ),
        TDDivider(
          text: '\u6587\u5B57\u4FE1\u606F',
          alignment: TextAlignment.center,
        ),
        SizedBox(
          height: 20,
        ),
        TDDivider(
          text: '\u6587\u5B57\u4FE1\u606F',
          alignment: TextAlignment.right,
        ),
      ],
    );
  }</pre>
</td-code-block>
<p>\u5782\u76F4\u5206\u5272</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _horizontalTextDivider(BuildContext context) {
    return Container(
      alignment: Alignment.centerLeft,
      child: Row(
        mainAxisSize: MainAxisSize.min,
        mainAxisAlignment: MainAxisAlignment.start,
        children: [
          const SizedBox(
            width: 16,
          ),
          TDText(
            '\u6587\u5B57\u4FE1\u606F',
            textColor: TDTheme.of(context).fontGyColor1.withOpacity(0.9),
          ),
          const TDDivider(
            width: 0.5,
            height: 12,
            margin: EdgeInsets.only(left: 16, right: 16),
          ),
          TDText('\u6587\u5B57\u4FE1\u606F',
              textColor: TDTheme.of(context).fontGyColor1.withOpacity(0.9)),
          const TDDivider(
            width: 0.5,
            height: 12,
            margin: EdgeInsets.only(left: 16, right: 16),
            isDashed: true,
            direction: Axis.vertical,
          ),
          TDText('\u6587\u5B57\u4FE1\u606F',
              textColor: TDTheme.of(context).fontGyColor1.withOpacity(0.9)),
        ],
      ),
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u72B6\u6001">1 \u7EC4\u4EF6\u72B6\u6001 <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u72B6\u6001"></a></h3>
<p>\u865A\u7EBF\u6837\u5F0F</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _dashedDivider(BuildContext context) {
    return Column(
      children: const [
        SizedBox(
          height: 20,
        ),
        TDDivider(
          isDashed: true,
        ),
        SizedBox(
          height: 20,
        ),
        TDDivider(
          text: '\u6587\u5B57\u4FE1\u606F',
          alignment: TextAlignment.left,
          isDashed: true,
        ),
        SizedBox(
          height: 20,
        ),
        TDDivider(
          text: '\u6587\u5B57\u4FE1\u606F',
          alignment: TextAlignment.center,
          isDashed: true,
        ),
        SizedBox(
          height: 20,
        ),
        TDDivider(
          text: '\u6587\u5B57\u4FE1\u606F',
          alignment: TextAlignment.right,
          isDashed: true,
        ),
      ],
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tddivider">TDDivider</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tddivider">TDDivider <a class="header-anchor" href="#tddivider"></a></h3>
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
<td>color</td>
<td>Color?</td>
<td>-</td>
<td>\u7EBF\u6761\u989C\u8272</td>
</tr>
<tr>
<td>margin</td>
<td>EdgeInsetsGeometry?</td>
<td>-</td>
<td>\u5916\u90E8\u586B\u5145</td>
</tr>
<tr>
<td>width</td>
<td>double?</td>
<td>-</td>
<td>\u5BBD\u5EA6\uFF0C\u9700\u8981\u7AD6\u5411\u7EBF\u6761\u65F6\u4F7F\u7528</td>
</tr>
<tr>
<td>height</td>
<td>double?</td>
<td>-</td>
<td>\u9AD8\u5EA6\uFF0C\u6A2A\u5411\u7EBF\u6761\u4F7F\u7528</td>
</tr>
<tr>
<td>text</td>
<td>String?</td>
<td>-</td>
<td>\u6587\u672C\u5B57\u7B26\u4E32\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u6837\u5F0F</td>
</tr>
<tr>
<td>textStyle</td>
<td>TextStyle?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u6587\u672C\u6837\u5F0F</td>
</tr>
<tr>
<td>widget</td>
<td>Widget?</td>
<td>-</td>
<td>\u4E2D\u95F4\u63A7\u4EF6\uFF0C\u53EF\u81EA\u5B9A\u4E49\u6837\u5F0F</td>
</tr>
<tr>
<td>gapPadding</td>
<td>EdgeInsetsGeometry?</td>
<td>-</td>
<td>\u7EBF\u6761\u548C\u4E2D\u95F4\u6587\u672C\u4E4B\u95F4\u7684\u586B\u5145</td>
</tr>
<tr>
<td>hideLine</td>
<td>bool</td>
<td>false</td>
<td>\u9690\u85CF\u7EBF\u6761\uFF0C\u4F7F\u7528\u7EAF\u6587\u672C\u5206\u5272</td>
</tr>
<tr>
<td>isDashed</td>
<td>bool</td>
<td>false</td>
<td>\u662F\u5426\u4E3A\u865A\u7EBF</td>
</tr>
<tr>
<td>alignment</td>
<td>TextAlignment</td>
<td>TextAlignment.center</td>
<td>\u6587\u5B57\u4F4D\u7F6E</td>
</tr>
<tr>
<td>direction</td>
<td>Axis</td>
<td>Axis.horizontal</td>
<td>\u65B9\u5411,\u7AD6\u76F4\u865A\u7EBF\u5FC5\u987B\u4F20</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function s(l,c,g,h,p,m){const t=i("tdesign-doc");return r(),a(t)}var v=e(o,[["render",s]]);export{v as default};
