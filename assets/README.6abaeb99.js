import{T as t}from"./component.f9e366e0.js";import{_ as e,d as a,r,o as i,c as o}from"./site.66dd0425.js";const s=a({props:{docType:String},components:{TdesignDoc:t},provide:{info:{spline:"base",toc:!0,title:"Swiper \u8F6E\u64AD\u56FE",description:null,isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686020,componentName:"swiper",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span> 
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:flutter_swiper_null_safety/flutter_swiper_null_safety.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_swiper_page.dart" target="_blank" rel="noopener noreferrer">td_swiper_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u70B9\u72B6(dots)</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildDotsSwiper(BuildContext context) {
    return Swiper(
      autoplay: true,
      itemCount: 6,
      loop: true,
      pagination: const SwiperPagination(
          alignment: Alignment.bottomCenter,
          builder: TDSwiperPagination.dots),
      itemBuilder: (BuildContext context, int index) {
        return const TDImage(assetUrl: 'assets/img/image.png',);
      },
    );
  }</pre>
</td-code-block>
<p>\u70B9\u6761\u72B6(dots-bar)</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildDotsBarSwiper(BuildContext context) {
    return Swiper(
      autoplay: true,
      itemCount: 6,
      loop: true,
      pagination: const SwiperPagination(
          alignment: Alignment.bottomCenter,
          builder: TDSwiperPagination.dotsBar),
      itemBuilder: (BuildContext context, int index) {
        return const TDImage(assetUrl: 'assets/img/image.png',);
      },
    );
  }</pre>
</td-code-block>
<p>\u5206\u5F0F(fraction)</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildFractionSwiper(BuildContext context) {
    return Swiper(
      autoplay: true,
      itemCount: 6,
      loop: true,
      pagination: const SwiperPagination(
          alignment: Alignment.bottomCenter,
          builder: TDSwiperPagination.fraction),
      itemBuilder: (BuildContext context, int index) {
        return const TDImage(assetUrl: 'assets/img/image.png',);
      },
    );
  }</pre>
</td-code-block>
<p>\u5207\u6362\u6309\u94AE(controls)</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildControlsSwiper(BuildContext context) {
    return Swiper(
      // autoplay: true,
      itemCount: 6,
      loop: true,
      pagination: const SwiperPagination(
          alignment: Alignment.center,
          builder: TDSwiperPagination.controls),
      itemBuilder: (BuildContext context, int index) {
        return const TDImage(assetUrl: 'assets/img/image.png',);
      },
    );
  }</pre>
</td-code-block>
<p>\u5361\u7247\u5F0F(cards)</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildCardsSwiper(BuildContext context) {
    return Swiper(
      viewportFraction: 0.75,
      outer: true,
      autoplay: true,
      itemCount: 6,
      loop: true,
      transformer: TDPageTransformer.margin(),
      pagination: const SwiperPagination(
          alignment: Alignment.center,
          builder: TDSwiperPagination.dots),
      itemBuilder: (BuildContext context, int index) {
        return const TDImage(assetUrl: 'assets/img/image.png',);
      },
    );
  }</pre>
</td-code-block>
<p>\u5361\u7247\u5F0F(cards)-scale:0.8</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildScaleCardsSwiper(BuildContext context) {
    return Swiper(
      viewportFraction: 0.75,
      outer: true,
      autoplay: true,
      itemCount: 6,
      loop: true,
      transformer: TDPageTransformer.scaleAndFade(),
      pagination: const SwiperPagination(
          alignment: Alignment.center,
          builder: TDSwiperPagination.dots),
      itemBuilder: (BuildContext context, int index) {
        return const TDImage(assetUrl: 'assets/img/image.png',);
      },
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u6837\u5F0F">1 \u7EC4\u4EF6\u6837\u5F0F <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u6837\u5F0F"></a></h3>
<p>\u5185\u90E8</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildDotsSwiper(BuildContext context) {
    return Swiper(
      autoplay: true,
      itemCount: 6,
      loop: true,
      pagination: const SwiperPagination(
          alignment: Alignment.bottomCenter,
          builder: TDSwiperPagination.dots),
      itemBuilder: (BuildContext context, int index) {
        return const TDImage(assetUrl: 'assets/img/image.png',);
      },
    );
  }</pre>
</td-code-block>
<p>\u5916\u90E8</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildOuterDotsSwiper(BuildContext context) {
    return Swiper(
      autoplay: true,
      itemCount: 6,
      loop: true,
      outer: true,
      pagination: const SwiperPagination(
          alignment: Alignment.bottomCenter,
          builder: TDSwiperPagination.dots),
      itemBuilder: (BuildContext context, int index) {
        return const TDImage(assetUrl: 'assets/img/image.png',);
      },
    );
  }</pre>
</td-code-block>
<p>\u53F3\u8FB9(\u7AD6\u5411)</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildRightDotsSwiper(BuildContext context) {
    return Swiper(
      autoplay: true,
      itemCount: 6,
      loop: true,
      scrollDirection: Axis.vertical,
      pagination: const SwiperPagination(
          alignment: Alignment.centerRight,
          builder: TDSwiperPagination.dots),
      itemBuilder: (BuildContext context, int index) {
        return const TDImage(assetUrl: 'assets/img/image.png',);
      },
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdpagetransformer">TDPageTransformer</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdswiperpagination">TDSwiperPagination</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdpagetransformer">TDPageTransformer <a class="header-anchor" href="#tdpagetransformer"></a></h3>
<h4 id="\u7B80\u4ECB">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB"></a></h4>
<p>TD\u9ED8\u8BA4PageTransformer</p>
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
<td>fade</td>
<td>double?</td>
<td>-</td>
<td>\u6DE1\u5316\u6BD4\u4F8B</td>
</tr>
<tr>
<td>scale</td>
<td>double?</td>
<td>-</td>
<td>\u7F29\u653E\u6BD4\u4F8B</td>
</tr>
<tr>
<td>margin</td>
<td>double?</td>
<td>-</td>
<td>\u5DE6\u53F3\u95F4\u9694</td>
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
<td>TDPageTransformer.margin</td>
<td>\u666E\u901Amargin\u7684\u5361\u7247\u5F0F</td>
</tr>
<tr>
<td>TDPageTransformer.scaleAndFade</td>
<td>\u7F29\u653E\u6216\u900F\u660E\u7684\u5361\u7247\u5F0F</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tdswiperpagination">TDSwiperPagination <a class="header-anchor" href="#tdswiperpagination"></a></h3>
<h4 id="\u7B80\u4ECB-1">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB-1"></a></h4>
<p>TDesign\u98CE\u683C\u7684Swiper\u6307\u793A\u5668\u6837\u5F0F\uFF0C\u4E0Eflutter_swiper\u7684Swiper\u7ED3\u5408\u4F7F\u7528</p>
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
<td>alignment</td>
<td>Alignment?</td>
<td>-</td>
<td>\u5F53 scrollDirection== Axis.horizontal \u65F6\uFF0C\u9ED8\u8BA4Alignment.bottomCenter</td>
</tr>
<tr>
<td>key</td>
<td>Key?</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>margin</td>
<td>EdgeInsetsGeometry</td>
<td>const EdgeInsets.all(10.0)</td>
<td>\u6307\u793A\u5668\u548Ccontainer\u4E4B\u95F4\u7684\u8DDD\u79BB</td>
</tr>
<tr>
<td>builder</td>
<td>SwiperPlugin</td>
<td>TDSwiperPagination.dots</td>
<td>\u5177\u4F53\u6837\u5F0F</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function d(l,p,c,g,u,m){const n=r("tdesign-doc");return i(),o(n)}var D=e(s,[["render",d]]);export{D as default};
