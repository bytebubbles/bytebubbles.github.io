import{T as n}from"./component.f9e366e0.js";import{_ as e,d,r,o as l,c as a}from"./site.66dd0425.js";const o=d({props:{docType:String},components:{TdesignDoc:n},provide:{info:{spline:"base",toc:!0,title:"Cell \u5355\u5143\u683C",description:"\u4E00\u884C\u5185\u5BB9/\u529F\u80FD\u7684\u5782\u76F4\u6392\u5217\u65B9\u5F0F\u3002\u4E00\u884C\u9879\u76EE\u5DE6\u4FA7\u4E3A\u4E3B\u8981\u5185\u5BB9\u5C55\u793A\u533A\u57DF\uFF0C\u53F3\u4FA7\u53EF\u589E\u52A0\u66F4\u591A\u64CD\u4F5C\u5185\u5BB9\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686015,componentName:"cell",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_cell_page.dart" target="_blank" rel="noopener noreferrer">td_cell_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u5355\u884C\u5355\u5143\u683C</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
Widget _buildSimple(BuildContext context) {
  return const TDCellGroup(
    cells: [
      TDCell(arrow: true, title: '\u5355\u884C\u6807\u9898'),
      TDCell(arrow: true, title: '\u5355\u884C\u6807\u9898', required: true),
      TDCell(arrow: true, title: '\u5355\u884C\u6807\u9898', noteWidget: TDBadge(TDBadgeType.message, count: '8')),
      TDCell(arrow: false, title: '\u5355\u884C\u6807\u9898', rightIconWidget: TDSwitch(isOn: true)),
      TDCell(arrow: true, title: '\u5355\u884C\u6807\u9898', note: '\u8F85\u52A9\u4FE1\u606F'),
      TDCell(arrow: true, title: '\u5355\u884C\u6807\u9898', leftIcon: TDIcons.lock_on),
      TDCell(arrow: false, title: '\u5355\u884C\u6807\u9898'),
    ],
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
Widget _buildSimple(BuildContext context) {
  return const TDCellGroup(
    cells: [
      TDCell(arrow: true, title: '\u5355\u884C\u6807\u9898'),
      TDCell(arrow: true, title: '\u5355\u884C\u6807\u9898', required: true),
      TDCell(arrow: true, title: '\u5355\u884C\u6807\u9898', noteWidget: TDBadge(TDBadgeType.message, count: '8')),
      TDCell(arrow: false, title: '\u5355\u884C\u6807\u9898', rightIconWidget: TDSwitch(isOn: true)),
      TDCell(arrow: true, title: '\u5355\u884C\u6807\u9898', note: '\u8F85\u52A9\u4FE1\u606F'),
      TDCell(arrow: true, title: '\u5355\u884C\u6807\u9898', leftIcon: TDIcons.lock_on),
      TDCell(arrow: false, title: '\u5355\u884C\u6807\u9898'),
    ],
  );
}</pre>
</td-code-block>
<p>\u591A\u884C\u5355\u5143\u683C</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
Widget _buildDesSimple(BuildContext context) {
  return const TDCellGroup(
    cells: [
      TDCell(arrow: true, title: '\u5355\u884C\u6807\u9898', description: '\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u6587\u5B57'),
      TDCell(arrow: true, title: '\u5355\u884C\u6807\u9898', description: '\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u6587\u5B57', required: true),
      TDCell(
          arrow: true, title: '\u5355\u884C\u6807\u9898', description: '\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u6587\u5B57', noteWidget: TDBadge(TDBadgeType.message, count: '8')),
      TDCell(arrow: false, title: '\u5355\u884C\u6807\u9898', description: '\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u6587\u5B57', rightIconWidget: TDSwitch(isOn: true)),
      TDCell(arrow: true, title: '\u5355\u884C\u6807\u9898', description: '\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u6587\u5B57', note: '\u8F85\u52A9\u4FE1\u606F'),
      TDCell(arrow: true, title: '\u5355\u884C\u6807\u9898', description: '\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u6587\u5B57\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u6587\u5B57\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185', leftIcon: TDIcons.lock_on),
      TDCell(arrow: false, title: '\u5355\u884C\u6807\u9898', description: '\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u6587\u5B57\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u6587\u5B57\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185'),
      TDCell(arrow: false, title: '\u591A\u884C\u9AD8\u5EA6\u4E0D\u5B9A\uFF0C\u957F\u6587\u672C\u81EA\u52A8\u6362\u884C\uFF0C\u8BE5\u9009\u9879\u7684\u63CF\u8FF0\u662F\u4E00\u6BB5\u5F88\u957F\u7684\u5185\u5BB9', description: '\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u6587\u5B57\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u6587\u5B57\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185'),
      TDCell(
        arrow: true,
        title: '\u591A\u884C\u5E26\u5934\u50CF',
        description: '\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u6587\u5B57',
        image: AssetImage('assets/img/td_avatar_1.png'),
      ),
      // NetworkImage('https://tdesign.gtimg.com/mobile/demos/avatar1.png')),
      TDCell(
        arrow: true,
        title: '\u591A\u884C\u5E26\u56FE\u7247',
        description: '\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u6587\u5B57',
        image: AssetImage('assets/img/image.png'),
        imageCircle: 8,
      ),
    ],
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
Widget _buildDesSimple(BuildContext context) {
  return const TDCellGroup(
    cells: [
      TDCell(arrow: true, title: '\u5355\u884C\u6807\u9898', description: '\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u6587\u5B57'),
      TDCell(arrow: true, title: '\u5355\u884C\u6807\u9898', description: '\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u6587\u5B57', required: true),
      TDCell(
          arrow: true, title: '\u5355\u884C\u6807\u9898', description: '\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u6587\u5B57', noteWidget: TDBadge(TDBadgeType.message, count: '8')),
      TDCell(arrow: false, title: '\u5355\u884C\u6807\u9898', description: '\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u6587\u5B57', rightIconWidget: TDSwitch(isOn: true)),
      TDCell(arrow: true, title: '\u5355\u884C\u6807\u9898', description: '\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u6587\u5B57', note: '\u8F85\u52A9\u4FE1\u606F'),
      TDCell(arrow: true, title: '\u5355\u884C\u6807\u9898', description: '\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u6587\u5B57\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u6587\u5B57\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185', leftIcon: TDIcons.lock_on),
      TDCell(arrow: false, title: '\u5355\u884C\u6807\u9898', description: '\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u6587\u5B57\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u6587\u5B57\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185'),
      TDCell(arrow: false, title: '\u591A\u884C\u9AD8\u5EA6\u4E0D\u5B9A\uFF0C\u957F\u6587\u672C\u81EA\u52A8\u6362\u884C\uFF0C\u8BE5\u9009\u9879\u7684\u63CF\u8FF0\u662F\u4E00\u6BB5\u5F88\u957F\u7684\u5185\u5BB9', description: '\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u6587\u5B57\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u6587\u5B57\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185'),
      TDCell(
        arrow: true,
        title: '\u591A\u884C\u5E26\u5934\u50CF',
        description: '\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u6587\u5B57',
        image: AssetImage('assets/img/td_avatar_1.png'),
      ),
      // NetworkImage('https://tdesign.gtimg.com/mobile/demos/avatar1.png')),
      TDCell(
        arrow: true,
        title: '\u591A\u884C\u5E26\u56FE\u7247',
        description: '\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u6587\u5B57',
        image: AssetImage('assets/img/image.png'),
        imageCircle: 8,
      ),
    ],
  );
}</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u6837\u5F0F">1 \u7EC4\u4EF6\u6837\u5F0F <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u6837\u5F0F"></a></h3>
<p>\u5361\u7247\u5355\u5143\u683C</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
Widget _buildCard(BuildContext context) {
  return const TDCellGroup(
    theme: TDCellGroupTheme.cardTheme,
    cells: [
      TDCell(arrow: true, title: '\u5355\u884C\u6807\u9898'),
      TDCell(arrow: true, title: '\u5355\u884C\u6807\u9898', required: true),
      TDCell(arrow: true, title: '\u5355\u884C\u6807\u9898'),
    ],
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
Widget _buildCard(BuildContext context) {
  return const TDCellGroup(
    theme: TDCellGroupTheme.cardTheme,
    cells: [
      TDCell(arrow: true, title: '\u5355\u884C\u6807\u9898'),
      TDCell(arrow: true, title: '\u5355\u884C\u6807\u9898', required: true),
      TDCell(arrow: true, title: '\u5355\u884C\u6807\u9898'),
    ],
  );
}</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdcellstyle">TDCellStyle</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdcell">TDCell</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdcellgroup">TDCellGroup</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdcellstyle">TDCellStyle <a class="header-anchor" href="#tdcellstyle"></a></h3>
<h4 id="\u7B80\u4ECB">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB"></a></h4>
<p>\u5355\u5143\u683C\u7EC4\u4EF6\u6837\u5F0F</p>
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
<td>leftIconColor</td>
<td>Color?</td>
<td>-</td>
<td>\u5DE6\u4FA7\u56FE\u6807\u989C\u8272</td>
</tr>
<tr>
<td>titleStyle</td>
<td>TextStyle?</td>
<td>-</td>
<td>\u6807\u9898\u6587\u5B57\u6837\u5F0F</td>
</tr>
<tr>
<td>requiredStyle</td>
<td>TextStyle?</td>
<td>-</td>
<td>\u5FC5\u586B\u661F\u53F7\u6587\u5B57\u6837\u5F0F</td>
</tr>
<tr>
<td>descriptionStyle</td>
<td>TextStyle?</td>
<td>-</td>
<td>\u5185\u5BB9\u63CF\u8FF0\u6587\u5B57\u6837\u5F0F</td>
</tr>
<tr>
<td>noteStyle</td>
<td>TextStyle?</td>
<td>-</td>
<td>\u8BF4\u660E\u6587\u5B57\u6837\u5F0F</td>
</tr>
<tr>
<td>arrowColor</td>
<td>Color?</td>
<td>-</td>
<td>\u7BAD\u5934\u989C\u8272</td>
</tr>
<tr>
<td>borderedColor</td>
<td>Color?</td>
<td>-</td>
<td>\u5355\u5143\u683C\u8FB9\u6846\u989C\u8272</td>
</tr>
<tr>
<td>groupBorderedColor</td>
<td>Color?</td>
<td>-</td>
<td>\u5355\u5143\u683C\u7EC4\u8FB9\u6846\u989C\u8272</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>Color?</td>
<td>-</td>
<td>\u9ED8\u8BA4\u72B6\u6001\u80CC\u666F\u989C\u8272</td>
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
<td>TDCellStyle.cellStyle</td>
<td>\u751F\u6210\u5355\u5143\u683C\u9ED8\u8BA4\u6837\u5F0F</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tdcell">TDCell <a class="header-anchor" href="#tdcell"></a></h3>
<h4 id="\u7B80\u4ECB-1">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB-1"></a></h4>
<p>\u5355\u5143\u683C\u7EC4\u4EF6</p>
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
<td>align</td>
<td>TDCellAlign?</td>
<td>TDCellAlign.middle</td>
<td>\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u9ED8\u8BA4\u5C45\u4E2D\u5BF9\u9F50\u3002\u53EF\u9009\u9879\uFF1Atop/middle/bottom</td>
</tr>
<tr>
<td>arrow</td>
<td>bool?</td>
<td>false</td>
<td>\u662F\u5426\u663E\u793A\u53F3\u4FA7\u7BAD\u5934</td>
</tr>
<tr>
<td>bordered</td>
<td>bool?</td>
<td>true</td>
<td>\u662F\u5426\u663E\u793A\u4E0B\u8FB9\u6846\uFF0C\u4EC5\u5728TDCellGroup\u7EC4\u4EF6\u4E0B\u8D77\u4F5C\u7528</td>
</tr>
<tr>
<td>description</td>
<td>String?</td>
<td>-</td>
<td>\u4E0B\u65B9\u5185\u5BB9\u63CF\u8FF0\u6587\u5B57</td>
</tr>
<tr>
<td>descriptionWidget</td>
<td>Widget?</td>
<td>-</td>
<td>\u4E0B\u65B9\u5185\u5BB9\u63CF\u8FF0\u7EC4\u4EF6</td>
</tr>
<tr>
<td>hover</td>
<td>bool?</td>
<td>true</td>
<td>\u662F\u5426\u5F00\u542F\u70B9\u51FB\u53CD\u9988</td>
</tr>
<tr>
<td>image</td>
<td>ImageProvider?</td>
<td>-</td>
<td>\u4E3B\u56FE</td>
</tr>
<tr>
<td>imageSize</td>
<td>double?</td>
<td>-</td>
<td>\u4E3B\u56FE\u5C3A\u5BF8</td>
</tr>
<tr>
<td>imageWidget</td>
<td>Widget?</td>
<td>-</td>
<td>\u4E3B\u56FE\u7EC4\u4EF6</td>
</tr>
<tr>
<td>leftIcon</td>
<td>IconData?</td>
<td>-</td>
<td>\u5DE6\u4FA7\u56FE\u6807\uFF0C\u51FA\u73B0\u5728\u5355\u5143\u683C\u6807\u9898\u7684\u5DE6\u4FA7</td>
</tr>
<tr>
<td>leftIconWidget</td>
<td>Widget?</td>
<td>-</td>
<td>\u5DE6\u4FA7\u56FE\u6807\u7EC4\u4EF6</td>
</tr>
<tr>
<td>note</td>
<td>String?</td>
<td>-</td>
<td>\u548C\u6807\u9898\u540C\u884C\u7684\u8BF4\u660E\u6587\u5B57</td>
</tr>
<tr>
<td>noteWidget</td>
<td>Widget?</td>
<td>-</td>
<td>\u8BF4\u660E\u6587\u5B57\u7EC4\u4EF6</td>
</tr>
<tr>
<td>required</td>
<td>bool?</td>
<td>false</td>
<td>\u662F\u5426\u663E\u793A\u8868\u5355\u5FC5\u586B\u661F\u53F7</td>
</tr>
<tr>
<td>title</td>
<td>String?</td>
<td>-</td>
<td>\u6807\u9898</td>
</tr>
<tr>
<td>titleWidget</td>
<td>Widget?</td>
<td>-</td>
<td>\u6807\u9898\u7EC4\u4EF6</td>
</tr>
<tr>
<td>onClick</td>
<td>TDCellClick?</td>
<td>-</td>
<td>\u70B9\u51FB\u4E8B\u4EF6</td>
</tr>
<tr>
<td>onLongPress</td>
<td>TDCellClick?</td>
<td>-</td>
<td>\u957F\u6309\u4E8B\u4EF6</td>
</tr>
<tr>
<td>style</td>
<td>TDCellStyle?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u6837\u5F0F</td>
</tr>
<tr>
<td>rightIcon</td>
<td>IconData?</td>
<td>-</td>
<td>\u6700\u53F3\u4FA7\u56FE\u6807</td>
</tr>
<tr>
<td>rightIconWidget</td>
<td>Widget?</td>
<td>-</td>
<td>\u6700\u53F3\u4FA7\u56FE\u6807\u7EC4\u4EF6</td>
</tr>
<tr>
<td>disabled</td>
<td>bool?</td>
<td>false</td>
<td>\u7981\u7528</td>
</tr>
<tr>
<td>imageCircle</td>
<td>double?</td>
<td>50</td>
<td>\u4E3B\u56FE\u5706\u89D2\uFF0C\u9ED8\u8BA450\uFF08\u5706\u5F62\uFF09</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tdcellgroup">TDCellGroup <a class="header-anchor" href="#tdcellgroup"></a></h3>
<h4 id="\u7B80\u4ECB-2">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB-2"></a></h4>
<p>\u5355\u5143\u683C\u7EC4\u7EC4\u4EF6</p>
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
<td>bordered</td>
<td>bool?</td>
<td>false</td>
<td>\u662F\u5426\u663E\u793A\u7EC4\u8FB9\u6846</td>
</tr>
<tr>
<td>theme</td>
<td>TDCellGroupTheme?</td>
<td>TDCellGroupTheme.defaultTheme</td>
<td>\u5355\u5143\u683C\u7EC4\u98CE\u683C\u3002\u53EF\u9009\u9879\uFF1Adefault/card</td>
</tr>
<tr>
<td>title</td>
<td>String?</td>
<td>-</td>
<td>\u5355\u5143\u683C\u7EC4\u6807\u9898</td>
</tr>
<tr>
<td>cells</td>
<td>List<TDCell></td>
<td>-</td>
<td>\u5355\u5143\u683C\u5217\u8868</td>
</tr>
<tr>
<td>builder</td>
<td>CellBuilder?</td>
<td>-</td>
<td>cell\u6784\u5EFA\u5668\uFF0C\u53EF\u81EA\u5B9A\u4E49cell\u7236\u7EC4\u4EF6\uFF0C\u5982Dismissible</td>
</tr>
<tr>
<td>style</td>
<td>TDCellStyle?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u6837\u5F0F</td>
</tr>
<tr>
<td>titleWidget</td>
<td>Widget?</td>
<td>-</td>
<td>\u5355\u5143\u683C\u7EC4\u6807\u9898\u7EC4\u4EF6</td>
</tr>
<tr>
<td>scrollable</td>
<td>bool?</td>
<td>false</td>
<td>\u53EF\u6EDA\u52A8</td>
</tr>
<tr>
<td>isShowLastBordered</td>
<td>bool?</td>
<td>false</td>
<td>\u662F\u5426\u663E\u793A\u6700\u540E\u4E00\u4E2Acell\u7684\u4E0B\u8FB9\u6846</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function i(s,c,p,g,h,u){const t=r("tdesign-doc");return l(),a(t)}var m=e(o,[["render",i]]);export{m as default};
