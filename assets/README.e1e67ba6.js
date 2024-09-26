import{T as n}from"./component.9b32f023.js";import{_ as t,d,r as a,o as l,c as i}from"./site.b6fa4b6e.js";const o=d({props:{docType:String},components:{TdesignDoc:n},provide:{info:{spline:"base",toc:!0,title:"SideBar \u4FA7\u8FB9\u680F",description:"\u7528\u4E8E\u5185\u5BB9\u5206\u7C7B\u540E\u7684\u5C55\u793A\u5207\u6362\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686020,componentName:"side-bar",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/sidebar/td_sidebar_page.dart" target="_blank" rel="noopener noreferrer">td_sidebar_page.dart</a></p>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/sidebar/td_sidebar_page_anchor.dart" target="_blank" rel="noopener noreferrer">td_sidebar_page_anchor.dart</a></p>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/sidebar/td_sidebar_page_custom.dart" target="_blank" rel="noopener noreferrer">td_sidebar_page_custom.dart</a></p>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/sidebar/td_sidebar_page_icon.dart" target="_blank" rel="noopener noreferrer">td_sidebar_page_icon.dart</a></p>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/sidebar/td_sidebar_page_pagination.dart" target="_blank" rel="noopener noreferrer">td_sidebar_page_pagination.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u4FA7\u8FB9\u5BFC\u822A\u7528\u6CD5</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildAnchorSideBar(BuildContext context) {
    // \u951A\u70B9\u7528\u6CD5
    final list = <SideItemProps>[];
    final pages = <Widget>[];

    for (var i = 0; i < 20; i++) {
      list.add(SideItemProps(
        index: i,
        label: '\u9009\u9879',
        value: i,
      ));
      pages.add(getAnchorDemo(i));
    }

    pages.add(Container(
      height: MediaQuery.of(context).size.height - itemHeight,
      decoration: const BoxDecoration(color: Colors.white),
    ));

    list[1].badge = const TDBadge(TDBadgeType.redPoint);
    list[2].badge = const TDBadge(
      TDBadgeType.message,
      count: '8',
    );

    var demoHeight = MediaQuery.of(context).size.height;

    return Row(
      children: [
        SizedBox(
          width: 110,
          child: TDSideBar(
            height: demoHeight,
            style: TDSideBarStyle.normal,
            value: currentValue,
            controller: _sideBarController,
            children: list
                .map((ele) => TDSideBarItem(
                    label: ele.label ?? '',
                    badge: ele.badge,
                    value: ele.value,
                    icon: ele.icon))
                .toList(),
            onChanged: onChanged,
            onSelected: onSelected,
          ),
        ),
        Expanded(
            child: SizedBox(
          height: demoHeight,
          child: SingleChildScrollView(
            controller: _demoScroller,
            child: Column(
              children: pages,
            ),
          ),
        ))
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildPaginationSideBar(BuildContext context) {
    // \u5207\u9875\u7528\u6CD5
    final list = <SideItemProps>[];
    final pages = <Widget>[];

    for (var i = 0; i < 100; i++) {
      list.add(SideItemProps(
        index: i,
        label: '\u9009\u9879',
        value: i,
      ));
      pages.add(getPageDemo(i));
    }

    list[1].badge = const TDBadge(TDBadgeType.redPoint);
    list[2].badge = const TDBadge(
      TDBadgeType.message,
      count: '8',
    );

    void setCurrentValue(int value) {
      _pageController.jumpToPage(value);
      if (currentValue != value) {
        currentValue = value;
      }
    }

    var demoHeight = MediaQuery.of(context).size.height;

    return Row(
      children: [
        SizedBox(
          width: 110,
          child: TDSideBar(
            height: demoHeight,
            style: TDSideBarStyle.normal,
            value: currentValue,
            controller: _sideBarController,
            children: list
                .map((ele) => TDSideBarItem(
                    label: ele.label ?? '',
                    badge: ele.badge,
                    value: ele.value,
                    icon: ele.icon))
                .toList(),
            onSelected: setCurrentValue,
          ),
        ),
        Expanded(
            child: SizedBox(
          height: demoHeight,
          child: PageView(
            controller: _pageController,
            scrollDirection: Axis.vertical,
            children: pages,
            physics: const NeverScrollableScrollPhysics(),
          ),
        ))
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildAnchorSideBar(BuildContext context) {
    // \u951A\u70B9\u7528\u6CD5
    final list = <SideItemProps>[];
    final pages = <Widget>[];

    for (var i = 0; i < 20; i++) {
      list.add(SideItemProps(
        index: i,
        label: '\u9009\u9879',
        value: i,
      ));
      pages.add(getAnchorDemo(i));
    }

    pages.add(Container(
      height: MediaQuery.of(context).size.height - itemHeight,
      decoration: const BoxDecoration(color: Colors.white),
    ));

    list[1].badge = const TDBadge(TDBadgeType.redPoint);
    list[2].badge = const TDBadge(
      TDBadgeType.message,
      count: '8',
    );

    var demoHeight = MediaQuery.of(context).size.height;

    return Row(
      children: [
        SizedBox(
          width: 110,
          child: TDSideBar(
            height: demoHeight,
            style: TDSideBarStyle.normal,
            value: currentValue,
            controller: _sideBarController,
            children: list
                .map((ele) => TDSideBarItem(
                    label: ele.label ?? '',
                    badge: ele.badge,
                    value: ele.value,
                    icon: ele.icon))
                .toList(),
            onChanged: onChanged,
            onSelected: onSelected,
          ),
        ),
        Expanded(
            child: SizedBox(
          height: demoHeight,
          child: SingleChildScrollView(
            controller: _demoScroller,
            child: Column(
              children: pages,
            ),
          ),
        ))
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildPaginationSideBar(BuildContext context) {
    // \u5207\u9875\u7528\u6CD5
    final list = <SideItemProps>[];
    final pages = <Widget>[];

    for (var i = 0; i < 100; i++) {
      list.add(SideItemProps(
        index: i,
        label: '\u9009\u9879',
        value: i,
      ));
      pages.add(getPageDemo(i));
    }

    list[1].badge = const TDBadge(TDBadgeType.redPoint);
    list[2].badge = const TDBadge(
      TDBadgeType.message,
      count: '8',
    );

    void setCurrentValue(int value) {
      _pageController.jumpToPage(value);
      if (currentValue != value) {
        currentValue = value;
      }
    }

    var demoHeight = MediaQuery.of(context).size.height;

    return Row(
      children: [
        SizedBox(
          width: 110,
          child: TDSideBar(
            height: demoHeight,
            style: TDSideBarStyle.normal,
            value: currentValue,
            controller: _sideBarController,
            children: list
                .map((ele) => TDSideBarItem(
                    label: ele.label ?? '',
                    badge: ele.badge,
                    value: ele.value,
                    icon: ele.icon))
                .toList(),
            onSelected: setCurrentValue,
          ),
        ),
        Expanded(
            child: SizedBox(
          height: demoHeight,
          child: PageView(
            controller: _pageController,
            scrollDirection: Axis.vertical,
            children: pages,
            physics: const NeverScrollableScrollPhysics(),
          ),
        ))
      ],
    );
  }</pre>
</td-code-block>
<p>\u56FE\u6807\u4FA7\u8FB9\u5BFC\u822A</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildIconSideBar(BuildContext context) {
    final list = <SideItemProps>[];
    final pages = <Widget>[];

    for (var i = 0; i < 20; i++) {
      list.add(
          SideItemProps(index: i, label: '\u9009\u9879', value: i, icon: TDIcons.app));
      pages.add(getAnchorDemo(i));
    }

    pages.add(Container(
      height: MediaQuery.of(context).size.height - itemHeight,
      decoration: const BoxDecoration(color: Colors.white),
    ));

    list[1].badge = const TDBadge(TDBadgeType.redPoint);
    list[2].badge = const TDBadge(
      TDBadgeType.message,
      count: '8',
    );

    var demoHeight = MediaQuery.of(context).size.height;

    return Row(
      children: [
        SizedBox(
          width: 110,
          child: TDSideBar(
            height: demoHeight,
            style: TDSideBarStyle.normal,
            value: currentValue,
            controller: _sideBarController,
            children: list
                .map((ele) => TDSideBarItem(
                    label: ele.label ?? '',
                    badge: ele.badge,
                    value: ele.value,
                    icon: ele.icon))
                .toList(),
            onChanged: onChanged,
            onSelected: onSelected,
          ),
        ),
        Expanded(
            child: SizedBox(
          height: demoHeight,
          child: SingleChildScrollView(
            controller: _demoScroller,
            child: Column(
              children: pages,
            ),
          ),
        ))
      ],
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u6837\u5F0F">1 \u7EC4\u4EF6\u6837\u5F0F <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u6837\u5F0F"></a></h3>
<p>\u4FA7\u8FB9\u5BFC\u822A\u6837\u5F0F</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildOutlineSideBar(BuildContext context) {
    // \u975E\u901A\u680F\u9009\u9879\u6837\u5F0F
    final list = <SideItemProps>[];
    final pages = <Widget>[];

    for (var i = 0; i < 20; i++) {
      list.add(SideItemProps(
        index: i,
        label: '\u9009\u9879',
        value: i,
      ));
      pages.add(getAnchorDemo(i));
    }

    pages.add(Container(
      height: MediaQuery.of(context).size.height - itemHeight,
      decoration: const BoxDecoration(color: Colors.white),
    ));

    list[1].badge = const TDBadge(TDBadgeType.redPoint);
    list[2].badge = const TDBadge(
      TDBadgeType.message,
      count: '8',
    );

    var demoHeight = MediaQuery.of(context).size.height;

    return Row(
      children: [
        SizedBox(
          width: 110,
          child: TDSideBar(
            height: demoHeight,
            style: TDSideBarStyle.outline,
            value: currentValue,
            controller: _sideBarController,
            children: list
                .map((ele) => TDSideBarItem(
                    label: ele.label ?? '',
                    badge: ele.badge,
                    value: ele.value,
                    icon: ele.icon))
                .toList(),
            onChanged: onChanged,
            onSelected: onSelected,
          ),
        ),
        Expanded(
            child: SizedBox(
          height: demoHeight,
          child: SingleChildScrollView(
            controller: _demoScroller,
            child: Column(
              children: pages,
            ),
          ),
        ))
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildCustomSideBar(BuildContext context) {
    // \u81EA\u5B9A\u4E49\u6837\u5F0F
    final list = <SideItemProps>[];
    final pages = <Widget>[];

    for (var i = 0; i < 100; i++) {
      list.add(SideItemProps(
        index: i,
        label: '\u9009\u9879',
        value: i,
      ));
      pages.add(getPageDemo(i));
    }

    list[1].badge = const TDBadge(TDBadgeType.redPoint);
    list[2].badge = const TDBadge(
      TDBadgeType.message,
      count: '8',
    );
    list[1].textStyle = const TextStyle(color: Colors.green);

    void setCurrentValue(int value) {
      _pageController.jumpToPage(value);
      if (currentValue != value) {
        currentValue = value;
      }
    }

    var demoHeight = MediaQuery.of(context).size.height;

    return Row(
      children: [
        SizedBox(
          width: 110,
          child: TDSideBar(
            height: demoHeight,
            style: TDSideBarStyle.normal,
            value: currentValue,
            controller: _sideBarController,
            children: list
                .map((ele) => TDSideBarItem(
                    label: ele.label ?? '',
                    badge: ele.badge,
                    value: ele.value,
                    textStyle: ele.textStyle,
                    icon: ele.icon))
                .toList(),
            selectedTextStyle:TextStyle(color: Colors.red),
            onSelected: setCurrentValue,
            contentPadding:EdgeInsets.only(left: 16, top: 16,bottom: 16),
          ),
        ),
        Expanded(
            child: SizedBox(
          height: demoHeight,
          child: PageView(
            controller: _pageController,
            scrollDirection: Axis.vertical,
            children: pages,
            physics: const NeverScrollableScrollPhysics(),
          ),
        ))
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildOutlineSideBar(BuildContext context) {
    // \u975E\u901A\u680F\u9009\u9879\u6837\u5F0F
    final list = <SideItemProps>[];
    final pages = <Widget>[];

    for (var i = 0; i < 20; i++) {
      list.add(SideItemProps(
        index: i,
        label: '\u9009\u9879',
        value: i,
      ));
      pages.add(getAnchorDemo(i));
    }

    pages.add(Container(
      height: MediaQuery.of(context).size.height - itemHeight,
      decoration: const BoxDecoration(color: Colors.white),
    ));

    list[1].badge = const TDBadge(TDBadgeType.redPoint);
    list[2].badge = const TDBadge(
      TDBadgeType.message,
      count: '8',
    );

    var demoHeight = MediaQuery.of(context).size.height;

    return Row(
      children: [
        SizedBox(
          width: 110,
          child: TDSideBar(
            height: demoHeight,
            style: TDSideBarStyle.outline,
            value: currentValue,
            controller: _sideBarController,
            children: list
                .map((ele) => TDSideBarItem(
                    label: ele.label ?? '',
                    badge: ele.badge,
                    value: ele.value,
                    icon: ele.icon))
                .toList(),
            onChanged: onChanged,
            onSelected: onSelected,
          ),
        ),
        Expanded(
            child: SizedBox(
          height: demoHeight,
          child: SingleChildScrollView(
            controller: _demoScroller,
            child: Column(
              children: pages,
            ),
          ),
        ))
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildCustomSideBar(BuildContext context) {
    // \u81EA\u5B9A\u4E49\u6837\u5F0F
    final list = <SideItemProps>[];
    final pages = <Widget>[];

    for (var i = 0; i < 100; i++) {
      list.add(SideItemProps(
        index: i,
        label: '\u9009\u9879',
        value: i,
      ));
      pages.add(getPageDemo(i));
    }

    list[1].badge = const TDBadge(TDBadgeType.redPoint);
    list[2].badge = const TDBadge(
      TDBadgeType.message,
      count: '8',
    );
    list[1].textStyle = const TextStyle(color: Colors.green);

    void setCurrentValue(int value) {
      _pageController.jumpToPage(value);
      if (currentValue != value) {
        currentValue = value;
      }
    }

    var demoHeight = MediaQuery.of(context).size.height;

    return Row(
      children: [
        SizedBox(
          width: 110,
          child: TDSideBar(
            height: demoHeight,
            style: TDSideBarStyle.normal,
            value: currentValue,
            controller: _sideBarController,
            children: list
                .map((ele) => TDSideBarItem(
                    label: ele.label ?? '',
                    badge: ele.badge,
                    value: ele.value,
                    textStyle: ele.textStyle,
                    icon: ele.icon))
                .toList(),
            selectedTextStyle:TextStyle(color: Colors.red),
            onSelected: setCurrentValue,
            contentPadding:EdgeInsets.only(left: 16, top: 16,bottom: 16),
          ),
        ),
        Expanded(
            child: SizedBox(
          height: demoHeight,
          child: PageView(
            controller: _pageController,
            scrollDirection: Axis.vertical,
            children: pages,
            physics: const NeverScrollableScrollPhysics(),
          ),
        ))
      ],
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdsidebaritem">TDSideBarItem</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdsidebar">TDSideBar</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdsidebaritem">TDSideBarItem <a class="header-anchor" href="#tdsidebaritem"></a></h3>
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
<td>badge</td>
<td>TDBadge?</td>
<td>-</td>
<td>\u5FBD\u6807</td>
</tr>
<tr>
<td>disabled</td>
<td>bool</td>
<td>false</td>
<td>\u662F\u5426\u7981\u7528</td>
</tr>
<tr>
<td>icon</td>
<td>IconData?</td>
<td>-</td>
<td>\u56FE\u6807</td>
</tr>
<tr>
<td>textStyle</td>
<td>TextStyle?</td>
<td>-</td>
<td>\u6807\u7B7E\u6837\u5F0F</td>
</tr>
<tr>
<td>label</td>
<td>String</td>
<td>''</td>
<td>\u6807\u7B7E</td>
</tr>
<tr>
<td>value</td>
<td>int</td>
<td>-1</td>
<td>\u503C</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tdsidebar">TDSideBar <a class="header-anchor" href="#tdsidebar"></a></h3>
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
<td>value</td>
<td>int?</td>
<td>-</td>
<td>\u9009\u9879\u503C</td>
</tr>
<tr>
<td>defaultValue</td>
<td>int?</td>
<td>-</td>
<td>\u9ED8\u8BA4\u503C</td>
</tr>
<tr>
<td>selectedColor</td>
<td>Color?</td>
<td>-</td>
<td>\u9009\u4E2D\u503C\u540E\u989C\u8272</td>
</tr>
<tr>
<td>children</td>
<td>List<TDSideBarItem></td>
<td>const []</td>
<td>\u5355\u9879</td>
</tr>
<tr>
<td>onChanged</td>
<td>ValueChanged<int>?</td>
<td>-</td>
<td>\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\uFF08Controller\u63A7\u5236\uFF09</td>
</tr>
<tr>
<td>onSelected</td>
<td>ValueChanged<int>?</td>
<td>-</td>
<td>\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\uFF08\u70B9\u51FB\u4E8B\u4EF6\uFF09</td>
</tr>
<tr>
<td>height</td>
<td>double?</td>
<td>-</td>
<td>\u9AD8\u5EA6</td>
</tr>
<tr>
<td>controller</td>
<td>TDSideBarController?</td>
<td>-</td>
<td>\u63A7\u5236\u5668</td>
</tr>
<tr>
<td>contentPadding</td>
<td>EdgeInsetsGeometry?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u6587\u672C\u6846\u5185\u8FB9\u8DDD</td>
</tr>
<tr>
<td>selectedTextStyle</td>
<td>TextStyle?</td>
<td>-</td>
<td>\u9009\u4E2D\u6837\u5F0F</td>
</tr>
<tr>
<td>style</td>
<td>TDSideBarStyle</td>
<td>TDSideBarStyle.normal</td>
<td>\u6837\u5F0F</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function r(s,c,g,h,p,u){const e=a("tdesign-doc");return l(),i(e)}var S=t(o,[["render",r]]);export{S as default};
