import{T as n}from"./component.6878da95.js";import{_ as e,d as a,r as o,o as d,c as s}from"./site.6fe70e23.js";const r=a({props:{docType:String},components:{TdesignDoc:n},provide:{info:{spline:"base",toc:!0,title:"BackTop \u8FD4\u56DE\u9876\u90E8",description:"\u7528\u4E8E\u5F53\u9875\u9762\u8FC7\u957F\u5F80\u4E0B\u6ED1\u52A8\u65F6\uFF0C\u5E2E\u52A9\u7528\u6237\u5FEB\u901F\u56DE\u5230\u9875\u9762\u9876\u90E8\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686014,componentName:"back-top",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_backtop_page.dart" target="_blank" rel="noopener noreferrer">td_backtop_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u5706\u5F62\u8FD4\u56DE\u9876\u90E8</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildCircleBackTop(BuildContext context) {
    return getCustomButton(context, '\u5706\u5F62\u8FD4\u56DE\u9876\u90E8', () {
      setState(() {
        showBackTop = true;
        if (controller.hasClients) {
          controller.jumpTo(500);
        }
        style = TDBackTopStyle.circle;
      });
    });
  }</pre>
</td-code-block>
<p>\u534A\u5706\u5F62\u8FD4\u56DE\u9876\u90E8</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildHalfCircleBackTop(BuildContext context) {
    return Column(
      children: [
        getCustomButton(context, '\u534A\u5706\u5F62\u8FD4\u56DE\u9876\u90E8', () {
          setState(() {
            showBackTop = true;
            if (controller.hasClients) {
              controller.jumpTo(500);
            }
            style = TDBackTopStyle.halfCircle;
          });
        }),
        Padding(
          padding: const EdgeInsets.only(left: 16, right: 16, top: 24),
          child: Wrap(
            spacing: 16,
            runSpacing: 24,
            children: [
              getDemoBox(context),
              getDemoBox(context),
              getDemoBox(context),
              getDemoBox(context),
              getDemoBox(context),
              getDemoBox(context),
            ],
          ),
        )
      ],
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdbacktop">TDBackTop</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdbacktop">TDBackTop <a class="header-anchor" href="#tdbacktop"></a></h3>
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
<td>controller</td>
<td>ScrollController?</td>
<td>-</td>
<td>\u9875\u9762\u6EDA\u52A8\u7684\u63A7\u5236\u5668</td>
</tr>
<tr>
<td>theme</td>
<td>TDBackTopTheme</td>
<td>TDBackTopTheme.light</td>
<td>\u4E3B\u9898</td>
</tr>
<tr>
<td>style</td>
<td>TDBackTopStyle</td>
<td>TDBackTopStyle.circle</td>
<td>\u6837\u5F0F\uFF0C\u5706\u5F62\u548C\u534A\u5706</td>
</tr>
<tr>
<td>showText</td>
<td>bool</td>
<td>false</td>
<td>\u662F\u5426\u5C55\u793A\u6587\u5B57</td>
</tr>
<tr>
<td>onClick</td>
<td>VoidCallback?</td>
<td>-</td>
<td>\u6309\u94AE\u70B9\u51FB\u4E8B\u4EF6</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function c(l,i,p,g,h,m){const t=o("tdesign-doc");return d(),s(t)}var k=e(r,[["render",c]]);export{k as default};
