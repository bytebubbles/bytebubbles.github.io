import{T as e}from"./component.f9e366e0.js";import{_ as n,d,r as a,o as r,c as p}from"./site.66dd0425.js";const s=d({props:{docType:String},components:{TdesignDoc:e},provide:{info:{spline:"base",toc:!0,title:"Stepper \u6B65\u8FDB\u5668",description:"\u7528\u4E8E\u6570\u91CF\u7684\u589E\u51CF\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686020,componentName:"stepper",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_stepper_page.dart" target="_blank" rel="noopener noreferrer">td_stepper_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u57FA\u7840\u6B65\u8FDB\u5668</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildStepperWithBase(BuildContext context) {
    return _buildRow(context, [
      const TDStepper(
        theme: TDStepperTheme.filled,
      )
    ]);
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u72B6\u6001">1 \u7EC4\u4EF6\u72B6\u6001 <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u72B6\u6001"></a></h3>
<p>\u6700\u5927\u6700\u5C0F\u72B6\u6001</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildStepperWithMaxMinStatus(BuildContext context) {
    return _buildRow(context, [
      const TDStepper(theme: TDStepperTheme.filled, value: 0, min: 0),
      const TDStepper(theme: TDStepperTheme.filled, value: 999, max: 999),
    ]);
  }</pre>
</td-code-block>
<p>\u7981\u7528\u72B6\u6001</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildStepperWithDisableStatus(BuildContext context) {
    return _buildRow(context, [
      const TDStepper(
        theme: TDStepperTheme.filled,
        disabled: true,
      ),
    ]);
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u6837\u5F0F">1 \u7EC4\u4EF6\u6837\u5F0F <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u6837\u5F0F"></a></h3>
<p>\u6B65\u8FDB\u5668\u6837\u5F0F</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildStepperWithTheme(BuildContext context) {
    return _buildRow(context, [
      const TDStepper(theme: TDStepperTheme.filled, value: 3),
      const TDStepper(theme: TDStepperTheme.outline, value: 3),
      const TDStepper(theme: TDStepperTheme.normal, value: 3),
    ]);
  }</pre>
</td-code-block>
<p>\u6B65\u8FDB\u5668\u5C3A\u5BF8</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildStepperWithSize(BuildContext context) {
    return _buildRow(context, [
      const TDStepper(
          size: TDStepperSize.large, theme: TDStepperTheme.filled, value: 3),
      const TDStepper(
          size: TDStepperSize.medium, theme: TDStepperTheme.filled, value: 3),
      const TDStepper(
          size: TDStepperSize.small, theme: TDStepperTheme.filled, value: 3),
    ]);
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdstepper">TDStepper</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdstepper">TDStepper <a class="header-anchor" href="#tdstepper"></a></h3>
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
<td>disableInput</td>
<td>bool</td>
<td>false</td>
<td>\u7981\u7528\u8F93\u5165\u6846</td>
</tr>
<tr>
<td>disabled</td>
<td>bool</td>
<td>false</td>
<td>\u7981\u7528\u5168\u90E8\u64CD\u4F5C</td>
</tr>
<tr>
<td>inputWidth</td>
<td>double?</td>
<td>-</td>
<td>\u7981\u7528\u5168\u90E8\u64CD\u4F5C</td>
</tr>
<tr>
<td>max</td>
<td>int</td>
<td>100</td>
<td>\u6700\u5927\u503C</td>
</tr>
<tr>
<td>min</td>
<td>int</td>
<td>0</td>
<td>\u6700\u5C0F\u503C</td>
</tr>
<tr>
<td>size</td>
<td>TDStepperSize</td>
<td>TDStepperSize.medium</td>
<td>\u7EC4\u4EF6\u5C3A\u5BF8</td>
</tr>
<tr>
<td>step</td>
<td>int</td>
<td>1</td>
<td>\u6B65\u957F</td>
</tr>
<tr>
<td>theme</td>
<td>TDStepperTheme</td>
<td>TDStepperTheme.normal</td>
<td>\u7EC4\u4EF6\u98CE\u683C</td>
</tr>
<tr>
<td>value</td>
<td>int?</td>
<td>0</td>
<td>\u503C</td>
</tr>
<tr>
<td>defaultValue</td>
<td>int?</td>
<td>0</td>
<td>\u9ED8\u8BA4\u503C</td>
</tr>
<tr>
<td>onBlur</td>
<td>VoidCallback?</td>
<td>-</td>
<td>\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td>
</tr>
<tr>
<td>onChange</td>
<td>ValueChanged<int>?</td>
<td>-</td>
<td>\u6570\u503C\u53D1\u751F\u53D8\u66F4\u65F6\u89E6\u53D1</td>
</tr>
<tr>
<td>onOverlimit</td>
<td>TDStepperOverlimitFunction?</td>
<td>-</td>
<td>\u6570\u503C\u8D85\u51FA\u9650\u5236\u65F6\u89E6\u53D1</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function o(i,l,c,h,m,g){const t=a("tdesign-doc");return r(),p(t)}var T=n(s,[["render",o]]);export{T as default};
