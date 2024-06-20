/*! @silexlabs/grapesjs-fonts - 1.0.20 */
!function(t,e){'object'==typeof exports&&'object'==typeof module?module.exports=e():'function'==typeof define&&define.amd?define([],e):'object'==typeof exports?exports["@silexlabs/grapesjs-fonts"]=e():t["@silexlabs/grapesjs-fonts"]=e()}('undefined'!=typeof globalThis?globalThis:'undefined'!=typeof window?window:this,(()=>(()=>{"use strict";var t={d:(e,s)=>{for(var n in s)t.o(s,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:s[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(t,'__esModule',{value:!0})}},e={};t.r(e),t.d(e,{cmdGetCss:()=>Nt,cmdGetHtml:()=>jt,cmdOpenFonts:()=>pt,default:()=>Et,fontsDialogPlugin:()=>xt,getHtml:()=>Tt,refresh:()=>Mt});const s=globalThis,n=s.trustedTypes,i=n?n.createPolicy("lit-html",{createHTML:t=>t}):void 0,o="$lit$",r=`lit$${Math.random().toFixed(9).slice(2)}$`,l="?"+r,a=`<${l}>`,c=document,h=()=>c.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,f=t=>u(t)||"function"==typeof t?.[Symbol.iterator],p="[ \t\n\f\r]",$=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,g=/-->/g,_=/>/g,m=RegExp(`>|${p}(?:([^\\s"'>=/]+)(${p}*=${p}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),v=/'/g,A=/"/g,y=/^(?:script|style|textarea|title)$/i,x=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),b=x(1),w=(x(2),Symbol.for("lit-noChange")),C=Symbol.for("lit-nothing"),S=new WeakMap,I=c.createTreeWalker(c,129);function H(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==i?i.createHTML(e):e}const M=(t,e)=>{const s=t.length-1,n=[];let i,l=2===e?"<svg>":"",c=$;for(let e=0;e<s;e++){const s=t[e];let h,d,u=-1,f=0;for(;f<s.length&&(c.lastIndex=f,d=c.exec(s),null!==d);)f=c.lastIndex,c===$?"!--"===d[1]?c=g:void 0!==d[1]?c=_:void 0!==d[2]?(y.test(d[2])&&(i=RegExp("</"+d[2],"g")),c=m):void 0!==d[3]&&(c=m):c===m?">"===d[0]?(c=i??$,u=-1):void 0===d[1]?u=-2:(u=c.lastIndex-d[2].length,h=d[1],c=void 0===d[3]?m:'"'===d[3]?A:v):c===A||c===v?c=m:c===g||c===_?c=$:(c=m,i=void 0);const p=c===m&&t[e+1].startsWith("/>")?" ":"";l+=c===$?s+a:u>=0?(n.push(h),s.slice(0,u)+o+s.slice(u)+r+p):s+r+(-2===u?e:p)}return[H(t,l+(t[s]||"<?>")+(2===e?"</svg>":"")),n]};class T{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let a=0,c=0;const d=t.length-1,u=this.parts,[f,p]=M(t,e);if(this.el=T.createElement(f,s),I.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=I.nextNode())&&u.length<d;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(o)){const e=p[c++],s=i.getAttribute(t).split(r),n=/([.?@])?(.*)/.exec(e);u.push({type:1,index:a,name:n[2],strings:s,ctor:"."===n[1]?E:"?"===n[1]?O:"@"===n[1]?Y:P}),i.removeAttribute(t)}else t.startsWith(r)&&(u.push({type:6,index:a}),i.removeAttribute(t));if(y.test(i.tagName)){const t=i.textContent.split(r),e=t.length-1;if(e>0){i.textContent=n?n.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],h()),I.nextNode(),u.push({type:2,index:++a});i.append(t[e],h())}}}else if(8===i.nodeType)if(i.data===l)u.push({type:2,index:a});else{let t=-1;for(;-1!==(t=i.data.indexOf(r,t+1));)u.push({type:7,index:a}),t+=r.length-1}a++}}static createElement(t,e){const s=c.createElement("template");return s.innerHTML=t,s}}function N(t,e,s=t,n){if(e===w)return e;let i=void 0!==n?s._$Co?.[n]:s._$Cl;const o=d(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(t),i._$AT(t,s,n)),void 0!==n?(s._$Co??=[])[n]=i:s._$Cl=i),void 0!==i&&(e=N(t,i._$AS(t,e.values),i,n)),e}class j{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,n=(t?.creationScope??c).importNode(e,!0);I.currentNode=n;let i=I.nextNode(),o=0,r=0,l=s[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new k(i,i.nextSibling,this,t):1===l.type?e=new l.ctor(i,l.name,l.strings,this,t):6===l.type&&(e=new R(i,this,t)),this._$AV.push(e),l=s[++r]}o!==l?.index&&(i=I.nextNode(),o++)}return I.currentNode=c,n}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,n){this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),d(t)?t===C||null==t||""===t?(this._$AH!==C&&this._$AR(),this._$AH=C):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):f(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==C&&d(this._$AH)?this._$AA.nextSibling.data=t:this.T(c.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=T.createElement(H(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new j(n,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=S.get(t.strings);return void 0===e&&S.set(t.strings,e=new T(t)),e}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,n=0;for(const i of t)n===e.length?e.push(s=new k(this.S(h()),this.S(h()),this,this.options)):s=e[n],s._$AI(i),n++;n<e.length&&(this._$AR(s&&s._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class P{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,n,i){this.type=1,this._$AH=C,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=C}_$AI(t,e=this,s,n){const i=this.strings;let o=!1;if(void 0===i)t=N(this,t,e,0),o=!d(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const n=t;let r,l;for(t=i[0],r=0;r<i.length-1;r++)l=N(this,n[s+r],e,r),l===w&&(l=this._$AH[r]),o||=!d(l)||l!==this._$AH[r],l===C?t=C:t!==C&&(t+=(l??"")+i[r+1]),this._$AH[r]=l}o&&!n&&this.j(t)}j(t){t===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class E extends P{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===C?void 0:t}}class O extends P{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==C)}}class Y extends P{constructor(t,e,s,n,i){super(t,e,s,n,i),this.type=5}_$AI(t,e=this){if((t=N(this,t,e,0)??C)===w)return;const s=this._$AH,n=t===C&&s!==C||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==C&&(s===C||n);n&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class R{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const B={P:o,A:r,C:l,M:1,L:M,R:j,D:f,V:N,I:k,H:P,N:O,U:Y,B:E,F:R},D=s.litHtmlPolyfillSupport;D?.(T,k),(s.litHtmlVersions??=[]).push("3.1.4");const F=1,U=2,z=3,W=4,L=t=>(...e)=>({_$litDirective$:t,values:e});class V{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const{I:G}=B,q=t=>void 0===t.strings,Z={},J=L(class extends V{constructor(t){if(super(t),t.type!==z&&t.type!==F&&t.type!==W)throw Error("The `live` directive is not allowed on child or event bindings");if(!q(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===w||e===C)return e;const s=t.element,n=t.name;if(t.type===z){if(e===s[n])return w}else if(t.type===W){if(!!e===s.hasAttribute(n))return w}else if(t.type===F&&s.getAttribute(n)===e+"")return w;return((t,e=Z)=>{t._$AH=e})(t),e}});function*K(t,e){if(void 0!==t){let s=0;for(const n of t)yield e(n,s++)}}const Q="important",X=" !"+Q,tt=L(class extends V{constructor(t){if(super(t),t.type!==F||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const n=t[s];return null==n?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`}),"")}update(t,[e]){const{style:s}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in e){const n=e[t];if(null!=n){this.ft.add(t);const e="string"==typeof n&&n.endsWith(X);t.includes("-")||e?s.setProperty(t,e?n.slice(0,-11):n,e?Q:""):s[t]=n}}return w}}),et=(t,e)=>{const s=t._$AN;if(void 0===s)return!1;for(const t of s)t._$AO?.(e,!1),et(t,e);return!0},st=t=>{let e,s;do{if(void 0===(e=t._$AM))break;s=e._$AN,s.delete(t),t=e}while(0===s?.size)},nt=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),rt(e)}};function it(t){void 0!==this._$AN?(st(this),this._$AM=t,nt(this)):this._$AM=t}function ot(t,e=!1,s=0){const n=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(e)if(Array.isArray(n))for(let t=s;t<n.length;t++)et(n[t],!1),st(n[t]);else null!=n&&(et(n,!1),st(n));else et(this,t)}const rt=t=>{t.type==U&&(t._$AP??=ot,t._$AQ??=it)};class lt extends V{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),nt(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(et(this,t),st(this))}setValue(t){if(q(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const at=()=>new ct;class ct{}const ht=new WeakMap,dt=L(class extends lt{render(t){return C}update(t,[e]){const s=e!==this.Y;return s&&void 0!==this.Y&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),C}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.Y){const e=this.ht??globalThis;let s=ht.get(e);void 0===s&&(s=new WeakMap,ht.set(e,s)),void 0!==s.get(this.Y)&&this.Y.call(this.ht,void 0),s.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return"function"==typeof this.Y?ht.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),ut=document.createElement('div');let ft;const pt='open-fonts',$t='silex-loaded-fonts-list';let gt,_t,mt=[],vt='https://fonts.googleapis.com',At='https://www.googleapis.com';try{gt=JSON.parse(localStorage.getItem($t))}catch(o){console.error('Could not get fonts from local storage:',o)}async function yt(t){return gt=gt??(await(await fetch(t)).json())?.items,localStorage.setItem($t,JSON.stringify(gt)),await async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise((e=>setTimeout((()=>e()),t)))}(),gt}const xt=(t,e)=>{if(mt=t.StyleManager.getBuiltIn('font-family').options,e.server_url&&(vt=e.server_url),e.api_url&&(At=e.api_url),!e.api_key)throw new Error(t.I18n.t('grapesjs-fonts.You must provide Google font api key'));t.Commands.add(pt,{run:(s,n)=>(ft=t.Modal.open({title:t.I18n.t('grapesjs-fonts.Fonts'),content:'',attributes:{class:'fonts-dialog'}}).onceClose((()=>{t.stopCommand(pt)})),ft.setContent(ut),async function(t){_t=structuredClone(t.getModel().get('fonts')||[])}(t),Ct(t,e,[]),yt(`${At}/webfonts/v1/webfonts?key=${e.api_key}`).then((s=>{Ct(t,e,s);const n=ut.querySelector('form');n.onsubmit=s=>{s.preventDefault(),function(t,e){const s=t.getModel();s.set('fonts',_t),It(t,_t),Ht(t,_t,e),s.set('changesCount',t.getDirtyCount()+1)}(t,e),t.stopCommand(pt)},n.querySelector('input')?.focus()})),ft),stop:()=>{ft.close()}}),t.on('storage:start:store',(e=>{e.fonts=t.getModel().get('fonts')})),t.on('storage:end:load',(s=>{const n=s.fonts||[];t.getModel().set('fonts',n),setTimeout((()=>Mt(t,e)),1e3)})),t.on('canvas:frame:load',(()=>Mt(t,e))),t.on('page',(()=>Mt(t,e)))};const bt=at(),wt=at();function Ct(t,e,s){const n=bt.value,i=s.filter((t=>function(t,e){const s=new RegExp(e,'i');return-1!==t.search(s)}(t.family,n?.value||'')));n?.focus(),((t,e,s)=>{const n=s?.renderBefore??e;let i=n._$litPart$;if(void 0===i){const t=s?.renderBefore??null;n._$litPart$=i=new k(e.insertBefore(h(),t),t,void 0,s??{})}i._$AI(t)})(b`
    <form class="silex-form grapesjs-fonts">
      <div class="silex-form__group">
        <div class="silex-bar">
          <input
            style=${tt({width:'100%'})}
            placeholder="${t.I18n.t('grapesjs-fonts.Search')}"
            type="text"
            ${dt(bt)}
            @keydown=${()=>{setTimeout((()=>Ct(t,e,s)))}}/>
          <div style="display: flex">
            <select
                size="10"
                style=${tt({width:'150px'})}
                ${dt(wt)}
                @change=${()=>{const t=i[wt.value.selectedIndex];t&&(document.getElementById("previewText").style.fontFamily=`"${t.family}", sans-serif`,function(t){const e=document,s=e.head,n='dynamic-fonts';let i=s.querySelector(`#${n}`);i||(i=e.createElement('style'),i.id=n,s.appendChild(i)),i.textContent+=`\n        @import url('${vt}/css2?family=${t.family.replace(/ /g,'+')}&display=swap');\n    `}(t))}}
            >
                ${K(i,(t=>b`
                <option value=${t['family']}>${t['family']}</option>
                `))}
            </select>
            <h2 id="previewText" style="padding: 8px; font-size: 40px;">The quick brown fox jumps over the lazy dog</h2>
          </div>
          <button class="silex-button"
            ?disabled=${!wt.value||0===i.length}
            type="button" @click=${()=>{!function(t,e,s,n){const i=n.family,o=`"${n.family}", ${n.category}`;s.push({name:i,value:o,variants:[]})}(0,0,_t,i[wt.value.selectedIndex]),Ct(t,e,s)}}>
            ${t.I18n.t('grapesjs-fonts.Add font')}
          </button>
        </div>
      </div>
      <hr/>
      <div
        class="silex-form__element">
        <h2>${t.I18n.t('grapesjs-fonts.Installed fonts')}</h2>
        <ol class="silex-list">
        ${K(_t,(n=>{return b`
          <li style="margin-left: 16px;margin-bottom: 20px;">
            <div class="silex-list__item__header">
              <h4>${n.name}</h4>
            </div>
            <div class="silex-list__item__body">
              <fieldset class="silex-group--simple full-width">
                <legend>CSS rules</legend>
                <input
                  class="full-width"
                  type="text"
                  name="name"
                  .value=${J(n.value)}
                  @change=${i=>{var o,r;o=n,r=i.target.value,o.value=r,Ct(t,e,s)}}
                />
              </fieldset>
              <fieldset class="silex-group--simple full-width">
                <legend>Variants</legend>
                ${K((i=n,s.find((t=>i.name===t.family)))?.variants.filter((t=>''===t.replace(/[a-z]/g,''))),(i=>b`
                  <div>
                    <input
                      id=${n.name+i}
                      type="checkbox"
                      value=${i}
                      ?checked=${n.variants?.includes(i)}
                      @change=${o=>{!function(t,e,s,n,i){const o=s.variants?.includes(n);o&&!i?s.variants=s.variants.filter((t=>t!==n)):!o&&i&&s.variants.push(n)}(0,0,n,i,o.target.checked),Ct(t,e,s)}}
                    /><label for=${n.name+i}>${i}</label>
                  </div>
                `))}
              </fieldset>
            </div>
            <div class="silex-list__item__footer">
              <button class="silex-button" type="button" @click=${()=>{!function(t,e,s){const n=e.findIndex((t=>t===s));e.splice(n,1)}(0,_t,n),Ct(t,e,s)}}>${t.I18n.t('grapesjs-fonts.Remove')}</button>
            </div>
          </li>
        `;var i}))}
        </ol>
      </div>
      <footer>
        <input class="silex-button" type="button" @click=${()=>t.stopCommand(pt)} value="${t.I18n.t('grapesjs-fonts.Cancel')}">
        <input class="silex-button" type="submit" value="${t.I18n.t('grapesjs-fonts.Save')}">
      </footer>
    </form>
  `,ut)}const St='data-silex-gstatic';function It(t,e){const s=t.Canvas.getDocument();if(!s)return;!function(t,e){const s=t.head.querySelectorAll(`[${e}]`);Array.from(s).forEach((t=>t.remove()))}(s,St);const n=Tt(e,St);s.head.insertAdjacentHTML('beforeend',n)}function Ht(t,e,s){const n=t.StyleManager.getProperty('typography','font-family');n&&(s.preserveDefaultFonts?e=mt.concat(e):0===e.length&&(e=mt),n.setOptions(e))}function Mt(t,e){const s=t.getModel().get('fonts')||[];It(t,s),Ht(t,s,e)}function Tt(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:'';const s=`<link href="${vt}" rel="preconnect" ${e}><link href="https://fonts.gstatic.com" rel="preconnect" crossorigin ${e}>`,n=t.map((t=>{const s=(t.variants.length?':':'')+t.variants.map((t=>t.replace(/\d+/g,''))).filter((t=>!!t)).join(',');return`<link href="${vt}/css?family=${t.name.replace(/ /g,'+')}${s}&display=swap" rel="stylesheet" ${e}>`})).join('');return s+n}const Nt='get-fonts-css',jt='get-fonts-html';const kt={'grapesjs-fonts':{Fonts:'Fonts','You must provide Google font api key':'You must provide Google font api key, see https://developers.google.com/fonts/docs/developer_api#APIKey',Search:'Search fonts...','Add font':'Install font',Remove:'Remove',Save:'Save',Cancel:'Cancel','Installed fonts':'Installed fonts'}},Pt={'grapesjs-fonts':{Fonts:'Polices','You must provide Google font api key':'Vous devez fournir une clé API Google font, voir https://developers.google.com/fonts/docs/developer_api#APIKey',Family:'Famille',Search:'Rechercher une police','Add font':'Installer la police',Remove:'Supprimer',Save:'Enregistrer',Cancel:'Annuler','Installed fonts':'Polices installées'}},Et=function(t){const e={i18n:{},preserveDefaultFonts:!0,...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}};t.I18n&&t.I18n.addMessages({en:kt,fr:Pt,...e.i18n}),function(t){t.Commands.add(Nt,(()=>{throw new Error('Not implemented')})),t.Commands.add(jt,(t=>Tt(t.getModel().get('fonts')||[])))}(t),xt(t,e)};return e})()));
//# sourceMappingURL=index.js.map