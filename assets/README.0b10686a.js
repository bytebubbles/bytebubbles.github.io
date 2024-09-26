import{T as t}from"./component.f9e366e0.js";import{_ as e,d as o,r as d,o as a,c as i}from"./site.66dd0425.js";const r=o({props:{docType:String},components:{TdesignDoc:t},provide:{info:{spline:"base",toc:!0,title:"Loading \u52A0\u8F7D",description:"\u7528\u4E8E\u8868\u793A\u9875\u9762\u6216\u64CD\u4F5C\u7684\u52A0\u8F7D\u72B6\u6001\uFF0C\u7ED9\u4E88\u7528\u6237\u53CD\u9988\u7684\u540C\u65F6\u51CF\u7F13\u7B49\u5F85\u7684\u7126\u8651\u611F\uFF0C\u7531\u4E00\u4E2A\u6216\u4E00\u7EC4\u53CD\u9988\u52A8\u6548\u7EC4\u6210\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686019,componentName:"loading",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_loading_page.dart" target="_blank" rel="noopener noreferrer">td_loading_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u7EAF\u56FE\u6807</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildPureIconLoading(BuildContext context) {
    return _buildRow([
      const TDLoading(
        size: TDLoadingSize.small,
        icon: TDLoadingIcon.circle,
      ),
      const TDLoading(
        size: TDLoadingSize.small,
        icon: TDLoadingIcon.activity,
      ),
      TDLoading(
        size: TDLoadingSize.small,
        icon: TDLoadingIcon.point,
        iconColor: TDTheme.of(context).brandNormalColor,
      ),
    ]);
  }</pre>
</td-code-block>
<p>\u56FE\u6807\u52A0\u6587\u5B57\u6A2A\u5411</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildTextIconHorizontalLoading(BuildContext context) {
    return _buildRow(const [
      TDLoading(
        size: TDLoadingSize.small,
        icon: TDLoadingIcon.circle,
        text: '\u52A0\u8F7D\u4E2D\u2026',
        axis: Axis.horizontal,
      ),
      TDLoading(
        size: TDLoadingSize.small,
        icon: TDLoadingIcon.activity,
        text: '\u52A0\u8F7D\u4E2D\u2026',
        axis: Axis.horizontal,
      ),
    ]);
  }</pre>
</td-code-block>
<p>\u56FE\u6807\u52A0\u6587\u5B57\u7AD6\u5411</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildTextIconVerticalLoading(BuildContext context) {
    return _buildRow(const [
      TDLoading(
        size: TDLoadingSize.small,
        icon: TDLoadingIcon.circle,
        text: '\u52A0\u8F7D\u4E2D\u2026',
        axis: Axis.vertical,
      ),
      TDLoading(
        size: TDLoadingSize.small,
        icon: TDLoadingIcon.activity,
        text: '\u52A0\u8F7D\u4E2D\u2026',
        axis: Axis.vertical,
      ),
    ]);
  }</pre>
</td-code-block>
<p>\u7EAF\u6587\u5B57</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildPureTextLoading(BuildContext context) {
    return _buildRow([
      const TDLoading(
        size: TDLoadingSize.small,
        text: '\u52A0\u8F7D\u4E2D\u2026',
      ),
      TDLoading(
        size: TDLoadingSize.small,
        text: '\u52A0\u8F7D\u5931\u8D25',
        textColor: TDTheme.of(context).fontGyColor3,
      ),
      TDLoading(
        size: TDLoadingSize.small,
        text: '\u52A0\u8F7D\u5931\u8D25',
        refreshWidget: GestureDetector(
          child: TDText(
            '\u5237\u65B0',
            font: TDTheme.of(context).fontBodySmall,
            textColor: TDTheme.of(context).brandNormalColor,
          ),
          onTap: () {
            TDToast.showText('\u5237\u65B0', context: context);
          },
        ),
      ),
    ]);
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u5C3A\u5BF8">1 \u7EC4\u4EF6\u5C3A\u5BF8 <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u5C3A\u5BF8"></a></h3>
<p>\u5927\u5C3A\u5BF8</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildLargeLoading(BuildContext context) {
    return _buildRow([
      const TDLoading(
        size: TDLoadingSize.large,
        icon: TDLoadingIcon.circle,
        text: '\u52A0\u8F7D\u4E2D\u2026',
        axis: Axis.horizontal,
      ),
    ]);
  }</pre>
</td-code-block>
<p>\u4E2D\u5C3A\u5BF8</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildMediumLoading(BuildContext context) {
    return _buildRow([
      const TDLoading(
        size: TDLoadingSize.medium,
        icon: TDLoadingIcon.circle,
        text: '\u52A0\u8F7D\u4E2D\u2026',
        axis: Axis.horizontal,
      ),
    ]);
  }</pre>
</td-code-block>
<p>\u5C0F\u5C3A\u5BF8</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSmallLoading(BuildContext context) {
    return _buildRow([
      const TDLoading(
        size: TDLoadingSize.small,
        icon: TDLoadingIcon.circle,
        text: '\u52A0\u8F7D\u4E2D\u2026',
        axis: Axis.horizontal,
      ),
    ]);
  }</pre>
</td-code-block>
<h3 id="_1-\u52A0\u8F7D\u901F\u5EA6">1 \u52A0\u8F7D\u901F\u5EA6 <a class="header-anchor" href="#_1-\u52A0\u8F7D\u901F\u5EA6"></a></h3>
<p>\u8C03\u6574\u52A0\u8F7D\u901F\u5EA6</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildCustomSpeedLoading(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          TDLoading(
            size: TDLoadingSize.small,
            icon: TDLoadingIcon.circle,
            axis: Axis.horizontal,
            text: '\u52A0\u8F7D\u4E2D\u2026',
            duration: _currentSliderValue.round(),
          ),
          Slider(
            value: _currentSliderValue,
            max: 2000,
            min: -20,
            divisions: 100,
            label: _currentSliderValue.round().toString(),
            onChanged: (double value) {
              setState(() {
                _currentSliderValue = value;
              });
            },
          ),
        ],
      ),
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdloading">TDLoading</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdloading">TDLoading <a class="header-anchor" href="#tdloading"></a></h3>
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
<td>TDLoadingSize</td>
<td>-</td>
<td>\u5C3A\u5BF8</td>
</tr>
<tr>
<td>icon</td>
<td>TDLoadingIcon?</td>
<td>-</td>
<td>\u56FE\u6807\uFF0C\u652F\u6301\u5706\u5F62\u3001\u70B9\u72B6\u3001\u83CA\u82B1\u72B6</td>
</tr>
<tr>
<td>iconColor</td>
<td>Color?</td>
<td>-</td>
<td>\u56FE\u6807\u989C\u8272</td>
</tr>
<tr>
<td>axis</td>
<td>Axis</td>
<td>Axis.vertical</td>
<td>\u6587\u6848\u548C\u56FE\u6807\u76F8\u5BF9\u65B9\u5411</td>
</tr>
<tr>
<td>text</td>
<td>String?</td>
<td>-</td>
<td>\u6587\u6848</td>
</tr>
<tr>
<td>refreshWidget</td>
<td>Widget?</td>
<td>-</td>
<td>\u5931\u8D25\u5237\u65B0\u7EC4\u4EF6</td>
</tr>
<tr>
<td>customIcon</td>
<td>Widget?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u56FE\u6807\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8Eicon</td>
</tr>
<tr>
<td>textColor</td>
<td>Color</td>
<td>Colors.black</td>
<td>\u6587\u6848\u989C\u8272</td>
</tr>
<tr>
<td>duration</td>
<td>int</td>
<td>2000</td>
<td>\u4E00\u6B21\u5237\u65B0\u7684\u65F6\u95F4\uFF0C\u63A7\u5236\u52A8\u753B\u901F\u5EA6</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function s(l,c,g,p,h,m){const n=d("tdesign-doc");return a(),i(n)}var D=e(r,[["render",s]]);export{D as default};
