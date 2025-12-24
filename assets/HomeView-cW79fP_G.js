import{p as R,c as F,u as O}from"./dataPlants-BwKCTQfm.js";import{f as x}from"./utilsTools-e36Ag0H8.js";import{z as V,A as G,M as U,g as y,h as k,f as L,B as D,c as v,o as p,a as s,d as g,F as I,q as H,w as z,r as W,l as q,k as h,u as w,e as N,t as j,i as K,n as J,R as Q,P as E}from"./index-B-PfL2wF.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";const X=V("home",{state:()=>({selectProductData:void 0}),getters:{},actions:{setSelectProductsPlants(u){this.selectProductData=u}}}),T=()=>{const u=X(),{selectProductData:a}=G(u);return{selectProductPlant:i=>{u.setSelectProductsPlants(i)},selectProductData:a}},Y=u=>{const a=document.getElementById(u);if(!a)return;const l=U.getOrCreateInstance(a,{backdrop:!0,keyboard:!0,focus:!0});a._hasFocusFix||(a.addEventListener("hide.bs.modal",()=>{document.activeElement&&a.contains(document.activeElement)&&document.activeElement.blur()}),a._hasFocusFix=!0),l.show()},Z={class:"home-container"},ee=["disabled"],se=["onClick"],te={class:"image-card"},ae=["src","alt"],oe={class:"product-name text-truncate"},le={class:"product-price"},ie={key:1,class:"card-items-disabled"},ne={class:"image-card-disabled"},ce=["src","alt"],re={class:"product-name-disabled text-truncate"},de={class:"product-price-disabled"},ue=["disabled"],me={__name:"ProductsHome",setup(u){const{selectProductPlant:a}=T(),l=y(null),i=y(!0),m=y(!1),$=k(()=>{const e=new Set;return R.filter(o=>{if(!e.has(o.name))return e.add(o.name),!0}).slice(0,4)}),_=k(()=>{const e=$.value,o=new Set(e.map(c=>c.id));return R.filter(c=>!o.has(c.id))}),d=k(()=>{const e=$.value,o=_.value;return[...e,...o]}),f=k(()=>{const e=[],o=[];return d.value.forEach(c=>{c.category==="Planta Carnivora"&&(c.enabled?e.push(c):o.push(c))}),[...e,...o]}),n=e=>{a(e),Y("modalId")},b=()=>{if(!l.value)return;const e=2;i.value=l.value.scrollLeft<=e,m.value=l.value.scrollLeft+l.value.clientWidth>=l.value.scrollWidth-e},r=(e=1)=>{if(!l.value)return;const o=l.value.querySelector(".card-content"),c=parseFloat(getComputedStyle(l.value).columnGap||getComputedStyle(l.value).gap||0),t=o?o.getBoundingClientRect().width:260,C=Math.max(1,Math.floor(l.value.clientWidth/(t+c))),P=e*C*(t+c);l.value.scrollBy({left:P,behavior:"smooth"})};return L(async()=>{await D(),b(),new ResizeObserver(b).observe(l.value)}),(e,o)=>{const c=W("RouterLink");return p(),v("div",Z,[s("button",{class:"arrow-btn left","aria-label":"Desplazar productos a la izquierda",onClick:o[0]||(o[0]=t=>r(-1)),disabled:i.value}," ‹ ",8,ee),s("div",{class:"home-content",ref_key:"homeC",ref:l,onScroll:b},[(p(!0),v(I,null,H(f.value,(t,C)=>(p(),v("div",{key:C,class:"card-content",style:q({"--stagger":`${C*180}ms`})},[t!=null&&t.enabled?(p(),v("div",{key:0,class:"card-items",onClick:P=>n(t)},[s("div",te,[s("img",{src:t==null?void 0:t.image,alt:t==null?void 0:t.name},null,8,ae)]),s("div",oe,h(t==null?void 0:t.name),1),s("div",le," $"+h(w(x)(t==null?void 0:t.price)),1)],8,se)):(p(),v("div",ie,[s("div",ne,[s("img",{src:t==null?void 0:t.image,alt:t==null?void 0:t.name},null,8,ce)]),s("div",re,h(t==null?void 0:t.name),1),s("div",de," $"+h(w(x)(t==null?void 0:t.price)),1),o[2]||(o[2]=s("div",{class:"out-stock"}," Agotado ",-1))]))],4))),128))],544),s("button",{class:"arrow-btn right","aria-label":"Desplazar productos a la derecha",onClick:o[1]||(o[1]=t=>r(1)),disabled:m.value}," › ",8,ue),g(c,{class:"go-products",to:"/products/plants"},{default:z(()=>[...o[3]||(o[3]=[N(" Plantas Carnivoras → ",-1)])]),_:1})])}}},ve=S(me,[["__scopeId","data-v-742838b5"]]),pe={class:"home-container"},be=["disabled"],_e={class:"image-card"},fe=["src","alt"],he={class:"plant-name text-truncate"},ge=["disabled"],ye={__name:"CareHome",setup(u){const a=y(null),l=y(!0),i=y(!1),m=()=>{if(!a.value)return;const _=2;l.value=a.value.scrollLeft<=_,i.value=a.value.scrollLeft+a.value.clientWidth>=a.value.scrollWidth-_},$=(_=1)=>{if(!a.value)return;const d=a.value.querySelector(".card-content"),f=parseFloat(getComputedStyle(a.value).columnGap||getComputedStyle(a.value).gap||0),n=d?d.getBoundingClientRect().width:260,b=Math.max(1,Math.floor(a.value.clientWidth/(n+f))),r=_*b*(n+f);a.value.scrollBy({left:r,behavior:"smooth"})};return L(async()=>{await D(),m(),new ResizeObserver(m).observe(a.value)}),(_,d)=>{const f=W("RouterLink");return p(),v("div",pe,[s("button",{class:"arrow-btn left","aria-label":"Desplazar plantas a la izquierda",onClick:d[0]||(d[0]=n=>$(-1)),disabled:l.value}," ‹ ",8,be),s("div",{class:"home-content",ref_key:"homeC",ref:a,onScroll:m},[(p(!0),v(I,null,H(w(F),(n,b)=>(p(),v("div",{key:b,class:"card-content",style:q({"--stagger":`${b*180}ms`})},[g(f,{class:"card-items",to:`products/care/${n.id}`},{default:z(()=>[s("div",_e,[s("img",{src:n==null?void 0:n.image,alt:n==null?void 0:n.name},null,8,fe)]),s("div",he,h(n==null?void 0:n.type),1)]),_:2},1032,["to"])],4))),128))],544),s("button",{class:"arrow-btn right","aria-label":"Desplazar plantas a la derecha",onClick:d[1]||(d[1]=n=>$(1)),disabled:i.value}," › ",8,ge),g(f,{class:"go-plants",to:"products/care"},{default:z(()=>[...d[2]||(d[2]=[N(" Cuidados → ",-1)])]),_:1})])}}},$e=S(ye,[["__scopeId","data-v-3fe5df8a"]]),Ce={},we={class:"map-card"};function Pe(u,a){return p(),v("div",we,[...a[0]||(a[0]=[s("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.5118059675438!2d-70.66151682354895!3d-33.43596999677216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c53e4894abd5%3A0xf980e10e64951a6e!2sMario%20Kreutzberger%201520%2C%208340217%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1762200609827!5m2!1ses-419!2scl",class:"rounded-4 m-0 p-0 border rounded-4 shadow",width:"100%",height:"400px",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},null,-1)])])}const ke=S(Ce,[["render",Pe],["__scopeId","data-v-f3f0e23d"]]),Se={class:"modal fade",id:"modalId",tabindex:"-1","aria-labelledby":"ModalLabel",role:"dialog","aria-modal":"true"},xe={class:"modal-card modal-dialog modal-card-centered"},ze={class:"modal-content"},Le={class:"modal-body"},Ie={class:"card-item"},Me={class:"header-card"},Be={class:"header-item"},Re=["src","alt"],Ee={class:"body-card"},Fe={class:"body-item name"},De={class:"body-item-data"},He={class:"body-item"},We={class:"body-item-data"},qe={class:"body-item"},Ne={class:"body-item-data"},Te={class:"body-item"},Ae={class:"body-item-data"},Oe={class:"modal-footer"},Ve=["onClick"],Ge="56964481006",Ue={__name:"SelectProductModal",props:{product:{type:Object,default:void 0}},setup(u){const a=u,{selectProductPlant:l}=O(),i=j(a,"product"),m=y(!1),$=y(window.innerWidth<640),_=()=>{const r=i.value,e=`Hola, quisiera comprar una planta:

        Nombre: ${r.name}
        Tipo: ${r.type}
        Tamaño: ${r.size}
        Precio: ${x(r.price)}

        ¿Está disponible?`,o=`https://wa.me/${Ge}?text=${encodeURIComponent(e)}`;window.open(o,"_blank")},d=k(()=>F.find(e=>{var o;return e.type===((o=i.value)==null?void 0:o.type)})||"No hay instrucciones disponibles."),f=r=>{l(r)},n=()=>{const r=document.getElementById("btnPopover");if(!r||!d.value)return;const e=d.value;e&&(document.addEventListener("click",o=>{o.target.classList.contains("close-popover-mobile")&&(E.getInstance(document.getElementById("btnPopover")).hide(),m.value=!1)}),new E(r,{trigger:"click",html:!0,placement:"left",customClass:"custom-popover-panel",offset:[0,0],content:`
        <i class="bi bi-x close-popover-mobile"></i>
        <div class="care-popover">
            <div class="care-header">
                Guía de Cuidados
            </div>
            <div class="care-body">
                <div class="care-section">
                    <div class="care-section-title">
                        Ambiente
                    </div>
                    <ul class="care-list">
                        <li>
                            <span class="label">
                                Luz:
                            </span> 
                            <span>
                                ${e.care.ambient.light}
                            </span>
                        </li>
                        <li>
                            <span class="label">
                                Humedad:
                            </span> 
                            <span>
                                ${e.care.ambient.humidity}
                                </span>
                        </li>
                        <li>
                            <span class="label">
                                Temperatura:
                            </span> 
                            <span>
                                ${e.care.ambient.temperature_ideal}
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="care-section">
                    <div class="care-section-title">
                        Riego
                    </div>
                    <ul class="care-list">
                        <li>
                            <span class="label">
                                Cantidad:
                            </span> 
                            <span>
                                ${e.care.water.amount}
                            </span>
                        </li>
                        <li>
                            <span class="label">
                                Frecuencia:
                            </span> 
                            <span>
                                ${e.care.water.frequency}
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="care-section">
                    <div class="care-section-title">
                        Sustrato y suelo:
                    </div>
                    <ul class="care-list">
                        <li>
                            <span class="label">
                                Nro 1:
                            </span> 
                            <span>
                                ${e.care.soil.type_1}
                            </span>
                        </li>
                        <li>
                            <span class="label">
                                Nro 2:
                            </span> 
                            <span>
                                ${e.care.soil.type_2}
                            </span>
                        </li>
                        <li>
                            <span class="label">
                                Ph:
                            </span> 
                            <span>
                                ${e.care.soil.ph}
                            </span>
                        </li>
                    </ul>
                </div>

                <div class="care-section">
                    <div class="care-section-title">
                        Fertilización:
                    </div>
                    <ul class="care-list">
                        <li>
                            <span class="label">
                                Frecuencia:
                            </span> 
                            <span>
                                ${e.care.soil.fertilization.frequency}
                            </span>
                        </li>
                        <li>
                            <span class="label">
                                Fertilizante:
                            </span> 
                            <span>
                                ${e.care.soil.fertilization.sustrato}
                            </span>
                        </li>
                        <li>
                            <span class="label">
                                Dosis:
                            </span> 
                            <span>
                                ${e.care.soil.fertilization.traps}
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="care-section">
                    <div class="care-section-title">
                        Nota:
                    </div>
                    <ul class="care-list">
                        <li class="care-note">
                            ${e.care.soil.fertilization.note}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        `}))},b=()=>{m.value=!m.value};return K(i,()=>{n()}),L(()=>{window.addEventListener("resize",()=>{$.value=window.innerWidth<640})}),(r,e)=>{var o,c,t,C,P,M,B;return p(),v("div",Se,[s("div",xe,[s("div",ze,[e[7]||(e[7]=s("div",{class:"modal-header"},[s("h5",{class:"modal-title",id:"ModalLabel"}," Detalles del Producto "),s("i",{type:"button",class:"bi bi-x close-modal","data-bs-dismiss":"modal","aria-label":"Cerrar"})],-1)),s("div",Le,[s("div",Ie,[s("div",Me,[s("div",Be,[s("img",{src:(o=i.value)==null?void 0:o.image,alt:(c=i.value)==null?void 0:c.type,class:"image-product"},null,8,Re)])]),s("div",Ee,[s("div",Fe,[e[1]||(e[1]=s("div",{class:"body-item-label"}," Nombre: ",-1)),s("div",De,h((t=i.value)==null?void 0:t.name),1),s("button",{id:"btnPopover",type:"button",class:J(["btn-popover",{active:m.value}]),"data-bs-html":"true","data-bs-trigger":"manual",onClick:b},[...e[0]||(e[0]=[s("i",{class:"bi bi-info-circle-fill custom-info","data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-html":"true",title:"<div class='care-tooltip'>Cuidados</div>"},null,-1)])],2)]),s("div",He,[e[2]||(e[2]=s("div",{class:"body-item-label"}," Tipo: ",-1)),s("div",We,h((C=i.value)!=null&&C.cultivar?"Cultivar":"Tipica"),1)]),s("div",qe,[e[3]||(e[3]=s("div",{class:"body-item-label"}," Tamaño: ",-1)),s("div",Ne,h((P=i.value)==null?void 0:P.size),1)]),s("div",Te,[e[4]||(e[4]=s("div",{class:"body-item-label"}," Precio: ",-1)),s("div",Ae,h(i.value?`$${w(x)((M=i.value)==null?void 0:M.price)}`:""),1)])])])]),s("div",Oe,[g(w(Q),{to:`/products/plants/${(B=i.value)==null?void 0:B.id}`,custom:""},{default:z(({navigate:A})=>[s("div",{class:"card-redirect-btn","data-bs-dismiss":"modal",onClick:Xe=>(f(i.value),A())},[...e[5]||(e[5]=[s("i",{class:"bi bi-arrow-return-right icon-redirect"},null,-1)])],8,Ve)]),_:1},8,["to"]),s("div",{class:"card-btn"},[e[6]||(e[6]=s("button",{class:"close-btn","data-bs-dismiss":"modal"},"Cerrar",-1)),s("button",{class:"save-btn",onClick:_},"Comprar")])])])])])}}},je=S(Ue,[["__scopeId","data-v-e7a1fb61"]]),Ke={class:"page-container"},Je={class:"general-card"},Qe={__name:"HomeView",setup(u){const{selectProductData:a}=T();return(l,i)=>(p(),v(I,null,[s("div",Ke,[s("div",Je,[g(ve),g($e),g(ke)])]),g(je,{product:w(a)},null,8,["product"])],64))}},ts=S(Qe,[["__scopeId","data-v-44999aa1"]]);export{ts as default};
