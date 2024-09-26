import{T as n}from"./component.6878da95.js";import{_ as e,d,r as a,o as r,c as o}from"./site.6fe70e23.js";const i=d({props:{docType:String},components:{TdesignDoc:n},provide:{info:{spline:"base",toc:!0,title:"NavBar \u5BFC\u822A\u680F",description:"\u7528\u4E8E\u4E0D\u540C\u9875\u9762\u4E4B\u95F4\u5207\u6362\u6216\u8005\u8DF3\u8F6C\uFF0C\u4F4D\u4E8E\u5185\u5BB9\u533A\u7684\u4E0A\u65B9\uFF0C\u7CFB\u7EDF\u72B6\u6001\u680F\u7684\u4E0B\u65B9\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686019,componentName:"navbar",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_navbar_page.dart" target="_blank" rel="noopener noreferrer">td_navbar_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u57FA\u7840H5\u5BFC\u822A\u680F</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _baseH5Navbar(BuildContext context) {
    return const TDNavBar(
        height: 48,
        titleFontWeight: FontWeight.w600,
        title: titleText,
        screenAdaptation: false,
        useDefaultBack: true,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _leftMultiAction(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 16),
      child: TDNavBar(
          height: 48,
          title: titleText,
          titleFontWeight: FontWeight.w600,
          screenAdaptation: false,
          useDefaultBack: true,
          leftBarItems: [
            TDNavBarItem(icon: TDIcons.close, iconSize: 24),
          ],
          rightBarItems: [
            TDNavBarItem(icon: TDIcons.ellipsis, iconSize: 24)
          ]
      ),
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _rightMultiAction(BuildContext context) {
    return Padding(
        padding: const EdgeInsets.only(top: 16),
        child: TDNavBar(
            height: 48,
            title: titleText,
            titleFontWeight: FontWeight.w600,
            screenAdaptation: false,
            useDefaultBack: true,
            rightBarItems: [
              TDNavBarItem(icon: TDIcons.home, iconSize: 24, ),
              TDNavBarItem(icon: TDIcons.ellipsis, iconSize: 24,)
            ]
        ),
    );
  }</pre>
</td-code-block>
<p>\u5E26\u641C\u7D22\u5BFC\u822A\u680F</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _searchNavbar(BuildContext context){
    return TDNavBar(
      useDefaultBack: false,
      screenAdaptation: false,
      centerTitle: false,
      titleMargin: 0,
      titleWidget:  TDSearchBar(
        needCancel: false,
        autoHeight: true,
        padding: const EdgeInsets.fromLTRB(0, 2, 0, 2),
        placeHolder: '\u641C\u7D22\u9884\u8BBE\u6587\u6848',
        mediumStyle: true,
        style: TDSearchStyle.round,
        onTextChanged: (String text) {
          print('input\uFF1A$text');
        },
      ),
      rightBarItems: [
        TDNavBarItem(icon: TDIcons.home,iconSize: 24),
        TDNavBarItem(icon: TDIcons.ellipsis,iconSize: 24)
      ]
    );
  }</pre>
</td-code-block>
<p>\u5E26\u56FE\u7247\u5BFC\u822A\u680F</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _logoNavbar(BuildContext context){
    return TDNavBar(
        useDefaultBack: false,
        screenAdaptation: false,
        centerTitle: false,
        titleMargin: 0,
        titleWidget:  const TDImage(
          assetUrl: 'assets/img/td_brand.png',
          width: 102,
          height: 24,
        ),
        rightBarItems: [
          TDNavBarItem(icon: TDIcons.home,iconSize: 24),
          TDNavBarItem(icon: TDIcons.ellipsis,iconSize: 24)
        ]
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u6837\u5F0F">1 \u7EC4\u4EF6\u6837\u5F0F <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u6837\u5F0F"></a></h3>
<p>\u6807\u9898\u5BF9\u9F50</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _titleCenterNavbar(BuildContext context) {
    return TDNavBar(
        height: 48,
        title: titleText,
        titleFontWeight: FontWeight.w600,
        screenAdaptation: false,
        useDefaultBack: true,
        rightBarItems: [
          TDNavBarItem(icon: TDIcons.home,iconSize: 24),
          TDNavBarItem(icon: TDIcons.ellipsis,iconSize: 24)
        ]
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _titleLeftNavbar(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 16),
      child: TDNavBar(
          height: 48,
          title: titleText,
          titleFontWeight: FontWeight.w600,
          centerTitle: false,
          titleMargin: 0,
          screenAdaptation: false,
          useDefaultBack: true,
          rightBarItems: [
            TDNavBarItem(icon: TDIcons.home,iconSize: 24),
            TDNavBarItem(icon: TDIcons.ellipsis,iconSize: 24)
          ]
      ),
    );
  }</pre>
</td-code-block>
<p>\u6807\u9898\u5C3A\u5BF8</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _titleNormalNavbar(BuildContext context) {
    return TDNavBar(
        height: 48,
        title: titleText,
        titleFontWeight: FontWeight.w600,
        screenAdaptation: false,
        useDefaultBack: true,
        rightBarItems: [
          TDNavBarItem(icon: TDIcons.home,iconSize: 24),
          TDNavBarItem(icon: TDIcons.ellipsis,iconSize: 24)
        ]
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _titleBelowNavbar(BuildContext context) {
    return Padding(
        padding: const EdgeInsets.only(top: 16),
        child: TDNavBar(
          height: 104,
          title: '\u8FD4\u56DE',
          titleColor: const Color.fromRGBO(0, 0, 0, 0.9),
          belowTitleWidget: SizedBox(
            height: 56,
            child: TDText(titleText, font: Font(size: 28, lineHeight: 52), fontWeight: FontWeight.w600,),
          ),
          titleFont: Font(size: 16, lineHeight: 24),
          centerTitle: false,
          titleMargin: 0,
          screenAdaptation: false,
          useDefaultBack: false,
          leftBarItems: [
            TDNavBarItem(icon: TDIcons.chevron_left,iconSize: 24),
          ],
          rightBarItems: [
            TDNavBarItem(icon: TDIcons.home,iconSize: 24),
            TDNavBarItem(icon: TDIcons.ellipsis,iconSize: 24)
          ]
      ),
    );
  }</pre>
</td-code-block>
<p>\u81EA\u5B9A\u4E49\u989C\u8272</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _setBgColorNavbar(BuildContext context) {
    return TDNavBar(
        height: 48,
        title: titleText,
        titleColor: Colors.white,
        backgroundColor: TDTheme.of(context).brandNormalColor,
        titleFontWeight: FontWeight.w600,
        useDefaultBack: false,
        screenAdaptation: false,
        leftBarItems: [
          TDNavBarItem(icon: TDIcons.chevron_left, iconSize: 24, iconColor: Colors.white),
        ],
        rightBarItems: [
          TDNavBarItem(icon: TDIcons.home, iconSize: 24, iconColor: Colors.white),
          TDNavBarItem(icon: TDIcons.ellipsis, iconSize: 24, iconColor: Colors.white)
        ]
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdnavbar">TDNavBar</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdnavbaritem">TDNavBarItem</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdnavbar">TDNavBar <a class="header-anchor" href="#tdnavbar"></a></h3>
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
<td>leftBarItems</td>
<td>List<TDNavBarItem>?</td>
<td>-</td>
<td>\u5DE6\u8FB9\u64CD\u4F5C\u9879</td>
</tr>
<tr>
<td>rightBarItems</td>
<td>List<TDNavBarItem>?</td>
<td>-</td>
<td>\u53F3\u8FB9\u64CD\u4F5C\u9879</td>
</tr>
<tr>
<td>titleWidget</td>
<td>Widget?</td>
<td>-</td>
<td>\u6807\u9898\u63A7\u4EF6\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8Etitle\u6587\u6848</td>
</tr>
<tr>
<td>title</td>
<td>String?</td>
<td>-</td>
<td>\u6807\u9898\u6587\u6848</td>
</tr>
<tr>
<td>titleColor</td>
<td>Color?</td>
<td>-</td>
<td>\u6807\u9898\u989C\u8272</td>
</tr>
<tr>
<td>titleFont</td>
<td>Font?</td>
<td>-</td>
<td>\u6807\u9898\u5B57\u4F53\u5C3A\u5BF8</td>
</tr>
<tr>
<td>titleFontFamily</td>
<td>FontFamily?</td>
<td>-</td>
<td>\u6807\u9898\u5B57\u4F53\u6837\u5F0F</td>
</tr>
<tr>
<td>titleFontWeight</td>
<td>FontWeight?</td>
<td>FontWeight.w500</td>
<td>\u6807\u9898\u5B57\u4F53\u7C97\u7EC6</td>
</tr>
<tr>
<td>centerTitle</td>
<td>bool</td>
<td>true</td>
<td>\u6807\u9898\u662F\u5426\u5C45\u4E2D</td>
</tr>
<tr>
<td>opacity</td>
<td>double</td>
<td>1.0</td>
<td>\u900F\u660E\u5EA6</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>Color?</td>
<td>-</td>
<td>\u80CC\u666F\u989C\u8272</td>
</tr>
<tr>
<td>titleMargin</td>
<td>double</td>
<td>16</td>
<td>\u4E2D\u95F4\u6587\u6848\u5DE6\u53F3\u4E24\u8FB9\u95F4\u8DDD</td>
</tr>
<tr>
<td>padding</td>
<td>EdgeInsetsGeometry?</td>
<td>-</td>
<td>\u5185\u90E8\u586B\u5145</td>
</tr>
<tr>
<td>height</td>
<td>double</td>
<td>44</td>
<td>\u9AD8\u5EA6</td>
</tr>
<tr>
<td>screenAdaptation</td>
<td>bool</td>
<td>true</td>
<td>\u662F\u5426\u8FDB\u884C\u5C4F\u5E55\u9002\u914D\uFF0C\u9ED8\u8BA4true</td>
</tr>
<tr>
<td>useDefaultBack</td>
<td>bool</td>
<td>true</td>
<td>\u662F\u5426\u4F7F\u7528\u9ED8\u8BA4\u7684\u8FD4\u56DE</td>
</tr>
<tr>
<td>onBack</td>
<td>VoidCallback?</td>
<td>-</td>
<td>\u8FD4\u56DE\u4E8B\u4EF6</td>
</tr>
<tr>
<td>useBorderStyle</td>
<td>bool</td>
<td>false</td>
<td>\u662F\u5426\u4F7F\u7528\u8FB9\u6846\u6A21\u5F0F</td>
</tr>
<tr>
<td>border</td>
<td>TDNavBarItemBorder?</td>
<td>-</td>
<td>\u8FB9\u6846</td>
</tr>
<tr>
<td>belowTitleWidget</td>
<td>Widget?</td>
<td>-</td>
<td>belowTitleWidget navbar \u4E0B\u65B9\u7684widget</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tdnavbaritem">TDNavBarItem <a class="header-anchor" href="#tdnavbaritem"></a></h3>
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
<td>icon</td>
<td>IconData?</td>
<td>-</td>
<td>\u56FE\u6807</td>
</tr>
<tr>
<td>iconColor</td>
<td>Color?</td>
<td>-</td>
<td>\u56FE\u6807\u989C\u8272</td>
</tr>
<tr>
<td>action</td>
<td>TDBarItemAction?</td>
<td>-</td>
<td>\u64CD\u4F5C\u56DE\u8C03</td>
</tr>
<tr>
<td>iconSize</td>
<td>double?</td>
<td>24.0</td>
<td>\u56FE\u6807\u5C3A\u5BF8</td>
</tr>
<tr>
<td>padding</td>
<td>EdgeInsetsGeometry?</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>iconWidget</td>
<td>Widget?</td>
<td>-</td>
<td>\u56FE\u6807\u7EC4\u4EF6\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E0Eicon</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function s(l,c,g,p,h,m){const t=a("tdesign-doc");return r(),o(t)}var T=e(i,[["render",s]]);export{T as default};
