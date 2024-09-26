import{T as n}from"./component.9b32f023.js";import{_ as e,d as r,r as d,o as a,c as i}from"./site.b6fa4b6e.js";const o=r({props:{docType:String},components:{TdesignDoc:n},provide:{info:{spline:"base",toc:!0,title:"Drawer \u62BD\u5C49",description:"\u7528\u4F5C\u4E00\u7EC4\u5E73\u884C\u5173\u7CFB\u9875\u9762/\u5185\u5BB9\u7684\u5207\u6362\u5668\uFF0C\u76F8\u8F83\u4E8ETab\uFF0C\u540C\u5C4F\u53EF\u5C55\u793A\u66F4\u591A\u7684\u9009\u9879\u6570\u91CF\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686018,componentName:"drawer",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_drawer_page.dart" target="_blank" rel="noopener noreferrer">td_drawer_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u57FA\u7840\u62BD\u5C49</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
Widget _buildBaseSimple(BuildContext context) {
  /// \u83B7\u53D6navBar\u5C3A\u5BF8
  var renderBox = navBarkey.currentContext?.findRenderObject() as RenderBox?;
  return TDButton(
    text: '\u57FA\u7840\u62BD\u5C49',
    isBlock: true,
    type: TDButtonType.outline,
    theme: TDButtonTheme.primary,
    size: TDButtonSize.large,
    onTap: () {
      TDDrawer(
        context,
        visible: true,
        drawerTop: renderBox?.size.height,
        items: List.generate(30, (index) => TDDrawerItem(title: '\u83DC\u5355\${_nums[index]}')).toList(),
        onItemClick: (index, item) {
          print('drawer item\u88AB\u70B9\u51FB\uFF0Cindex\uFF1A$index\uFF0Ctitle\uFF1A\${item.title}');
        },
      );
    },
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
Widget _buildBaseSimple(BuildContext context) {
  /// \u83B7\u53D6navBar\u5C3A\u5BF8
  var renderBox = navBarkey.currentContext?.findRenderObject() as RenderBox?;
  return TDButton(
    text: '\u57FA\u7840\u62BD\u5C49',
    isBlock: true,
    type: TDButtonType.outline,
    theme: TDButtonTheme.primary,
    size: TDButtonSize.large,
    onTap: () {
      TDDrawer(
        context,
        visible: true,
        drawerTop: renderBox?.size.height,
        items: List.generate(30, (index) => TDDrawerItem(title: '\u83DC\u5355\${_nums[index]}')).toList(),
        onItemClick: (index, item) {
          print('drawer item\u88AB\u70B9\u51FB\uFF0Cindex\uFF1A$index\uFF0Ctitle\uFF1A\${item.title}');
        },
      );
    },
  );
}</pre>
</td-code-block>
<p>\u5E26\u56FE\u6807\u62BD\u5C49</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
Widget _buildIconSimple(BuildContext context) {
  /// \u83B7\u53D6navBar\u5C3A\u5BF8
  var renderBox = navBarkey.currentContext?.findRenderObject() as RenderBox?;
  return TDButton(
    text: '\u5E26\u56FE\u6807\u62BD\u5C49',
    isBlock: true,
    type: TDButtonType.outline,
    theme: TDButtonTheme.primary,
    size: TDButtonSize.large,
    onTap: () {
      TDDrawer(
        context,
        visible: true,
        drawerTop: renderBox?.size.height,
        items: List.generate(30, (index) => TDDrawerItem(title: '\u83DC\u5355\${_nums[index]}', icon: const Icon(TDIcons.app))).toList(),
      );
    },
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
Widget _buildIconSimple(BuildContext context) {
  /// \u83B7\u53D6navBar\u5C3A\u5BF8
  var renderBox = navBarkey.currentContext?.findRenderObject() as RenderBox?;
  return TDButton(
    text: '\u5E26\u56FE\u6807\u62BD\u5C49',
    isBlock: true,
    type: TDButtonType.outline,
    theme: TDButtonTheme.primary,
    size: TDButtonSize.large,
    onTap: () {
      TDDrawer(
        context,
        visible: true,
        drawerTop: renderBox?.size.height,
        items: List.generate(30, (index) => TDDrawerItem(title: '\u83DC\u5355\${_nums[index]}', icon: const Icon(TDIcons.app))).toList(),
      );
    },
  );
}</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u6837\u5F0F">1 \u7EC4\u4EF6\u6837\u5F0F <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u6837\u5F0F"></a></h3>
<p>\u5E26\u6807\u9898\u62BD\u5C49</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
Widget _buildTitleSimple(BuildContext context) {
  /// \u83B7\u53D6navBar\u5C3A\u5BF8
  var renderBox = navBarkey.currentContext?.findRenderObject() as RenderBox?;
  return TDButton(
    text: '\u5E26\u56FE\u6807\u62BD\u5C49',
    isBlock: true,
    type: TDButtonType.outline,
    theme: TDButtonTheme.primary,
    size: TDButtonSize.large,
    onTap: () {
      TDDrawer(
        context,
        visible: true,
        drawerTop: renderBox?.size.height,
        title: '\u6807\u9898',
        placement: TDDrawerPlacement.left,
        items: List.generate(10, (index) => TDDrawerItem(title: '\u83DC\u5355\${_nums[index]}')).toList(),
      );
    },
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
Widget _buildTitleSimple(BuildContext context) {
  /// \u83B7\u53D6navBar\u5C3A\u5BF8
  var renderBox = navBarkey.currentContext?.findRenderObject() as RenderBox?;
  return TDButton(
    text: '\u5E26\u56FE\u6807\u62BD\u5C49',
    isBlock: true,
    type: TDButtonType.outline,
    theme: TDButtonTheme.primary,
    size: TDButtonSize.large,
    onTap: () {
      TDDrawer(
        context,
        visible: true,
        drawerTop: renderBox?.size.height,
        title: '\u6807\u9898',
        placement: TDDrawerPlacement.left,
        items: List.generate(10, (index) => TDDrawerItem(title: '\u83DC\u5355\${_nums[index]}')).toList(),
      );
    },
  );
}</pre>
</td-code-block>
<p>\u5E26\u5E95\u90E8\u63D2\u69FD\u6837\u5F0F</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
Widget _buildBottomSimple(BuildContext context) {
  /// \u83B7\u53D6navBar\u5C3A\u5BF8
  var renderBox = navBarkey.currentContext?.findRenderObject() as RenderBox?;
  return TDButton(
    text: '\u5E26\u5E95\u90E8\u63D2\u69FD\u6837\u5F0F',
    isBlock: true,
    type: TDButtonType.outline,
    theme: TDButtonTheme.primary,
    size: TDButtonSize.large,
    onTap: () {
      TDDrawer(
        context,
        visible: true,
        drawerTop: renderBox?.size.height,
        title: '\u6807\u9898',
        placement: TDDrawerPlacement.left,
        items: List.generate(10, (index) => TDDrawerItem(title: '\u83DC\u5355\${_nums[index]}')).toList(),
        footer: const TDButton(
          text: '\u64CD\u4F5C',
          type: TDButtonType.outline,
          width: double.infinity,
          size: TDButtonSize.large,
        ),
      );
    },
  );
}</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
Widget _buildBottomSimple(BuildContext context) {
  /// \u83B7\u53D6navBar\u5C3A\u5BF8
  var renderBox = navBarkey.currentContext?.findRenderObject() as RenderBox?;
  return TDButton(
    text: '\u5E26\u5E95\u90E8\u63D2\u69FD\u6837\u5F0F',
    isBlock: true,
    type: TDButtonType.outline,
    theme: TDButtonTheme.primary,
    size: TDButtonSize.large,
    onTap: () {
      TDDrawer(
        context,
        visible: true,
        drawerTop: renderBox?.size.height,
        title: '\u6807\u9898',
        placement: TDDrawerPlacement.left,
        items: List.generate(10, (index) => TDDrawerItem(title: '\u83DC\u5355\${_nums[index]}')).toList(),
        footer: const TDButton(
          text: '\u64CD\u4F5C',
          type: TDButtonType.outline,
          width: double.infinity,
          size: TDButtonSize.large,
        ),
      );
    },
  );
}</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tddrawer">TDDrawer</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tddraweritem">TDDrawerItem</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tddrawer">TDDrawer <a class="header-anchor" href="#tddrawer"></a></h3>
<h4 id="\u7B80\u4ECB">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB"></a></h4>
<p>\u62BD\u5C49\u7EC4\u4EF6</p>
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
<td>context</td>
<td>BuildContext</td>
<td>context</td>
<td>\u4E0A\u4E0B\u6587</td>
</tr>
<tr>
<td>closeOnOverlayClick</td>
<td>bool?</td>
<td>-</td>
<td>\u70B9\u51FB\u8499\u5C42\u65F6\u662F\u5426\u5173\u95ED\u62BD\u5C49</td>
</tr>
<tr>
<td>footer</td>
<td>Widget?</td>
<td>-</td>
<td>\u62BD\u5C49\u7684\u5E95\u90E8</td>
</tr>
<tr>
<td>items</td>
<td>List<TDDrawerItem>?</td>
<td>-</td>
<td>\u62BD\u5C49\u91CC\u7684\u5217\u8868\u9879</td>
</tr>
<tr>
<td>placement</td>
<td>TDDrawerPlacement?</td>
<td>-</td>
<td>\u62BD\u5C49\u65B9\u5411</td>
</tr>
<tr>
<td>showOverlay</td>
<td>bool?</td>
<td>-</td>
<td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td>
</tr>
<tr>
<td>title</td>
<td>String?</td>
<td>-</td>
<td>\u62BD\u5C49\u7684\u6807\u9898</td>
</tr>
<tr>
<td>titleWidget</td>
<td>Widget?</td>
<td>-</td>
<td>\u62BD\u5C49\u7684\u6807\u9898\u7EC4\u4EF6</td>
</tr>
<tr>
<td>visible</td>
<td>bool?</td>
<td>-</td>
<td>\u7EC4\u4EF6\u662F\u5426\u53EF\u89C1</td>
</tr>
<tr>
<td>onClose</td>
<td>VoidCallback?</td>
<td>-</td>
<td>\u5173\u95ED\u65F6\u89E6\u53D1</td>
</tr>
<tr>
<td>onItemClick</td>
<td>TDDrawerItemClickCallback?</td>
<td>-</td>
<td>\u70B9\u51FB\u62BD\u5C49\u91CC\u7684\u5217\u8868\u9879\u89E6\u53D1</td>
</tr>
<tr>
<td>width</td>
<td>double?</td>
<td>280</td>
<td>\u5BBD\u5EA6</td>
</tr>
<tr>
<td>drawerTop</td>
<td>double?</td>
<td>-</td>
<td>\u8DDD\u79BB\u9876\u90E8\u7684\u8DDD\u79BB</td>
</tr>
<tr>
<td>style</td>
<td>TDCellStyle?</td>
<td>-</td>
<td>\u5217\u8868\u81EA\u5B9A\u4E49\u6837\u5F0F</td>
</tr>
<tr>
<td>hover</td>
<td>bool?</td>
<td>true</td>
<td>\u662F\u5426\u5F00\u542F\u70B9\u51FB\u53CD\u9988</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tddraweritem">TDDrawerItem <a class="header-anchor" href="#tddraweritem"></a></h3>
<h4 id="\u7B80\u4ECB-1">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB-1"></a></h4>
<p>\u62BD\u5C49\u91CC\u7684\u5217\u8868\u9879</p>
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
<td>\u6BCF\u5217\u6807\u9898</td>
</tr>
<tr>
<td>icon</td>
<td>Widget?</td>
<td>-</td>
<td>\u6BCF\u5217\u56FE\u6807</td>
</tr>
<tr>
<td>content</td>
<td>Widget?</td>
<td>-</td>
<td>\u5B8C\u5168\u81EA\u5B9A\u4E49</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function s(l,c,p,u,m,h){const t=d("tdesign-doc");return a(),i(t)}var T=e(o,[["render",s]]);export{T as default};
