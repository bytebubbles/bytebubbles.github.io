import{T as n}from"./component.f9e366e0.js";import{_ as e,d,r as a,o as r,c as s}from"./site.66dd0425.js";const o=d({props:{docType:String},components:{TdesignDoc:n},provide:{info:{spline:"base",toc:!0,title:"Search \u641C\u7D22\u6846",description:"\u7528\u4E8E\u4E00\u7EC4\u9884\u8BBE\u6570\u636E\u4E2D\u7684\u9009\u62E9\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686020,componentName:"search",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_search_page.dart" target="_blank" rel="noopener noreferrer">td_search_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u57FA\u7840\u641C\u7D22\u6846</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildDefaultSearchBar(BuildContext context) {
    return _buildColumnWidgets(
        context,
        TDSearchBar(
          placeHolder: '\u641C\u7D22\u9884\u8BBE\u6587\u6848',
          onTextChanged: (String text) {
            setState(() {
              inputText = text;
            });
          },
        ));
  }</pre>
</td-code-block>
<p>\u83B7\u53D6\u7126\u70B9\u540E\u663E\u793A\u53D6\u6D88\u6309\u94AE</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildFocusSearchBar(BuildContext context) {
    return const TDSearchBar(
      placeHolder: '\u641C\u7D22\u9884\u8BBE\u6587\u6848',
      needCancel: true,
      autoFocus: true,
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u6837\u5F0F">1 \u7EC4\u4EF6\u6837\u5F0F <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u6837\u5F0F"></a></h3>
<p>\u641C\u7D22\u6846\u5F62\u72B6</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSearchBarWithShape(BuildContext context) {
    return Column(
      children: [
        _buildColumnWidgets(
          context,
          TDSearchBar(
            placeHolder: '\u641C\u7D22\u9884\u8BBE\u6587\u6848',
            style: TDSearchStyle.square,
            onTextChanged: (String text) {
              setState(() {
                inputText = text;
              });
            },
          ),
        ),
        _buildColumnWidgets(
          context,
          TDSearchBar(
            placeHolder: '\u641C\u7D22\u9884\u8BBE\u6587\u6848',
            style: TDSearchStyle.round,
            onTextChanged: (String text) {
              setState(() {
                inputText = text;
              });
            },
          ),
        ),
      ],
    );
  }</pre>
</td-code-block>
<p>\u9ED8\u8BA4\u72B6\u6001\u5176\u4ED6\u5BF9\u9F50\u65B9\u5F0F</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildCenterSearchBar(BuildContext context) {
    return TDSearchBar(
      placeHolder: '\u641C\u7D22\u9884\u8BBE\u6587\u6848',
      alignment: TDSearchAlignment.center,
      onTextChanged: (String text) {
        setState(() {
          inputText = text;
        });
      },
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdsearchbar">TDSearchBar</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdsearchbar">TDSearchBar <a class="header-anchor" href="#tdsearchbar"></a></h3>
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
<td>placeHolder</td>
<td>String?</td>
<td>-</td>
<td>\u9884\u8BBE\u6587\u6848</td>
</tr>
<tr>
<td>style</td>
<td>TDSearchStyle?</td>
<td>TDSearchStyle.square</td>
<td>\u6837\u5F0F</td>
</tr>
<tr>
<td>alignment</td>
<td>TDSearchAlignment?</td>
<td>TDSearchAlignment.left</td>
<td>\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u5C45\u4E2D\u6216\u8FD9\u5934\u90E8\u5BF9\u9F50</td>
</tr>
<tr>
<td>onTextChanged</td>
<td>TDSearchBarEvent?</td>
<td>-</td>
<td>\u6587\u5B57\u6539\u53D8\u56DE\u8C03</td>
</tr>
<tr>
<td>onSubmitted</td>
<td>TDSearchBarEvent?</td>
<td>-</td>
<td>\u63D0\u4EA4\u56DE\u8C03</td>
</tr>
<tr>
<td>onEditComplete</td>
<td>TDSearchBarCallBack?</td>
<td>-</td>
<td>\u7F16\u8F91\u5B8C\u6210\u56DE\u8C03</td>
</tr>
<tr>
<td>autoHeight</td>
<td>bool</td>
<td>false</td>
<td>\u662F\u5426\u81EA\u52A8\u8BA1\u7B97\u9AD8\u5EA6</td>
</tr>
<tr>
<td>padding</td>
<td>EdgeInsets</td>
<td>const EdgeInsets.fromLTRB(16, 8, 16, 8)</td>
<td>\u5185\u90E8\u586B\u5145</td>
</tr>
<tr>
<td>autoFocus</td>
<td>bool</td>
<td>false</td>
<td>\u662F\u5426\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</td>
</tr>
<tr>
<td>mediumStyle</td>
<td>bool</td>
<td>false</td>
<td>\u662F\u5426\u5728\u5BFC\u822A\u680F\u4E2D\u7684\u6837\u5F0F</td>
</tr>
<tr>
<td>needCancel</td>
<td>bool</td>
<td>false</td>
<td>\u662F\u5426\u9700\u8981\u53D6\u6D88\u6309\u94AE</td>
</tr>
<tr>
<td>controller</td>
<td>TextEditingController?</td>
<td>-</td>
<td>\u63A7\u5236\u5668</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>Color?</td>
<td>Colors.white</td>
<td>\u80CC\u666F\u989C\u8272</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function c(l,i,p,h,g,u){const t=a("tdesign-doc");return r(),s(t)}var _=e(o,[["render",c]]);export{_ as default};
