(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(t,e,n){t.exports=n(55)},52:function(t,e,n){},55:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(21),c=n.n(r),l=n(14),i=n(6),d=n(7),u=n(9),s=n(8),p=n(10),m=n(58),f=n(57),h=n(56);var b={background:"#0d0977",color:"#fff",textAlign:"center",padding:"10px"},y={color:"#fff",textDecoration:"none"},g=function(){return o.a.createElement("header",{style:b},o.a.createElement("h1",null,"Notes"),o.a.createElement(h.a,{style:y,to:"/"},"Note List")," |",o.a.createElement(h.a,{style:y,to:"/about"}," About Page"))},j=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(o)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," ","",n,o.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:E},"x")))}}]),e}(a.Component),E={background:"#ff0000",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},v=j,O=function(t){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map(function(e){return o.a.createElement(v,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})})}}]),e}(a.Component),k=n(22),x=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(o)))).state={title:""},n.onSubmit=function(t){t.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n.onChange=function(t){return n.setState(Object(k.a)({},t.target.name,t.target.value))},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},o.a.createElement("input",{type:"text",name:"title",style:{flex:"15",padding:"5px"},placeholder:"Add Something here ...",value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),e}(a.Component);var C=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null," About"),o.a.createElement("p",null,"Sample Note App using React JS"))},S=n(12),T=n.n(S),w=(n(52),function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(o)))).state={todos:[]},n.markComplete=function(t){n.setState({todos:n.state.todos.map(function(e){return e.id===t&&(e.completed=!e.completed),e})})},n.delTodo=function(t){T.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then(function(e){return n.setState({todos:Object(l.a)(n.state.todos.filter(function(e){return e.id!==t}))})})},n.addTodo=function(t){T.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then(function(t){return n.setState({todos:[].concat(Object(l.a)(n.state.todos),[t.data])})})},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){var t=this;T.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(function(e){return t.setState({todos:e.data})})}},{key:"render",value:function(){var t=this;return o.a.createElement(m.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(g,null),o.a.createElement(f.a,{exact:!0,path:"/",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(x,{addTodo:t.addTodo}),o.a.createElement(O,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),o.a.createElement(f.a,{path:"/about",component:C}))))}}]),e}(a.Component));c.a.render(o.a.createElement(w,null),document.getElementById("root"))}},[[25,2,1]]]);
//# sourceMappingURL=main.58f023c9.chunk.js.map