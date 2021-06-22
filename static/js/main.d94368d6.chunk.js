(this["webpackJsonpdishes-app"]=this["webpackJsonpdishes-app"]||[]).push([[0],{103:function(e,t,r){"use strict";r.r(t);var n=r(128),a=r(0),c=r(39),i=r.n(c),o=r(130),l=r(40),s=r(123),d=r(126),u=r(11),b=r(87),j=r(113),p=r(69),h=r(2),m=function(e){var t=Object(b.c)().toggleColorMode,r=Object(b.d)("dark","light"),n=Object(b.d)(p.a,p.b);return Object(h.jsx)(j.a,Object(u.a)({size:"md",fontSize:"lg",variant:"ghost",color:"current",marginLeft:"2",onClick:t,icon:Object(h.jsx)(n,{}),"aria-label":"Switch to ".concat(r," mode")},e))},O=r(125),f=r(67),x=r.n(f),v=r(80),g=r(5),y=r(129),E=r(120),k=r(85),S=r(28),w=r(41),I=r(36),z=function(e){var t=e.name,r=Object(w.a)(e,["name"]),n=Object(S.b)(t,{subscription:{touched:!0,error:!0}}).meta,a=n.error,c=n.touched;return Object(h.jsx)(I.a,Object(u.a)(Object(u.a)({},r),{},{isInvalid:a&&c}))},M=r(118),C=r(131),N=r(119),L=r(116),P=r(117),D=function(e){var t=e.name,r=Object(S.b)(t,{subscription:{error:!0}}).meta.error;return Object(h.jsxs)(L.a,{children:[Object(h.jsx)(P.a,{mr:1})," ",r]})},F=r(121),W=function(e){var t=e.name,r=e.label,n=e.placeholder,a=e.parser,c=e.validator,i=e.leftInputElement,o=e.type,l=void 0===o?"text":o,s=Object(w.a)(e,["name","label","placeholder","parser","validator","leftInputElement","type"]),d=Object(S.b)(t,{parse:a,validate:c}),b=d.input,j=d.meta;return n=n||r,Object(h.jsxs)(z,Object(u.a)(Object(u.a)({name:t},s),{},{children:[Object(h.jsx)(M.a,{htmlFor:t,children:r}),Object(h.jsxs)(C.a,{children:[i,Object(h.jsx)(N.a,Object(u.a)(Object(u.a)({},b),{},{isInvalid:j.error&&j.touched,id:t,placeholder:n,type:l,value:b.value||""})),!j.error&&j.touched&&Object(h.jsx)(E.b,{children:Object(h.jsx)(F.a,{color:"green.400"})})]}),Object(h.jsx)(D,{name:t})]}))},_=r(122),H=function(e){var t=e.name,r=e.label,n=e.validator,a=e.children,c=e.placeholder,i=Object(w.a)(e,["name","label","validator","children","placeholder"]),o=Object(S.b)(t,{validate:n}),l=o.input,s=o.meta;return c=c||r,Object(h.jsxs)(z,Object(u.a)(Object(u.a)({name:t},i),{},{children:[Object(h.jsx)(M.a,{htmlFor:t,children:r}),Object(h.jsx)(_.a,Object(u.a)(Object(u.a)({placeholder:c,id:t},l),{},{isInvalid:s.error&&s.touched,children:a})),Object(h.jsx)(D,{name:t})]}))},T=function(e,t){return e?(e=e.trim(),parseInt(e)):e},A=function(e,t){return e?(e=e.trim().replace(/[^\d]/g,"")).length<=2?e:e.length<=4?"".concat(e.slice(0,2),":").concat(e.slice(2)):"".concat(e.slice(0,2),":").concat(e.slice(2,4),":").concat(e.slice(4,6)):e},J=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Enter a valid number";return function(n,a,c){return n?(n=parseInt(n),isNaN(n)||n>t||n<e?r:void 0):r}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Field is required";return function(t,r,n){if(!t)return e}},q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Enter a valid field";return function(r,n,a){return r&&e.test(r)?void 0:t}},V=r(70),$=Object(V.a)({displayName:"InputFieldIcon",defaultProps:{fill:"transparent",stroke:"currentColor",strokeWidth:"2"},d:"M3 17.4V6.6c0-.33137.26863-.6.6-.6h13.0789c.2006 0 .3879.10026.4992.26718l3.6 5.40002c.1344.2015.1344.4641 0 .6656l-3.6 5.4c-.1113.1669-.2986.2672-.4992.2672H3.6c-.33137 0-.6-.2686-.6-.6z"}),B=Object(V.a)({displayName:"PizzaSliceIcon",defaultProps:{fill:"transparent",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},path:[Object(h.jsx)("path",{d:"M14 9.01l.01-.01111M8 8.01l.01-.01111M8 14.01l.01-.0111"},1),Object(h.jsx)("path",{d:"M6 19L2.23626 3.0041c-.10539-.44792.31189-.84288.75335-.71304L19 7"},2),Object(h.jsx)("path",{d:"M22.198 8.42467c.2344-.93764-.3357-1.88777-1.2733-2.12218-.9377-.23441-1.8878.33567-2.1222 1.27331-.3919 1.56738-1.901 4.0483-4.2272 6.3745-2.301 2.301-5.14816 4.1939-7.96858 4.8448-.94175.2173-1.52901 1.1569-1.31168 2.0986.21732.9418 1.15694 1.529 2.09869 1.3117 3.67967-.8491 7.08247-3.2063 9.65647-5.7802 2.5487-2.5488 4.5396-5.5679 5.1478-8.00053z"},3)]}),Z=Object(V.a)({displayName:"CircleIcon",defaultProps:{fill:"transparent",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d:"M12 22c5.5228 0 10-4.4772 10-10 0-5.52285-4.4772-10-10-10C6.47715 2 2 6.47715 2 12c0 5.5228 4.47715 10 10 10z"}),G=Object(V.a)({displayName:"ScaleIcon",defaultProps:{fill:"transparent",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d:"M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"}),K={pizza:[{name:"no_of_slices",type:"number",label:"Number of pizza slices",placeholder:"1",leftInputElement:Object(h.jsx)(E.a,{pointerEvents:"none",children:Object(h.jsx)(B,{color:"gray.400"})}),parser:T,validator:J(1,99,"Enter a valid number of slices between 1 and 99")},{name:"diameter",type:"number",label:"Diameter (in cm)",placeholder:"22",leftInputElement:Object(h.jsx)(E.a,{pointerEvents:"none",children:Object(h.jsx)(Z,{color:"gray.400"})}),parser:function(e,t){return e?(e=e.trim(),parseFloat(e.replace(",","."))):e},validator:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Enter a valid number";return function(n,a,c){return n?(n=parseFloat(n),isNaN(n)||n>t||n<e?r:void 0):r}}(10,40,"Enter a valid diameter size between 10.0 and 40.0")}],sandwich:[{name:"slices_of_bread",type:"number",label:"Number of bread slices",placeholder:"1",leftInputElement:Object(h.jsx)(E.a,{pointerEvents:"none",children:Object(h.jsx)(B,{color:"gray.400"})}),parser:T,validator:J(1,99,"Enter a valid number of slices between 1 and 99")}],soup:[{name:"spiciness_scale",type:"number",label:"Scale of spiciness (1-10)",placeholder:"1",leftInputElement:Object(h.jsx)(E.a,{pointerEvents:"none",children:Object(h.jsx)(G,{color:"gray.400"})}),parser:T,validator:J(1,10,"Enter a valid scale of spiciness between 1 and 10")}]},Q=r(124),U=function(){var e=Object(a.useState)(),t=Object(g.a)(e,2),r=t[0],n=t[1],c=Object(y.a)(),i=function(){var e=Object(v.a)(x.a.mark((function e(t,r){var a,i,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l="dishes",s=t,d=void 0,fetch("".concat("https://frosty-wood-6558.getsandbox.com:443","/").concat(l),Object(u.a)({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)},d));case 3:return a=e.sent,e.next=6,a.json();case 6:if(i=e.sent,a.ok){e.next=12;break}return o=i||a.status,console.log("error",o),c({title:"Error",description:"Error creating dish: ".concat(o.type?o.type:o),status:"error",duration:5e3}),e.abrupt("return");case 12:c({title:"Dish created",description:"Dish has been successfully created!",status:"success",duration:5e3}),r.restart(),n(void 0),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),c({title:"Error",description:"Error creating dish: ".concat(e.t0),status:"error",duration:5e3});case 20:case"end":return e.stop()}var l,s,d}),e,null,[[0,17]])})));return function(t,r){return e.apply(this,arguments)}}(),o=function(e){n(K[e.target.value])};return Object(h.jsx)(S.a,{onSubmit:i,render:function(e){var t=e.handleSubmit,n=e.submitting;return Object(h.jsxs)(s.a,{p:4,mt:4,mb:2,textAlign:"left",as:"form",onSubmit:t,children:[Object(h.jsx)(W,{name:"name",label:"Dish name",placeholder:"Enter dish name",leftInputElement:Object(h.jsx)(E.a,{pointerEvents:"none",children:Object(h.jsx)($,{color:"gray.400"})}),validator:q(new RegExp(/^[a-zA-Z\s]{3,30}$/),"Enter a valid dish name")}),Object(h.jsx)(W,{name:"preparation_time",label:"Preparation time",placeholder:"00:00:00",mt:4,leftInputElement:Object(h.jsx)(E.a,{pointerEvents:"none",children:Object(h.jsx)(Q.a,{color:"gray.400"})}),parser:A,validator:q(new RegExp(/^[0-9]+[:][0-5][0-9][:][0-5][0-9]$/),"Enter valid preparation time")}),Object(h.jsxs)(H,{mt:4,name:"type",label:"Type",placeholder:"Select dish type",onChange:o,validator:R("Dish type is required"),children:[Object(h.jsx)("option",{value:"pizza",children:"\ud83c\udf55 Pizza"}),Object(h.jsx)("option",{value:"soup",children:"\ud83e\udd63 Soup"}),Object(h.jsx)("option",{value:"sandwich",children:"\ud83e\udd6a Sandwich"})]}),r&&r.map((function(e,t){return Object(a.createElement)(W,Object(u.a)(Object(u.a)({},e),{},{key:t,mt:4}))})),Object(h.jsx)(k.a,{width:"full",type:"submit",mt:4,isLoading:n,loadingText:"Submitting",colorScheme:"blue",spinnerPlacement:"end",children:"Submit"})]})}})},X=function(){return Object(h.jsxs)(s.a,{align:"center",p:2,m:"auto auto",width:"full",maxWidth:"500px",boxShadow:"lg",minHeight:"400px",borderRadius:8,borderWidth:1,children:[Object(h.jsx)(O.a,{mt:4,children:"Dish form"}),Object(h.jsx)(U,{})]})},Y=function(){return Object(h.jsx)(o.a,{theme:l.theme,children:Object(h.jsx)(s.a,{textAlign:"center",fontSize:"xl",children:Object(h.jsxs)(d.a,{minH:"100vh",p:4,width:"full",flexDirection:"column",children:[Object(h.jsx)(m,{alignSelf:"flex-end"}),Object(h.jsx)(X,{})]})})})},ee=r(127),te=Object(ee.a)({config:{initialColorMode:"dark",useSystemColorMode:!1}});i.a.render(Object(h.jsxs)(a.StrictMode,{children:[Object(h.jsx)(n.a,{initialColorMode:te.config.initialColorMode}),Object(h.jsx)(Y,{})]}),document.getElementById("root"))}},[[103,1,2]]]);
//# sourceMappingURL=main.d94368d6.chunk.js.map