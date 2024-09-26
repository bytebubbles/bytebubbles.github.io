import{T as t}from"./component.9b32f023.js";import{_ as e,d,r as o,o as i,c as a}from"./site.b6fa4b6e.js";const c=d({props:{docType:String},components:{TdesignDoc:t},provide:{info:{spline:"base",toc:!0,title:"Badge \u5FBD\u6807",description:"\u7528\u4E8E\u544A\u77E5\u7528\u6237\uFF0C\u8BE5\u533A\u57DF\u7684\u72B6\u6001\u53D8\u5316\u6216\u8005\u5F85\u5904\u7406\u4EFB\u52A1\u7684\u6570\u91CF\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686014,componentName:"badge",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_badge_page.dart" target="_blank" rel="noopener noreferrer">td_badge_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u7EA2\u70B9\u5FBD\u6807</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildRedPointBadge(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(left: 16),
      child: Row(
        children: [
          SizedBox(
            width: 40,
            height: 24,
            child: Stack(
              alignment: Alignment.bottomLeft,
              children: [
                TDText(
                  '\u6D88\u606F',
                  font: TDTheme.of(context).fontBodyLarge,
                ),
                const Positioned(
                  child: TDBadge(TDBadgeType.redPoint),
                  right: 0,
                  top: 0,
                )
              ],
            ),
          ),
          const SizedBox(
            width: 40,
          ),
          SizedBox(
            width: 27,
            height: 27,
            child: Stack(
              alignment: Alignment.bottomLeft,
              children: const [
                Icon(TDIcons.notification),
                Positioned(
                  child: TDBadge(TDBadgeType.redPoint),
                  right: 0,
                  top: 0,
                )
              ],
            ),
          ),
          const SizedBox(
            width: 40,
          ),
          SizedBox(
            width: 83,
            height: 51,
            child: Stack(
              alignment: Alignment.bottomLeft,
              children: const [
                TDButton(
                  width: 80,
                  height: 48,
                  text: '\u6309\u94AE',
                  size: TDButtonSize.large,
                  type: TDButtonType.fill,
                ),
                Positioned(
                  child: TDBadge(TDBadgeType.redPoint),
                  right: 0,
                  top: 0,
                )
              ],
            ),
          ),
        ],
      ),
    );
  }</pre>
</td-code-block>
<p>\u6570\u5B57\u5FBD\u6807</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildNumberBadge(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(left: 16),
      child: Row(
        children: [
          SizedBox(
            width: 48,
            height: 32,
            child: Stack(
              alignment: Alignment.bottomLeft,
              children: [
                TDText(
                  '\u6D88\u606F',
                  font: TDTheme.of(context).fontBodyLarge,
                ),
                const Positioned(
                  child: TDBadge(
                    TDBadgeType.message,
                    count: '8',
                  ),
                  right: 0,
                  top: 0,
                )
              ],
            ),
          ),
          const SizedBox(
            width: 40,
          ),
          SizedBox(
            width: 34,
            height: 34,
            child: Stack(
              alignment: Alignment.bottomLeft,
              children: const [
                Icon(TDIcons.notification),
                Positioned(
                  child: TDBadge(
                    TDBadgeType.message,
                    count: '8',
                  ),
                  right: 0,
                  top: 0,
                )
              ],
            ),
          ),
          const SizedBox(
            width: 40,
          ),
          SizedBox(
            width: 86,
            height: 54,
            child: Stack(
              alignment: Alignment.bottomLeft,
              children: const [
                TDButton(
                  width: 80,
                  height: 48,
                  text: '\u6309\u94AE',
                  size: TDButtonSize.large,
                ),
                Positioned(
                  child: TDBadge(
                    TDBadgeType.message,
                    count: '8',
                  ),
                  right: 0,
                  top: 0,
                )
              ],
            ),
          ),
        ],
      ),
    );
  }</pre>
</td-code-block>
<p>\u81EA\u5B9A\u4E49\u5FBD\u6807</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildCustomBadge(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(left: 16),
      child: Row(
        children: [
          SizedBox(
            width: 64,
            height: 56,
            child: Stack(
              alignment: Alignment.bottomLeft,
              children: [
                Container(
                  child: const Icon(TDIcons.notification),
                  decoration: BoxDecoration(
                      color: TDTheme.of(context).grayColor2,
                      borderRadius: BorderRadius.circular(
                          TDTheme.of(context).radiusDefault)),
                  height: 48,
                  width: 48,
                ),
                const Positioned(
                  child: TDBadge(
                    TDBadgeType.message,
                    count: '8',
                  ),
                  right: 0,
                  top: 0,
                )
              ],
            ),
          ),
          const SizedBox(width: 40),
          SizedBox(
            width: 64,
            height: 56,
            child: Stack(
              alignment: Alignment.bottomLeft,
              children: [
                Container(
                  child: const Icon(TDIcons.notification),
                  decoration: BoxDecoration(
                      color: TDTheme.of(context).grayColor2,
                      borderRadius: BorderRadius.circular(
                          TDTheme.of(context).radiusDefault)),
                  height: 48,
                  width: 48,
                ),
                const Positioned(
                  child: TDBadge(
                    TDBadgeType.message,
                    count: '0',
                  ),
                  right: 0,
                  top: 0,
                )
              ],
            ),
          ),
          const SizedBox(width: 40),
          SizedBox(
            width: 64,
            height: 56,
            child: Stack(
              alignment: Alignment.bottomLeft,
              children: [
                Container(
                  child: const Icon(TDIcons.notification),
                  decoration: BoxDecoration(
                      color: TDTheme.of(context).grayColor2,
                      borderRadius: BorderRadius.circular(
                          TDTheme.of(context).radiusDefault)),
                  height: 48,
                  width: 48,
                ),
                const Positioned(
                  child: TDBadge(
                    TDBadgeType.message,
                    count: '0',
                    showZero: false,
                  ),
                  right: 0,
                  top: 0,
                )
              ],
            ),
          ),
        ],
      ),
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u6837\u5F0F">1 \u7EC4\u4EF6\u6837\u5F0F <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u6837\u5F0F"></a></h3>
<p>\u5706\u5F62\u5FBD\u6807</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildCircleBadge(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(left: 16),
      child: Row(
        children: [
          SizedBox(
            width: 34,
            height: 34,
            child: Stack(
              alignment: Alignment.bottomLeft,
              children: const [
                Icon(TDIcons.notification),
                Positioned(
                  child: TDBadge(
                    TDBadgeType.message,
                    count: '8',
                  ),
                  right: 0,
                  top: 0,
                )
              ],
            ),
          ),
        ],
      ),
    );
  }</pre>
</td-code-block>
<p>\u65B9\u5F62\u5FBD\u6807</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSquareBadge(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(left: 16),
      child: Row(
        children: [
          SizedBox(
            width: 34,
            height: 34,
            child: Stack(
              alignment: Alignment.bottomLeft,
              children: const [
                Icon(TDIcons.notification),
                Positioned(
                  child: TDBadge(
                    TDBadgeType.square,
                    border: TDBadgeBorder.small,
                    count: '8',
                  ),
                  right: 0,
                  top: 0,
                )
              ],
            ),
          ),
        ],
      ),
    );
  }</pre>
</td-code-block>
<p>\u6C14\u6CE1\u5FBD\u6807</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildBubbleBadge(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(left: 16),
      child: Row(
        children: [
          SizedBox(
            width: 67,
            height: 56,
            child: Stack(
              alignment: Alignment.bottomLeft,
              children: [
                Container(
                  child: const Icon(TDIcons.shop),
                  decoration: BoxDecoration(
                      color: TDTheme.of(context).grayColor2,
                      borderRadius: BorderRadius.circular(
                          TDTheme.of(context).radiusDefault)),
                  height: 48,
                  width: 48,
                ),
                const Positioned(
                  child: TDBadge(
                    TDBadgeType.bubble,
                    count: '\u9886\u79EF\u5206',
                  ),
                  right: 0,
                  top: 0,
                )
              ],
            ),
          ),
        ],
      ),
    );
  }</pre>
