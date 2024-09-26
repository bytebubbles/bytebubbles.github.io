import{T as n}from"./component.6878da95.js";import{_ as d,d as e,r,o as i,c as a}from"./site.6fe70e23.js";const l=e({props:{docType:String},components:{TdesignDoc:n},provide:{info:{spline:"base",toc:!0,title:"Picker \u9009\u62E9\u5668",description:"\u7528\u4E8E\u4E00\u7EC4\u9884\u8BBE\u6570\u636E\u4E2D\u7684\u9009\u62E9\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686019,componentName:"picker",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_picker_page.dart" target="_blank" rel="noopener noreferrer">td_picker_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u57FA\u7840\u9009\u62E9\u5668--\u5730\u533A</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget buildArea(BuildContext context) {
    return GestureDetector(
      onTap: (){
        TDPicker.showMultiPicker(context, title: '\u9009\u62E9\u5730\u533A',
            onConfirm: (selected) {
              setState(() {
                selected_1 = '\${data_1[selected[0]]}';
              });
              Navigator.of(context).pop();
            }, data: [data_1]);
      },
      child: buildSelectRow(context, selected_1, '\u9009\u62E9\u5730\u533A'),
    );
  }</pre>
</td-code-block>
<p>\u57FA\u7840\u9009\u62E9\u5668--\u65F6\u95F4</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget buildTime(BuildContext context) {
    return GestureDetector(
      onTap: (){
        TDPicker.showMultiPicker(context, title: '\u9009\u62E9\u65F6\u95F4',
            onConfirm: (selected) {
              setState(() {
                selected_2 = '\${data_2[0][selected[0]]} \${data_2[1][selected[1]]}';
              });
              Navigator.of(context).pop();
            }, data: data_2);
      },
      child: buildSelectRow(context, selected_2, '\u9009\u62E9\u65F6\u95F4'),
    );
  }</pre>
</td-code-block>
<p>\u57FA\u7840\u9009\u62E9\u5668--\u5730\u533A--\u8054\u52A8</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget buildMultiArea(BuildContext context) {
    return GestureDetector(
      onTap: (){
        TDPicker.showMultiLinkedPicker(context, title: '\u9009\u62E9\u5730\u533A',
            onConfirm: (selected) {
              setState(() {
                selected_3 = '\${selected[0]} \${selected[1]} \${selected[2]}';
              });
              Navigator.of(context).pop();
            },
            data: data_3,
            columnNum: 3,
            initialData: ['\u6D59\u6C5F\u7701', '\u676D\u5DDE\u5E02', '\u897F\u6E56\u533A']);
      },
      child: buildSelectRow(context, selected_3, '\u9009\u62E9\u5730\u533A'),
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u6837\u5F0F">1 \u7EC4\u4EF6\u6837\u5F0F <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u6837\u5F0F"></a></h3>
<p>\u5E26\u6807\u9898\u9009\u62E9\u5668</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget buildAreaWithTitle(BuildContext context) {
    return GestureDetector(
      onTap: (){
        TDPicker.showMultiPicker(context, title: '\u9009\u62E9\u5730\u533A',
            onConfirm: (selected) {
              setState(() {
                selected_4 = '\${data_1[selected[0]]}';
              });
              Navigator.of(context).pop();
            }, data: [data_1]);
      },
      child: buildSelectRow(context, selected_4, '\u5E26\u6807\u9898\u9009\u62E9\u5668'),
    );
  }</pre>
</td-code-block>
<p>\u65E0\u6807\u9898\u9009\u62E9\u5668</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget buildAreaWithoutTitle(BuildContext context) {
    return GestureDetector(
      onTap: (){
        TDPicker.showMultiPicker(context, title: '',
            onConfirm: (selected) {
              setState(() {
                selected_5 = '\${data_1[selected[0]]}';
              });
              Navigator.of(context).pop();
            }, data: [data_1]);
      },
      child: buildSelectRow(context, selected_5, '\u65E0\u6807\u9898\u9009\u62E9\u5668'),
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdmultipicker">TDMultiPicker</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdmultilinkedpicker">TDMultiLinkedPicker</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#multilinkedpickermodel">MultiLinkedPickerModel</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdpicker">TDPicker</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdmultipicker">TDMultiPicker <a class="header-anchor" href="#tdmultipicker"></a></h3>
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
<td>String?</td>
<td>-</td>
<td>\u9009\u62E9\u5668\u6807\u9898</td>
</tr>
<tr>
<td>onConfirm</td>
<td>MultiPickerCallback?</td>
<td>-</td>
<td>\u9009\u62E9\u5668\u786E\u8BA4\u6309\u94AE\u56DE\u8C03</td>
</tr>
<tr>
<td>onCancel</td>
<td>MultiPickerCallback?</td>
<td>-</td>
<td>\u9009\u62E9\u5668\u53D6\u6D88\u6309\u94AE\u56DE\u8C03</td>
</tr>
<tr>
<td>data</td>
<td>Map</td>
<td>-</td>
<td>\u603B\u7684\u6570\u636E</td>
</tr>
<tr>
<td>pickerHeight</td>
<td>double</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>pickerItemCount</td>
<td>int</td>
<td>-</td>
<td>\u9009\u62E9\u5668List\u89C6\u7A97\u4E2Ditem\u4E2A\u6570\uFF0CpickerHeight / pickerItemCount\u5373item\u9AD8\u5EA6</td>
</tr>
<tr>
<td>initialIndexes</td>
<td>List<int>?</td>
<td>-</td>
<td>\u82E5\u4E3Anull\u8868\u793A\u5168\u90E8\u4ECE\u96F6\u5F00\u59CB</td>
</tr>
<tr>
<td>leftTextStyle</td>
<td>TextStyle?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u6587\u6848\u6837\u5F0F</td>
</tr>
<tr>
<td>rightTextStyle</td>
<td>TextStyle?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u53F3\u4FA7\u6587\u6848\u6837\u5F0F</td>
</tr>
<tr>
<td>centerTextStyle</td>
<td>TextStyle?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u4E2D\u95F4\u6587\u6848\u6837\u5F0F</td>
</tr>
<tr>
<td>titleHeight</td>
<td>double?</td>
<td>-</td>
<td>\u6807\u9898\u9AD8\u5EA6</td>
</tr>
<tr>
<td>topPadding</td>
<td>double?</td>
<td>-</td>
<td>\u9876\u90E8\u586B\u5145</td>
</tr>
<tr>
<td>leftPadding</td>
<td>double?</td>
<td>-</td>
<td>\u5DE6\u8FB9\u586B\u5145</td>
</tr>
<tr>
<td>rightPadding</td>
<td>double?</td>
<td>-</td>
<td>\u53F3\u8FB9\u586B\u5145</td>
</tr>
<tr>
<td>titleDividerColor</td>
<td>Color?</td>
<td>-</td>
<td>\u6807\u9898\u5206\u5272\u7EBF\u989C\u8272</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>Color?</td>
<td>-</td>
<td>\u80CC\u666F\u989C\u8272</td>
</tr>
<tr>
<td>topRadius</td>
<td>double?</td>
<td>-</td>
<td>\u9876\u90E8\u5706\u89D2</td>
</tr>
<tr>
<td>padding</td>
<td>EdgeInsets?</td>
<td>-</td>
<td>\u9002\u914Dpadding</td>
</tr>
<tr>
<td>itemDistanceCalculator</td>
<td>ItemDistanceCalculator?</td>
<td>-</td>
<td>\u4E0D\u540C\u8DDD\u79BB\u81EA\u9009\u9879\u8BA1\u7B97\u7B56\u7565</td>
</tr>
<tr>
<td>customSelectWidget</td>
<td>Widget?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u9009\u62E9\u6846\u6837\u5F0F</td>
</tr>
<tr>
<td>key</td>
<td></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tdmultilinkedpicker">TDMultiLinkedPicker <a class="header-anchor" href="#tdmultilinkedpicker"></a></h3>
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
<td>title</td>
<td>String?</td>
<td>-</td>
<td>\u9009\u62E9\u5668\u6807\u9898</td>
</tr>
<tr>
<td>onConfirm</td>
<td>MultiPickerCallback?</td>
<td>-</td>
<td>\u9009\u62E9\u5668\u786E\u8BA4\u6309\u94AE\u56DE\u8C03</td>
</tr>
<tr>
<td>onCancel</td>
<td>MultiPickerCallback?</td>
<td>-</td>
<td>\u9009\u62E9\u5668\u53D6\u6D88\u6309\u94AE\u56DE\u8C03</td>
</tr>
<tr>
<td>selectedData</td>
<td>List</td>
<td>-</td>
<td>\u9009\u4E2D\u6570\u636E</td>
</tr>
<tr>
<td>data</td>
<td>Map</td>
<td>-</td>
<td>\u603B\u7684\u6570\u636E</td>
</tr>
<tr>
<td>columnNum</td>
<td>int</td>
<td>-</td>
<td>\u603B\u5217\u6570</td>
</tr>
<tr>
<td>pickerHeight</td>
<td>double</td>
<td>200</td>
<td></td>
</tr>
<tr>
<td>pickerItemCount</td>
<td>int</td>
<td>5</td>
<td>\u9009\u62E9\u5668List\u89C6\u7A97\u4E2Ditem\u4E2A\u6570\uFF0CpickerHeight / pickerItemCount\u5373item\u9AD8\u5EA6</td>
</tr>
<tr>
<td>customSelectWidget</td>
<td>Widget?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u9009\u62E9\u6846\u6837\u5F0F</td>
</tr>
<tr>
<td>leftTextStyle</td>
<td>TextStyle?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u6587\u6848\u6837\u5F0F</td>
</tr>
<tr>
<td>rightTextStyle</td>
<td>TextStyle?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u53F3\u4FA7\u6587\u6848\u6837\u5F0F</td>
</tr>
<tr>
<td>centerTextStyle</td>
<td>TextStyle?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u4E2D\u95F4\u6587\u6848\u6837\u5F0F</td>
</tr>
<tr>
<td>titleHeight</td>
<td>double?</td>
<td>-</td>
<td>\u6807\u9898\u9AD8\u5EA6</td>
</tr>
<tr>
<td>topPadding</td>
<td>double?</td>
<td>-</td>
<td>\u9876\u90E8\u586B\u5145</td>
</tr>
<tr>
<td>leftPadding</td>
<td>double?</td>
<td>-</td>
<td>\u5DE6\u8FB9\u586B\u5145</td>
</tr>
<tr>
<td>rightPadding</td>
<td>double?</td>
<td>-</td>
<td>\u53F3\u8FB9\u586B\u5145</td>
</tr>
<tr>
<td>titleDividerColor</td>
<td>Color?</td>
<td>-</td>
<td>\u6807\u9898\u5206\u5272\u7EBF\u989C\u8272</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>Color?</td>
<td>-</td>
<td>\u80CC\u666F\u989C\u8272</td>
</tr>
<tr>
<td>topRadius</td>
<td>double?</td>
<td>-</td>
<td>\u9876\u90E8\u5706\u89D2</td>
</tr>
<tr>
<td>padding</td>
<td>EdgeInsets?</td>
<td>-</td>
<td>\u9002\u914Dpadding</td>
</tr>
<tr>
<td>itemDistanceCalculator</td>
<td>ItemDistanceCalculator?</td>
<td>-</td>
<td>\u4E0D\u540C\u8DDD\u79BB\u81EA\u9009\u9879\u8BA1\u7B97\u7B56\u7565</td>
</tr>
<tr>
<td>key</td>
<td></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="multilinkedpickermodel">MultiLinkedPickerModel <a class="header-anchor" href="#multilinkedpickermodel"></a></h3>
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
<td>data</td>
<td>Map</td>
<td>-</td>
<td>\u603B\u7684\u6570\u636E</td>
</tr>
<tr>
<td>columnNum</td>
<td>int</td>
<td>-</td>
<td>\u603B\u5217\u6570</td>
</tr>
<tr>
<td>initialData</td>
<td></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tdpicker">TDPicker <a class="header-anchor" href="#tdpicker"></a></h3>
<h4 id="\u9759\u6001\u65B9\u6CD5">\u9759\u6001\u65B9\u6CD5 <a class="header-anchor" href="#\u9759\u6001\u65B9\u6CD5"></a></h4>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8FD4\u56DE\u7C7B\u578B</th>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>showDatePicker</td>
<td></td>
<td>required null context,  required String title,  required DatePickerCallback? onConfirm,  DatePickerCallback? onCancel,  bool useYear,  bool useMonth,  bool useDay,  bool useHour,  bool useMinute,  bool useSecond,  bool useWeekDay,  Color? barrierColor,  List<int> dateStart,  List<int>? dateEnd,  List<int>? initialDate,  String? rightText,  String? leftText,  Duration duration,  double pickerHeight,  int pickerItemCount,</td>
<td>\u663E\u793A\u65F6\u95F4\u9009\u62E9\u5668</td>
</tr>
<tr>
<td>showMultiPicker</td>
<td></td>
<td>required null context,  String? title,  required MultiPickerCallback? onConfirm,  MultiPickerCallback? onCancel,  required List&lt;List<String>&gt; data,  List<int>? initialIndexes,  Duration duration,  Color? barrierColor,  double pickerHeight,  int pickerItemCount,</td>
<td>\u663E\u793A\u591A\u7EA7\u9009\u62E9\u5668</td>
</tr>
<tr>
<td>showMultiLinkedPicker</td>
<td></td>
<td>required null context,  String? title,  required MultiPickerCallback? onConfirm,  MultiPickerCallback? onCancel,  required Map data,  required int columnNum,  required List initialData,  Duration duration,  Color? barrierColor,  double pickerHeight,  int pickerItemCount,</td>
<td>\u663E\u793A\u591A\u7EA7\u8054\u52A8\u9009\u62E9\u5668</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function o(c,s,p,h,u,g){const t=r("tdesign-doc");return i(),a(t)}var m=d(l,[["render",o]]);export{m as default};
