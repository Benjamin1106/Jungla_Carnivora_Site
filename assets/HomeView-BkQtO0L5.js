import{p as F,c as j}from"./dataPlants-BuaGpztk.js";import{f as L}from"./utilsTools-e36Ag0H8.js";import{z as Q,A as Z,M as ee,f as R,B as H,r as q,o as g,c as $,a as e,F as E,m as N,i as B,t as P,u as x,d as C,w as I,e as T,g as _,q as S,h as se,n as te,R as X,p as Y,P as U}from"./index-CRHRRv6l.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ae=Q("home",{state:()=>({selectProductPlantData:void 0,selectAccessoryProductData:void 0}),getters:{},actions:{setSelectProductPlant(p){this.selectProductPlantData=p},setSelectAccessoryProduct(p){this.selectAccessoryProductData=p}}}),D=()=>{const p=ae(),{selectProductPlantData:n,selectAccessoryProductData:a}=Z(p);return{selectProductPlantData:n,selectAccessoryProductData:a,selectProductPlant:w=>{p.setSelectProductPlant(w)},selectAccessoryProduct:w=>{p.setSelectAccessoryProduct(w)}}},K=p=>{const n=document.getElementById(p);if(!n)return;const a=ee.getOrCreateInstance(n,{backdrop:!0,keyboard:!0,focus:!0});n._hasFocusFix||(n.addEventListener("hide.bs.modal",()=>{document.activeElement&&n.contains(document.activeElement)&&document.activeElement.blur()}),n._hasFocusFix=!0),a.show()},oe={class:"home-container"},le=["disabled"],ne=["onClick"],ie={class:"image-card"},de=["src","alt"],ce={class:"product-name text-truncate"},re={class:"product-price"},ue={key:1,class:"card-items-disabled"},me={class:"image-card-disabled"},ve=["src","alt"],pe={class:"product-name-disabled text-truncate"},be={class:"product-price-disabled"},_e=["disabled"],fe={__name:"ProductsHome",setup(p){const{selectProductPlant:n}=D(),a=_(null),i=_(!0),b=_(!1),w=S(()=>{const d=new Set;return F.filter(s=>{if(!d.has(s.name))return d.add(s.name),!0}).slice(0,4)}),y=S(()=>{const d=w.value,s=new Set(d.map(l=>l.id));return F.filter(l=>!s.has(l.id))}),v=S(()=>{const d=w.value,s=y.value;return[...d,...s]}),f=S(()=>{const d=[],s=[];return v.value.forEach(l=>{l.categoryId===1&&(l.enabled?d.push(l):s.push(l))}),[...d,...s]}),r=d=>{n(d),K("modalIdPlant")},c=()=>{if(!a.value)return;const d=2;i.value=a.value.scrollLeft<=d,b.value=a.value.scrollLeft+a.value.clientWidth>=a.value.scrollWidth-d},u=(d=1)=>{if(!a.value)return;const s=a.value.querySelector(".card-content"),l=parseFloat(getComputedStyle(a.value).columnGap||getComputedStyle(a.value).gap||0),t=s?s.getBoundingClientRect().width:260,k=Math.max(1,Math.floor(a.value.clientWidth/(t+l))),m=d*k*(t+l);a.value.scrollBy({left:m,behavior:"smooth"})};return R(async()=>{await H(),c(),new ResizeObserver(c).observe(a.value)}),(d,s)=>{const l=q("RouterLink");return g(),$("div",oe,[e("button",{class:"arrow-btn left","aria-label":"Desplazar productos a la izquierda",onClick:s[0]||(s[0]=t=>u(-1)),disabled:i.value}," ‹ ",8,le),e("div",{class:"home-content",ref_key:"homeC",ref:a,onScroll:c},[(g(!0),$(E,null,N(f.value,(t,k)=>(g(),$("div",{key:k,class:"card-content",style:B({"--stagger":`${k*180}ms`})},[t!=null&&t.enabled?(g(),$("div",{key:0,class:"card-items",onClick:m=>r(t)},[e("div",ie,[e("img",{src:t==null?void 0:t.image,alt:t==null?void 0:t.name},null,8,de)]),e("div",ce,P(t==null?void 0:t.name),1),e("div",re," $"+P(x(L)(t==null?void 0:t.price)),1)],8,ne)):(g(),$("div",ue,[e("div",me,[e("img",{src:t==null?void 0:t.image,alt:t==null?void 0:t.name},null,8,ve)]),e("div",pe,P(t==null?void 0:t.name),1),e("div",be," $"+P(x(L)(t==null?void 0:t.price)),1),s[2]||(s[2]=e("div",{class:"out-stock"}," Agotado ",-1))]))],4))),128))],544),e("button",{class:"arrow-btn right","aria-label":"Desplazar productos a la derecha",onClick:s[1]||(s[1]=t=>u(1)),disabled:b.value}," › ",8,_e),C(l,{class:"go-plants",to:"/products/plants"},{default:I(()=>[...s[3]||(s[3]=[T(" Plantas Carnivoras → ",-1)])]),_:1})])}}},he=M(fe,[["__scopeId","data-v-3ffd7f3e"]]),ge={class:"home-container"},$e=["disabled"],ye={class:"image-card"},Pe=["src","alt"],we={class:"plant-name text-truncate"},Ce=["disabled"],ke={__name:"CareHome",setup(p){const n=_(null),a=_(!0),i=_(!1),b=()=>{if(!n.value)return;const y=2;a.value=n.value.scrollLeft<=y,i.value=n.value.scrollLeft+n.value.clientWidth>=n.value.scrollWidth-y},w=(y=1)=>{if(!n.value)return;const v=n.value.querySelector(".card-content"),f=parseFloat(getComputedStyle(n.value).columnGap||getComputedStyle(n.value).gap||0),r=v?v.getBoundingClientRect().width:260,c=Math.max(1,Math.floor(n.value.clientWidth/(r+f))),u=y*c*(r+f);n.value.scrollBy({left:u,behavior:"smooth"})};return R(async()=>{await H(),b(),new ResizeObserver(b).observe(n.value)}),(y,v)=>{const f=q("RouterLink");return g(),$("div",ge,[e("button",{class:"arrow-btn left",onClick:v[0]||(v[0]=r=>w(-1)),"aria-label":"Desplazar plantas a la izquierda",disabled:a.value}," ‹ ",8,$e),e("div",{class:"home-content",ref_key:"homeC",ref:n,onScroll:b},[(g(!0),$(E,null,N(x(j),(r,c)=>(g(),$("div",{key:c,class:"card-content",style:B({"--stagger":`${c*180}ms`})},[C(f,{class:"card-items",to:`products/care/${r.id}`},{default:I(()=>[e("div",ye,[e("img",{src:r==null?void 0:r.image,alt:r==null?void 0:r.name},null,8,Pe)]),e("div",we,P(r==null?void 0:r.type),1)]),_:2},1032,["to"])],4))),128))],544),e("button",{class:"arrow-btn right","aria-label":"Desplazar plantas a la derecha",onClick:v[1]||(v[1]=r=>w(1)),disabled:i.value}," › ",8,Ce),C(f,{class:"go-plants",to:"products/care"},{default:I(()=>[...v[2]||(v[2]=[T(" Cuidados → ",-1)])]),_:1})])}}},xe=M(ke,[["__scopeId","data-v-6ea6daff"]]),Se={class:"home-container"},ze=["disabled"],Le=["onClick"],Me={class:"image-card"},Ae=["src","alt"],Ie={class:"product-name text-truncate"},Re={class:"product-price"},Be={key:1,class:"card-items-disabled"},De={class:"image-card-disabled"},Ee=["src","alt"],We={class:"product-name-disabled text-truncate"},Fe={class:"product-price-disabled"},He=["disabled"],qe={__name:"AccessoriesHome",setup(p){const{selectAccessoryProduct:n}=D(),a=_(null),i=_(!0),b=_(!1),w=S(()=>F.filter(c=>c.categoryId===2)),y=S(()=>{const c=[],u=[];return w.value.forEach(d=>{d.categoryId===2&&(d.enabled?c.push(d):u.push(d))}),[...c,...u]}),v=c=>{n(c),K("modalIdAccessory")},f=()=>{if(!a.value)return;const c=2;i.value=a.value.scrollLeft<=c,b.value=a.value.scrollLeft+a.value.clientWidth>=a.value.scrollWidth-c},r=(c=1)=>{if(!a.value)return;const u=a.value.querySelector(".card-content"),d=parseFloat(getComputedStyle(a.value).columnGap||getComputedStyle(a.value).gap||0),s=u?u.getBoundingClientRect().width:260,l=Math.max(1,Math.floor(a.value.clientWidth/(s+d))),t=c*l*(s+d);a.value.scrollBy({left:t,behavior:"smooth"})};return R(async()=>{await H(),f(),new ResizeObserver(f).observe(a.value)}),(c,u)=>{const d=q("RouterLink");return g(),$("div",Se,[e("button",{class:"arrow-btn left",onClick:u[0]||(u[0]=s=>r(-1)),"aria-label":"Desplazar accesorios a la izquierda",disabled:i.value}," ‹ ",8,ze),e("div",{class:"home-content",ref_key:"homeC",ref:a,onScroll:f},[(g(!0),$(E,null,N(y.value,(s,l)=>(g(),$("div",{key:l,class:"card-content",style:B({"--stagger":`${l*180}ms`})},[s!=null&&s.enabled?(g(),$("div",{key:0,class:"card-items",onClick:t=>v(s)},[e("div",Me,[e("img",{src:s==null?void 0:s.image,alt:s==null?void 0:s.name},null,8,Ae)]),e("div",Ie,P(s==null?void 0:s.name),1),e("div",Re," $"+P(x(L)(s==null?void 0:s.price)),1)],8,Le)):(g(),$("div",Be,[e("div",De,[e("img",{src:s==null?void 0:s.image,alt:s==null?void 0:s.name},null,8,Ee)]),e("div",We,P(s==null?void 0:s.name),1),e("div",Fe," $"+P(x(L)(s==null?void 0:s.price)),1),u[2]||(u[2]=e("div",{class:"out-stock"}," Agotado ",-1))]))],4))),128))],544),e("button",{class:"arrow-btn right","aria-label":"Desplazar accesorios a la derecha",onClick:u[1]||(u[1]=s=>r(1)),disabled:b.value}," › ",8,He),C(d,{class:"go-plants",to:"products/accessories"},{default:I(()=>[...u[3]||(u[3]=[T(" Accesorios → ",-1)])]),_:1})])}}},Ne=M(qe,[["__scopeId","data-v-1ef71a7b"]]),Te={},Oe={class:"map-card"};function Ve(p,n){return g(),$("div",Oe,[...n[0]||(n[0]=[e("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.5118059675438!2d-70.66151682354895!3d-33.43596999677216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c53e4894abd5%3A0xf980e10e64951a6e!2sMario%20Kreutzberger%201520%2C%208340217%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1762200609827!5m2!1ses-419!2scl",class:"rounded-4 m-0 p-0 border rounded-4 shadow",width:"100%",height:"400px",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},null,-1)])])}const Ge=M(Te,[["render",Ve],["__scopeId","data-v-f3f0e23d"]]),Ue={class:"modal fade",id:"modalIdPlant",tabindex:"-1","aria-labelledby":"ModalLabel",role:"dialog","aria-modal":"true"},je={class:"modal-card modal-dialog modal-card-centered"},Xe={class:"modal-content"},Ye={class:"modal-body"},Ke={class:"card-item"},Je={class:"header-card"},Qe={class:"header-item"},Ze=["src","alt"],es={class:"body-card"},ss={class:"body-item name"},ts={class:"body-item-data"},as={class:"body-item"},os={class:"body-item-data"},ls={class:"body-item"},ns={class:"body-item-data"},is={class:"body-item"},ds={class:"body-item-data"},cs={class:"modal-footer"},rs=["onClick"],us="56964481006",ms={__name:"PlantProductModal",props:{product:{type:Object,default:void 0}},setup(p){const n=p,{selectProductPlant:a}=D(),i=Y(n,"product"),b=_(!1),w=_(window.innerWidth<640),y=_(null),v=_({x:50,y:50}),f=_(!1),r=()=>{const m=i.value,o=`Hola, quisiera comprar una planta:

        Nombre: ${m.name}
        Tipo: ${m.type}
        Tamaño: ${m.size}
        Precio: ${L(m.price)}

        ¿Está disponible?`,h=`https://wa.me/${us}?text=${encodeURIComponent(o)}`;window.open(h,"_blank")},c=S(()=>j.find(o=>{var h;return o.type===((h=i.value)==null?void 0:h.type)})||"No hay instrucciones disponibles."),u=m=>{a(m)},d=()=>{const m=document.getElementById("btnPopover");if(!m||!c.value)return;const o=c.value;o&&(document.addEventListener("click",h=>{h.target.classList.contains("close-popover-mobile")&&(U.getInstance(document.getElementById("btnPopover")).hide(),b.value=!1)}),new U(m,{trigger:"click",html:!0,placement:"left",customClass:"custom-popover-panel",offset:[0,0],content:`
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
                                ${o.care.ambient.light}
                            </span>
                        </li>
                        <li>
                            <span class="label">
                                Humedad:
                            </span> 
                            <span>
                                ${o.care.ambient.humidity}
                                </span>
                        </li>
                        <li>
                            <span class="label">
                                Temperatura:
                            </span> 
                            <span>
                                ${o.care.ambient.temperature_ideal}
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
                                ${o.care.water.amount}
                            </span>
                        </li>
                        <li>
                            <span class="label">
                                Frecuencia:
                            </span> 
                            <span>
                                ${o.care.water.frequency}
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
                                ${o.care.soil.type_1}
                            </span>
                        </li>
                        <li>
                            <span class="label">
                                Nro 2:
                            </span> 
                            <span>
                                ${o.care.soil.type_2}
                            </span>
                        </li>
                        <li>
                            <span class="label">
                                Ph:
                            </span> 
                            <span>
                                ${o.care.soil.ph}
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
                                ${o.care.soil.fertilization.frequency}
                            </span>
                        </li>
                        <li>
                            <span class="label">
                                Fertilizante:
                            </span> 
                            <span>
                                ${o.care.soil.fertilization.sustrato}
                            </span>
                        </li>
                        <li>
                            <span class="label">
                                Dosis:
                            </span> 
                            <span>
                                ${o.care.soil.fertilization.traps}
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
                            ${o.care.soil.fertilization.note}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        `}))},s=()=>{b.value=!b.value},l=m=>{const h=m.currentTarget.getBoundingClientRect(),z=(m.clientX-h.left)/h.width*100,A=(m.clientY-h.top)/h.height*100;v.value={x:z,y:A},f.value=!0},t=()=>{f.value=!1,v.value={x:50,y:50}},k=S(()=>({transform:f.value?"scale(1.6)":"scale(1)",transformOrigin:`${v.value.x}% ${v.value.y}%`,transition:"transform 160ms ease"}));return se(i,()=>{d()}),R(()=>{window.addEventListener("resize",()=>{w.value=window.innerWidth<640})}),(m,o)=>{var h,z,A,W,O,V,G;return g(),$("div",Ue,[e("div",je,[e("div",Xe,[o[7]||(o[7]=e("div",{class:"modal-header"},[e("h5",{id:"ModalLabel",class:"modal-title"}," Detalles del Producto "),e("i",{type:"button",class:"bi bi-x close-modal","data-bs-dismiss":"modal","aria-label":"Cerrar"})],-1)),e("div",Ye,[e("div",Ke,[e("div",Je,[e("div",Qe,[e("div",{class:"zoom-frame",onMousemove:l,onMouseleave:t},[e("img",{ref:y.value,class:"image-product",style:B(k.value),src:(h=i.value)==null?void 0:h.image,alt:(z=i.value)==null?void 0:z.type},null,12,Ze)],32)])]),e("div",es,[e("div",ss,[o[1]||(o[1]=e("div",{class:"body-item-label"}," Nombre: ",-1)),e("div",ts,P((A=i.value)==null?void 0:A.name),1),e("button",{id:"btnPopover",type:"button",class:te(["btn-popover",{active:b.value}]),"data-bs-html":"true","data-bs-trigger":"manual",onClick:s},[...o[0]||(o[0]=[e("i",{class:"bi bi-info-circle-fill custom-info","data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-html":"true",title:"<div class='care-tooltip'>Cuidados</div>"},null,-1)])],2)]),e("div",as,[o[2]||(o[2]=e("div",{class:"body-item-label"}," Tipo: ",-1)),e("div",os,P((W=i.value)!=null&&W.cultivar?"Cultivar":"Tipica"),1)]),e("div",ls,[o[3]||(o[3]=e("div",{class:"body-item-label"}," Tamaño: ",-1)),e("div",ns,P((O=i.value)==null?void 0:O.size),1)]),e("div",is,[o[4]||(o[4]=e("div",{class:"body-item-label"}," Precio: ",-1)),e("div",ds,P(i.value?`$${x(L)((V=i.value)==null?void 0:V.price)}`:""),1)])])])]),e("div",cs,[C(x(X),{to:`/products/plants/${(G=i.value)==null?void 0:G.id}`,custom:""},{default:I(({navigate:J})=>[e("div",{class:"card-redirect-btn","data-bs-dismiss":"modal",onClick:Fs=>(u(i.value),J())},[...o[5]||(o[5]=[e("i",{class:"bi bi-arrow-return-right icon-redirect"},null,-1)])],8,rs)]),_:1},8,["to"]),e("div",{class:"card-btn"},[o[6]||(o[6]=e("button",{class:"close-btn","data-bs-dismiss":"modal"},"Cerrar",-1)),e("button",{class:"save-btn",onClick:r},"Comprar")])])])])])}}},vs=M(ms,[["__scopeId","data-v-16cd3a56"]]),ps={class:"modal fade",id:"modalIdAccessory",tabindex:"-1","aria-labelledby":"ModalLabel",role:"dialog","aria-modal":"true"},bs={class:"modal-card modal-dialog modal-card-centered"},_s={class:"modal-content"},fs={class:"modal-body"},hs={class:"card-item"},gs={class:"header-card"},$s={class:"header-item"},ys=["src","alt"],Ps={class:"body-card"},ws={class:"body-item"},Cs={class:"body-item-data"},ks={class:"body-item"},xs={class:"body-item-data"},Ss={class:"body-item"},zs={class:"body-item-data"},Ls={class:"modal-footer"},Ms=["onClick"],As="56964481006",Is={__name:"AccessoryProductModal",props:{accessory:{type:Object,default:void 0}},setup(p){const{selectAccessoryProduct:n}=D(),i=Y(p,"accessory"),b=_(window.innerWidth<640),w=_(null),y=_({x:50,y:50}),v=_(!1),f=()=>{const s=i.value,l=`Hola, quisiera comprar un accesorio para plantas:

        Nombre: ${s.name}
        Forma: ${s.form}
        Punta: ${s.pointer}
        Precio: ${L(s.price)}

        ¿Está disponible?`,t=`https://wa.me/${As}?text=${encodeURIComponent(l)}`;window.open(t,"_blank")},r=s=>{n(s)},c=s=>{const t=s.currentTarget.getBoundingClientRect(),k=(s.clientX-t.left)/t.width*100,m=(s.clientY-t.top)/t.height*100;y.value={x:k,y:m},v.value=!0},u=()=>{v.value=!1,y.value={x:50,y:50}},d=S(()=>({transform:v.value?"scale(1.6)":"scale(1)",transformOrigin:`${y.value.x}% ${y.value.y}%`,transition:"transform 160ms ease"}));return R(()=>{window.addEventListener("resize",()=>{b.value=window.innerWidth<640})}),(s,l)=>{var t,k,m,o,h,z;return g(),$("div",ps,[e("div",bs,[e("div",_s,[l[5]||(l[5]=e("div",{class:"modal-header"},[e("h5",{id:"ModalLabel",class:"modal-title"}," Detalles del Producto "),e("i",{type:"button",class:"bi bi-x close-modal","data-bs-dismiss":"modal","aria-label":"Cerrar"})],-1)),e("div",fs,[e("div",hs,[e("div",gs,[e("div",$s,[e("div",{class:"zoom-frame",onMousemove:c,onMouseleave:u},[e("img",{ref:w.value,class:"image-product",style:B(d.value),src:(t=i.value)==null?void 0:t.image,alt:(k=i.value)==null?void 0:k.name},null,12,ys)],32)])]),e("div",Ps,[e("div",ws,[l[0]||(l[0]=e("div",{class:"body-item-label"}," Forma: ",-1)),e("div",Cs,P((m=i.value)==null?void 0:m.form),1)]),e("div",ks,[l[1]||(l[1]=e("div",{class:"body-item-label"}," Punta: ",-1)),e("div",xs,P((o=i.value)==null?void 0:o.pointer),1)]),e("div",Ss,[l[2]||(l[2]=e("div",{class:"body-item-label"}," Precio: ",-1)),e("div",zs,P(i.value?`$${x(L)((h=i.value)==null?void 0:h.price)}`:""),1)])])])]),e("div",Ls,[C(x(X),{to:`/products/accessories/${(z=i.value)==null?void 0:z.id}`,custom:""},{default:I(({navigate:A})=>[e("div",{class:"card-redirect-btn","data-bs-dismiss":"modal",onClick:W=>(r(i.value),A())},[...l[3]||(l[3]=[e("i",{class:"bi bi-arrow-return-right icon-redirect"},null,-1)])],8,Ms)]),_:1},8,["to"]),e("div",{class:"card-btn"},[l[4]||(l[4]=e("button",{class:"close-btn","data-bs-dismiss":"modal"},"Cerrar",-1)),e("button",{class:"save-btn",onClick:f},"Comprar")])])])])])}}},Rs=M(Is,[["__scopeId","data-v-bfa33d94"]]),Bs={class:"page-container"},Ds={class:"general-card"},Es={class:"general-card-2"},Ws={__name:"HomeView",setup(p){const{selectProductPlantData:n,selectAccessoryProductData:a}=D();return(i,b)=>(g(),$(E,null,[e("div",Bs,[e("div",Ds,[C(he),C(Ne)]),e("div",Es,[C(xe),C(Ge)])]),C(vs,{product:x(n)},null,8,["product"]),C(Rs,{accessory:x(a)},null,8,["accessory"])],64))}},Os=M(Ws,[["__scopeId","data-v-c8a3faf1"]]);export{Os as default};
