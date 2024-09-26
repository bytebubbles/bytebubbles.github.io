import{T as e}from"./component.6878da95.js";import{_ as t,d as a,r as s,o,c as r}from"./site.6fe70e23.js";const c=a({props:{docType:String},components:{TdesignDoc:e},provide:{info:{spline:"base",toc:!0,title:"Icon \u56FE\u6807",description:null,isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686018,componentName:"icon",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_icon_page.dart" target="_blank" rel="noopener noreferrer">td_icon_page.dart</a></p>
<h3 id="_1-icon\u793A\u4F8B">1 icon\u793A\u4F8B <a class="header-anchor" href="#_1-icon\u793A\u4F8B"></a></h3>
<p>icon\u6570\u91CF: 244</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _showAllIcons(BuildContext context) {
    return Container(
      color: Colors.white,
      alignment: Alignment.center,
      child: Wrap(
        children: [
          Container(
            child: TDButton(text: showBorder? '\u9690\u85CF\u8FB9\u6846':'\u663E\u793A\u8FB9\u6846',
              shape: TDButtonShape.filled,
              onTap: (){
                setState(() {
                  showBorder = !showBorder;
                });
              },),
            margin: const EdgeInsets.only(bottom: 16),
          ),
          for (var iconData in TDIcons.all.values) SizedBox(
            height: 100,
            width: 175,

            child: Column(
              children: [
                Container(
                  color: showBorder ? TDTheme.of(context).brandDisabledColor : Colors.transparent,
                  child: Icon(iconData),
                ),
                TDText(iconData.name)
              ],
            ),
          )
        ],
      ),
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdicons">TDIcons</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdicons">TDIcons <a class="header-anchor" href="#tdicons"></a></h3>
<h4 id="\u5DE5\u5382\u6784\u9020\u65B9\u6CD5">\u5DE5\u5382\u6784\u9020\u65B9\u6CD5 <a class="header-anchor" href="#\u5DE5\u5382\u6784\u9020\u65B9\u6CD5"></a></h4>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>TDIcons._</td>
<td>\u79C1\u6709\u6784\u9020\u65B9\u6CD5\uFF0C\u4E0D\u652F\u6301\u5916\u90E8\u521B\u5EFA\uFF0C\u4EC5\u63D0\u4F9B\u9759\u6001\u5E38\u91CF\u7ED9\u5916\u90E8\u4F7F\u7528</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function i(d,l,p,g,h,m){const n=s("tdesign-doc");return o(),r(n)}var u=t(c,[["render",i]]);export{u as default};
