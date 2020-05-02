(this.webpackJsonpsyntech=this.webpackJsonpsyntech||[]).push([[0],{154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},195:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),o=a(36),c=a.n(o),s=a(13),i=(a(92),a(199)),m=a(196),u=a(10),p=a(197),d=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"Invalid email address":void 0},_=function(e){return e&&""!==e?void 0:" IS REQUIRED"},E=(n=6,function(e){return e&&e.length<n?"Must be at least ".concat(n," characters"):void 0}),f=function(e,t){return e!==t.password?"Passwords don't match":void 0},b=(a(93),function(e){var t=e.input,a=e.label,n=e.meta,r=e.type;return l.a.createElement("div",{className:"form-email-pass"},l.a.createElement("label",{className:Object(u.a)("form-email-pass__label",n.invalid&&n.visited?"form-email-pass__label-error":"")},n.invalid&&n.visited?" IS REQUIRED"===n.error?a+n.error:n.error:a),l.a.createElement("div",null,l.a.createElement("input",Object.assign({type:r},t,{className:"form-email-pass__input"}))))}),h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{name:"email",component:b,label:"EMAIL",validate:[_,d],type:"email"}),l.a.createElement(p.a,{name:"password",type:"password",component:b,label:"PASSWORD",validate:[_,E]}),l.a.createElement(p.a,{name:"confirmpassword",type:"password",component:b,label:"CONFIRMATION",validate:[_,f]}))},g=a(57),v=a(83),N=a.n(v),y=(a(154),function(e){var t=e.input,a=Object(r.useState)(null),n=Object(g.a)(a,2),o=(n[0],n[1]),c=Object(r.useState)(""),s=Object(g.a)(c,2),i=s[0],m=s[1];return l.a.createElement("div",null,l.a.createElement(N.a,{startDate:"1950-01-01",endDate:"2020-05-01",selectedDate:i,order:["day","month","year"],onMonthChange:function(e){},onDayChange:function(e){},onYearChange:function(e){},onDateChange:function(e){t.onChange((function(){return t.value={day:e.getDay(),month:e.getMonth(),year:e.getFullYear()}})),o(e),m(function(e){var t=new Date(e),a=""+(t.getMonth()+1),n=""+t.getDate(),r=t.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),[r,a,n].join("-")}(e))},ids:{year:"select-year",month:"select-month",day:"select-day"},names:{year:"year",month:"month",day:"day"},classes:{dateContainer:"date-picker",yearContainer:"date-picker__field-wrapper",monthContainer:"date-picker__field-wrapper",dayContainer:"date-picker__field-wrapper",year:"date-picker__date-select",month:"date-picker__date-select",day:"date-picker__date-select",yearOptions:"date-picker__options",monthOptions:"classes",dayOptions:"classes"},defaultValues:{year:"YYYY",month:"MM",day:"DD"},options:{yearReverse:!0,monthShort:!0,monthCaps:!0}}))}),O=(a(155),function(e){var t=e.input,a=e.label;return l.a.createElement("div",{className:"other-info"},l.a.createElement("label",{className:"other-info__label"},a),l.a.createElement(y,{input:t}))}),w=function(e){var t=e.label;return l.a.createElement("div",{className:"other-info"},l.a.createElement("label",{className:"other-info__label"},t),l.a.createElement("ul",{className:"other-info__list"},l.a.createElement("li",{className:"other-info__list-item"},l.a.createElement(p.a,{name:"sex",component:"input",type:"radio",value:"male",className:"other-info__radio-button"}),l.a.createElement("label",{className:"other-info__radio-label"},"MALE")),l.a.createElement("li",{className:"other-info__list-item"},l.a.createElement(p.a,{name:"sex",component:"input",type:"radio",value:"female",className:"other-info__radio-button"}),l.a.createElement("label",{className:"other-info__radio-label"},"FEMALE")),l.a.createElement("li",{className:"other-info__list-item"},l.a.createElement(p.a,{name:"sex",component:"input",type:"radio",value:"unspecified",className:"other-info__radio-button"}),l.a.createElement("label",{className:"other-info__radio-label"}," UNSPECIFIED "))))},j=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{name:"birthday",component:O,label:"DATE OF BIRTH",validate:_}),l.a.createElement(p.a,{name:"gender",component:w,label:"GENDER"}),l.a.createElement("div",{className:"other-info"},l.a.createElement("label",{className:"other-info__label"},"WHERE DID YOU HERE ABOUT US?"),l.a.createElement("div",{className:"other-info__resource-wrapper"},l.a.createElement("i",{className:"fas fa-chevron-down other-info__resource-arrow"}),l.a.createElement(p.a,{name:"hearAboutUs",component:"select",className:"other-info__resource-select"},l.a.createElement("option",null),l.a.createElement("option",{value:"facebook"},"Facebook"),l.a.createElement("option",{value:"linkedIn"},"LinkedIn"),l.a.createElement("option",{value:"other"},"Other")))))},S=(a(156),function(){return l.a.createElement("div",{className:"completed"},l.a.createElement("i",{className:"fas fa-check-circle completed__icon"}),l.a.createElement("button",{type:"submit",className:"completed__button"},"Go to Dashboard",l.a.createElement("span",null,l.a.createElement("i",{className:"fas fa-arrow-right completed__arrow"}))))}),k=(a(157),Object(i.a)("signup")),D=Object(s.b)((function(e){return{step:e.stepsReducer.step,password:k(e,"password")}}),(function(e){return{nextStep:function(){return e({type:"NEXT_STEP"})},prevStep:function(){return e({type:"PREV_STEP"})}}}))((function(e){var t=e.handleSubmit,a=e.step,n=e.nextStep,r=e.prevStep,o=e.valid;return l.a.createElement("div",{className:"signup"},l.a.createElement("div",{className:"signup__wrapper"},l.a.createElement("h3",{className:"signup__title"},3===a?"Thank you!":"Signup"),l.a.createElement("div",{className:"signup__progress"},l.a.createElement("div",{className:Object(u.a)("signup__completed",1===a?"signup__completed--33":2===a?"signup__completed--66":3===a?"signup__completed--100":"")}),l.a.createElement("div",{className:Object(u.a)("signup__incompleted",1===a?"signup__incompleted--66":2===a?"signup__incompleted--33":"")})),l.a.createElement("form",{className:"signup-inner",onSubmit:t},function(){switch(a){case 1:return l.a.createElement(h,null);case 2:return l.a.createElement(j,null);case 3:return l.a.createElement(S,null);default:return l.a.createElement(h,null)}}()),l.a.createElement("div",{className:Object(u.a)("signup__breakline",3===a?"signup__breakline--hide":"")}),l.a.createElement("div",{className:"signup__buttons-box"},l.a.createElement("button",{className:Object(u.a)("signup__button","signup__button--prev",1===a||3===a?"signup__button--hide":""),onClick:r,type:"button"},"Prev"),l.a.createElement("button",{className:Object(u.a)("signup__button","signup__button--next",3===a?"signup__button--hide":""),onClick:n,type:"button",disabled:!o},"Next",l.a.createElement("span",null,l.a.createElement("i",{className:Object(u.a)("fas fa-arrow-right","signup__arrow","signup__arrow--right",o?"":"signup__arrow--hide")}))))))})),I=Object(m.a)({form:"signup",onSubmit:function(e){return console.log(JSON.stringify(e))}})(D);var R=function(){return l.a.createElement(I,null)},C=a(5),A=a(198),T=a(27),M={step:1},P=Object(C.b)({stepsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEXT_STEP":return Object(T.a)(Object(T.a)({},e),{},{step:e.step+1});case"PREV_STEP":return Object(T.a)(Object(T.a)({},e),{},{step:e.step-1});default:return e}},form:A.a}),x=Object(C.c)(P);c.a.render(l.a.createElement(s.a,{store:x},l.a.createElement(R,null)),document.getElementById("root"))},84:function(e,t,a){e.exports=a(195)},92:function(e,t,a){},93:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.2afe5f0e.chunk.js.map