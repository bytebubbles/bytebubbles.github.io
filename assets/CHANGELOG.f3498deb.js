import{T as n}from"./component.6878da95.js";import{_ as r,d as t,r as l,o as a,c as i}from"./site.6fe70e23.js";const o=t({props:{docType:String},components:{TdesignDoc:n},provide:{info:{spline:"explain",toc:!1,title:"\u66F4\u65B0\u65E5\u5FD7",description:"",isComponent:!1,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"timeline",lastUpdated:1723434686003,componentName:null,docMd:`<h2 id="\u{1F308}-0-1-6-2024-07-24">\u{1F308} 0.1.6 <code>2024-07-24</code> <a class="header-anchor" href="#\u{1F308}-0-1-6-2024-07-24"></a></h2>
<h3 id="\u{1F680}-features">\u{1F680} Features <a class="header-anchor" href="#\u{1F680}-features"></a></h3>
<ul>
<li><code>Cell</code>: \u65B0\u589E Cell \u5355\u5143\u683C \u7EC4\u4EF6 @hkaikai (<a href="https://github.com/Tencent/tdesign-flutter/pull/150" target="_blank" rel="noopener noreferrer">#150</a>)</li>
<li><code>Drawer</code>: \u65B0\u589EDrawer \u62BD\u5C49 \u7EC4\u4EF6 @hkaikai (<a href="https://github.com/Tencent/tdesign-flutter/pull/178" target="_blank" rel="noopener noreferrer">#178</a>)</li>
<li><code>SwipeCell</code>: \u65B0\u589ESwipeCell \u6ED1\u52A8\u64CD\u4F5C \u7EC4\u4EF6 @hkaikai (<a href="https://github.com/Tencent/tdesign-flutter/pull/218" target="_blank" rel="noopener noreferrer">#218</a>)</li>
<li><code>Steps</code>: \u65B0\u589E Steps \u6B65\u9AA4\u6761 \u7EC4\u4EF6 @aaronmhl (<a href="https://github.com/Tencent/tdesign-flutter/pull/199" target="_blank" rel="noopener noreferrer">#199</a>)</li>
<li><code>ImageViewer</code>: \u65B0\u589EImageViewer \u56FE\u7247\u9884\u89C8 \u7EC4\u4EF6 @ccXxx1aoBai (<a href="https://github.com/Tencent/tdesign-flutter/pull/187" target="_blank" rel="noopener noreferrer">#187</a>)</li>
<li><code>Cascader</code>:\u65B0\u589E Cascader \u7EA7\u8054\u9009\u62E9\u5668 \u7EC4\u4EF6@shizhe2018 (<a href="https://github.com/Tencent/tdesign-flutter/pull/195" target="_blank" rel="noopener noreferrer">#195</a>)</li>
<li><code>Fab</code>:\u65B0\u589E Fab \u60AC\u6D6E\u6309\u94AE \u7EC4\u4EF6 @TingShine (<a href="https://github.com/Tencent/tdesign-flutter/pull/239" target="_blank" rel="noopener noreferrer">#239</a>)</li>
<li><code>BackTop</code>:\u65B0\u589E BackTop \u8FD4\u56DE\u9876\u90E8 \u7EC4\u4EF6 @TingShine (<a href="https://github.com/Tencent/tdesign-flutter/pull/239" target="_blank" rel="noopener noreferrer">#239</a>)</li>
<li><code>TreeSelect</code>:\u65B0\u589E TreeSelect \u6811\u5F62\u9009\u62E9\u5668 \u7EC4\u4EF6 @TingShine (<a href="https://github.com/Tencent/tdesign-flutter/pull/239" target="_blank" rel="noopener noreferrer">#239</a>)</li>
<li><code>Collapse</code>:\u65B0\u589E Collapse \u6298\u53E0\u9762\u677F \u7EC4\u4EF6 @dorayx (<a href="https://github.com/Tencent/tdesign-flutter/pull/239" target="_blank" rel="noopener noreferrer">#239</a>)</li>
<li><code>Input</code>: \u65B0\u589EinputAction API\uFF0C\u652F\u6301\u8BBE\u7F6E\u952E\u76D8\u884C\u4E3A\uFF1B\u65B0\u589Espacer API,\u53EF\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u95F4\u8DDD @ccXxx1aoBai (<a href="https://github.com/Tencent/tdesign-flutter/pull/184" target="_blank" rel="noopener noreferrer">#184</a>)</li>
<li><code>Text</code>: \u589E\u52A0\u5168\u5C40\u5B57\u4F53\u914D\u7F6E\u548C\u52A0\u8F7D\u7F51\u7EDC\u5B57\u4F53\u7684\u80FD\u529B @Luozf12345 (<a href="https://github.com/Tencent/tdesign-flutter/pull/232" target="_blank" rel="noopener noreferrer">#232</a>)</li>
<li><code>CountDown</code>: \u6DFB\u52A0 \u5F00\u59CB/\u91CD\u7F6E/\u6682\u505C/\u7EE7\u7EED \u7684\u63A7\u5236\u529F\u80FD @hkaikai (<a href="https://github.com/Tencent/tdesign-flutter/pull/175" target="_blank" rel="noopener noreferrer">#175</a>)</li>
<li><code>Popup</code>: \u652F\u6301\u4F4D\u7F6E\uFF0C\u5927\u5C0F\u8BBE\u7F6E @hkaikai (<a href="https://github.com/Tencent/tdesign-flutter/pull/191" target="_blank" rel="noopener noreferrer">#191</a>)</li>
</ul>
<h3 id="\u{1F41E}-bug-fixes">\u{1F41E} Bug Fixes <a class="header-anchor" href="#\u{1F41E}-bug-fixes"></a></h3>
<ul>
<li><code>Toast</code>: \u89E3\u51B3duration\u5C5E\u6027\u65E0\u6548\u95EE\u9898 @ccXxx1aoBai (<a href="https://github.com/Tencent/tdesign-flutter/pull/167" target="_blank" rel="noopener noreferrer">#167</a>)</li>
<li><code>Tnput</code>: \u89E3\u51B3label\u6EA2\u51FA\u95EE\u9898 @ccXxx1aoBai (<a href="https://github.com/Tencent/tdesign-flutter/pull/184" target="_blank" rel="noopener noreferrer">#184</a>)</li>
<li><code>Tabs</code>:tabs\u7EC4\u4EF6outlineType\u4E3Acapsule\u652F\u6301\u8BBE\u7F6E\u9009\u4E2D\u548C\u672A\u9009\u4E2Dtab\u80CC\u666F\u8272\uFF0CoutlineType\u4E3Acard\u652F\u6301\u8BBE\u7F6E\u9009\u4E2Dtab\u80CC\u666F\u8272 @ccXxx1aoBai</li>
<li><code>Button</code>: \u4FEE\u590DsetState\u65B9\u6CD5\u4E0B\u5C5E\u6027\u65E0\u6CD5\u6539\u53D8\u7684\u95EE\u9898 @shizhe2018 (<a href="https://github.com/Tencent/tdesign-flutter/pull/201" target="_blank" rel="noopener noreferrer">#201</a>)</li>
<li><code>SearchBar</code>:\u641C\u7D22\u6846\u589E\u52A0\u63A7\u5236\u5668\uFF0C\u5141\u8BB8\u5916\u90E8\u6E05\u9664\u641C\u7D22\u6587\u672C @shizhe2018 (<a href="https://github.com/Tencent/tdesign-flutter/pull/194" target="_blank" rel="noopener noreferrer">#194</a>)</li>
<li><code>Slider</code>: \u65B0\u589E\u81EA\u5B9A\u4E49Decoration\u6837\u5F0F @shizhe2018 (<a href="https://github.com/Tencent/tdesign-flutter/pull/198" target="_blank" rel="noopener noreferrer">#198</a>)</li>
<li><code>Empty</code>: \u65B0\u589E\u6587\u5B57\u5927\u5C0F\u6837\u5F0F api @shizhe2018 (<a href="https://github.com/Tencent/tdesign-flutter/pull/219" target="_blank" rel="noopener noreferrer">#219</a>)</li>
<li><code>Dialog</code>: \u65B0\u589Einput\u7C7B\u578B\u80CC\u666F @shizhe2018 (<a href="https://github.com/Tencent/tdesign-flutter/pull/238" target="_blank" rel="noopener noreferrer">#238</a>)</li>
</ul>
<h3 id="\u{1F6A7}-others">\u{1F6A7} Others <a class="header-anchor" href="#\u{1F6A7}-others"></a></h3>
<ul>
<li>\u9E3F\u8499\u7F16\u8BD1\u652F\u6301 @hkaikai (<a href="https://github.com/Tencent/tdesign-flutter/pull/233" target="_blank" rel="noopener noreferrer">#233</a>)</li>
<li>\u4FEE\u6539\u4E3B\u9898\u9002\u914D\u5DE5\u5177 @Luozf12345</li>
<li>\u6F14\u793A\u4EE3\u7801\u65B0\u589E\u5B8C\u6574\u9875\u9762\u7684github\u94FE\u63A5 @Luozf12345</li>
</ul>
<h2 id="\u{1F308}-0-1-5-2024-05-31">\u{1F308} 0.1.5 <code>2024-05-31</code> <a class="header-anchor" href="#\u{1F308}-0-1-5-2024-05-31"></a></h2>
<h3 id="\u{1F680}-features-1">\u{1F680} Features <a class="header-anchor" href="#\u{1F680}-features-1"></a></h3>
<ul>
<li><code>TDDropdownMenu</code>:
<ul>
<li>add: \u65B0\u589ETDDropdownMenu \u4E0B\u62C9\u83DC\u5355 \u7EC4\u4EF6 @hkaikai</li>
</ul>
</li>
<li><code>TDTextarea</code>:
<ul>
<li>add: \u65B0\u589ETextarea \u591A\u884C\u6587\u672C\u6846 \u7EC4\u4EF6 @hkaikai</li>
</ul>
</li>
<li><code>TDBottomTabBar</code>:
<ul>
<li>add:\u652F\u6301\u81EA\u5B9A\u4E49\u80CC\u666F\u989C\u8272\u548Cicon\u4E0E\u6587\u672C\u4E2D\u95F4\u8DDD\u79BB(<a href="https://github.com/Tencent/tdesign-flutter/issues/138" target="_blank" rel="noopener noreferrer">#138</a>)</li>
<li>add:TDBottomTabBar\u652F\u6301\u5916\u90E8\u8BBE\u7F6EcurrentIndex (<a href="https://github.com/Tencent/tdesign-flutter/issues/110" target="_blank" rel="noopener noreferrer">#110</a>)</li>
</ul>
</li>
<li><code>TDBadge</code>:
<ul>
<li>add: TDBadge\u5F53\u503C\u4E3A0\u65F6\u89D2\u6807\u663E\u9690\u8BBE\u7F6E  @ccXxx1aoBai</li>
</ul>
</li>
<li><code>TDRadio</code>:
<ul>
<li>add: TDRadio\u589E\u52A0\u81EA\u5B9A\u4E49\u80CC\u666F\u8272\u548C\u6587\u5B57\u989C\u8272 @ccXxx1aoBai (<a href="https://github.com/Tencent/tdesign-flutter/issues/135" target="_blank" rel="noopener noreferrer">#135</a>)</li>
<li>add: \u65B0\u589E\u53BB\u6389\u5DE6\u8FB9\u8FB9\u8DDDAPI(<a href="https://github.com/Tencent/tdesign-flutter/issues/128" target="_blank" rel="noopener noreferrer">#128</a>)</li>
</ul>
</li>
<li><code>TDCheckbox</code>:
<ul>
<li>add: TDCheckbox\u589E\u52A0\u81EA\u5B9A\u4E49\u6587\u5B57\u989C\u8272</li>
<li>add: \u65B0\u589E\u53BB\u6389\u5DE6\u8FB9\u8FB9\u8DDDAPI</li>
</ul>
</li>
<li><code>TDImage</code>:
<ul>
<li>add: \u65B0\u589EImage.file(<a href="https://github.com/Tencent/tdesign-flutter/issues/133" target="_blank" rel="noopener noreferrer">#133</a>)</li>
<li>add: \u5141\u8BB8\u5916\u90E8\u81EA\u5B9A\u4E49TDImage\u7684fit\u65B9\u5F0F(<a href="https://github.com/Tencent/tdesign-flutter/issues/114" target="_blank" rel="noopener noreferrer">#114</a>)</li>
</ul>
</li>
<li><code>TDInput</code>:
<ul>
<li>add: \u65B0\u589EInput\u6E05\u9664\u6309\u94AE\u81EA\u5B9A\u4E49\u5C3A\u5BF8 (<a href="https://github.com/Tencent/tdesign-flutter/issues/147" target="_blank" rel="noopener noreferrer">#147</a>)</li>
<li>add: \u65B0\u589Elabel\u6587\u672C\u5DE6\u4FA7\u95F4\u8DDD (<a href="https://github.com/Tencent/tdesign-flutter/issues/147" target="_blank" rel="noopener noreferrer">#147</a>)</li>
<li>add: \u65B0\u589EcarType\u7C7B\u578B\u7684rightWidget (<a href="https://github.com/Tencent/tdesign-flutter/issues/32" target="_blank" rel="noopener noreferrer">#147</a>)</li>
</ul>
</li>
<li><code>TDDivider</code>:
<ul>
<li>add: \u65B0\u589E\u5206\u5272\u7EBF\u7EC4\u4EF6\u8BBE\u7F6E\u6587\u5B57\u6837\u5F0F\u5927\u5C0F (<a href="https://github.com/Tencent/tdesign-flutter/issues/134" target="_blank" rel="noopener noreferrer">#134</a>)</li>
</ul>
</li>
<li><code>TDToast</code>:
<ul>
<li>add: Toast\u589E\u52A0\u81EA\u5B9A\u4E49\u6587\u672C\u957F\u5EA6\u7684\u5C5E\u6027 (<a href="https://github.com/Tencent/tdesign-flutter/issues/148" target="_blank" rel="noopener noreferrer">#148</a>)</li>
</ul>
</li>
<li><code>TDSideBar</code>:
<ul>
<li>add: \u65B0\u589E\u9009\u4E2D\u6837\u5F0F (<a href="https://github.com/Tencent/tdesign-flutter/issues/69" target="_blank" rel="noopener noreferrer">#69</a>)</li>
<li>add: \u65B0\u589E\u4EE5\u53CA\u81EA\u5B9A\u4E49\u6587\u672C\u8FB9\u8DDD (<a href="https://github.com/Tencent/tdesign-flutter/issues/67" target="_blank" rel="noopener noreferrer">#67</a>)</li>
</ul>
</li>
</ul>
<h3 id="\u{1F41E}-bug-fixes-1">\u{1F41E} Bug Fixes <a class="header-anchor" href="#\u{1F41E}-bug-fixes-1"></a></h3>
<ul>
<li><code>TDButton</code>:
<ul>
<li>fix: setState()\u524D\u589E\u52A0mounted\u5224\u65AD (<a href="https://github.com/Tencent/tdesign-flutter/issues/112" target="_blank" rel="noopener noreferrer">#122</a>)</li>
</ul>
</li>
<li><code>TDDialog</code>:
<ul>
<li>fix: \u4FEE\u6539Dialog\u53EA\u6709\u672A\u8BBE\u7F6Eaction\u7684\u65F6\u5019,\u5185\u90E8\u624D\u4F1A\u81EA\u52A8\u5173\u95ED,\u5982\u679C\u6709\u8BBE\u7F6Eaction,\u5219\u5173\u95ED\u65F6\u673A\u4EA4\u7ED9\u4E1A\u52A1\u81EA\u5DF1\u5904\u7406 (<a href="https://github.com/Tencent/tdesign-flutter/issues/117" target="_blank" rel="noopener noreferrer">#117</a>)</li>
</ul>
</li>
</ul>
<h3 id="\u{1F6A7}-others-1">\u{1F6A7} Others <a class="header-anchor" href="#\u{1F6A7}-others-1"></a></h3>
<ul>
<li>\u589E\u52A0\u56FD\u9645\u5316\u8BED\u8A00\u9002\u914D\u529F\u80FD</li>
<li>\u9002\u914D3.16\u540E\u6587\u672C\u5C45\u4E2D,\u589E\u52A0TDTextConfig\u4F7F\u7528\u6587\u6863</li>
</ul>
<h2 id="\u{1F308}-0-1-4-2024-04-08">\u{1F308} 0.1.4 <code>2024-04-08</code> <a class="header-anchor" href="#\u{1F308}-0-1-4-2024-04-08"></a></h2>
<h3 id="\u{1F680}-features-2">\u{1F680} Features <a class="header-anchor" href="#\u{1F680}-features-2"></a></h3>
<ul>
<li><code>TDCountDown</code>:
<ul>
<li>add: \u65B0\u589ETDCountDown\u5012\u8BA1\u65F6\u7EC4\u4EF6 @hkaikai</li>
</ul>
</li>
<li><code>TDTheme</code>:
<ul>
<li>add: \u4FEE\u6539\u4E3B\u9898\u5B9E\u73B0\u65B9\u5F0F,\u652F\u6301ref\u5C5E\u6027\u8FDB\u884C\u81EA\u5B9A\u4E49\u6620\u5C04</li>
<li>add: \u6DFB\u52A0\u9ED8\u8BA4\u6570\u5B57\u5B57\u4F53 numberFontFamily</li>
</ul>
</li>
<li><code>TDText</code>:
<ul>
<li>add: \u6DFB\u52A0TDText\u5F3A\u5236\u5C45\u4E2D\u5F00\u5173 kTextForceVerticalCenterEnable,\u53EF\u4EE5\u5168\u5C40\u7981\u7528\u5F3A\u5236\u5C45\u4E2D,\u9632\u6B62flutter 3.16\u7248\u672C\u4E4B\u540E\u6587\u5B57\u504F\u79FB\u592A\u591A(<a href="https://github.com/Tencent/tdesign-flutter/issues/35" target="_blank" rel="noopener noreferrer">#35</a>)</li>
</ul>
</li>
<li><code>TDBottomTabBar</code>:
<ul>
<li>add: \u6DFB\u52A0\u81EA\u5B9A\u4E49\u80CC\u666F\u989C\u8272\u529F\u80FD(<a href="https://github.com/Tencent/tdesign-flutter/issues/55" target="_blank" rel="noopener noreferrer">#55</a>)</li>
</ul>
</li>
<li><code>TDCheckbox</code>:
<ul>
<li>add: TDCheckbox\u548CTDRadio\u652F\u6301\u81EA\u5B9A\u4E49\u989C\u8272(<a href="https://github.com/Tencent/tdesign-flutter/issues/57" target="_blank" rel="noopener noreferrer">#57</a>)</li>
<li>add: TDCheckbox\u548CTDRadio\u652F\u6301\u81EA\u5B9A\u4E49\u5B57\u4F53\u5927\u5C0F(<a href="https://github.com/Tencent/tdesign-flutter/issues/66" target="_blank" rel="noopener noreferrer">#66</a>)</li>
</ul>
</li>
<li><code>TDTabBar</code>:
<ul>
<li>add: TDTabBar\u6DFB\u52A0\u5206\u5272\u7EBF\u7684\u989C\u8272\u548C\u9AD8\u5EA6\u7684\u81EA\u5B9A\u4E49\u8BBE\u7F6E(<a href="https://github.com/Tencent/tdesign-flutter/issues/71" target="_blank" rel="noopener noreferrer">#71</a>)</li>
</ul>
</li>
<li><code>TDSwitch</code>:
<ul>
<li>add: TDSwitch \u652F\u6301\u81EA\u5B9A\u4E49&quot;\u5F00/\u5173&quot;\u6587\u6848 (<a href="https://github.com/Tencent/tdesign-flutter/issues/73" target="_blank" rel="noopener noreferrer">#73</a>)</li>
</ul>
</li>
<li><code>TDDialog</code>:
<ul>
<li>add: \u6DFB\u52A0\u81EA\u5B9A\u4E49\u6807\u9898\u5BF9\u9F50\u548C\u5185\u5BB9Widget\u7684\u529F\u80FD (<a href="https://github.com/Tencent/tdesign-flutter/issues/58" target="_blank" rel="noopener noreferrer">#58</a>)</li>
</ul>
</li>
</ul>
<h3 id="\u{1F41E}-bug-fixes-2">\u{1F41E} Bug Fixes <a class="header-anchor" href="#\u{1F41E}-bug-fixes-2"></a></h3>
<ul>
<li><code>TDSlider</code>:
<ul>
<li>fix: \u4FEE\u590DTDSlider\u5355\u6E38\u6807\u6A21\u5F0F\u4E0B\u8BBE\u7F6EshowThumbValue\u4E0D\u8D77\u4F5C\u7528\u7684\u95EE\u9898\u3002</li>
</ul>
</li>
<li><code>TDButton</code>:
<ul>
<li>fix: \u4FEE\u590DTDButton\u5916\u90E8\u8BBE\u7F6E\u4E3B\u9898\u989C\u8272\u4E0D\u751F\u6548\u7684\u95EE\u9898 (<a href="https://github.com/Tencent/tdesign-flutter/issues/54" target="_blank" rel="noopener noreferrer">#54</a>)</li>
</ul>
</li>
<li><code>TDInput</code>:
<ul>
<li>fix: \u4FEE\u590DTDInput\u7684showBottomDivider\u4E0D\u751F\u6548\u7684\u95EE\u9898  (<a href="https://github.com/Tencent/tdesign-flutter/issues/70" target="_blank" rel="noopener noreferrer">#70</a>)</li>
<li>fix: TDInput\u53BB\u6389\u65E0\u6548\u7684height API,\u4F7F\u7528SizedBox\u6765\u4FEE\u6539\u9AD8\u5EA6  (<a href="https://github.com/Tencent/tdesign-flutter/issues/70" target="_blank" rel="noopener noreferrer">#70</a>)</li>
</ul>
</li>
</ul>
<h3 id="\u{1F6A7}-others-2">\u{1F6A7} Others <a class="header-anchor" href="#\u{1F6A7}-others-2"></a></h3>
<ul>
<li>example\u5E94\u7528,\u6DFB\u52A0\u4FEE\u6539\u4E3B\u9898\u6309\u94AE,\u53EF\u5FEB\u901F\u4FEE\u6539\u4E3B\u9898\u989C\u8272</li>
</ul>
<h2 id="\u{1F308}-0-1-3-2024-03-15">\u{1F308} 0.1.3 <code>2024-03-15</code> <a class="header-anchor" href="#\u{1F308}-0-1-3-2024-03-15"></a></h2>
<h3 id="\u{1F680}-features-3">\u{1F680} Features <a class="header-anchor" href="#\u{1F680}-features-3"></a></h3>
<ul>
<li><code>TDButton</code>:
<ul>
<li>add:\u652F\u6301\u901A\u8FC7TDButtonStyle.radius\u81EA\u5B9A\u4E49\u5706\u89D2\u5927\u5C0F</li>
</ul>
</li>
<li><code>TDPicker</code>:
<ul>
<li>add: picker\u7EC4\u4EF6\u6EDA\u52A8PC\u652F\u6301\u9F20\u6807\u62D6\u62FD</li>
<li>add: TDPicker\u548CTDDatePicker\u7EC4\u4EF6,onConfirm\u5185\u90E8\u4E0D\u5728\u9ED8\u8BA4pop\u5F39\u7A97\u7EC4\u4EF6,\u5141\u8BB8\u5916\u90E8\u81EA\u5B9A\u4E49\u5904\u7406;OnCancel\u4E0D\u4E3A\u7A7A\u65F6\u4E0D\u518D\u81EA\u52A8pop\u7EC4\u4EF6</li>
</ul>
</li>
<li><code>TDSwitch</code>:
<ul>
<li>add: onChanged\u652F\u6301\u5916\u90E8\u6307\u5B9A\u662F\u5426\u6D88\u8D39\u4E8B\u4EF6,\u5982\u679C\u5DF2\u6D88\u8D39\u5219\u5185\u90E8\u4E0D\u518D\u5904\u7406(<a href="https://github.com/Tencent/tdesign-flutter/issues/27" target="_blank" rel="noopener noreferrer">#27</a>)</li>
</ul>
</li>
<li><code>TDBottomTabBar</code>:
<ul>
<li>add: \u589E\u52A0\u81EA\u5B9A\u4E49\u6807\u7B7E\u6587\u5B57\u6837\u5F0F,\u4F18\u5316labText\u548Cicon\u4F20\u9012\u53C2\u6570(<a href="https://github.com/Tencent/tdesign-flutter/issues/49" target="_blank" rel="noopener noreferrer">#49</a>)</li>
</ul>
</li>
</ul>
<h3 id="\u{1F41E}-bug-fixes-3">\u{1F41E} Bug Fixes <a class="header-anchor" href="#\u{1F41E}-bug-fixes-3"></a></h3>
<ul>
<li><code>TDNavBar</code>:
<ul>
<li>fix: NavBar\u9876\u90E8\u9AD8\u5EA6\u6539\u4E3A\u5B9E\u65F6\u83B7\u53D6,\u9632\u6B62\u6700\u5F00\u59CB\u7684\u65F6\u5019\u62FF\u4E0D\u5230(<a href="https://github.com/Tencent/tdesign-flutter/issues/34" target="_blank" rel="noopener noreferrer">#34</a>)</li>
</ul>
</li>
<li><code>TDDialog</code>:
<ul>
<li>fix: DialogInfo \u4E2D contentColor \u53C2\u6570\u6CA1\u6709\u4F20\u8FDB\u53BB (<a href="https://github.com/Tencent/tdesign-flutter/pull/37" target="_blank" rel="noopener noreferrer">#37</a>)</li>
</ul>
</li>
<li><code>TDButton</code>:
<ul>
<li>fix: TDButton\u70B9\u51FB\u7981\u7528\u6548\u679C\u65E0\u6548\u95EE\u9898 (<a href="https://github.com/Tencent/tdesign-flutter/issues/44" target="_blank" rel="noopener noreferrer">#44</a>)</li>
</ul>
</li>
<li><code>TDInput</code>:
<ul>
<li>fix: \u5220\u9664\u6309\u94AE\u5185\u90E8\u6CA1\u6709\u81EA\u52A8\u5237\u65B0\u7684\u95EE\u9898  (<a href="https://github.com/Tencent/tdesign-flutter/issues/30" target="_blank" rel="noopener noreferrer">#30</a>)</li>
<li>fix: \u4FEE\u590D\u8F93\u5165\u5185\u5BB9\u957F\u5EA6\u548CinputFormatters\u4E92\u65A5\u95EE\u9898  (<a href="https://github.com/Tencent/tdesign-flutter/issues/38" target="_blank" rel="noopener noreferrer">#38</a>)</li>
</ul>
</li>
<li><code>TDAlertDialog</code>:
<ul>
<li>fix: \u7EC4\u4EF6\u7684\u9ED8\u8BA4\u6309\u94AE\u7684\u64CD\u4F5C\u4E3A\u5F00\u653E (<a href="https://github.com/Tencent/tdesign-flutter/issues/40" target="_blank" rel="noopener noreferrer">#40</a>)</li>
</ul>
</li>
<li><code>TDRadio</code>:
<ul>
<li>fix: \u6C34\u5E73\u6392\u5217\u4F1A\u5F3A\u5236\u6DFB\u52A0\u4E0B\u5212\u7EBF (<a href="https://github.com/Tencent/tdesign-flutter/issues/40" target="_blank" rel="noopener noreferrer">#40</a>)</li>
</ul>
</li>
<li><code>TDTabBar</code>:
<ul>
<li>fix: indicatorColor\u4E0D\u751F\u6548\u95EE\u9898 (<a href="https://github.com/Tencent/tdesign-flutter/issues/31" target="_blank" rel="noopener noreferrer">#31</a>)</li>
</ul>
</li>
</ul>
<h3 id="\u{1F6A7}-others-3">\u{1F6A7} Others <a class="header-anchor" href="#\u{1F6A7}-others-3"></a></h3>
<ul>
<li>\u4F18\u5316\u4E86TDButton,TDText,TDTheme\u7B49\u5E38\u7528\u7EC4\u4EF6\u7684\u6027\u80FD</li>
</ul>
<h2 id="\u{1F308}-0-1-2-2024-01-08">\u{1F308} 0.1.2 <code>2024-01-08</code> <a class="header-anchor" href="#\u{1F308}-0-1-2-2024-01-08"></a></h2>
<h3 id="\u{1F680}-features-4">\u{1F680} Features <a class="header-anchor" href="#\u{1F680}-features-4"></a></h3>
<ul>
<li><code>TDImage</code>:
<ul>
<li>add:\u56FE\u7247\u589E\u52A0FitWidth\u7C7B\u578B\uFF0C\u4FEE\u6539\u5BF9\u5E94Demo\u9875\u9762 (<a href="https://github.com/Tencent/tdesign-flutter/pull/14" target="_blank" rel="noopener noreferrer">#14</a>)</li>
</ul>
</li>
<li><code>TDLoading</code>:
<ul>
<li>add: \u52A0\u8F7D\u6DFB\u52A0\u663E\u793A\u4E0E\u9690\u85CF\u7684\u65B9\u6CD5 (<a href="https://github.com/Tencent/tdesign-flutter/pull/15" target="_blank" rel="noopener noreferrer">#15</a>)</li>
</ul>
</li>
<li><code>TDPopup</code>:
<ul>
<li>add: \u6DFB\u52A0\u81EA\u5B9A\u4E49\u5706\u89D2\u652F\u6301 (<a href="https://github.com/Tencent/tdesign-flutter/pull/17" target="_blank" rel="noopener noreferrer">#17</a>)</li>
</ul>
</li>
<li><code>TDAvatar</code>:
<ul>
<li>add:\u5934\u50CF\u7C7B\u578B\u4E3A\u5B57\u7B26\u3001\u56FE\u6807\u65F6\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u80CC\u666F\u989C\u8272 (<a href="https://github.com/Tencent/tdesign-flutter/pull/20" target="_blank" rel="noopener noreferrer">#20</a>)</li>
</ul>
</li>
</ul>
<h3 id="\u{1F41E}-bug-fixes-4">\u{1F41E} Bug Fixes <a class="header-anchor" href="#\u{1F41E}-bug-fixes-4"></a></h3>
<ul>
<li><code>TDBottomTabBar</code>:
<ul>
<li>\u6DFB\u52A0\u5B89\u5168\u533A\u57DF,\u4FEE\u590D (<a href="https://github.com/Tencent/tdesign-flutter/issues/1" target="_blank" rel="noopener noreferrer">#1</a>)</li>
</ul>
</li>
<li><code>TDButton</code>:
<ul>
<li>update widget \u53EF\u66F4\u65B0\u6309\u94AEdisable\u72B6\u6001</li>
<li>fix: \u6309\u94AE\u70B9\u51FB\u6001\u8FC7\u77ED (<a href="https://github.com/Tencent/tdesign-flutter/pull/13" target="_blank" rel="noopener noreferrer">#13</a>)</li>
</ul>
</li>
<li><code>TDSwiper</code>:
<ul>
<li>fix: \u9002\u914Dswiper\u7AD6\u5411\u70B9\u6761\u72B6\u6837\u5F0F (<a href="https://github.com/Tencent/tdesign-flutter/pull/19" target="_blank" rel="noopener noreferrer">#19</a>)</li>
</ul>
</li>
<li><code>TDInput</code>:
<ul>
<li>fix: type\u4E3ATDInputType.twoLine\u4E0BleftLabelStyle\u8BBE\u7F6E\u4E0D\u751F\u6548 (<a href="https://github.com/Tencent/tdesign-flutter/pull/21" target="_blank" rel="noopener noreferrer">#21</a>)</li>
</ul>
</li>
</ul>
<h3 id="\u{1F6A7}-others-4">\u{1F6A7} Others <a class="header-anchor" href="#\u{1F6A7}-others-4"></a></h3>
<ul>
<li>\u4FEE\u6539\u6700\u4F4E\u517C\u5BB9\u7248\u672C\u4E3A3.7.0 (<a href="https://github.com/Tencent/tdesign-flutter/issues/3" target="_blank" rel="noopener noreferrer">#3</a>)</li>
</ul>
<h2 id="_0-1-1">0.1.1 <a class="header-anchor" href="#_0-1-1"></a></h2>
<ul>
<li>\u56DE\u9000\u4EE3\u7801\u89C4\u8303\uFF0C\u517C\u5BB93.7.x</li>
</ul>
<h2 id="_0-1-0">0.1.0 <a class="header-anchor" href="#_0-1-0"></a></h2>
<ul>
<li>\u53D1\u5E03\u6BD4\u8F83\u7A33\u5B9A\u7684\u7248\u672C\u5230pub</li>
</ul>
<h2 id="_0-0-9">0.0.9 <a class="header-anchor" href="#_0-0-9"></a></h2>
<ul>
<li>\u4FEE\u6539\u4EE3\u7801\u89C4\u8303</li>
</ul>
<h2 id="_0-0-8">0.0.8 <a class="header-anchor" href="#_0-0-8"></a></h2>
<ul>
<li>\u66F4\u65B0 License</li>
</ul>
<h2 id="_0-0-7">0.0.7 <a class="header-anchor" href="#_0-0-7"></a></h2>
<ul>
<li>\u4FEE\u6539 example\u7684main.dart</li>
</ul>
<h2 id="_0-0-6">0.0.6 <a class="header-anchor" href="#_0-0-6"></a></h2>
<ul>
<li>\u4FEE\u6539slider\u7EC4\u4EF6\uFF0C\u4F7F\u5176\u4E0Eflutter sdk \u7248\u672C\u89E3\u8026</li>
</ul>
<h2 id="_0-0-5">0.0.5 <a class="header-anchor" href="#_0-0-5"></a></h2>
<ul>
<li>\u53D1\u5E03\u5230pub\u4ED3\u5E93</li>
</ul>
<h2 id="_0-0-4">0.0.4 <a class="header-anchor" href="#_0-0-4"></a></h2>
<ul>
<li>\u4FEE\u590D\u4E00\u4E9B\u5DF2\u77E5bug</li>
</ul>
<h2 id="_0-0-3">0.0.3 <a class="header-anchor" href="#_0-0-3"></a></h2>
<ul>
<li>\u5220\u9664TDText\u4E2D\u76F8\u5173package\u7684\u9ED8\u8BA4\u503C\uFF0C\u5141\u8BB8package\u4F20null</li>
</ul>
<h2 id="_0-0-2">0.0.2 <a class="header-anchor" href="#_0-0-2"></a></h2>
<ul>
<li>\u66F4\u65B0ReadMe,\u4FEE\u6539\u5F15\u5165\u6587\u4EF6\u4E3A'tdesign_flutter.dart'</li>
</ul>
<h2 id="_0-0-1">0.0.1 <a class="header-anchor" href="#_0-0-1"></a></h2>
<ul>
<li>\u6B63\u5F0F\u53D1\u5E03\uFF0C\u5305\u542BTDButton\u7B4929\u4E2A\u7EC4\u4EF6,\u63D0\u4F9BTDTheme\u3001TDIcon\u7B49\u57FA\u7840\u5C5E\u6027</li>
</ul>
`,demoMd:"<td-doc-empty></td-doc-empty>",apiMd:"<td-doc-empty></td-doc-empty>",designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function u(d,c,h,s,f,g){const e=l("tdesign-doc");return a(),i(e)}var b=r(o,[["render",u]]);export{b as default};
