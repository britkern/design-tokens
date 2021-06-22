!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=56)}({1:function(e,t,n){"use strict";t.a={settingsDialog:{width:550,height:595},key:{lastVersionSettingsOpened:"lastVersionSettingsOpened",fileId:"fileId"},commands:{generalSettings:"generalSettings",export:"export",sendSettings:"sendSettings",urlExport:"urlExport",help:"help",saveSettings:"saveSettings",closePlugin:"closePlugin"},exports:{color:{label:"Colors & gradiets",key:"color"},font:{label:"Fonts",key:"font"},effect:{label:"Effects",key:"effect"},grid:{label:"Grids",key:"grid"},border:{label:"Borders",key:"border"},breakpoint:{label:"Breakpoints",key:"breakpoint"},radius:{label:"Radii",key:"radius"},size:{label:"Sizes",key:"size"},spacing:{label:"Spacing",key:"spacing"},motion:{label:"Motion",key:"motion"}}}},56:function(e,t,n){"use strict";n.r(t);var i={filename:{default:"design-tokens",empty:!1},extension:{default:".json",empty:!1},nameConversion:{default:"default",empty:!1},compression:{default:!1,empty:!1},excludePrefix:{default:!0,empty:!1},prefix:{default:"_",empty:!1},serverUrl:{default:"",empty:!0},eventType:{default:"update-tokens",empty:!1},acceptHeader:{default:"application/vnd.github.everest-preview+json",empty:!0},authType:{default:"token",empty:!1},keyInName:{default:!0,empty:!1},exports:{default:{},empty:!1}};const a=(e,t)=>{const n={};for(const[a,r]of Object.entries(i))"string"==typeof r.default&&!1===r.empty&&""===e[a].trim()&&(e[a]=t[a]||r.default),typeof e[a]==typeof r.default?n[a]=e[a]:typeof t[a]==typeof r.default?n[a]=t[a]:n[a]=r.default;return n},r=()=>{let e=figma.root.getPluginData("settings");e=e.length>0?JSON.parse(e):void 0;const t={};return Object.entries(i).forEach(([n,i])=>void 0!==e&&void 0!==e[n]?t[n]=e[n]:t[n]=i.default),t};var o=function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function o(e){try{l(i.next(e))}catch(e){r(e)}}function s(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}l((i=i.apply(e,t||[])).next())}))};const s=e=>o(void 0,void 0,void 0,(function*(){const t=yield figma.clientStorage.getAsync("accessTokens");if(void 0!==t&&t instanceof Object){return t[e]||""}return""}));var l=n(1);var u=(e,t=2)=>{if(void 0===e)return;if("number"!=typeof e||"number"!=typeof t)throw new Error(`Invalid parameters, both value "${e}" (${typeof e}) and decimalPlaces "${t}" (${typeof t}) must be of type number`);const n=Math.pow(10,t);return Math.round(e*n)/n};const p=(e,t)=>({r:u(255*e.r,0),g:u(255*e.g,0),b:u(255*e.b,0),a:u(t||e.a||1)}),c=e=>"SOLID"===e.type&&!0===e.visible?p(e.color,e.opacity||null):null,d={GRADIENT_LINEAR:"linear",GRADIENT_RADIAL:"radial",GRADIENT_ANGULAR:"angular",GRADIENT_DIAMOND:"diamond"};var y=e=>e.map(e=>(e.paints=e.paints.filter(e=>"IMAGE"!==e.type),e)).filter(e=>e.paints.length>0).map(e=>({name:e.name,category:"fill",exportKey:l.a.exports.color.key,description:e.description||null,values:e.paints.map(e=>(e=>"SOLID"===e.type?{fill:{value:c(e),type:"color"}}:["GRADIENT_LINEAR","GRADIENT_RADIAL","GRADIENT_ANGULAR","GRADIENT_DIAMOND"].includes(e.type)?{gradientType:{value:d[e.type],type:"string"},stops:e.gradientStops.map(e=>({position:{value:u(e.position),type:"number"},color:{value:p(e.color),type:"color"}})),opacity:{value:u(e.opacity),type:"number"}}:null)(e))}));var g=e=>e.map(e=>({name:e.name,category:"grid",exportKey:l.a.exports.grid.key,description:e.description||null,values:e.layoutGrids.map(e=>"GRID"===e.pattern?(e=>({pattern:{value:e.pattern.toLowerCase(),type:"string"},sectionSize:{value:e.sectionSize,unit:"pixel",type:"number"}}))(e):(e=>{return Object.assign(Object.assign(Object.assign({pattern:{value:e.pattern.toLowerCase(),type:"string"}},void 0!==e.sectionSize&&{sectionSize:{value:e.sectionSize,unit:"pixel",type:"number"}}),{gutterSize:{value:e.gutterSize,unit:"pixel",type:"number"},alignment:{value:e.alignment.toLowerCase(),type:"string"},count:(t=e.count,t===1/0?{value:"auto",type:"string"}:{value:t,type:"number"})}),void 0!==e.offset&&{offset:{value:e.offset,unit:"pixel",type:"number"}});var t})(e))}));const m={NONE:"none",UNDERLINE:"underline",STRIKETHROUGH:"line-through"},f={ORIGINAL:"none",UPPER:"uppercase",LOWER:"lowercase",TITLE:"capitalize"},v={thin:100,extralight:200,ultralight:200,light:300,normal:400,regular:400,medium:500,semibold:600,demibold:600,bold:700,extrabold:800,ultabold:800,black:900,heavy:900,super:900},b={normal:"normal",condensed:"condensed",expanded:"expanded",extended:"expanded"},h={normal:"normal",italic:"italic",oblique:"oblique"},x=e=>{const t=e.toLowerCase().split(" ");let n=t[0];return["extra","ultra","semi","demi"].includes(t[0])&&["bold","light"].includes(t[1])&&(n=`${t[0]}${t[1]}`),v[n]||400},k=e=>{const t=e.toLowerCase().split(" ");return b[t[t.length-1]]||b[t[t.length-2]]||"normal"},S=e=>{const t=e.toLowerCase().split(" ").pop();return h[t]||"normal"};var O=e=>e.map(e=>({name:e.name,category:"font",exportKey:l.a.exports.font.key,description:e.description||void 0,values:{fontSize:{value:e.fontSize,unit:"pixel",type:"number"},textDecoration:{value:m[e.textDecoration],type:"string"},fontFamily:{value:e.fontName.family,type:"string"},fontWeight:{value:x(e.fontName.style),type:"number"},fontStyle:{value:S(e.fontName.style),type:"string"},fontStretch:{value:k(e.fontName.style),type:"string"},_fontStyleOld:{value:e.fontName.style,type:"string"},letterSpacing:{value:u(e.letterSpacing.value),unit:e.letterSpacing.unit.toLowerCase(),type:"number"},lineHeight:{value:u(e.lineHeight.value)||"normal",unit:e.lineHeight.unit.toLowerCase(),type:Object.prototype.hasOwnProperty.call(e.lineHeight,"value")?"number":"string"},paragraphIndent:{value:e.paragraphIndent,unit:"pixel",type:"number"},paragraphSpacing:{value:e.paragraphSpacing,unit:"pixel",type:"number"},textCase:{value:f[e.textCase],type:"string"}}}));const E={LAYER_BLUR:"layerBlur",BACKGROUND_BLUR:"backgroundBlur",DROP_SHADOW:"dropShadow",INNER_SHADOW:"innerShadow"};var R=e=>e.map(e=>({name:e.name,category:"effect",exportKey:l.a.exports.effect.key,description:e.description||null,values:e.effects.map(e=>"LAYER_BLUR"===e.type||"BACKGROUND_BLUR"===e.type?(e=>({type:{value:E[e.type],type:"string"},radius:{value:e.radius,unit:"pixel",type:"number"}}))(e):(e=>({type:{value:E[e.type],type:"string"},radius:{value:e.radius,unit:"pixel",type:"number"},color:{value:p(e.color),type:"color"},offset:{x:{value:e.offset.x,unit:"pixel",type:"number"},y:{value:e.offset.y,unit:"pixel",type:"number"}},spread:{value:e.spread,unit:"pixel",type:"number"}}))(e))}));const C=e=>{if(Object.prototype.hasOwnProperty.call(e,"direction"))return{direction:{value:e.direction.toLowerCase(),type:"string"}}},A={CUSTOM_CUBIC_BEZIER:{},LINEAR:{type:"linear",easingFunctionCubicBezier:{x1:0,y1:0,x2:1,y2:1}},EASE_IN:{type:"ease-in",easingFunctionCubicBezier:{x1:.41999998688697815,y1:0,x2:1,y2:1}},EASE_OUT:{type:"ease-out",easingFunctionCubicBezier:{x1:0,y1:0,x2:.5799999833106995,y2:1}},EASE_IN_AND_OUT:{type:"ease-in-out",easingFunctionCubicBezier:{x1:.41999998688697815,y1:0,x2:.5799999833106995,y2:1}},EASE_IN_BACK:{type:"ease-in-back",easingFunctionCubicBezier:{x1:.30000001192092896,y1:-.05000000074505806,x2:.699999988079071,y2:-.5}},EASE_OUT_BACK:{type:"ease-out-back",easingFunctionCubicBezier:{x1:.44999998807907104,y1:1.4500000476837158,x2:.800000011920929,y2:1}},EASE_IN_AND_OUT_BACK:{type:"ease-in-out-back",easingFunctionCubicBezier:{x1:.699999988079071,y1:-.4000000059604645,x2:.4000000059604645,y2:1.399999976158142}}},N=e=>{if(Object.hasOwnProperty.call(A,e.type))return"CUSTOM_CUBIC_BEZIER"===e.type&&(A.CUSTOM_CUBIC_BEZIER={type:"cubic-bezier",easingFunctionCubicBezier:{x1:e.easingFunctionCubicBezier.x1,y1:e.easingFunctionCubicBezier.y1,x2:e.easingFunctionCubicBezier.x2,y2:e.easingFunctionCubicBezier.y2}}),{easing:{value:A[e.type].type,type:"string"},easingFunction:{x1:{value:A[e.type].easingFunctionCubicBezier.x1,type:"number"},x2:{value:A[e.type].easingFunctionCubicBezier.x2,type:"number"},y1:{value:A[e.type].easingFunctionCubicBezier.y1,type:"number"},y2:{value:A[e.type].easingFunctionCubicBezier.y2,type:"number"}}}};var L=e=>e.filter(e=>"motion"===e.name.substr(0,"motion".length)).filter(e=>e.reactions.length>0&&"NODE"===e.reactions[0].action.type&&null!==e.reactions[0].action.transition).map(e=>({name:e.name,category:"motion",exportKey:l.a.exports.motion.key,description:e.description||null,values:Object.assign(Object.assign({type:{value:e.reactions[0].action.transition.type.toLocaleLowerCase(),type:"string"},duration:{value:Math.round(1e3*(e.reactions[0].action.transition.duration+Number.EPSILON))/1e3,unit:"s",type:"number"}},N(e.reactions[0].action.transition.easing)),C(e.reactions[0].action.transition))}));var _=e=>e.filter(e=>"sizes"===e.name.substr(0,"sizes".length)).map(e=>({name:e.name,category:"size",exportKey:l.a.exports.size.key,description:e.description||null,values:{width:{value:u(e.width,2),unit:"pixel",type:"number"},height:{value:u(e.height,2),unit:"pixel",type:"number"}}}));var w=e=>e.filter(e=>"spacing"===e.name.substr(0,"spacing".length)).map(e=>({name:e.name,category:"spacing",exportKey:l.a.exports.spacing.key,description:e.description||null,values:{top:{value:u(e.paddingTop,2),unit:"pixel",type:"number"},right:{value:u(e.paddingRight,2),unit:"pixel",type:"number"},bottom:{value:u(e.paddingBottom,2),unit:"pixel",type:"number"},left:{value:u(e.paddingLeft,2),unit:"pixel",type:"number"}}}));const I={MITER:"miter",BEVEL:"bevel",ROUND:"round"},T={CENTER:"center",INSIDE:"inside",OUTSIDE:"outside"};var D=e=>e.filter(e=>"borders"===e.name.substr(0,"borders".length)).filter(e=>e.strokes.length>0).map(e=>({name:e.name,category:"border",exportKey:l.a.exports.border.key,description:e.description||null,values:{strokeAlign:{value:T[e.strokeAlign],type:"string"},dashPattern:{value:e.dashPattern.toString(),type:"string"},strokeCap:{value:"string"==typeof e.strokeCap?e.strokeCap.toLowerCase():"mixed",type:"string"},strokeJoin:{value:I[e.strokeJoin],type:"string"},strokeMiterLimit:{value:u(e.strokeMiterLimit),unit:"degree",type:"number"},strokeWeight:{value:e.strokeWeight,unit:"pixel",type:"number"},stroke:{value:e.strokes[0],type:"color"}}}));var P=e=>{const t=e=>({topLeft:{value:e.topLeftRadius||0,unit:"pixel",type:"number"},topRight:{value:e.topRightRadius||0,unit:"pixel",type:"number"},bottomRight:{value:e.bottomRightRadius||0,unit:"pixel",type:"number"},bottomLeft:{value:e.bottomLeftRadius||0,unit:"pixel",type:"number"}});return e.filter(e=>"radii"===e.name.substr(0,"radii".length)).map(e=>{return{name:e.name,category:"radius",exportKey:l.a.exports.radius.key,description:e.description||null,values:Object.assign(Object.assign({},"number"==typeof e.cornerRadius&&{radius:{value:e.cornerRadius,unit:"pixel",type:"number"}}),{radiusType:{value:(n=e.cornerRadius,"number"==typeof n?"single":"mixed"),type:"string"},radii:t(e),smoothing:{value:u(e.cornerSmoothing,2),comment:"Percent as decimal from 0.0 - 1.0",type:"number"}})};var n})};var j=e=>e.filter(e=>"breakpoints"===e.name.substr(0,"breakpoints".length)).map(e=>({name:e.name,category:"breakpoint",exportKey:l.a.exports.breakpoint.key,description:e.description||null,values:{width:{value:u(e.width,2),unit:"pixel",type:"number"}}}));const B=(e,t)=>{const n=e=>e&&"object"==typeof e;return n(e)&&n(t)?(Object.keys(t).forEach(i=>{const a=e[i],r=t[i];Array.isArray(a)&&Array.isArray(r)?e[i]=a.concat(r):n(a)&&n(r)?e[i]=B(Object.assign({},a),r):e[i]=r}),e):t};var z=B;const M=(e,t,n)=>{if("string"==typeof e&&""!==e)return e;throw new Error(`converting "${t}" to ${n}, resulting in "${e}"`)},F=e=>{const t=e.toLowerCase().replace(/['"]/g,"").replace(/([-_ ]){1,}/g," ").replace(/\W+/g," ").trim().replace(/ (.)/g,(function(e){return e.toUpperCase()})).replace(/ /g,"");return M(t,e,"camelCase")},U=e=>{const t=e.toLowerCase().replace(/['"]/g,"").replace(/([-_ ]){1,}/g," ").replace(/\W+/g," ").trim().replace(/ /g,"-");return M(t,e,"kebabCase")};var G=(e,t="default")=>"camelCase"===t?F(e):"kebabCase"===t?U(e):e.trim().toLowerCase();var K=(e,t=!0,n="default")=>{const i=e.map(e=>{const i=e.name.split("/").map(e=>G(e,n));return!0===t&&delete e.name,a=e,i.reduceRight((e,t)=>({[t]:e}),a);var a});return i.length>0?i.reduce((e={},t)=>z(e,t)):[]};var $=(e,t="comment")=>e&&"string"==typeof e&&e.length>0?{comment:e}:{};const H=(e,t)=>{var n;if(null!=e)return"color"===t?`rgba(${(n=e).r}, ${n.g}, ${n.b}, ${n.a})`:e},W=e=>Object.assign(Object.assign({value:H(e.value,e.type),type:e.type},void 0!==e.description&&{comment:e.description}),void 0!==e.unit&&{unit:e.unit}),J=e=>{Array.isArray(e)&&1===e.length&&(e=e[0]);const t={};return Object.keys(e).forEach((function(n){Object.prototype.hasOwnProperty.call(e[n],"value")?t[n]=W(e[n]):t[n]=J(e[n])})),1===Object.keys(t).length?Object.values(t)[0]:t},V=e=>W(e.width),Z={default:J,font:J,border:J,size:V,grid:J,effect:J,radius:J,fill:J};const q={styleDictionary:e=>{const t=((e,t)=>Object.prototype.hasOwnProperty.call(Z,e.category)?Z[e.category](e.values):J(e.values))(e,e.category);return Object.assign(Object.assign({name:e.name,category:e.category,exportKey:e.exportKey},$(e.description)),t)}},Y=e=>[..._(e.tokenFrames),...j(e.tokenFrames),...w(e.tokenFrames),...D(e.tokenFrames),...P(e.tokenFrames),...L(e.tokenFrames),...y(e.paintStyles),...g(e.gridStyles),...O(e.textStyles),...R(e.effectStyles)];var Q=(e,t="styleDictionary",n="default")=>{const i=Y(e).map(e=>q[t](e));return K(i,!0,n)};var X=(e="_",t=!0)=>n=>n.name.trim().substr(0,e.length)!==e===t;var ee=e=>{const t=[];return e.forEach(e=>{t.push({name:e.name,description:e.description,paints:e.paints})}),t};var te=e=>{const t=[];return e.forEach(e=>{t.push({name:e.name,description:e.description,layoutGrids:e.layoutGrids})}),t};var ne=e=>{return{name:e.name,description:e.description||void 0,bottomLeftRadius:e.bottomLeftRadius,bottomRightRadius:e.bottomRightRadius,topLeftRadius:e.topLeftRadius,topRightRadius:e.topRightRadius,cornerRadius:e.cornerRadius||void 0,cornerSmoothing:e.cornerSmoothing,strokes:(t=e.strokes,[...t].map(e=>c(e))),strokeWeight:e.strokeWeight,strokeStyleId:e.strokeStyleId,strokeMiterLimit:e.strokeMiterLimit,strokeJoin:e.strokeJoin,strokeCap:e.strokeCap,dashPattern:e.dashPattern,strokeAlign:e.strokeAlign,width:e.width,height:e.height,reactions:e.reactions||void 0,paddingTop:e.paddingTop||0,paddingRight:e.paddingRight||0,paddingBottom:e.paddingBottom||0,paddingLeft:e.paddingLeft||0};var t};const ie=["COMPONENT","COMPONENT_SET","RECTANGLE","FRAME"];var ae=e=>"COMPONENT_SET"!==e.parent.type&&ie.includes(e.type);const re=e=>"FRAME"===e.type&&"_tokens"===e.name.trim().toLowerCase().substr(0,"_tokens".length);var oe=e=>[...e.map(e=>e.findChildren(e=>re(e))).reduce((e,t)=>[...e,...t])].map(e=>e.findAll(e=>ae(e))).reduce((e,t)=>[...e,...t],[]).map(e=>("RECTANGLE"!==e.type&&"FRAME"!==e.type||console.warn("Please use only main components and variants, other types may be deprecated as tokens in the future"),"COMPONENT_SET"===e.type?e.children.map(t=>{return Object.assign(Object.assign({},ne(t)),{name:(n=e.name,i=t.name,`${n}/${i=i.split(",").filter(e=>!["_","."].includes(e.trim().substr(0,1))).map(e=>e.split("=")[1]).join("/")}`)});var n,i}):[ne(e)])).reduce((e,t)=>[...e,...t],[]);var se=e=>{const t=[];return e.forEach(e=>{t.push({name:e.name,description:e.description,fontSize:e.fontSize,textDecoration:e.textDecoration,fontName:e.fontName,letterSpacing:e.letterSpacing,lineHeight:e.lineHeight,paragraphIndent:e.paragraphIndent,paragraphSpacing:e.paragraphSpacing,textCase:e.textCase})}),t};var le=e=>{const t=[];return e.forEach(e=>{t.push({name:e.name,description:e.description,effects:e.effects})}),t};var ue=(e,t={prefix:"_",excludePrefix:!0})=>({tokenFrames:oe([...e.root.children]),paintStyles:ee(e.getLocalPaintStyles()).filter(X(t.prefix,t.excludePrefix)),gridStyles:te(e.getLocalGridStyles()).filter(X(t.prefix,t.excludePrefix)),textStyles:se(e.getLocalTextStyles()).filter(X(t.prefix,t.excludePrefix)),effectStyles:le(e.getLocalEffectStyles()).filter(X(t.prefix,t.excludePrefix))});var pe=(e,t,n=!0)=>{const i=ue(e,{prefix:t.prefix,excludePrefix:t.excludePrefix});return!1===n?Q(i,"styleDictionary",t.nameConversion):!0===t.compression?JSON.stringify(Q(i,"styleDictionary",t.nameConversion)):JSON.stringify(Q(i,"styleDictionary",t.nameConversion),null,2)};var ce=function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function o(e){try{l(i.next(e))}catch(e){r(e)}}function s(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}l((i=i.apply(e,t||[])).next())}))};var de=e=>ce(void 0,void 0,void 0,(function*(){const t=yield e.clientStorage.getAsync(l.a.key.lastVersionSettingsOpened),n=((e,t="1.0.0")=>{const[n,i,a]=t.split("."),[r,o,s]=e.split(".");return n<r?"major":i<o?"minor":a<s?"patch":void 0})("4.3.0",t);return t&&"4.3.0"===t||(yield e.clientStorage.setAsync(l.a.key.lastVersionSettingsOpened,"4.3.0")),n}));var ye=e=>{let t=e.root.getPluginData(l.a.key.fileId);return void 0!==t&&""!==t||(e.root.setPluginData(l.a.key.fileId,e.root.name+" "+Math.floor(1e9*Math.random())),t=e.root.getPluginData(l.a.key.fileId)),t},ge=function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function o(e){try{l(i.next(e))}catch(e){r(e)}}function s(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}l((i=i.apply(e,t||[])).next())}))};figma.showUI(__html__,{visible:!1,width:l.a.settingsDialog.width,height:l.a.settingsDialog.height});const me=r();if("export"===figma.command&&figma.ui.postMessage({command:"export",data:{settings:me,filename:me.filename+".json",data:pe(figma,me)}}),figma.command===l.a.commands.urlExport){(()=>ge(void 0,void 0,void 0,(function*(){me.compression=!0,figma.ui.postMessage({command:l.a.commands.urlExport,data:{url:me.serverUrl,accessToken:yield s(ye(figma)),acceptHeader:me.acceptHeader,authType:me.authType,data:{event_type:me.eventType,client_payload:{tokenFileName:me.filename+".json",tokens:""+pe(figma,me,!0),filename:figma.root.name}}}})})))()}if(figma.command===l.a.commands.generalSettings){(()=>ge(void 0,void 0,void 0,(function*(){const e=yield de(figma);void 0!==e&&"patch"!==e&&figma.ui.resize(l.a.settingsDialog.width,l.a.settingsDialog.height+60),figma.ui.show(),figma.ui.postMessage({command:"getSettings",settings:me,accessToken:yield s(ye(figma)),versionDifference:e}),figma.ui.show()})))()}figma.command===l.a.commands.help&&figma.ui.postMessage({command:l.a.commands.help}),figma.ui.onmessage=e=>ge(void 0,void 0,void 0,(function*(){var t,n,i;e.command===l.a.commands.closePlugin&&(void 0!==e.notification&&""!==e.notification&&figma.notify(e.notification),figma.ui.hide(),figma.closePlugin()),e.command===l.a.commands.saveSettings&&(i=e.settings,i=a(i,r()),figma.root.setPluginData("settings",JSON.stringify(i,null,2)),yield(t=ye(figma),n=e.accessToken,o(void 0,void 0,void 0,(function*(){const e=(yield figma.clientStorage.getAsync("accessTokens"))||{},i=Object.assign(Object.assign({},e),{[t]:n});return yield figma.clientStorage.setAsync("accessTokens",i)}))),figma.closePlugin())}))}});