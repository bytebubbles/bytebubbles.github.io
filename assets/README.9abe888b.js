import{T as e}from"./component.9b32f023.js";import{_ as n,d,r as a,o as s,c as r}from"./site.b6fa4b6e.js";const o=d({props:{docType:String},components:{TdesignDoc:e},provide:{info:{spline:"base",toc:!0,title:"ImageViewer \u56FE\u7247\u9884\u89C8",description:"\u7528\u4E8E\u56FE\u7247\u5185\u5BB9\u7684\u7F29\u7565\u5C55\u793A\u4E0E\u67E5\u770B\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686018,componentName:"image-viewer",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_image_viewer_page.dart" target="_blank" rel="noopener noreferrer">td_image_viewer_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u57FA\u7840\u56FE\u7247\u9884\u89C8</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _basicImageViewer(BuildContext context) {
    return TDButton(
      type: TDButtonType.ghost,
      theme: TDButtonTheme.primary,
      isBlock: true,
      size: TDButtonSize.large,
      text: '\u57FA\u7840\u56FE\u7247\u9884\u89C8',
      onTap: () {
        TDImageViewer.showImageViewer(context: context, images: images);
      },
    );
  }</pre>
</td-code-block>
<p>\u5E26\u64CD\u4F5C\u56FE\u7247\u9884\u89C8</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _actionImageViewer(BuildContext context) {
    return TDButton(
      type: TDButtonType.ghost,
      theme: TDButtonTheme.primary,
      isBlock: true,
      size: TDButtonSize.large,
      text: '\u5E26\u64CD\u4F5C\u56FE\u7247\u9884\u89C8',
      onTap: () {
        TDImageViewer.showImageViewer(
          context: context,
          images: images,
          showIndex: true,
          deleteBtn: true,
        );
      },
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdimageviewerwidget">TDImageViewerWidget</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdimageviewer">TDImageViewer</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdimageviewerwidget">TDImageViewerWidget <a class="header-anchor" href="#tdimageviewerwidget"></a></h3>
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
<td>closeBtn</td>
<td>bool?</td>
<td>-</td>
<td>\u662F\u5426\u5C55\u793A\u5173\u95ED\u6309\u94AE</td>
</tr>
<tr>
<td>deleteBtn</td>
<td>bool?</td>
<td>-</td>
<td>\u662F\u5426\u663E\u793A\u5220\u9664\u64CD\u4F5C</td>
</tr>
<tr>
<td>images</td>
<td>List<dynamic></td>
<td>-</td>
<td>\u56FE\u7247\u6570\u7EC4</td>
</tr>
<tr>
<td>showIndex</td>
<td>bool?</td>
<td>-</td>
<td>\u662F\u5426\u663E\u793A\u9875\u7801</td>
</tr>
<tr>
<td>defaultIndex</td>
<td>int?</td>
<td>-</td>
<td>\u9ED8\u8BA4\u9884\u89C8\u56FE\u7247\u6240\u5728\u7684\u4E0B\u6807</td>
</tr>
<tr>
<td>onIndexChange</td>
<td>OnIndexChange?</td>
<td>-</td>
<td>\u9884\u89C8\u56FE\u7247\u5207\u6362\u56DE\u8C03</td>
</tr>
<tr>
<td>width</td>
<td>double?</td>
<td>-</td>
<td>\u56FE\u7247\u5BBD\u5EA6</td>
</tr>
<tr>
<td>height</td>
<td>double?</td>
<td>-</td>
<td>\u56FE\u7247\u9AD8\u5EA6</td>
</tr>
<tr>
<td>onClose</td>
<td>OnClose?</td>
<td>-</td>
<td>\u5173\u95ED\u70B9\u51FB</td>
</tr>
<tr>
<td>onDelete</td>
<td>OnDelete?</td>
<td>-</td>
<td>\u5220\u9664\u70B9\u51FB</td>
</tr>
<tr>
<td>onLongPress</td>
<td>OnLongPress?</td>
<td>-</td>
<td>\u957F\u6309\u56FE\u7247</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tdimageviewer">TDImageViewer <a class="header-anchor" href="#tdimageviewer"></a></h3>
<h4 id="\u9759\u6001\u65B9\u6CD5">\u9759\u6001\u65B9\u6CD5 <a class="header-anchor" href="#\u9759\u6001\u65B9\u6CD5"></a></h4>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8FD4\u56DE\u7C7B\u578B</th>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>showImageViewer</td>
<td></td>
<td>required BuildContext context,  required List<dynamic> images,  bool? closeBtn,  bool? deleteBtn,  bool? showIndex,  int? defaultIndex,  double? width,  double? height,  OnIndexChange? onIndexChange,  OnClose? onClose,  OnDelete? onDelete,  OnLongPress? onLongPress,</td>
<td>\u663E\u793A\u56FE\u7247\u9884\u89C8</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function i(l,c,g,h,p,m){const t=a("tdesign-doc");return s(),r(t)}var _=n(o,[["render",i]]);export{_ as default};
