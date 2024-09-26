import{T as n}from"./component.6878da95.js";import{_ as d,d as e,r as a,o as r,c as o}from"./site.6fe70e23.js";const l=e({props:{docType:String},components:{TdesignDoc:n},provide:{info:{spline:"base",toc:!0,title:"Tabs \u9009\u9879\u5361",description:"\u7528\u4E8E\u5185\u5BB9\u5206\u7C7B\u540E\u7684\u5C55\u793A\u5207\u6362\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686021,componentName:"tabs",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_tabs_page.dart" target="_blank" rel="noopener noreferrer">td_tabs_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u5747\u5206\u9009\u9879\u5361</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildItemWithSplit1(BuildContext context) {
    return TDTabBar(
      tabs: subList(2),
      controller: _tabController1,
      backgroundColor: Colors.white,
      showIndicator: true,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildItemWithSplit2(BuildContext context) {
    return TDTabBar(
      tabs: subList(3),
      controller: _tabController2,
      backgroundColor: Colors.white,
      showIndicator: true,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildItemWithSplit3(BuildContext context) {
    return TDTabBar(
      tabs: subList(4),
      controller: _tabController3,
      backgroundColor: Colors.white,
      showIndicator: true,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildItemWithSplit4(BuildContext context) {
    return TDTabBar(
      tabs: subList(5),
      controller: _tabController4,
      backgroundColor: Colors.white,
      showIndicator: true,
    );
  }</pre>
</td-code-block>
<p>\u7B49\u8DDD\u9009\u9879\u5361</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildItemWithSpace(BuildContext context) {
    return TDTabBar(
      tabs: subList(16),
      controller: TabController(length: 16, vsync: this),
      backgroundColor: Colors.white,
      labelPadding: const EdgeInsets.all(10),
      showIndicator: true,
      isScrollable: true,
    );
  }</pre>
</td-code-block>
<p>\u5E26\u56FE\u6807\u9009\u9879\u5361</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildItemWithIcon(BuildContext context) {
    var tabs = [
      const TDTab(
        text: '\u9009\u9879',
        icon: Icon(
          TDIcons.app,
          size: 18,
        ),
      ),
      const TDTab(
        text: '\u9009\u9879',
        icon: Icon(
          TDIcons.app,
          size: 18,
        ),
      ),
      const TDTab(
        text: '\u9009\u9879',
        icon: Icon(
          TDIcons.app,
          size: 18,
        ),
      ),
    ];
    return TDTabBar(
        tabs: tabs,
        controller: TabController(length: 3, vsync: this),
        backgroundColor: Colors.white,
        showIndicator: true);
  }</pre>
</td-code-block>
<p>\u5E26\u5FAE\u6807\u9009\u9879\u5361</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildItemWithLogo(BuildContext context) {
    var tabs = [
      const TDTab(
        text: '\u9009\u9879',
        contentHeight: 48,
        textMargin: EdgeInsets.only(right: 8),
        badge: TDBadge(TDBadgeType.redPoint),
      ),
      const TDTab(
        text: '\u9009\u9879',
        contentHeight: 42,
        textMargin: EdgeInsets.only(right: 16, top: 2, bottom: 2),
        badge: TDBadge(
          TDBadgeType.message,
          message: '8',
        ),
      ),
      const TDTab(
        text: '\u9009\u9879',
        height: 48,
        icon: Icon(
          TDIcons.app,
          size: 18,
        ),
      ),
    ];
    return TDTabBar(
        tabs: tabs,
        controller: TabController(length: 3, vsync: this),
        backgroundColor: Colors.white,
        showIndicator: true);
  }</pre>
</td-code-block>
<p>\u5E26\u5185\u5BB9\u533A\u9009\u9879\u5361</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildItemWithContent(BuildContext context) {
    var tabController = TabController(length: 3, vsync: this);
    return SizedBox(
      height: 120 + 48,
      child: Column(
        children: [
          TDTabBar(
              tabs: subList(3),
              controller: tabController,
              showIndicator: true,
              backgroundColor: Colors.white,
              isScrollable: false,),
          Container(
            height: 120,
            color: Colors.white,
            child: TDTabBarView(
              children: _getTabViews(),
              controller: tabController,
            ),
          )
        ],
      ),
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u72B6\u6001">1 \u7EC4\u4EF6\u72B6\u6001 <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u72B6\u6001"></a></h3>
<p>\u9009\u9879\u5361\u72B6\u6001</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildItemWithStatus(BuildContext context) {
    var tabs = [
      const TDTab(
        text: '\u9009\u4E2D',
      ),
      const TDTab(
        text: '\u9ED8\u8BA4',
      ),
      const TDTab(
        text: '\u7981\u7528',
        enable: false,
      ),
    ];
    return TDTabBar(
        tabs: tabs,
        controller: TabController(length: 3, vsync: this),
        backgroundColor: Colors.white,
        showIndicator: true);
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u6837\u5F0F">1 \u7EC4\u4EF6\u6837\u5F0F <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u6837\u5F0F"></a></h3>
<p>\u9009\u9879\u5361\u5C3A\u5BF8</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildItemWithSizeSmall(BuildContext context) {
    var tabs = [
      const TDTab(
        text: '\u5C0F\u5C3A\u5BF8',
      ),
      const TDTab(
        text: '\u9009\u9879',
      ),
      const TDTab(
        text: '\u9009\u9879',
      ),
      const TDTab(
        text: '\u9009\u9879',
      ),
    ];
    return TDTabBar(
        tabs: tabs,
        controller: TabController(length: 4, vsync: this),
        backgroundColor: Colors.white,
        showIndicator: true);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildItemWithSizeBig(BuildContext context) {
    var tabs = [
      const TDTab(
        text: '\u5927\u5C3A\u5BF8',
        size: TDTabSize.large,
      ),
      const TDTab(
        text: '\u9009\u9879',
        size: TDTabSize.large,
      ),
      const TDTab(
        text: '\u9009\u9879',
        size: TDTabSize.large,
      ),
      const TDTab(
        text: '\u9009\u9879',
        size: TDTabSize.large,
      ),
    ];
    return TDTabBar(
        tabs: tabs,
        controller: TabController(length: 4, vsync: this),
        backgroundColor: Colors.white,
        showIndicator: true);
  }</pre>
</td-code-block>
<p>\u9009\u9879\u5361\u6837\u5F0F</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildItemWithOutlineNormal(BuildContext context) {
    var tabs = [
      const TDTab(
        text: '\u9009\u9879',
      ),
      const TDTab(
        text: '\u9009\u9879',
      ),
      const TDTab(
        text: '\u9009\u9879',
      ),
      const TDTab(
        text: '\u9009\u9879',
      ),
    ];
    return TDTabBar(
        tabs: tabs,
        outlineType: TDTabBarOutlineType.capsule,
        controller: TabController(length: 4, vsync: this),
        backgroundColor: Colors.white,
        showIndicator: false);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildItemWithOutlineCard(BuildContext context) {
    var tabs = [
      const TDTab(
        text: '\u9009\u9879',
      ),
      const TDTab(
        text: '\u9009\u9879',
      ),
      const TDTab(
        text: '\u9009\u9879',
      ),
      const TDTab(
        text: '\u9009\u9879',
      ),
    ];
    return TDTabBar(
        tabs: tabs,
        outlineType: TDTabBarOutlineType.card,
        controller: TabController(length: 4, vsync: this),
        backgroundColor: Colors.white,
        showIndicator: false);
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdtab">TDTab</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdtabbar">TDTabBar</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdtabbarview">TDTabBarView</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdtab">TDTab <a class="header-anchor" href="#tdtab"></a></h3>
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
<td>text</td>
<td>String?</td>
<td>-</td>
<td>\u6587\u5B57\u5185\u5BB9</td>
</tr>
<tr>
<td>child</td>
<td>Widget?</td>
<td>-</td>
<td>\u5B50widget</td>
</tr>
<tr>
<td>icon</td>
<td>Widget?</td>
<td>-</td>
<td>\u56FE\u6807</td>
</tr>
<tr>
<td>badge</td>
<td>TDBadge?</td>
<td>-</td>
<td>\u56FE\u6807</td>
</tr>
<tr>
<td>height</td>
<td>double?</td>
<td>-</td>
<td>tab\u9AD8\u5EA6</td>
</tr>
<tr>
<td>contentHeight</td>
<td>double?</td>
<td>-</td>
<td>\u4E2D\u95F4\u5185\u5BB9\u9AD8\u5EA6</td>
</tr>
<tr>
<td>textMargin</td>
<td>EdgeInsetsGeometry?</td>
<td>-</td>
<td>\u4E2D\u95F4\u5185\u5BB9\u5BBD\u5EA6</td>
</tr>
<tr>
<td>size</td>
<td>TDTabSize</td>
<td>TDTabSize.small</td>
<td>\u9009\u9879\u5361\u5C3A\u5BF8</td>
</tr>
<tr>
<td>outlineType</td>
<td>TDTabOutlineType</td>
<td>TDTabOutlineType.filled</td>
<td>\u9009\u9879\u5361\u6837\u5F0F</td>
</tr>
<tr>
<td>enable</td>
<td>bool</td>
<td>true</td>
<td>\u662F\u5426\u53EF\u7528\uFF0C\u9ED8\u8BA4true</td>
</tr>
<tr>
<td>iconMargin</td>
<td>EdgeInsetsGeometry</td>
<td>const EdgeInsets.only(bottom: 4.0, right: 4.0)</td>
<td>\u56FE\u6807\u95F4\u8DDD</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tdtabbar">TDTabBar <a class="header-anchor" href="#tdtabbar"></a></h3>
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
<td>tabs</td>
<td>List<TDTab></td>
<td>-</td>
<td>tab\u6570\u7EC4</td>
</tr>
<tr>
<td>controller</td>
<td>TabController?</td>
<td>-</td>
<td>tab\u63A7\u5236\u5668</td>
</tr>
<tr>
<td>decoration</td>
<td>Decoration?</td>
<td>-</td>
<td>tabBar\u4FEE\u9970</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>Color?</td>
<td>-</td>
<td>tabBar\u80CC\u666F\u8272\uFF0C\u5F53outlineType\u4E3Acard\u65F6\u63A7\u5236\u9009\u4E2Dtab\u989C\u8272</td>
</tr>
<tr>
<td>indicatorColor</td>
<td>Color?</td>
<td>-</td>
<td>tabBar\u4E0B\u6807\u989C\u8272</td>
</tr>
<tr>
<td>indicatorWidth</td>
<td>double?</td>
<td>-</td>
<td>tabBar\u4E0B\u6807\u5BBD\u5EA6</td>
</tr>
<tr>
<td>indicatorHeight</td>
<td>double?</td>
<td>-</td>
<td>tabBar\u4E0B\u6807\u9AD8\u5EA6</td>
</tr>
<tr>
<td>labelColor</td>
<td>Color?</td>
<td>-</td>
<td>tabBar \u5DF2\u9009\u6807\u7B7E\u989C\u8272</td>
</tr>
<tr>
<td>unselectedLabelColor</td>
<td>Color?</td>
<td>-</td>
<td>tabBar\u672A\u9009\u6807\u7B7E\u989C\u8272</td>
</tr>
<tr>
<td>isScrollable</td>
<td>bool</td>
<td>false</td>
<td>\u662F\u5426\u6EDA\u52A8</td>
</tr>
<tr>
<td>unselectedLabelStyle</td>
<td>TextStyle?</td>
<td>-</td>
<td>unselectedLabel\u5B57\u4F53</td>
</tr>
<tr>
<td>labelStyle</td>
<td>TextStyle?</td>
<td>-</td>
<td>\u5DF2\u9009label\u5B57\u4F53</td>
</tr>
<tr>
<td>width</td>
<td>double?</td>
<td>-</td>
<td>tabBar\u5BBD\u5EA6</td>
</tr>
<tr>
<td>height</td>
<td>double?</td>
<td>-</td>
<td>tabBar\u9AD8\u5EA6</td>
</tr>
<tr>
<td>indicatorPadding</td>
<td>EdgeInsets?</td>
<td>-</td>
<td>\u5F15\u5BFCpadding</td>
</tr>
<tr>
<td>labelPadding</td>
<td>EdgeInsetsGeometry?</td>
<td>-</td>
<td>tab\u95F4\u8DDD</td>
</tr>
<tr>
<td>indicator</td>
<td>Decoration?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u5F15\u5BFC\u63A7\u4EF6</td>
</tr>
<tr>
<td>physics</td>
<td>ScrollPhysics?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u6ED1\u52A8</td>
</tr>
<tr>
<td>onTap</td>
<td>Function(int)?</td>
<td>-</td>
<td>\u70B9\u51FB\u4E8B\u4EF6</td>
</tr>
<tr>
<td>outlineType</td>
<td>TDTabBarOutlineType</td>
<td>TDTabBarOutlineType.filled</td>
<td>\u9009\u9879\u5361\u6837\u5F0F</td>
</tr>
<tr>
<td>showIndicator</td>
<td>bool</td>
<td>false</td>
<td>\u662F\u5426\u5C55\u793A\u5F15\u5BFC\u63A7\u4EF6</td>
</tr>
<tr>
<td>dividerColor</td>
<td>Color?</td>
<td>-</td>
<td>\u5206\u5272\u7EBF\u989C\u8272</td>
</tr>
<tr>
<td>dividerHeight</td>
<td>double</td>
<td>0.5</td>
<td>\u5206\u5272\u7EBF\u9AD8\u5EA6,\u5C0F\u4E8E\u7B49\u4E8E0\u5219\u4E0D\u5C55\u793A\u5206\u5272\u7EBF</td>
</tr>
<tr>
<td>selectedBgColor</td>
<td>Color?</td>
<td>-</td>
<td>\u88AB\u9009\u4E2D\u80CC\u666F\u8272\uFF0C\u53EA\u6709outlineType\u4E3Acapsule\u65F6\u6709\u6548</td>
</tr>
<tr>
<td>unSelectedBgColor</td>
<td>Color?</td>
<td>-</td>
<td>\u672A\u9009\u4E2D\u80CC\u666F\u8272\uFF0C\u53EA\u6709outlineType\u4E3Acapsule\u65F6\u6709\u6548</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tdtabbarview">TDTabBarView <a class="header-anchor" href="#tdtabbarview"></a></h3>
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
<td>children</td>
<td>List<Widget></td>
<td>-</td>
<td>\u5B50widget\u5217\u8868</td>
</tr>
<tr>
<td>controller</td>
<td>TabController?</td>
<td>-</td>
<td>\u63A7\u5236\u5668</td>
</tr>
<tr>
<td>isSlideSwitch</td>
<td>bool</td>
<td>false</td>
<td>\u662F\u5426\u53EF\u4EE5\u6ED1\u52A8\u5207\u6362</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function s(i,c,b,h,p,g){const t=a("tdesign-doc");return r(),o(t)}var D=d(l,[["render",s]]);export{D as default};
