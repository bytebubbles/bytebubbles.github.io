import{T as t}from"./component.9b32f023.js";import{_ as e,d,r as s,o as a,c as i}from"./site.b6fa4b6e.js";const r=d({props:{docType:String},components:{TdesignDoc:t},provide:{info:{spline:"base",toc:!0,title:"Steps \u6B65\u9AA4\u6761",description:"Steps\u6B65\u9AA4\u6761",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686020,componentName:"steps",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_steps_page.dart" target="_blank" rel="noopener noreferrer">td_steps_page.dart</a></p>
<h3 id="_1-\u6C34\u5E73\u9ED8\u8BA4\u6B65\u9AA4\u6761">1 \u6C34\u5E73\u9ED8\u8BA4\u6B65\u9AA4\u6761 <a class="header-anchor" href="#_1-\u6C34\u5E73\u9ED8\u8BA4\u6B65\u9AA4\u6761"></a></h3>
<p>\u6C34\u5E73\u9ED8\u8BA4\u6B65\u9AA4\u67611</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildBasicHSteps1(BuildContext context){
    return Padding(
      padding: const EdgeInsets.only(left: 16, right: 16),
      child: Row(
        children: [
          Expanded(
            flex: 1,
            child: TDSteps(
              steps: basicHStepsListData1,
            ),
          )
        ],
      ),
    );
  }</pre>
</td-code-block>
<p>\u6C34\u5E73\u9ED8\u8BA4\u6B65\u9AA4\u67612</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildBasicHSteps2(BuildContext context){
    return Padding(
      padding: const EdgeInsets.only(left: 16, right: 16),
      child: Row(
        children: [
          Expanded(
            flex: 1,
            child: TDSteps(
              steps: basicHStepsListData2,
              direction: TDStepsDirection.horizontal,
              activeIndex: 1,
            ),
          )
        ],
      ),
    );
  }</pre>
</td-code-block>
<p>\u6C34\u5E73\u9ED8\u8BA4\u6B65\u9AA4\u67613</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildBasicHSteps3(BuildContext context){
    return Padding(
      padding: const EdgeInsets.only(left: 16, right: 16),
      child: Row(
        children: [
          Expanded(
            flex: 1,
            child: TDSteps(
              steps: basicHStepsListData3,
              direction: TDStepsDirection.horizontal,
              activeIndex: 1,
            ),
          )
        ],
      ),
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u6C34\u5E73\u56FE\u6807\u6B65\u9AA4\u6761">1 \u6C34\u5E73\u56FE\u6807\u6B65\u9AA4\u6761 <a class="header-anchor" href="#_1-\u6C34\u5E73\u56FE\u6807\u6B65\u9AA4\u6761"></a></h3>
<p>\u6C34\u5E73\u56FE\u6807\u6B65\u9AA4\u67611</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildHIconSteps1(BuildContext context){
    return Padding(
      padding: const EdgeInsets.only(left: 16, right: 16),
      child: Row(
        children: [
          Expanded(
            flex: 1,
            child: TDSteps(
              steps: hIconStepsListData1,
              direction: TDStepsDirection.horizontal,
              activeIndex: 0,
            ),
          )
        ],
      ),
    );
  }</pre>
</td-code-block>
<p>\u6C34\u5E73\u56FE\u6807\u6B65\u9AA4\u67612</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildHIconSteps2(BuildContext context){
    return Padding(
      padding: const EdgeInsets.only(left: 16, right: 16),
      child: Row(
        children: [
          Expanded(
            flex: 1,
            child: TDSteps(
              steps: hIconStepsListData2,
              direction: TDStepsDirection.horizontal,
              activeIndex: 1,
            ),
          )
        ],
      ),
    );
  }</pre>
</td-code-block>
<p>\u6C34\u5E73\u56FE\u6807\u6B65\u9AA4\u67613</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildHIconSteps3(BuildContext context){
    return Padding(
      padding: const EdgeInsets.only(left: 16, right: 16),
      child: Row(
        children: [
          Expanded(
            flex: 1,
            child: TDSteps(
              steps: hIconStepsListData3,
              direction: TDStepsDirection.horizontal,
              activeIndex: 1,
            ),
          )
        ],
      ),
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u6C34\u5E73\u7B80\u7565\u6B65\u9AA4\u6761">1 \u6C34\u5E73\u7B80\u7565\u6B65\u9AA4\u6761 <a class="header-anchor" href="#_1-\u6C34\u5E73\u7B80\u7565\u6B65\u9AA4\u6761"></a></h3>
<p>\u6C34\u5E73\u7B80\u7565\u6B65\u9AA4\u67611</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSimpleHSteps1(BuildContext context){
    return Padding(
      padding: const EdgeInsets.only(left: 16, right: 16),
      child: Row(
        children: [
          Expanded(
            flex: 1,
            child: TDSteps(
              steps: simpleHStepsListData1,
              direction: TDStepsDirection.horizontal,
              activeIndex: 0,
              simple: true,
            ),
          )
        ],
      ),
    );
  }</pre>
</td-code-block>
<p>\u6C34\u5E73\u7B80\u7565\u6B65\u9AA4\u67612</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSimpleHSteps2(BuildContext context){
    return Padding(
      padding: const EdgeInsets.only(left: 16, right: 16),
      child: Row(
        children: [
          Expanded(
            flex: 1,
            child: TDSteps(
              steps: simpleHStepsListData2,
              direction: TDStepsDirection.horizontal,
              activeIndex: 1,
              simple: true,
            ),
          )
        ],
      ),
    );
  }</pre>
</td-code-block>
<p>\u6C34\u5E73\u7B80\u7565\u6B65\u9AA4\u67613</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSimpleHSteps3(BuildContext context){
    return Padding(
      padding: const EdgeInsets.only(left: 16, right: 16),
      child: Row(
        children: [
          Expanded(
            flex: 1,
            child: TDSteps(
              steps: simpleHStepsListData3,
              direction: TDStepsDirection.horizontal,
              activeIndex: 1,
              simple: true,
            ),
          )
        ],
      ),
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u6C34\u5E73\u9519\u8BEF\u72B6\u6001\u6B65\u9AA4\u6761">1 \u6C34\u5E73\u9519\u8BEF\u72B6\u6001\u6B65\u9AA4\u6761 <a class="header-anchor" href="#_1-\u6C34\u5E73\u9519\u8BEF\u72B6\u6001\u6B65\u9AA4\u6761"></a></h3>
<p>\u6C34\u5E73\u9519\u8BEF\u72B6\u6001\u57FA\u672C\u6B65\u9AA4\u6761</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildHErrorSteps1(BuildContext context){
    return Padding(
      padding: const EdgeInsets.only(left: 16, right: 16),
      child: Row(
        children: [
          Expanded(
            flex: 1,
            child: TDSteps(
              steps: hErrorStepsListData1,
              direction: TDStepsDirection.horizontal,
              activeIndex: 1,
              status: TDStepsStatus.error,
            ),
          )
        ],
      ),
    );
  }</pre>
</td-code-block>
<p>\u6C34\u5E73\u9519\u8BEF\u72B6\u6001\u56FE\u6807\u6B65\u9AA4\u6761</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildHErrorSteps2(BuildContext context){
    return Padding(
      padding: const EdgeInsets.only(left: 16, right: 16),
      child: Row(
        children: [
          Expanded(
            flex: 1,
            child: TDSteps(
              steps: hErrorStepsListData2,
              direction: TDStepsDirection.horizontal,
              activeIndex: 1,
              status: TDStepsStatus.error,
            ),
          )
        ],
      ),
    );
  }</pre>
</td-code-block>
<p>\u6C34\u5E73\u9519\u8BEF\u72B6\u6001\u7B80\u7565\u6B65\u9AA4\u6761</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildHErrorSteps3(BuildContext context){
    return Padding(
      padding: const EdgeInsets.only(left: 16, right: 16),
      child: Row(
        children: [
          Expanded(
            flex: 1,
            child: TDSteps(
              steps: hErrorStepsListData3,
              direction: TDStepsDirection.horizontal,
              activeIndex: 1,
              status: TDStepsStatus.error,
              simple: true,
            ),
          )
        ],
      ),
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u5782\u76F4\u6B65\u9AA4\u6761">1 \u5782\u76F4\u6B65\u9AA4\u6761 <a class="header-anchor" href="#_1-\u5782\u76F4\u6B65\u9AA4\u6761"></a></h3>
<p>\u5782\u76F4\u9ED8\u8BA4\u6B65\u9AA4\u6761</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildVBasicSteps(BuildContext context){
    return Padding(
      padding: const EdgeInsets.only(left: 16, right: 16),
      child: Row(
        children: [
          Expanded(
            flex: 1,
            child: TDSteps(
              steps: vBasicStepsListData,
              direction: TDStepsDirection.vertical,
              activeIndex: 1,
            ),
          )
        ],
      ),
    );
  }</pre>
</td-code-block>
<p>\u5782\u76F4\u56FE\u6807\u6B65\u9AA4\u6761</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildVIconSteps(BuildContext context){
    return Padding(
      padding: const EdgeInsets.only(left: 16, right: 16),
      child: Row(
        children: [
          Expanded(
            flex: 1,
            child: TDSteps(
              steps: vIconStepsListData,
              direction: TDStepsDirection.vertical,
              activeIndex: 1,
            ),
          )
        ],
      ),
    );
  }</pre>
</td-code-block>
<p>\u5782\u76F4\u7B80\u7565\u6B65\u9AA4\u6761</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildVSimpleSteps(BuildContext context){
    return Padding(
      padding: const EdgeInsets.only(left: 16, right: 16),
      child: Row(
        children: [
          Expanded(
            flex: 1,
            child: TDSteps(
              steps: vSimpleStepsListData,
              direction: TDStepsDirection.vertical,
              activeIndex: 1,
              simple: true,
            ),
          )
        ],
      ),
    );
  }</pre>
</td-code-block>
<p>\u5782\u76F4\u9519\u8BEF\u72B6\u6001\u57FA\u672C\u6B65\u9AA4\u6761</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildVErrorBasicSteps(BuildContext context){
    return Padding(
      padding: const EdgeInsets.only(left: 16, right: 16),
      child: Row(
        children: [
          Expanded(
            flex: 1,
            child: TDSteps(
              steps: vErrorBasicStepsListData,
              direction: TDStepsDirection.vertical,
              activeIndex: 1,
              status: TDStepsStatus.error,
            ),
          )
        ],
      ),
    );
  }</pre>
</td-code-block>
<p>\u5782\u76F4\u9519\u8BEF\u72B6\u6001\u56FE\u6807\u6B65\u9AA4\u6761</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildVErrorIconSteps(BuildContext context){
    return Padding(
      padding: const EdgeInsets.only(left: 16, right: 16),
      child: Row(
        children: [
          Expanded(
            flex: 1,
            child: TDSteps(
              steps: vErrorIconStepsListData,
              direction: TDStepsDirection.vertical,
              activeIndex: 1,
              status: TDStepsStatus.error,
            ),
          )
        ],
      ),
    );
  }</pre>
</td-code-block>
<p>\u5782\u76F4\u9519\u8BEF\u72B6\u6001\u7B80\u7565\u6B65\u9AA4\u6761</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildVErrorSimpleSteps(BuildContext context){
    return Padding(
      padding: const EdgeInsets.only(left: 16, right: 16),
      child: Row(
        children: [
          Expanded(
            flex: 1,
            child: TDSteps(
              steps: vErrorSimpleStepsListData,
              direction: TDStepsDirection.vertical,
              activeIndex: 1,
              simple: true,
              status: TDStepsStatus.error,
            ),
          )
        ],
      ),
    );
  }</pre>
</td-code-block>
<p>\u5782\u76F4\u81EA\u5B9A\u4E49\u5185\u5BB9\u57FA\u672C\u6B65\u9AA4\u6761</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildVCustomContentBaseSteps(BuildContext context){
    return Padding(
      padding: const EdgeInsets.only(left: 16, right: 16),
      child: Row(
        children: [
          Expanded(
            flex: 1,
            child: TDSteps(
              steps: vCustomContentBasicStepsListData,
              direction: TDStepsDirection.vertical,
              activeIndex: 1,
            ),
          )
        ],
      ),
    );
  }</pre>
</td-code-block>
<h3 id="_1-extension\u6B65\u9AA4\u6761">1 Extension\u6B65\u9AA4\u6761 <a class="header-anchor" href="#_1-extension\u6B65\u9AA4\u6761"></a></h3>
<p>Read-only Steps \u7EAF\u5C55\u793A\u6C34\u5E73\u6B65\u9AA4\u6761</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildHReadOnlySteps(BuildContext context){
    return Padding(
      padding: const EdgeInsets.only(left: 16, right: 16),
      child: Row(
        children: [
          Expanded(
            flex: 1,
            child: TDSteps(
              steps: hReadOnlyStepsListData,
              readOnly: true,
            ),
          )
        ],
      ),
    );
  }</pre>
</td-code-block>
<p>Read-only Steps \u7EAF\u5C55\u793A\u5782\u76F4\u6B65\u9AA4\u6761</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildVReadOnlySteps(BuildContext context){
    return Padding(
      padding: const EdgeInsets.only(left: 16, right: 16),
      child: Row(
        children: [
          Expanded(
            flex: 1,
            child: TDSteps(
              steps: vReadOnlyStepsListData,
              direction: TDStepsDirection.vertical,
              activeIndex: 0,
              readOnly: true,
            ),
          )
        ],
      ),
    );
  }</pre>
</td-code-block>
<p>Vertical Customize Steps \u5782\u76F4\u81EA\u5B9A\u4E49\u6B65\u9AA4\u6761</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildVCustomizeSteps(BuildContext context){
    return Padding(
      padding: const EdgeInsets.only(left: 16, right: 16),
      child: Row(
        children: [
          Expanded(
            flex: 1,
            child: TDSteps(
              steps: vCustomizeStepsListData,
              direction: TDStepsDirection.vertical,
              simple: true,
              activeIndex: 3,
              verticalSelect: true,
            ),
          )
        ],
      ),
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdstepsitemdata">TDStepsItemData</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdsteps">TDSteps</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdstepsitemdata">TDStepsItemData <a class="header-anchor" href="#tdstepsitemdata"></a></h3>
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
<td>title</td>
<td>String</td>
<td>-</td>
<td>\u6807\u9898</td>
</tr>
<tr>
<td>content</td>
<td>String</td>
<td>-</td>
<td>\u5185\u5BB9</td>
</tr>
<tr>
<td>successIcon</td>
<td>IconData?</td>
<td>-</td>
<td>\u6210\u529F\u56FE\u6807</td>
</tr>
<tr>
<td>errorIcon</td>
<td>IconData?</td>
<td>-</td>
<td>\u5931\u8D25\u56FE\u6807</td>
</tr>
<tr>
<td>customContent</td>
<td>Widget?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u5185\u5BB9</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tdsteps">TDSteps <a class="header-anchor" href="#tdsteps"></a></h3>
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
<td>steps</td>
<td>List<TDStepsItemData></td>
<td>-</td>
<td>\u6B65\u9AA4\u6761\u6570\u636E</td>
</tr>
<tr>
<td>activeIndex</td>
<td>int</td>
<td>0</td>
<td>\u6B65\u9AA4\u6761\u5F53\u524D\u6FC0\u6D3B\u7684\u7D22\u5F15</td>
</tr>
<tr>
<td>direction</td>
<td>TDStepsDirection</td>
<td>TDStepsDirection.horizontal</td>
<td>\u6B65\u9AA4\u6761\u65B9\u5411</td>
</tr>
<tr>
<td>status</td>
<td>TDStepsStatus</td>
<td>TDStepsStatus.success</td>
<td>\u6B65\u9AA4\u6761\u72B6\u6001</td>
</tr>
<tr>
<td>simple</td>
<td>bool</td>
<td>false</td>
<td>\u6B65\u9AA4\u6761simple\u6A21\u5F0F</td>
</tr>
<tr>
<td>readOnly</td>
<td>bool</td>
<td>false</td>
<td>\u6B65\u9AA4\u6761readOnly\u6A21\u5F0F</td>
</tr>
<tr>
<td>verticalSelect</td>
<td>bool</td>
<td>false</td>
<td>\u6B65\u9AA4\u6761\u5782\u76F4\u81EA\u5B9A\u4E49\u6B65\u9AA4\u6761\u9009\u62E9\u6A21\u5F0F</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function o(l,c,p,h,g,D){const n=s("tdesign-doc");return a(),i(n)}var x=e(r,[["render",o]]);export{x as default};
