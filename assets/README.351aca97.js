import{T as e}from"./component.f9e366e0.js";import{_ as t,d as l,r as o,o as r,c as d}from"./site.66dd0425.js";const i=l({props:{docType:String},components:{TdesignDoc:e},provide:{info:{spline:"base",toc:!0,title:"Swipecell \u6ED1\u52A8\u64CD\u4F5C",description:"\u7528\u4E8E\u627F\u8F7D\u5217\u8868\u4E2D\u7684\u66F4\u591A\u64CD\u4F5C\uFF0C\u901A\u8FC7\u5DE6\u53F3\u6ED1\u52A8\u6765\u5C55\u793A\uFF0C\u6309\u94AE\u7684\u5BBD\u5EA6\u56FA\u5B9A\u9AD8\u5EA6\u6839\u636E\u5217\u8868\u9AD8\u5EA6\u800C\u53D8\u5316\u3002",isComponent:!0,tdDocHeader:!0,tdDocTabs:[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],apiFlag:{},docClass:"",lastUpdated:1723434686020,componentName:"swipe-cell",docMd:"<td-doc-empty></td-doc-empty>",demoMd:`<p><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span></p>
<h2 id="\u5F15\u5165">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165"></a></h2>
<p>\u5728tdesign_flutter/tdesign_flutter.dart\u4E2D\u6709\u6240\u6709\u7EC4\u4EF6\u7684\u8DEF\u5F84\u3002</p>
<div class="language-dart"><pre v-pre><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:tdesign_flutter/tdesign_flutter.dart'</span></span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="\u4EE3\u7801\u6F14\u793A">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A"></a></h2>
<p><a href="https://github.com/Tencent/tdesign-flutter/blob/main/tdesign-component/example/lib/page/td_swipe_cell_page.dart" target="_blank" rel="noopener noreferrer">td_swipe_cell_page.dart</a></p>
<h3 id="_1-\u7EC4\u4EF6\u7C7B\u578B">1 \u7EC4\u4EF6\u7C7B\u578B <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u7C7B\u578B"></a></h3>
<p>\u5DE6\u6ED1\u5355\u64CD\u4F5C</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSwiperCell(BuildContext context) {
    // \u5C4F\u5E55\u5BBD\u5EA6
    var screenWidth = MediaQuery.of(context).size.width;
    var list = [
      {'id': '1', 'title': '\u5DE6\u6ED1\u64CD\u4F5C', 'note': '\u8F85\u52A9\u4FE1\u606F', 'description': ''},
      {'id': '2', 'title': '\u5DE6\u6ED1\u64CD\u4F5C', 'note': '\u8F85\u52A9\u4FE1\u606F', 'description': '\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u6587\u5B57'},
    ];
    final cellLength = ValueNotifier<int>(list.length);
    return ValueListenableBuilder(
      valueListenable: cellLength,
      builder: (BuildContext context, value, Widget? child) {
        return TDCellGroup(
          cells: list.map((e) => TDCell(title: e['title'], note: e['note'], description: e['description'])).toList(),
          builder: (context, cell, index) {
            return TDSwipeCell(
              slidableKey: ValueKey(list[index]['id']),
              groupTag: 'test',
              onChange: (direction, open) {
                print('\u6253\u5F00\u65B9\u5411\uFF1A$direction');
                print('\u6253\u5F00\u8F6C\u6001$open');
              },
              right: TDSwipeCellPanel(
                extentRatio: 60 / screenWidth,
                // dragDismissible: true,
                onDismissed: (context) {
                  list.removeAt(index);
                  cellLength.value = list.length;
                },
                children: [
                  TDSwipeCellAction(
                    backgroundColor: TDTheme.of(context).errorColor6,
                    label: '\u5220\u9664',
                    onPressed: (context) {
                      print('\u70B9\u51FBaction');
                      print(TDSwipeCell.of(context));
                      print(TDSwipeCellInherited.of(context)?.controller);
                      list.removeAt(index);
                      cellLength.value = list.length;
                    },
                  ),
                ],
              ),
              cell: cell,
            );
          },
        );
      },
    );
  }</pre>
</td-code-block>
<p>\u5DE6\u6ED1\u53CC\u64CD\u4F5C</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSwiperMuliCell(BuildContext context) {
    // \u5C4F\u5E55\u5BBD\u5EA6
    var screenWidth = MediaQuery.of(context).size.width;
    return TDSwipeCell(
      groupTag: 'test',
      right: TDSwipeCellPanel(
        extentRatio: 120 / screenWidth,
        children: [
          TDSwipeCellAction(
            flex: 60,
            backgroundColor: TDTheme.of(context).warningColor4,
            label: '\u7F16\u8F91',
          ),
          TDSwipeCellAction(
            flex: 60,
            backgroundColor: TDTheme.of(context).errorColor6,
            label: '\u5220\u9664',
          ),
        ],
      ),
      cell: const TDCell(
        title: '\u5DE6\u6ED1\u64CD\u4F5C',
        note: '\u8F85\u52A9\u4FE1\u606F',
      ),
    );
  }</pre>
</td-code-block>
<p>\u5DE6\u6ED1\u4E09\u64CD\u4F5C</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSwiper3Cell(BuildContext context) {
    // \u5C4F\u5E55\u5BBD\u5EA6
    var screenWidth = MediaQuery.of(context).size.width;
    return TDSwipeCell(
      groupTag: 'test',
      right: TDSwipeCellPanel(
        extentRatio: 180 / screenWidth,
        children: [
          TDSwipeCellAction(
            flex: 60,
            backgroundColor: TDTheme.of(context).brandColor7,
            label: '\u4FDD\u5B58',
          ),
          TDSwipeCellAction(
            flex: 60,
            backgroundColor: TDTheme.of(context).warningColor4,
            label: '\u7F16\u8F91',
          ),
          TDSwipeCellAction(
            flex: 60,
            backgroundColor: TDTheme.of(context).errorColor6,
            label: '\u5220\u9664',
          ),
        ],
      ),
      cell: const TDCell(
        title: '\u5DE6\u6ED1\u64CD\u4F5C',
        note: '\u8F85\u52A9\u4FE1\u606F',
      ),
    );
  }</pre>
</td-code-block>
<p>\u53F3\u6ED1\u5355\u64CD\u4F5C</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSwiperRightCell(BuildContext context) {
    // \u5C4F\u5E55\u5BBD\u5EA6
    var screenWidth = MediaQuery.of(context).size.width;
    return TDSwipeCell(
      groupTag: 'test',
      left: TDSwipeCellPanel(
        extentRatio: 60 / screenWidth,
        children: [
          TDSwipeCellAction(
            backgroundColor: TDTheme.of(context).brandColor7,
            label: '\u9009\u62E9',
          ),
        ],
      ),
      cell: const TDCell(
        title: '\u53F3\u6ED1\u64CD\u4F5C',
        note: '\u8F85\u52A9\u4FE1\u606F',
      ),
    );
  }</pre>
</td-code-block>
<p>\u5DE6\u53F3\u6ED1\u64CD\u4F5C</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSwiperRightLeftCell(BuildContext context) {
    // \u5C4F\u5E55\u5BBD\u5EA6
    var screenWidth = MediaQuery.of(context).size.width;
    return TDSwipeCell(
      groupTag: 'test',
      left: TDSwipeCellPanel(
        extentRatio: 60 / screenWidth,
        children: [
          TDSwipeCellAction(
            backgroundColor: TDTheme.of(context).brandColor7,
            label: '\u9009\u62E9',
          ),
        ],
      ),
      right: TDSwipeCellPanel(
        extentRatio: 120 / screenWidth,
        children: [
          TDSwipeCellAction(
            flex: 60,
            backgroundColor: TDTheme.of(context).warningColor4,
            label: '\u7F16\u8F91',
          ),
          TDSwipeCellAction(
            flex: 60,
            backgroundColor: TDTheme.of(context).errorColor6,
            label: '\u5220\u9664',
          ),
        ],
      ),
      cell: const TDCell(
        title: '\u5DE6\u53F3\u6ED1\u64CD\u4F5C',
        note: '\u8F85\u52A9\u4FE1\u606F',
      ),
    );
  }</pre>
</td-code-block>
<p>\u5E26\u56FE\u6807\u7684\u6ED1\u52A8\u64CD\u4F5C</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSwiperIconCell(BuildContext context) {
    // \u5C4F\u5E55\u5BBD\u5EA6
    var screenWidth = MediaQuery.of(context).size.width;
    return ListView.separated(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      itemCount: 3,
      itemBuilder: (context, index) {
        if (index == 0) {
          return TDSwipeCell(
            groupTag: 'test',
            right: TDSwipeCellPanel(
              extentRatio: (80 + 80) / screenWidth,
              children: [
                TDSwipeCellAction(
                  flex: 80,
                  backgroundColor: TDTheme.of(context).warningColor4,
                  icon: TDIcons.edit,
                  label: '\u7F16\u8F91',
                ),
                TDSwipeCellAction(
                  flex: 80,
                  backgroundColor: TDTheme.of(context).errorColor6,
                  icon: TDIcons.delete,
                  label: '\u5220\u9664',
                ),
              ],
            ),
            cell: const TDCell(
              title: '\u53F3\u6ED1\u64CD\u4F5C',
              note: '\u8F85\u52A9\u4FE1\u606F',
            ),
          );
        } else if (index == 1) {
          return TDSwipeCell(
            groupTag: 'test',
            right: TDSwipeCellPanel(
              extentRatio: 120 / screenWidth,
              children: [
                TDSwipeCellAction(
                  flex: 60,
                  backgroundColor: TDTheme.of(context).warningColor4,
                  icon: TDIcons.edit,
                ),
                TDSwipeCellAction(
                  flex: 60,
                  backgroundColor: TDTheme.of(context).errorColor6,
                  icon: TDIcons.delete,
                ),
              ],
            ),
            cell: const TDCell(
              title: '\u53F3\u6ED1\u64CD\u4F5C',
              note: '\u8F85\u52A9\u4FE1\u606F',
            ),
          );
        } else {
          return TDSwipeCell(
            groupTag: 'test',
            right: TDSwipeCellPanel(
              extentRatio: 120 / screenWidth,
              children: [
                TDSwipeCellAction(
                  flex: 60,
                  backgroundColor: TDTheme.of(context).warningColor4,
                  direction: Axis.vertical,
                  icon: TDIcons.edit,
                  label: '\u7F16\u8F91',
                ),
                TDSwipeCellAction(
                  flex: 60,
                  backgroundColor: TDTheme.of(context).errorColor6,
                  direction: Axis.vertical,
                  icon: TDIcons.delete,
                  label: '\u5220\u9664',
                ),
              ],
            ),
            cell: const TDCell(
              title: '\u53F3\u6ED1\u64CD\u4F5C',
              note: '\u8F85\u52A9\u4FE1\u606F',
              description: '\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u6587\u5B57',
            ),
          );
        }
      },
      separatorBuilder: (context, index) {
        return const SizedBox(height: 24);
      },
    );
  }</pre>
</td-code-block>
<p>\u5E26\u4E8C\u6B21\u786E\u8BA4\u7684\u64CD\u4F5C</p>
<td-code-block panel="Dart">
  <pre slot="Dart" lang="javascript">
  Widget _buildSwiperConfirmCell(BuildContext context) {
    // \u5C4F\u5E55\u5BBD\u5EA6
    var screenWidth = MediaQuery.of(context).size.width;
    return TDSwipeCell(
      groupTag: 'test',
      right: TDSwipeCellPanel(
        extentRatio: (60 + 60) / screenWidth,
        children: [
          TDSwipeCellAction(
            flex: 60,
            backgroundColor: TDTheme.of(context).warningColor4,
            label: '\u7F16\u8F91',
          ),
          TDSwipeCellAction(
            flex: 60,
            backgroundColor: TDTheme.of(context).errorColor6,
            label: '\u5220\u9664',
          ),
        ],
        confirms: [
          TDSwipeCellAction(
            backgroundColor: TDTheme.of(context).errorColor6,
            label: '\u786E\u8BA4\u5220\u9664',
            confirmIndex: const [1],
          ),
        ],
      ),
      cell: const TDCell(
        title: '\u53F3\u6ED1\u64CD\u4F5C',
        note: '\u8F85\u52A9\u4FE1\u606F',
      ),
    );
  }</pre>
</td-code-block>
`,apiMd:`<nav class="tdesign-toc_container"><ol class="tdesign-toc_list"><li class="tdesign-toc_list_item"><a class="tdesign-toc_list_item_a" href="#tdswipecell">TDSwipeCell</a><ol class="tdesign-toc_list"></ol></li></ol></nav><h3 id="tdswipecell">TDSwipeCell <a class="header-anchor" href="#tdswipecell"></a></h3>
<h4 id="\u7B80\u4ECB">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB"></a></h4>
<p>\u6ED1\u52A8\u5355\u5143\u683C\u7EC4\u4EF6</p>
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
<td>slidableKey</td>
<td>Key?</td>
<td>-</td>
<td>\u6ED1\u52A8\u7EC4\u4EF6\u7684 Key</td>
</tr>
<tr>
<td>cell</td>
<td>Widget</td>
<td>-</td>
<td>\u5355\u5143\u683C [TDCell]</td>
</tr>
<tr>
<td>disabled</td>
<td>bool?</td>
<td>false</td>
<td>\u662F\u5426\u7981\u7528\u6ED1\u52A8</td>
</tr>
<tr>
<td>opened</td>
<td>List<bool>?</td>
<td>const [false, false]</td>
<td>\u9ED8\u8BA4\u6253\u5F00\uFF0C[left, right]</td>
</tr>
<tr>
<td>right</td>
<td>TDSwipeCellPanel?</td>
<td>-</td>
<td>\u53F3\u4FA7\u6ED1\u52A8\u64CD\u4F5C\u9879\u9762\u677F</td>
</tr>
<tr>
<td>left</td>
<td>TDSwipeCellPanel?</td>
<td>-</td>
<td>\u5DE6\u4FA7\u6ED1\u52A8\u64CD\u4F5C\u9879\u9762\u677F</td>
</tr>
<tr>
<td>onChange</td>
<td>Function(TDSwipeDirection direction, bool open)?</td>
<td>-</td>
<td>\u6ED1\u52A8\u5C55\u5F00\u4E8B\u4EF6</td>
</tr>
<tr>
<td>controller</td>
<td>SlidableController?</td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u63A7\u5236\u6ED1\u52A8\u7A97\u53E3</td>
</tr>
<tr>
<td>groupTag</td>
<td>Object?</td>
<td>-</td>
<td>\u7EC4\uFF0C\u914D\u7F6E\u540E\uFF0C[closeWhenOpened]\u3001[closeWhenTapped]\u624D\u8D77\u4F5C\u7528</td>
</tr>
<tr>
<td>closeWhenOpened</td>
<td>bool?</td>
<td>true</td>
<td>\u5F53\u540C\u4E00\u7EC4\uFF08[groupTag]\uFF09\u4E2D\u7684\u4E00\u4E2A[TDSwipeCell]\u6253\u5F00\u65F6\uFF0C\u662F\u5426\u5173\u95ED\u7EC4\u4E2D\u7684\u6240\u6709\u5176\u4ED6[TDSwipeCell]</td>
</tr>
<tr>
<td>closeWhenTapped</td>
<td>bool?</td>
<td>true</td>
<td>\u5F53\u540C\u4E00\u7EC4\uFF08[groupTag]\uFF09\u4E2D\u7684\u4E00\u4E2A[TDSwipeCell]\u88AB\u70B9\u51FB\u65F6\uFF0C\u662F\u5426\u5E94\u8BE5\u5173\u95ED\u7EC4\u4E2D\u7684\u6240\u6709[TDSwipeCell]</td>
</tr>
<tr>
<td>dragStartBehavior</td>
<td>DragStartBehavior?</td>
<td>DragStartBehavior.start</td>
<td>\u5904\u7406\u62D6\u52A8\u5F00\u59CB\u884C\u4E3A\u7684\u65B9\u5F0F[GestureDetector.dragStartBehavior]</td>
</tr>
<tr>
<td>direction</td>
<td>Axis?</td>
<td>Axis.horizontal</td>
<td>\u53EF\u62D6\u52A8\u7684\u65B9\u5411</td>
</tr>
<tr>
<td>duration</td>
<td>Duration?</td>
<td>const Duration(milliseconds: 200)</td>
<td>\u6253\u5F00\u5173\u95ED\u52A8\u753B\u65F6\u957F</td>
</tr>
</tbody>
</table>
<h4 id="\u9759\u6001\u65B9\u6CD5">\u9759\u6001\u65B9\u6CD5 <a class="header-anchor" href="#\u9759\u6001\u65B9\u6CD5"></a></h4>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8FD4\u56DE\u7C7B\u578B</th>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>close</td>
<td></td>
<td>required Object? tag,  SlidableController? current,</td>
<td>\u6839\u636E[groupTag]\u5173\u95ED[TDSwipeCell]      current\uFF1A\u4FDD\u7559\u5F53\u524D\u4E0D\u5173\u95ED</td>
</tr>
<tr>
<td>of</td>
<td></td>
<td>required BuildContext context,</td>
<td>\u83B7\u53D6\u4E0A\u4E0B\u6587\u6700\u8FD1\u7684[controller]</td>
</tr>
</tbody>
</table>
`,designMd:"<td-doc-empty></td-doc-empty>"},demos:{}}});function a(c,s,p,h,g,T){const n=o("tdesign-doc");return r(),d(n)}var D=t(i,[["render",a]]);export{D as default};
