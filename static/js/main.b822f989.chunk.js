(window.webpackJsonpreact3=window.webpackJsonpreact3||[]).push([[0],{28:function(e,a,t){e.exports=t(53)},53:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(22),l=t.n(c),i=t(6),o=t(7),s=t(9),u=t(8),h=t(10),m=t(54),d=t(61),p=t(60),v=t(59),f=(t(11),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).search=function(){var e=t.input.value.trim();e&&t.props.setSearchName(e)},t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement("h1",null,"Search Github Users"),r.a.createElement(d.a,{className:"mb-3"},r.a.createElement(p.a,{placeholder:"Please input the keywords","aria-label":"Please input the keywords","aria-describedby":"basic-addon2",ref:function(a){return e.input=a}}),r.a.createElement(d.a.Append,null,r.a.createElement(v.a,{variant:"outline-secondary",onClick:this.search},"Search")))))}}]),a}(n.Component)),b=t(55),E=t(56),w=t(57),g=t(58),y=t(25),j=t.n(y),O=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={initView:!0,loading:!1,users:null,errorMsg:null},t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"componentWillReceiveProps",value:function(e){var a=this,t=e.searchName;this.setState({initView:!1,loading:!0});var n="https://api.github.com/search/users?q=".concat(t);j.a.get(n).then(function(e){var t=e.data.items.map(function(e){return{name:e.login,url:e.html_url,avatarUrl:e.avatar_url}});a.setState({loading:!1,users:t})}).catch(function(e){a.setState({loading:!1,errorMsg:e.message})})}},{key:"render",value:function(){var e=this.state,a=e.initView,t=e.loading,n=e.users,c=e.errorMsg,l=this.props.searchName;return a?r.a.createElement("h2",null,"Please input the key words:",l):t?r.a.createElement("h2",null,"Loading..."):c?r.a.createElement("h2",null,c):r.a.createElement("div",null,r.a.createElement(b.a,null,n.map(function(e,a){return r.a.createElement(E.a,{key:a},r.a.createElement(w.a,{xs:6,md:4},r.a.createElement("a",{href:e.url},r.a.createElement(g.a,{src:e.avatarUrl,rounded:!0})),r.a.createElement("p",null,e.name)))})))}}]),a}(n.Component),k=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={searchName:""},t.setSearchName=function(e){t.setState({searchName:e})},t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,{setSearchName:this.setSearchName}),r.a.createElement(O,{searchName:this.state.searchName}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.b822f989.chunk.js.map