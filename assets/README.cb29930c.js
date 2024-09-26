import{T as n}from"./component.9b32f023.js";import{_ as e,d,r as i,o as a,c as o}from"./site.b6fa4b6e.js";const r=d({props:{docType:String},components:{TdesignDoc:n},provide:{info:{spline:"base",toc:!0,title:"Switch \u5F00\u5173",description:"\u7528\u4E8E\u63A7\u5236\u67D0\u4E2A\u529F\u80FD\u7684\u5F00\u542F\u548C\u5173\u95ED\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686020,componentName:"switch",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_switch_page.dart" target="_blank" rel="noopener noreferrer">td_switch_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u57FA\u7840\u5F00\u5173</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSwitchWithBase(BuildContext context) {
    return _buildItem(
      context,
      const TDSwitch(),
      title: '\u57FA\u7840\u5F00\u5173',
    );
  }</pre>
</td-code-block>
<p>\u5E26\u63CF\u8FF0\u5F00\u5173</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSwitchWithText(BuildContext context) {
    return _buildItem(
      context,
      const TDSwitch(isOn: true, type: TDSwitchType.text),
      title: '\u5E26\u6587\u5B57\u5F00\u5173',
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSwitchWithIcon(BuildContext context) {
    return _buildItem(
      context,
      const TDSwitch(isOn: true, type: TDSwitchType.icon),
      title: '\u5E26\u56FE\u6807\u5F00\u5173',
    );
  }</pre>
</td-code-block>
<p>\u81EA\u5B9A\u4E49\u989C\u8272\u5F00\u5173</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSwitchWithColor(BuildContext context) {
    return _buildItem(
      context,
      const TDSwitch(isOn: true, trackOnColor: Colors.green),
      title: '\u81EA\u5B9A\u4E49\u989C\u8272\u5F00\u5173',
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u72B6\u6001">1 \u7EC4\u4EF6\u72B6\u6001 <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u72B6\u6001"></a></h3>
<p>\u52A0\u8F7D\u72B6\u6001</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSwitchWithLoadingOff(BuildContext context) {
    return _buildItem(
      context,
      const TDSwitch(
        isOn: false,
        type: TDSwitchType.loading,
      ),
      title: '\u52A0\u8F7D\u72B6\u6001',
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSwitchWithLoadingOn(BuildContext context) {
    return _buildItem(
      context,
      const TDSwitch(
        isOn: true,
        type: TDSwitchType.loading,
      ),
      title: '\u52A0\u8F7D\u72B6\u6001',
    );
  }</pre>
</td-code-block>
<p>\u7981\u7528\u72B6\u6001</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSwitchWithDisableOff(BuildContext context) {
    return _buildItem(
      context,
      const TDSwitch(
        enable: false,
        isOn: false,
      ),
      title: '\u7981\u7528\u72B6\u6001',
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSwitchWithDisableOn(BuildContext context) {
    return _buildItem(
      context,
      const TDSwitch(
        enable: false,
        isOn: true,
      ),
      title: '\u7981\u7528\u72B6\u6001',
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u6837\u5F0F">1 \u7EC4\u4EF6\u6837\u5F0F <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u6837\u5F0F"></a></h3>
<p>\u5F00\u5173\u5C3A\u5BF8</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSwitchWithSizeLarge(BuildContext context) {
    return _buildItem(
      context,
      const TDSwitch(
        isOn: true,
        size: TDSwitchSize.large,
      ),
      title: '\u5927\u5C3A\u5BF832',
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSwitchWithSizeMed(BuildContext context) {
    return _buildItem(
      context,
      const TDSwitch(
        isOn: true,
        size: TDSwitchSize.medium,
      ),
      title: '\u4E2D\u5C3A\u5BF828',
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSwitchWithSizeSmall(BuildContext context) {
    return _buildItem(
      context,
      const TDSwitch(
        isOn: true,
        size: TDSwitchSize.small,
      ),
      title: '\u5C0F\u5C3A\u5BF824',
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdswitch">TDSwitch</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdswitch">TDSwitch <a class="header-anchor" href="#tdswitch"></a></h3>
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
<td>enable</td>
<td>bool</td>
<td>true</td>
<td>\u662F\u5426\u53EF\u70B9\u51FB</td>
</tr>
<tr>
<td>isOn</td>
<td>bool</td>
<td>false</td>
<td>\u662F\u5426\u6253\u5F00</td>
</tr>
<tr>
<td>size</td>
<td>TDSwitchSize?</td>
<td>TDSwitchSize.medium</td>
<td>\u5C3A\u5BF8\uFF1A\u5927\u3001\u4E2D\u3001\u5C0F</td>
</tr>
<tr>
<td>type</td>
<td>TDSwitchType?</td>
<td>TDSwitchType.fill</td>
<td>\u7C7B\u578B\uFF1A\u586B\u5145\u3001\u6587\u672C\u3001\u52A0\u8F7D</td>
</tr>
<tr>
<td>trackOnColor</td>
<td>Color?</td>
<td>-</td>
<td>\u5F00\u542F\u65F6\u8F68\u9053\u989C\u8272</td>
</tr>
<tr>
<td>trackOffColor</td>
<td>Color?</td>
<td>-</td>
<td>\u5173\u95ED\u65F6\u8F68\u9053\u989C\u8272</td>
</tr>
<tr>
<td>thumbContentOnColor</td>
<td>Color?</td>
<td>-</td>
<td>\u5F00\u542F\u65F6ThumbView\u7684\u989C\u8272</td>
</tr>
<tr>
<td>thumbContentOffColor</td>
<td>Color?</td>
<td>-</td>
<td>\u5173\u95ED\u65F6ThumbView\u7684\u989C\u8272</td>
</tr>
<tr>
<td>onChanged</td>
<td>OnSwitchChanged?</td>
<td>-</td>
<td>\u6539\u53D8\u4E8B\u4EF6</td>
</tr>
<tr>
<td>openText</td>
<td>String?</td>
<td>-</td>
<td>\u6253\u5F00\u6587\u6848</td>
</tr>
<tr>
<td>closeText</td>
<td>String?</td>
<td>-</td>
<td>\u5173\u95ED\u6587\u6848</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function c(s,l,p,h,g,b){const t=i("tdesign-doc");return a(),o(t)}var _=e(r,[["render",c]]);export{_ as default};
