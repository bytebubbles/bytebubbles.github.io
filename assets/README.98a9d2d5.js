import{T as e}from"./component.9b32f023.js";import{_ as n,d as a,r as d,o as s,c as l}from"./site.b6fa4b6e.js";const o=a({props:{docType:String},components:{TdesignDoc:e},provide:{info:{spline:"base",toc:!0,title:"Cascader \u7EA7\u8054\u9009\u62E9\u5668",description:"\u7528\u4E8E\u591A\u5C42\u7EA7\u6570\u636E\u7684\u9010\u7EA7\u9009\u62E9",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686015,componentName:"cascader",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_cascader_page.dart" target="_blank" rel="noopener noreferrer">td_cascader_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u5782\u76F4\u7EA7\u8054\u9009\u62E9\u5668</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildVerticalCascader(BuildContext context) {
    return GestureDetector(
      onTap: () {
        TDCascader.showMultiCascader(context, title: '\u9009\u62E9\u5730\u5740', data: _data, initialData: _initData, theme: 'step',
            onChange: (List<MultiCascaderListModel> selectData) {
          setState(() {
            List result = [];
            int len = selectData.length;
            _initData = selectData[len - 1].value!;
            selectData.forEach((element) {
              result.add(element.label);
            });
            _selected_1 = result.join('/');
          });
        }, onClose: () {
          Navigator.of(context).pop();
        });
      },
      child: _buildSelectRow(context, _selected_1, '\u9009\u62E9\u5730\u533A'),
    );
  }</pre>
</td-code-block>
<p>\u5782\u76F4\u7EA7\u8054\u9009\u62E9\u5668-\u5E26\u5B57\u6BCD\u5B9A\u4F4D</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildVerticalLetterCascader(BuildContext context) {
    return GestureDetector(
      onTap: () {
        TDCascader.showMultiCascader(context, title: '\u9009\u62E9\u5730\u5740', data: _data_2, initialData: _initData_2, theme: 'step',
            onChange: (List<MultiCascaderListModel> selectData) {
          setState(() {
            List result = [];
            int len = selectData.length;
            _initData_2 = selectData[len - 1].value!;
            selectData.forEach((element) {
              result.add(element.label);
            });
            _selected_2 = result.join('/');
          });
        }, onClose: () {
          Navigator.of(context).pop();
        });
      },
      child: _buildSelectRow(context, _selected_2, '\u9009\u62E9\u5730\u533A'),
    );
  }</pre>
</td-code-block>
<p>\u6C34\u5E73\u7EA7\u8054\u9009\u62E9\u5668</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildHorizontalCascader(BuildContext context) {
    return GestureDetector(
      onTap: () {
        TDCascader.showMultiCascader(context,
            title: '\u9009\u62E9\u5730\u5740',
            subTitles: ['\u8BF7\u9009\u62E9\u7701\u4EFD', '\u8BF7\u9009\u62E9\u57CE\u5E02', '\u8BF7\u9009\u62E9\u533A/\u53BF'],
            data: _data,
            initialData: _initData,
            theme: 'tab', onChange: (List<MultiCascaderListModel> selectData) {
          setState(() {
            List result = [];
            int len = selectData.length;
            _initData = selectData[len - 1].value!;
            selectData.forEach((element) {
              result.add(element.label);
            });
            _selected_1 = result.join('/');
          });
        }, onClose: () {
          Navigator.of(context).pop();
        });
      },
      child: _buildSelectRow(context, _selected_1, '\u9009\u62E9\u5730\u533A'),
    );
  }</pre>
</td-code-block>
<p>\u6C34\u5E73\u7EA7\u8054\u9009\u62E9\u5668-\u5E26\u5B57\u6BCD\u5B9A\u4F4D</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildHorizontalLetterCascader(BuildContext context) {
    return GestureDetector(
      onTap: () {
        TDCascader.showMultiCascader(context, title: '\u9009\u62E9\u5730\u5740', data: _data_2, initialData: _initData_2, theme: 'tab',
            onChange: (List<MultiCascaderListModel> selectData) {
          setState(() {
            List result = [];
            int len = selectData.length;
            _initData_2 = selectData[len - 1].value!;
            selectData.forEach((element) {
              result.add(element.label);
            });
            _selected_2 = result.join('/');
          });
        }, onClose: () {
          Navigator.of(context).pop();
        });
      },
      child: _buildSelectRow(context, _selected_2, '\u9009\u62E9\u5730\u533A'),
    );
  }</pre>
</td-code-block>
<p>\u6C34\u5E73\u7EA7\u8054\u9009\u62E9\u5668-\u90E8\u95E8</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildHorizontalCompanyCascader(BuildContext context) {
    return GestureDetector(
      onTap: () {
        TDCascader.showMultiCascader(context, title: '\u9009\u62E9\u90E8\u95E8\u4EBA\u5458', data: _data_3, initialData: _initData_3, theme: 'tab',
            onChange: (List<MultiCascaderListModel> selectData) {
          setState(() {
            List result = [];
            int len = selectData.length;
            _initData_3 = selectData[len - 1].value!;
            selectData.forEach((element) {
              result.add(element.label);
            });
            _selected_3 = result.join('/');
          });
        }, onClose: () {
          Navigator.of(context).pop();
        });
      },
      child: _buildSelectRow(context, _selected_3, '\u9009\u62E9\u90E8\u95E8\u4EBA\u5458'),
    );
  }</pre>
</td-code-block>
<p>\u5782\u76F4\u7EA7\u8054\u9009\u62E9\u5668-\u90E8\u95E8</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildVerticalCompanyCascader(BuildContext context) {
    return GestureDetector(
      onTap: () {
        TDCascader.showMultiCascader(context, title: '\u9009\u62E9\u90E8\u95E8\u4EBA\u5458', data: _data_3, initialData: _initData_3, theme: 'step',
            onChange: (List<MultiCascaderListModel> selectData) {
          setState(() {
            List result = [];
            int len = selectData.length;
            _initData_3 = selectData[len - 1].value!;
            selectData.forEach((element) {
              result.add(element.label);
            });
            _selected_3 = result.join('/');
          });
        }, onClose: () {
          Navigator.of(context).pop();
        });
      },
      child: _buildSelectRow(context, _selected_3, '\u9009\u62E9\u90E8\u95E8\u4EBA\u5458'),
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdmulticascader">TDMultiCascader</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdmulticascader">TDMultiCascader <a class="header-anchor" href="#tdmulticascader"></a></h3>
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
<td>title</td>
<td>String?</td>
<td>-</td>
<td>\u9009\u62E9\u5668\u6807\u9898</td>
</tr>
<tr>
<td>titleStyle</td>
<td>TextStyle?</td>
<td>-</td>
<td>\u6807\u9898\u6837\u5F0F</td>
</tr>
<tr>
<td>theme</td>
<td>String?</td>
<td>-</td>
<td>\u5C55\u793A\u98CE\u683C \u53EF\u9009\u9879\uFF1Astep/tab</td>
</tr>
<tr>
<td>subTitles</td>
<td>List<String>?</td>
<td>-</td>
<td>\u6BCF\u7EA7\u5C55\u793A\u7684\u6B21\u6807\u9898</td>
</tr>
<tr>
<td>data</td>
<td>List<Map></td>
<td>-</td>
<td>\u9009\u62E9\u5668\u7684\u6570\u636E\u6E90</td>
</tr>
<tr>
<td>cascaderHeight</td>
<td>double</td>
<td>-</td>
<td>\u9009\u62E9\u5668List\u7684\u89C6\u7A97\u9AD8\u5EA6\uFF0C\u9ED8\u8BA4200</td>
</tr>
<tr>
<td>initialIndexes</td>
<td>List<int>?</td>
<td>-</td>
<td>\u82E5\u4E3Anull\u8868\u793A\u5168\u90E8\u4ECE\u96F6\u5F00\u59CB</td>
</tr>
<tr>
<td>initialData</td>
<td>String?</td>
<td>-</td>
<td>\u521D\u59CB\u5316\u6570\u636E</td>
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
<td>closeText</td>
<td>String?</td>
<td>-</td>
<td>\u5173\u95ED\u6309\u94AE\u6587\u672C</td>
</tr>
<tr>
<td>onClose</td>
<td>Function?</td>
<td>-</td>
<td>\u9009\u62E9\u5668\u5173\u95ED\u6309\u94AE\u56DE\u8C03</td>
</tr>
<tr>
<td>onChange</td>
<td>MultiCascaderCallback</td>
<td>-</td>
<td>\u503C\u53D1\u751F\u53D8\u66F4\u65F6\u89E6\u53D1</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function r(i,c,p,u,g,_){const t=d("tdesign-doc");return s(),l(t)}var b=n(o,[["render",r]]);export{b as default};
