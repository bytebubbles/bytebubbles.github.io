import{T as t}from"./component.9b32f023.js";import{_ as n,d as a,r as s,o,c as l}from"./site.b6fa4b6e.js";const i=a({props:{docType:String},components:{TdesignDoc:t},provide:{info:{spline:"explain",toc:!0,title:"Flutter",description:"TDesign Flutter\u7EC4\u4EF6\u5E93\u3002",isComponent:!1,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686008,componentName:null,docMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#\u9884\u89C8">\u9884\u89C8</a></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#\u4F7F\u7528\u65B9\u6CD5">\u4F7F\u7528\u65B9\u6CD5</a></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#\u81EA\u5B9A\u4E49\u4E3B\u9898">\u81EA\u5B9A\u4E49\u4E3B\u9898</a><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</a></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#\u4E3B\u9898\u751F\u6210\u5668">\u4E3B\u9898\u751F\u6210\u5668</a></li></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#\u56FD\u9645\u5316">\u56FD\u9645\u5316</a></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#\u5E38\u89C1\u95EE\u9898">\u5E38\u89C1\u95EE\u9898</a></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#\u7EC4\u4EF6\u89C4\u5212">\u7EC4\u4EF6\u89C4\u5212</a></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#\u57FA\u7840\u5E93\u7248\u672C">\u57FA\u7840\u5E93\u7248\u672C</a></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#sdk\u4F9D\u8D56\u7248\u672C">SDK\u4F9D\u8D56\u7248\u672C</a></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#\u4EA4\u6D41\u53CD\u9988">\u4EA4\u6D41\u53CD\u9988</a></li></ol></nav><h2 id="\u9884\u89C8">\u9884\u89C8 <a class="header-anchor" href="#\u9884\u89C8"></a></h2>
<p>TDesign Flutter\u7EC4\u4EF6\u793A\u4F8B\u5E94\u7528
<br/>
Android\u8BF7\u626B\u7801\u4E0B\u8F7D\u9884\u89C8 \u2193
<br/>
<img width="260" src="/flutter/assets/qrcode/td_apk_qrcode.png" />
<br/>
iOS\u8BF7\u8FD0\u884C\u9879\u76EE\u9884\u89C8 \u2193
<br/>
<a href="https://github.com/Tencent/tdesign-flutter/tree/main/tdesign-component" target="_blank" rel="noopener noreferrer">https://github.com/Tencent/tdesign-flutter/tree/main/tdesign-component</a></p>
<h2 id="\u4F7F\u7528\u65B9\u6CD5">\u4F7F\u7528\u65B9\u6CD5 <a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5"></a></h2>
<ul>
<li>\u5728pubbspec.yaml\u5F15\u5165\u4F9D\u8D56\u3002</li>
</ul>
<div class="language-yaml"><pre v-pre><code>  <span class="token key atrule">dependencies</span><span class="token punctuation">:</span>
    <span class="token key atrule">tdesign_flutter</span><span class="token punctuation">:</span> ^0.1.0
</code></pre>
</div><ul>
<li>
<p>\u5728\u6587\u4EF6\u5934\u90E8\u5F15\u5165\uFF1A<code>import 'package:tdesign_flutter/tdesign_flutter.dart'; // \u7EC4\u4EF6\u5E93\u76F8\u5173\u7684\uFF0C\u53EA\u9700\u8981\u5F15\u5165\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u91CC\u9762\u66B4\u9732td\u524D\u7F00\u6240\u6709\u9700\u8981\u7684\u7C7B</code></p>
</li>
<li>
<p>\u53EF\u901A\u8FC7json\u6587\u4EF6\u914D\u7F6E\u989C\u8272/\u5B57\u4F53\u5C3A\u5BF8/\u5B57\u4F53\u6837\u5F0F/\u5706\u89D2/\u9634\u5F71\u7B49\u4E3B\u9898\u6837\u5F0F\u3002\u901A\u8FC7<code>TDTheme.of(context)\u6216\u8005TDTheme.defaultData()</code>\u83B7\u53D6\u4E3B\u9898\u6570\u636E\u3002\u5EFA\u8BAE\u7EC4\u4EF6\u90FD\u4F7F\u7528<code>TDTheme.of(context)</code>\u7684\uFF0C\u4E0D\u9700\u8981\u8DDF\u968F\u5C40\u90E8\u4E3B\u9898\u7684\u7EC4\u4EF6\uFF0C\u624D\u53EF\u4EE5\u4F7F\u7528<code>TDTheme.defaultData()</code>\u3002</p>
<p>\u989C\u8272\uFF0C\u5B57\u4F53\uFF0C\u5706\u89D2\u7B49\u4F7F\u7528\u793A\u4F8B\uFF1A</p>
</li>
</ul>
<div class="language-dart"><pre v-pre><code>    <span class="token class-name">TDTheme</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span>brandNormalColor
    <span class="token class-name">TDTheme</span><span class="token punctuation">.</span><span class="token function">defaultData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>fontBodyLarge
</code></pre>
</div><ul>
<li>
<p>TDesign\u7684Icon\u4E0D\u8DDF\u968F\u4E3B\u9898\uFF0C\u90FD\u662Fttf\u683C\u5F0F\uFF1A</p>
<p>\u4F7F\u7528\u793A\u4F8B\uFF1A
<code>Icon(TDIcons.activity)</code></p>
</li>
<li>
<p>\u4F7F\u7528\u793A\u4F8B\uFF1A<code>example/lib/page/</code></p>
</li>
</ul>
<h2 id="\u81EA\u5B9A\u4E49\u4E3B\u9898">\u81EA\u5B9A\u4E49\u4E3B\u9898 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u4E3B\u9898"></a></h2>
<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5"></a></h3>
<p>\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u4E3B\u9898\u7684\u65B9\u5F0F:</p>
<div class="language-"><pre v-pre><code>    MaterialApp(
      theme: ThemeData(
        extensions: [TDThemeData.fromJson(&#39;test&#39;, testThemeConfig)!],
      )
      \u2026\u2026
    )
</code></pre>
</div><p>\u81EA\u5B9A\u4E49\u4E3B\u9898\u5C5E\u6027,\u5E38\u7528\u53EF\u8BBE\u7F6E\u5C5E\u6027\u952E\u503C\u8BF7\u53C2\u8003<a href="lib/src/theme/td_default_theme.dart">td_default_theme.dart</a>:</p>
<div class="language-"><pre v-pre><code>    String testThemeConfig = &#39;&#39;&#39;
      {
        &quot;test&quot;: {
            &quot;color&quot;: {
                &quot;brandNormalColor&quot;: &quot;#D7B386&quot;
            },
            &quot;font&quot;: {
                &quot;fontBodyMedium&quot;: {
                    &quot;size&quot;: 40,
                    &quot;lineHeight&quot;: 55
                }
            }
        }
    }
  &#39;&#39;&#39;;
</code></pre>
</div><h3 id="\u4E3B\u9898\u751F\u6210\u5668">\u4E3B\u9898\u751F\u6210\u5668 <a class="header-anchor" href="#\u4E3B\u9898\u751F\u6210\u5668"></a></h3>
<p>\u5982\u679C\u4F60\u4E0D\u60F3\u81EA\u5B9A\u4E49\u592A\u591A\u989C\u8272,\u4F46\u662F\u60F3\u8981\u62E5\u6709\u597D\u770B\u7684\u81EA\u5B9A\u4E49\u4E3B\u9898,&quot;\u4E3B\u9898\u751F\u6210\u5668&quot;\u662F\u4E2A\u4E0D\u9519\u7684\u9009\u62E9.</p>
<p>1.\u8FDB\u5165<a href="https://tdesign.tencent.com/vue/custom-theme" target="_blank" rel="noopener noreferrer">TDesign\u5B98\u7F51</a> ,\u70B9\u51FB\u4E0B\u65B9\u7684\u4E3B\u9898\u751F\u6210\u5668,\u7136\u540E\u518D\u53F3\u8FB9\u751F\u6210\u5668\u91CC\u9009\u62E9\u60F3\u8981\u7684\u989C\u8272,\u70B9\u51FB\u4E0B\u8F7D</p>
<p><img src="/flutter/assets/theme_generator.png" alt="img.png"></p>
<p><img src="/flutter/assets/select_color.png" alt="img.png"></p>
<p>2.\u6B64\u65F6\u4F60\u5F97\u5230\u662F\u4E00\u4E2Atheme.css\u6587\u4EF6,\u53EF\u4EE5\u5C06\u8BE5\u6587\u4EF6\u653E\u5230tdesign-component/example/shell/theme/\u6587\u4EF6\u5939\u4E0B,\u628A\u8BE5\u6587\u4EF6\u5939\u4E0B\u7684css2JsonTheme.dart\u4FEE\u6539\u4E3A\u4F60\u81EA\u5DF1\u7684\u6587\u4EF6\u540D\u3001\u4E3B\u9898\u540D\u548C\u8F93\u51FA\u8DEF\u5F84,\u5373\u53EF\u5F97\u5230\u4E00\u4E2Atheme.json\u6587\u4EF6
<img src="/flutter/assets/dart_modify.png" alt="img.png"></p>
<p>3.\u5C06\u4E3B\u9898json\u52A0\u8F7D\u8FDBTDTheme,\u7F8E\u89C2\u7684\u81EA\u5B9A\u4E49\u4E3B\u9898\u5C31\u8BBE\u7F6E\u5B8C\u6210\u4E86.</p>
<div class="language-"><pre v-pre><code>    // \u5F00\u542F\u591A\u5957\u4E3B\u9898\u529F\u80FD
    TDTheme.needMultiTheme();

    var jsonString = await rootBundle.loadString(&#39;assets/theme.json&#39;);
    var _themeData = TDThemeData.fromJson(&#39;green&#39;, jsonString);
    // \u2026\u2026
    MaterialApp(
      title: &#39;TDesign Flutter Example&#39;,
      theme: ThemeData(
      extensions: [_themeData],
      home: MyHomePage(title: &#39;TDesign Flutter \u7EC4\u4EF6\u5E93&#39;),
    );
</code></pre>
</div><h2 id="\u56FD\u9645\u5316">\u56FD\u9645\u5316 <a class="header-anchor" href="#\u56FD\u9645\u5316"></a></h2>
<p>TD\u7EC4\u4EF6\u5E93\u5185\u90E8\u4E0D\u5185\u7F6E\u56FD\u9645\u5316\u8BED\u8A00,\u4F46\u652F\u6301\u4E0Eflutter\u7684\u56FD\u9645\u5316\u80FD\u529B\u642D\u914D\u4F7F\u7528.\u53EF\u4EE5\u7EE7\u627FTDResourceDelegate\u7C7B,\u8BE5\u7C7B\u62BD\u79BB\u4E86\u7EC4\u4EF6\u5185\u90E8\u6240\u6709\u6587\u5B57\u8D44\u6E90,\u91CD\u65B0\u83B7\u53D6\u6587\u5B57\u7684\u65B9\u6CD5,\u8FDB\u884C\u56FD\u9645\u5316\u5904\u7406,\u5E76\u901A\u8FC7 TDTheme.setResourceBuilder \u6CE8\u5165.
\u793A\u4F8B\u4EE3\u7801:</p>
<ol>
<li>\u91CD\u5199TDResourceDelegate\u7C7B:</li>
</ol>
<div class="language-"><pre v-pre><code>/// \u56FD\u9645\u5316\u8D44\u6E90\u4EE3\u7406
class IntlResourceDelegate extends TDResourceDelegate {
  IntlResourceDelegate(this.context);

  BuildContext context;

  /// \u56FD\u9645\u5316\u9700\u8981\u6BCF\u6B21\u66F4\u65B0context
  updateContext(BuildContext context){
    this.context = context;
  }

  @override
  String get cancel =&gt; AppLocalizations.of(context)!.cancel;

  @override
  String get confirm =&gt; AppLocalizations.of(context)!.confirm;

}
</code></pre>
</div><p>2.\u6CE8\u5165TDResourceDelegate\u7C7B:</p>
<div class="language-"><pre v-pre><code>    var delegate = IntlResourceDelegate(context);
    return MaterialApp(
      home: Builder(
        builder: (context) {
          // \u8BBE\u7F6E\u6587\u6848\u4EE3\u7406,\u56FD\u9645\u5316\u9700\u8981\u5728MaterialApp\u521D\u59CB\u5316\u5B8C\u6210\u4E4B\u540E\u624D\u751F\u6548,\u800C\u4E14\u9700\u8981\u6BCF\u6B21\u66F4\u65B0context
          TDTheme.setResourceBuilder((context) =&gt; delegate..updateContext(context), needAlwaysBuild: true);
          return MyHomePage(
            title: AppLocalizations.of(context)?.components ?? &#39;&#39;,
          );
        },
      ),
      // \u8BBE\u7F6E\u56FD\u9645\u5316\u5904\u7406
      locale: locale,
      supportedLocales: AppLocalizations.supportedLocales,
      localizationsDelegates: AppLocalizations.localizationsDelegates,
    );
</code></pre>
</div><p>3.flutter\u56FD\u9645\u5316\u914D\u7F6E\u65B9\u6CD5,\u5B98\u65B9\u6587\u6863:<a href="https://docs.flutter.cn/ui/accessibility-and-internationalization/internationalization" target="_blank" rel="noopener noreferrer">Flutter \u5E94\u7528\u91CC\u7684\u56FD\u9645\u5316</a></p>
<h2 id="\u5E38\u89C1\u95EE\u9898">\u5E38\u89C1\u95EE\u9898 <a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898"></a></h2>
<ul>
<li>\u6587\u672C\u5C45\u4E2D:</li>
</ul>
<blockquote>
<p>0.1.4\u7248\u672C:Flutter 3.16\u4E4B\u540E,\u4FEE\u6539\u4E86\u6E32\u67D3\u5F15\u64CE,\u5BFC\u81F4\u542F\u7528forceVerticalCenter\u53C2\u6570\u7684\u7EC4\u4EF6\u5B57\u4F53\u504F\u79FB\u66F4\u591A,\u4E0D\u518D\u5C45\u4E2D.\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6EkTextForceVerticalCenterEnable=false\u6765\u7981\u7528\u5B57\u4F53\u5C45\u4E2D\u529F\u80FD,\u8BA9\u7EC4\u4EF6\u663E\u793A\u4E0E\u5B98\u65B9Text\u4E00\u81F4</p>
<p>0.1.5\u7248\u672C:\u9002\u914D\u4E86Android\u548CiOS\u53CC\u7AEF\u57FA\u7840\u7CFB\u7EDF\u5B57\u4F53\u7684\u4E2D\u6587\u5C45\u4E2D,\u5176\u4ED6\u8BED\u8A00\u7684\u5B57\u4F53,\u53EF\u4EE5\u901A\u8FC7\u91CD\u5199TDTextPaddingConfig\u7684paddingRate\u548CpaddingExtraRate\u8FDB\u884C\u81EA\u5B9A\u4E49\u9002\u914D,TDTextPaddingConfig\u4F7F\u7528\u65B9\u6CD5\u53EF\u53C2\u8003TDTextPage.</p>
</blockquote>
<h2 id="\u7EC4\u4EF6\u89C4\u5212">\u7EC4\u4EF6\u89C4\u5212 <a class="header-anchor" href="#\u7EC4\u4EF6\u89C4\u5212"></a></h2>
<ul>
<li>
<p>\u5F00\u53D1\u4E2D\u7EC4\u4EF6: NoticeBar,Rate,Calendar,Indexs,ActionSheet,Progress,Footer,Result,Message,Popover,Table</p>
</li>
<li>
<p>\u5F85\u5F00\u53D1\u7EC4\u4EF6: Form,Upload</p>
</li>
<li>
<p>\u5176\u4ED6\u4E8B\u9879: API\u4F18\u5316,\u5355\u5143\u6D4B\u8BD5,\u591A\u7AEF\u9002\u914D</p>
</li>
</ul>
<h2 id="\u57FA\u7840\u5E93\u7248\u672C">\u57FA\u7840\u5E93\u7248\u672C <a class="header-anchor" href="#\u57FA\u7840\u5E93\u7248\u672C"></a></h2>
<p>\u6700\u4F4E\u57FA\u7840\u5E93\u7248\u672C\uFF1A<code>^0.1.0</code></p>
<h2 id="sdk\u4F9D\u8D56\u7248\u672C">SDK\u4F9D\u8D56\u7248\u672C <a class="header-anchor" href="#sdk\u4F9D\u8D56\u7248\u672C"></a></h2>
<p>dart: &quot;&gt;=2.19.0 &lt;4.0.0&quot;</p>
<p>flutter: &quot;&gt;=3.7.0&quot;</p>
<h2 id="\u4EA4\u6D41\u53CD\u9988">\u4EA4\u6D41\u53CD\u9988 <a class="header-anchor" href="#\u4EA4\u6D41\u53CD\u9988"></a></h2>
<br/>
<img width="260" src="/flutter/assets/qrcode/feedback.png" />
<br/>
<h1 id="\u81F4\u8C22">\u81F4\u8C22 <a class="header-anchor" href="#\u81F4\u8C22"></a></h1>
<p>TDesign Flutter \u4F9D\u8D56\u4EE5\u4E0B\u7EC4\u4EF6\u5E93,\u611F\u8C22\u4F5C\u8005\u7684\u5F00\u6E90\u8D21\u732E:</p>
<p><a href="https://pub-web.flutter-io.cn/packages/easy_refresh" target="_blank" rel="noopener noreferrer">flutter_easyrefresh</a></p>
<p><a href="https://pub-web.flutter-io.cn/packages/flutter_swiper" target="_blank" rel="noopener noreferrer">flutter_swiper</a></p>
<p><a href="https://pub-web.flutter-io.cn/packages/flutter_slidable" target="_blank" rel="noopener noreferrer">flutter_slidable</a></p>
`,demoMd:"<td-doc-empty></td-doc-empty>",apiMd:"<td-doc-empty></td-doc-empty>",designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function r(c,p,d,u,g,h){const e=s("tdesign-doc");return o(),l(e)}var _=n(i,[["render",r]]);export{_ as default};
