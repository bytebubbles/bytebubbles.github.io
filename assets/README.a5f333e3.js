import{T as e}from"./component.9b32f023.js";import{_ as n,d,r,o as a,c as o}from"./site.b6fa4b6e.js";const i=d({props:{docType:String},components:{TdesignDoc:e},provide:{info:{spline:"base",toc:!0,title:"DateTimePicker \u65F6\u95F4\u9009\u62E9\u5668",description:"\u7528\u4E8E\u9009\u62E9\u4E00\u4E2A\u65F6\u95F4\u70B9\u6216\u8005\u4E00\u4E2A\u65F6\u95F4\u6BB5\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686017,componentName:"date-time-picker",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_data_picker_page.dart" target="_blank" rel="noopener noreferrer">td_data_picker_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u5E74\u6708\u65E5\u9009\u62E9\u5668</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget buildYearMonthDay(BuildContext context) {
    return GestureDetector(
      onTap: (){
        TDPicker.showDatePicker(context, title: '\u9009\u62E9\u65F6\u95F4',
            onConfirm: (selected) {
              setState(() {
                selected_1 = '\${selected['year'].toString().padLeft(4, '0')}-\${selected['month'].toString().padLeft(2, '0')}-\${selected['day'].toString().padLeft(2, '0')}';
              });
              Navigator.of(context).pop();
            },
            dateStart: [1999, 01, 01],
            dateEnd: [2023, 12, 31],
            initialDate: [2012, 1, 1]);
      },
      child: buildSelectRow(context, selected_1, '\u9009\u62E9\u65F6\u95F4'),
    );
  }</pre>
</td-code-block>
<p>\u5E74\u6708\u9009\u62E9\u5668</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget buildYearMonth(BuildContext context) {
    return GestureDetector(
      onTap: (){
        TDPicker.showDatePicker(context, title: '\u9009\u62E9\u65F6\u95F4',
            onConfirm: (selected) {
              setState(() {
                selected_2 = '\${selected['year'].toString().padLeft(4, '0')}-'
                    '\${selected['month'].toString().padLeft(2, '0')}';
              });
              Navigator.of(context).pop();
            },
            useDay: false,
            dateStart: [1999, 01, 01],
            dateEnd: [2023, 12, 31],
            initialDate: [2012, 1, 1]);
      },
      child: buildSelectRow(context, selected_2, '\u9009\u62E9\u65F6\u95F4'),
    );
  }</pre>
</td-code-block>
<p>\u6708\u65E5\u9009\u62E9\u5668</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget buildMonthDay(BuildContext context) {
    return GestureDetector(
      onTap: (){
        TDPicker.showDatePicker(context, title: '\u9009\u62E9\u65F6\u95F4',
            onConfirm: (selected) {
              setState(() {
                selected_3 = '\${selected['month'].toString().padLeft(2, '0')}-'
                    '\${selected['day'].toString().padLeft(2, '0')}';
              });
              Navigator.of(context).pop();
            },
            useYear: false,
            dateStart: [1999, 01, 01],
            dateEnd: [2023, 12, 31],
            initialDate: [2012, 1, 1]);
      },
      child: buildSelectRow(context, selected_3, '\u9009\u62E9\u65F6\u95F4'),
    );
  }</pre>
</td-code-block>
<p>\u65F6\u5206\u79D2\u9009\u62E9\u5668</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget buildHourMinuteSecond(BuildContext context) {
    return GestureDetector(
      onTap: (){
        TDPicker.showDatePicker(context, title: '\u9009\u62E9\u65F6\u95F4',
            onConfirm: (selected) {
              setState(() {
                selected_4 = '\${selected['hour'].toString().padLeft(2, '0')}:'
                    '\${selected['minute'].toString().padLeft(2, '0')}:'
                    '\${selected['second'].toString().padLeft(2, '0')}';
              });
              Navigator.of(context).pop();
            },
            useYear: false,
            useMonth: false,
            useDay: false,
            useHour: true,
            useMinute: true,
            useSecond: true,
            dateStart: [1999, 01, 01],
            dateEnd: [2023, 12, 31],
            initialDate: [2012, 1, 1]);
      },
      child: buildSelectRow(context, selected_4, '\u9009\u62E9\u65F6\u95F4'),
    );
  }</pre>
</td-code-block>
<p>\u5E74\u6708\u65E5\u65F6\u5206\u79D2\u9009\u62E9\u5668</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget buildAll(BuildContext context) {
    return GestureDetector(
      onTap: (){
        TDPicker.showDatePicker(context, title: '\u9009\u62E9\u65F6\u95F4',
            onConfirm: (selected) {
              setState(() {
                selected_5 = '\${selected['year'].toString().padLeft(4, '0')}-'
                    '\${selected['month'].toString().padLeft(2, '0')}-'
                    '\${selected['day'].toString().padLeft(2, '0')} '
                    '\${selected['hour'].toString().padLeft(2, '0')}:'
                    '\${selected['minute'].toString().padLeft(2, '0')}:'
                    '\${selected['second'].toString().padLeft(2, '0')}';
              });
              Navigator.of(context).pop();
            },
            useHour: true,
            useMinute: true,
            useSecond: true,
            dateStart: [1999, 01, 01],
            dateEnd: [2023, 12, 31],
            initialDate: [2012, 1, 1]);
      },
      child: buildSelectRow(context, selected_5, '\u9009\u62E9\u65F6\u95F4'),
    );
  }</pre>
</td-code-block>
<p>\u5E74\u6708\u65E5\u5E26\u661F\u671F\u9009\u62E9\u5668</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget buildWeekDay(BuildContext context) {
    return GestureDetector(
      onTap: (){
        TDPicker.showDatePicker(context, title: '\u9009\u62E9\u65F6\u95F4',
            onConfirm: (selected) {
              setState(() {
                selected_6 = '\${selected['year'].toString().padLeft(4, '0')}-'
                    '\${selected['month'].toString().padLeft(2, '0')}-'
                    '\${selected['day'].toString().padLeft(2, '0')} '
                    '\${weekDayList[selected['weekDay']! - 1]}';
              });
              Navigator.of(context).pop();
            },
            useWeekDay: true,
            dateStart: [1999, 01, 01],
            dateEnd: [2023, 12, 31],
            initialDate: [2012, 1, 1]);
      },
      child: buildSelectRow(context, selected_6, '\u9009\u62E9\u65F6\u95F4'),
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u6837\u5F0F">1 \u7EC4\u4EF6\u6837\u5F0F <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u6837\u5F0F"></a></h3>
<p>\u662F\u5426\u5E26\u6807\u9898</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget buildWithTitle(BuildContext context) {
    return GestureDetector(
      onTap: (){
        TDPicker.showDatePicker(context, title: '\u9009\u62E9\u65F6\u95F4',
            onConfirm: (selected) {
              setState(() {
                selected_7 = '\${selected['year'].toString().padLeft(4, '0')}-'
                    '\${selected['month'].toString().padLeft(2, '0')}-'
                    '\${selected['day'].toString().padLeft(2, '0')}';
              });
              Navigator.of(context).pop();
            },
            dateStart: [1999, 01, 01],
            dateEnd: [2023, 12, 31],
            initialDate: [2012, 1, 1]);
      },
      child: buildSelectRow(context, selected_7, '\u5E26\u6807\u9898\u65F6\u95F4\u9009\u62E9\u5668'),
    );
  }</pre>
</td-code-block>
<p>\u4E0D\u5E26\u6807\u9898</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget buildWithoutTitle(BuildContext context) {
    return GestureDetector(
      onTap: (){
        TDPicker.showDatePicker(context, title: '',
            onConfirm: (selected) {
              setState(() {
                selected_8 = '\${selected['year'].toString().padLeft(4, '0')}-'
                    '\${selected['month'].toString().padLeft(2, '0')}-'
                    '\${selected['day'].toString().padLeft(2, '0')}';
              });
              Navigator.of(context).pop();
            },
            dateStart: [1999, 01, 01],
            dateEnd: [2023, 12, 31],
            initialDate: [2012, 1, 1]);
      },
      child: buildSelectRow(context, selected_8, '\u65E0\u6807\u9898\u65F6\u95F4\u9009\u62E9\u5668'),
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tddatepicker">TDDatePicker</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdpicker">TDPicker</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tddatepicker">TDDatePicker <a class="header-anchor" href="#tddatepicker"></a></h3>
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
<td>\u9009\u62E9\u5668\u6807\u9898</td>
</tr>
<tr>
<td>onConfirm</td>
<td>DatePickerCallback?</td>
<td>-</td>
<td>\u9009\u62E9\u5668\u786E\u8BA4\u6309\u94AE\u56DE\u8C03</td>
</tr>
<tr>
<td>rightText</td>
<td>String?</td>
<td>-</td>
<td>\u53F3\u4FA7\u6309\u94AE\u6587\u6848</td>
</tr>
<tr>
<td>leftText</td>
<td>String?</td>
<td>-</td>
<td>\u5DE6\u4FA7\u6309\u94AE\u6587\u6848</td>
</tr>
<tr>
<td>onCancel</td>
<td>DatePickerCallback?</td>
<td>-</td>
<td>\u9009\u62E9\u5668\u53D6\u6D88\u6309\u94AE\u56DE\u8C03</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>Color?</td>
<td>-</td>
<td>\u80CC\u666F\u989C\u8272</td>
</tr>
<tr>
<td>titleDividerColor</td>
<td>Color?</td>
<td>-</td>
<td>\u6807\u9898\u5206\u5272\u7EBF\u989C\u8272</td>
</tr>
<tr>
<td>topRadius</td>
<td>double?</td>
<td>-</td>
<td>\u9876\u90E8\u5706\u89D2</td>
</tr>
<tr>
<td>titleHeight</td>
<td>double?</td>
<td>-</td>
<td>\u6807\u9898\u9AD8\u5EA6</td>
</tr>
<tr>
<td>padding</td>
<td>EdgeInsets?</td>
<td>-</td>
<td>\u9002\u914Dpadding</td>
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
<td>customSelectWidget</td>
<td>Widget?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u9009\u62E9\u6846\u6837\u5F0F</td>
</tr>
<tr>
<td>itemDistanceCalculator</td>
<td>ItemDistanceCalculator?</td>
<td>-</td>
<td>\u6839\u636E\u8DDD\u79BB\u8BA1\u7B97\u5B57\u4F53\u989C\u8272\u3001\u900F\u660E\u5EA6\u3001\u7C97\u7EC6</td>
</tr>
<tr>
<td>model</td>
<td>DatePickerModel</td>
<td>-</td>
<td>\u6570\u636E\u6A21\u578B</td>
</tr>
<tr>
<td>showTitle</td>
<td>bool</td>
<td>true</td>
<td>\u662F\u5426\u5C55\u793A\u6807\u9898</td>
</tr>
<tr>
<td>pickerHeight</td>
<td>double</td>
<td>200</td>
<td>\u9009\u62E9\u5668List\u7684\u89C6\u7A97\u9AD8\u5EA6\uFF0C\u9ED8\u8BA4200</td>
</tr>
<tr>
<td>pickerItemCount</td>
<td>int</td>
<td>-</td>
<td>\u9009\u62E9\u5668List\u89C6\u7A97\u4E2Ditem\u4E2A\u6570\uFF0CpickerHeight / pickerItemCount\u5373item\u9AD8\u5EA6</td>
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
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function l(c,s,p,u,g,h){const t=r("tdesign-doc");return a(),o(t)}var D=n(i,[["render",l]]);export{D as default};
