(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),i=n.n(r),o=(n(15),n(10)),s=n(2),u=n(19),l=n(3),b=n.n(l),m=n(0);function j(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)(""),u=Object(s.a)(o,2),l=u[0],j=u[1],d=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":i((function(t){return a}));break;case"number":j((function(t){return a}));break;default:return}};return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({name:r,number:l}),i((function(t){return""})),j((function(t){return""}))},className:b.a.form,children:[Object(m.jsxs)("label",{className:b.a.label,children:["Name",Object(m.jsx)("input",{className:b.a.input,name:"name",value:r,onChange:d,type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(m.jsxs)("label",{className:b.a.label,children:["Number",Object(m.jsx)("input",{className:b.a.input,name:"number",value:l,onChange:d,type:"tel",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(m.jsx)("button",{type:"submit",className:b.a.btn,children:"Add contact"})]})})}var d=n(6),f=n.n(d);var O=function(t){var e=t.contacts,n=t.onDeleteClick;return Object(m.jsx)("ul",{className:f.a.list,children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(m.jsxs)("li",{className:f.a.item,children:[e,": ",a,Object(m.jsx)("button",{"data-id":c,type:"button",onClick:function(t){return n(t)},className:f.a.btn,children:"\u274c"})]},c)}))})},h=n(8),p=n.n(h);var x=function(t){var e=t.onChange,n=t.value;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("label",{className:p.a.label,children:["Find contacts by name",Object(m.jsx)("input",{className:p.a.input,type:"text",value:n,onChange:function(t){return e(t)}})]})})},_=function(t,e){var n=Object(a.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(t)))&&void 0!==n?n:e})),c=Object(s.a)(n,2),r=c[0],i=c[1];return Object(a.useEffect)((function(){window.localStorage.setItem(t,JSON.stringify(r))}),[t,r]),[r,i]};function v(){var t=_("contact",""),e=Object(s.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),i=Object(s.a)(r,2),l=i[0],b=i[1],d=l.toLowerCase(),f=d?n.filter((function(t){return t.name.toLowerCase().includes(d)})):n;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{style:{textAlign:"center"},children:"Phonebook"}),Object(m.jsx)(j,{onSubmit:function(t){var e=t.name,a=t.number;if(n.find((function(t){return t.name.toLowerCase()===e.toLowerCase()})))alert("".concat(e," is already in contacts"));else{var r={name:e,number:a,id:Object(u.a)()};c((function(t){return[r].concat(Object(o.a)(t))}))}}}),n.length>0&&Object(m.jsx)("h2",{style:{textAlign:"center"},children:"Contacts"}),n.length>0&&Object(m.jsx)(x,{onChange:function(t){b(t.currentTarget.value)},value:l}),Object(m.jsx)(O,{contacts:f,onDeleteClick:function(t){var e=t.target.dataset.id,a=n.filter((function(t){return t.id!==e}));c(a),b("")}})]})}i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={form:"ContactForm_form__2IUqW",label:"ContactForm_label__3cSwc",input:"ContactForm_input__2u7Lv",btn:"ContactForm_btn__2Kwxa"}},6:function(t,e,n){t.exports={list:"ContactList_list__2K4PC",item:"ContactList_item__3_vMR",btn:"ContactList_btn__2LqVP"}},8:function(t,e,n){t.exports={label:"Filter_label__23XmH",input:"Filter_input__3K0YO"}}},[[17,1,2]]]);
//# sourceMappingURL=main.bff296ff.chunk.js.map