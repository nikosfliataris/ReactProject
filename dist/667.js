"use strict";(self.webpackChunkeshop=self.webpackChunkeshop||[]).push([[667],{3273:function(e,n,t){t.d(n,{Z:function(){return x}});var r=t(7294),a=t(3379),o=t.n(a),i=t(7795),l=t.n(i),u=t(569),s=t.n(u),c=t(3565),p=t.n(c),f=t(9216),m=t.n(f),g=t(4589),d=t.n(g),b=t(7999),h={};h.styleTagTransform=d(),h.setAttributes=p(),h.insert=s().bind(null,"head"),h.domAPI=l(),h.insertStyleElement=m(),o()(b.Z,h),b.Z&&b.Z.locals&&b.Z.locals;var y=["handleChange","label"];function v(){return v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},v.apply(this,arguments)}var x=function(e){var n=e.handleChange,t=e.label,a=function(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,y);return r.createElement("div",{className:"group"},r.createElement("input",v({className:"form-input",onChange:n},a)),t?r.createElement("label",{className:"".concat(a.value.length?"shrink":""," form-input-label")},t):null)}},667:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r=t(7294),a=t(3379),o=t.n(a),i=t(7795),l=t.n(i),u=t(569),s=t.n(u),c=t(3565),p=t.n(c),f=t(9216),m=t.n(f),g=t(4589),d=t.n(g),b=t(6297),h={};h.styleTagTransform=d(),h.setAttributes=p(),h.insert=s().bind(null,"head"),h.domAPI=l(),h.insertStyleElement=m(),o()(b.Z,h),b.Z&&b.Z.locals&&b.Z.locals;var y=t(3273),v=t(108),x=t(4584),E=t(6974),w=t(9704);function S(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(e,n)||function(e,n){if(e){if("string"==typeof e)return Z(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Z(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var j=function(){var e=S((0,r.useState)(""),2),n=e[0],t=e[1],a=S((0,r.useState)(""),2),o=a[0],i=a[1],l=(0,E.s0)();return w.I0,r.createElement("div",{className:"signin"},r.createElement("h2",null,"I already have an account "),r.createElement("span",null,"SignIn with email and password"),r.createElement("form",{onSubmit:function(e){e.preventDefault(),x.I8.signInWithEmailAndPassword(n,o).then(l({pathname:"/"})),t(""),i("")}},r.createElement(y.Z,{name:"email",type:"email",label:"Email",value:n,handleChange:function(e){t(e.target.value)},required:!0}),r.createElement(y.Z,{name:"password",type:"password",label:"Password",value:o,handleChange:function(e){i(e.target.value)},required:!0}),r.createElement("div",{className:"buttons"},r.createElement(v.Z,{type:"submit"},"Sign In"),r.createElement(v.Z,{onClick:x.qj,isGoogleSignIn:!0},"Sign In With Google"))),r.createElement("div",{className:"registration-button"},r.createElement("h2",null,"You Don't have an account "),r.createElement("div",{className:"button-path"},r.createElement(v.Z,{type:"submit",onClick:function(e){e.preventDefault(),l({pathname:"/registration"})}},"Register"))))}},7999:function(e,n,t){var r=t(8081),a=t.n(r),o=t(3645),i=t.n(o)()(a());i.push([e.id,".group{position:relative;margin:45px 0}.group .form-input{background:none;background-color:#fff;color:gray;font-size:18px;padding:10px 10px 10px 5px;display:block;width:100%;border:none;border-radius:0;border-bottom:1px solid gray;margin:25px 0}.group .form-input:focus{outline:none}.group .form-input:focus~.form-input-label{top:-14px;font-size:12px;color:#000}.group input[type=password]{letter-spacing:.3em}.group .form-input-label{color:gray;font-size:16px;font-weight:normal;position:absolute;pointer-events:none;left:5px;top:10px;transition:300ms ease all}.group .form-input-label.shrink{top:-14px;font-size:12px;color:#000}",""]),n.Z=i},6297:function(e,n,t){var r=t(8081),a=t.n(r),o=t(3645),i=t.n(o)()(a());i.push([e.id,".signin{width:40%;display:block;justify-content:center;align-items:center;margin:50px auto 0px auto}.signin h2,.signin span{display:flex;justify-content:center;align-items:center}.signin form .buttons{display:flex;justify-content:space-between}.signin .registration-button h2{display:flex;justify-content:center;margin-top:50px}.signin .registration-button .button-path{display:flex;justify-content:center;align-items:center;margin-left:auto;margin-right:auto;margin-top:20px}",""]),n.Z=i}}]);