(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(33)},24:function(e,t,n){},26:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),l=(n(24),n(17)),i=n(38),s=n(35),u=n(39),m=n(36),p=n(40),d=n(37),f={isAuthenticated:!1,authenticate:function(e){var t=this;fetch("api/users/user",{credentials:"include"}).then(function(n){t.isAuthenticated=!0,"function"===typeof e&&e(n.json().user)}).catch(function(e){console.log("Error fetching authorized user.")})},signout:function(e){var t=this;fetch("api/users/logout",{method:"POST",credentials:"include"}).then(function(n){t.isAuthenticated=!1,"function"===typeof e&&e(!0)}).catch(function(t){console.log("Error logging out user."),"function"===typeof e&&e(!1)})}},h=n(3),g=n(4),b=n(6),E=n(5),v=n(7),w=(n(26),function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,width:window.innerWidth},n.updateWidth=function(){var e={width:window.innerWidth};n.state.open&&e.width>991&&(e.open=!1),n.setState(e)},n.toggleNav=function(){n.setState({open:!n.state.open})},n}return Object(v.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWidth)}},{key:"componentWillUnMount",value:function(){window.removeEventListener("resize",this.updateWidth)}},{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark mb-2"},r.a.createElement(s.a,{className:"navbar-brand",to:"/"},"Auth Plate"),r.a.createElement("button",{onClick:this.toggleNav,className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"".concat(this.state.open?"":"collapse ","navbar-collapse"),id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.a,{onClick:this.toggleNav,className:"/"===window.location.pathname?"nav-link active":"nav-link",to:"/login"},"Login")))))}}]),t}(a.Component)),y=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this,t=this.props.onLogin;return r.a.createElement("form",{ref:function(t){return e.form=t},onSubmit:function(n){return n.preventDefault(),t({username:e.usernameElem.value,password:e.passwordElem.value})}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",ref:function(t){return e.usernameElem=t},type:"text",name:"username",placeholder:"Enter Username"}),r.a.createElement("br",null),r.a.createElement("input",{className:"form-control",ref:function(t){return e.passwordElem=t},type:"password",name:"password",placeholder:"Password"}),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-success",type:"submit"},"Submit")))}}]),t}(r.a.Component),O=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={redirectToReferrer:!1},n.login=function(e){console.log("Logging in "+e.username),fetch("api/users/login",{method:"POST",body:JSON.stringify(e),credentials:"include",headers:{"Content-Type":"application/json"}}).then(function(e){200===e.status&&f.authenticate(function(){n.setState({redirectToReferrer:!0})})}).catch(function(e){console.log("Error logging in.",e)})},n}return Object(v.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=(this.props.location.state||{from:{pathname:"/protected"}}).from;return this.state.redirectToReferrer?r.a.createElement(d.a,{to:e}):r.a.createElement("div",null,r.a.createElement("p",null,"You must log in to view the page at ",e.pathname),r.a.createElement(y,{onLogin:this.login}))}}]),t}(r.a.Component),j=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this,t=this.props.onRegister;return console.log("Register form props are: ".concat(JSON.stringify(this.props))),r.a.createElement("form",{ref:function(t){return e.form=t},onSubmit:function(n){return n.preventDefault(),t({username:e.usernameElem.value,password:e.passwordElem.value})}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",ref:function(t){return e.usernameElem=t},type:"text",name:"username",placeholder:"Enter Username"}),r.a.createElement("br",null),r.a.createElement("input",{className:"form-control",ref:function(t){return e.passwordElem=t},type:"password",name:"password",placeholder:"Password"}),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn btn-primary",type:"submit"},"Submit")))}}]),t}(r.a.Component),N=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={redirectToReferrer:!1},n.register=function(e){fetch("api/users/register",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"},credentials:"include"}).then(function(e){200===e.status&&(console.log("Succesfully registered user!"),window.location.assign("/protected"))}).catch(function(e){console.log("Error registering user.",e)})},n}return Object(v.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h4",null,"Register a New User"),r.a.createElement(j,{onRegister:this.register}))}}]),t}(r.a.Component);function k(e){var t=e.fluid,n=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}var S=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"This is a Public Page Here"),r.a.createElement("p",null,"Anyone can see this content"))}}]),t}(r.a.Component),P=(n(31),{color:"cornflowerblue",listStyle:"none"}),A=Object(p.a)(function(e){var t=e.history;return f.isAuthenticated?r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"Success! You are Logged In!"),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){f.signout(function(){return t.push("/")})}},"Sign out")):r.a.createElement("p",null,"You are not logged in.")}),C=function(e){var t=e.component,n=Object(l.a)(e,["component"]);return r.a.createElement(m.a,Object.assign({},n,{render:function(e){return f.isAuthenticated?r.a.createElement(t,e):r.a.createElement(d.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},T=function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(w,{className:"App-header"}),r.a.createElement(k,null,r.a.createElement(A,null),r.a.createElement("ul",{style:P},r.a.createElement("li",null,r.a.createElement(s.a,{to:"/public"},"Public Page")),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/protected"},"Protected Page")),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/register"},"Register a New User"))),r.a.createElement(u.a,null,r.a.createElement(m.a,{path:"/public",component:S}),r.a.createElement(m.a,{path:"/login",component:O}),r.a.createElement(m.a,{path:"/register",component:N}),r.a.createElement(C,{path:"/protected",component:S})))))};c.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[18,2,1]]]);
//# sourceMappingURL=main.83530005.chunk.js.map