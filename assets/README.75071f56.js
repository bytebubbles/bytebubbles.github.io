import{T as n}from"./component.f9e366e0.js";import{_ as e,d,r as a,o as r,c as l}from"./site.66dd0425.js";const o=d({props:{docType:String},components:{TdesignDoc:n},provide:{info:{spline:"base",toc:!0,title:"Tag \u6807\u7B7E",description:"\u7528\u4E8E\u8868\u660E\u4E3B\u4F53\u7684\u7C7B\u76EE\uFF0C\u5C5E\u6027\u6216\u72B6\u6001",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686021,componentName:"tag",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_tag_page.dart" target="_blank" rel="noopener noreferrer">td_tag_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u57FA\u7840\u6807\u7B7E</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDTag _buildSimpleFillTag(BuildContext context) {
    return const TDTag('\u6807\u7B7E\u6587\u5B57');
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  TDTag _buildSimpleOutlineTag(BuildContext context) {
    return const TDTag(
      '\u6807\u7B7E\u6587\u5B57',
      isOutline: true,
    );
  }</pre>
</td-code-block>
<p>\u5706\u5F27\u6807\u7B7E</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildCircleFillTag(BuildContext context) {
    return const TDTag(
      '\u6807\u7B7E\u6587\u5B57',
      shape: TDTagShape.round,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildCircleOutlineTag(BuildContext context) {
    return const TDTag(
      '\u6807\u7B7E\u6587\u5B57',
      shape: TDTagShape.round,
      isOutline: true,
    );
  }</pre>
</td-code-block>
<p>Mark\u6807\u7B7E</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildMarkFillTag(BuildContext context) {
    return const TDTag(
      '\u6807\u7B7E\u6587\u5B57',
      shape: TDTagShape.mark,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildMarkOutlineTag(BuildContext context) {
    return const TDTag(
      '\u6807\u7B7E\u6587\u5B57',
      shape: TDTagShape.mark,
      isOutline: true,
    );
  }</pre>
</td-code-block>
<p>\u5E26\u56FE\u6807\u7684\u6807\u7B7E</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildIconFillTag(BuildContext context) {
    return const TDTag(
      '\u6807\u7B7E\u6587\u5B57',
      icon: TDIcons.discount,
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildIconOutlineTag(BuildContext context) {
    return const TDTag(
      '\u6807\u7B7E\u6587\u5B57',
      icon: TDIcons.discount,
      isOutline: true,
    );
  }</pre>
</td-code-block>
<p>\u53EF\u5173\u95ED\u7684\u6807\u7B7E</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildCloseFillTag(BuildContext context) {
    return TDTag(
      '\u6807\u7B7E\u6587\u5B57',
      needCloseIcon: true,
      onCloseTap: () {
        TDToast.showText('\u70B9\u51FB\u5173\u95ED', context: context);
      },
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildCloseOutlineTag(BuildContext context) {
    return TDTag('\u6807\u7B7E\u6587\u5B57', needCloseIcon: true, isOutline: true, onCloseTap: () {
      TDToast.showText('\u70B9\u51FB\u5173\u95ED', context: context);
    });
  }</pre>
</td-code-block>
<p>\u53EF\u9009\u4E2D\u7684\u6807\u7B7E</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildDarkSelectTags(BuildContext context) {
    return Wrap(spacing: 8, children: const [
      TDSelectTag(
        '\u672A\u9009\u4E2D\u6001',
        theme: TDTagTheme.primary,
      ),
      TDSelectTag(
        '\u5DF2\u9009\u4E2D\u6001',
        theme: TDTagTheme.primary,
        isSelected: true,
      ),
      TDSelectTag(
        '\u4E0D\u53EF\u9009\u6001',
        theme: TDTagTheme.primary,
        disableSelect: true,
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildLightSelectTags(BuildContext context) {
    return Wrap(spacing: 8, children: const [
      TDSelectTag(
        '\u672A\u9009\u4E2D\u6001',
        theme: TDTagTheme.primary,
        isLight: true,
      ),
      TDSelectTag(
        '\u5DF2\u9009\u4E2D\u6001',
        theme: TDTagTheme.primary,
        isLight: true,
        isSelected: true,
      ),
      TDSelectTag(
        '\u4E0D\u53EF\u9009\u6001',
        theme: TDTagTheme.primary,
        isLight: true,
        disableSelect: true,
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildOutlineSelectTags(BuildContext context) {
    return Wrap(spacing: 8, children: const [
      TDSelectTag(
        '\u672A\u9009\u4E2D\u6001',
        theme: TDTagTheme.primary,
        isOutline: true,
      ),
      TDSelectTag(
        '\u5DF2\u9009\u4E2D\u6001',
        theme: TDTagTheme.primary,
        isOutline: true,
        isSelected: true,
      ),
      TDSelectTag(
        '\u4E0D\u53EF\u9009\u6001',
        theme: TDTagTheme.primary,
        isOutline: true,
        disableSelect: true,
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildLightOutlineSelectTags(BuildContext context) {
    return Wrap(spacing: 8, children: const [
      TDSelectTag(
        '\u672A\u9009\u4E2D\u6001',
        theme: TDTagTheme.primary,
        isOutline: true,
        isLight: true,
      ),
      TDSelectTag(
        '\u5DF2\u9009\u4E2D\u6001',
        theme: TDTagTheme.primary,
        isOutline: true,
        isLight: true,
        isSelected: true,
      ),
      TDSelectTag(
        '\u4E0D\u53EF\u9009\u6001',
        theme: TDTagTheme.primary,
        isOutline: true,
        isLight: true,
        disableSelect: true,
      ),
    ]);
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u72B6\u6001\uFF08\u4E3B\u9898\uFF09">1 \u7EC4\u4EF6\u72B6\u6001\uFF08\u4E3B\u9898\uFF09 <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u72B6\u6001\uFF08\u4E3B\u9898\uFF09"></a></h3>
<p>\u5C55\u793A\u578B\u6807\u7B7E</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildLightShowTags(BuildContext context) {
    return Wrap(
      spacing: 8,
      children: const [
        TDTag('\u9ED8\u8BA4', isLight: true),
        TDTag(
          '\u4E3B\u8981',
          isLight: true,
          theme: TDTagTheme.primary,
        ),
        TDTag(
          '\u8B66\u544A',
          isLight: true,
          theme: TDTagTheme.warning,
        ),
        TDTag(
          '\u5371\u9669',
          isLight: true,
          theme: TDTagTheme.danger,
        ),
        TDTag(
          '\u6210\u529F',
          isLight: true,
          theme: TDTagTheme.success,
        ),
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildDarkShowTags(BuildContext context) {
    return Wrap(
      spacing: 8,
      children: const [
        TDTag('\u9ED8\u8BA4'),
        TDTag(
          '\u4E3B\u8981',
          theme: TDTagTheme.primary,
        ),
        TDTag(
          '\u8B66\u544A',
          theme: TDTagTheme.warning,
        ),
        TDTag(
          '\u5371\u9669',
          theme: TDTagTheme.danger,
        ),
        TDTag(
          '\u6210\u529F',
          theme: TDTagTheme.success,
        ),
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildOutlineShowTags(BuildContext context) {
    return Wrap(
      spacing: 8,
      children: const [
        TDTag('\u9ED8\u8BA4', isOutline: true),
        TDTag(
          '\u4E3B\u8981',
          isOutline: true,
          theme: TDTagTheme.primary,
        ),
        TDTag(
          '\u8B66\u544A',
          isOutline: true,
          theme: TDTagTheme.warning,
        ),
        TDTag(
          '\u5371\u9669',
          isOutline: true,
          theme: TDTagTheme.danger,
        ),
        TDTag(
          '\u6210\u529F',
          isOutline: true,
          theme: TDTagTheme.success,
        ),
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildLightOutlineShowTags(BuildContext context) {
    return Wrap(
      spacing: 8,
      children: const [
        TDTag('\u9ED8\u8BA4', isOutline: true, isLight: true),
        TDTag(
          '\u4E3B\u8981',
          isOutline: true,
          isLight: true,
          theme: TDTagTheme.primary,
        ),
        TDTag(
          '\u8B66\u544A',
          isOutline: true,
          isLight: true,
          theme: TDTagTheme.warning,
        ),
        TDTag(
          '\u5371\u9669',
          isOutline: true,
          isLight: true,
          theme: TDTagTheme.danger,
        ),
        TDTag(
          '\u6210\u529F',
          isOutline: true,
          isLight: true,
          theme: TDTagTheme.success,
        ),
      ],
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u5C3A\u5BF8">1 \u7EC4\u4EF6\u5C3A\u5BF8 <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u5C3A\u5BF8"></a></h3>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildAllSizeTags(BuildContext context) {
    return Wrap(spacing: 8, children: const [
      TDTag(
        '\u52A0\u5927\u5C3A\u5BF8',
        size: TDTagSize.extraLarge,
      ),
      TDTag(
        '\u5927\u5C3A\u5BF8',
        size: TDTagSize.large,
      ),
      TDTag(
        '\u4E2D\u5C3A\u5BF8',
        size: TDTagSize.medium,
      ),
      TDTag(
        '\u5C0F\u5C3A\u5BF8',
        size: TDTagSize.small,
      ),
    ]);
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildAllSizeCloseTags(BuildContext context) {
    return Wrap(spacing: 8, children: const [
      TDTag(
        '\u52A0\u5927\u5C3A\u5BF8',
        needCloseIcon: true,
        size: TDTagSize.extraLarge,
      ),
      TDTag(
        '\u5927\u5C3A\u5BF8',
        needCloseIcon: true,
        size: TDTagSize.large,
      ),
      TDTag(
        '\u4E2D\u5C3A\u5BF8',
        needCloseIcon: true,
        size: TDTagSize.medium,
      ),
      TDTag(
        '\u5C0F\u5C3A\u5BF8',
        needCloseIcon: true,
        size: TDTagSize.small,
      ),
    ]);
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdselecttag">TDSelectTag</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdtagstyle">TDTagStyle</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdtag">TDTag</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdselecttag">TDSelectTag <a class="header-anchor" href="#tdselecttag"></a></h3>
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
<td>text</td>
<td>String</td>
<td>text</td>
<td>\u6807\u7B7E\u5185\u5BB9</td>
</tr>
<tr>
<td>theme</td>
<td>TDTagTheme?</td>
<td>-</td>
<td>\u4E3B\u9898</td>
</tr>
<tr>
<td>icon</td>
<td>IconData?</td>
<td>-</td>
<td>\u56FE\u6807\u5185\u5BB9\uFF0C\u53EF\u968F\u72B6\u6001\u6539\u53D8\u989C\u8272</td>
</tr>
<tr>
<td>iconWidget</td>
<td>Widget?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u56FE\u6807\u5185\u5BB9\uFF0C\u9700\u81EA\u5904\u7406\u989C\u8272</td>
</tr>
<tr>
<td>selectStyle</td>
<td>TDTagStyle?</td>
<td>-</td>
<td>\u9009\u4E2D\u7684\u6807\u7B7E\u6837\u5F0F</td>
</tr>
<tr>
<td>unSelectStyle</td>
<td>TDTagStyle?</td>
<td>-</td>
<td>\u672A\u9009\u4E2D\u6807\u7B7E\u6837\u5F0F</td>
</tr>
<tr>
<td>disableSelectStyle</td>
<td>TDTagStyle?</td>
<td>-</td>
<td>\u4E0D\u53EF\u9009\u6807\u7B7E\u6837\u5F0F</td>
</tr>
<tr>
<td>onSelectChanged</td>
<td>ValueChanged<bool>?</td>
<td>-</td>
<td>\u6807\u7B7E\u70B9\u51FB\uFF0C\u9009\u4E2D\u72B6\u6001\u6539\u53D8\u65F6\u7684\u56DE\u8C03</td>
</tr>
<tr>
<td>isSelected</td>
<td>bool</td>
<td>false</td>
<td>\u662F\u5426\u9009\u4E2D</td>
</tr>
<tr>
<td>disableSelect</td>
<td>bool</td>
<td>false</td>
<td>\u662F\u5426\u7981\u7528\u9009\u62E9</td>
</tr>
<tr>
<td>size</td>
<td>TDTagSize</td>
<td>TDTagSize.medium</td>
<td>\u6807\u7B7E\u5927\u5C0F</td>
</tr>
<tr>
<td>padding</td>
<td>EdgeInsets?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u6A21\u5F0F\u4E0B\u7684\u95F4\u8DDD</td>
</tr>
<tr>
<td>forceVerticalCenter</td>
<td>bool</td>
<td>true</td>
<td>\u662F\u5426\u5F3A\u5236\u4E2D\u6587\u6587\u5B57\u5C45\u4E2D</td>
</tr>
<tr>
<td>isOutline</td>
<td>bool</td>
<td>false</td>
<td>\u662F\u5426\u4E3A\u63CF\u8FB9\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u4E0D\u662F</td>
</tr>
<tr>
<td>shape</td>
<td>TDTagShape</td>
<td>TDTagShape.square</td>
<td>\u6807\u7B7E\u5F62\u72B6</td>
</tr>
<tr>
<td>isLight</td>
<td>bool</td>
<td>false</td>
<td>\u662F\u5426\u4E3A\u6D45\u8272</td>
</tr>
<tr>
<td>needCloseIcon</td>
<td>bool</td>
<td>false</td>
<td>\u5173\u95ED\u56FE\u6807</td>
</tr>
<tr>
<td>onCloseTap</td>
<td>GestureTapCallback?</td>
<td>-</td>
<td>\u5173\u95ED\u56FE\u6807\u70B9\u51FB\u4E8B\u4EF6</td>
</tr>
<tr>
<td>key</td>
<td></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tdtagstyle">TDTagStyle <a class="header-anchor" href="#tdtagstyle"></a></h3>
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
<td>context</td>
<td>BuildContext?</td>
<td>-</td>
<td>\u4E0A\u4E0B\u6587\uFF0C\u65B9\u4FBF\u83B7\u53D6\u4E3B\u9898\u5185\u5BB9</td>
</tr>
<tr>
<td>textColor</td>
<td>Color?</td>
<td>-</td>
<td>\u6587\u5B57\u989C\u8272</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>Color?</td>
<td>-</td>
<td>\u80CC\u666F\u989C\u8272</td>
</tr>
<tr>
<td>font</td>
<td>Font?</td>
<td>-</td>
<td>\u5B57\u4F53\u5C3A\u5BF8</td>
</tr>
<tr>
<td>fontWeight</td>
<td>FontWeight?</td>
<td>-</td>
<td>\u5B57\u4F53\u7C97\u7EC6</td>
</tr>
<tr>
<td>border</td>
<td>double</td>
<td>0</td>
<td>\u7EBF\u6846\u7C97\u7EC6</td>
</tr>
<tr>
<td>borderColor</td>
<td>Color?</td>
<td>-</td>
<td>\u8FB9\u6846\u989C\u8272</td>
</tr>
<tr>
<td>borderRadius</td>
<td>BorderRadiusGeometry?</td>
<td>-</td>
<td>\u5706\u89D2</td>
</tr>
</tbody>
</table>
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
<td>TDTagStyle.generateFillStyleByTheme</td>
<td>\u6839\u636E\u4E3B\u9898\u751F\u6210\u586B\u5145Tag\u6837\u5F0F</td>
</tr>
<tr>
<td>TDTagStyle.generateOutlineStyleByTheme</td>
<td>\u6839\u636E\u4E3B\u9898\u751F\u6210\u63CF\u8FB9Tag\u6837\u5F0F</td>
</tr>
<tr>
<td>TDTagStyle.generateDisableSelectStyle</td>
<td>\u6839\u636E\u4E3B\u9898\u751F\u6210\u7981\u7528Tag\u6837\u5F0F</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tdtag">TDTag <a class="header-anchor" href="#tdtag"></a></h3>
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
<td>text</td>
<td>String</td>
<td>text</td>
<td>\u6807\u7B7E\u5185\u5BB9</td>
</tr>
<tr>
<td>theme</td>
<td>TDTagTheme?</td>
<td>-</td>
<td>\u4E3B\u9898</td>
</tr>
<tr>
<td>icon</td>
<td>IconData?</td>
<td>-</td>
<td>\u56FE\u6807\u5185\u5BB9\uFF0C\u53EF\u968F\u72B6\u6001\u6539\u53D8\u989C\u8272</td>
</tr>
<tr>
<td>iconWidget</td>
<td>Widget?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u56FE\u6807\u5185\u5BB9\uFF0C\u9700\u81EA\u5904\u7406\u989C\u8272</td>
</tr>
<tr>
<td>textColor</td>
<td>Color?</td>
<td>-</td>
<td>\u6587\u5B57\u989C\u8272, \u4F18\u5148\u7EA7\u9AD8\u4E8Estyle\u7684textColor</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>Color?</td>
<td>-</td>
<td>\u80CC\u666F\u989C\u8272, \u4F18\u5148\u7EA7\u9AD8\u4E8Estyle\u7684backgroundColor</td>
</tr>
<tr>
<td>font</td>
<td>Font?</td>
<td>-</td>
<td>\u5B57\u4F53\u5C3A\u5BF8, \u4F18\u5148\u7EA7\u9AD8\u4E8Estyle\u7684font</td>
</tr>
<tr>
<td>fontWeight</td>
<td>FontWeight?</td>
<td>-</td>
<td>\u5B57\u4F53\u7C97\u7EC6, \u4F18\u5148\u7EA7\u9AD8\u4E8Estyle\u7684fontWeight</td>
</tr>
<tr>
<td>style</td>
<td>TDTagStyle?</td>
<td>-</td>
<td>\u6807\u7B7E\u6837\u5F0F</td>
</tr>
<tr>
<td>size</td>
<td>TDTagSize</td>
<td>TDTagSize.medium</td>
<td>\u6807\u7B7E\u5927\u5C0F</td>
</tr>
<tr>
<td>padding</td>
<td>EdgeInsets?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u6A21\u5F0F\u4E0B\u7684\u95F4\u8DDD</td>
</tr>
<tr>
<td>forceVerticalCenter</td>
<td>bool</td>
<td>true</td>
<td>\u662F\u5426\u5F3A\u5236\u4E2D\u6587\u6587\u5B57\u5C45\u4E2D</td>
</tr>
<tr>
<td>isOutline</td>
<td>bool</td>
<td>false</td>
<td>\u662F\u5426\u4E3A\u63CF\u8FB9\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u4E0D\u662F</td>
</tr>
<tr>
<td>shape</td>
<td>TDTagShape</td>
<td>TDTagShape.square</td>
<td>\u6807\u7B7E\u5F62\u72B6</td>
</tr>
<tr>
<td>isLight</td>
<td>bool</td>
<td>false</td>
<td>\u662F\u5426\u4E3A\u6D45\u8272</td>
</tr>
<tr>
<td>disable</td>
<td>bool</td>
<td>false</td>
<td>\u662F\u5426\u4E3A\u7981\u7528\u72B6\u6001</td>
</tr>
<tr>
<td>needCloseIcon</td>
<td>bool</td>
<td>false</td>
<td>\u5173\u95ED\u56FE\u6807</td>
</tr>
<tr>
<td>onCloseTap</td>
<td>GestureTapCallback?</td>
<td>-</td>
<td>\u5173\u95ED\u56FE\u6807\u70B9\u51FB\u4E8B\u4EF6</td>
</tr>
<tr>
<td>overflow</td>
<td>TextOverflow?</td>
<td>-</td>
<td>\u6587\u5B57\u6EA2\u51FA\u5904\u7406</td>
</tr>
<tr>
<td>key</td>
<td></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function i(s,c,g,T,h,p){const t=a("tdesign-doc");return r(),l(t)}var m=e(o,[["render",i]]);export{m as default};
