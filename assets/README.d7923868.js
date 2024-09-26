import{T as n}from"./component.f9e366e0.js";import{_ as d,d as e,r as i,o as r,c as o}from"./site.66dd0425.js";const a=e({props:{docType:String},components:{TdesignDoc:n},provide:{info:{spline:"base",toc:!0,title:"Radio \u5355\u9009\u6846",description:null,isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686019,componentName:"radio",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_radio_page.dart" target="_blank" rel="noopener noreferrer">td_radio_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u7EB5\u5411\u5355\u9009\u6846</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _verticalRadios(BuildContext context) {
    return TDRadioGroup(
      selectId: 'index:1',
      child: ListView.builder(
        padding: const EdgeInsets.all(0),
        shrinkWrap: true,
        physics: const NeverScrollableScrollPhysics(),
        itemBuilder: (BuildContext context, int index) {
          var title = '\u5355\u9009';
          var subTitle = '';
          if (index == 2) {
            title = '\u5355\u9009\u6807\u9898\u591A\u884C\u5355\u9009\u6807\u9898\u591A\u884C\u5355\u9009\u6807\u9898\u591A\u884C\u5355\u9009\u6807\u9898\u591A\u884C\u5355\u9009\u6807\u9898\u591A\u884C\u5355\u9009\u6807\u9898\u591A\u884C';
          }
          if (index == 3) {
            subTitle = '\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F';
          }
          return TDRadio(
            id: 'index:$index',
            title: title,
            titleMaxLine: 2,
            subTitleMaxLine: 2,
            subTitle: subTitle,
          );
        },
        itemCount: 4,
      ),
    );
  }</pre>
</td-code-block>
<p>\u6A2A\u5411\u5355\u9009\u6846</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _horizontalRadios(BuildContext context) {
    return TDRadioGroup(
      selectId: 'index:1',
      direction: Axis.horizontal,
      directionalTdRadios: const [
        TDRadio(
          id: '0',
          title: '\u5355\u9009\u6807\u9898',
          radioStyle: TDRadioStyle.circle,
          showDivider: false,
        ),
        TDRadio(
          id: '1',
          title: '\u5355\u9009\u6807\u9898',
          radioStyle: TDRadioStyle.circle,
          showDivider: false,
        ),
        TDRadio(
          id: '2',
          title: '\u4E0A\u9650\u56DB\u5B57',
          radioStyle: TDRadioStyle.circle,
          showDivider: false,
        ),
      ],
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u72B6\u6001">1 \u7EC4\u4EF6\u72B6\u6001 <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u72B6\u6001"></a></h3>
<p>\u5355\u9009\u6846\u72B6\u6001</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _radioStatus(BuildContext context) {
    return TDRadioGroup(
      contentDirection: TDContentDirection.right,
      selectId: '0',
      child: Column(
        children: const [
          TDRadio(
            id: '0',
            title: '\u9009\u9879\u7981\u7528-\u5DF2\u9009',
            radioStyle: TDRadioStyle.circle,
            enable: false,
          ),
          TDRadio(
            id: '1',
            title: '\u9009\u9879\u7981\u7528-\u9ED8\u8BA4',
            radioStyle: TDRadioStyle.circle,
            enable: false,
          ),
        ],
      ),
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u6837\u5F0F">1 \u7EC4\u4EF6\u6837\u5F0F <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u6837\u5F0F"></a></h3>
<p>\u52FE\u9009\u6837\u5F0F</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _checkStyle(BuildContext context) {
    return Column(
      children: [
        TDRadioGroup(
          radioCheckStyle: TDRadioStyle.check,
          selectId: 'index:0',
          child: const TDRadio(
            id: 'index:0',
            title: '\u5355\u9009',
          ),
        ),
        const SizedBox(
          height: 17,
        ),
        TDRadioGroup(
          radioCheckStyle: TDRadioStyle.hollowCircle,
          selectId: 'index:0',
          child: const TDRadio(
            id: 'index:0',
            title: '\u5355\u9009',
          ),
        )
      ],
    );
  }</pre>
</td-code-block>
<p>\u52FE\u9009\u663E\u793A\u4F4D\u7F6E</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _checkPosition(BuildContext context) {
    return Column(
      children: [
        TDRadioGroup(
          contentDirection: TDContentDirection.right,
          selectId: 'index:0',
          child: const TDRadio(
            id: 'index:0',
            title: '\u5355\u9009',
          ),
        ),
        TDRadioGroup(
          contentDirection: TDContentDirection.left,
          selectId: 'index:0',
          child: const TDRadio(
            id: 'index:0',
            title: '\u5355\u9009',
            showDivider: false,
          ),
        )
      ],
    );
  }</pre>
</td-code-block>
<p>\u975E\u901A\u680F\u5355\u9009\u6837\u5F0F</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _passThroughStyle(BuildContext context) {
    return TDRadioGroup(
      selectId: 'index:0',
      passThrough: true,
      child: ListView.builder(
        padding: const EdgeInsets.all(0),
        shrinkWrap: true,
        physics: const NeverScrollableScrollPhysics(),
        itemBuilder: (context, index) {
          var title = '\u5355\u9009';
          return TDRadio(
            id: 'index:$index',
            title: title,
            size: TDCheckBoxSize.large,
          );
        },
        itemCount: 4,
      ),
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7279\u6B8A\u6837\u5F0F">1 \u7279\u6B8A\u6837\u5F0F <a class="header-anchor" href="#_1-\u7279\u6B8A\u6837\u5F0F"></a></h3>
<p>\u7EB5\u5411\u5361\u7247\u5355\u9009\u6846</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _verticalCardStyle(BuildContext context) {
    return TDRadioGroup(
      selectId: 'index:1',
      cardMode: true,
      direction: Axis.vertical,
      directionalTdRadios: const [
        TDRadio(
          id: 'index:0',
          title: '\u5355\u9009',
          titleMaxLine: 2,
          subTitleMaxLine: 2,
          subTitle: '\u63CF\u8FF0\u4FE1\u606F',
          cardMode: true,
        ),
        TDRadio(
          id: 'index:1',
          title: '\u5355\u9009',
          titleMaxLine: 2,
          subTitleMaxLine: 2,
          subTitle: '\u63CF\u8FF0\u4FE1\u606F',
          cardMode: true,
        ),
        TDRadio(
          id: 'index:2',
          title: '\u5355\u9009',
          titleMaxLine: 2,
          subTitleMaxLine: 2,
          subTitle: '\u63CF\u8FF0\u4FE1\u606F',
          cardMode: true,
        ),
        TDRadio(
          id: 'index:3',
          title: '\u5355\u9009',
          titleMaxLine: 2,
          subTitleMaxLine: 2,
          subTitle: '\u63CF\u8FF0\u4FE1\u606F',
          cardMode: true,
        ),
      ],
    );
  }</pre>
</td-code-block>
<p>\u6A2A\u5411\u5361\u7247\u5355\u9009\u6846</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _horizontalCardStyle(BuildContext context) {
    return TDRadioGroup(
      selectId: 'index:1',
      cardMode: true,
      direction: Axis.horizontal,
      directionalTdRadios: const [
        TDRadio(
          id: 'index:0',
          title: '\u5355\u9009',
          cardMode: true,
        ),
        TDRadio(
          id: 'index:1',
          title: '\u5355\u9009',
          cardMode: true,
        ),
        TDRadio(
          id: 'index:2',
          title: '\u5355\u9009',
          cardMode: true,
        ),
        TDRadio(
          id: 'index:3',
          title: '\u5355\u9009',
          cardMode: true,
        ),
      ],
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdradio">TDRadio</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdradiogroup">TDRadioGroup</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdradio">TDRadio <a class="header-anchor" href="#tdradio"></a></h3>
<h4 id="\u7B80\u4ECB">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB"></a></h4>
<p>\u5355\u9009\u6846\u6309\u94AE,\u7EE7\u627F\u81EATDCheckbox\uFF0C\u5B57\u6BB5\u542B\u4E49\u4E0E\u7236\u7C7B\u4E00\u81F4</p>
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
<td>id</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>key</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>title</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>titleFont</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>subTitle</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>subTitleFont</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>enable</td>
<td></td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>subTitleMaxLine</td>
<td></td>
<td>1</td>
<td></td>
</tr>
<tr>
<td>titleMaxLine</td>
<td></td>
<td>1</td>
<td></td>
</tr>
<tr>
<td>selectColor</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>disableColor</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>customContentBuilder</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>spacing</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>cardMode</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>showDivider</td>
<td>bool</td>
<td>-</td>
<td>\u662F\u5426\u663E\u793A\u4E0B\u5212\u7EBF</td>
</tr>
<tr>
<td>size</td>
<td></td>
<td>TDCheckBoxSize.small</td>
<td></td>
</tr>
<tr>
<td>radioStyle</td>
<td>TDRadioStyle</td>
<td>TDRadioStyle.circle</td>
<td>\u5355\u9009\u6846\u6309\u94AE\u6837\u5F0F</td>
</tr>
<tr>
<td>contentDirection</td>
<td></td>
<td>TDContentDirection.right</td>
<td></td>
</tr>
<tr>
<td>customIconBuilder</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>titleColor</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>subTitleColor</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>backgroundColor</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>checkBoxLeftSpace</td>
<td></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tdradiogroup">TDRadioGroup <a class="header-anchor" href="#tdradiogroup"></a></h3>
<h4 id="\u7B80\u4ECB-1">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB-1"></a></h4>
<p>RadioGroup\u5206\u7EC4\u5BF9\u8C61\uFF0C\u7EE7\u627F\u81EATDCheckboxGroup\uFF0C\u5B57\u6BB5\u542B\u4E49\u4E0E\u7236\u7C7B\u4E00\u81F4
RadioGroup\u5E94\u8BE5\u5D4C\u5957\u5728RadioGroup\u5185\uFF0C\u6240\u6709\u5728RadioGroup\u7684RadioButton\u53EA\u80FD\u6709\u4E00\u4E2A\u88AB\u9009\u4E2D</p>
<p>cardMode: \u4F7F\u7528\u5361\u7247\u6837\u5F0F\uFF0C\u9700\u8981\u914D\u5408direction \u548C directionalTdRadios \u4F7F\u7528\uFF0C
\u7EC4\u5408\u4E3A\u6A2A\u5411\u3001\u7EB5\u5411\u5361\u7247\uFF0C\u540C\u65F6\u9700\u8981\u5728\u6BCF\u4E2ATDRadio\u4E0A\u8BBE\u7F6EcardMode\u53C2\u6570\u3002</p>
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
<td>child</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>direction</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>directionalTdRadios</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>selectId</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>passThrough</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>cardMode</td>
<td></td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>strictMode</td>
<td>bool</td>
<td>true</td>
<td>\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF0C\u7528\u6237\u4E0D\u80FD\u53D6\u6D88\u52FE\u9009\uFF0C\u53EA\u80FD\u5207\u6362\u9009\u62E9\u9879\uFF0C</td>
</tr>
<tr>
<td>radioCheckStyle</td>
<td>TDRadioStyle?</td>
<td>-</td>
<td>\u52FE\u9009\u6837\u5F0F</td>
</tr>
<tr>
<td>titleMaxLine</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>customIconBuilder</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>customContentBuilder</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>spacing</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>contentDirection</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>onRadioGroupChange</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>showDivider</td>
<td>bool</td>
<td>false</td>
<td>\u662F\u5426\u663E\u793A\u4E0B\u5212\u7EBF</td>
</tr>
<tr>
<td>divider</td>
<td>Widget?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u4E0B\u5212\u7EBF</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function l(s,c,p,h,u,g){const t=i("tdesign-doc");return r(),o(t)}var b=d(a,[["render",l]]);export{b as default};
