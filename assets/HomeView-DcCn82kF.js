import{p as x,f as $,u as D,c as N}from"./dataPlants-C4EMe_C1.js";import{y as R,z as T,M as q,g as h,h as f,f as E,A as H,c as m,o as v,a as s,d as C,F as L,q as W,w as F,r as A,l as O,k as d,u as y,e as V,t as G,i as U,n as j,R as J,P as z}from"./index-Dkye0lCW.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";const K=R("home",{state:()=>({selectProductData:void 0}),getters:{},actions:{setSelectProductsPlants(r){this.selectProductData=r}}}),M=()=>{const r=K(),{selectProductData:n}=T(r);return{selectProductPlant:l=>{r.setSelectProductsPlants(l)},selectProductData:n}},Q=r=>{const n=document.getElementById(r);if(!n)return;const a=q.getOrCreateInstance(n,{backdrop:!0,keyboard:!0,focus:!0});n._hasFocusFix||(n.addEventListener("hide.bs.modal",()=>{document.activeElement&&n.contains(document.activeElement)&&document.activeElement.blur()}),n._hasFocusFix=!0),a.show()},X={class:"home-container"},Y=["disabled"],Z=["onClick"],ee={class:"image-card"},se=["src","alt"],te={class:"product-name text-truncate"},ae={class:"product-price"},oe={key:1,class:"card-items-disabled"},le={class:"image-card-disabled"},ie=["src","alt"],ne={class:"product-name-disabled text-truncate"},ce={class:"product-price-disabled"},re=["disabled"],de={__name:"Home",setup(r){const{selectProductPlant:n}=M(),a=h(null),l=h(!0),u=h(!1),g=f(()=>{const e=new Set;return x.filter(t=>{if(!e.has(t.name))return e.add(t.name),!0}).slice(0,4)}),w=f(()=>{const e=g.value,t=new Set(e.map(i=>i.id));return x.filter(i=>!t.has(i.id))}),P=f(()=>{const e=g.value,t=w.value;return[...e,...t]}),k=f(()=>{const e=[],t=[];return P.value.forEach(i=>{i.category==="Planta Carnivora"&&(i.enabled?e.push(i):t.push(i))}),[...e,...t]}),S=e=>{n(e),Q("modalId")},b=()=>{if(!a.value)return;const e=2;l.value=a.value.scrollLeft<=e,u.value=a.value.scrollLeft+a.value.clientWidth>=a.value.scrollWidth-e},c=(e=1)=>{if(!a.value)return;const t=a.value.querySelector(".card-content"),i=parseFloat(getComputedStyle(a.value).columnGap||getComputedStyle(a.value).gap||0),o=t?t.getBoundingClientRect().width:260,p=Math.max(1,Math.floor(a.value.clientWidth/(o+i))),_=e*p*(o+i);a.value.scrollBy({left:_,behavior:"smooth"})};return E(async()=>{await H(),b(),new ResizeObserver(b).observe(a.value)}),(e,t)=>{const i=A("RouterLink");return v(),m("div",X,[s("button",{class:"arrow-btn left","aria-label":"Desplazar productos a la izquierda",onClick:t[0]||(t[0]=o=>c(-1)),disabled:l.value}," ‹ ",8,Y),s("div",{class:"home-content",ref_key:"homeC",ref:a,onScroll:b},[(v(!0),m(L,null,W(k.value,(o,p)=>(v(),m("div",{key:p,class:"card-content",style:O({"--stagger":`${p*180}ms`})},[o.enabled?(v(),m("div",{key:0,class:"card-items",onClick:_=>S(o)},[s("div",ee,[s("img",{src:o.image,alt:o.name},null,8,se)]),s("div",te,d(o.name),1),s("div",ae," $"+d(y($)(o.price)),1)],8,Z)):(v(),m("div",oe,[s("div",le,[s("img",{src:o.image,alt:o.name},null,8,ie)]),s("div",ne,d(o.name),1),s("div",ce," $"+d(y($)(o.price)),1),t[2]||(t[2]=s("div",{class:"out-stock"}," Agotado ",-1))]))],4))),128))],544),s("button",{class:"arrow-btn right","aria-label":"Desplazar productos a la derecha",onClick:t[1]||(t[1]=o=>c(1)),disabled:u.value}," › ",8,re),C(i,{class:"go-products",to:"/products/plants"},{default:F(()=>[...t[3]||(t[3]=[V(" Plantas Carnivoras → ",-1)])]),_:1})])}}},ue=I(de,[["__scopeId","data-v-c1bd285b"]]),pe={class:"modal fade",id:"modalId",tabindex:"-1","aria-labelledby":"ModalLabel",role:"dialog","aria-modal":"true"},me={class:"modal-card modal-dialog modal-card-centered"},ve={class:"modal-content"},be={class:"modal-body"},_e={class:"card-item"},fe={class:"header-card"},he={class:"header-item"},ye=["src","alt"],ge={class:"body-card"},Pe={class:"body-item name"},$e={class:"body-item-data"},Ce={class:"body-item"},we={class:"body-item-data"},ke={class:"body-item"},Se={class:"body-item-data"},xe={class:"body-item"},ze={class:"body-item-data"},Ee={class:"modal-footer"},Le=["onClick"],Fe="56964481006",Ie={__name:"SelectProductModal",props:{product:{type:Object,default:void 0}},setup(r){const n=r,{selectProductPlant:a}=D(),l=G(n,"product"),u=h(!1),g=h(window.innerWidth<640),w=()=>{const c=l.value,e=`Hola, quisiera comprar una planta:

        Nombre: ${c.name}
        Tipo: ${c.type}
        Tamaño: ${c.size}
        Precio: ${$(c.price)}

        ¿Está disponible?`,t=`https://wa.me/${Fe}?text=${encodeURIComponent(e)}`;window.open(t,"_blank")},P=f(()=>N.find(e=>{var t;return e.type===((t=l.value)==null?void 0:t.type)})||"No hay instrucciones disponibles."),k=c=>{a(c)},S=()=>{const c=document.getElementById("btnPopover");if(!c||!P.value)return;const e=P.value;e&&(document.addEventListener("click",t=>{t.target.classList.contains("close-popover-mobile")&&(z.getInstance(document.getElementById("btnPopover")).hide(),u.value=!1)}),new z(c,{trigger:"click",html:!0,placement:"left",customClass:"custom-popover-panel",offset:[0,0],content:`
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
        `}))},b=()=>{u.value=!u.value};return U(l,()=>{S()}),E(()=>{window.addEventListener("resize",()=>{g.value=window.innerWidth<640})}),(c,e)=>{var t,i,o,p,_;return v(),m("div",pe,[s("div",me,[s("div",ve,[e[7]||(e[7]=s("div",{class:"modal-header"},[s("h5",{class:"modal-title",id:"ModalLabel"}," Detalles del Producto "),s("i",{type:"button",class:"bi bi-x close-modal","data-bs-dismiss":"modal","aria-label":"Cerrar"})],-1)),s("div",be,[s("div",_e,[s("div",fe,[s("div",he,[s("img",{src:(t=l.value)==null?void 0:t.image,alt:(i=l.value)==null?void 0:i.type,class:"image-product"},null,8,ye)])]),s("div",ge,[s("div",Pe,[e[1]||(e[1]=s("div",{class:"body-item-label"}," Nombre: ",-1)),s("div",$e,d((o=l.value)==null?void 0:o.name),1),s("button",{id:"btnPopover",type:"button",class:j(["btn-popover",{active:u.value}]),"data-bs-html":"true","data-bs-trigger":"manual",onClick:b},[...e[0]||(e[0]=[s("i",{class:"bi bi-info-circle-fill custom-info","data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-html":"true",title:"<div class='care-tooltip'>Cuidados</div>"},null,-1)])],2)]),s("div",Ce,[e[2]||(e[2]=s("div",{class:"body-item-label"}," Tipo: ",-1)),s("div",we,d((p=l.value)!=null&&p.cultivar?"Cultivar":"Tipica"),1)]),s("div",ke,[e[3]||(e[3]=s("div",{class:"body-item-label"}," Tamaño: ",-1)),s("div",Se,d((_=l.value)==null?void 0:_.size),1)]),s("div",xe,[e[4]||(e[4]=s("div",{class:"body-item-label"}," Precio: ",-1)),s("div",ze,d(l.value?y($)(l.value.price):""),1)])])])]),s("div",Ee,[C(y(J),{to:"/process",custom:""},{default:F(({navigate:B})=>[s("div",{class:"card-redirect-btn","data-bs-dismiss":"modal",onClick:De=>(k(l.value),B())},[...e[5]||(e[5]=[s("i",{class:"bi bi-arrow-return-right icon-redirect"},null,-1)])],8,Le)]),_:1}),s("div",{class:"card-btn"},[e[6]||(e[6]=s("button",{class:"close-btn","data-bs-dismiss":"modal"},"Cerrar",-1)),s("button",{class:"save-btn",onClick:w},"Comprar")])])])])])}}},Me=I(Ie,[["__scopeId","data-v-49ff3348"]]),Be={class:"page-container"},qe={__name:"HomeView",setup(r){const{selectProductData:n}=M();return(a,l)=>(v(),m(L,null,[s("div",Be,[C(ue)]),C(Me,{product:y(n)},null,8,["product"])],64))}};export{qe as default};
