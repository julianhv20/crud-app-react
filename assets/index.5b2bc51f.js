var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,m=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&m(e,n,t[n]);if(a)for(var n of a(t))r.call(t,n)&&m(e,n,t[n]);return e},s=(e,a)=>t(e,n(a));import{R as c,C as o,v as i,a as d}from"./vendor.a6a07e65.js";const E=e=>c.createElement("table",null,c.createElement("thead",null,c.createElement("tr",null,c.createElement("th",null,"Name"),c.createElement("th",null,"Username"),c.createElement("th",null,"Actions"))),c.createElement("tbody",null,e.users.length>0?e.users.map((t=>c.createElement("tr",{key:t.id},c.createElement("td",null,t.name),c.createElement("td",null,t.username),c.createElement("td",null,c.createElement("button",{className:"button muted-button",onClick:()=>{e.editRow(t)}},"Edit"),c.createElement("button",{className:"button muted-button",onClick:()=>e.deleteUser(t.id)},"Delete"))))):c.createElement("tr",null,c.createElement("td",{colSpan:3},"No users")))),p=({addUser:e})=>{const t={id:null,name:"",username:""},[n,a]=o.exports.useState(t),l=e=>{const{name:t,value:l}=e.target;a(s(u({},n),{[t]:l}))};return c.createElement("form",{onSubmit:l=>{l.preventDefault(),n.name&&n.username&&(e(n),a(t))}},c.createElement("label",null,"Name"),c.createElement("input",{type:"text",name:"name",value:n.name,onChange:l}),c.createElement("label",null,"Username"),c.createElement("input",{type:"text",name:"username",value:n.username,onChange:l}),c.createElement("button",null,"Add new user"))},b=e=>{const[t,n]=o.exports.useState(e.currentUser),a=e=>{const{name:a,value:l}=e.target;n(s(u({},t),{[a]:l}))};return o.exports.useEffect((()=>{n(e.currentUser)}),[e]),c.createElement("form",{onSubmit:n=>{n.preventDefault(),e.updateUser(t.id,t)}},c.createElement("label",null,"Name"),c.createElement("input",{type:"text",name:"name",value:t.name,onChange:a}),c.createElement("label",null,"Username"),c.createElement("input",{type:"text",name:"username",value:t.username,onChange:a}),c.createElement("button",null,"Update user"),c.createElement("button",{onClick:()=>e.setEditing(!1),className:"button muted-button"},"Cancel"))};function f(){const e=[{id:i(),name:"Jhon",username:"floppydiskette"},{id:i(),name:"Craig",username:"siliconeidolon"},{id:i(),name:"Ana",username:"Anisphere"}],[t,n]=o.exports.useState(e),[a,l]=o.exports.useState(!1),[r,m]=o.exports.useState({id:null,name:"",username:""});return c.createElement("div",{className:"container"},c.createElement("h1",null,"CRUD App with Hooks"),c.createElement("div",{className:"flex-row"},c.createElement("div",{className:"flex-large"},a?c.createElement("div",null,c.createElement("h2",null,"Edit user"),c.createElement(b,{setEditing:l,currentUser:r,updateUser:(e,a)=>{l(!1),n(t.map((t=>t.id===e?a:t)))}})):c.createElement("div",null,c.createElement("h2",null,"Add user"),c.createElement(p,{addUser:e=>{e.id=i(),n([...t,e])}}))),c.createElement("div",{className:"flex-large"},c.createElement("h2",null,"View users"),c.createElement(E,{users:t,editRow:e=>{l(!0),m({id:e.id,name:e.name,username:e.username})},deleteUser:e=>{l(!1),n(t.filter((t=>t.id!==e)))}}))))}d.render(c.createElement(c.StrictMode,null,c.createElement(f,null)),document.getElementById("root"));