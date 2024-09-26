import{T as n}from"./component.f9e366e0.js";import{_ as e,d as o,r as d,o as r,c as i}from"./site.66dd0425.js";const a=o({props:{docType:String},components:{TdesignDoc:n},provide:{info:{spline:"base",toc:!0,title:"Popup \u5F39\u51FA\u5C42",description:"\u7531\u5176\u4ED6\u63A7\u4EF6\u89E6\u53D1\uFF0C\u5C4F\u5E55\u6ED1\u51FA\u6216\u5F39\u51FA\u4E00\u5757\u81EA\u5B9A\u4E49\u5185\u5BB9\u533A\u57DF",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686019,componentName:"popup",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_popup_page.dart" target="_blank" rel="noopener noreferrer">td_popup_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildPopFromTop(BuildContext context) {
    return TDButton(
      text: '\u9876\u90E8\u5F39\u51FA',
      isBlock: true,
      theme: TDButtonTheme.primary,
      type: TDButtonType.outline,
      size: TDButtonSize.large,
      onTap: () {
        Navigator.of(context).push(TDSlidePopupRoute(
            modalBarrierColor: TDTheme.of(context).fontGyColor2,
            slideTransitionFrom: SlideTransitionFrom.top,
            open: () {
              print('open');
            },
            opened: () {
              print('opened');
            },
            builder: (context) {
              return Container(
                color: Colors.white,
                height: 240,
              );
            }));
      },
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildPopFromLeft(BuildContext context) {
    return TDButton(
      text: '\u5DE6\u4FA7\u5F39\u51FA',
      isBlock: true,
      theme: TDButtonTheme.primary,
      type: TDButtonType.outline,
      size: TDButtonSize.large,
      onTap: () {
        Navigator.of(context).push(TDSlidePopupRoute(
            modalBarrierColor: TDTheme.of(context).fontGyColor2,
            slideTransitionFrom: SlideTransitionFrom.left,
            builder: (context) {
              return Container(
                color: Colors.white,
                width: 280,
              );
            }));
      },
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildPopFromCenter(BuildContext context) {
    return TDButton(
      text: '\u4E2D\u95F4\u5F39\u51FA',
      isBlock: true,
      theme: TDButtonTheme.primary,
      type: TDButtonType.outline,
      size: TDButtonSize.large,
      onTap: () {
        Navigator.of(context).push(TDSlidePopupRoute(
            modalBarrierColor: TDTheme.of(context).fontGyColor2,
            slideTransitionFrom: SlideTransitionFrom.center,
            builder: (context) {
              return Container(
                color: Colors.white,
                width: 240,
                height: 240,
              );
            }));
      },
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildPopFromBottom(BuildContext context) {
    return TDButton(
      text: '\u5E95\u90E8\u5F39\u51FA',
      isBlock: true,
      theme: TDButtonTheme.primary,
      type: TDButtonType.outline,
      size: TDButtonSize.large,
      onTap: () {
        Navigator.of(context).push(TDSlidePopupRoute(
            modalBarrierColor: TDTheme.of(context).fontGyColor2,
            slideTransitionFrom: SlideTransitionFrom.bottom,
            builder: (context) {
              return Container(
                color: Colors.white,
                height: 240,
              );
            }));
      },
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildPopFromRight(BuildContext context) {
    return TDButton(
      text: '\u53F3\u4FA7\u5F39\u51FA',
      isBlock: true,
      theme: TDButtonTheme.primary,
      type: TDButtonType.outline,
      size: TDButtonSize.large,
      onTap: () {
        Navigator.of(context).push(TDSlidePopupRoute(
            modalBarrierColor: TDTheme.of(context).fontGyColor2,
            slideTransitionFrom: SlideTransitionFrom.right,
            builder: (context) {
              return Container(
                color: Colors.white,
                width: 280,
              );
            }));
      },
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u793A\u4F8B">1 \u7EC4\u4EF6\u793A\u4F8B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u793A\u4F8B"></a></h3>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildPopFromBottomWithOperationAndTitle(BuildContext context) {
    return TDButton(
      text: '\u5E95\u90E8\u5F39\u51FA\u5C42-\u5E26\u6807\u9898\u53CA\u64CD\u4F5C',
      isBlock: true,
      theme: TDButtonTheme.primary,
      type: TDButtonType.outline,
      size: TDButtonSize.large,
      onTap: () {
        Navigator.of(context).push(TDSlidePopupRoute(
            modalBarrierColor: TDTheme.of(context).fontGyColor2,
            slideTransitionFrom: SlideTransitionFrom.bottom,
            builder: (context) {
              return TDPopupBottomConfirmPanel(
                title: '\u6807\u9898\u6587\u5B57',
                leftClick: () {
                  Navigator.maybePop(context);
                },
                rightClick: () {
                  TDToast.showText('\u786E\u5B9A', context: context);
                  Navigator.maybePop(context);
                },
                child: Container(
                  height: 200,
                ),
              );
            }));
      },
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildPopFromBottomWithOperation(BuildContext context) {
    return TDButton(
      text: '\u5E95\u90E8\u5F39\u51FA\u5C42-\u5E26\u64CD\u4F5C',
      isBlock: true,
      theme: TDButtonTheme.primary,
      type: TDButtonType.outline,
      size: TDButtonSize.large,
      onTap: () {
        Navigator.of(context).push(TDSlidePopupRoute(
            modalBarrierColor: TDTheme.of(context).fontGyColor2,
            slideTransitionFrom: SlideTransitionFrom.bottom,
            builder: (context) {
              return TDPopupBottomConfirmPanel(
                leftClick: () {
                  Navigator.maybePop(context);
                },
                rightClick: () {
                  TDToast.showText('\u786E\u5B9A', context: context);
                  Navigator.maybePop(context);
                },
                child: Container(
                  height: 200,
                ),
              );
            }));
      },
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildPopFromBottomWithCloseAndTitle(BuildContext context) {
    return TDButton(
      text: '\u5E95\u90E8\u5F39\u51FA\u5C42-\u5E26\u6807\u9898\u53CA\u5173\u95ED',
      isBlock: true,
      theme: TDButtonTheme.primary,
      type: TDButtonType.outline,
      size: TDButtonSize.large,
      onTap: () {
        Navigator.of(context).push(TDSlidePopupRoute(
            modalBarrierColor: TDTheme.of(context).fontGyColor2,
            slideTransitionFrom: SlideTransitionFrom.bottom,
            builder: (context) {
              return TDPopupBottomDisplayPanel(
                title: '\u6807\u9898\u6587\u5B57',
                closeClick: () {
                  Navigator.maybePop(context);
                },
                child: Container(
                  height: 200,
                ),
              );
            }));
      },
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildPopFromBottomWithCloseAndLeftTitle(BuildContext context) {
    return TDButton(
      text: '\u5E95\u90E8\u5F39\u51FA\u5C42-\u5E26\u5DE6\u8FB9\u6807\u9898\u53CA\u5173\u95ED',
      isBlock: true,
      theme: TDButtonTheme.primary,
      type: TDButtonType.outline,
      size: TDButtonSize.large,
      onTap: () {
        Navigator.of(context).push(TDSlidePopupRoute(
            modalBarrierColor: TDTheme.of(context).fontGyColor2,
            slideTransitionFrom: SlideTransitionFrom.bottom,
            builder: (context) {
              return TDPopupBottomDisplayPanel(
                title: '\u6807\u9898\u6587\u5B57',
                titleLeft: true,
                closeClick: () {
                  Navigator.maybePop(context);
                },
                child: Container(
                  height: 200,
                ),
              );
            }));
      },
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildPopFromBottomWithClose(BuildContext context) {
    return TDButton(
      text: '\u5E95\u90E8\u5F39\u51FA\u5C42-\u5E26\u5173\u95ED',
      isBlock: true,
      theme: TDButtonTheme.primary,
      type: TDButtonType.outline,
      size: TDButtonSize.large,
      onTap: () {
        Navigator.of(context).push(TDSlidePopupRoute(
            modalBarrierColor: TDTheme.of(context).fontGyColor2,
            slideTransitionFrom: SlideTransitionFrom.bottom,
            builder: (context) {
              return TDPopupBottomDisplayPanel(
                closeClick: () {
                  Navigator.maybePop(context);
                },
                child: Container(
                  height: 200,
                ),
              );
            }));
      },
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildPopFromBottomWithTitle(BuildContext context) {
    return TDButton(
      text: '\u5E95\u90E8\u5F39\u51FA\u5C42-\u4EC5\u6807\u9898',
      isBlock: true,
      theme: TDButtonTheme.primary,
      type: TDButtonType.outline,
      size: TDButtonSize.large,
      onTap: () {
        Navigator.of(context).push(TDSlidePopupRoute(
            modalBarrierColor: TDTheme.of(context).fontGyColor2,
            slideTransitionFrom: SlideTransitionFrom.bottom,
            builder: (context) {
              return TDPopupBottomDisplayPanel(
                title: '\u6807\u9898\u6587\u5B57',
                hideClose: true,
                closeClick: () {
                  Navigator.maybePop(context);
                },
                child: Container(
                  height: 200,
                ),
              );
            }));
      },
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildPopFromCenterWithClose(BuildContext context) {
    return TDButton(
      text: '\u5C45\u4E2D\u5F39\u51FA\u5C42-\u5E26\u5173\u95ED',
      isBlock: true,
      theme: TDButtonTheme.primary,
      type: TDButtonType.outline,
      size: TDButtonSize.large,
      onTap: () {
        Navigator.of(context).push(TDSlidePopupRoute(
            modalBarrierColor: TDTheme.of(context).fontGyColor2,
            isDismissible: false,
            slideTransitionFrom: SlideTransitionFrom.center,
            builder: (context) {
              return TDPopupCenterPanel(
                closeClick: () {
                  Navigator.maybePop(context);
                },
                child: const SizedBox(
                  width: 240,
                  height: 240,
                ),
              );
            }));
      },
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildPopFromCenterWithUnderClose(BuildContext context) {
    return TDButton(
      text: '\u5C45\u4E2D\u5F39\u51FA\u5C42-\u5173\u95ED\u5728\u4E0B\u65B9',
      isBlock: true,
      theme: TDButtonTheme.primary,
      type: TDButtonType.outline,
      size: TDButtonSize.large,
      onTap: () {
        Navigator.of(context).push(TDSlidePopupRoute(
            modalBarrierColor: TDTheme.of(context).fontGyColor2,
            isDismissible: false,
            slideTransitionFrom: SlideTransitionFrom.center,
            builder: (context) {
              return TDPopupCenterPanel(
                closeUnderBottom: true,
                closeClick: () {
                  Navigator.maybePop(context);
                },
                child: const SizedBox(
                  width: 240,
                  height: 240,
                ),
              );
            }));
      },
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdslidepopuproute">TDSlidePopupRoute</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdpopupbottomdisplaypanel">TDPopupBottomDisplayPanel</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdpopupbottomconfirmpanel">TDPopupBottomConfirmPanel</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdpopupcenterpanel">TDPopupCenterPanel</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdslidepopuproute">TDSlidePopupRoute <a class="header-anchor" href="#tdslidepopuproute"></a></h3>
<h4 id="\u7B80\u4ECB">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB"></a></h4>
<p>\u4ECE\u5C4F\u5E55\u7684\u67D0\u4E2A\u65B9\u5411\u6ED1\u52A8\u5F39\u51FA\u7684Dialog\u6846\u7684\u8DEF\u7531\uFF0C\u6BD4\u5982\u4ECE\u9876\u90E8\u3001\u5E95\u90E8\u3001\u5DE6\u3001\u53F3\u6ED1\u51FA\u9875\u9762</p>
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
<td>builder</td>
<td>WidgetBuilder</td>
<td>-</td>
<td>\u63A7\u4EF6\u6784\u5EFA\u5668</td>
</tr>
<tr>
<td>barrierLabel</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>modalBarrierColor</td>
<td>Color?</td>
<td>Colors.black54</td>
<td>\u8499\u5C42\u989C\u8272</td>
</tr>
<tr>
<td>isDismissible</td>
<td>bool</td>
<td>true</td>
<td>\u70B9\u51FB\u8499\u5C42\u80FD\u5426\u5173\u95ED</td>
</tr>
<tr>
<td>modalBarrierFull</td>
<td>bool</td>
<td>false</td>
<td>\u662F\u5426\u5168\u5C4F\u663E\u793A\u8499\u5C42</td>
</tr>
<tr>
<td>slideTransitionFrom</td>
<td>SlideTransitionFrom</td>
<td>SlideTransitionFrom.bottom</td>
<td>\u8BBE\u7F6E\u4ECE\u5C4F\u5E55\u7684\u54EA\u4E2A\u65B9\u5411\u6ED1\u51FA</td>
</tr>
<tr>
<td>modalWidth</td>
<td>double?</td>
<td>-</td>
<td>\u5F39\u51FA\u6846\u5BBD\u5EA6</td>
</tr>
<tr>
<td>modalHeight</td>
<td>double?</td>
<td>-</td>
<td>\u5F39\u51FA\u6846\u9AD8\u5EA6</td>
</tr>
<tr>
<td>modalTop</td>
<td>double?</td>
<td>0</td>
<td>\u5F39\u51FA\u6846\u9876\u90E8\u8DDD\u79BB</td>
</tr>
<tr>
<td>modalLeft</td>
<td>double?</td>
<td>0</td>
<td>\u5F39\u51FA\u6846\u5DE6\u4FA7\u8DDD\u79BB</td>
</tr>
<tr>
<td>open</td>
<td>VoidCallback?</td>
<td>-</td>
<td>\u6253\u5F00\u524D\u4E8B\u4EF6</td>
</tr>
<tr>
<td>opened</td>
<td>VoidCallback?</td>
<td>-</td>
<td>\u6253\u5F00\u540E\u4E8B\u4EF6</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tdpopupbottomdisplaypanel">TDPopupBottomDisplayPanel <a class="header-anchor" href="#tdpopupbottomdisplaypanel"></a></h3>
<h4 id="\u7B80\u4ECB-1">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB-1"></a></h4>
<p>\u53F3\u4E0A\u89D2\u5E26\u5173\u95ED\u7684\u5E95\u90E8\u6D6E\u5C42\u9762\u677F</p>
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
<td>child</td>
<td>Widget</td>
<td>-</td>
<td>\u5B50\u63A7\u4EF6</td>
</tr>
<tr>
<td>title</td>
<td>String?</td>
<td>-</td>
<td>\u6807\u9898</td>
</tr>
<tr>
<td>titleColor</td>
<td>Color?</td>
<td>-</td>
<td>\u6807\u9898\u989C\u8272</td>
</tr>
<tr>
<td>titleLeft</td>
<td>bool</td>
<td>false</td>
<td>\u6807\u9898\u662F\u5426\u9760\u5DE6</td>
</tr>
<tr>
<td>hideClose</td>
<td>bool</td>
<td>false</td>
<td>\u662F\u5426\u9690\u85CF\u5173\u95ED\u6309\u94AE</td>
</tr>
<tr>
<td>closeColor</td>
<td>Color?</td>
<td>-</td>
<td>\u5173\u95ED\u6309\u94AE\u989C\u8272</td>
</tr>
<tr>
<td>closeClick</td>
<td>PopupClick?</td>
<td>-</td>
<td>\u5173\u95ED\u6309\u94AE\u70B9\u51FB\u56DE\u8C03</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>Color?</td>
<td>-</td>
<td>\u80CC\u666F\u989C\u8272</td>
</tr>
<tr>
<td>radius</td>
<td>double?</td>
<td>-</td>
<td>\u5706\u89D2</td>
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
</div><h3 id="tdpopupbottomconfirmpanel">TDPopupBottomConfirmPanel <a class="header-anchor" href="#tdpopupbottomconfirmpanel"></a></h3>
<h4 id="\u7B80\u4ECB-2">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB-2"></a></h4>
<p>\u5E26\u786E\u8BA4\u7684\u5E95\u90E8\u6D6E\u5C42\u9762\u677F</p>
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
<td>child</td>
<td>Widget</td>
<td>-</td>
<td>\u5B50\u63A7\u4EF6</td>
</tr>
<tr>
<td>title</td>
<td>String?</td>
<td>-</td>
<td>\u6807\u9898</td>
</tr>
<tr>
<td>titleColor</td>
<td>Color?</td>
<td>-</td>
<td>\u6807\u9898\u989C\u8272</td>
</tr>
<tr>
<td>leftText</td>
<td>String?</td>
<td>-</td>
<td>\u5DE6\u8FB9\u6587\u672C</td>
</tr>
<tr>
<td>leftTextColor</td>
<td>Color?</td>
<td>-</td>
<td>\u5DE6\u8FB9\u6587\u672C\u989C\u8272</td>
</tr>
<tr>
<td>leftClick</td>
<td>PopupClick?</td>
<td>-</td>
<td>\u5DE6\u8FB9\u6587\u672C\u70B9\u51FB\u56DE\u8C03</td>
</tr>
<tr>
<td>rightText</td>
<td>String?</td>
<td>-</td>
<td>\u53F3\u8FB9\u6587\u672C</td>
</tr>
<tr>
<td>rightTextColor</td>
<td>Color?</td>
<td>-</td>
<td>\u53F3\u8FB9\u6587\u672C\u989C\u8272</td>
</tr>
<tr>
<td>rightClick</td>
<td>PopupClick?</td>
<td>-</td>
<td>\u53F3\u8FB9\u6587\u672C\u70B9\u51FB\u56DE\u8C03</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>Color?</td>
<td>-</td>
<td>\u80CC\u666F\u989C\u8272</td>
</tr>
<tr>
<td>radius</td>
<td>double?</td>
<td>-</td>
<td>\u5706\u89D2</td>
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
</div><h3 id="tdpopupcenterpanel">TDPopupCenterPanel <a class="header-anchor" href="#tdpopupcenterpanel"></a></h3>
<h4 id="\u7B80\u4ECB-3">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB-3"></a></h4>
<p>\u5C45\u4E2D\u6D6E\u5C42\u9762\u677F</p>
<h4 id="\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5-3">\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5 <a class="header-anchor" href="#\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5-3"></a></h4>
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
<td>child</td>
<td>Widget</td>
<td>-</td>
<td>\u5B50\u63A7\u4EF6</td>
</tr>
<tr>
<td>closeUnderBottom</td>
<td>bool</td>
<td>false</td>
<td>\u5173\u95ED\u6309\u94AE\u662F\u5426\u5728\u89C6\u56FE\u6846\u4E0B\u65B9</td>
</tr>
<tr>
<td>closeColor</td>
<td>Color?</td>
<td>-</td>
<td>\u5173\u95ED\u6309\u94AE\u989C\u8272</td>
</tr>
<tr>
<td>closeClick</td>
<td>PopupClick?</td>
<td>-</td>
<td>\u5173\u95ED\u6309\u94AE\u70B9\u51FB\u56DE\u8C03</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>Color?</td>
<td>-</td>
<td>\u80CC\u666F\u989C\u8272</td>
</tr>
<tr>
<td>radius</td>
<td>double?</td>
<td>-</td>
<td>\u5706\u89D2</td>
</tr>
<tr>
<td>key</td>
<td></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function l(p,s,c,u,h,m){const t=d("tdesign-doc");return r(),i(t)}var b=e(a,[["render",l]]);export{b as default};
