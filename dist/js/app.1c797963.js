(function(){"use strict";var e={1769:function(e,t,s){var r=s(5130),n=s(6768);function o(e,t,s,r,o,i){const a=(0,n.g2)("HeaderBar"),l=(0,n.g2)("TaskList"),c=(0,n.g2)("TaskForm");return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.bF)(a,{Title:"Task Tracker"}),(0,n.bF)(l,{taskList:r.state.taskList},null,8,["taskList"]),r.state.showAddTaskForm?((0,n.uX)(),(0,n.Wv)(c,{key:0})):(0,n.Q3)("",!0)])}var i=s(4232);const a={class:"container flex items-center justify-between mx-auto border-b-2 border-secondary p-3 sm:p-4 z-50"},l={class:"uppercase text-2xl text-primary font-semibold"},c={class:"menu flex items-center justify-between"},d=["innerHTML"];function u(e,t,s,r,o,u){return(0,n.uX)(),(0,n.CE)("div",a,[(0,n.Lk)("h1",l,(0,i.v_)(s.Title),1),(0,n.Lk)("section",c,[(0,n.Lk)("div",{onClick:t[0]||(t[0]=(...e)=>u.toggleForm&&u.toggleForm(...e)),class:(0,i.C4)(["cursor-pointer rounded-full h-6 w-6 flex items-center justify-center border",r.state.showAddTaskForm?"border-errorRed text-errorRed bg-white rotate-45":"text-white bg-primary"])},[(0,n.Lk)("span",{innerHTML:o.svgIcons?.addIcon},null,8,d)],2)])])}s(4114);var p=s(144);const m=(0,p.Kh)({showAddTaskForm:!1,taskList:[{title:"Wake Up Early",description:"Wake up early at 6 in the morning",isCompleted:!0,priorityIndex:0},{title:"Work out",description:"Hit the GYM burn calories and get into shape, take good protiew for muccle growth",isCompleted:!1,priorityIndex:1}],selectedTask:null}),k=()=>{m.showAddTaskForm=!m.showAddTaskForm},h=e=>{m.taskList.push(e)},g=e=>{m.taskList.splice(e,1)},f=e=>{m.selectedTask=e},b=(e,t)=>{m.taskList[e]=t},x={addIcon:'<svg width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 3.5V0.5H4.5V3.5H7.5V4.5H4.5V7.5H3.5V4.5H0.5V3.5H3.5Z" fill="currentColor"/></svg>',dragIcon:'<svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.541626 12.0413V10.458H2.12496V12.0413H0.541626ZM3.70829 12.0413V10.458H5.29163V12.0413H3.70829ZM6.87496 12.0413V10.458H8.45829V12.0413H6.87496ZM0.541626 8.87467V7.29134H2.12496V8.87467H0.541626ZM3.70829 8.87467V7.29134H5.29163V8.87467H3.70829ZM6.87496 8.87467V7.29134H8.45829V8.87467H6.87496ZM0.541626 5.70801V4.12467H2.12496V5.70801H0.541626ZM3.70829 5.70801V4.12467H5.29163V5.70801H3.70829ZM6.87496 5.70801V4.12467H8.45829V5.70801H6.87496ZM0.541626 2.54134V0.958008H2.12496V2.54134H0.541626ZM3.70829 2.54134V0.958008H5.29163V2.54134H3.70829ZM6.87496 2.54134V0.958008H8.45829V2.54134H6.87496Z" fill="currentColor"/></svg>',editIcon:'<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.168 3.5193C11.363 3.3243 11.363 2.9993 11.168 2.8143L9.99799 1.6443C9.81299 1.4493 9.48799 1.4493 9.29299 1.6443L8.37299 2.5593L10.248 4.4343M2.31299 8.6243V10.4993H4.18799L9.71799 4.9643L7.84299 3.0893L2.31299 8.6243Z" fill="currentColor"/></svg>',binIcon:'<svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 1H5.75L5.25 0.5H2.75L2.25 1H0.5V2H7.5M1 8.5C1 8.76522 1.10536 9.01957 1.29289 9.20711C1.48043 9.39464 1.73478 9.5 2 9.5H6C6.26522 9.5 6.51957 9.39464 6.70711 9.20711C6.89464 9.01957 7 8.76522 7 8.5V2.5H1V8.5Z" fill="currentColor"/></svg>'};var v={name:"HeaderBar",props:{Title:String},setup(){return{state:m,toggleAddTaskForm:k,setSelectedTask:f}},data(){return{svgIcons:x}},methods:{toggleForm(){this.setSelectedTask(null),this.toggleAddTaskForm()}}},T=s(1241);const y=(0,T.A)(v,[["render",u]]);var w=y;const L={class:"h-smallScreen sm:h-appScreen overflow-y-auto"},C={key:0,class:"flex flex-col items-center mt-10"},H=(0,n.Lk)("h3",{class:"text-base text-gray font-medium"},"No Tasks to Display",-1);function V(e,t,s,r,o,i){const a=(0,n.g2)("TaskCard"),l=(0,n.g2)("draggable");return(0,n.uX)(),(0,n.CE)("div",L,[0===s.taskList.length?((0,n.uX)(),(0,n.CE)("section",C,[H,(0,n.Lk)("p",{onClick:t[0]||(t[0]=(...e)=>r.toggleAddTaskForm&&r.toggleAddTaskForm(...e)),class:"cursor-pointer font-light text-sm text-grayLight hover:text-primary underline"}," Click to add a task. ")])):((0,n.uX)(),(0,n.Wv)(l,{key:1,list:s.taskList,disabled:!o.enabled,"item-key":"title",class:"list-group flex flex-col space-y-5 container mx-auto p-3 sm:p-4","ghost-class":"ghost",move:i.checkMove,onStart:t[1]||(t[1]=e=>o.dragging=!0),onEnd:i.onDragEnd},{item:(0,n.k6)((({element:e,index:t})=>[(0,n.bF)(a,{TaskIndex:t,Title:e?.title,Description:e?.description,isChecked:e?.isCompleted},null,8,["TaskIndex","Title","Description","isChecked"])])),_:1},8,["list","disabled","move","onEnd"]))])}var M=s(1527),S=s.n(M);const A={class:"flex items-center text-gray border border-lightSilver"},F=["innerHTML"],I={class:"h-10 min-w-10 cursor-pointer flex items-center justify-center border-x border-lightSilver"},j=["checked"],E={class:"capitalize font-medium text-base sm:text-lg px-3 truncate"},B={class:"sub-menu flex items-center justify-center ml-auto space-x-3 mr-3"},D=["innerHTML"],Z=["innerHTML"],O={class:"truncateOn3 font-light text-grayLight text-sm sm:text-base rounded-b border-t-0 border border-lightSilver py-1 px-3 ml-16"},_={key:0,class:"absolute top-0 left-0 w-screen h-screen"};function X(e,t,s,r,o,a){const l=(0,n.g2)("ConfirmationBox");return(0,n.uX)(),(0,n.CE)("section",null,[(0,n.Lk)("div",A,[(0,n.Lk)("span",{class:"cursor-grab min-w-6 h-10 flex items-center justify-center",innerHTML:o.svgIcons?.dragIcon},null,8,F),(0,n.Lk)("fieldset",I,[(0,n.Lk)("input",{class:"cursor-pointer",checked:s.isChecked,type:"checkbox"},null,8,j)]),(0,n.Lk)("h3",E,(0,i.v_)(s.Title),1),(0,n.Lk)("div",B,[(0,n.Lk)("span",{onClick:t[0]||(t[0]=e=>a.handleEdit(s.TaskIndex)),class:"cursor-pointer h-5 w-5 flex justify-center items-center border rounded border-islamicGreen text-islamicGreen",innerHTML:o.svgIcons?.editIcon},null,8,D),(0,n.Lk)("span",{onClick:t[1]||(t[1]=e=>a.handleDelet(s.TaskIndex)),class:"cursor-pointer h-5 w-5 flex justify-center items-center border rounded border-apple text-apple",innerHTML:o.svgIcons?.binIcon},null,8,Z)])]),(0,n.Lk)("p",O,(0,i.v_)(s.Description),1),o.showConfirmationBox?((0,n.uX)(),(0,n.CE)("section",_,[(0,n.bF)(l,{Heading:"Confirm Delete",Question:"This task will be removed permenatly, Are you sure?",onConfirm:t[2]||(t[2]=e=>r.removeTaskAt(o.selectedIndex)),onClose:a.closeConfirmBox},null,8,["onClose"])])):(0,n.Q3)("",!0)])}const Q={class:"absolute flex items-center justify-center w-screen h-smallScreen sm:h-appScreen bg-black bg-opacity-50 top-14 sm:top-16 z-40 p-3"},W={class:"flex flex-col items-center justify-center rounded-lg border border-secondary bg-white p-10 max-h-[75%] min-h-[35%] min-w-[35%] overflow-auto"},z={class:"uppercae text-lg font-semibold text-gray"},P={class:"text-base text-center font-light text-grayLight mt-3"},$={class:"flex justify-center mt-5 space-x-2"};function G(e,t,s,r,o,a){return(0,n.uX)(),(0,n.CE)("section",Q,[(0,n.Lk)("div",W,[(0,n.Lk)("h1",z,(0,i.v_)(s.Heading),1),(0,n.Lk)("p",P,(0,i.v_)(s.Question),1),(0,n.Lk)("section",$,[(0,n.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>a.confirmDelete&&a.confirmDelete(...e)),class:"border border-primary bg-primary text-white rounded-lg py-1 px-3"}," Yes "),(0,n.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>a.closeModal&&a.closeModal(...e)),class:"border border-secondary bg-white text-secondary rounded-lg py-1 px-3"}," No ")])])])}var N={name:"ConfirmationBox",props:{Heading:String,Question:String},data(){const e=this.state?.taskList[this.state?.selectedTask]||null;return{svgIcons:x,title:e?.title||"",description:e?.description||""}},methods:{confirmDelete(){this.$emit("confirm")},closeModal(){this.$emit("close")}}};const U=(0,T.A)(N,[["render",G]]);var q=U,J={name:"TaskCard",props:{TaskIndex:Number,Title:String,Description:String,isChecked:Boolean},components:{ConfirmationBox:q},setup(){return{removeTaskAt:g,setSelectedTask:f,toggleAddTaskForm:k}},data(){return{svgIcons:x,showConfirmationBox:!1,selectedIndex:null}},methods:{handleEdit(e){this.setSelectedTask(e),this.toggleAddTaskForm()},handleDelet(e){this.selectedIndex=e,this.showConfirmationBox=!0},closeConfirmBox(){this.showConfirmationBox=!1,this.selectedIndex=null}}};const K=(0,T.A)(J,[["render",X]]);var R=K,Y={name:"TaskList",props:{taskList:Array},components:{draggable:S(),TaskCard:R},setup(){return{toggleAddTaskForm:k}},data(){return{enabled:!0,dragging:!1}},methods:{onDragEnd(e){this.$emit("update:taskList",e.newList)},checkMove(){return!0}}};const ee=(0,T.A)(Y,[["render",V]]);var te=ee;const se={class:"absolute flex items-center justify-center w-screen h-smallScreen sm:h-appScreen bg-black bg-opacity-50 top-14 sm:top-16 z-40 p-3"},re={class:"flex items-center"},ne={class:"flex items-center"},oe={class:"flex justify-center space-x-5"},ie={class:"border border-primary bg-primary text-white rounded-lg py-1 px-3",type:"submit"};function ae(e,t,s,o,a,l){return(0,n.uX)(),(0,n.CE)("section",se,[(0,n.Lk)("form",{class:"rounded-lg border border-secondary bg-white p-10 space-y-5 max-h-[75%] overflow-auto",onSubmit:t[3]||(t[3]=(0,r.D$)(((...e)=>l.addTask&&l.addTask(...e)),["prevent"]))},[(0,n.Lk)("fieldset",re,[(0,n.bo)((0,n.Lk)("input",{class:"py-1 px-3 border border-secondary rounded",placeholder:"Enter Task Title",type:"text",id:"title","onUpdate:modelValue":t[0]||(t[0]=e=>a.title=e),required:""},null,512),[[r.Jo,a.title]])]),(0,n.Lk)("fieldset",ne,[(0,n.bo)((0,n.Lk)("textarea",{class:"py-1 px-3 border border-secondary rounded",placeholder:"Enter Task Description",id:"description","onUpdate:modelValue":t[1]||(t[1]=e=>a.description=e),required:""},null,512),[[r.Jo,a.description]])]),(0,n.Lk)("section",oe,[(0,n.Lk)("button",ie,(0,i.v_)(a.isTaskSelected?"Add Task":"Save"),1),(0,n.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>l.closeForm&&l.closeForm(...e)),class:"border border-secondary bg-white text-secondary rounded-lg py-1 px-3",type:"submit"}," Cancle ")])],32)])}var le={name:"TaskForm",setup(){return{state:m,toggleAddTaskForm:k,setSelectedTask:f,appendTask:h,updateTaskAt:b}},data(){const e=this.state?.taskList[this.state?.selectedTask]||null;return{svgIcons:x,title:e?.title||"",description:e?.description||"",isChecked:e?.isCompleted||!1,isTaskSelected:null===e}},methods:{addTask(){const e={title:this.title,description:this.description,isCompleted:this.isChecked,priorityIndex:this.state?.taskList?.length};this.title&&this.description&&(this.isTaskSelected?this.appendTask(e):(this.updateTaskAt(this.state?.selectedTask,e),this.closeForm()),this.title=this.description="")},closeForm(){this.setSelectedTask(null),this.toggleAddTaskForm()}}};const ce=(0,T.A)(le,[["render",ae]]);var de=ce,ue={components:{HeaderBar:w,TaskList:te,TaskForm:de},setup(){return{state:m}}};const pe=(0,T.A)(ue,[["render",o]]);var me=pe;const ke=()=>{const e=(0,p.Kh)({showAddTaskForm:!1,taskList:[],selectedTask:null});return{state:e,toggleAddTaskForm:k,appendTask:h,removeTaskAt:g,setSelectedTask:f,updateTaskAt:b}},he=(0,r.Ef)(me);he.provide("store",ke()),he.mount("#app")}},t={};function s(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(t,r,n,o){if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],n=e[d][1],o=e[d][2];for(var a=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(s.O).every((function(e){return s.O[e](r[l])}))?r.splice(l--,1):(a=!1,o<i&&(i=o));if(a){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,n,o]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};s.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,i=r[0],a=r[1],l=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(n in a)s.o(a,n)&&(s.m[n]=a[n]);if(l)var d=l(s)}for(t&&t(r);c<i.length;c++)o=i[c],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(d)},r=self["webpackChunktask"]=self["webpackChunktask"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=s.O(void 0,[504],(function(){return s(1769)}));r=s.O(r)})();
//# sourceMappingURL=app.1c797963.js.map