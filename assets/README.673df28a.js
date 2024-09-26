import{T as e}from"./component.6878da95.js";import{_ as t,d as a,r as d,o as l,c as r}from"./site.6fe70e23.js";const i=a({props:{docType:String},components:{TdesignDoc:e},provide:{info:{spline:"base",toc:!0,title:"Slider \u6ED1\u52A8\u9009\u62E9\u5668",description:"\u7528\u4E8E\u9009\u62E9\u6A2A\u8F74\u4E0A\u7684\u6570\u503C\u3001\u533A\u95F4\u3001\u6863\u4F4D\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686020,componentName:"slider",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_slider_page.dart" target="_blank" rel="noopener noreferrer">td_slider_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u5355\u6E38\u6807\u6ED1\u5757</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSingleHandle(BuildContext context) {
    return TDSlider(
      sliderThemeData: TDSliderThemeData(
        min: 0,
        max: 100,
      ),
      value: 10,
      // divisions: 5,
      onChanged: (value) {},
    );
  }</pre>
</td-code-block>
<p>\u53CC\u6E38\u6807\u6ED1\u5757</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildDoubleHandle(BuildContext context) {
    return TDRangeSlider(
      sliderThemeData: TDSliderThemeData(
        min: 0,
        max: 100,
      ),
      value: const RangeValues(10, 60),
      // divisions: 5,
      onChanged: (value) {},
    );
  }</pre>
</td-code-block>
<p>\u5E26\u6570\u503C\u5355\u6E38\u6807\u6ED1\u5757</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSingleHandleWithNumber(BuildContext context) {
    return TDSlider(
      sliderThemeData: TDSliderThemeData(
        showThumbValue: true,
        scaleFormatter: (value) => value.toInt().toString(),
        min: 0,
        max: 100,
      ),
      value: 10,
      leftLabel: '0',
      rightLabel: '100',
      // divisions: 5,
      onChanged: (value) {},
    );
  }</pre>
</td-code-block>
<p>\u5E26\u6570\u503C\u53CC\u6E38\u6807\u6ED1\u5757</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildDoubleHandleWithNumber(BuildContext context) {
    return TDRangeSlider(
      sliderThemeData: TDSliderThemeData(
        showThumbValue: true,
        min: 0,
        max: 100,
        scaleFormatter: (value) => value.round().toString(),
      ),
      leftLabel: '0',
      rightLabel: '100',
      value: const RangeValues(40, 60),
      // divisions: 5,
      onChanged: (value) {},
    );
  }</pre>
</td-code-block>
<p>\u5E26\u523B\u5EA6\u5355\u6E38\u6807\u6ED1\u5757</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSingleHandleWithScale(BuildContext context) {
    return TDSlider(
      sliderThemeData: TDSliderThemeData(
        showScaleValue: true,
        divisions: 5,
        min: 0,
        max: 100,
        scaleFormatter: (value) => value.toInt().toString(),
      ),
      value: 60,
      // divisions: 5,
      onChanged: (value) {},
    );
  }</pre>
</td-code-block>
<p>\u5E26\u523B\u5EA6\u53CC\u6E38\u6807\u6ED1\u5757</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildDoubleHandleWithScale(BuildContext context) {
    return TDRangeSlider(
      sliderThemeData: TDSliderThemeData(
        showScaleValue: true,
        divisions: 5,
        min: 0,
        max: 100,
        scaleFormatter: (value) => value.toInt().toString(),
      ),
      value: const RangeValues(40, 70),
      // divisions: 5,
      onChanged: (value) {},
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u72B6\u6001">1 \u7EC4\u4EF6\u72B6\u6001 <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u72B6\u6001"></a></h3>
<p>\u7981\u7528\u72B6\u6001</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildDisable(BuildContext context) {
    return Column(
      children: [
        TDSlider(
          sliderThemeData: TDSliderThemeData(
            min: 0,
            max: 100,
          ),
          value: 40,
          leftLabel: '0',
          rightLabel: '100',
        ),
        const SizedBox(
          height: 16,
        ),
        TDRangeSlider(
          sliderThemeData: TDSliderThemeData(
            min: 0,
            max: 100,
            showThumbValue: true,
            scaleFormatter: (value) => value.toInt().toString(),
          ),
          value: const RangeValues(20, 60),
          leftLabel: '0',
          rightLabel: '100',
        ),
        const SizedBox(
          height: 16,
        ),
        TDRangeSlider(
          sliderThemeData: TDSliderThemeData(
            showScaleValue: true,
            divisions: 5,
            min: 0,
            max: 100,
            scaleFormatter: (value) => value.toInt().toString(),
          ),
          value: const RangeValues(20, 60),
        ),
      ],
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7279\u6B8A\u6837\u5F0F">1 \u7279\u6B8A\u6837\u5F0F <a class="header-anchor" href="#_1-\u7279\u6B8A\u6837\u5F0F"></a></h3>
<p>\u80F6\u56CA\u578B\u6ED1\u5757</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildCapsule(BuildContext context) {
    return Column(
      children: [
        TDSlider(
          sliderThemeData: TDSliderThemeData.capsule(
            showThumbValue: true,
            min: 0,
            max: 100,
            scaleFormatter: (value) => value.toInt().toString(),
          ),
          value: 40,
          // divisions: 5,
          onChanged: (value) {},
        ),
        const SizedBox(
          height: 16,
        ),
        TDRangeSlider(
          sliderThemeData: TDSliderThemeData.capsule(
            min: 0,
            max: 100,
            scaleFormatter: (value) => value.toInt().toString(),
          ),
          value: const RangeValues(20, 60),
          // divisions: 5,
          onChanged: (value) {},
        ),
        const SizedBox(
          height: 16,
        ),
        TDSlider(
          sliderThemeData: TDSliderThemeData.capsule(
            min: 0,
            max: 100,
            scaleFormatter: (value) => value.toInt().toString(),
          ),
          leftLabel: '0',
          rightLabel: '100',
          value: 40,
          // divisions: 5,
          onChanged: (value) {},
        ),
        const SizedBox(
          height: 16,
        ),
        TDRangeSlider(
          sliderThemeData: TDSliderThemeData.capsule(
            min: 0,
            max: 100,
            showThumbValue: true,
            scaleFormatter: (value) => value.toInt().toString(),
          ),
          value: const RangeValues(20, 60),
          leftLabel: '0',
          rightLabel: '100',
          // divisions: 5,
          onChanged: (value) {},
        ),
        const SizedBox(
          height: 16,
        ),
        TDSlider(
          sliderThemeData: TDSliderThemeData.capsule(
            showScaleValue: true,
            divisions: 5,
            min: 0,
            max: 100,
            scaleFormatter: (value) => value.toInt().toString(),
          )..updateSliderThemeData((data) => data.copyWith(
                activeTickMarkColor: const Color(0xFFE7E7E7),
                inactiveTickMarkColor: const Color(0xFFE7E7E7),
              )),
          value: 60,
          // divisions: 5,
          onChanged: (value) {},
        ),
        const SizedBox(
          height: 16,
        ),
        TDRangeSlider(
          sliderThemeData: TDSliderThemeData.capsule(
            showScaleValue: true,
            divisions: 5,
            min: 0,
            max: 100,
            scaleFormatter: (value) => value.toInt().toString(),
          )
            ..updateSliderThemeData((data) =>
                data.copyWith(
                  activeTickMarkColor: const Color(0xFFE7E7E7),
                  inactiveTickMarkColor: const Color(0xFFE7E7E7),
                )),
          value: const RangeValues(20, 60),
          // divisions: 5,
          onChanged: (value) {},
        )
      ],
    );
  }</pre>
</td-code-block>
<p>\u81EA\u5B9A\u4E49\u76D2\u5B50\u6837\u5F0F</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildCustomDecoration(BuildContext context) {
    return Column(
      children: [
        TDSlider(
          sliderThemeData: TDSliderThemeData(
            min: 0,
            max: 100,
          ),
          value: 40,
          boxDecoration: BoxDecoration(
             color: Colors.amber
          ),
          // divisions: 5,
          onChanged: (value) {},
        ),
        const SizedBox(
          height: 16,
        ),
        TDRangeSlider(
          sliderThemeData: TDSliderThemeData.capsule(
            min: 0,
            max: 100,
            scaleFormatter: (value) => value.toInt().toString(),
          ),
          boxDecoration: BoxDecoration(
              color: Colors.deepOrangeAccent
          ),
          value: const RangeValues(20, 60),
          onChanged: (value) {},
        ),
      ],
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdslider">TDSlider</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdrangeslider">TDRangeSlider</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdslider">TDSlider <a class="header-anchor" href="#tdslider"></a></h3>
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
<td>value</td>
<td>RangeValues</td>
<td>-</td>
<td>\u9ED8\u8BA4\u503C</td>
</tr>
<tr>
<td>boxDecoration</td>
<td>Decoration?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u76D2\u5B50\u6837\u5F0F</td>
</tr>
<tr>
<td>onChanged</td>
<td>ValueChanged<RangeValues>?</td>
<td>-</td>
<td>\u6ED1\u52A8\u53D8\u5316\u76D1\u542C</td>
</tr>
<tr>
<td>sliderThemeData</td>
<td>TDSliderThemeData?</td>
<td>-</td>
<td>\u6837\u5F0F</td>
</tr>
<tr>
<td>leftLabel</td>
<td>String?</td>
<td>-</td>
<td>\u5DE6\u4FA7\u6807\u7B7E</td>
</tr>
<tr>
<td>rightLabel</td>
<td>String?</td>
<td>-</td>
<td>\u53F3\u4FA7\u6807\u7B7E</td>
</tr>
<tr>
<td>onChangeStart</td>
<td>ValueChanged<RangeValues>?</td>
<td>-</td>
<td>\u6ED1\u52A8\u5F00\u59CB\u76D1\u542C</td>
</tr>
<tr>
<td>onChangeEnd</td>
<td>ValueChanged<RangeValues>?</td>
<td>-</td>
<td>\u6ED1\u52A8\u7ED3\u675F\u76D1\u542C</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tdrangeslider">TDRangeSlider <a class="header-anchor" href="#tdrangeslider"></a></h3>
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
<td>RangeValues</td>
<td>-</td>
<td>\u9ED8\u8BA4\u503C</td>
</tr>
<tr>
<td>boxDecoration</td>
<td>Decoration?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u76D2\u5B50\u6837\u5F0F</td>
</tr>
<tr>
<td>onChanged</td>
<td>ValueChanged<RangeValues>?</td>
<td>-</td>
<td>\u6ED1\u52A8\u53D8\u5316\u76D1\u542C</td>
</tr>
<tr>
<td>sliderThemeData</td>
<td>TDSliderThemeData?</td>
<td>-</td>
<td>\u6837\u5F0F</td>
</tr>
<tr>
<td>leftLabel</td>
<td>String?</td>
<td>-</td>
<td>\u5DE6\u4FA7\u6807\u7B7E</td>
</tr>
<tr>
<td>rightLabel</td>
<td>String?</td>
<td>-</td>
<td>\u53F3\u4FA7\u6807\u7B7E</td>
</tr>
<tr>
<td>onChangeStart</td>
<td>ValueChanged<RangeValues>?</td>
<td>-</td>
<td>\u6ED1\u52A8\u5F00\u59CB\u76D1\u542C</td>
</tr>
<tr>
<td>onChangeEnd</td>
<td>ValueChanged<RangeValues>?</td>
<td>-</td>
<td>\u6ED1\u52A8\u7ED3\u675F\u76D1\u542C</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function o(s,c,h,g,u,m){const n=d("tdesign-doc");return l(),r(n)}var v=t(i,[["render",o]]);export{v as default};
