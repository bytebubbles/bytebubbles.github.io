import{T as n}from"./component.f9e366e0.js";import{_ as e,d,r as o,o as r,c as i}from"./site.66dd0425.js";const c=d({props:{docType:String},components:{TdesignDoc:n},provide:{info:{spline:"base",toc:!0,title:"Checkbox \u591A\u9009\u6846",description:"\u7528\u4E8E\u9884\u8BBE\u7684\u4E00\u7EC4\u9009\u9879\u4E2D\u6267\u884C\u591A\u9879\u9009\u62E9\uFF0C\u5E76\u5448\u73B0\u9009\u62E9\u7ED3\u679C\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686015,componentName:"checkbox",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_checkbox_page.dart" target="_blank" rel="noopener noreferrer">td_checkbox_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u7EB5\u5411\u591A\u9009\u6846</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _verticalCheckbox(BuildContext context) {
    return TDCheckboxGroupContainer(
      selectIds: const ['index:1'],
      child: ListView.builder(
        padding: EdgeInsets.zero,
        shrinkWrap: true,
        physics: const NeverScrollableScrollPhysics(),
        itemBuilder: (BuildContext context, int index) {
          var title = '\u591A\u9009';
          var subTitle = '';
          if (index == 2) {
            title = '\u591A\u9009\u6807\u9898\u591A\u884C\u591A\u9009\u6807\u9898\u591A\u884C\u591A\u9009\u6807\u9898\u591A\u884C\u591A\u9009\u6807\u9898\u591A\u884C\u591A\u9009\u6807\u9898\u591A\u884C\u591A\u9009\u6807\u9898\u591A\u884C';
          }
          if (index == 3) {
            subTitle = '\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F';
          }
          return TDCheckbox(
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
<p>\u6A2A\u5411\u591A\u9009\u6846</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _horizontalCheckbox(BuildContext context) {
    return TDCheckboxGroupContainer(
      selectIds: const ['1'],
      direction: Axis.horizontal,
      directionalTdCheckboxes: const [
        TDCheckbox(
          id: '0',
          title: '\u591A\u9009\u6807\u9898',
          style: TDCheckboxStyle.circle,
          insetSpacing: 12,
          showDivider: false,
        ),
        TDCheckbox(
          id: '1',
          title: '\u591A\u9009\u6807\u9898',
          style: TDCheckboxStyle.circle,
          insetSpacing: 12,
          showDivider: false,
        ),
        TDCheckbox(
          id: '2',
          title: '\u4E0A\u9650\u56DB\u5B57',
          style: TDCheckboxStyle.circle,
          insetSpacing: 12,
          showDivider: false,
        ),
      ],
    );
  }</pre>
</td-code-block>
<p>\u5E26\u5168\u9009\u591A\u9009\u6846</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _checkAllSelected(BuildContext context) {
    const itemCount = 4;
    return TDCheckboxGroupContainer(
      selectIds: checkIds,
      passThrough: false,
      controller: controller,
      child: ListView.builder(
        padding: const EdgeInsets.all(0),
        shrinkWrap: true,
        physics: const NeverScrollableScrollPhysics(),
        itemBuilder: (context, index) {
          var title = '\u591A\u9009';
          if(index == 0){
            title = '\u5168\u9009';
            return SizedBox(
              height: 56,
              child: TDCheckbox(
                id: 'index:$index',
                title: title,
                customIconBuilder: (context, checked) {
                  var length = controller!.allChecked().length - (controller!.checked('index:0') ? 1 : 0);
                  var allCheck = itemCount - 1 == length;
                  var halfSelected =
                      controller != null
                          && !allCheck
                          && length > 0;
                  return getAllIcon(allCheck, halfSelected);
                },
                onCheckBoxChanged: (checked){
                  if (checked) {
                    controller?.toggleAll(true);
                  } else {
                    controller?.toggleAll(false);
                  }
                },
              ),
            );
          }else{
            return SizedBox(
              height: index == itemCount - 1 ? null : 56,
              child: TDCheckbox(
                id: 'index:$index',
                title: title,
                subTitle: index == itemCount - 1 ? '\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F' : null,
                subTitleMaxLine: 2,
                onCheckBoxChanged: (checked){
                  var length = controller!.allChecked().length - (controller!.checked('index:0') ? 1 : 0);
                  var allCheck = itemCount - 1 == length;
                  var halfSelected =
                      controller != null
                          && !allCheck
                          && length > 0;
                  controller!.toggle('index:0', allCheck);
                  getAllIcon(allCheck, halfSelected);
                },
              ),
            );
          }
        },
        itemCount: itemCount,
      ),
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u72B6\u6001">1 \u7EC4\u4EF6\u72B6\u6001 <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u72B6\u6001"></a></h3>
<p>\u591A\u9009\u6846\u72B6\u6001</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _checkboxStatus(BuildContext context) {
    return TDCheckboxGroupContainer(
      contentDirection: TDContentDirection.right,
      selectIds: const ['0'],
      child: Column(
        children: const [
          TDCheckbox(
            id: '0',
            title: '\u9009\u9879\u7981\u7528-\u5DF2\u9009',
            style: TDCheckboxStyle.circle,
            enable: false,
          ),
          TDCheckbox(
            id: '1',
            title: '\u9009\u9879\u7981\u7528-\u9ED8\u8BA4',
            style: TDCheckboxStyle.circle,
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
        TDCheckboxGroupContainer(
          style: TDCheckboxStyle.check,
          selectIds: const ['index:0'],
          child: const TDCheckbox(
            id: 'index:0',
            title: '\u591A\u9009',
          ),
        ),
        const SizedBox(
          height: 17,
        ),
        TDCheckboxGroupContainer(
          style: TDCheckboxStyle.square,
          selectIds: const ['index:0'],
          child: const TDCheckbox(
            id: 'index:0',
            title: '\u591A\u9009',
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
        TDCheckboxGroupContainer(
          contentDirection: TDContentDirection.right,
          selectIds: const ['index:0'],
          child: const TDCheckbox(
            id: 'index:0',
            title: '\u591A\u9009',
          ),
        ),
        TDCheckboxGroupContainer(
          contentDirection: TDContentDirection.left,
          selectIds: const ['index:0'],
          child: const TDCheckbox(
            id: 'index:0',
            title: '\u591A\u9009',
          ),
        )
      ],
    );
  }</pre>
</td-code-block>
<p>\u975E\u901A\u680F\u591A\u9009\u6837\u5F0F</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _passThroughStyle(BuildContext context) {
    return TDCheckboxGroupContainer(
      selectIds: const ['index:0'],
      passThrough: true,
      child: ListView.builder(
        padding: const EdgeInsets.all(0),
        shrinkWrap: true,
        physics: const NeverScrollableScrollPhysics(),
        itemBuilder: (context, index) {
          var title = '\u591A\u9009';
          return TDCheckbox(
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
    return TDCheckboxGroupContainer(
      selectIds: const ['index:1'],
      cardMode: true,
      direction: Axis.vertical,
      directionalTdCheckboxes: const [
        TDCheckbox(
          id: 'index:0',
          title: '\u591A\u9009',
          titleMaxLine: 2,
          subTitleMaxLine: 2,
          subTitle: '\u63CF\u8FF0\u4FE1\u606F',
          cardMode: true,
        ),
        TDCheckbox(
          id: 'index:1',
          title: '\u591A\u9009',
          titleMaxLine: 2,
          subTitleMaxLine: 2,
          subTitle: '\u63CF\u8FF0\u4FE1\u606F',
          cardMode: true,
        ),
        TDCheckbox(
          id: 'index:2',
          title: '\u591A\u9009',
          titleMaxLine: 2,
          subTitleMaxLine: 2,
          subTitle: '\u63CF\u8FF0\u4FE1\u606F',
          cardMode: true,
        ),
        TDCheckbox(
          id: 'index:3',
          title: '\u591A\u9009',
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
    return TDCheckboxGroupContainer(
      selectIds: const ['index:1'],
      cardMode: true,
      direction: Axis.horizontal,
      directionalTdCheckboxes: const [
        TDCheckbox(
          id: 'index:0',
          title: '\u591A\u9009',
          cardMode: true,
        ),
        TDCheckbox(
          id: 'index:1',
          title: '\u591A\u9009',
          cardMode: true,
        ),
        TDCheckbox(
          id: 'index:2',
          title: '\u591A\u9009',
          cardMode: true,
        ),
      ],
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdcheckbox">TDCheckbox</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdcheckboxgroup">TDCheckboxGroup</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdcheckbox">TDCheckbox <a class="header-anchor" href="#tdcheckbox"></a></h3>
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
<td>String?</td>
<td>-</td>
<td>id</td>
</tr>
<tr>
<td>key</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>String?</td>
<td>-</td>
<td>\u6587\u672C</td>
</tr>
<tr>
<td>subTitle</td>
<td>String?</td>
<td>-</td>
<td>\u8F85\u52A9\u6587\u5B57</td>
</tr>
<tr>
<td>titleFont</td>
<td>Font?</td>
<td>-</td>
<td>\u6807\u9898\u5B57\u4F53\u5927\u5C0F</td>
</tr>
<tr>
<td>subTitleFont</td>
<td>Font?</td>
<td>-</td>
<td>\u526F\u6807\u9898\u5B57\u4F53\u5927\u5C0F</td>
</tr>
<tr>
<td>enable</td>
<td>bool</td>
<td>true</td>
<td>\u4E0D\u53EF\u7528</td>
</tr>
<tr>
<td>checked</td>
<td>bool</td>
<td>false</td>
<td>\u9009\u4E2D\u72B6\u6001\u3002\u9ED8\u8BA4\u4E3A<code>false</code></td>
</tr>
<tr>
<td>titleMaxLine</td>
<td>int?</td>
<td>-</td>
<td>\u6807\u9898\u7684\u884C\u6570</td>
</tr>
<tr>
<td>subTitleMaxLine</td>
<td>int?</td>
<td>1</td>
<td>\u8F85\u52A9\u6587\u5B57\u7684\u884C\u6570</td>
</tr>
<tr>
<td>customIconBuilder</td>
<td>IconBuilder?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49Checkbox\u663E\u793A\u6837\u5F0F</td>
</tr>
<tr>
<td>customContentBuilder</td>
<td>ContentBuilder?</td>
<td>-</td>
<td>\u5B8C\u5168\u81EA\u5B9A\u4E49\u5185\u5BB9</td>
</tr>
<tr>
<td>insetSpacing</td>
<td>double?</td>
<td>16</td>
<td>\u6587\u5B57\u548C\u975E\u56FE\u6807\u4FA7\u7684\u8DDD\u79BB</td>
</tr>
<tr>
<td>style</td>
<td>TDCheckboxStyle?</td>
<td>-</td>
<td>\u590D\u9009\u6846\u6837\u5F0F\uFF1A\u5706\u5F62\u6216\u65B9\u5F62</td>
</tr>
<tr>
<td>spacing</td>
<td>double?</td>
<td>-</td>
<td>icon\u548C\u6587\u5B57\u7684\u8DDD\u79BB</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>Color?</td>
<td>-</td>
<td>\u80CC\u666F\u989C\u8272</td>
</tr>
<tr>
<td>selectColor</td>
<td>Color?</td>
<td>-</td>
<td>\u9009\u62E9\u989C\u8272</td>
</tr>
<tr>
<td>disableColor</td>
<td>Color?</td>
<td>-</td>
<td>\u7981\u7528\u9009\u62E9\u989C\u8272</td>
</tr>
<tr>
<td>size</td>
<td>TDCheckBoxSize</td>
<td>TDCheckBoxSize.small</td>
<td>\u590D\u9009\u6846\u5927\u5C0F</td>
</tr>
<tr>
<td>cardMode</td>
<td>bool</td>
<td>false</td>
<td>\u5C55\u793A\u4E3A\u5361\u7247\u6A21\u5F0F</td>
</tr>
<tr>
<td>showDivider</td>
<td>bool</td>
<td>true</td>
<td>\u662F\u5426\u5C55\u793A\u5206\u5272\u7EBF</td>
</tr>
<tr>
<td>contentDirection</td>
<td>TDContentDirection</td>
<td>TDContentDirection.right</td>
<td>\u6587\u5B57\u76F8\u5BF9icon\u7684\u65B9\u4F4D</td>
</tr>
<tr>
<td>onCheckBoxChanged</td>
<td>OnCheckValueChanged?</td>
<td>-</td>
<td>\u5207\u6362\u76D1\u542C</td>
</tr>
<tr>
<td>titleColor</td>
<td>Color?</td>
<td>-</td>
<td>\u6807\u9898\u6587\u5B57\u989C\u8272</td>
</tr>
<tr>
<td>subTitleColor</td>
<td>Color?</td>
<td>-</td>
<td>\u526F\u6807\u9898\u6587\u5B57\u989C\u8272</td>
</tr>
<tr>
<td>checkBoxLeftSpace</td>
<td>double?</td>
<td>-</td>
<td>\u9009\u9879\u6846\u5DE6\u4FA7\u95F4\u8DDD</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tdcheckboxgroup">TDCheckboxGroup <a class="header-anchor" href="#tdcheckboxgroup"></a></h3>
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
<td>onChangeGroup</td>
<td>OnGroupChange?</td>
<td>-</td>
<td>\u72B6\u6001\u53D8\u5316\u76D1\u542C\u5668</td>
</tr>
<tr>
<td>controller</td>
<td>TDCheckboxGroupController?</td>
<td>-</td>
<td>\u53EF\u4EE5\u901A\u8FC7\u63A7\u5236\u5668\u64CD\u4F5C\u52FE\u9009\u72B6\u6001</td>
</tr>
<tr>
<td>checkedIds</td>
<td>List<String>?</td>
<td>-</td>
<td>\u52FE\u9009\u7684CheckBox id\u5217\u8868</td>
</tr>
<tr>
<td>maxChecked</td>
<td>int?</td>
<td>-</td>
<td>\u6700\u591A\u53EF\u4EE5\u52FE\u9009\u591A\u5C11</td>
</tr>
<tr>
<td>titleMaxLine</td>
<td>int?</td>
<td>-</td>
<td>CheckBox\u6807\u9898\u7684\u884C\u6570</td>
</tr>
<tr>
<td>customContentBuilder</td>
<td>ContentBuilder?</td>
<td>-</td>
<td>CheckBox\u5B8C\u5168\u81EA\u5B9A\u4E49\u5185\u5BB9</td>
</tr>
<tr>
<td>contentDirection</td>
<td>TDContentDirection?</td>
<td>-</td>
<td>\u6587\u5B57\u76F8\u5BF9icon\u7684\u65B9\u4F4D</td>
</tr>
<tr>
<td>style</td>
<td>TDCheckboxStyle?</td>
<td>-</td>
<td>CheckBox\u590D\u9009\u6846\u6837\u5F0F\uFF1A\u5706\u5F62\u6216\u65B9\u5F62</td>
</tr>
<tr>
<td>spacing</td>
<td>double?</td>
<td>-</td>
<td>CheckBoxicon\u548C\u6587\u5B57\u7684\u8DDD\u79BB</td>
</tr>
<tr>
<td>customIconBuilder</td>
<td>IconBuilder?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u9009\u62E9icon\u7684\u6837\u5F0F</td>
</tr>
<tr>
<td>onOverloadChecked</td>
<td>VoidCallback?</td>
<td>-</td>
<td>\u8D85\u8FC7\u6700\u5927\u53EF\u52FE\u9009\u7684\u4E2A\u6570</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function l(a,s,h,p,x,b){const t=o("tdesign-doc");return r(),i(t)}var g=e(c,[["render",l]]);export{g as default};
