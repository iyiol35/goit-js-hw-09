import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const e=document.querySelector(".feedback-form");e.addEventListener("input",t=>{t.preventDefault(),console.log("Input event fired",t);let a=e.elements.email.value,s=e.elements.message.value.toString().trim();console.log("email:",a),console.log("message:",s),localStorage.setItem("feedback-form-state",JSON.stringify({email:a,message:s}))});let l=localStorage.getItem("feedback-form-state")||null;l=JSON.parse(l);l!==null&&(e.elements.email.value=l.email,e.elements.message.value=l.message);e.addEventListener("submit",t=>{t.preventDefault();let a=e.elements.email.value,s=e.elements.message.value.toString().trim();console.log({email:a,message:s}),localStorage.removeItem("feedback-form-state"),t.currentTarget.reset()});
//# sourceMappingURL=02-form.js.map
