import{T as n}from"./component.9b32f023.js";import{_ as e,d as a,r as d,o as r,c as s}from"./site.b6fa4b6e.js";const o=a({props:{docType:String},components:{TdesignDoc:n},provide:{info:{spline:"base",toc:!0,title:"PullDownRefresh \u4E0B\u62C9\u5237\u65B0",description:"\u7528\u4E8E\u5FEB\u901F\u5237\u65B0\u9875\u9762\u4FE1\u606F\uFF0C\u5237\u65B0\u53EF\u4EE5\u662F\u6574\u9875\u5237\u65B0\u4E5F\u53EF\u4EE5\u662F\u9875\u9762\u7684\u5C40\u90E8\u5237\u65B0\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686019,componentName:"pull-down-refresh",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span> 
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:flutter_easyrefresh/easy_refresh.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_refresh_page.dart" target="_blank" rel="noopener noreferrer">td_refresh_page.dart</a></p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildRefresh(BuildContext context) {
    return EasyRefresh(
      // \u4E0B\u62C9\u6837\u5F0F
      header: TDRefreshHeader(),
      child: Column(
        children: [
          Container(
            height: 171,
            alignment: Alignment.center,
            decoration: BoxDecoration(
                color: TDTheme.of(context).grayColor1,
                borderRadius: BorderRadius.all(
                    Radius.circular(TDTheme.of(context).radiusLarge))),
            margin: const EdgeInsets.only(left: 16, right: 16),
            child: TDText(
              PlatformUtil.isWeb ? 'Web\u6682\u4E0D\u652F\u6301\u4E0B\u62C9\uFF0C\u8BF7\u4E0B\u8F7D\u5B89\u88C5apk\u4F53\u9A8C' : '\u62D6\u62FD\u8BE5\u533A\u57DF\u6F14\u793A \u9876\u90E8\u4E0B\u62C9\u5237\u65B0',
              font: TDTheme.of(context).fontBodyLarge,
              textColor: TDTheme.of(context).fontGyColor4,
            ),
          ),
          Container(
            height: 70,
            alignment: Alignment.center,
            decoration: BoxDecoration(
                color: TDTheme.of(context).grayColor1,
                borderRadius: BorderRadius.all(
                    Radius.circular(TDTheme.of(context).radiusLarge))),
            margin: const EdgeInsets.only(top: 16, left: 16, right: 16),
            child: TDText(
              '\u4E0B\u62C9\u5237\u65B0\u6B21\u6570\uFF1A\${count}',
              font: TDTheme.of(context).fontBodyLarge,
              textColor: TDTheme.of(context).fontGyColor4,
            ),
          ),
        ],
      ),
      // \u4E0B\u62C9\u5237\u65B0\u56DE\u8C03
      onRefresh: () async {
        await Future.delayed(const Duration(seconds: 2), () {
          setState(() {
            count++;
          });
        });
      },
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdrefreshheader">TDRefreshHeader</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdrefreshheader">TDRefreshHeader <a class="header-anchor" href="#tdrefreshheader"></a></h3>
<h4 id="\u7B80\u4ECB">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB"></a></h4>
<p>TDesign\u5237\u65B0\u5934\u90E8
\u7ED3\u5408EasyRefresh\u7C7B\u5B9E\u73B0\u4E0B\u62C9\u5237\u65B0,\u7EE7\u627F\u81EAHeader\u7C7B\uFF0C\u5B57\u6BB5\u542B\u4E49\u4E0E\u7236\u7C7B\u4E00\u81F4</p>
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
<td>Key?</td>
<td>-</td>
<td>Key</td>
</tr>
<tr>
<td>extent</td>
<td></td>
<td>48.0</td>
<td></td>
</tr>
<tr>
<td>triggerDistance</td>
<td></td>
<td>48.0</td>
<td></td>
</tr>
<tr>
<td>float</td>
<td></td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>completeDuration</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>enableHapticFeedback</td>
<td></td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>enableInfiniteRefresh</td>
<td></td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>overScroll</td>
<td></td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>loadingIcon</td>
<td>TDLoadingIcon</td>
<td>TDLoadingIcon.circle</td>
<td>loading\u6837\u5F0F</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>Color?</td>
<td>-</td>
<td>\u80CC\u666F\u989C\u8272</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function i(c,l,p,h,g,f){const t=d("tdesign-doc");return r(),s(t)}var b=e(o,[["render",i]]);export{b as default};
