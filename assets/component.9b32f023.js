import{d as Q,a as V,b as oe,e as le,f as ue,g as de,_ as ee,o as C,h as L,i as y,n as te,j as ce,k as ge,F as pe,w as j,v as X,l as fe}from"./site.b6fa4b6e.js";var J=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},ne={exports:{}};(function(o){var _=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var a=function(d){var g=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,h=0,v={},i={manual:d.Prism&&d.Prism.manual,disableWorkerMessageHandler:d.Prism&&d.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof E?new E(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++h}),t.__id},clone:function t(e,n){n=n||{};var r,s;switch(i.util.type(e)){case"Object":if(s=i.util.objId(e),n[s])return n[s];r={},n[s]=r;for(var u in e)e.hasOwnProperty(u)&&(r[u]=t(e[u],n));return r;case"Array":return s=i.util.objId(e),n[s]?n[s]:(r=[],n[s]=r,e.forEach(function(c,l){r[l]=t(c,n)}),r);default:return e}},getLanguage:function(t){for(;t;){var e=g.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(g,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(r){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var n in e)if(e[n].src==t)return e[n]}return null}},isActive:function(t,e,n){for(var r="no-"+e;t;){var s=t.classList;if(s.contains(e))return!0;if(s.contains(r))return!1;t=t.parentElement}return!!n}},languages:{plain:v,plaintext:v,text:v,txt:v,extend:function(t,e){var n=i.util.clone(i.languages[t]);for(var r in e)n[r]=e[r];return n},insertBefore:function(t,e,n,r){r=r||i.languages;var s=r[t],u={};for(var c in s)if(s.hasOwnProperty(c)){if(c==e)for(var l in n)n.hasOwnProperty(l)&&(u[l]=n[l]);n.hasOwnProperty(c)||(u[c]=s[c])}var f=r[t];return r[t]=u,i.languages.DFS(i.languages,function(S,k){k===f&&S!=t&&(this[S]=u)}),u},DFS:function t(e,n,r,s){s=s||{};var u=i.util.objId;for(var c in e)if(e.hasOwnProperty(c)){n.call(e,c,e[c],r||c);var l=e[c],f=i.util.type(l);f==="Object"&&!s[u(l)]?(s[u(l)]=!0,t(l,n,null,s)):f==="Array"&&!s[u(l)]&&(s[u(l)]=!0,t(l,n,c,s))}}},plugins:{},highlightAll:function(t,e){i.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,n){var r={callback:n,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),i.hooks.run("before-all-elements-highlight",r);for(var s=0,u;u=r.elements[s++];)i.highlightElement(u,e===!0,r.callback)},highlightElement:function(t,e,n){var r=i.util.getLanguage(t),s=i.languages[r];i.util.setLanguage(t,r);var u=t.parentElement;u&&u.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(u,r);var c=t.textContent,l={element:t,language:r,grammar:s,code:c};function f(k){l.highlightedCode=k,i.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,i.hooks.run("after-highlight",l),i.hooks.run("complete",l),n&&n.call(l.element)}if(i.hooks.run("before-sanity-check",l),u=l.element.parentElement,u&&u.nodeName.toLowerCase()==="pre"&&!u.hasAttribute("tabindex")&&u.setAttribute("tabindex","0"),!l.code){i.hooks.run("complete",l),n&&n.call(l.element);return}if(i.hooks.run("before-highlight",l),!l.grammar){f(i.util.encode(l.code));return}if(e&&d.Worker){var S=new Worker(i.filename);S.onmessage=function(k){f(k.data)},S.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else f(i.highlight(l.code,l.grammar,l.language))},highlight:function(t,e,n){var r={code:t,grammar:e,language:n};if(i.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=i.tokenize(r.code,r.grammar),i.hooks.run("after-tokenize",r),E.stringify(i.util.encode(r.tokens),r.language)},tokenize:function(t,e){var n=e.rest;if(n){for(var r in n)e[r]=n[r];delete e.rest}var s=new O;return T(s,s.head,t),R(t,s,e,s.head,0),P(s)},hooks:{all:{},add:function(t,e){var n=i.hooks.all;n[t]=n[t]||[],n[t].push(e)},run:function(t,e){var n=i.hooks.all[t];if(!(!n||!n.length))for(var r=0,s;s=n[r++];)s(e)}},Token:E};d.Prism=i;function E(t,e,n,r){this.type=t,this.content=e,this.alias=n,this.length=(r||"").length|0}E.stringify=function t(e,n){if(typeof e=="string")return e;if(Array.isArray(e)){var r="";return e.forEach(function(f){r+=t(f,n)}),r}var s={type:e.type,content:t(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n},u=e.alias;u&&(Array.isArray(u)?Array.prototype.push.apply(s.classes,u):s.classes.push(u)),i.hooks.run("wrap",s);var c="";for(var l in s.attributes)c+=" "+l+'="'+(s.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+c+">"+s.content+"</"+s.tag+">"};function I(t,e,n,r){t.lastIndex=e;var s=t.exec(n);if(s&&r&&s[1]){var u=s[1].length;s.index+=u,s[0]=s[0].slice(u)}return s}function R(t,e,n,r,s,u){for(var c in n)if(!(!n.hasOwnProperty(c)||!n[c])){var l=n[c];l=Array.isArray(l)?l:[l];for(var f=0;f<l.length;++f){if(u&&u.cause==c+","+f)return;var S=l[f],k=S.inside,Y=!!S.lookbehind,W=!!S.greedy,ae=S.alias;if(W&&!S.pattern.global){var re=S.pattern.toString().match(/[imsuy]*$/)[0];S.pattern=RegExp(S.pattern.source,re+"g")}for(var Z=S.pattern||S,A=r.next,F=s;A!==e.tail&&!(u&&F>=u.reach);F+=A.value.length,A=A.next){var $=A.value;if(e.length>t.length)return;if(!($ instanceof E)){var N=1,w;if(W){if(w=I(Z,F,t,Y),!w||w.index>=t.length)break;var M=w.index,se=w.index+w[0].length,x=F;for(x+=A.value.length;M>=x;)A=A.next,x+=A.value.length;if(x-=A.value.length,F=x,A.value instanceof E)continue;for(var D=A;D!==e.tail&&(x<se||typeof D.value=="string");D=D.next)N++,x+=D.value.length;N--,$=t.slice(F,x),w.index-=F}else if(w=I(Z,0,$,Y),!w)continue;var M=w.index,H=w[0],U=$.slice(0,M),K=$.slice(M+H.length),z=F+$.length;u&&z>u.reach&&(u.reach=z);var G=A.prev;U&&(G=T(e,G,U),F+=U.length),B(e,G,N);var ie=new E(c,k?i.tokenize(H,k):H,ae,H);if(A=T(e,G,ie),K&&T(e,A,K),N>1){var q={cause:c+","+f,reach:z};R(t,e,n,A.prev,F,q),u&&q.reach>u.reach&&(u.reach=q.reach)}}}}}}function O(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function T(t,e,n){var r=e.next,s={value:n,prev:e,next:r};return e.next=s,r.prev=s,t.length++,s}function B(t,e,n){for(var r=e.next,s=0;s<n&&r!==t.tail;s++)r=r.next;e.next=r,r.prev=e,t.length-=s}function P(t){for(var e=[],n=t.head.next;n!==t.tail;)e.push(n.value),n=n.next;return e}if(!d.document)return d.addEventListener&&(i.disableWorkerMessageHandler||d.addEventListener("message",function(t){var e=JSON.parse(t.data),n=e.language,r=e.code,s=e.immediateClose;d.postMessage(i.highlight(r,i.languages[n],n)),s&&d.close()},!1)),i;var m=i.util.currentScript();m&&(i.filename=m.src,m.hasAttribute("data-manual")&&(i.manual=!0));function p(){i.manual||i.highlightAll()}if(!i.manual){var b=document.readyState;b==="loading"||b==="interactive"&&m&&m.defer?document.addEventListener("DOMContentLoaded",p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return i}(_);o.exports&&(o.exports=a),typeof J!="undefined"&&(J.Prism=a),a.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",function(d){d.type==="entity"&&(d.attributes.title=d.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(g,h){var v={};v["language-"+h]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[h]},v.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:v}};i["language-"+h]={pattern:/[\s\S]+/,inside:a.languages[h]};var E={};E[g]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return g}),"i"),lookbehind:!0,greedy:!0,inside:i},a.languages.insertBefore("markup","cdata",E)}}),Object.defineProperty(a.languages.markup.tag,"addAttribute",{value:function(d,g){a.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+d+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[g,"language-"+g],inside:a.languages[g]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,function(d){var g=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;d.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+g.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+g.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+g.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+g.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:g,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},d.languages.css.atrule.inside.rest=d.languages.css;var h=d.languages.markup;h&&(h.tag.addInlined("style","css"),h.tag.addAttribute("style","css"))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),a.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),a.languages.markup&&(a.languages.markup.tag.addInlined("script","javascript"),a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),a.languages.js=a.languages.javascript,function(){if(typeof a=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var d="Loading\u2026",g=function(m,p){return"\u2716 Error "+m+" while fetching file: "+p},h="\u2716 Error: File does not exist or is empty",v={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",E="loading",I="loaded",R="failed",O="pre[data-src]:not(["+i+'="'+I+'"]):not(['+i+'="'+E+'"])';function T(m,p,b){var t=new XMLHttpRequest;t.open("GET",m,!0),t.onreadystatechange=function(){t.readyState==4&&(t.status<400&&t.responseText?p(t.responseText):t.status>=400?b(g(t.status,t.statusText)):b(h))},t.send(null)}function B(m){var p=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(m||"");if(p){var b=Number(p[1]),t=p[2],e=p[3];return t?e?[b,Number(e)]:[b,void 0]:[b,b]}}a.hooks.add("before-highlightall",function(m){m.selector+=", "+O}),a.hooks.add("before-sanity-check",function(m){var p=m.element;if(p.matches(O)){m.code="",p.setAttribute(i,E);var b=p.appendChild(document.createElement("CODE"));b.textContent=d;var t=p.getAttribute("data-src"),e=m.language;if(e==="none"){var n=(/\.(\w+)$/.exec(t)||[,"none"])[1];e=v[n]||n}a.util.setLanguage(b,e),a.util.setLanguage(p,e);var r=a.plugins.autoloader;r&&r.loadLanguages(e),T(t,function(s){p.setAttribute(i,I);var u=B(p.getAttribute("data-range"));if(u){var c=s.split(/\r\n?|\n/g),l=u[0],f=u[1]==null?c.length:u[1];l<0&&(l+=c.length),l=Math.max(0,Math.min(l-1,c.length)),f<0&&(f+=c.length),f=Math.max(0,Math.min(f,c.length)),s=c.slice(l,f).join(`
`),p.hasAttribute("data-start")||p.setAttribute("data-start",String(l+1))}b.textContent=s,a.highlightElement(b)},function(s){p.setAttribute(i,R),b.textContent=s})}}),a.plugins.fileHighlight={highlight:function(p){for(var b=(p||document).querySelectorAll(O),t=0,e;e=b[t++];)a.highlightElement(e)}};var P=!1;a.fileHighlight=function(){P||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),P=!0),a.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(ne);var he=ne.exports;(function(o){var _="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",a={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},d={bash:a,environment:{pattern:RegExp("\\$"+_),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+_),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};o.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+_),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:d},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:a}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:d},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:d.entity}}],environment:{pattern:RegExp("\\$?"+_),alias:"constant"},variable:d.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},a.inside=o.languages.bash;for(var g=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],h=d.variable[1].inside,v=0;v<g.length;v++)h[g[v]]=o.languages.bash[g[v]];o.languages.sh=o.languages.bash,o.languages.shell=o.languages.bash})(Prism);Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json;const me=Q({props:{src:String},setup(){const o=V(!1),_=V(null),a=oe({}),d=le(()=>["tdesign-doc-qrcode",{"tdesign-doc-qrcode--fixed":o.value}]),g=()=>{const{scrollTop:h}=document.documentElement;if(h>258){if(!o.value&&!a.top){const{top:v,left:i}=_.value.getBoundingClientRect();a.top=150+"px",a.left=i+"px"}o.value=!0}else o.value=!1};return ue(()=>{document.addEventListener("scroll",g)}),de(()=>{document.removeEventListener("scroll",g)}),{isFixed:o,wrapper:_,fixedPos:a,wrapperClass:d}}}),be=y("h3",{class:"tdesign-doc-qrcode__title"},"\u626B\u7801\u4F53\u9A8C\u7EC4\u4EF6",-1),ve=["src"];function Se(o,_,a,d,g,h){return C(),L("div",{ref:"wrapper",class:te(o.wrapperClass),style:ce({"--fixed-pos-top":o.fixedPos.top,"--fixed-pos-left":o.fixedPos.left})},[be,y("img",{src:o.src,alt:"qrcode",class:"tdesign-doc-qrcode__img"},null,8,ve)],6)}var Ae=ee(me,[["render",Se]]);const ye=Q({inject:["info","demos"],components:{QrCode:Ae},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(o){this.$route.query.tab!==o&&this.$router.push({query:{tab:o}})}},name(){const{path:o}=this.$route;return o.slice(o.lastIndexOf("/")+1)},liveUrl(){var o="https://bytebubbles.github.io/8591flutter_lib_web_example/#/toast";return o},qrcode(){const{path:o}=this.$route;return o.slice(o.lastIndexOf("/")+1),new URL("/assets/td_apk_qrcode.a7b69fbd.png",self.location).href}},mounted(){const{info:o}=this,{tdDocContent:_,tdDocHeader:a,tdDocTabs:d}=this.$refs;o.isComponent&&(d.onchange=({detail:g})=>this.tab=g,a.componentName=o.componentName),he.highlightAll(),a.spline=o.spline,a.docInfo={title:o.title,desc:o.description},this.$emit("loaded",()=>{_.pageStatus="show"})}}),Ee={ref:"tdDocContent",platform:"mobile","page-status":"hidden"},_e={key:0,platform:"mobile",slot:"doc-header",ref:"tdDocHeader"},we=["tab"],Fe={class:"td-doc-main"},ke=["innerHTML"],xe={headless:""},Te=["src"],$e=y("div",null,[fe("\u6CE8\uFF1Aweb\u793A\u4F8B\u4EC5\u4F9B\u53C2\u8003\uFF0C\u9884\u89C8\u5B9E\u9645\u6548\u679C\u8BF7\u9605\u8BFB"),y("a",{href:"/flutter/getting-started"},"\u5FEB\u901F\u5F00\u59CB")],-1),Ie=["component-name"],Oe=["innerHTML"],De=["innerHTML"],Ce=["innerHTML"],Le={style:{"margin-top":"48px"}},Re=["time"],Pe=y("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function Ne(o,_,a,d,g,h){return C(),L("td-doc-content",Ee,[o.info.tdDocHeader?(C(),L("td-doc-header",_e,null,512)):ge("",!0),o.info.isComponent?(C(),L(pe,{key:1},[y("td-doc-tabs",{ref:"tdDocTabs",tab:o.tab},null,8,we),j(y("div",Fe,[y("div",{name:"DEMO",innerHTML:o.info.demoMd},null,8,ke),y("td-doc-phone",xe,[y("iframe",{src:o.liveUrl,frameborder:"0",width:"100%",height:"100%",style:{"box-sizing":"border-box","border-radius":"0 0 6px 6px",overflow:"hidden","border-top":"8px solid #f8f8f8"}},null,8,Te),$e]),y("td-contributors",{platform:"flutter",framework:"flutter","component-name":o.name},null,8,Ie)],512),[[X,o.tab==="demo"]]),j(y("div",{name:"API",innerHTML:o.info.apiMd},null,8,Oe),[[X,o.tab==="api"]]),j(y("div",{name:"DESIGN",innerHTML:o.info.designMd},null,8,De),[[X,o.tab==="design"]])],64)):(C(),L("div",{key:2,name:"DOC",class:te(o.info.docClass),innerHTML:o.info.docMd},null,10,Ce)),y("div",Le,[y("td-doc-history",{time:o.info.lastUpdated},null,8,Re)]),Pe],512)}var He=ee(ye,[["render",Ne]]);export{He as T};
