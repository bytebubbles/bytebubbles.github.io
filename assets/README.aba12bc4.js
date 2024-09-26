import{T as n}from"./component.0f8980d6.js";import{_ as d,d as e,r as o,o as i,c as a}from"./site.4473ad53.js";const l=e({props:{docType:String},components:{TdesignDoc:n},provide:{info:{spline:"base",toc:!0,title:"Dialog \u5BF9\u8BDD\u6846",description:"\u7528\u4E8E\u663E\u793A\u91CD\u8981\u63D0\u793A\u6216\u8BF7\u6C42\u7528\u6237\u8FDB\u884C\u91CD\u8981\u64CD\u4F5C\uFF0C\u4E00\u79CD\u6253\u65AD\u5F53\u524D\u64CD\u4F5C\u7684\u6A21\u6001\u89C6\u56FE\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686018,componentName:"dialog",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_dialog_page.dart" target="_blank" rel="noopener noreferrer">td_dialog_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u53CD\u9988\u7C7B\u5BF9\u8BDD\u6846</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildFeedbackNormal(BuildContext context) {
    return TDButton(
      text: '\u53CD\u9988\u7C7B-\u5E26\u6807\u9898',
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      onTap: () {
        showGeneralDialog(
          context: context,
          pageBuilder: (BuildContext buildContext, Animation<double> animation,
              Animation<double> secondaryAnimation) {
            return TDConfirmDialog(
              title: _dialogTitle,
              content: _commonContent,
            );
          },
        );
      },
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildFeedbackNoTitle(BuildContext context) {
    return TDButton(
      text: '\u53CD\u9988\u7C7B-\u65E0\u6807\u9898',
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      onTap: () {
        showGeneralDialog(
          context: context,
          pageBuilder: (BuildContext buildContext, Animation<double> animation,
              Animation<double> secondaryAnimation) {
            return TDConfirmDialog(
              content: _commonContent,
            );
          },
        );
      },
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildFeedbackOnlyTitle(BuildContext context) {
    return TDButton(
      text: '\u53CD\u9988\u7C7B-\u7EAF\u6807\u9898',
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      onTap: () {
        showGeneralDialog(
          context: context,
          pageBuilder: (BuildContext buildContext, Animation<double> animation,
              Animation<double> secondaryAnimation) {
            return TDConfirmDialog(
              title: _dialogTitle,
            );
          },
        );
      },
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildFeedbackLongContent(BuildContext context) {
    return TDButton(
      text: '\u53CD\u9988\u7C7B-\u5185\u5BB9\u8D85\u957F',
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      onTap: () {
        showGeneralDialog(
          context: context,
          pageBuilder: (BuildContext buildContext, Animation<double> animation,
              Animation<double> secondaryAnimation) {
            return TDConfirmDialog(
              title: _dialogTitle,
              content: _longContent,
              contentMaxHeight: 300,
            );
          },
        );
      },
    );
  }</pre>
</td-code-block>
<p>\u786E\u8BA4\u7C7B\u5BF9\u8BDD\u6846</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildConfirmNormal(BuildContext context) {
    return TDButton(
      text: '\u786E\u8BA4\u7C7B-\u5E26\u6807\u9898',
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      onTap: () {
        showGeneralDialog(
          context: context,
          pageBuilder: (BuildContext buildContext, Animation<double> animation,
              Animation<double> secondaryAnimation) {
            return TDAlertDialog(
              title: _dialogTitle,
              content: _commonContent,
            );
          },
        );
      },
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildConfirmNoTitle(BuildContext context) {
    return TDButton(
      text: '\u786E\u8BA4\u7C7B-\u65E0\u6807\u9898',
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      onTap: () {
        showGeneralDialog(
          context: context,
          pageBuilder: (BuildContext buildContext, Animation<double> animation,
              Animation<double> secondaryAnimation) {
            return TDAlertDialog(
              content: _commonContent,
            );
          },
        );
      },
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildConfirmOnlyTitle(BuildContext context) {
    return TDButton(
      text: '\u786E\u8BA4\u7C7B-\u7EAF\u6807\u9898',
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      onTap: () {
        showGeneralDialog(
          context: context,
          pageBuilder: (BuildContext buildContext, Animation<double> animation,
              Animation<double> secondaryAnimation) {
            return TDAlertDialog(
              title: _dialogTitle,
            );
          },
        );
      },
    );
  }</pre>
</td-code-block>
<p>\u8F93\u5165\u7C7B\u5BF9\u8BDD\u6846</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildInputNormal(BuildContext context) {
    return TDButton(
      text: '\u8F93\u5165\u7C7B-\u5E26\u63CF\u8FF0',
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      onTap: () {
        showGeneralDialog(
          context: context,
          pageBuilder: (BuildContext buildContext, Animation<double> animation,
              Animation<double> secondaryAnimation) {
            return TDInputDialog(
              textEditingController: TextEditingController(),
              title: _dialogTitle,
              content: _commonContent,
              hintText: _inputHint,
            );
          },
        );
      },
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildInputNoContent(BuildContext context) {
    return TDButton(
      text: '\u8F93\u5165\u7C7B-\u65E0\u63CF\u8FF0',
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      onTap: () {
        showGeneralDialog(
          context: context,
          pageBuilder: (BuildContext buildContext, Animation<double> animation,
              Animation<double> secondaryAnimation) {
            return TDInputDialog(
              textEditingController: TextEditingController(),
              title: _dialogTitle,
              hintText: _inputHint,
            );
          },
        );
      },
    );
  }</pre>
</td-code-block>
<p>\u5E26\u56FE\u7247\u7684\u5BF9\u8BDD\u6846</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildImageTop(BuildContext context) {
    return TDButton(
      text: '\u56FE\u7247\u7F6E\u9876-\u5E26\u6807\u9898\u63CF\u8FF0',
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      onTap: () {
        showGeneralDialog(
          context: context,
          pageBuilder: (BuildContext buildContext, Animation<double> animation,
              Animation<double> secondaryAnimation) {
            return TDImageDialog(
              image: _demoImage,
              title: _dialogTitle,
              content: _commonContent,
            );
          },
        );
      },
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildImageTopNoTitle(BuildContext context) {
    return TDButton(
      text: '\u56FE\u7247\u7F6E\u9876-\u65E0\u6807\u9898',
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      onTap: () {
        showGeneralDialog(
          context: context,
          pageBuilder: (BuildContext buildContext, Animation<double> animation,
              Animation<double> secondaryAnimation) {
            return TDImageDialog(
              image: _demoImage,
              content: _commonContent,
            );
          },
        );
      },
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildImageTopOnlyTitle(BuildContext context) {
    return TDButton(
      text: '\u56FE\u7247\u7F6E\u9876-\u7EAF\u6807\u9898',
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      onTap: () {
        showGeneralDialog(
          context: context,
          pageBuilder: (BuildContext buildContext, Animation<double> animation,
              Animation<double> secondaryAnimation) {
            return TDImageDialog(
              image: _demoImage,
              title: _dialogTitle,
            );
          },
        );
      },
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildImageMiddle(BuildContext context) {
    return TDButton(
      text: '\u56FE\u7247\u5C45\u4E2D-\u5E26\u6807\u9898\u63CF\u8FF0',
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      onTap: () {
        showGeneralDialog(
          context: context,
          pageBuilder: (BuildContext buildContext, Animation<double> animation,
              Animation<double> secondaryAnimation) {
            return TDImageDialog(
              image: _demoImage,
              title: _dialogTitle,
              content: _commonContent,
              imagePosition: TDDialogImagePosition.middle,
            );
          },
        );
      },
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildImageMiddleOnlyTitle(BuildContext context) {
    return TDButton(
      text: '\u56FE\u7247\u5C45\u4E2D-\u7EAF\u6807\u9898',
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      onTap: () {
        showGeneralDialog(
          context: context,
          pageBuilder: (BuildContext buildContext, Animation<double> animation,
              Animation<double> secondaryAnimation) {
            return TDImageDialog(
              image: _demoImage,
              title: _dialogTitle,
              imagePosition: TDDialogImagePosition.middle,
            );
          },
        );
      },
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildImageMiddleOnlyImage(BuildContext context) {
    return TDButton(
      text: '\u56FE\u7247\u5C45\u4E2D-\u7EAF\u56FE\u7247',
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      onTap: () {
        showGeneralDialog(
          context: context,
          pageBuilder: (BuildContext buildContext, Animation<double> animation,
              Animation<double> secondaryAnimation) {
            return TDImageDialog(
              image: _demoImage,
              imagePosition: TDDialogImagePosition.middle,
            );
          },
        );
      },
    );
  }</pre>
</td-code-block>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B-1">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B-1"></a></h3>
<p>\u6587\u5B57\u6309\u94AE</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildTextButtonSingle(BuildContext context) {
    return TDButton(
      text: '\u5355\u4E2A\u6587\u5B57\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      onTap: () {
        showGeneralDialog(
          context: context,
          pageBuilder: (BuildContext buildContext, Animation<double> animation,
              Animation<double> secondaryAnimation) {
            return TDConfirmDialog(
              title: _dialogTitle,
              content: _commonContent,
              buttonStyle: TDDialogButtonStyle.text,
            );
          },
        );
      },
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildTextButtonDouble(BuildContext context) {
    return TDButton(
      text: '\u5DE6\u53F3\u6587\u5B57\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      onTap: () {
        showGeneralDialog(
          context: context,
          pageBuilder: (BuildContext buildContext, Animation<double> animation,
              Animation<double> secondaryAnimation) {
            return TDAlertDialog(
              title: _dialogTitle,
              content: _commonContent,
              buttonStyle: TDDialogButtonStyle.text,
            );
          },
        );
      },
    );
  }</pre>
</td-code-block>
<p>\u6A2A\u5411\u57FA\u7840\u6309\u94AE</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildNormalButtonSingle(BuildContext context) {
    return TDButton(
      text: '\u5355\u4E2A\u6A2A\u5411\u57FA\u7840\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      onTap: () {
        showGeneralDialog(
          context: context,
          pageBuilder: (BuildContext buildContext, Animation<double> animation,
              Animation<double> secondaryAnimation) {
            return TDConfirmDialog(
              title: _dialogTitle,
              content: _commonContent,
            );
          },
        );
      },
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildNormalButtonDouble(BuildContext context) {
    return TDButton(
      text: '\u5DE6\u53F3\u6A2A\u5411\u57FA\u7840\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      onTap: () {
        showGeneralDialog(
          context: context,
          pageBuilder: (BuildContext buildContext, Animation<double> animation,
              Animation<double> secondaryAnimation) {
            return TDAlertDialog(
              title: _dialogTitle,
              content: _commonContent,
            );
          },
        );
      },
    );
  }</pre>
</td-code-block>
<p>\u7EB5\u5411\u57FA\u7840\u6309\u94AE</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildVerticalButtonDouble(BuildContext context) {
    return TDButton(
      text: '\u4E24\u4E2A\u7EB5\u5411\u57FA\u7840\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      onTap: () {
        showGeneralDialog(
          context: context,
          pageBuilder: (BuildContext buildContext, Animation<double> animation,
              Animation<double> secondaryAnimation) {
            return TDAlertDialog.vertical(
                title: _dialogTitle,
                content: _commonContent,
                buttons: [
                  TDDialogButtonOptions(
                      title: '\u4E3B\u8981\u6309\u94AE',
                      action: () {
                        Navigator.pop(context);
                      },
                      theme: TDButtonTheme.primary),
                  TDDialogButtonOptions(
                      title: '\u6B21\u8981\u6309\u94AE',
                      titleColor: TDTheme.of(context).brandColor7,
                      action: () {
                        Navigator.pop(context);
                      },
                      theme: TDButtonTheme.light),
                ]);
          },
        );
      },
    );
  }</pre>
</td-code-block>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildVerticalButtonTriple(BuildContext context) {
    return TDButton(
      text: '\u4E09\u4E2A\u7EB5\u5411\u57FA\u7840\u6309\u94AE',
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      onTap: () {
        showGeneralDialog(
          context: context,
          pageBuilder: (BuildContext buildContext, Animation<double> animation,
              Animation<double> secondaryAnimation) {
            return TDAlertDialog.vertical(
                title: _dialogTitle,
                content: _commonContent,
                buttons: [
                  TDDialogButtonOptions(
                      title: '\u4E3B\u8981\u6309\u94AE',
                      action: () {
                        Navigator.pop(context);
                      },
                      theme: TDButtonTheme.primary),
                  TDDialogButtonOptions(
                      title: '\u6B21\u8981\u6309\u94AE',
                      titleColor: TDTheme.of(context).brandColor7,
                      action: () {
                        Navigator.pop(context);
                      },
                      theme: TDButtonTheme.light),
                  TDDialogButtonOptions(
                      title: '\u6B21\u8981\u6309\u94AE',
                      titleColor: TDTheme.of(context).brandColor7,
                      action: () {
                        Navigator.pop(context);
                      },
                      theme: TDButtonTheme.light),
                ]);
          },
        );
      },
    );
  }</pre>
</td-code-block>
<p>\u5E26\u5173\u95ED\u6309\u94AE\u7684\u5BF9\u8BDD\u6846</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildDialogWithCloseButton(BuildContext context) {
    return TDButton(
      text: '\u5E26\u5173\u95ED\u6309\u94AE\u7684\u5BF9\u8BDD\u6846',
      size: TDButtonSize.large,
      type: TDButtonType.outline,
      theme: TDButtonTheme.primary,
      onTap: () {
        showGeneralDialog(
          context: context,
          pageBuilder: (BuildContext buildContext, Animation<double> animation,
              Animation<double> secondaryAnimation) {
            return TDConfirmDialog(
              title: _dialogTitle,
              content: _commonContent,
              showCloseButton: true,
            );
          },
        );
      },
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdimagedialog">TDImageDialog</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tddialogbuttonoptions">TDDialogButtonOptions</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdconfirmdialog">TDConfirmDialog</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdinputdialog">TDInputDialog</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdalertdialog">TDAlertDialog</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tddialogscaffold">TDDialogScaffold</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tddialogtitle">TDDialogTitle</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tddialogcontent">TDDialogContent</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tddialoginfowidget">TDDialogInfoWidget</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#horizontalnormalbuttons">HorizontalNormalButtons</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#horizontaltextbuttons">HorizontalTextButtons</a><ol class="tdesign-toc_list"></ol></li><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tddialogbutton">TDDialogButton</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdimagedialog">TDImageDialog <a class="header-anchor" href="#tdimagedialog"></a></h3>
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
<td>image</td>
<td>Image</td>
<td>-</td>
<td>\u56FE\u7247</td>
</tr>
<tr>
<td>imagePosition</td>
<td>TDDialogImagePosition?</td>
<td>TDDialogImagePosition.top</td>
<td>\u56FE\u7247\u4F4D\u7F6E</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>Color</td>
<td>Colors.white</td>
<td>\u80CC\u666F\u989C\u8272</td>
</tr>
<tr>
<td>radius</td>
<td>double</td>
<td>12.0</td>
<td>\u5706\u89D2</td>
</tr>
<tr>
<td>title</td>
<td>String?</td>
<td>-</td>
<td>\u6807\u9898</td>
</tr>
<tr>
<td>titleColor</td>
<td>Color</td>
<td>const Color(0xE6000000)</td>
<td>\u6807\u9898\u989C\u8272</td>
</tr>
<tr>
<td>titleAlignment</td>
<td>AlignmentGeometry?</td>
<td>-</td>
<td>\u6807\u9898\u5BF9\u9F50\u6A21\u5F0F</td>
</tr>
<tr>
<td>contentWidget</td>
<td>Widget?</td>
<td>-</td>
<td>\u5185\u5BB9Widget</td>
</tr>
<tr>
<td>content</td>
<td>String?</td>
<td>-</td>
<td>\u5185\u5BB9</td>
</tr>
<tr>
<td>contentColor</td>
<td>Color?</td>
<td>-</td>
<td>\u5185\u5BB9\u989C\u8272</td>
</tr>
<tr>
<td>leftBtn</td>
<td>TDDialogButtonOptions?</td>
<td>-</td>
<td>\u5DE6\u4FA7\u6309\u94AE\u914D\u7F6E</td>
</tr>
<tr>
<td>rightBtn</td>
<td>TDDialogButtonOptions?</td>
<td>-</td>
<td>\u53F3\u4FA7\u6309\u94AE\u914D\u7F6E</td>
</tr>
<tr>
<td>showCloseButton</td>
<td>bool?</td>
<td>-</td>
<td>\u663E\u793A\u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tddialogbuttonoptions">TDDialogButtonOptions <a class="header-anchor" href="#tddialogbuttonoptions"></a></h3>
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
<td>title</td>
<td>String</td>
<td>-</td>
<td>\u6807\u9898\u5185\u5BB9</td>
</tr>
<tr>
<td>action</td>
<td>Function()?</td>
<td>-</td>
<td>\u70B9\u51FB\u64CD\u4F5C</td>
</tr>
<tr>
<td>titleColor</td>
<td>Color?</td>
<td>-</td>
<td>\u6807\u9898\u989C\u8272</td>
</tr>
<tr>
<td>style</td>
<td>TDButtonStyle?</td>
<td>-</td>
<td>\u6309\u94AE\u6837\u5F0F</td>
</tr>
<tr>
<td>type</td>
<td>TDButtonType?</td>
<td>-</td>
<td>\u6309\u94AE\u7C7B\u578B</td>
</tr>
<tr>
<td>theme</td>
<td>TDButtonTheme?</td>
<td>-</td>
<td>\u6309\u94AE\u7C7B\u578B</td>
</tr>
<tr>
<td>height</td>
<td>double?</td>
<td>-</td>
<td>\u6309\u94AE\u9AD8\u5EA6</td>
</tr>
<tr>
<td>fontWeight</td>
<td>FontWeight?</td>
<td>-</td>
<td>\u5B57\u4F53\u7C97\u7EC6</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tdconfirmdialog">TDConfirmDialog <a class="header-anchor" href="#tdconfirmdialog"></a></h3>
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
<td>key</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>action</td>
<td>Function()?</td>
<td>-</td>
<td>\u70B9\u51FB</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>Color</td>
<td>Colors.white</td>
<td>\u80CC\u666F\u989C\u8272</td>
</tr>
<tr>
<td>radius</td>
<td>double</td>
<td>12.0</td>
<td>\u5706\u89D2</td>
</tr>
<tr>
<td>title</td>
<td>String?</td>
<td>-</td>
<td>\u6807\u9898</td>
</tr>
<tr>
<td>titleColor</td>
<td>Color</td>
<td>const Color(0xE6000000)</td>
<td>\u6807\u9898\u989C\u8272</td>
</tr>
<tr>
<td>titleAlignment</td>
<td>AlignmentGeometry?</td>
<td>-</td>
<td>\u6807\u9898\u5BF9\u9F50\u6A21\u5F0F</td>
</tr>
<tr>
<td>contentWidget</td>
<td>Widget?</td>
<td>-</td>
<td>\u5185\u5BB9Widget</td>
</tr>
<tr>
<td>content</td>
<td>String?</td>
<td>-</td>
<td>\u5185\u5BB9</td>
</tr>
<tr>
<td>contentColor</td>
<td>Color?</td>
<td>-</td>
<td>\u5185\u5BB9\u989C\u8272</td>
</tr>
<tr>
<td>contentMaxHeight</td>
<td>double</td>
<td>0</td>
<td>\u5185\u5BB9\u7684\u6700\u5927\u9AD8\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A0\uFF0C\u4E5F\u5C31\u662F\u4E0D\u9650\u5236\u9AD8\u5EA6</td>
</tr>
<tr>
<td>buttonText</td>
<td>String?</td>
<td>-</td>
<td>\u6309\u94AE\u6587\u5B57</td>
</tr>
<tr>
<td>buttonTextColor</td>
<td>Color?</td>
<td>-</td>
<td>\u6309\u94AE\u6587\u5B57\u989C\u8272</td>
</tr>
<tr>
<td>buttonStyle</td>
<td>TDDialogButtonStyle</td>
<td>TDDialogButtonStyle.normal</td>
<td>\u6309\u94AE\u6837\u5F0F</td>
</tr>
<tr>
<td>showCloseButton</td>
<td>bool?</td>
<td>-</td>
<td>\u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tdinputdialog">TDInputDialog <a class="header-anchor" href="#tdinputdialog"></a></h3>
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
<td>key</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>textEditingController</td>
<td>TextEditingController</td>
<td>-</td>
<td>\u8F93\u5165controller</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>Color</td>
<td>Colors.white</td>
<td>\u80CC\u666F\u989C\u8272</td>
</tr>
<tr>
<td>radius</td>
<td>double</td>
<td>12.0</td>
<td>\u5706\u89D2</td>
</tr>
<tr>
<td>title</td>
<td>String?</td>
<td>-</td>
<td>\u6807\u9898</td>
</tr>
<tr>
<td>titleColor</td>
<td>Color</td>
<td>const Color(0xE6000000)</td>
<td>\u6807\u9898\u989C\u8272</td>
</tr>
<tr>
<td>titleAlignment</td>
<td>AlignmentGeometry?</td>
<td>-</td>
<td>\u6807\u9898\u5BF9\u9F50\u6A21\u5F0F</td>
</tr>
<tr>
<td>contentWidget</td>
<td>Widget?</td>
<td>-</td>
<td>\u5185\u5BB9Widget</td>
</tr>
<tr>
<td>content</td>
<td>String?</td>
<td>-</td>
<td>\u5185\u5BB9</td>
</tr>
<tr>
<td>hintText</td>
<td>String?</td>
<td>''</td>
<td>\u8F93\u5165\u63D0\u793A</td>
</tr>
<tr>
<td>contentColor</td>
<td>Color?</td>
<td>-</td>
<td>\u5185\u5BB9\u989C\u8272</td>
</tr>
<tr>
<td>leftBtn</td>
<td>TDDialogButtonOptions?</td>
<td>-</td>
<td>\u5DE6\u4FA7\u6309\u94AE\u914D\u7F6E</td>
</tr>
<tr>
<td>rightBtn</td>
<td>TDDialogButtonOptions?</td>
<td>-</td>
<td>\u53F3\u4FA7\u6309\u94AE\u914D\u7F6E</td>
</tr>
<tr>
<td>showCloseButton</td>
<td>bool?</td>
<td>-</td>
<td>\u663E\u793A\u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tdalertdialog">TDAlertDialog <a class="header-anchor" href="#tdalertdialog"></a></h3>
<h4 id="\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5-4">\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5 <a class="header-anchor" href="#\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5-4"></a></h4>
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
<td>backgroundColor</td>
<td>Color</td>
<td>Colors.white</td>
<td>\u80CC\u666F\u989C\u8272</td>
</tr>
<tr>
<td>radius</td>
<td>double</td>
<td>12.0</td>
<td>\u5706\u89D2</td>
</tr>
<tr>
<td>title</td>
<td>String?</td>
<td>-</td>
<td>\u6807\u9898</td>
</tr>
<tr>
<td>titleColor</td>
<td>Color</td>
<td>const Color(0xE6000000)</td>
<td>\u6807\u9898\u989C\u8272</td>
</tr>
<tr>
<td>content</td>
<td>String?</td>
<td>-</td>
<td>\u5185\u5BB9</td>
</tr>
<tr>
<td>contentColor</td>
<td>Color?</td>
<td>-</td>
<td>\u5185\u5BB9\u989C\u8272</td>
</tr>
<tr>
<td>titleAlignment</td>
<td>AlignmentGeometry?</td>
<td>-</td>
<td>\u6807\u9898\u5BF9\u9F50\u6A21\u5F0F</td>
</tr>
<tr>
<td>contentWidget</td>
<td>Widget?</td>
<td>-</td>
<td>\u5185\u5BB9Widget</td>
</tr>
<tr>
<td>contentMaxHeight</td>
<td>double</td>
<td>0</td>
<td>\u5185\u5BB9\u7684\u6700\u5927\u9AD8\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A0\uFF0C\u4E5F\u5C31\u662F\u4E0D\u9650\u5236\u9AD8\u5EA6</td>
</tr>
<tr>
<td>leftBtn</td>
<td>TDDialogButtonOptions?</td>
<td>-</td>
<td>\u5DE6\u4FA7\u6309\u94AE\u914D\u7F6E</td>
</tr>
<tr>
<td>rightBtn</td>
<td>TDDialogButtonOptions?</td>
<td>-</td>
<td>\u53F3\u4FA7\u6309\u94AE\u914D\u7F6E</td>
</tr>
<tr>
<td>leftBtnAction</td>
<td>Function()?</td>
<td>-</td>
<td>\u5DE6\u4FA7\u6309\u94AE\u9ED8\u8BA4\u70B9\u51FB</td>
</tr>
<tr>
<td>rightBtnAction</td>
<td>Function()?</td>
<td>-</td>
<td>\u53F3\u4FA7\u6309\u94AE\u9ED8\u8BA4\u70B9\u51FB</td>
</tr>
<tr>
<td>showCloseButton</td>
<td>bool?</td>
<td>-</td>
<td>\u663E\u793A\u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE</td>
</tr>
<tr>
<td>buttonStyle</td>
<td></td>
<td>TDDialogButtonStyle.normal</td>
<td></td>
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
<td>TDAlertDialog.vertical</td>
<td>\u7EB5\u5411\u6309\u94AE\u6392\u5217\u7684\u5BF9\u8BDD\u6846</td>
</tr>
</tbody>
</table>
<p>[buttons]\u53C2\u6570\u662F\u5FC5\u987B\u7684\uFF0C\u7EB5\u5411\u6309\u94AE\u9ED8\u8BA4\u6837\u5F0F\u90FD\u662F[TDButtonTheme.primary] |</p>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tddialogscaffold">TDDialogScaffold <a class="header-anchor" href="#tddialogscaffold"></a></h3>
<h4 id="\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5-5">\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5 <a class="header-anchor" href="#\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5-5"></a></h4>
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
<td>body</td>
<td>Widget</td>
<td>-</td>
<td>Dialog\u4E3B\u4F53</td>
</tr>
<tr>
<td>showCloseButton</td>
<td>bool?</td>
<td>-</td>
<td>\u663E\u793A\u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>Color</td>
<td>Colors.white</td>
<td>\u80CC\u666F\u8272</td>
</tr>
<tr>
<td>radius</td>
<td>double</td>
<td>12.0</td>
<td>\u5706\u89D2</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tddialogtitle">TDDialogTitle <a class="header-anchor" href="#tddialogtitle"></a></h3>
<h4 id="\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5-6">\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5 <a class="header-anchor" href="#\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5-6"></a></h4>
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
<td>title</td>
<td>String?</td>
<td>-</td>
<td>\u6807\u9898\u6587\u5B57</td>
</tr>
<tr>
<td>titleColor</td>
<td>Color</td>
<td>Colors.black</td>
<td>\u6807\u9898\u989C\u8272</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tddialogcontent">TDDialogContent <a class="header-anchor" href="#tddialogcontent"></a></h3>
<h4 id="\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5-7">\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5 <a class="header-anchor" href="#\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5-7"></a></h4>
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
<td>content</td>
<td>String?</td>
<td>-</td>
<td>\u6807\u9898\u6587\u5B57</td>
</tr>
<tr>
<td>contentColor</td>
<td>Color</td>
<td>const Color(0x99000000)</td>
<td>\u6807\u9898\u989C\u8272</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tddialoginfowidget">TDDialogInfoWidget <a class="header-anchor" href="#tddialoginfowidget"></a></h3>
<h4 id="\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5-8">\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5 <a class="header-anchor" href="#\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5-8"></a></h4>
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
<td>title</td>
<td>String?</td>
<td>-</td>
<td>\u6807\u9898</td>
</tr>
<tr>
<td>titleColor</td>
<td>Color</td>
<td>Colors.black</td>
<td>\u6807\u9898\u989C\u8272</td>
</tr>
<tr>
<td>titleAlignment</td>
<td>AlignmentGeometry?</td>
<td>-</td>
<td>\u6807\u9898\u5BF9\u9F50\u6A21\u5F0F</td>
</tr>
<tr>
<td>contentWidget</td>
<td>Widget?</td>
<td>-</td>
<td>\u5185\u5BB9Widget</td>
</tr>
<tr>
<td>content</td>
<td>String?</td>
<td>-</td>
<td>\u5185\u5BB9</td>
</tr>
<tr>
<td>contentColor</td>
<td>Color?</td>
<td>-</td>
<td>\u5185\u5BB9\u989C\u8272</td>
</tr>
<tr>
<td>contentMaxHeight</td>
<td>double</td>
<td>0</td>
<td>\u5185\u5BB9\u7684\u6700\u5927\u9AD8\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A0\uFF0C\u4E5F\u5C31\u662F\u4E0D\u9650\u5236\u9AD8\u5EA6</td>
</tr>
<tr>
<td>padding</td>
<td>EdgeInsetsGeometry?</td>
<td>const EdgeInsets.fromLTRB(24, 32, 24, 0)</td>
<td>\u5185\u5BB9\u7684\u5185\u8FB9\u8DDD</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="horizontalnormalbuttons">HorizontalNormalButtons <a class="header-anchor" href="#horizontalnormalbuttons"></a></h3>
<h4 id="\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5-9">\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5 <a class="header-anchor" href="#\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5-9"></a></h4>
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
<td>leftBtn</td>
<td>TDDialogButtonOptions</td>
<td>-</td>
<td>\u5DE6\u6309\u94AE</td>
</tr>
<tr>
<td>rightBtn</td>
<td>TDDialogButtonOptions</td>
<td>-</td>
<td>\u53F3\u6309\u94AE</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="horizontaltextbuttons">HorizontalTextButtons <a class="header-anchor" href="#horizontaltextbuttons"></a></h3>
<h4 id="\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5-10">\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5 <a class="header-anchor" href="#\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5-10"></a></h4>
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
<td>leftBtn</td>
<td>TDDialogButtonOptions</td>
<td>-</td>
<td>\u5DE6\u6309\u94AE</td>
</tr>
<tr>
<td>rightBtn</td>
<td>TDDialogButtonOptions</td>
<td>-</td>
<td>\u53F3\u6309\u94AE</td>
</tr>
</tbody>
</table>
<div class="language-"><pre v-pre><code></code></pre>
</div><h3 id="tddialogbutton">TDDialogButton <a class="header-anchor" href="#tddialogbutton"></a></h3>
<h4 id="\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5-11">\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5 <a class="header-anchor" href="#\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5-11"></a></h4>
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
<td>buttonText</td>
<td>String?</td>
<td>-</td>
<td>\u6309\u94AE\u6587\u5B57</td>
</tr>
<tr>
<td>buttonTextColor</td>
<td>Color?</td>
<td>-</td>
<td>\u6309\u94AE\u6587\u5B57\u989C\u8272</td>
</tr>
<tr>
<td>buttonTextFontWeight</td>
<td>FontWeight?</td>
<td>FontWeight.w600</td>
<td>\u6309\u94AE\u6587\u5B57\u7C97\u7EC6</td>
</tr>
<tr>
<td>buttonStyle</td>
<td>TDButtonStyle?</td>
<td>-</td>
<td>\u6309\u94AE\u6837\u5F0F</td>
</tr>
<tr>
<td>buttonType</td>
<td>TDButtonType?</td>
<td>-</td>
<td>\u6309\u94AE\u7C7B\u578B</td>
</tr>
<tr>
<td>buttonTheme</td>
<td>TDButtonTheme?</td>
<td>-</td>
<td>\u6309\u94AE\u4E3B\u9898</td>
</tr>
<tr>
<td>onPressed</td>
<td>Function()</td>
<td>-</td>
<td>\u70B9\u51FB</td>
</tr>
<tr>
<td>height</td>
<td>double?</td>
<td>40.0</td>
<td>\u6309\u94AE\u9AD8\u5EA6</td>
</tr>
<tr>
<td>width</td>
<td>double?</td>
<td>-</td>
<td>\u6309\u94AE\u5BBD\u5EA6</td>
</tr>
<tr>
<td>isBlock</td>
<td>bool</td>
<td>true</td>
<td>\u6309\u94AE\u9AD8\u5EA6</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function r(c,s,g,u,h,p){const t=o("tdesign-doc");return i(),a(t)}var T=d(l,[["render",r]]);export{T as default};
