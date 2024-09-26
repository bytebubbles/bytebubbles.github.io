import{T as n}from"./component.6878da95.js";import{_ as t,d as a,r as d,o as l,c as o}from"./site.6fe70e23.js";const s=a({props:{docType:String},components:{TdesignDoc:n},provide:{info:{spline:"base",toc:!0,title:"Collapse \u6298\u53E0\u9762\u677F",description:"\u53EF\u4EE5\u6298\u53E0/\u5C55\u5F00\u7684\u5185\u5BB9\u533A\u57DF\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686015,componentName:"collapse",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_collapse_page.dart" target="_blank" rel="noopener noreferrer">td_collapse_page.dart</a></p>
<h3 id="_1-type-\u7EC4\u4EF6\u7C7B\u578B">1 Type \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-type-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>Basic \u57FA\u7840\u6298\u53E0\u9762\u677F</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildBasicCollapse(BuildContext context) {
    return TDCollapse(
      style: TDCollapseStyle.block,
      expansionCallback: (int index, bool isExpanded) {
        setState(() {
          _basicData[index].isExpanded = !isExpanded;
        });
      },
      children: _basicData.map((CollapseDataItem item) {
        return TDCollapsePanel(
          headerBuilder: (BuildContext context, bool isExpanded) {
            return Text(item.headerValue);
          },
          isExpanded: item.isExpanded,
          body: const Text(randomString),
        );
      }).toList(),
    );
  }</pre>
</td-code-block>
<p>with Operation Instructions \u5E26\u64CD\u4F5C\u8BF4\u660E</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildCollapseWithOperationText(BuildContext context) {
    return TDCollapse(
      style: TDCollapseStyle.block,
      expansionCallback: (int index, bool isExpanded) {
        setState(() {
          _blockStyleWithOpText[index].isExpanded = !isExpanded;
        });
      },
      children: _blockStyleWithOpText.map((CollapseDataItem item) {
        return TDCollapsePanel(
          headerBuilder: (BuildContext context, bool isExpanded) {
            return Text(item.headerValue);
          },
          expandIconTextBuilder: (BuildContext context, bool isExpanded) {
            return isExpanded ? '\u6536\u8D77' : '\u5C55\u5F00';
          },
          isExpanded: item.isExpanded,
          body: const Text(randomString),
        );
      }).toList(),
    );
  }</pre>
</td-code-block>
<p>Accordion \u624B\u98CE\u7434\u5F0F</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildAccordionCollapse(BuildContext context) {
    return TDCollapse.accordion(
      style: TDCollapseStyle.block,
      expansionCallback: (int index, bool isExpanded) {
        setState(() {
          _accordionData[index].isExpanded = !isExpanded;
        });
      },
      children: _accordionData.map((CollapseDataItem item) {
        return TDCollapsePanel(
          headerBuilder: (BuildContext context, bool isExpanded) {
            return Text(item.headerValue);
          },
          isExpanded: item.isExpanded,
          body: const Text(randomString),
          value: item.expandedValue,
        );
      }).toList(),
    );
  }</pre>
</td-code-block>
<h3 id="_1-style-\u7EC4\u4EF6\u6837\u5F0F">1 Style \u7EC4\u4EF6\u6837\u5F0F <a class="header-anchor" href="#_1-style-\u7EC4\u4EF6\u6837\u5F0F"></a></h3>
<p>Block Style \u901A\u680F\u6837\u5F0F</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildBlockStyleCollapse(BuildContext context) {
    return TDCollapse(
      style: TDCollapseStyle.block,
      expansionCallback: (int index, bool isExpanded) {
        setState(() {
          _blockStyleData[index].isExpanded = !isExpanded;
        });
      },
      children: _blockStyleData.map((CollapseDataItem item) {
        return TDCollapsePanel(
          headerBuilder: (BuildContext context, bool isExpanded) {
            return Text(item.headerValue);
          },
          isExpanded: item.isExpanded,
          body: const Text(randomString),
        );
      }).toList(),
    );
  }</pre>
</td-code-block>
<p>Card Style \u5361\u7247\u6837\u5F0F</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildCardCollapse(BuildContext context) {
    return TDCollapse(
      style: TDCollapseStyle.card,
      expansionCallback: (int index, bool isExpanded) {
        setState(() {
          _cardStyleData[index].isExpanded = !isExpanded;
        });
      },
      children: _cardStyleData.map((CollapseDataItem item) {
        return TDCollapsePanel(
          headerBuilder: (BuildContext context, bool isExpanded) {
            return Text(item.headerValue);
          },
          isExpanded: item.isExpanded,
          body: const Text(randomString),
        );
      }).toList(),
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdcollapse">TDCollapse</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdcollapse">TDCollapse <a class="header-anchor" href="#tdcollapse"></a></h3>
<h4 id="\u7B80\u4ECB">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB"></a></h4>
<p>\u6298\u53E0\u9762\u677F\u5217\u8868\u7EC4\u4EF6\uFF0C\u9700\u914D\u5408 [TDCollapsePanel] \u4F7F\u7528</p>
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
<td>children</td>
<td>List<TDCollapsePanel></td>
<td>-</td>
<td>\u6298\u53E0\u9762\u677F\u5217\u8868\u7684\u5B50\u7EC4\u4EF6</td>
</tr>
<tr>
<td>style</td>
<td>TDCollapseStyle</td>
<td>TDCollapseStyle.block</td>
<td>\u6298\u53E0\u9762\u677F\u5217\u8868\u7684\u6837\u5F0F</td>
</tr>
<tr>
<td>expansionCallback</td>
<td>ExpansionPanelCallback?</td>
<td>-</td>
<td>\u6298\u53E0\u9762\u677F\u5217\u8868\u7684\u56DE\u8C03\u51FD\u6570\uFF1B</td>
</tr>
<tr>
<td>animationDuration</td>
<td>Duration</td>
<td>kThemeAnimationDuration</td>
<td>\u6298\u53E0\u9762\u677F\u5217\u8868\u7684\u52A8\u753B\u65F6\u957F</td>
</tr>
<tr>
<td>elevation</td>
<td>double</td>
<td>0</td>
<td>\u6298\u53E0\u9762\u677F\u5217\u8868\u7684\u9634\u5F71</td>
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
<td>TDCollapse.accordion</td>
<td></td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function i(r,p,c,h,x,b){const e=d("tdesign-doc");return l(),o(e)}var u=t(s,[["render",i]]);export{u as default};