</td-code-block>
<p>\u89D2\u6807</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSubscriptBadge(BuildContext context) {
    return Stack(
      alignment: Alignment.topRight,
      children: [
        Container(
          padding: const EdgeInsets.only(left: 16),
          alignment: Alignment.centerLeft,
          child: TDText(
            '\u5355\u884C\u6807\u9898',
            textColor: TDTheme.of(context).fontGyColor1,
            font: TDTheme.of(context).fontBodyLarge,
          ),
          color: Colors.white,
          height: 48,
          width: MediaQuery.of(context).size.width,
        ),
        const TDBadge(
          TDBadgeType.subscript,
          message: 'NEW',
        ),
      ],
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u5C3A\u5BF8">1 \u7EC4\u4EF6\u5C3A\u5BF8 <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u5C3A\u5BF8"></a></h3>
<p>Large</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildLargeBadge(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(left: 16),
      child: Row(
        children: [
          SizedBox(
            width: 68,
            height: 65.5,
            child: Stack(
              alignment: Alignment.bottomLeft,
              children: const [
                TDAvatar(
                  size: TDAvatarSize.large,
                  type: TDAvatarType.icon,
                ),
                Positioned(
                  child: TDBadge(
                    TDBadgeType.message,
                    size: TDBadgeSize.large,
                    count: '8',
                  ),
                  right: 0,
                  top: 0,
                )
              ],
            ),
          ),
        ],
      ),
    );
  }</pre>
</td-code-block>
<p>Medium</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildMediumBadge(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(left: 16),
      child: Row(
        children: [
          SizedBox(
            width: 51,
            height: 49.5,
            child: Stack(
              alignment: Alignment.bottomLeft,
              children: const [
                TDAvatar(
                  size: TDAvatarSize.medium,
                  type: TDAvatarType.icon,
                ),
                Positioned(
                  child: TDBadge(
                    TDBadgeType.message,
                    count: '8',
                  ),
                  right: 0,
                  top: 0,
                )
              ],
            ),
          ),
        ],
      ),
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdbadge">TDBadge</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdbadge">TDBadge <a class="header-anchor" href="#tdbadge"></a></h3>
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
<td>type</td>
<td>TDBadgeType</td>
<td>type</td>
<td>\u7EA2\u70B9\u6837\u5F0F</td>
</tr>
<tr>
<td>key</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>count</td>
<td>String?</td>
<td>-</td>
<td>\u7EA2\u70B9\u6570\u91CF</td>
</tr>
<tr>
<td>border</td>
<td>TDBadgeBorder</td>
<td>TDBadgeBorder.large</td>
<td>\u7EA2\u70B9\u5706\u89D2\u5927\u5C0F</td>
</tr>
<tr>
<td>size</td>
<td>TDBadgeSize</td>
<td>TDBadgeSize.small</td>
<td>\u7EA2\u70B9\u5C3A\u5BF8</td>
</tr>
<tr>
<td>color</td>
<td>Color?</td>
<td>-</td>
<td>\u7EA2\u70B9\u989C\u8272</td>
</tr>
<tr>
<td>textColor</td>
<td>Color?</td>
<td>-</td>
<td>\u6587\u5B57\u989C\u8272</td>
</tr>
<tr>
<td>message</td>
<td>String?</td>
<td>-</td>
<td>\u6D88\u606F\u5185\u5BB9</td>
</tr>
<tr>
<td>widthLarge</td>
<td>double</td>
<td>32</td>
<td>\u89D2\u6807\u5927\u4E09\u89D2\u5F62\u5BBD</td>
</tr>
<tr>
<td>widthSmall</td>
<td>double</td>
<td>12</td>
<td>\u89D2\u6807\u5C0F\u4E09\u89D2\u5F62\u5BBD</td>
</tr>
<tr>
<td>padding</td>
<td>EdgeInsetsGeometry?</td>
<td>-</td>
<td>\u89D2\u6807\u81EA\u5B9A\u4E49padding</td>
</tr>
<tr>
<td>showZero</td>
<td>bool</td>
<td>true</td>
<td>\u503C\u4E3A0\u662F\u5426\u663E\u793A</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function r(l,s,g,h,p,m){const n=o("tdesign-doc");return i(),a(n)}var u=e(c,[["render",r]]);export{u as default};
