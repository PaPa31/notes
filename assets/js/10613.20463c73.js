(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[10613],{90127:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m});var i=s(5485),n=s.n(i),l=s(31336);s(14912)(l),s(48808)(l),s(74182)(l);const a=l;a.tokenizer.separator=/[\s\-/]+/;const r=class{constructor(e,t){this.searchDocs=e,this.lunrIndex=a.Index.load(t)}getLunrResult(e){return this.lunrIndex.query((function(t){const s=a.tokenizer(e);t.term(s,{boost:10}),t.term(s,{wildcard:a.Query.wildcard.TRAILING})}))}getHit(e,t,s){return{hierarchy:{lvl0:e.pageTitle||e.title,lvl1:0===e.type?null:e.title},url:e.url,_snippetResult:s?{content:{value:s,matchLevel:"full"}}:null,_highlightResult:{hierarchy:{lvl0:{value:0===e.type?t||e.title:e.pageTitle},lvl1:0===e.type?null:{value:t||e.title}}}}}getTitleHit(e,t,s){const i=t[0],n=t[0]+s;let l=e.title.substring(0,i)+'<span class="algolia-docsearch-suggestion--highlight">'+e.title.substring(i,n)+"</span>"+e.title.substring(n,e.title.length);return this.getHit(e,l)}getKeywordHit(e,t,s){const i=t[0],n=t[0]+s;let l=e.title+"<br /><i>Keywords: "+e.keywords.substring(0,i)+'<span class="algolia-docsearch-suggestion--highlight">'+e.keywords.substring(i,n)+"</span>"+e.keywords.substring(n,e.keywords.length)+"</i>";return this.getHit(e,l)}getContentHit(e,t){const s=t[0],i=t[0]+t[1];let n=s,l=i,a=!0,r=!0;for(let c=0;c<3;c++){const t=e.content.lastIndexOf(" ",n-2),s=e.content.lastIndexOf(".",n-2);if(s>0&&s>t){n=s+1,a=!1;break}if(t<0){n=0,a=!1;break}n=t+1}for(let c=0;c<10;c++){const t=e.content.indexOf(" ",l+1),s=e.content.indexOf(".",l+1);if(s>0&&s<t){l=s,r=!1;break}if(t<0){l=e.content.length,r=!1;break}l=t}let o=e.content.substring(n,s);return a&&(o="... "+o),o+='<span class="algolia-docsearch-suggestion--highlight">'+e.content.substring(s,i)+"</span>",o+=e.content.substring(i,l),r&&(o+=" ..."),this.getHit(e,null,o)}search(e){return new Promise(((t,s)=>{const i=this.getLunrResult(e),n=[];i.length>5&&(i.length=5),this.titleHitsRes=[],this.contentHitsRes=[],i.forEach((t=>{const s=this.searchDocs[t.ref],{metadata:i}=t.matchData;for(let l in i)if(i[l].title){if(!this.titleHitsRes.includes(t.ref)){const a=i[l].title.position[0];n.push(this.getTitleHit(s,a,e.length)),this.titleHitsRes.push(t.ref)}}else if(i[l].content){const e=i[l].content.position[0];n.push(this.getContentHit(s,e))}else if(i[l].keywords){const a=i[l].keywords.position[0];n.push(this.getKeywordHit(s,a,e.length)),this.titleHitsRes.push(t.ref)}})),n.length>5&&(n.length=5),t(n)}))}};var o=s(71639),c=s.n(o);const h="algolia-docsearch",u=`${h}-suggestion`,g={suggestion:`\n  <a class="${u}\n    {{#isCategoryHeader}}${u}__main{{/isCategoryHeader}}\n    {{#isSubCategoryHeader}}${u}__secondary{{/isSubCategoryHeader}}\n    "\n    aria-label="Link to the result"\n    href="{{{url}}}"\n    >\n    <div class="${u}--category-header">\n        <span class="${u}--category-header-lvl0">{{{category}}}</span>\n    </div>\n    <div class="${u}--wrapper">\n      <div class="${u}--subcategory-column">\n        <span class="${u}--subcategory-column-text">{{{subcategory}}}</span>\n      </div>\n      {{#isTextOrSubcategoryNonEmpty}}\n      <div class="${u}--content">\n        <div class="${u}--subcategory-inline">{{{subcategory}}}</div>\n        <div class="${u}--title">{{{title}}}</div>\n        {{#text}}<div class="${u}--text">{{{text}}}</div>{{/text}}\n      </div>\n      {{/isTextOrSubcategoryNonEmpty}}\n    </div>\n  </a>\n  `,suggestionSimple:`\n  <div class="${u}\n    {{#isCategoryHeader}}${u}__main{{/isCategoryHeader}}\n    {{#isSubCategoryHeader}}${u}__secondary{{/isSubCategoryHeader}}\n    suggestion-layout-simple\n  ">\n    <div class="${u}--category-header">\n        {{^isLvl0}}\n        <span class="${u}--category-header-lvl0 ${u}--category-header-item">{{{category}}}</span>\n          {{^isLvl1}}\n          {{^isLvl1EmptyOrDuplicate}}\n          <span class="${u}--category-header-lvl1 ${u}--category-header-item">\n              {{{subcategory}}}\n          </span>\n          {{/isLvl1EmptyOrDuplicate}}\n          {{/isLvl1}}\n        {{/isLvl0}}\n        <div class="${u}--title ${u}--category-header-item">\n            {{#isLvl2}}\n                {{{title}}}\n            {{/isLvl2}}\n            {{#isLvl1}}\n                {{{subcategory}}}\n            {{/isLvl1}}\n            {{#isLvl0}}\n                {{{category}}}\n            {{/isLvl0}}\n        </div>\n    </div>\n    <div class="${u}--wrapper">\n      {{#text}}\n      <div class="${u}--content">\n        <div class="${u}--text">{{{text}}}</div>\n      </div>\n      {{/text}}\n    </div>\n  </div>\n  `,footer:`\n    <div class="${`${h}-footer`}">\n    </div>\n  `,empty:`\n  <div class="${u}">\n    <div class="${u}--wrapper">\n        <div class="${u}--content ${u}--no-results">\n            <div class="${u}--title">\n                <div class="${u}--text">\n                    No results found for query <b>"{{query}}"</b>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  `,searchBox:'\n  <form novalidate="novalidate" onsubmit="return false;" class="searchbox">\n    <div role="search" class="searchbox__wrapper">\n      <input id="docsearch" type="search" name="search" placeholder="Search the docs" autocomplete="off" required="required" class="searchbox__input"/>\n      <button type="submit" title="Submit your search query." class="searchbox__submit" >\n        <svg width=12 height=12 role="img" aria-label="Search">\n          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sbx-icon-search-13"></use>\n        </svg>\n      </button>\n      <button type="reset" title="Clear the search query." class="searchbox__reset hide">\n        <svg width=12 height=12 role="img" aria-label="Reset">\n          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sbx-icon-clear-3"></use>\n        </svg>\n      </button>\n    </div>\n</form>\n\n<div class="svg-icons" style="height: 0; width: 0; position: absolute; visibility: hidden">\n  <svg xmlns="http://www.w3.org/2000/svg">\n    <symbol id="sbx-icon-clear-3" viewBox="0 0 40 40"><path d="M16.228 20L1.886 5.657 0 3.772 3.772 0l1.885 1.886L20 16.228 34.343 1.886 36.228 0 40 3.772l-1.886 1.885L23.772 20l14.342 14.343L40 36.228 36.228 40l-1.885-1.886L20 23.772 5.657 38.114 3.772 40 0 36.228l1.886-1.885L16.228 20z" fill-rule="evenodd"></symbol>\n    <symbol id="sbx-icon-search-13" viewBox="0 0 40 40"><path d="M26.806 29.012a16.312 16.312 0 0 1-10.427 3.746C7.332 32.758 0 25.425 0 16.378 0 7.334 7.333 0 16.38 0c9.045 0 16.378 7.333 16.378 16.38 0 3.96-1.406 7.593-3.746 10.426L39.547 37.34c.607.608.61 1.59-.004 2.203a1.56 1.56 0 0 1-2.202.004L26.807 29.012zm-10.427.627c7.322 0 13.26-5.938 13.26-13.26 0-7.324-5.938-13.26-13.26-13.26-7.324 0-13.26 5.936-13.26 13.26 0 7.322 5.936 13.26 13.26 13.26z" fill-rule="evenodd"></symbol>\n  </svg>\n</div>\n  '};var d=s(7939),p=s.n(d);const y={mergeKeyWithParent(e,t){if(void 0===e[t])return e;if("object"!=typeof e[t])return e;const s=p().extend({},e,e[t]);return delete s[t],s},groupBy(e,t){const s={};return p().each(e,((e,i)=>{if(void 0===i[t])throw new Error(`[groupBy]: Object has no key ${t}`);let n=i[t];"string"==typeof n&&(n=n.toLowerCase()),Object.prototype.hasOwnProperty.call(s,n)||(s[n]=[]),s[n].push(i)})),s},values:e=>Object.keys(e).map((t=>e[t])),flatten(e){const t=[];return e.forEach((e=>{Array.isArray(e)?e.forEach((e=>{t.push(e)})):t.push(e)})),t},flattenAndFlagFirst(e,t){const s=this.values(e).map((e=>e.map(((e,s)=>(e[t]=0===s,e)))));return this.flatten(s)},compact(e){const t=[];return e.forEach((e=>{e&&t.push(e)})),t},getHighlightedValue:(e,t)=>e._highlightResult&&e._highlightResult.hierarchy_camel&&e._highlightResult.hierarchy_camel[t]&&e._highlightResult.hierarchy_camel[t].matchLevel&&"none"!==e._highlightResult.hierarchy_camel[t].matchLevel&&e._highlightResult.hierarchy_camel[t].value?e._highlightResult.hierarchy_camel[t].value:e._highlightResult&&e._highlightResult&&e._highlightResult[t]&&e._highlightResult[t].value?e._highlightResult[t].value:e[t],getSnippetedValue(e,t){if(!e._snippetResult||!e._snippetResult[t]||!e._snippetResult[t].value)return e[t];let s=e._snippetResult[t].value;return s[0]!==s[0].toUpperCase()&&(s=`\u2026${s}`),-1===[".","!","?"].indexOf(s[s.length-1])&&(s=`${s}\u2026`),s},deepClone:e=>JSON.parse(JSON.stringify(e))};class v{constructor(e){let{searchDocs:t,searchIndex:s,inputSelector:i,debug:n=!1,queryDataCallback:l=null,autocompleteOptions:a={debug:!1,hint:!1,autoselect:!0},transformData:o=!1,queryHook:h=!1,handleSelected:u=!1,enhancedSearchInput:d=!1,layout:y="collumns"}=e;this.input=v.getInputFromSelector(i),this.queryDataCallback=l||null;const m=!(!a||!a.debug)&&a.debug;a.debug=n||m,this.autocompleteOptions=a,this.autocompleteOptions.cssClasses=this.autocompleteOptions.cssClasses||{},this.autocompleteOptions.cssClasses.prefix=this.autocompleteOptions.cssClasses.prefix||"ds";const b=this.input&&"function"==typeof this.input.attr&&this.input.attr("aria-label");this.autocompleteOptions.ariaLabel=this.autocompleteOptions.ariaLabel||b||"search input",this.isSimpleLayout="simple"===y,this.client=new r(t,s),d&&(this.input=v.injectSearchBox(this.input)),this.autocomplete=c()(this.input,a,[{source:this.getAutocompleteSource(o,h),templates:{suggestion:v.getSuggestionTemplate(this.isSimpleLayout),footer:g.footer,empty:v.getEmptyTemplate()}}]);const f=u;this.handleSelected=f||this.handleSelected,f&&p()(".algolia-autocomplete").on("click",".ds-suggestions a",(e=>{e.preventDefault()})),this.autocomplete.on("autocomplete:selected",this.handleSelected.bind(null,this.autocomplete.autocomplete)),this.autocomplete.on("autocomplete:shown",this.handleShown.bind(null,this.input)),d&&v.bindSearchBoxEvent()}static injectSearchBox(e){e.before(g.searchBox);const t=e.prev().prev().find("input");return e.remove(),t}static bindSearchBoxEvent(){p()('.searchbox [type="reset"]').on("click",(function(){p()("input#docsearch").focus(),p()(this).addClass("hide"),c().autocomplete.setVal("")})),p()("input#docsearch").on("keyup",(()=>{const e=document.querySelector("input#docsearch"),t=document.querySelector('.searchbox [type="reset"]');t.className="searchbox__reset",0===e.value.length&&(t.className+=" hide")}))}static getInputFromSelector(e){const t=p()(e).filter("input");return t.length?p()(t[0]):null}getAutocompleteSource(e,t){return(s,i)=>{t&&(s=t(s)||s),this.client.search(s).then((t=>{this.queryDataCallback&&"function"==typeof this.queryDataCallback&&this.queryDataCallback(t),e&&(t=e(t)||t),i(v.formatHits(t))}))}}static formatHits(e){const t=y.deepClone(e).map((e=>(e._highlightResult&&(e._highlightResult=y.mergeKeyWithParent(e._highlightResult,"hierarchy")),y.mergeKeyWithParent(e,"hierarchy"))));let s=y.groupBy(t,"lvl0");return p().each(s,((e,t)=>{const i=y.groupBy(t,"lvl1"),n=y.flattenAndFlagFirst(i,"isSubCategoryHeader");s[e]=n})),s=y.flattenAndFlagFirst(s,"isCategoryHeader"),s.map((e=>{const t=v.formatURL(e),s=y.getHighlightedValue(e,"lvl0"),i=y.getHighlightedValue(e,"lvl1")||s,n=y.compact([y.getHighlightedValue(e,"lvl2")||i,y.getHighlightedValue(e,"lvl3"),y.getHighlightedValue(e,"lvl4"),y.getHighlightedValue(e,"lvl5"),y.getHighlightedValue(e,"lvl6")]).join('<span class="aa-suggestion-title-separator" aria-hidden="true"> \u203a </span>'),l=y.getSnippetedValue(e,"content"),a=i&&""!==i||n&&""!==n,r=n&&""!==n&&n!==i,o=!r&&i&&""!==i&&i!==s;return{isLvl0:!o&&!r,isLvl1:o,isLvl2:r,isLvl1EmptyOrDuplicate:!i||""===i||i===s,isCategoryHeader:e.isCategoryHeader,isSubCategoryHeader:e.isSubCategoryHeader,isTextOrSubcategoryNonEmpty:a,category:s,subcategory:i,title:n,text:l,url:t}}))}static formatURL(e){const{url:t,anchor:s}=e;if(t){return-1!==t.indexOf("#")?t:s?`${e.url}#${e.anchor}`:t}return s?`#${e.anchor}`:(console.warn("no anchor nor url for : ",JSON.stringify(e)),null)}static getEmptyTemplate(){return e=>n().compile(g.empty).render(e)}static getSuggestionTemplate(e){const t=e?g.suggestionSimple:g.suggestion,s=n().compile(t);return e=>s.render(e)}handleSelected(e,t,s,i,n){void 0===n&&(n={}),"click"!==n.selectionMethod&&(e.setVal(""),window.location.assign(s.url))}handleShown(e){const t=e.offset().left+e.width()/2;let s=p()(document).width()/2;isNaN(s)&&(s=900);const i=t-s>=0?"algolia-autocomplete-right":"algolia-autocomplete-left",n=t-s<0?"algolia-autocomplete-right":"algolia-autocomplete-left",l=p()(".algolia-autocomplete");l.hasClass(i)||l.addClass(i),l.hasClass(n)&&l.removeClass(n)}}const m=v},15525:()=>{}}]);