import{_ as b}from"./widthAlert-mobile-bfd664ed.js";import{r as o,o as w,c as V,w as n,u,a as e,i,b as t,d as x}from"./index-4d9e3f84.js";const P="/logo.svg";const h=t("div",{class:"logo-wrap"},[t("img",{class:"logo",src:P,alt:""}),t("div",{class:"desc"},"TechUI-toolkit")],-1),k={style:{margin:"16px"}},N={__name:"index-login",setup(U){const c=useRouter(),s=ref("admin"),l=ref("tesT!@#$%^&^&&*()"),m=p=>{c.push("/layout")},_=reactive({adaptivePanelConfig:{mode:"scroll",width:420,backgroundName:"A2"}});return(p,a)=>{const d=o("van-field"),f=o("van-cell-group"),v=o("van-button"),g=o("van-form"),y=o("adaptivePanel");return w(),V(y,{config:u(_).adaptivePanelConfig},{default:n(()=>[e(b),e(g,{class:"login-form",onSubmit:m},{default:n(()=>[h,e(f,{inset:""},{default:n(()=>[e(d,{modelValue:u(s),"onUpdate:modelValue":a[0]||(a[0]=r=>i(s)?s.value=r:null),name:"User","left-icon":"user-o",placeholder:"Enter any user name",rules:[{required:!0,message:"Please enter user name!"}]},null,8,["modelValue"]),e(d,{modelValue:u(l),"onUpdate:modelValue":a[1]||(a[1]=r=>i(l)?l.value=r:null),type:"password",name:"Password","left-icon":"label-o",placeholder:"Enter any password",rules:[{required:!0,message:"Please enter password!"}]},null,8,["modelValue"])]),_:1}),t("div",k,[e(v,{round:"",block:"",type:"primary","native-type":"submit"},{default:n(()=>[x(" SUBMIT ")]),_:1})])]),_:1})]),_:1},8,["config"])}}};export{N as default};
