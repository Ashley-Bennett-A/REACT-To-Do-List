(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),i=n.n(r),c=(n(15),n(6)),l=n(3),u=n(4),s=n(7),d=n(5),h=n(8),m=(n(16),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={value:"",todo:["A simple react to-do list app","Click an item to remove it from the list"]},n.removeItem=function(e){var t=e.currentTarget.innerText,a=n.state.todo.filter(function(e){return e!==t});n.setState({todo:Object(c.a)(a)})},n.handleChange=function(e){n.setState({value:e.target.value})},n.add=function(e){if(e.preventDefault(),n.state.value){var t=n.state.value,a=n.state.todo;a.push(t),n.setState({todo:a,value:""})}},n.value=function(e){e.target.value=""},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Ashley's React To-Do list"),o.a.createElement("form",null,o.a.createElement("input",{type:"text",placeholder:"To-do...",onChange:this.handleChange,onFocus:this.value}),o.a.createElement("input",{type:"submit",onClick:this.add})),this.state.todo.map(function(t){return o.a.createElement("li",{onClick:e.removeItem,key:t},t)}))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.33b40c8f.chunk.js.map