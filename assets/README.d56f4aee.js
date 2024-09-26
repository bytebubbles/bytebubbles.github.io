import{T as t}from"./component.f9e366e0.js";import{_ as e,d as o,r as a,o as c,c as T}from"./site.66dd0425.js";const d=o({props:{docType:String},components:{TdesignDoc:t},provide:{info:{spline:"base",toc:!0,title:"TabBar \u6807\u7B7E\u680F",description:"\u7528\u4E8E\u5728\u4E0D\u540C\u529F\u80FD\u6A21\u5757\u4E4B\u95F4\u8FDB\u884C\u5FEB\u901F\u5207\u6362\uFF0C\u4F4D\u4E8E\u9875\u9762\u5E95\u90E8\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686021,componentName:"tab-bar",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_bottom_tab_bar_page.dart" target="_blank" rel="noopener noreferrer">td_bottom_tab_bar_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u7EAF\u6587\u672C\u6807\u7B7E\u680F</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _textTypeTabBar(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.text, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _textTypeTabBar3tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.text, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _textTypeTabBar4tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.text, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _textTypeTabBar5tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.text, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTextTypeTabBar3tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.iconText, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTextTypeTabBar4tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.iconText, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTextTypeTabBar5tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.iconText, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTypeTabBar3tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.icon, useVerticalDivider: true, navigationTabs: [
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTypeTabBar4tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.icon, useVerticalDivider: true, navigationTabs: [
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTypeTabBar5tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.icon, useVerticalDivider: true, navigationTabs: [
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _textTypeTabBar3tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.text, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _textTypeTabBar4tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.text, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _textTypeTabBar5tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.text, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTextTypeTabBar3tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.iconText, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTextTypeTabBar4tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.iconText, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTextTypeTabBar5tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.iconText, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTypeTabBar3tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.icon, useVerticalDivider: true, navigationTabs: [
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTypeTabBar4tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.icon, useVerticalDivider: true, navigationTabs: [
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTypeTabBar5tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.icon, useVerticalDivider: true, navigationTabs: [
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _textTypeTabBar3tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.text, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _textTypeTabBar4tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.text, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _textTypeTabBar5tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.text, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTextTypeTabBar3tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.iconText, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTextTypeTabBar4tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.iconText, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTextTypeTabBar5tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.iconText, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTypeTabBar3tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.icon, useVerticalDivider: true, navigationTabs: [
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTypeTabBar4tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.icon, useVerticalDivider: true, navigationTabs: [
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTypeTabBar5tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.icon, useVerticalDivider: true, navigationTabs: [
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
    ]);
  }</pre>
</td-code-block>
<p>\u56FE\u6807\u52A0\u6587\u672C\u6807\u7B7E\u680F</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTextTypeTabBar(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.iconText, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _textTypeTabBar3tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.text, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _textTypeTabBar4tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.text, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _textTypeTabBar5tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.text, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTextTypeTabBar3tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.iconText, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTextTypeTabBar4tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.iconText, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTextTypeTabBar5tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.iconText, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTypeTabBar3tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.icon, useVerticalDivider: true, navigationTabs: [
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTypeTabBar4tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.icon, useVerticalDivider: true, navigationTabs: [
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTypeTabBar5tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.icon, useVerticalDivider: true, navigationTabs: [
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _textTypeTabBar3tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.text, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _textTypeTabBar4tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.text, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _textTypeTabBar5tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.text, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTextTypeTabBar3tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.iconText, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTextTypeTabBar4tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.iconText, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTextTypeTabBar5tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.iconText, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTypeTabBar3tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.icon, useVerticalDivider: true, navigationTabs: [
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTypeTabBar4tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.icon, useVerticalDivider: true, navigationTabs: [
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTypeTabBar5tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.icon, useVerticalDivider: true, navigationTabs: [
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _textTypeTabBar3tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.text, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _textTypeTabBar4tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.text, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _textTypeTabBar5tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.text, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTextTypeTabBar3tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.iconText, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTextTypeTabBar4tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.iconText, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTextTypeTabBar5tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.iconText, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTypeTabBar3tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.icon, useVerticalDivider: true, navigationTabs: [
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTypeTabBar4tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.icon, useVerticalDivider: true, navigationTabs: [
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTypeTabBar5tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.icon, useVerticalDivider: true, navigationTabs: [
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
    ]);
  }</pre>
</td-code-block>
<p>\u7EAF\u56FE\u6807\u6807\u7B7E\u680F</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTypeTabBar(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.icon, useVerticalDivider: true, navigationTabs: [
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          })
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _textTypeTabBar3tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.text, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _textTypeTabBar4tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.text, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _textTypeTabBar5tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.text, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTextTypeTabBar3tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.iconText, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTextTypeTabBar4tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.iconText, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTextTypeTabBar5tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.iconText, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTypeTabBar3tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.icon, useVerticalDivider: true, navigationTabs: [
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTypeTabBar4tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.icon, useVerticalDivider: true, navigationTabs: [
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTypeTabBar5tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.icon, useVerticalDivider: true, navigationTabs: [
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _textTypeTabBar3tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.text, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _textTypeTabBar4tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.text, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _textTypeTabBar5tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.text, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTextTypeTabBar3tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.iconText, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTextTypeTabBar4tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.iconText, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTextTypeTabBar5tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.iconText, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTypeTabBar3tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.icon, useVerticalDivider: true, navigationTabs: [
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTypeTabBar4tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.icon, useVerticalDivider: true, navigationTabs: [
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTypeTabBar5tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.icon, useVerticalDivider: true, navigationTabs: [
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _textTypeTabBar3tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.text, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _textTypeTabBar4tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.text, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _textTypeTabBar5tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.text, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTextTypeTabBar3tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.iconText, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTextTypeTabBar4tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.iconText, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTextTypeTabBar5tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.iconText, useVerticalDivider: false, navigationTabs: [
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E1');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
      TDBottomTabBarTabConfig(
        tabText: '\u6807\u7B7E',
        selectedIcon: _selectedIcon,
        unselectedIcon: _unSelectedIcon,
        onTap: () {
          onTapTab(context, '\u6807\u7B7E2');
        },
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTypeTabBar3tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.icon, useVerticalDivider: true, navigationTabs: [
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTypeTabBar4tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.icon, useVerticalDivider: true, navigationTabs: [
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _iconTypeTabBar5tabs(BuildContext context) {
    return TDBottomTabBar(TDBottomTabBarBasicType.icon, useVerticalDivider: true, navigationTabs: [
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
      TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          }),
    ]);
  }</pre>
</td-code-block>
<p>\u53CC\u5C42\u7EA7\u6587\u672C\u6807\u7B7E\u680F</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _expansionPanelTypeTabBar(BuildContext context) {
    return TDBottomTabBar(
      TDBottomTabBarBasicType.expansionPanel,
      useVerticalDivider: true,
      navigationTabs: [
        TDBottomTabBarTabConfig(
          tabText: '\u6807\u7B7E',
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          },
        ),
        TDBottomTabBarTabConfig(
          tabText: '\u6807\u7B7E',
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          },
        ),
        TDBottomTabBarTabConfig(
            tabText: '\u5C55\u5F00\u9879',
            onTap: () {
              onTapTab(context, '\u5C55\u5F00\u9879');
            },
            popUpButtonConfig: TDBottomTabBarPopUpBtnConfig(
                popUpDialogConfig: TDBottomTabBarPopUpShapeConfig(
                  radius: 10,
                  arrowWidth: 16,
                  arrowHeight: 8,
                ),
                items: [
                  '\u5C55\u5F00\u9879\u4E00',
                  '\u5C55\u5F00\u9879\u4E8C',
                  '\u5C55\u5F00\u9879\u4E09',
                ]
                    .reversed
                    .map((e) => PopUpMenuItem(
                          value: e,
                          itemWidget: SizedBox(
                            //height: 30,
                            child: Text(
                              e,
                              style: TextStyle(color: TDTheme.of(context).fontGyColor1, fontSize: 16),
                            ),
                          ),
                        ))
                    .toList(),
                onChanged: (v) {
                  TDToast.showText('\u70B9\u51FB\u4E86 $v', context: context);
                })),
      ],
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u6837\u5F0F">1 \u7EC4\u4EF6\u6837\u5F0F <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u6837\u5F0F"></a></h3>
<p>\u5F31\u9009\u4E2D\u6807\u7B7E\u680F</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _weakSelectTextTabBar(BuildContext context) {
    return TDBottomTabBar(
      TDBottomTabBarBasicType.text,
      componentType: TDBottomTabBarComponentType.normal,
      useVerticalDivider: true,
      navigationTabs: [
        TDBottomTabBarTabConfig(
          badgeConfig: BadgeConfig(
            showBadge: true,
            tdBadge: const TDBadge(TDBadgeType.redPoint),
            badgeTopOffset: -2,
            badgeRightOffset: -10,
          ),
          tabText: '\u6807\u7B7E',
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          },
        ),
        TDBottomTabBarTabConfig(
          tabText: '\u6807\u7B7E',
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          },
        ),
        TDBottomTabBarTabConfig(
          tabText: '\u6807\u7B7E',
          onTap: () {
            onTapTab(context, '\u6807\u7B7E3');
          },
        ),
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _weakSelectIconTabBar(BuildContext context) {
    return TDBottomTabBar(
      TDBottomTabBarBasicType.icon,
      componentType: TDBottomTabBarComponentType.normal,
      useVerticalDivider: false,
      navigationTabs: [
        TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          badgeConfig: BadgeConfig(
            showBadge: true,
            tdBadge: const TDBadge(TDBadgeType.redPoint),
            badgeTopOffset: -2,
            badgeRightOffset: -10,
          ),
          tabText: '\u6807\u7B7E',
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          },
        ),
        TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          tabText: '\u6807\u7B7E',
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          },
        ),
        TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          tabText: '\u6807\u7B7E',
          onTap: () {
            onTapTab(context, '\u6807\u7B7E3');
          },
        ),
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _weakSelectIconTextTabBar(BuildContext context) {
    return TDBottomTabBar(
      TDBottomTabBarBasicType.iconText,
      componentType: TDBottomTabBarComponentType.normal,
      useVerticalDivider: false,
      navigationTabs: [
        TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          badgeConfig: BadgeConfig(
            showBadge: true,
            tdBadge: const TDBadge(TDBadgeType.redPoint),
            badgeTopOffset: -2,
            badgeRightOffset: -10,
          ),
          tabText: '\u6807\u7B7E',
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          },
        ),
        TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          tabText: '\u6807\u7B7E',
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          },
        ),
        TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          tabText: '\u6807\u7B7E',
          onTap: () {
            onTapTab(context, '\u6807\u7B7E3');
          },
        ),
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _weakSelectIconTabBar(BuildContext context) {
    return TDBottomTabBar(
      TDBottomTabBarBasicType.icon,
      componentType: TDBottomTabBarComponentType.normal,
      useVerticalDivider: false,
      navigationTabs: [
        TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          badgeConfig: BadgeConfig(
            showBadge: true,
            tdBadge: const TDBadge(TDBadgeType.redPoint),
            badgeTopOffset: -2,
            badgeRightOffset: -10,
          ),
          tabText: '\u6807\u7B7E',
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          },
        ),
        TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          tabText: '\u6807\u7B7E',
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          },
        ),
        TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          tabText: '\u6807\u7B7E',
          onTap: () {
            onTapTab(context, '\u6807\u7B7E3');
          },
        ),
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _weakSelectIconTextTabBar(BuildContext context) {
    return TDBottomTabBar(
      TDBottomTabBarBasicType.iconText,
      componentType: TDBottomTabBarComponentType.normal,
      useVerticalDivider: false,
      navigationTabs: [
        TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          badgeConfig: BadgeConfig(
            showBadge: true,
            tdBadge: const TDBadge(TDBadgeType.redPoint),
            badgeTopOffset: -2,
            badgeRightOffset: -10,
          ),
          tabText: '\u6807\u7B7E',
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          },
        ),
        TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          tabText: '\u6807\u7B7E',
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          },
        ),
        TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          tabText: '\u6807\u7B7E',
          onTap: () {
            onTapTab(context, '\u6807\u7B7E3');
          },
        ),
      ],
    );
  }</pre>
</td-code-block>
<p>\u60AC\u6D6E\u80F6\u56CA\u6807\u7B7E\u680F</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _capsuleTabBar(BuildContext context) {
    return TDBottomTabBar(
      TDBottomTabBarBasicType.iconText,
      componentType: TDBottomTabBarComponentType.label,
      outlineType: TDBottomTabBarOutlineType.capsule,
      useVerticalDivider: true,
      navigationTabs: [
        TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          tabText: '\u6807\u7B7E',
          onTap: () {
            onTapTab(context, '\u6807\u7B7E1');
          },
        ),
        TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          tabText: '\u6807\u7B7E',
          onTap: () {
            onTapTab(context, '\u6807\u7B7E2');
          },
        ),
        TDBottomTabBarTabConfig(
          selectedIcon: _selectedIcon,
          unselectedIcon: _unSelectedIcon,
          tabText: '\u6807\u7B7E',
          onTap: () {
            onTapTab(context, '\u6807\u7B7E3');
          },
        ),
      ],
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#badgeconfig">BadgeConfig</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdbottomtabbartabconfig">TDBottomTabBarTabConfig</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdbottomtabbar">TDBottomTabBar</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdbottomtabbarpopupbtnconfig">TDBottomTabBarPopUpBtnConfig</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdbottomtabbarpopupshapeconfig">TDBottomTabBarPopUpShapeConfig</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#popupmenuitem">PopUpMenuItem</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="badgeconfig">BadgeConfig <a class="header-anchor" href="#badgeconfig"></a></h3>
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
<td>showBadge</td>
<td>bool</td>
<td>-</td>
<td>\u662F\u5426\u5C55\u793A\u6D88\u606F</td>
</tr>
<tr>
<td>tdBadge</td>
<td>TDBadge?</td>
<td>-</td>
<td>\u6D88\u606F\u6837\u5F0F(\u672A\u8BBE\u7F6E\u4F46showBadge\u4E3Atrue\uFF0C\u5219\u9ED8\u8BA4\u4F7F\u7528\u7EA2\u70B9)</td>
</tr>
<tr>
<td>badgeTopOffset</td>
<td>double?</td>
<td>-</td>
<td>\u6D88\u606F\u9876\u90E8\u504F\u79FB\u91CF</td>
</tr>
<tr>
<td>badgeRightOffset</td>
<td>double?</td>
<td>-</td>
<td>\u6D88\u606F\u53F3\u4FA7\u504F\u79FB\u91CF</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tdbottomtabbartabconfig">TDBottomTabBarTabConfig <a class="header-anchor" href="#tdbottomtabbartabconfig"></a></h3>
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
<td>onTap</td>
<td>GestureTapCallback?</td>
<td>-</td>
<td>tab\u70B9\u51FB\u4E8B\u4EF6</td>
</tr>
<tr>
<td>selectedIcon</td>
<td>Widget?</td>
<td>-</td>
<td>\u9009\u4E2D\u65F6\u56FE\u6807</td>
</tr>
<tr>
<td>unselectedIcon</td>
<td>Widget?</td>
<td>-</td>
<td>\u672A\u9009\u4E2D\u65F6\u56FE\u6807</td>
</tr>
<tr>
<td>tabText</td>
<td>String?</td>
<td>-</td>
<td>tab\u6587\u672C</td>
</tr>
<tr>
<td>selectTabTextStyle</td>
<td>TextStyle?</td>
<td>-</td>
<td>\u6587\u672C\u5DF2\u9009\u62E9\u6837\u5F0F basicType\u4E3Atext\u65F6\u5FC5\u586B</td>
</tr>
<tr>
<td>unselectTabTextStyle</td>
<td>TextStyle?</td>
<td>-</td>
<td>\u6587\u672C\u672A\u9009\u62E9\u6837\u5F0F basicType\u4E3Atext\u65F6\u5FC5\u586B</td>
</tr>
<tr>
<td>badgeConfig</td>
<td>BadgeConfig?</td>
<td>-</td>
<td>\u6D88\u606F\u914D\u7F6E</td>
</tr>
<tr>
<td>popUpButtonConfig</td>
<td>TDBottomTabBarPopUpBtnConfig?</td>
<td>-</td>
<td>\u5F39\u7A97\u914D\u7F6E</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tdbottomtabbar">TDBottomTabBar <a class="header-anchor" href="#tdbottomtabbar"></a></h3>
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
<td>basicType</td>
<td>TDBottomTabBarBasicType</td>
<td>basicType</td>
<td>\u57FA\u672C\u6837\u5F0F\uFF08\u7EAF\u6587\u672C\u3001\u7EAF\u56FE\u6807\u3001\u56FE\u6807+\u6587\u672C\uFF09</td>
</tr>
<tr>
<td>key</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>componentType</td>
<td>TDBottomTabBarComponentType?</td>
<td>TDBottomTabBarComponentType.label</td>
<td>\u9009\u9879\u6837\u5F0F \u9ED8\u8BA4label</td>
</tr>
<tr>
<td>outlineType</td>
<td>TDBottomTabBarOutlineType?</td>
<td>TDBottomTabBarOutlineType.filled</td>
<td>\u6807\u7B7E\u680F\u6837\u5F0F \u9ED8\u8BA4filled</td>
</tr>
<tr>
<td>navigationTabs</td>
<td>List<TDBottomTabBarTabConfig></td>
<td>-</td>
<td>tabs\u914D\u7F6E</td>
</tr>
<tr>
<td>barHeight</td>
<td>double?</td>
<td>_kDefaultTabBarHeight</td>
<td>tab\u9AD8\u5EA6</td>
</tr>
<tr>
<td>useVerticalDivider</td>
<td>bool?</td>
<td>-</td>
<td>\u662F\u5426\u4F7F\u7528\u7AD6\u7EBF\u5206\u9694(\u5982\u679C\u9009\u9879\u6837\u5F0F\u4E3Alabel\u5219\u5F3A\u5236\u4E3Afalse)</td>
</tr>
<tr>
<td>dividerHeight</td>
<td>double?</td>
<td>-</td>
<td>\u5206\u5272\u7EBF\u9AD8\u5EA6\uFF08\u53EF\u9009\uFF09</td>
</tr>
<tr>
<td>dividerThickness</td>
<td>double?</td>
<td>-</td>
<td>\u5206\u5272\u7EBF\u539A\u5EA6\uFF08\u53EF\u9009\uFF09</td>
</tr>
<tr>
<td>dividerColor</td>
<td>Color?</td>
<td>-</td>
<td>\u5206\u5272\u7EBF\u989C\u8272\uFF08\u53EF\u9009\uFF09</td>
</tr>
<tr>
<td>showTopBorder</td>
<td>bool?</td>
<td>true</td>
<td>\u662F\u5426\u5C55\u793Abar\u4E0A\u8FB9\u7EBF\uFF08\u8BBE\u7F6E\u4E3Atrue \u4F46\u662FtopBorder\u6837\u5F0F\u672A\u8BBE\u7F6E\uFF0C\u5219\u4F7F\u7528\u9ED8\u8BA4\u503C,\u975E\u80F6\u56CA\u578B\u624D\u751F\u6548\uFF09</td>
</tr>
<tr>
<td>topBorder</td>
<td>BorderSide?</td>
<td>-</td>
<td>\u4E0A\u8FB9\u7EBF\u6837\u5F0F</td>
</tr>
<tr>
<td>useSafeArea</td>
<td>bool</td>
<td>true</td>
<td>\u4F7F\u7528\u5B89\u5168\u533A\u57DF</td>
</tr>
<tr>
<td>selectedBgColor</td>
<td>Color?</td>
<td>-</td>
<td>\u9009\u4E2D\u65F6\u80CC\u666F\u989C\u8272</td>
</tr>
<tr>
<td>unselectedBgColor</td>
<td>Color?</td>
<td>-</td>
<td>\u672A\u9009\u4E2D\u65F6\u80CC\u666F\u989C\u8272</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>Color?</td>
<td>-</td>
<td>\u80CC\u666F\u989C\u8272 \uFF08\u53EF\u9009\uFF09</td>
</tr>
<tr>
<td>centerDistance</td>
<td>double?</td>
<td>-</td>
<td>icon\u4E0E\u6587\u672C\u4E2D\u95F4\u8DDD\u79BB\uFF08\u53EF\u9009\uFF09</td>
</tr>
<tr>
<td>currentIndex</td>
<td>int?</td>
<td>-</td>
<td>\u9009\u4E2D\u7684index\uFF08\u53EF\u9009\uFF09</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tdbottomtabbarpopupbtnconfig">TDBottomTabBarPopUpBtnConfig <a class="header-anchor" href="#tdbottomtabbarpopupbtnconfig"></a></h3>
<h4 id="\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5-3">\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5 <a class="header-anchor" href="#\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5-3"></a></h4>
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
<td>items</td>
<td>List<PopUpMenuItem></td>
<td>-</td>
<td>\u9009\u9879list</td>
</tr>
<tr>
<td>onChanged</td>
<td>ValueChanged<String></td>
<td>-</td>
<td>\u7EDF\u4E00\u5728 onChanged \u4E2D\u5904\u7406\u5404item\u70B9\u51FB\u4E8B\u4EF6</td>
</tr>
<tr>
<td>popUpDialogConfig</td>
<td>TDBottomTabBarPopUpShapeConfig?</td>
<td>-</td>
<td>\u5F39\u7A97UI\u914D\u7F6E</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tdbottomtabbarpopupshapeconfig">TDBottomTabBarPopUpShapeConfig <a class="header-anchor" href="#tdbottomtabbarpopupshapeconfig"></a></h3>
<h4 id="\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5-4">\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5 <a class="header-anchor" href="#\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5-4"></a></h4>
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
<td>popUpWidth</td>
<td>double?</td>
<td>-</td>
<td>\u5F39\u7A97\u5BBD\u5EA6\uFF08\u4E0D\u8BBE\u7F6E\uFF0C\u9ED8\u8BA4\u4E3A\u6309\u94AE\u5BBD\u5EA6 - 20\uFF09</td>
</tr>
<tr>
<td>popUpitemHeight</td>
<td>double?</td>
<td>_kDefaultMenuItemHeight</td>
<td>\u5355\u4E2A\u9009\u9879\u9AD8\u5EA6 \u6240\u6709\u9009\u9879\u7B49\u9AD8 \u4E0D\u8BBE\u7F6E\u5219\u4F7F\u7528\u9ED8\u8BA4\u503C 48</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>Color?</td>
<td>-</td>
<td>\u5F39\u7A97\u80CC\u666F\u989C\u8272</td>
</tr>
<tr>
<td>radius</td>
<td>double?</td>
<td>-</td>
<td>panel\u5706\u89D2 \u9ED8\u8BA40</td>
</tr>
<tr>
<td>arrowWidth</td>
<td>double?</td>
<td>-</td>
<td>\u7BAD\u5934\u5BBD\u5EA6 \u9ED8\u8BA413.5</td>
</tr>
<tr>
<td>arrowHeight</td>
<td>double?</td>
<td>-</td>
<td>\u7BAD\u5934\u9AD8\u5EA6 \u9ED8\u8BA48</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="popupmenuitem">PopUpMenuItem <a class="header-anchor" href="#popupmenuitem"></a></h3>
<h4 id="\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5-5">\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5 <a class="header-anchor" href="#\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5-5"></a></h4>
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
<td>itemWidget</td>
<td>Widget?</td>
<td>-</td>
<td>\u9009\u9879widget</td>
</tr>
<tr>
<td>value</td>
<td>String</td>
<td>-</td>
<td>\u9009\u9879\u503C</td>
</tr>
<tr>
<td>alignment</td>
<td>AlignmentGeometry</td>
<td>AlignmentDirectional.center</td>
<td>\u5BF9\u9F50\u65B9\u5F0F</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function b(l,r,s,i,p,B){const n=a("tdesign-doc");return c(),T(n)}var u=e(d,[["render",b]]);export{u as default};
