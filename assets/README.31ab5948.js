import{T as t}from"./component.0f8980d6.js";import{_ as e,d,r as o,o as i,c as r}from"./site.4473ad53.js";const a=d({props:{docType:String},components:{TdesignDoc:t},provide:{info:{spline:"base",toc:!0,title:"Image \u56FE\u7247",description:"\u7528\u4E8E\u5C55\u793A\u6548\u679C\uFF0C\u4E3B\u8981\u4E3A\u4E0A\u4E0B\u5DE6\u53F3\u5C45\u4E2D\u88C1\u5207\u3001\u62C9\u4F38\u3001\u5E73\u94FA\u7B49\u65B9\u5F0F\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686018,componentName:"image",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_image_page.dart" target="_blank" rel="noopener noreferrer">td_image_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _imageClip(BuildContext context)  {

    return Row(
      children: [
        const SizedBox(
          width: 16,
        ),
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.only(bottom: 16),
              child: TDText(
                '\u88C1\u526A',
                font: TDTheme.of(context).fontBodyMedium,
                textColor: TDTheme.of(context).fontGyColor2.withOpacity(0.6),
              ),
            ),
             const TDImage(
               assetUrl: 'assets/img/image.png',
               type: TDImageType.clip,
            ),
          ],
        ),
        const SizedBox(
          width: 24,
        ),
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.only(bottom: 16),
              child: TDText(
                '\u9002\u5E94\u9AD8',
                font: TDTheme.of(context).fontBodyMedium,
                textColor: TDTheme.of(context).fontGyColor2.withOpacity(0.6),
              ),
            ),
            Container(
              width: 89,
              height: 72,
              color: Colors.black,
              child: const TDImage(
                assetUrl: 'assets/img/image.png',
                type: TDImageType.fitHeight,
              ),
            ),
          ],
        ),
        const SizedBox(
          width: 24,
        ),
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.only(bottom: 16),
              child: TDText(
                '\u62C9\u4F38',
                font: TDTheme.of(context).fontBodyMedium,
                textColor: TDTheme.of(context).fontGyColor2.withOpacity(0.6),
              ),
            ),
            Container(
              color: Colors.black,
              width: 121,
              height: 72,
              child: Stack(
                alignment: Alignment.center,
                children: const [
                  TDImage(
                    assetUrl: 'assets/img/image.png',
                    width: 121,
                    height: 50,
                    type: TDImageType.stretch,
                  ),
                ],
              ),
            ),
          ],
        )
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _imageFitWidth(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 24),
      child: Row(
        children: [
          const SizedBox(
            width: 16,
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Padding(
                padding: const EdgeInsets.only(bottom: 16),
                child: TDText(
                  '\u9002\u5E94\u5BBD',
                  font: TDTheme.of(context).fontBodyMedium,
                  textColor: TDTheme.of(context).fontGyColor2.withOpacity(0.6),
                ),
              ),
              Container(
                width: 72,
                height: 89,
                color: Colors.black,
                child: const TDImage(
                  assetUrl: 'assets/img/image.png',
                  type: TDImageType.fitWidth,
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _imageSquare(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 24),
      child: Row(
        children: [
          const SizedBox(
            width: 16,
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Padding(
                padding: const EdgeInsets.only(bottom: 16),
                child: TDText(
                  '\u65B9\u5F62',
                  font: TDTheme.of(context).fontBodyMedium,
                  textColor: TDTheme.of(context).fontGyColor2.withOpacity(0.6),
                ),
              ),
              const TDImage(
                assetUrl: 'assets/img/image.png',
                type: TDImageType.square,
              ),
            ],
          ),
          const SizedBox(
            width: 24,
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Padding(
                padding: const EdgeInsets.only(bottom: 16),
                child: TDText(
                  '\u5706\u89D2\u65B9\u5F62',
                  font: TDTheme.of(context).fontBodyMedium,
                  textColor: TDTheme.of(context).fontGyColor2.withOpacity(0.6),
                ),
              ),
              const TDImage(
                assetUrl: 'assets/img/image.png',
                type: TDImageType.roundedSquare,
                width: 72,
                height: 72,
              ),
            ],
          ),
          const SizedBox(
            width: 24,
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Padding(
                padding: const EdgeInsets.only(bottom: 16),
                child: TDText(
                  '\u5706\u5F62',
                  font: TDTheme.of(context).fontBodyMedium,
                  textColor: TDTheme.of(context).fontGyColor2.withOpacity(0.6),
                ),
              ),
              const TDImage(
                assetUrl: 'assets/img/image.png',
                width: 72,
                height: 72,
                type: TDImageType.circle,
              ),
            ],
          )
        ],
      ),
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u72B6\u6001">1 \u7EC4\u4EF6\u72B6\u6001 <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u72B6\u6001"></a></h3>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _loading(BuildContext context) {
    return Row(
      children: [
        const SizedBox(
          width: 16,
        ),
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.only(bottom: 16),
              child: TDText(
                '\u52A0\u8F7D\u9ED8\u8BA4\u63D0\u793A',
                font: TDTheme.of(context).fontBodyMedium,
                textColor: TDTheme.of(context).fontGyColor2.withOpacity(0.6),
              ),
            ),
            Container(
                height: 72,
                width: 72,
                clipBehavior: Clip.hardEdge,
                decoration: BoxDecoration(borderRadius: BorderRadius.circular(TDTheme.of(context).radiusDefault)),
                child: Container(
                    alignment: Alignment.center,
                    color: TDTheme.of(context).grayColor2,
                    child: Icon(
                      TDIcons.ellipsis,
                      size: 22,
                      color: TDTheme.of(context).fontGyColor3,
                    )
                )
            ),
            // \u5B9E\u9645\u7EC4\u4EF6\u5199\u6CD5\u5982\u4E0B\uFF1A\u4E0A\u9762\u4EC5\u4E3A\u52A0\u8F7D\u5C55\u793A
            // const TDImage(
            //   imgUrl:
            //       'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            //   type: TDImageType.roundedSquare,
            // ),
          ],
        ),
        const SizedBox(
          width: 24,
        ),
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.only(bottom: 16),
              child: TDText(
                '\u52A0\u8F7D\u81EA\u5B9A\u4E49\u63D0\u793A',
                font: TDTheme.of(context).fontBodyMedium,
                textColor: TDTheme.of(context).fontGyColor2.withOpacity(0.6),
              ),
            ),
            Container(
                height: 72,
                width: 72,
                clipBehavior: Clip.hardEdge,
                decoration: BoxDecoration(borderRadius: BorderRadius.circular(TDTheme.of(context).radiusDefault)),
                child: Container(
                    alignment: Alignment.center,
                    color: TDTheme.of(context).grayColor2,
                    child: RotationTransition(
                        turns: animation,
                        alignment: Alignment.center,
                        child: TDCircleIndicator(
                          color: TDTheme.of(context).brandNormalColor,
                          size: 18,
                          lineWidth: 3,
                        ))
                )
            ),
            // \u5B9E\u9645\u7EC4\u4EF6\u5199\u6CD5\u5982\u4E0B\uFF1A\u4E0A\u9762\u4EC5\u4E3A\u52A0\u8F7D\u5C55\u793A
            // TDImage(
            //   imgUrl:
            //       'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            //   loadingWidget: RotationTransition(
            //       turns: animation,
            //       alignment: Alignment.center,
            //       child: TDCircleIndicator(
            //         color: TDTheme.of(context).brandNormalColor,
            //         size: 18,
            //         lineWidth: 3,
            //       )),
            //   type: TDImageType.roundedSquare,
            // ),
          ],
        ),
        const SizedBox(
          width: 24,
        ),
      ],
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _fail(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 24),
      child: Row(
        children: [
          const SizedBox(
            width: 16,
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Padding(
                padding: const EdgeInsets.only(bottom: 16),
                child: TDText(
                  '\u5931\u8D25\u9ED8\u8BA4\u63D0\u793A',
                  font: TDTheme.of(context).fontBodyMedium,
                  textColor: TDTheme.of(context).fontGyColor2.withOpacity(0.6),
                ),
              ),
              const TDImage(
                imgUrl: 'error',
                type: TDImageType.roundedSquare,
              ),
            ],
          ),
          const SizedBox(
            width: 24,
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Padding(
                padding: const EdgeInsets.only(bottom: 16),
                child: TDText(
                  '\u5931\u8D25\u81EA\u5B9A\u4E49\u63D0\u793A',
                  font: TDTheme.of(context).fontBodyMedium,
                  textColor: TDTheme.of(context).fontGyColor2.withOpacity(0.6),
                ),
              ),
              TDImage(
                imgUrl: 'error',
                errorWidget: TDText(
                  '\u52A0\u8F7D\u5931\u8D25',
                  forceVerticalCenter: true,
                  font: TDTheme.of(context).fontBodyExtraSmall,
                  fontWeight: FontWeight.w500,
                  textColor: TDTheme.of(context).fontGyColor3,
                ),
                type: TDImageType.roundedSquare,
              ),
            ],
          ),
          const SizedBox(
            width: 24,
          ),
        ],
      ),
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdimage">TDImage</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdimage">TDImage <a class="header-anchor" href="#tdimage"></a></h3>
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
<td>imgUrl</td>
<td>String?</td>
<td>-</td>
<td>\u56FE\u7247\u5730\u5740</td>
</tr>
<tr>
<td>key</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>type</td>
<td>TDImageType</td>
<td>TDImageType.roundedSquare</td>
<td>\u56FE\u7247\u7C7B\u578B</td>
</tr>
<tr>
<td>errorWidget</td>
<td>Widget?</td>
<td>-</td>
<td>\u5931\u8D25\u81EA\u5B9A\u4E49\u63D0\u793A</td>
</tr>
<tr>
<td>loadingWidget</td>
<td>Widget?</td>
<td>-</td>
<td>\u52A0\u8F7D\u81EA\u5B9A\u4E49\u63D0\u793A</td>
</tr>
<tr>
<td>width</td>
<td>double?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u5BBD</td>
</tr>
<tr>
<td>height</td>
<td>double?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u9AD8</td>
</tr>
<tr>
<td>fit</td>
<td>BoxFit?</td>
<td>-</td>
<td>\u9002\u914D\u6837\u5F0F</td>
</tr>
<tr>
<td>frameBuilder</td>
<td>ImageFrameBuilder?</td>
<td>-</td>
<td>\u4EE5\u4E0B\u7CFB\u7EDFImage\u5C5E\u6027\uFF0C\u91CA\u4E49\u8BF7\u53C2\u8003\u7CFB\u7EDF[Image]\u4E2D\u6CE8\u91CA</td>
</tr>
<tr>
<td>loadingBuilder</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>errorBuilder</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>semanticLabel</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>excludeFromSemantics</td>
<td></td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>color</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>opacity</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>colorBlendMode</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>alignment</td>
<td></td>
<td>Alignment.center</td>
<td></td>
</tr>
<tr>
<td>repeat</td>
<td></td>
<td>ImageRepeat.noRepeat</td>
<td></td>
</tr>
<tr>
<td>centerSlice</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>matchTextDirection</td>
<td></td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>gaplessPlayback</td>
<td></td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>isAntiAlias</td>
<td></td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>filterQuality</td>
<td></td>
<td>FilterQuality.low</td>
<td></td>
</tr>
<tr>
<td>cacheHeight</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>cacheWidth</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>assetUrl</td>
<td>String?</td>
<td>-</td>
<td>\u672C\u5730\u7D20\u6750\u5730\u5740</td>
</tr>
<tr>
<td>imageFile</td>
<td>File?</td>
<td>-</td>
<td>\u56FE\u7247\u6587\u4EF6\u8DEF\u5F84</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function s(l,c,g,m,h,p){const n=o("tdesign-doc");return i(),r(n)}var f=e(a,[["render",s]]);export{f as default};
