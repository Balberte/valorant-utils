(this["webpackJsonpvalorant-utils"]=this["webpackJsonpvalorant-utils"]||[]).push([[0],{16:function(e,t,a){e.exports=a(28)},21:function(e,t,a){},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),s=a.n(l),o=(a(21),a(6)),i=a.n(o),c=a(7),u=a.n(c),m=(a(22),a(4)),p=a.n(m),h=a(8),y=a(12),d=a(9),v=a(10),f=a(14),g=a(13),E=a(42),w=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Team"},r.a.createElement("h2",null,"Team ",e.number),r.a.createElement("ul",null,e.players.map((function(e){return r.a.createElement("li",{key:e.id},e.name)})))))},k=function(e){Object(f.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={playerCount:0,playerList:[],team1:[],team2:[]},e.handleKeyDown=function(t){"Enter"===t.key&&e.savePlayer()},e}return Object(v.a)(a,[{key:"savePlayer",value:function(){var e=this.state.playerList;""!==this.playerInput.value&&(e.push({id:this.state.playerCount+1,name:this.playerInput.value}),this.setState({playerList:e,playerCount:this.state.playerCount+1})),this.playerInput.focus()}},{key:"shuffleArray",value:function(e){for(var t=e.length-1,a=Object(y.a)(e);t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=a[t];a[t]=a[n],a[n]=r}return a}},{key:"generateTeams",value:function(){var e=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({team1:[],team2:[]});case 2:this.assignPlayersToTeams();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"assignPlayersToTeams",value:function(){var e=this,t=!0,a=this.state.team1,n=this.state.team2;this.shuffleArray(this.state.playerList).map((function(r){t?e.state.team1.includes(r)||a.push(r):e.state.team2.includes(r)||n.push(r),t=!t})),this.setState({team1:a}),this.setState({team2:n})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Team-generator"},r.a.createElement("div",{className:"Player-list"},r.a.createElement(E.a,{variant:"outlined",color:"secondary",className:"Generate-teams",onClick:function(){return e.generateTeams()}}," Generate Teams"),r.a.createElement("div",{className:"Add-player-wrapper"},r.a.createElement("input",{className:"Player-input",type:"text",placeholder:"Add player name",ref:function(t){return e.playerInput=t},onFocus:function(){return e.playerInput.value=""},onKeyDown:this.handleKeyDown}),r.a.createElement(E.a,{variant:"outlined",color:"secondary",className:"Save-Player",onClick:function(){return e.savePlayer()}},"Add")),r.a.createElement("ul",null,this.state.playerList.map((function(e){return r.a.createElement("li",{key:e.id},e.name)}))))),this.state.team1.length>0&&r.a.createElement(w,{players:this.state.team1,number:"1"}),this.state.team2.length>0&&r.a.createElement(w,{players:this.state.team2,number:"2"}))}}]),a}(n.Component);var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-logo-wrapper"},r.a.createElement("img",{src:i.a,className:"App-logo1",alt:"logo1"}),r.a.createElement("img",{src:u.a,className:"App-logo2",alt:"logo2"})),r.a.createElement("header",{className:"App-header"},r.a.createElement(k,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a.p+"static/media/valorant-logo.04e02c9b.png"},7:function(e,t,a){e.exports=a.p+"static/media/valorant-title-logo.6bd698a7.png"}},[[16,1,2]]]);
//# sourceMappingURL=main.a0d50ef2.chunk.js.map