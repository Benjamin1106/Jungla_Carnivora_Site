import{M as S,t as P,h as f,i as A,j as D,f as N,c as I,o as L,a as t,l as u,n as k,u as V,P as h}from"./index-BALdq3k9.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";const i=[];for(let a=0;a<256;++a)i.push((a+256).toString(16).slice(1));function q(a,s=0){return(i[a[s+0]]+i[a[s+1]]+i[a[s+2]]+i[a[s+3]]+"-"+i[a[s+4]]+i[a[s+5]]+"-"+i[a[s+6]]+i[a[s+7]]+"-"+i[a[s+8]]+i[a[s+9]]+"-"+i[a[s+10]]+i[a[s+11]]+i[a[s+12]]+i[a[s+13]]+i[a[s+14]]+i[a[s+15]]).toLowerCase()}let m;const U=new Uint8Array(16);function x(){if(!m){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");m=crypto.getRandomValues.bind(crypto)}return m(U)}const E=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),_={randomUUID:E};function T(a,s,o){var d;a=a||{};const r=a.random??((d=a.rng)==null?void 0:d.call(a))??x();if(r.length<16)throw new Error("Random bytes length must be >= 16");return r[6]=r[6]&15|64,r[8]=r[8]&63|128,q(r)}function j(a,s,o){return _.randomUUID&&!a?_.randomUUID():T(a)}const M=a=>Number(a).toLocaleString("es-CL"),pa=()=>j(),c=""+new URL("v_atrapamoscas-DLczvv1o.jpg",import.meta.url).href,R=""+new URL("d_capensis-6Q48Aig3.jpg",import.meta.url).href,B=""+new URL("img3-D72ehnlJ.jpg",import.meta.url).href,H=""+new URL("img2-lrMPNASj.jpg",import.meta.url).href,F=[{id:1,type:"Venus",care:{water:{type:"Agua destilada - Bidón - Lluvia",frequency:"Cada 2-3 días",amount:"Moderada - Sin encharcar"},ambient:{light:"Directa filtrada",temperature_ideal:"20-30°C",humidity:"Alta"},soil:{type_1:"Musgo sphagnum",type_2:"Mezcla de turba rubia con perlita",ph:"Neutro a ligeramente acido",fertilization:{sustrato:"Ninguna",traps:"1 x trampa",frequency:"2 - 3 días",note:"Si no la alimentas no importa, solo es para acelerar su crecimiento"}},type_foods:"Moscas - Moscas de la fruta - Hormigas"}},{id:2,type:"Drosera",care:{water:{frequency:"Todos los días",amount:"Alta - Sin encharcar"},ambient:{light:"Directa filtrada",temperature_ideal:"20-25°C",humidity:"Muy alta"},soil:{type_1:"Musgo sphagnum",type_2:"Mezcla de turba rubia con perlita",ph:"Neutro a ligeramente acido",fertilization:{sustrato:"Ninguna",traps:"Muchas por trampa",frequency:"Todos los días",note:"Si no la alimentas no importa, solo es para acelerar su crecimiento"}},type_foods:"Moscas - Moscas de la fruta - Hormigas - Pequeños insectos"}},{id:3,type:"Sarracenia",care:{water:{frequency:"Cada 2-3 días",amount:"Moderada - Sin encharcar"},ambient:{temperature_ideal:"25-35°C",humidity:"Alta"},light:"Directa o Directa filtrada",soil:{type_1:"Musgo sphagnum",type_2:"Mezcla de turba rubia con perlita",ph:"Neutro a ligeramente acido",fertilization:{sustrato:"Ninguna",traps:"Muchas por trampa",frequency:"Todos los días",note:"Si no la alimentas no importa, solo es para acelerar su crecimiento"}},type_foods:"Moscas - Moscas de la fruta - Hormigas - Abejas - Avispas - Lagartijas"}},{id:4,type:"Nepenthes",care:{water:{frequency:"Cada 2-3 días",amount:"Moderada - Sin encharcar"},ambient:{light:"Directa filtrada",temperature_ideal:"24-30°C",humidity:"Alta"},soil:{type_1:"Musgo sphagnum",type_2:"Mezcla de turba rubia con perlita",ph:"Neutro a ligeramente acido",fertilization:{sustrato:"Ninguna",traps:"Muchas por trampa (si se puede)",frequency:"Todos los días",note:"Si no la alimentas no importa, solo es para acelerar su crecimiento"}},type_foods:"Moscas - Moscas de la fruta - Hormigas - Lagartijas"}},{id:5,type:"Cephalotus",care:{water:{frequency:"Cada 2-3 días",amount:"Moderada - Sin encharcar"},ambient:{light:"Directa filtrada",temperature_ideal:"24-30°C",humidity:"Alta"},soil:{type_1:"Musgo sphagnum",type_2:"Mezcla de turba rubia con perlita",ph:"Neutro a ligeramente acido",fertilization:{sustrato:"Ninguna",traps:"Muchas por trampa (si se puede)",frequency:"Todos los días",note:"Si no la alimentas no importa, solo es para acelerar su crecimiento"}},type_foods:"Moscas - Moscas de la fruta - Hormigas"}},{id:6,type:"Heliamphora",care:{water:{frequency:"Cada 2-3 días",amount:"Moderada - Sin encharcar"},ambient:{light:"Directa filtrada",temperature_ideal:"24-30°C",humidity:"Alta"},soil:{type_1:"Musgo sphagnum",type_2:"Mezcla de turba rubia con perlita",ph:"Neutro a ligeramente acido",fertilization:{sustrato:"Ninguna",traps:"Muchas por trampa (si se puede)",frequency:"Todos los días",note:"Si no la alimentas no importa, solo es para acelerar su crecimiento"}},type_foods:"Moscas - Moscas de la fruta - Hormigas - Abejas - Avispas"}}],ma=[{id:1,type:"Venus",cultivar:!1,category:"Planta Carnivora",name:"Venus Atrapamoscas",size:"Small",color:"Green",price:5e3,stock:15,image:c},{id:2,type:"Venus",cultivar:!1,category:"Planta Carnivora",name:"Venus Atrapamoscas",size:"Small +1",color:"Green",price:6e3,stock:15,image:c},{id:3,type:"Venus",cultivar:!1,category:"Planta Carnivora",name:"Venus Atrapamoscas",size:"Small +2",color:"Green",price:7e3,stock:15,image:c},{id:4,type:"Venus",cultivar:!1,category:"Planta Carnivora",name:"Venus Atrapamoscas",size:"Medium",color:"Green",price:1e4,stock:15,image:c},{id:5,type:"Venus",cultivar:!1,category:"Planta Carnivora",name:"Venus Atrapamoscas",size:"Large",color:"Green",price:15e3,stock:15,image:c},{id:6,type:"Venus",cultivar:!1,category:"Planta Carnivora",name:"Venus Atrapamoscas",size:"Large +1",color:"Green",price:2e4,stock:15,image:c},{id:7,type:"Drosera",cultivar:!1,category:"Planta Carnivora",name:"Drosera Capensis",size:"Small",color:"Green",price:5e3,stock:15,image:R},{id:8,type:"Drosera",category:"Planta Carnivora",name:"Drosera Binata",size:"Small",color:"Green",price:5e3,stock:15,image:H},{id:9,type:"Cephalotus",cultivar:!1,category:"Planta Carnivora",name:"Cephalotus Follicularis",size:"Small",color:"Purple",price:25e3,stock:3,image:B}],va=a=>{const s=document.getElementById(a);if(!s)return;const o=S.getOrCreateInstance(s,{backdrop:!0,keyboard:!0,focus:!0});s._hasFocusFix||(s.addEventListener("hide.bs.modal",()=>{document.activeElement&&s.contains(document.activeElement)&&document.activeElement.blur()}),s._hasFocusFix=!0),o.show()},G={class:"modal fade",id:"modalId",tabindex:"-1","aria-labelledby":"ModalLabel",role:"dialog","aria-modal":"true"},W={class:"modal-card modal-dialog modal-card-centered"},O={class:"modal-content"},J={class:"modal-body"},Q={class:"card-item"},K={class:"header-card"},X={class:"header-item"},Y=["src","alt"],Z={class:"body-card"},aa={class:"body-item name"},ea={class:"body-item-data"},ta={class:"body-item"},sa={class:"body-item-data"},ia={class:"body-item"},oa={class:"body-item-data"},ra={class:"body-item"},na={class:"body-item-data"},la="56964481006",ca={__name:"SelectProductModal",props:{product:{type:Object,default:void 0}},setup(a){const o=P(a,"product"),r=f(!1),d=f(window.innerWidth<640),C=()=>{const n=o.value,e=`Hola, quisiera comprar una planta:

        Nombre: ${n.name}
        Tipo: ${n.type}
        Tamaño: ${n.size}
        Precio: ${M(n.price)}

        ¿Está disponible?`,l=`https://wa.me/${la}?text=${encodeURIComponent(e)}`;window.open(l,"_blank")},v=A(()=>F.find(e=>{var l;return e.type===((l=o.value)==null?void 0:l.type)})||"No hay instrucciones disponibles."),z=()=>{const n=document.getElementById("btnPopover");if(!n||!v.value)return;const e=v.value;e&&(document.addEventListener("click",l=>{l.target.classList.contains("close-popover-mobile")&&(h.getInstance(document.getElementById("btnPopover")).hide(),r.value=!1)}),new h(n,{trigger:"click",html:!0,placement:"left",customClass:"custom-popover-panel",offset:[0,0],content:`
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
        `}))},w=()=>{r.value=!r.value};return D(o,()=>{z()}),N(()=>{window.addEventListener("resize",()=>{d.value=window.innerWidth<640})}),(n,e)=>{var l,p,y,g,b;return L(),I("div",G,[t("div",W,[t("div",O,[e[6]||(e[6]=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"ModalLabel"}," Detalles del Producto "),t("i",{type:"button",class:"bi bi-x close-modal","data-bs-dismiss":"modal","aria-label":"Cerrar"})],-1)),t("div",J,[t("div",Q,[t("div",K,[t("div",X,[t("img",{src:(l=o.value)==null?void 0:l.image,alt:(p=o.value)==null?void 0:p.type,class:"image-product"},null,8,Y)])]),t("div",Z,[t("div",aa,[e[1]||(e[1]=t("div",{class:"body-item-label"}," Nombre: ",-1)),t("div",ea,u((y=o.value)==null?void 0:y.name),1),t("button",{id:"btnPopover",type:"button",class:k(["btn-popover",{active:r.value}]),"data-bs-html":"true","data-bs-trigger":"manual",onClick:w},[...e[0]||(e[0]=[t("i",{class:"bi bi-info-circle-fill custom-info"},null,-1)])],2)]),t("div",ta,[e[2]||(e[2]=t("div",{class:"body-item-label"}," Tipo: ",-1)),t("div",sa,u((g=o.value)!=null&&g.cultivar?"Cultivar":"Tipica"),1)]),t("div",ia,[e[3]||(e[3]=t("div",{class:"body-item-label"}," Tamaño: ",-1)),t("div",oa,u((b=o.value)==null?void 0:b.size),1)]),t("div",ra,[e[4]||(e[4]=t("div",{class:"body-item-label"}," Precio: ",-1)),t("div",na,u(o.value?V(M)(o.value.price):""),1)])])])]),t("div",{class:"modal-footer"},[t("div",{class:"card-btn"},[e[5]||(e[5]=t("button",{class:"close-btn","data-bs-dismiss":"modal"},"Cerrar",-1)),t("button",{class:"save-btn",onClick:C},"Comprar")])])])])])}}},ya=$(ca,[["__scopeId","data-v-367cfdcf"]]);export{ya as S,M as f,pa as g,va as o,ma as p};
