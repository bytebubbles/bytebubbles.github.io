import{T as t}from"./component.9b32f023.js";import{_ as e,d as o,r as d,o as l,c as r}from"./site.b6fa4b6e.js";const a=o({props:{docType:String},components:{TdesignDoc:t},provide:{info:{spline:"base",toc:!0,title:"DropdownMenu \u4E0B\u62C9\u83DC\u5355",description:"\u83DC\u5355\u5448\u73B0\u6570\u4E2A\u5E76\u5217\u7684\u9009\u9879\u7C7B\u76EE\uFF0C\u7528\u4E8E\u6574\u4E2A\u9875\u9762\u7684\u5185\u5BB9\u7B5B\u9009\uFF0C\u7531\u83DC\u5355\u9762\u677F\u548C\u83DC\u5355\u9009\u9879\u7EC4\u6210\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686018,componentName:"dropdown-menu",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_dropdown_menu_page.dart" target="_blank" rel="noopener noreferrer">td_dropdown_menu_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u5355\u9009\u4E0B\u62C9\u83DC\u5355</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDDropdownMenu _buildDownSimple(BuildContext context) {
  return TDDropdownMenu(
    direction: TDDropdownMenuDirection.down,
    onMenuOpened: (value) {
      print('\u6253\u5F00\u7B2C$value\u4E2A\u83DC\u5355');
    },
    onMenuClosed: (value) {
      print('\u5173\u95ED\u7B2C$value\u4E2A\u83DC\u5355');
    },
    items: [
      TDDropdownItem(
        options: [
          TDDropdownItemOption(label: '\u5168\u90E8\u4EA7\u54C1', value: 'all', selected: true),
          TDDropdownItemOption(label: '\u6700\u65B0\u4EA7\u54C1', value: 'new'),
          TDDropdownItemOption(label: '\u6700\u706B\u4EA7\u54C1', value: 'hot'),
        ],
        onChange: (value) {
          print('\u9009\u62E9\uFF1A$value');
        },
      ),
      TDDropdownItem(
        options: [
          TDDropdownItemOption(label: '\u9ED8\u8BA4\u6392\u5E8F', value: 'default', selected: true),
          TDDropdownItemOption(label: '\u4EF7\u683C\u4ECE\u9AD8\u5230\u4F4E', value: 'price'),
        ],
      ),
    ],
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDDropdownMenu _buildDownSimple(BuildContext context) {
  return TDDropdownMenu(
    direction: TDDropdownMenuDirection.down,
    onMenuOpened: (value) {
      print('\u6253\u5F00\u7B2C$value\u4E2A\u83DC\u5355');
    },
    onMenuClosed: (value) {
      print('\u5173\u95ED\u7B2C$value\u4E2A\u83DC\u5355');
    },
    items: [
      TDDropdownItem(
        options: [
          TDDropdownItemOption(label: '\u5168\u90E8\u4EA7\u54C1', value: 'all', selected: true),
          TDDropdownItemOption(label: '\u6700\u65B0\u4EA7\u54C1', value: 'new'),
          TDDropdownItemOption(label: '\u6700\u706B\u4EA7\u54C1', value: 'hot'),
        ],
        onChange: (value) {
          print('\u9009\u62E9\uFF1A$value');
        },
      ),
      TDDropdownItem(
        options: [
          TDDropdownItemOption(label: '\u9ED8\u8BA4\u6392\u5E8F', value: 'default', selected: true),
          TDDropdownItemOption(label: '\u4EF7\u683C\u4ECE\u9AD8\u5230\u4F4E', value: 'price'),
        ],
      ),
    ],
  );
}</pre>
</td-code-block>
<p>\u5206\u680F\u4E0B\u62C9\u83DC\u5355</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDDropdownMenu _buildDownChunk(BuildContext context) {
  return TDDropdownMenu(
    direction: TDDropdownMenuDirection.down,
    items: [
      TDDropdownItem(
        label: '\u5355\u5217\u591A\u9009',
        multiple: true,
        options: [
          TDDropdownItemOption(label: '\u9009\u98791', value: '1', selected: true),
          TDDropdownItemOption(label: '\u9009\u98792', value: '2'),
          TDDropdownItemOption(label: '\u9009\u98793', value: '3'),
          TDDropdownItemOption(label: '\u9009\u98794', value: '4'),
          TDDropdownItemOption(label: '\u9009\u98795', value: '5'),
          TDDropdownItemOption(label: '\u9009\u98796', value: '6'),
          TDDropdownItemOption(label: '\u9009\u98797', value: '7'),
          TDDropdownItemOption(label: '\u9009\u98798', value: '8'),
          TDDropdownItemOption(label: '\u7981\u7528\u9009\u9879', value: '9', disabled: true),
        ],
        onChange: (value) {
          print('\u9009\u62E9\uFF1A$value');
        },
        onConfirm: (value) {
          print('\u786E\u5B9A\u9009\u62E9\uFF1A$value');
        },
        onReset: () {
          print('\u6E05\u7A7A\u9009\u62E9');
        },
      ),
      TDDropdownItem(
        label: '\u53CC\u5217\u591A\u9009',
        multiple: true,
        optionsColumns: 2,
        options: [
          TDDropdownItemOption(label: '\u9009\u98791', value: '1', selected: true),
          TDDropdownItemOption(label: '\u9009\u98792', value: '2', selected: true),
          TDDropdownItemOption(label: '\u9009\u98793', value: '3'),
          TDDropdownItemOption(label: '\u9009\u98794', value: '4'),
          TDDropdownItemOption(label: '\u9009\u98795', value: '5'),
          TDDropdownItemOption(label: '\u9009\u98796', value: '6'),
          TDDropdownItemOption(label: '\u9009\u98797', value: '7'),
          TDDropdownItemOption(label: '\u9009\u98798', value: '8'),
          TDDropdownItemOption(label: '\u7981\u7528\u9009\u9879', value: '9', disabled: true),
          TDDropdownItemOption(label: '\u7981\u7528\u9009\u9879', value: '10', disabled: true),
        ],
      ),
      TDDropdownItem(
        label: '\u4E09\u5217\u591A\u9009',
        multiple: true,
        optionsColumns: 3,
        options: [
          TDDropdownItemOption(label: '\u9009\u98791', value: '1', selected: true),
          TDDropdownItemOption(label: '\u9009\u98792', value: '2', selected: true),
          TDDropdownItemOption(label: '\u9009\u98793', value: '3', selected: true),
          TDDropdownItemOption(label: '\u9009\u98794', value: '4'),
          TDDropdownItemOption(label: '\u9009\u98795', value: '5'),
          TDDropdownItemOption(label: '\u9009\u98796', value: '6'),
          TDDropdownItemOption(label: '\u9009\u98797', value: '7'),
          TDDropdownItemOption(label: '\u9009\u98798', value: '8'),
          TDDropdownItemOption(label: '\u9009\u98799', value: '9'),
          TDDropdownItemOption(label: '\u7981\u7528\u9009\u9879', value: '10', disabled: true),
          TDDropdownItemOption(label: '\u7981\u7528\u9009\u9879', value: '11', disabled: true),
          TDDropdownItemOption(label: '\u7981\u7528\u9009\u9879', value: '12', disabled: true),
        ],
      ),
    ],
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDDropdownMenu _buildDownChunk(BuildContext context) {
  return TDDropdownMenu(
    direction: TDDropdownMenuDirection.down,
    items: [
      TDDropdownItem(
        label: '\u5355\u5217\u591A\u9009',
        multiple: true,
        options: [
          TDDropdownItemOption(label: '\u9009\u98791', value: '1', selected: true),
          TDDropdownItemOption(label: '\u9009\u98792', value: '2'),
          TDDropdownItemOption(label: '\u9009\u98793', value: '3'),
          TDDropdownItemOption(label: '\u9009\u98794', value: '4'),
          TDDropdownItemOption(label: '\u9009\u98795', value: '5'),
          TDDropdownItemOption(label: '\u9009\u98796', value: '6'),
          TDDropdownItemOption(label: '\u9009\u98797', value: '7'),
          TDDropdownItemOption(label: '\u9009\u98798', value: '8'),
          TDDropdownItemOption(label: '\u7981\u7528\u9009\u9879', value: '9', disabled: true),
        ],
        onChange: (value) {
          print('\u9009\u62E9\uFF1A$value');
        },
        onConfirm: (value) {
          print('\u786E\u5B9A\u9009\u62E9\uFF1A$value');
        },
        onReset: () {
          print('\u6E05\u7A7A\u9009\u62E9');
        },
      ),
      TDDropdownItem(
        label: '\u53CC\u5217\u591A\u9009',
        multiple: true,
        optionsColumns: 2,
        options: [
          TDDropdownItemOption(label: '\u9009\u98791', value: '1', selected: true),
          TDDropdownItemOption(label: '\u9009\u98792', value: '2', selected: true),
          TDDropdownItemOption(label: '\u9009\u98793', value: '3'),
          TDDropdownItemOption(label: '\u9009\u98794', value: '4'),
          TDDropdownItemOption(label: '\u9009\u98795', value: '5'),
          TDDropdownItemOption(label: '\u9009\u98796', value: '6'),
          TDDropdownItemOption(label: '\u9009\u98797', value: '7'),
          TDDropdownItemOption(label: '\u9009\u98798', value: '8'),
          TDDropdownItemOption(label: '\u7981\u7528\u9009\u9879', value: '9', disabled: true),
          TDDropdownItemOption(label: '\u7981\u7528\u9009\u9879', value: '10', disabled: true),
        ],
      ),
      TDDropdownItem(
        label: '\u4E09\u5217\u591A\u9009',
        multiple: true,
        optionsColumns: 3,
        options: [
          TDDropdownItemOption(label: '\u9009\u98791', value: '1', selected: true),
          TDDropdownItemOption(label: '\u9009\u98792', value: '2', selected: true),
          TDDropdownItemOption(label: '\u9009\u98793', value: '3', selected: true),
          TDDropdownItemOption(label: '\u9009\u98794', value: '4'),
          TDDropdownItemOption(label: '\u9009\u98795', value: '5'),
          TDDropdownItemOption(label: '\u9009\u98796', value: '6'),
          TDDropdownItemOption(label: '\u9009\u98797', value: '7'),
          TDDropdownItemOption(label: '\u9009\u98798', value: '8'),
          TDDropdownItemOption(label: '\u9009\u98799', value: '9'),
          TDDropdownItemOption(label: '\u7981\u7528\u9009\u9879', value: '10', disabled: true),
          TDDropdownItemOption(label: '\u7981\u7528\u9009\u9879', value: '11', disabled: true),
          TDDropdownItemOption(label: '\u7981\u7528\u9009\u9879', value: '12', disabled: true),
        ],
      ),
    ],
  );
}</pre>
</td-code-block>
<p>\u5411\u4E0A\u5C55\u5F00</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDDropdownMenu _buildUp(BuildContext context) {
  return TDDropdownMenu(
    direction: TDDropdownMenuDirection.up,
    onMenuOpened: (value) {
      print('\u6253\u5F00\u7B2C$value\u4E2A\u83DC\u5355');
    },
    onMenuClosed: (value) {
      print('\u5173\u95ED\u7B2C$value\u4E2A\u83DC\u5355');
    },
    builder: (context) {
      return [
        TDDropdownItem(
          options: [
            TDDropdownItemOption(label: '\u5168\u90E8\u4EA7\u54C1', value: 'all', selected: true),
            TDDropdownItemOption(label: '\u6700\u65B0\u4EA7\u54C1', value: 'new'),
            TDDropdownItemOption(label: '\u6700\u706B\u4EA7\u54C1', value: 'hot'),
          ],
          onChange: (value) {
            print('\u9009\u62E9\uFF1A$value');
          },
        ),
        TDDropdownItem(
          options: [
            TDDropdownItemOption(label: '\u9ED8\u8BA4\u6392\u5E8F', value: 'default', selected: true),
            TDDropdownItemOption(label: '\u4EF7\u683C\u4ECE\u9AD8\u5230\u4F4E', value: 'price'),
          ],
        ),
      ];
    },
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDDropdownMenu _buildUp(BuildContext context) {
  return TDDropdownMenu(
    direction: TDDropdownMenuDirection.up,
    onMenuOpened: (value) {
      print('\u6253\u5F00\u7B2C$value\u4E2A\u83DC\u5355');
    },
    onMenuClosed: (value) {
      print('\u5173\u95ED\u7B2C$value\u4E2A\u83DC\u5355');
    },
    builder: (context) {
      return [
        TDDropdownItem(
          options: [
            TDDropdownItemOption(label: '\u5168\u90E8\u4EA7\u54C1', value: 'all', selected: true),
            TDDropdownItemOption(label: '\u6700\u65B0\u4EA7\u54C1', value: 'new'),
            TDDropdownItemOption(label: '\u6700\u706B\u4EA7\u54C1', value: 'hot'),
          ],
          onChange: (value) {
            print('\u9009\u62E9\uFF1A$value');
          },
        ),
        TDDropdownItem(
          options: [
            TDDropdownItemOption(label: '\u9ED8\u8BA4\u6392\u5E8F', value: 'default', selected: true),
            TDDropdownItemOption(label: '\u4EF7\u683C\u4ECE\u9AD8\u5230\u4F4E', value: 'price'),
          ],
        ),
      ];
    },
  );
}</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u72B6\u6001">1 \u7EC4\u4EF6\u72B6\u6001 <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u72B6\u6001"></a></h3>
<p>\u7981\u7528\u72B6\u6001</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDDropdownMenu _buildDisabled(BuildContext context) {
  return TDDropdownMenu(
    direction: TDDropdownMenuDirection.down,
    builder: (context) {
      return [
        const TDDropdownItem(
          disabled: true,
          label: '\u7981\u7528\u83DC\u5355',
        ),
        const TDDropdownItem(
          disabled: true,
          label: '\u7981\u7528\u83DC\u5355',
        ),
      ];
    },
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDDropdownMenu _buildDisabled(BuildContext context) {
  return TDDropdownMenu(
    direction: TDDropdownMenuDirection.down,
    builder: (context) {
      return [
        const TDDropdownItem(
          disabled: true,
          label: '\u7981\u7528\u83DC\u5355',
        ),
        const TDDropdownItem(
          disabled: true,
          label: '\u7981\u7528\u83DC\u5355',
        ),
      ];
    },
  );
}</pre>
</td-code-block>
<p>\u5206\u7EC4\u83DC\u5355</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDDropdownMenu _buildGroup(BuildContext context) {
  return TDDropdownMenu(
    direction: TDDropdownMenuDirection.up,
    builder: (context) {
      return [
        TDDropdownItem(
          label: '\u5206\u7EC4\u83DC\u5355',
          multiple: true,
          optionsColumns: 3,
          options: [
            TDDropdownItemOption(label: '\u9009\u98791', value: '1', selected: true, group: '\u7C7B\u578B'),
            TDDropdownItemOption(label: '\u9009\u98792', value: '2', group: '\u7C7B\u578B'),
            TDDropdownItemOption(label: '\u9009\u98793', value: '3', group: '\u7C7B\u578B'),
            TDDropdownItemOption(label: '\u9009\u98794', value: '4', group: '\u7C7B\u578B'),
            TDDropdownItemOption(label: '\u9009\u98795', value: '5', group: '\u89D2\u8272'),
            TDDropdownItemOption(label: '\u9009\u98796', value: '6', group: '\u89D2\u8272'),
            TDDropdownItemOption(label: '\u9009\u98797', value: '7', group: '\u89D2\u8272'),
            TDDropdownItemOption(label: '\u9009\u98798', value: '8', group: '\u89D2\u8272'),
            TDDropdownItemOption(label: '\u7981\u7528\u9009\u9879', value: '9', disabled: true, group: '\u89D2\u8272'),
          ],
          onChange: (value) {
            print('\u9009\u62E9\uFF1A$value');
          },
          onConfirm: (value) {
            print('\u786E\u5B9A\u9009\u62E9\uFF1A$value');
          },
        ),
      ];
    },
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
TDDropdownMenu _buildGroup(BuildContext context) {
  return TDDropdownMenu(
    direction: TDDropdownMenuDirection.up,
    builder: (context) {
      return [
        TDDropdownItem(
          label: '\u5206\u7EC4\u83DC\u5355',
          multiple: true,
          optionsColumns: 3,
          options: [
            TDDropdownItemOption(label: '\u9009\u98791', value: '1', selected: true, group: '\u7C7B\u578B'),
            TDDropdownItemOption(label: '\u9009\u98792', value: '2', group: '\u7C7B\u578B'),
            TDDropdownItemOption(label: '\u9009\u98793', value: '3', group: '\u7C7B\u578B'),
            TDDropdownItemOption(label: '\u9009\u98794', value: '4', group: '\u7C7B\u578B'),
            TDDropdownItemOption(label: '\u9009\u98795', value: '5', group: '\u89D2\u8272'),
            TDDropdownItemOption(label: '\u9009\u98796', value: '6', group: '\u89D2\u8272'),
            TDDropdownItemOption(label: '\u9009\u98797', value: '7', group: '\u89D2\u8272'),
            TDDropdownItemOption(label: '\u9009\u98798', value: '8', group: '\u89D2\u8272'),
            TDDropdownItemOption(label: '\u7981\u7528\u9009\u9879', value: '9', disabled: true, group: '\u89D2\u8272'),
          ],
          onChange: (value) {
            print('\u9009\u62E9\uFF1A$value');
          },
          onConfirm: (value) {
            print('\u786E\u5B9A\u9009\u62E9\uFF1A$value');
          },
        ),
      ];
    },
  );
}</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tddropdownmenu">TDDropdownMenu</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tddropdownitem">TDDropdownItem</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tddropdownitemoption">TDDropdownItemOption</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tddropdownmenu">TDDropdownMenu <a class="header-anchor" href="#tddropdownmenu"></a></h3>
<h4 id="\u7B80\u4ECB">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB"></a></h4>
<p>\u4E0B\u62C9\u83DC\u5355</p>
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
<td>builder</td>
<td>TDDropdownItemBuilder?</td>
<td>-</td>
<td>\u4E0B\u62C9\u83DC\u5355\u6784\u5EFA\u5668\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E[items]</td>
</tr>
<tr>
<td>items</td>
<td>List<TDDropdownItem>?</td>
<td>-</td>
<td>\u4E0B\u62C9\u83DC\u5355</td>
</tr>
<tr>
<td>closeOnClickOverlay</td>
<td>bool?</td>
<td>true</td>
<td>\u662F\u5426\u5728\u70B9\u51FB\u906E\u7F69\u5C42\u540E\u5173\u95ED\u83DC\u5355</td>
</tr>
<tr>
<td>direction</td>
<td>TDDropdownMenuDirection?</td>
<td>TDDropdownMenuDirection.auto</td>
<td>\u83DC\u5355\u5C55\u5F00\u65B9\u5411\uFF08down\u3001up\u3001auto\uFF09</td>
</tr>
<tr>
<td>duration</td>
<td>double?</td>
<td>200.0</td>
<td>\u52A8\u753B\u65F6\u957F\uFF0C\u6BEB\u79D2</td>
</tr>
<tr>
<td>showOverlay</td>
<td>bool?</td>
<td>true</td>
<td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td>
</tr>
<tr>
<td>isScrollable</td>
<td>bool</td>
<td>false</td>
<td>\u662F\u5426\u5F00\u542F\u6EDA\u52A8\u5217\u8868</td>
</tr>
<tr>
<td>arrowIcon</td>
<td>IconData?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u7BAD\u5934\u56FE\u6807</td>
</tr>
<tr>
<td>onMenuOpened</td>
<td>ValueChanged<int>?</td>
<td>-</td>
<td>\u5C55\u5F00\u83DC\u5355\u4E8B\u4EF6</td>
</tr>
<tr>
<td>onMenuClosed</td>
<td>ValueChanged<int>?</td>
<td>-</td>
<td>\u5173\u95ED\u83DC\u5355\u4E8B\u4EF6</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tddropdownitem">TDDropdownItem <a class="header-anchor" href="#tddropdownitem"></a></h3>
<h4 id="\u7B80\u4ECB-1">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB-1"></a></h4>
<p>\u4E0B\u62C9\u83DC\u5355</p>
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
<td>disabled</td>
<td>bool?</td>
<td>false</td>
<td>\u662F\u5426\u7981\u7528</td>
</tr>
<tr>
<td>label</td>
<td>String?</td>
<td>-</td>
<td>\u6807\u9898</td>
</tr>
<tr>
<td>multiple</td>
<td>bool?</td>
<td>false</td>
<td>\u662F\u5426\u591A\u9009</td>
</tr>
<tr>
<td>options</td>
<td>List<TDDropdownItemOption>?</td>
<td>const []</td>
<td>\u9009\u9879\u6570\u636E</td>
</tr>
<tr>
<td>builder</td>
<td>TDDropdownItemContentBuilder?</td>
<td>-</td>
<td>\u5B8C\u5168\u81EA\u5B9A\u4E49\u5C55\u793A\u5185\u5BB9</td>
</tr>
<tr>
<td>optionsColumns</td>
<td>int?</td>
<td>1</td>
<td>\u9009\u9879\u5206\u680F\uFF081-3\uFF09</td>
</tr>
<tr>
<td>onChange</td>
<td>ValueChanged&lt;T?&gt;?</td>
<td>-</td>
<td>\u503C\u6539\u53D8\u65F6\u89E6\u53D1</td>
</tr>
<tr>
<td>onConfirm</td>
<td>ValueChanged&lt;T?&gt;?</td>
<td>-</td>
<td>\u70B9\u51FB\u786E\u8BA4\u65F6\u89E6\u53D1</td>
</tr>
<tr>
<td>onReset</td>
<td>VoidCallback?</td>
<td>-</td>
<td>\u70B9\u51FB\u91CD\u7F6E\u65F6\u89E6\u53D1</td>
</tr>
<tr>
<td>minHeight</td>
<td>double?</td>
<td>-</td>
<td>\u5185\u5BB9\u6700\u5C0F\u9AD8\u5EA6</td>
</tr>
<tr>
<td>maxHeight</td>
<td>double?</td>
<td>-</td>
<td>\u5185\u5BB9\u6700\u5927\u9AD8\u5EA6</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tddropdownitemoption">TDDropdownItemOption <a class="header-anchor" href="#tddropdownitemoption"></a></h3>
<h4 id="\u7B80\u4ECB-2">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB-2"></a></h4>
<p>\u9009\u9879\u6570\u636E</p>
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
<td>value</td>
<td>String</td>
<td>-</td>
<td>\u9009\u9879\u503C</td>
</tr>
<tr>
<td>label</td>
<td>String</td>
<td>-</td>
<td>\u9009\u9879\u6807\u9898</td>
</tr>
<tr>
<td>disabled</td>
<td>bool?</td>
<td>false</td>
<td>\u662F\u5426\u7981\u7528</td>
</tr>
<tr>
<td>group</td>
<td>String?</td>
<td>-</td>
<td>\u5206\u7EC4\uFF0C\u76F8\u540C\u7684\u4E3A\u4E00\u7EC4</td>
</tr>
<tr>
<td>selected</td>
<td>bool?</td>
<td>false</td>
<td>\u662F\u5426\u9009\u4E2D</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function p(i,u,D,s,c,b){const n=d("tdesign-doc");return l(),r(n)}var v=e(a,[["render",p]]);export{v as default};
