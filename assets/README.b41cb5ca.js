import{T as t}from"./component.0f8980d6.js";import{_ as e,d as o,r,o as d,c as l}from"./site.4473ad53.js";const a=o({props:{docType:String},components:{TdesignDoc:t},provide:{info:{spline:"base",toc:!0,title:"Input \u8F93\u5165\u6846",description:"\u7528\u4E8E\u5728\u9884\u8BBE\u7684\u4E00\u7EC4\u9009\u9879\u4E2D\u6267\u884C\u5355\u9879\u9009\u62E9\uFF0C\u5E76\u5448\u73B0\u9009\u62E9\u7ED3\u679C\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686019,componentName:"input",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_input_page.dart" target="_blank" rel="noopener noreferrer">td_input_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u57FA\u7840\u8F93\u5165\u6846</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _basicTypeBasic(BuildContext context) {
    return Column(
      children: [
        TDInput(
          leftLabel: '\u6807\u7B7E\u6587\u5B57',
          controller: controller[0],
          backgroundColor: Colors.white,
          hintText: '\u8BF7\u8F93\u5165\u6587\u5B57',
          onChanged: (text) {
            setState(() {});
          },
          onClearTap: () {
            controller[0].clear();
            setState(() {});
          },
        ),
        const SizedBox(
          height: 16,
        )
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _basicTypeRequire(BuildContext context) {
    return Column(
      children: [
        TDInput(
          leftLabel: '\u6807\u7B7E\u6587\u5B57',
          required: true,
          controller: controller[1],
          backgroundColor: Colors.white,
          hintText: '\u8BF7\u8F93\u5165\u6587\u5B57',
          onChanged: (text) {
            setState(() {});
          },
          onClearTap: () {
            controller[1].clear();
            setState(() {});
          },
        ),
        const SizedBox(
          height: 16,
        )
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _basicTypeOptional(BuildContext context) {
    return Column(
      children: [
        TDInput(
          leftLabel: '\u6807\u7B7E\u6587\u5B57',
          controller: controller[2],
          backgroundColor: Colors.white,
          hintText: '\u8BF7\u8F93\u5165\u6587\u5B57(\u9009\u586B)',
          onChanged: (text) {
            setState(() {});
          },
          onClearTap: () {
            controller[2].clear();
            setState(() {});
          },
        ),
        const SizedBox(
          height: 16,
        )
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _basicTypePureInput(BuildContext context) {
    return Column(
      children: [
        TDInput(
          controller: controller[3],
          backgroundColor: Colors.white,
          hintText: '\u8BF7\u8F93\u5165\u6587\u5B57',
          onChanged: (text) {
            setState(() {});
          },
          onClearTap: () {
            controller[3].clear();
            setState(() {});
          },
        ),
        const SizedBox(
          height: 16,
        )
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _basicTypeAdditionalDesc(BuildContext context) {
    return TDInput(
      type: TDInputType.normal,
      leftLabel: '\u6807\u7B7E\u6587\u5B57',
      controller: controller[4],
      hintText: '\u8BF7\u8F93\u5165\u6587\u5B57',
      additionInfo: '\u8F85\u52A9\u8BF4\u660E',
      backgroundColor: Colors.white,
      onChanged: (text) {
        setState(() {});
      },
      onClearTap: () {
        controller[4].clear();
        setState(() {});
      },
    );
  }</pre>
</td-code-block>
<p>\u5E26\u5B57\u6570\u9650\u5236\u8F93\u5165\u6846</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _basicTypeTextLimit(BuildContext context) {
    return Column(
      children: [
        TDInput(
          type: TDInputType.normal,
          leftLabel: '\u6807\u7B7E\u6587\u5B57',
          controller: controller[5],
          hintText: '\u8BF7\u8F93\u5165\u6587\u5B57',
          maxLength: 10,
          additionInfo: '\u6700\u5927\u8F93\u516510\u4E2A\u5B57\u7B26',
          backgroundColor: Colors.white,
          onChanged: (text) {
            setState(() {});
          },
          onClearTap: () {
            controller[5].clear();
            setState(() {});
          },
        ),
        const SizedBox(
          height: 16,
        )
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _basicTypeTextLimitChinese2(BuildContext context) {
    return TDInput(
      type: TDInputType.normal,
      leftLabel: '\u6807\u7B7E\u6587\u5B57',
      controller: controller[6],
      hintText: '\u8BF7\u8F93\u5165\u6587\u5B57',
      inputFormatters: [Chinese2Formatter(10)],
      additionInfo: '\u6700\u5927\u8F93\u516510\u4E2A\u5B57\u7B26\uFF0C\u6C49\u5B57\u7B97\u4E24\u4E2A',
      backgroundColor: Colors.white,
      onChanged: (text) {
        setState(() {});
      },
      onClearTap: () {
        controller[6].clear();
        setState(() {});
      },
    );
  }</pre>
</td-code-block>
<p>\u5E26\u64CD\u4F5C\u8F93\u5165\u6846</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _basicTypeWithHandleIconOne(BuildContext context) {
    return Column(
      children: [
        TDInput(
          leftLabel: '\u6807\u7B7E\u6587\u5B57',
          controller: controller[7],
          backgroundColor: Colors.white,
          hintText: '\u8BF7\u8F93\u5165\u6587\u5B57',
          rightBtn: Icon(
            TDIcons.error_circle_filled,
            color: TDTheme.of(context).fontGyColor3,
          ),
          onBtnTap: () {
            TDToast.showText('\u70B9\u51FB\u53F3\u4FA7\u6309\u94AE', context: context);
          },
          onChanged: (text) {
            setState(() {});
          },
          onClearTap: () {
            controller[7].clear();
            setState(() {});
          },
        ),
        const SizedBox(
          height: 16,
        )
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _basicTypeWithHandleIconTwo(BuildContext context) {
    return Column(
      children: [
        TDInput(
          leftLabel: '\u6807\u7B7E\u6587\u5B57',
          controller: controller[8],
          backgroundColor: Colors.white,
          hintText: '\u8BF7\u8F93\u5165\u6587\u5B57',
          rightBtn: Container(
            alignment: Alignment.center,
            width: 73,
            height: 28,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(6),
              color: TDTheme.of(context).brandNormalColor,
            ),
            child: const TDButton(
              text: '\u64CD\u4F5C\u6309\u94AE',
              size: TDButtonSize.extraSmall,
              theme: TDButtonTheme.primary,
            ),
          ),
          onBtnTap: () {
            TDToast.showText('\u70B9\u51FB\u64CD\u4F5C\u6309\u94AE', context: context);
          },
          needClear: false,
        ),
        const SizedBox(
          height: 16,
        )
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _basicTypeWithHandleIconThree(BuildContext context) {
    return TDInput(
      leftLabel: '\u6807\u7B7E\u6587\u5B57',
      controller: controller[9],
      backgroundColor: Colors.white,
      hintText: '\u8BF7\u8F93\u5165\u6587\u5B57',
      rightBtn: Icon(
        TDIcons.user_avatar,
        color: TDTheme.of(context).fontGyColor3,
      ),
      onBtnTap: () {
        TDToast.showText('\u70B9\u51FB\u64CD\u4F5C\u6309\u94AE', context: context);
      },
      onChanged: (text) {
        setState(() {});
      },
      onClearTap: () {
        controller[9].clear();
        setState(() {});
      },
    );
  }</pre>
</td-code-block>
<p>\u5E26\u56FE\u6807\u8F93\u5165\u6846</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _basicTypeWithLeftIconLeftLabel(BuildContext context) {
    return Column(
      children: [
        TDInput(
          leftIcon: const Icon(TDIcons.app),
          leftLabel: '\u6807\u7B7E\u6587\u5B57',
          controller: controller[10],
          backgroundColor: Colors.white,
          hintText: '\u8BF7\u8F93\u5165\u6587\u5B57',
          onChanged: (text) {
            setState(() {});
          },
          onClearTap: () {
            controller[10].clear();
            setState(() {});
          },
        ),
        const SizedBox(
          height: 16,
        )
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _basicTypeWithLeftIcon(BuildContext context) {
    return Column(
      children: [
        TDInput(
          leftIcon: const Icon(TDIcons.app),
          controller: controller[11],
          backgroundColor: Colors.white,
          hintText: '\u8BF7\u8F93\u5165\u6587\u5B57',
          onChanged: (text) {
            setState(() {});
          },
          onClearTap: () {
            controller[11].clear();
            setState(() {});
          },
        ),
        const SizedBox(
          height: 16,
        )
      ],
    );
  }</pre>
</td-code-block>
<p>\u7279\u5B9A\u7C7B\u578B\u8F93\u5165\u6846</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _specialTypePassword(BuildContext context) {
    return Column(
      children: [
        TDInput(
          type: TDInputType.normal,
          controller: controller[12],
          obscureText: !browseOn,
          leftLabel: '\u8F93\u5165\u5BC6\u7801',
          hintText: '\u8BF7\u8F93\u5165\u5BC6\u7801',
          backgroundColor: Colors.white,
          rightBtn: browseOn
              ? Icon(
                  TDIcons.browse,
                  color: TDTheme.of(context).fontGyColor3,
                )
              : Icon(
                  TDIcons.browse_off,
                  color: TDTheme.of(context).fontGyColor3,
                ),
          onBtnTap: () {
            setState(() {
              browseOn = !browseOn;
            });
          },
          needClear: false,
        ),
        const SizedBox(
          height: 16,
        ),
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _specialTypeVerifyCode(BuildContext context) {
    return Column(
      children: [
        TDInput(
          type: TDInputType.normal,
          size: TDInputSize.small,
          controller: controller[13],
          leftLabel: '\u9A8C\u8BC1\u7801',
          hintText: '\u8F93\u5165\u9A8C\u8BC1\u7801',
          backgroundColor: Colors.white,
          rightBtn: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                width: 0.5,
                height: 24,
                color: TDTheme.of(context).grayColor3,
              ),
              const SizedBox(
                width: 16,
              ),
              Image.network(
                'https://img2018.cnblogs.com/blog/736399/202001/736399-20200108170302307-1377487770.jpg',
                width: 72,
                height: 36,
              )
            ],
          ),
          needClear: false,
          onBtnTap: () {
            TDToast.showText('\u70B9\u51FB\u66F4\u6362\u9A8C\u8BC1\u7801', context: context);
          },
        ),
        const SizedBox(
          height: 16,
        )
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _specialTypePhoneNumber(BuildContext context) {
    return Column(
      children: [
        TDInput(
          type: TDInputType.normal,
          controller: controller[14],
          leftLabel: '\u624B\u673A\u53F7',
          hintText: '\u8F93\u5165\u624B\u673A\u53F7',
          backgroundColor: Colors.white,
          rightBtn: SizedBox(
            width: 98,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Padding(
                  padding: const EdgeInsets.only(right: 16),
                  child: Container(
                    width: 0.5,
                    height: 24,
                    color: TDTheme.of(context).grayColor3,
                  ),
                ),
                _countdownTime > 0
                    ? TDText(
                        '\${countDownText}(\${_countdownTime}\u79D2)',
                        textColor: TDTheme.of(context).fontGyColor4,
                      )
                    : TDText(confirmText, textColor: TDTheme.of(context).brandNormalColor),
              ],
            ),
          ),
          needClear: false,
          onBtnTap: () {
            if (_countdownTime == 0) {
              TDToast.showText('\u70B9\u51FB\u4E86\u53D1\u9001\u9A8C\u8BC1\u7801', context: context);
              setState(() {
                _countdownTime = 60;
              });
              startCountdownTimer();
            }
          },
        ),
        const SizedBox(
          height: 16,
        )
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _specialTypePrice(BuildContext context) {
    return Column(
      children: [
        TDInput(
          type: TDInputType.special,
          controller: controller[15],
          leftLabel: '\u4EF7\u683C',
          hintText: '0.00',
          backgroundColor: Colors.white,
          textAlign: TextAlign.end,
          rightWidget: TDText('\u5143', textColor: TDTheme.of(context).fontGyColor1),
        ),
        const SizedBox(
          height: 16,
        )
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _specialTypeNumber(BuildContext context) {
    return TDInput(
      type: TDInputType.special,
      controller: controller[16],
      leftLabel: '\u6570\u91CF',
      hintText: '\u586B\u5199\u4E2A\u6570',
      backgroundColor: Colors.white,
      textAlign: TextAlign.end,
      rightWidget: TDText('\u4E2A', textColor: TDTheme.of(context).fontGyColor1),
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">\u6682\u65E0\u6F14\u793A\u4EE3\u7801</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u72B6\u6001">1 \u7EC4\u4EF6\u72B6\u6001 <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u72B6\u6001"></a></h3>
<p>\u8F93\u5165\u6846\u72B6\u6001</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _inputStatusAdditionInfo(BuildContext context) {
    return Column(
      children: [
        TDInput(
          leftLabel: '\u6807\u7B7E\u6587\u5B57',
          controller: controller[17],
          backgroundColor: Colors.white,
          hintText: '\u8BF7\u8F93\u5165\u6587\u5B57',
          additionInfo: '\u9519\u8BEF\u63D0\u793A\u8BF4\u660E',
          additionInfoColor: TDTheme.of(context).errorColor6,
          onChanged: (text) {
            setState(() {});
          },
          onClearTap: () {
            controller[17].clear();
            setState(() {});
          },
        ),
        const SizedBox(
          height: 16,
        )
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _inputStatusReadOnly(BuildContext context) {
    return TDInput(
      leftLabel: '\u6807\u7B7E\u6587\u5B57',
      readOnly: true,
      // \u4E0D\u53EF\u7F16\u8F91\u6587\u5B57 \u5219\u4E0D\u5FC5\u5E26\u5165controller
      backgroundColor: Colors.white,
      hintText: '\u4E0D\u53EF\u7F16\u8F91\u6587\u5B57',
    );
  }</pre>
</td-code-block>
<p>\u4FE1\u606F\u8D85\u957F\u72B6\u6001</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _inputStatusLongLabel(BuildContext context) {
    return Column(
      children: [
        TDInput(
          leftLabel: '\u6807\u7B7E\u8D85\u957F\u65F6\u6700\u591A\u5341\u4E2A\u5B57',
          controller: controller[18],
          backgroundColor: Colors.white,
          hintText: '\u8BF7\u8F93\u5165\u6587\u5B57',
          onChanged: (text) {
            setState(() {});
          },
          onClearTap: () {
            controller[18].clear();
            setState(() {});
          },
        ),
        const SizedBox(
          height: 16,
        )
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _inputStatusLongInput(BuildContext context) {
    return TDInput(
      type: TDInputType.normal,
      leftLabel: '\u6807\u7B7E\u6587\u5B57',
      controller: controller[19],
      backgroundColor: Colors.white,
      hintText: '\u8F93\u5165\u6587\u5B57\u8D85\u957F\u4E0D\u8D85\u8FC7\u4E24\u884C\u8F93\u5165\u6587\u5B57\u8D85\u957F\u4E0D\u8D85\u8FC7\u4E24\u884C',
      hintTextStyle: TextStyle(
        color: TDTheme.of(context).fontGyColor1,
      ),
      maxLines: 2,
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u6837\u5F0F">1 \u7EC4\u4EF6\u6837\u5F0F <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u6837\u5F0F"></a></h3>
<p>\u5185\u5BB9\u4F4D\u7F6E</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _contentLeft(BuildContext context) {
    return Column(
      children: [
        TDInput(
          leftLabel: '\u5DE6\u5BF9\u9F50',
          controller: controller[23],
          backgroundColor: Colors.white,
          hintText: '\u8BF7\u8F93\u5165\u6587\u5B57',
          onChanged: (text) {
            setState(() {});
          },
          onClearTap: () {
            controller[23].clear();
            setState(() {});
          },
        ),
        const SizedBox(
          height: 16,
        )
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _contentCenter(BuildContext context) {
    return Column(
      children: [
        TDInput(
          leftLabel: '\u5C45\u4E2D',
          controller: controller[24],
          backgroundColor: Colors.white,
          contentAlignment: TextAlign.center,
          hintText: '\u8BF7\u8F93\u5165\u6587\u5B57',
          onChanged: (text) {
            setState(() {});
          },
          onClearTap: () {
            controller[24].clear();
            setState(() {});
          },
        ),
        const SizedBox(
          height: 16,
        )
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _contentRight(BuildContext context) {
    return Column(
      children: [
        TDInput(
          leftLabel: '\u53F3\u5BF9\u9F50',
          controller: controller[25],
          backgroundColor: Colors.white,
          contentAlignment: TextAlign.end,
          hintText: '\u8BF7\u8F93\u5165\u6587\u5B57',
          onChanged: (text) {
            setState(() {});
          },
          onClearTap: () {
            controller[25].clear();
            setState(() {});
          },
        ),
        const SizedBox(
          height: 16,
        )
      ],
    );
  }</pre>
</td-code-block>
<p>\u7AD6\u6392\u6837\u5F0F</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _verticalStyle(BuildContext context) {
    return TDInput(
      type: TDInputType.twoLine,
      leftLabel: '\u6807\u7B7E\u6587\u5B57',
      controller: controller[20],
      hintText: '\u8BF7\u8F93\u5165\u6587\u5B57',
      backgroundColor: Colors.white,
      rightBtn: Icon(
        TDIcons.error_circle_filled,
        color: TDTheme.of(context).fontGyColor3,
      ),
      onBtnTap: () {
        TDToast.showText('\u70B9\u51FB\u53F3\u4FA7\u6309\u94AE', context: context);
      },
      onChanged: (text) {
        setState(() {});
      },
      onClearTap: () {
        controller[20].clear();
        setState(() {});
      },
    );
  }</pre>
</td-code-block>
<p>\u975E\u901A\u680F\u6837\u5F0F</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _cardStyle(BuildContext context) {
    return TDInput(
      type: TDInputType.cardStyle,
      width: MediaQuery.of(context).size.width - 32,
      leftLabel: '\u6807\u7B7E\u6587\u5B57',
      controller: controller[21],
      hintText: '\u8BF7\u8F93\u5165\u6587\u5B57',
      backgroundColor: Colors.white,
      onChanged: (text) {
        setState(() {});
      },
      onClearTap: () {
        controller[21].clear();
        setState(() {});
      },
    );
  }</pre>
</td-code-block>
<p>\u6807\u7B7E\u5916\u7F6E\u6837\u5F0F</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _labelOutStyle(BuildContext context) {
    return Container(
      alignment: Alignment.center,
      padding: const EdgeInsets.only(top: 16, bottom: 24),
      width: MediaQuery.of(context).size.width,
      color: Colors.white,
      child: TDInput(
        type: TDInputType.cardStyle,
        cardStyle: TDCardStyle.topText,
        width: MediaQuery.of(context).size.width - 32,
        cardStyleTopText: '\u6807\u7B7E\u6587\u5B57',
        controller: controller[22],
        hintText: '\u8BF7\u8F93\u5165\u6587\u5B57',
        rightBtn: Icon(
          TDIcons.error_circle_filled,
          color: TDTheme.of(context).fontGyColor3,
        ),
        onBtnTap: () {
          TDToast.showText('\u70B9\u51FB\u53F3\u4FA7\u6309\u94AE', context: context);
        },
        onChanged: (text) {
          setState(() {});
        },
        onClearTap: () {
          controller[22].clear();
          setState(() {});
        },
      ),
    );
  }</pre>
</td-code-block>
<p>\u81EA\u5B9A\u4E49\u6837\u5F0F\u8F93\u5165\u6846</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _customStyle(BuildContext context) {
    return TDInput(
      leftLabel: '\u6807\u7B7E\u6587\u5B57',
      controller: controller[26],
      backgroundColor: TDTheme.of(context).grayColor12,
      leftLabelStyle: TextStyle(color: TDTheme.of(context).fontWhColor1),
      textStyle: TextStyle(color: TDTheme.of(context).fontWhColor1),
      hintText: '\u8BF7\u8F93\u5165\u6587\u5B57',
      hintTextStyle: TextStyle(color: TDTheme.of(context).fontWhColor3),
      onChanged: (text) {
        setState(() {});
      },
      clearBtnColor: TDTheme.of(context).fontWhColor3,
      onClearTap: () {
        controller[26].clear();
        setState(() {});
      },
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdinput">TDInput</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdinput">TDInput <a class="header-anchor" href="#tdinput"></a></h3>
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
<td>width</td>
<td>double?</td>
<td>-</td>
<td>\u8F93\u5165\u6846\u5BBD\u5EA6(TDCardStyle\u65F6\u5FC5\u987B\u8BBE\u7F6E\u8BE5\u53C2\u6570)</td>
</tr>
<tr>
<td>textStyle</td>
<td>TextStyle?</td>
<td>-</td>
<td>\u6587\u672C\u989C\u8272</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>Color?</td>
<td>-</td>
<td>\u8F93\u5165\u6846\u80CC\u666F\u8272</td>
</tr>
<tr>
<td>decoration</td>
<td>Decoration?</td>
<td>-</td>
<td>\u8F93\u5165\u6846\u6837\u5F0F</td>
</tr>
<tr>
<td>leftIcon</td>
<td>Widget?</td>
<td>-</td>
<td>\u5E26\u56FE\u6807\u7684\u8F93\u5165\u6846</td>
</tr>
<tr>
<td>leftLabel</td>
<td>String?</td>
<td>-</td>
<td>\u8F93\u5165\u6846\u5DE6\u4FA7\u6587\u6848</td>
</tr>
<tr>
<td>leftLabelStyle</td>
<td>TextStyle?</td>
<td>-</td>
<td>\u5DE6\u4FA7\u6807\u7B7E\u6837\u5F0F</td>
</tr>
<tr>
<td>leftLabelSpace</td>
<td>double?</td>
<td>-</td>
<td>\u8F93\u5165\u6846\u5DE6\u4FA7\u6587\u6848\u95F4\u8DDD</td>
</tr>
<tr>
<td>required</td>
<td>bool?</td>
<td>-</td>
<td>\u662F\u5426\u5FC5\u586B\u6807\u5FD7\uFF08\u7EA2\u8272*\uFF09</td>
</tr>
<tr>
<td>readOnly</td>
<td>bool</td>
<td>false</td>
<td>\u662F\u5426\u53EA\u8BFB</td>
</tr>
<tr>
<td>autofocus</td>
<td>bool</td>
<td>false</td>
<td>\u662F\u5426\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</td>
</tr>
<tr>
<td>obscureText</td>
<td>bool</td>
<td>false</td>
<td>\u662F\u5426\u9690\u85CF\u8F93\u5165\u7684\u6587\u5B57\uFF0C\u4E00\u822C\u7528\u5728\u5BC6\u7801\u8F93\u5165\u6846\u4E2D</td>
</tr>
<tr>
<td>onEditingComplete</td>
<td>VoidCallback?</td>
<td>-</td>
<td>\u70B9\u51FB\u952E\u76D8\u5B8C\u6210\u6309\u94AE\u65F6\u89E6\u53D1\u7684\u56DE\u8C03</td>
</tr>
<tr>
<td>onSubmitted</td>
<td>ValueChanged<String>?</td>
<td>-</td>
<td>\u70B9\u51FB\u952E\u76D8\u5B8C\u6210\u6309\u94AE\u65F6\u89E6\u53D1\u7684\u56DE\u8C03, \u53C2\u6570\u503C\u4E3A\u8F93\u5165\u7684\u5185\u5BB9</td>
</tr>
<tr>
<td>hintText</td>
<td>String?</td>
<td>-</td>
<td>\u63D0\u793A\u6587\u6848</td>
</tr>
<tr>
<td>inputType</td>
<td>TextInputType?</td>
<td>-</td>
<td>\u952E\u76D8\u7C7B\u578B\uFF0C\u6570\u5B57\u3001\u5B57\u6BCD</td>
</tr>
<tr>
<td>onChanged</td>
<td>ValueChanged<String>?</td>
<td>-</td>
<td>\u8F93\u5165\u6587\u672C\u53D8\u5316\u65F6\u56DE\u8C03</td>
</tr>
<tr>
<td>inputFormatters</td>
<td>List<TextInputFormatter>?</td>
<td>-</td>
<td>\u663E\u793A\u8F93\u5165\u5185\u5BB9\uFF0C\u5982\u9650\u5236\u957F\u5EA6(LengthLimitingTextInputFormatter(6))</td>
</tr>
<tr>
<td>inputDecoration</td>
<td>InputDecoration?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u8F93\u5165\u6846\u6837\u5F0F\uFF0C\u9ED8\u8BA4\u5706\u89D2</td>
</tr>
<tr>
<td>maxLines</td>
<td>int</td>
<td>1</td>
<td>\u6700\u5927\u8F93\u5165\u884C\u6570</td>
</tr>
<tr>
<td>focusNode</td>
<td>FocusNode?</td>
<td>-</td>
<td>\u83B7\u53D6\u6216\u8005\u53D6\u6D88\u7126\u70B9\u4F7F\u7528</td>
</tr>
<tr>
<td>controller</td>
<td>TextEditingController?</td>
<td>-</td>
<td>controller \u7528\u6237\u83B7\u53D6\u6216\u8005\u8D4B\u503C\u8F93\u5165\u5185\u5BB9</td>
</tr>
<tr>
<td>cursorColor</td>
<td>Color?</td>
<td>-</td>
<td>\u6E38\u6807\u989C\u8272</td>
</tr>
<tr>
<td>rightBtn</td>
<td>Widget?</td>
<td>-</td>
<td>\u53F3\u4FA7\u6309\u94AE</td>
</tr>
<tr>
<td>hintTextStyle</td>
<td>TextStyle?</td>
<td>-</td>
<td>\u63D0\u793A\u6587\u672C\u989C\u8272\uFF0C\u9ED8\u8BA4\u4E3A\u6587\u672C\u989C\u8272</td>
</tr>
<tr>
<td>onBtnTap</td>
<td>GestureTapCallback?</td>
<td>-</td>
<td>\u53F3\u4FA7\u6309\u94AE\u70B9\u51FB</td>
</tr>
<tr>
<td>labelWidget</td>
<td>Widget?</td>
<td>-</td>
<td>leftLabel\u53F3\u4FA7\u7EC4\u4EF6\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49</td>
</tr>
<tr>
<td>textInputBackgroundColor</td>
<td>Color?</td>
<td>-</td>
<td>\u6587\u672C\u6846\u80CC\u666F\u8272</td>
</tr>
<tr>
<td>contentPadding</td>
<td>EdgeInsetsGeometry?</td>
<td>-</td>
<td>textInput\u5185\u8FB9\u8DDD</td>
</tr>
<tr>
<td>type</td>
<td>TDInputType</td>
<td>TDInputType.normal</td>
<td>\u8F93\u5165\u6846\u7C7B\u578B</td>
</tr>
<tr>
<td>size</td>
<td>TDInputSize</td>
<td>TDInputSize.large</td>
<td>\u8F93\u5165\u6846\u89C4\u683C</td>
</tr>
<tr>
<td>leftInfoWidth</td>
<td>double?</td>
<td>-</td>
<td>\u8F93\u5165\u6846\u5DE6\u4FA7\u7684\u5BBD\u5EA6\uFF08\u8F93\u5165\u6846\u670916dp\u7684\u5DE6\u4FA7padding\uFF0C\u56E0\u800C\u5DE6\u4FA7\u90E8\u5206\u4E0D\u7528\u8003\u8651\u8FD916dp\uFF09</td>
</tr>
<tr>
<td>maxLength</td>
<td>int?</td>
<td>500</td>
<td>\u6700\u5927\u5B57\u6570\u9650\u5236</td>
</tr>
<tr>
<td>additionInfo</td>
<td>String?</td>
<td>''</td>
<td>\u9519\u8BEF\u63D0\u793A\u4FE1\u606F</td>
</tr>
<tr>
<td>additionInfoColor</td>
<td>Color?</td>
<td>-</td>
<td>\u9519\u8BEF\u63D0\u793A\u989C\u8272</td>
</tr>
<tr>
<td>textAlign</td>
<td>TextAlign?</td>
<td>-</td>
<td>\u6587\u5B57\u5BF9\u9F50\u65B9\u5411</td>
</tr>
<tr>
<td>clearIconSize</td>
<td>double?</td>
<td>-</td>
<td>\u6E05\u9664\u6309\u94AE\u56FE\u6807\u5927\u5C0F</td>
</tr>
<tr>
<td>onClearTap</td>
<td>GestureTapCallback?</td>
<td>-</td>
<td>\u53F3\u4FA7\u5220\u9664\u70B9\u51FB</td>
</tr>
<tr>
<td>needClear</td>
<td>bool</td>
<td>true</td>
<td>\u662F\u5426\u9700\u8981\u53F3\u4FA7\u6309\u94AE\u53D8\u4E3A\u5220\u9664</td>
</tr>
<tr>
<td>clearBtnColor</td>
<td>Color?</td>
<td>-</td>
<td>\u53F3\u4FA7\u5220\u9664\u6309\u94AE\u989C\u8272</td>
</tr>
<tr>
<td>contentAlignment</td>
<td>TextAlign</td>
<td>TextAlign.start</td>
<td>\u5185\u5BB9\u5BF9\u9F50\u65B9\u5411</td>
</tr>
<tr>
<td>rightWidget</td>
<td>Widget?</td>
<td>-</td>
<td>\u53F3\u4FA7\u81EA\u5B9A\u4E49\u7EC4\u4EF6 \u7279\u6B8A\u7C7B\u578B\u65F6\u751F\u6548</td>
</tr>
<tr>
<td>showBottomDivider</td>
<td>bool</td>
<td>true</td>
<td>\u662F\u5426\u5C55\u793A\u5E95\u90E8\u5206\u5272\u7EBF</td>
</tr>
<tr>
<td>cardStyle</td>
<td>TDCardStyle?</td>
<td>-</td>
<td>\u5361\u7247\u9ED8\u8BA4\u6837\u5F0F</td>
</tr>
<tr>
<td>cardStyleTopText</td>
<td>String?</td>
<td>-</td>
<td>\u5361\u7247\u6A21\u5F0F\u4E0A\u65B9\u6587\u5B57</td>
</tr>
<tr>
<td>inputAction</td>
<td>TextInputAction?</td>
<td>-</td>
<td>\u952E\u76D8\u52A8\u4F5C\u7C7B\u578B</td>
</tr>
<tr>
<td>spacer</td>
<td>TDInputSpacer</td>
<td>-</td>
<td>\u7EC4\u4EF6\u5404\u6A21\u5757\u95F4\u95F4\u8DDD</td>
</tr>
<tr>
<td>cardStyleBottomText</td>
<td>String?</td>
<td>-</td>
<td>\u5361\u7247\u6A21\u5F0F\u4E0B\u65B9\u6587\u5B57</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function c(i,s,p,h,T,g){const n=r("tdesign-doc");return d(),l(n)}var C=e(a,[["render",c]]);export{C as default};
