import{T as n}from"./component.f9e366e0.js";import{_ as a,d as e,r as d,o as r,c as s}from"./site.66dd0425.js";const i=e({props:{docType:String},components:{TdesignDoc:n},provide:{info:{spline:"base",toc:!0,title:"Avatar \u5934\u50CF",description:"\u7528\u4E8E\u544A\u77E5\u7528\u6237\uFF0C\u8BE5\u533A\u57DF\u7684\u72B6\u6001\u53D8\u5316\u6216\u8005\u5F85\u5904\u7406\u4EFB\u52A1\u7684\u6570\u91CF\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686014,componentName:"avatar",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_avatar_page.dart" target="_blank" rel="noopener noreferrer">td_avatar_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u56FE\u7247\u5934\u50CF</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildImageAvatar(BuildContext context){
    return Padding(
      padding: const EdgeInsets.only(left: 16),
      child: Row(
        children: const [
          TDAvatar(
            size: TDAvatarSize.medium,
            type: TDAvatarType.normal,
            defaultUrl: 'assets/img/td_avatar_1.png',),
          SizedBox(width: 32,),
          TDAvatar(
            size: TDAvatarSize.medium,
            type: TDAvatarType.normal,
            shape: TDAvatarShape.square,
            defaultUrl: 'assets/img/td_avatar_1.png',),
        ],
      ),
    );
  }</pre>
</td-code-block>
<p>\u5B57\u7B26\u5934\u50CF</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildTextAvatar(BuildContext context){
    return Padding(
      padding: const EdgeInsets.only(left: 16),
      child: Row(
        children: const [
          TDAvatar(
              size: TDAvatarSize.medium,
              type: TDAvatarType.customText,
              text: 'A'),
          SizedBox(width: 32,),
          TDAvatar(
              size: TDAvatarSize.medium,
              type: TDAvatarType.customText,
              shape: TDAvatarShape.square,
              text: 'A'),
        ],
      ),
    );
  }</pre>
</td-code-block>
<p>\u56FE\u6807\u5934\u50CF</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildIconAvatar(BuildContext context){
    return Padding(
      padding: const EdgeInsets.only(left: 16),
      child: Row(
        children: const [
          TDAvatar(
            size: TDAvatarSize.medium,
            type: TDAvatarType.icon,),
          SizedBox(width: 32,),
          TDAvatar(
            size: TDAvatarSize.medium,
            type: TDAvatarType.icon,
            shape: TDAvatarShape.square,
          ),
        ],
      ),
    );
  }</pre>
</td-code-block>
<p>\u5E26\u5FBD\u6807\u5934\u50CF</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildBadgeAvatar(BuildContext context){
    return Padding(
      padding: const EdgeInsets.only(left: 16),
      child: Row(
        children: [
          SizedBox(
            height: 51,
            width: 51,
            child: Stack(
              alignment:Alignment.bottomLeft,
              children: const [
                TDAvatar(
                  size: TDAvatarSize.medium,
                  type: TDAvatarType.normal,
                  defaultUrl: 'assets/img/td_avatar_1.png',),
                Positioned(child: TDBadge(TDBadgeType.redPoint), right: 0, top: 0)
              ],
            ),
          ),
          const SizedBox(width: 32,),
          SizedBox(
            height: 51,
            width: 51,
            child: Stack(
              alignment:Alignment.bottomLeft,
              children: const [
                TDAvatar(
                    size: TDAvatarSize.medium,
                    type: TDAvatarType.customText,
                    text: 'A'),
                Positioned(child: TDBadge(TDBadgeType.message,count: '8',), right: 0, top: 0)
              ],
            ),
          ),
          const SizedBox(width: 32,),
          SizedBox(
            width: 51,
            height: 51,
            child: Stack(
              alignment:Alignment.bottomLeft,
              children: const [
                TDAvatar(
                  size: TDAvatarSize.medium,
                  type: TDAvatarType.icon,),
                Positioned(child: TDBadge(TDBadgeType.message,count: '12',), right: 0, top: 0,)
              ],
            ),
          ),
        ],
      ),
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7279\u6B8A\u7C7B\u578B">1 \u7279\u6B8A\u7C7B\u578B <a class="header-anchor" href="#_1-\u7279\u6B8A\u7C7B\u578B"></a></h3>
<p>\u7EAF\u5C55\u793A\u7684\u5934\u50CF\u7EC4</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildDisplayAvatar(BuildContext context){
    var assetUrl = 'assets/img/td_avatar_1.png';
    var assetUrl2 = 'assets/img/td_avatar_2.png';
    var avatarList = [assetUrl, assetUrl2, assetUrl, assetUrl2, assetUrl];
    return Container(
      alignment: Alignment.centerLeft,
      padding: const EdgeInsets.only(left: 16),
      child: TDAvatar(
        size: TDAvatarSize.medium,
        type: TDAvatarType.display,
        displayText: '+5',
        avatarDisplayListAsset: avatarList,),
    );
  }</pre>
</td-code-block>
<p>\u5E26\u64CD\u4F5C\u7684\u5934\u50CF\u7EC4</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildOperationAvatar(BuildContext context){
    var assetUrl = 'assets/img/td_avatar_1.png';
    var assetUrl2 = 'assets/img/td_avatar_2.png';
    var avatarList = [assetUrl, assetUrl2, assetUrl, assetUrl2, assetUrl];
    return Container(
      alignment: Alignment.centerLeft,
      padding: const EdgeInsets.only(left: 16),
      child: TDAvatar(
          size: TDAvatarSize.medium,
          type: TDAvatarType.operation,
          avatarDisplayListAsset: avatarList,
          onTap: () {
            TDToast.showText('\u70B9\u51FB\u4E86\u64CD\u4F5C', context: context);
          }),
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u5C3A\u5BF8">1 \u7EC4\u4EF6\u5C3A\u5BF8 <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u5C3A\u5BF8"></a></h3>
<p>\u5927\u5C3A\u5BF8 :64px</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildLargeAvatar(BuildContext context){
    return Padding(
      padding: const EdgeInsets.only(left: 16),
      child: Row(
        children: const [
          TDAvatar(
            size: TDAvatarSize.large,
            type: TDAvatarType.normal,
            defaultUrl: 'assets/img/td_avatar_1.png',),
          SizedBox(width: 32,),
          TDAvatar(
              size: TDAvatarSize.large,
              type: TDAvatarType.customText,
              text: 'A'),
          SizedBox(width: 32,),
          TDAvatar(
            size: TDAvatarSize.large,
            type: TDAvatarType.icon,),
        ],
      ),
    );
  }</pre>
</td-code-block>
<p>\u4E2D\u5C3A\u5BF8 :48px</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildMediumAvatar(BuildContext context){
    return Padding(
      padding: const EdgeInsets.only(left: 16),
      child: Row(
        children: const [
          TDAvatar(
            size: TDAvatarSize.medium,
            type: TDAvatarType.normal,
            defaultUrl: 'assets/img/td_avatar_1.png',),
          SizedBox(width: 48,),
          TDAvatar(
              size: TDAvatarSize.medium,
              type: TDAvatarType.customText,
              text: 'A'),
          SizedBox(width: 48,),
          TDAvatar(
            size: TDAvatarSize.medium,
            type: TDAvatarType.icon,),
        ],
      ),
    );
  }</pre>
</td-code-block>
<p>\u5C0F\u5C3A\u5BF8 :40px</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSmallAvatar(BuildContext context){
    return Padding(
      padding: const EdgeInsets.only(left: 16),
      child: Row(
        children: const [
          TDAvatar(
            size: TDAvatarSize.small,
            type: TDAvatarType.normal,
            defaultUrl: 'assets/img/td_avatar_1.png',),
          SizedBox(width: 56,),
          TDAvatar(
              size: TDAvatarSize.small,
              type: TDAvatarType.customText,
              text: 'A'),
          SizedBox(width: 56,),
          TDAvatar(
            size: TDAvatarSize.small,
            type: TDAvatarType.icon,),
        ],
      ),
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdavatar">TDAvatar</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdavatar">TDAvatar <a class="header-anchor" href="#tdavatar"></a></h3>
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
<td>size</td>
<td>TDAvatarSize</td>
<td>TDAvatarSize.medium</td>
<td>\u5934\u50CF\u5C3A\u5BF8</td>
</tr>
<tr>
<td>type</td>
<td>TDAvatarType</td>
<td>TDAvatarType.normal</td>
<td>\u5934\u50CF\u7C7B\u578B</td>
</tr>
<tr>
<td>shape</td>
<td>TDAvatarShape</td>
<td>TDAvatarShape.circle</td>
<td>\u5934\u50CF\u5F62\u72B6</td>
</tr>
<tr>
<td>text</td>
<td>String?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u6587\u5B57</td>
</tr>
<tr>
<td>radius</td>
<td>double?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u5706\u89D2</td>
</tr>
<tr>
<td>icon</td>
<td>IconData?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u56FE\u6807</td>
</tr>
<tr>
<td>avatarUrl</td>
<td>String?</td>
<td>-</td>
<td>\u5934\u50CF\u5730\u5740</td>
</tr>
<tr>
<td>avatarSize</td>
<td>double?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u5934\u50CF\u5927\u5C0F</td>
</tr>
<tr>
<td>avatarDisplayList</td>
<td>List<String>?</td>
<td>-</td>
<td>\u5E26\u64CD\u4F5C\\\u5C55\u793A\u7684\u5934\u50CF\u5217\u8868</td>
</tr>
<tr>
<td>displayText</td>
<td>String?</td>
<td>-</td>
<td>\u7EAF\u5C55\u793A\u7C7B\u578B\u672B\u5C3E\u6587\u5B57</td>
</tr>
<tr>
<td>onTap</td>
<td>Function()?</td>
<td>-</td>
<td>\u64CD\u4F5C\u70B9\u51FB\u4E8B\u4EF6</td>
</tr>
<tr>
<td>defaultUrl</td>
<td>String</td>
<td>''</td>
<td>\u9ED8\u8BA4\u56FE\u7247\uFF08\u672C\u5730\uFF09</td>
</tr>
<tr>
<td>avatarDisplayWidget</td>
<td>Widget?</td>
<td>-</td>
<td>\u5E26\u64CD\u4F5C\u5934\u50CF\u81EA\u5B9A\u4E49\u64CD\u4F5CWidget</td>
</tr>
<tr>
<td>avatarDisplayBorder</td>
<td>double</td>
<td>2</td>
<td>\u5E26\u64CD\u4F5C\\\u5C55\u793A\u7684\u5934\u50CF\u63CF\u8FB9\u5BBD\u5EA6</td>
</tr>
<tr>
<td>avatarDisplayListAsset</td>
<td>List<String>?</td>
<td>-</td>
<td>\u5E26\u64CD\u4F5C\\\u5C55\u793A\u7684\u5934\u50CF\u5217\u8868 (\u672C\u5730\u8D44\u6E90)</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>Color?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u6587\u6848\u65F6\u80CC\u666F\u8272</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function o(l,p,c,g,v,h){const t=d("tdesign-doc");return r(),s(t)}var D=a(i,[["render",o]]);export{D as default};
