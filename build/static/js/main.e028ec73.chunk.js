(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t){},128:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(31),o=a.n(r),i=(a(78),a(2)),c=a(3),l=a(5),u=a(4),d=a(6),h=a(11),m=a(19),p=a(8),g=a(18),b=a(33),f={loggedIn:!1,authToken:"",freeDayToken:"",freeDayTokenUsed:!0,userName:"",currentlySubscribed:!1,streamAddress:"",archivedShows:[],admin:!1,selectedArchive:{},refetchMutedUserList:!0},E=Object(b.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(g.a)({},e,{loggedIn:!0,authToken:t.authToken,userName:t.userName,admin:t.admin,currentlySubscribed:t.currentlySubscribed,freeDayToken:t.freeDayToken,freeDayTokenUsed:t.freeDayTokenUsed});case"LOGOUT":return Object(g.a)({},e,{loggedIn:!1,authToken:"",userName:"",admin:!1});case"SETSTREAMADDRESS":return Object(g.a)({},e,{streamAddress:t.streamAddress});case"SETARCHIVEDSHOWS":return Object(g.a)({},e,{archivedShows:t.archivedShows});case"SELECTARCHIVE":return Object(g.a)({},e,{selectedArchive:t.selectedArchive});case"REFETCHMUTEDUSERLIST":return Object(g.a)({},e,{refetchMutedUserList:t.refetch});case"CLEARARCHIVES":return Object(g.a)({},e,{archivedShows:[],selectedArchive:{}});default:return e}},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),v=a(1),y=(a(83),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={menuVisible:!1,watchDropDownVisible:!1,mobile:!0},a.menuToggle=a.menuToggle.bind(Object(v.a)(a)),a.hideMenu=a.hideMenu.bind(Object(v.a)(a)),a.toggleWatchDropDown=a.toggleWatchDropDown.bind(Object(v.a)(a)),a.hideWatchDropDown=a.hideWatchDropDown.bind(Object(v.a)(a)),a.checkWidth=a.checkWidth.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"checkWidth",value:function(){this.setState({mobile:window.innerWidth<600,menuVisible:window.innerWidth>=600}),setTimeout(function(){window.requestAnimationFrame(function(){var e=getComputedStyle(document.getElementById("header-container"));document.body.style.paddingTop="".concat(parseInt(e.height)+30,"px")})},1e3)}},{key:"componentDidMount",value:function(){var e=this;this.checkWidth(),window.addEventListener("resize",function(){e.checkWidth()})}},{key:"menuToggle",value:function(e){e.stopPropagation(),this.setState(function(e){return{menuVisible:!e.menuVisible,watchDropDownVisible:!1}})}},{key:"hideMenu",value:function(){this.setState({menuVisible:!1,watchDropDownVisible:!1})}},{key:"toggleWatchDropDown",value:function(){this.setState(function(e){return{watchDropDownVisible:!!e.menuVisible&&!e.watchDropDownVisible}})}},{key:"hideWatchDropDown",value:function(){this.setState({watchDropDownVisible:!1})}},{key:"render",value:function(){return s.a.createElement("div",{id:"header-container",onMouseLeave:this.state.mobile?this.hideMenu:null},s.a.createElement("div",{id:"drop-down-toggle",className:this.state.mobile?null:"hidden",onClick:this.menuToggle},s.a.createElement("div",{className:"hamburger-bar"}),s.a.createElement("div",{className:"hamburger-bar"}),s.a.createElement("div",{className:"hamburger-bar"})),s.a.createElement("img",{onClick:this.checkWidth,id:"header-image",src:this.state.mobile?"/Images/HeaderMobile.jpg":"/Images/LightHeader.jpg",alt:"BEST CLOSER SHOW"}),s.a.createElement(h.b,{to:"/ACCOUNT",onClick:this.state.mobile?this.hideMenu:null},s.a.createElement("div",{className:this.state.menuVisible?"header-option":"header-option hidden"},s.a.createElement("h1",null,"ACCOUNT"))),s.a.createElement("a",{href:"https://indictmentclothing.com",target:"_blank",rel:"noopener noreferrer",onClick:this.state.mobile?this.hideMenu:null},s.a.createElement("div",{className:this.state.menuVisible?"header-option":"header-option hidden"},s.a.createElement("h1",null,"SHOP"))),s.a.createElement("div",{onMouseLeave:this.state.mobile?null:this.hideWatchDropDown,onMouseEnter:this.state.mobile?null:this.toggleWatchDropDown,onClick:this.toggleWatchDropDown},s.a.createElement("div",{className:this.state.menuVisible?"header-option":"header-option hidden"},s.a.createElement("h1",null,"WATCH")),s.a.createElement("div",{className:this.state.watchDropDownVisible?null:"hidden",onClick:this.state.mobile?this.hideMenu:null},s.a.createElement(h.b,{to:"/STREAM"},s.a.createElement("div",{className:"header-option"},s.a.createElement("h1",null,"LIVE"))),s.a.createElement(h.b,{to:"/ARCHIVES"},s.a.createElement("div",{className:"header-option"},s.a.createElement("h1",null,"ARCHIVES"))))))}}]),t}(n.Component)),w=a(34),k=(a(94),function(){return s.a.createElement("div",{id:"footer-container"},s.a.createElement("div",{className:"footer-section",id:"connect"},s.a.createElement("h1",{className:"footer-section-title"},"Connect"),s.a.createElement(w.SocialIcon,{className:"social-icon",url:"https://twitter.com/thebestcloser",target:"_blank",rel:"noopener noreferrer"}),s.a.createElement(w.SocialIcon,{className:"social-icon",url:"https://www.youtube.com/channel/UC1F1L-SeCrINe2-PJjbdXpQ",target:"_blank",rel:"noopener noreferrer"}),s.a.createElement(w.SocialIcon,{className:"social-icon",url:"https://facebook.com/thebestcloser",target:"_blank",rel:"noopener noreferrer"})),s.a.createElement("div",{className:"footer-section",id:"contact"},s.a.createElement("h1",{className:"footer-section-title"},"Contact"),s.a.createElement("a",{id:"email",href:"mailto:info@bestclosershow.com"},"info@bestclosershow.com")))}),O=a(70),T=a.n(O),S=a(72),C=a(71),N=a.n(C)()("https://api.bestclosershow.com"),j={postMessage:function(e,t){N.emit("post message",{message:t,token:e})},handleIncomingMessage:function(e,t){N.on("new message",function(t){return e(t)}),N.on("err",function(e){return t(e)})}},A=(a(128),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).toggleMute=a.toggleMute.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"toggleMute",value:function(){var e=this,t=this.props.messageObj.userName;fetch("https://api.bestclosershow.com/user/alter-permissions/".concat(t),{method:"PATCH",body:JSON.stringify({changes:[{propName:"canChat",value:!1}]}),headers:{"Content-Type":"application/json",Authorization:this.props.authToken}}).then(function(t){return 200!==t.status&&console.log("muting user failed"),200===t.status&&e.props.dispatch({type:"REFETCHMUTEDUSERLIST",refetch:!0}),t.json()}).catch(function(e){return console.error("Error: "+e)})}},{key:"render",value:function(){var e=this.props.messageObj;return s.a.createElement("li",{className:"message-container"},s.a.createElement("div",{className:"username-label"},e.userName),this.props.admin?s.a.createElement("div",{className:"mute",onClick:this.toggleMute},"MUTE"):null,s.a.createElement("p",{className:"chat-message"},e.message))}}]),t}(n.Component)),D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={messages:[],message:"",messageErr:!1,errMessage:"",mutedUserNames:[]},j.handleIncomingMessage(function(e){a.setState(function(t){return{messages:[].concat(Object(S.a)(t.messages),[e])}}),console.log("recieved message: "+e);var t=document.getElementById("messages-list");t.scrollTop=t.scrollHeight},function(e){console.log("error",e),window.alert("An error occured. ".concat(e))}),a.sendMessage=a.sendMessage.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"sendMessage",value:function(e){e.preventDefault(),""===this.state.message?window.alert("Message cannot be blank"):this.state.message.length>500?window.alert("Message cannot be more than 500 characters"):(console.log("sent message: "+this.state.message),j.postMessage(this.props.authToken,this.state.message),this.setState({message:""}))}},{key:"render",value:function(){var e,t=this;return e=0!==this.state.messages.length?this.state.messages.map(function(e){return s.a.createElement(A,{key:e.userName+"_"+t.state.messages.indexOf(e),messageObj:e,admin:t.props.admin,user:t.props.userName,authToken:t.props.authToken,dispatch:t.props.dispatch})}):s.a.createElement("div",{id:"empty-chat-message"},"No messages yet"),s.a.createElement("div",{id:"chat-holder"},s.a.createElement("ul",{id:"messages-list"},e),s.a.createElement("form",{id:"message-form",onSubmit:this.sendMessage},s.a.createElement("input",{id:"message-input",type:"text",value:this.state.message,onChange:function(e){return t.setState({message:e.target.value})}})),s.a.createElement("button",{id:"message-submit",onClick:this.sendMessage,alt:"submit"},s.a.createElement("img",{id:"message-submit-image",src:"/Images/sendMessage.png",alt:"SEND"})))}}]),t}(n.Component),R=Object(p.b)(function(e){return{loggedIn:e.loggedIn,authToken:e.authToken,userName:e.userName,streamAddress:e.streamAddress,admin:e.admin}})(D),U=(a(129),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={hidden:!1},a.unmuteUser=a.unmuteUser.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"unmuteUser",value:function(){var e=this,t=this.props,a=t.userName,n=t.authToken;fetch("https://api.bestclosershow.com/user/alter-permissions/".concat(a),{method:"PATCH",body:JSON.stringify({changes:[{propName:"canChat",value:!0}]}),headers:{"Content-Type":"application/json",Authorization:n}}).then(function(t){200!==t.status?console.log("unmuting user failed"):(e.setState({hidden:!0}),e.props.dispatch({type:"REFETCHMUTEDUSERLIST",refetch:!0}))}).catch(function(e){return console.error("Error: "+e)})}},{key:"render",value:function(){return s.a.createElement("button",{className:(this.state.hidden,"muted-user-button"),onClick:this.unmuteUser},this.props.userName)}}]),t}(s.a.Component)),P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={mutedUserNames:[]},a.fetchMutedUsers=a.fetchMutedUsers.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"fetchMutedUsers",value:function(){var e=this;this.props.refetchMutedUserList&&fetch("https://api.bestclosershow.com/user/muted-users",{headers:{Authorization:this.props.authToken}}).then(function(t){return 200!==t.status?console.error("error retrieving muted users unmuteUser Comp"):200===t.status&&e.props.dispatch({type:"REFETCHMUTEDUSERLIST",refetch:!1}),t.json()}).then(function(t){console.log(t),e.setState({mutedUserNames:t})}).catch(function(e){return console.error("Error: "+e)})}},{key:"componentDidMount",value:function(){this.fetchMutedUsers()}},{key:"componentDidUpdate",value:function(){this.fetchMutedUsers()}},{key:"render",value:function(){var e,t=this;return e=0===this.state.mutedUserNames.length?s.a.createElement("div",null,"NO USERS MUTED"):this.state.mutedUserNames.map(function(e){return s.a.createElement(U,{userName:e,key:e,authToken:t.props.authToken,dispatch:t.props.dispatch})}),s.a.createElement("div",{id:"unmute-users-container"},s.a.createElement("h1",null,"Muted Users"),s.a.createElement("p",null,"To unmute a user click their button. Their username should disapper."),s.a.createElement("ul",{id:"muted-users-list-container"},e))}}]),t}(n.Component),I=Object(p.b)(function(e){return{authToken:e.authToken,admin:e.admin,refetchMutedUserList:e.refetchMutedUserList}})(P),M=(a(130),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={playBackError:!1},e.onPlayError=e.onPlayError.bind(Object(v.a)(e)),e.getResources=e.getResources.bind(Object(v.a)(e)),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"getResources",value:function(){var e=this;fetch("https://api.bestclosershow.com/resources",{headers:{"Content-Type":"application/json",Authorization:this.props.authToken}}).then(function(e){return 200!==e.status&&console.log("getResources fetch failed"),e.json()}).then(function(t){var a=[];t.docs.forEach(function(t){t.isStreamLink?e.props.dispatch({type:"SETSTREAMADDRESS",streamAddress:t.URL}):a.push(t)}),e.props.dispatch({type:"SETARCHIVEDSHOWS",archivedShows:a})}).catch(function(e){return console.error("Error: "+e)})}},{key:"componentDidMount",value:function(){this.props.streamAddress||(this.getResources(),console.log("getResources() ran"))}},{key:"onPlayError",value:function(){console.log("onPlayError fired"),this.setState({playBackError:!0})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{id:"stream-chat-container"},this.props.loggedIn?null:s.a.createElement(m.a,{to:"/ACCOUNT"}),this.props.currentlySubscribed?null:this.props.freeDayToken.length>5?null:s.a.createElement(m.a,{to:"/ACCOUNT"}),s.a.createElement("div",{id:"stream-container"},s.a.createElement("h1",{id:"stream-label"},"Best Closer Show LIVE"),this.state.playBackError?s.a.createElement("div",{id:"playback-error-container"},s.a.createElement("h1",{id:"playback-error-comment"},"Awaiting Live Show"),s.a.createElement("button",{onClick:function(){return e.setState({playBackError:!1})},id:"refresh-stream-button"},"Refresh Stream")):s.a.createElement(T.a,{width:"100%",height:"auto",url:this.props.streamAddress,onError:this.onPlayError,playing:!0,controls:!0,playsinline:!0})),s.a.createElement("div",{id:"chat-container"},s.a.createElement(R,null)),this.props.admin?s.a.createElement("div",{id:"unmute-user-container"},s.a.createElement(I,null)):null)}}]),t}(n.Component)),L=Object(p.b)(function(e){return{loggedIn:e.loggedIn,authToken:e.authToken,userName:e.userName,streamAddress:e.streamAddress,admin:e.admin,currentlySubscribed:e.currentlySubscribed,freeDayToken:e.freeDayToken,freeDayTokenUsed:e.freeDayTokenUsed}})(M),F=a(14),V=(a(131),a(132),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={identity:"",password:"",deleteToggled:!1,promoCode:""},a.logout=a.logout.bind(Object(v.a)(a)),a.deleteAccount=a.deleteAccount.bind(Object(v.a)(a)),a.updateField=a.updateField.bind(Object(v.a)(a)),a.subscribe=a.subscribe.bind(Object(v.a)(a)),a.deleteToggle=a.deleteToggle.bind(Object(v.a)(a)),a.applyPromo=a.applyPromo.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"updateField",value:function(e){this.setState(Object(F.a)({},e.target.id,e.target.value))}},{key:"logout",value:function(){this.props.dispatch({type:"LOGOUT"})}},{key:"deleteAccount",value:function(){var e=this;window.confirm("Are you sure you want to PERMANENTLY DELETE YOUR ACCOUNT?")&&fetch("https://api.bestclosershow.com/user",{method:"delete",body:JSON.stringify({identity:this.state.identity,password:this.state.password}),headers:{"Content-Type":"application/json",Authorization:this.props.authToken}}).then(function(e){return 200!==e.status&&window.alert("Something went wrong! Try again."),e.json()}).then(function(t){console.log(t),e.logout()}).catch(function(e){return console.error("Error: "+e)})}},{key:"subscribe",value:function(){fetch("https://api.bestclosershow.com/paypal/subscribe",{method:"post",headers:{"Content-Type":"application/json",Authorization:this.props.authToken}}).then(function(e){return 200!==e.status&&window.alert("Error subscribing. Please try again!"),e.json()}).then(function(e){window.location.href=e.approvalLink}).catch(function(e){return console.error("Error: "+e)})}},{key:"deleteToggle",value:function(e){e.preventDefault(),this.setState(function(e){return{deleteToggled:!e.deleteToggled}})}},{key:"applyPromo",value:function(){fetch("https://api.bestclosershow.com/user/apply-promo",{method:"post",headers:{"Content-Type":"application/json",Authorization:this.props.authToken},body:JSON.stringify({promoCode:this.state.promoCode})}).then(function(e){200!==e.status?500===e.status?window.alert("Internal Server Error"):window.alert("Invalid Promo Code"):200===e.status&&window.alert("You have full access for 24 hours. Please logout and log back in to gain access.")}).catch(function(e){return console.error("Error: "+e)})}},{key:"render",value:function(){var e=this.props;return s.a.createElement("div",{id:"signed-in-container"},s.a.createElement("h1",null,"Hello ",e.userName,"!"),s.a.createElement("h2",null,"Manage your account from this page."),s.a.createElement("button",{onClick:this.logout,className:"signed-in-button logout"},"Logout"),this.props.currentlySubscribed?null:s.a.createElement("button",{onClick:this.subscribe,className:"signed-in-button"},"Subscribe"),this.props.freeDayToken.length>5?null:s.a.createElement(s.a.Fragment,null,s.a.createElement("input",{onChange:this.updateField,id:"promoCode",className:"promo-input",type:"text",placeholder:"Promo Code",value:this.state.promoCode.trim()}),s.a.createElement("button",{onClick:this.applyPromo,className:"signed-in-button"},"Apply Promo")),this.state.deleteToggled?s.a.createElement(s.a.Fragment,null,s.a.createElement("input",{className:"delete-confirmation-input",id:"identity",type:"text",placeholder:"Username or Email",value:this.state.identity,onChange:this.updateField}),s.a.createElement("input",{className:"delete-confirmation-input",id:"password",type:"password",placeholder:"Password",value:this.state.password,onChange:this.updateField}),s.a.createElement("button",{onClick:this.deleteAccount,className:"signed-in-button delete-account"},"Delete Account"),s.a.createElement("div",{id:"delete-toggle",style:{marginTop:"30px"},onClick:this.deleteToggle},"Click here to hide delete field.")):s.a.createElement("div",{id:"delete-toggle",onClick:this.deleteToggle},"Want to delete your account? Click here."))}}]),t}(n.Component)),H=Object(p.b)(function(e){return{loggedIn:e.loggedIn,authToken:e.authToken,userName:e.userName,currentlySubscribed:e.currentlySubscribed,freeDayToken:e.freeDayToken,freeDayTokenUsed:e.freeDayTokenUsed}})(V),W=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={signupEmail:"",signupUsername:"",signupPassword:"",signupPasswordConfirm:"",signupFirstName:"",signupLastName:"",signupPromoCode:"",signinUser:"",signinPassword:""},console.log({loggedIn:e.loggedIn,authToken:e.authToken}),a.updateField=a.updateField.bind(Object(v.a)(a)),a.login=a.login.bind(Object(v.a)(a)),a.signup=a.signup.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"updateField",value:function(e){this.setState(Object(F.a)({},e.target.id,e.target.value))}},{key:"login",value:function(e){var t=this;e&&(e.preventDefault(),e.stopPropagation());var a=this.state,n=a.signinUser,s=a.signinPassword;""===s||""===n?window.alert("Password or Email is blank!"):fetch("https://api.bestclosershow.com/user/login",{method:"post",body:JSON.stringify({identity:n,password:s}),headers:{"Content-Type":"application/json"}}).then(function(e){return 200!==e.status&&window.alert("Invalid Credentials"),e.json()}).then(function(e){console.log(e),"Auth successful"===e.message&&(t.props.dispatch({type:"LOGIN",authToken:e.token,userName:n,admin:e.admin,currentlySubscribed:e.paidSubscription,freeDayToken:e.freeDayToken,freeDayTokenUsed:e.freeDayTokenUsed}),e.paidSubscription||"string"===typeof e.freeDayToken||window.alert("According to our records your subscription is not paid. If you have just subscribed and are still getting this message check your email because paypal may require you to confirm the transaction."))}).catch(function(e){return console.error("Error: "+e)})}},{key:"signup",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.signupEmail,s=a.signupUsername,r=a.signupPassword,o=a.signupPasswordConfirm,i=a.signupFirstName,c=a.signupLastName,l=a.signupPromoCode;""===n||""===s||""===r||""===o?window.alert("All fields must be filled"):r!==o?window.alert("Passwords do not match!"):fetch("https://api.bestclosershow.com/user/signup",{method:"post",body:JSON.stringify({email:n.replace(/\s/g,""),userName:s.replace(/\s/g,""),password:r,firstName:i,lastName:c,promoCode:l}),headers:{"Content-Type":"application/json"}}).then(function(e){return 200!==e.status&&window.alert("Username or email already in use"),e.json()}).then(function(e){console.log(e),t.setState({signinUser:n,signinPassword:r}),t.login()}).catch(function(e){return console.error("Error: "+e)})}},{key:"render",value:function(){var e;return e=!0===this.props.loggedIn?s.a.createElement(H,{userName:this.props.userName}):s.a.createElement("div",{id:"forms-container"},s.a.createElement("div",null,s.a.createElement("form",{className:"form",onSubmit:this.login},s.a.createElement("h1",{className:"form-label"},"LOG IN"),s.a.createElement("input",{onChange:this.updateField,id:"signinUser",className:"signup-input",type:"text",placeholder:"Username or Email",value:this.state.signinUser}),s.a.createElement("input",{onChange:this.updateField,id:"signinPassword",className:"signup-input",type:"password",placeholder:"Password",value:this.state.signinPassword}),s.a.createElement("input",{className:"submit-button",type:"submit",value:"LOG IN"})),s.a.createElement(h.b,{to:"/PASSWORD-RECOVERY",id:"password-recovery"},"Forgot your password? Click Here.")),s.a.createElement("form",{className:"form",onSubmit:this.signup},s.a.createElement("h1",{className:"form-label"},"SIGN UP"),s.a.createElement("input",{onChange:this.updateField,id:"signupFirstName",className:"signup-input",type:"text",placeholder:"First Name",value:this.state.signupFirstName}),s.a.createElement("input",{onChange:this.updateField,id:"signupLastName",className:"signup-input",type:"text",placeholder:"Last Name",value:this.state.signupLastName}),s.a.createElement("input",{onChange:this.updateField,id:"signupUsername",className:"signup-input",type:"text",placeholder:"Username",value:this.state.signupUsername.replace(/\s/g,"")}),s.a.createElement("input",{onChange:this.updateField,id:"signupEmail",className:"signup-input",type:"text",placeholder:"Email",value:this.state.signupEmail.replace(/\s/g,"")}),s.a.createElement("input",{onChange:this.updateField,id:"signupPassword",className:"signup-input",type:"password",placeholder:"Password",value:this.state.signupPassword}),s.a.createElement("input",{onChange:this.updateField,id:"signupPasswordConfirm",className:"signup-input",type:"password",placeholder:"Confirm Password",value:this.state.signupPasswordConfirm}),s.a.createElement("input",{onChange:this.updateField,id:"signupPromoCode",className:"signup-input",type:"text",placeholder:"Promo Code",value:this.state.signupPromoCode.trim()}),s.a.createElement("input",{className:"submit-button",type:"submit",value:"SIGN UP"}))),s.a.createElement(s.a.Fragment,null,e)}}]),t}(n.Component),x=Object(p.b)(function(e){return{loggedIn:e.loggedIn,authToken:e.authToken,userName:e.userName}})(W),q=(a(133),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).setReduxSelectedArchive=a.setReduxSelectedArchive.bind(Object(v.a)(a)),a.removeArchive=a.removeArchive.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"setReduxSelectedArchive",value:function(){this.props.dispatch({type:"SELECTARCHIVE",selectedArchive:this.props.archive})}},{key:"removeArchive",value:function(e){var t=this;e.preventDefault();var a=this.props,n=a.archive,s=a.authToken;fetch("https://api.bestclosershow.com/resources/".concat(n._id),{method:"delete",headers:{"Content-Type":"application/json",Authorization:s}}).then(function(e){200!==e.status?window.alert("Resource not deleted"):200===e.status&&(window.alert("Resource deleted"),t.props.dispatch({type:"CLEARARCHIVES"}))}).catch(function(e){return console.error("Error: "+e)})}},{key:"render",value:function(){return s.a.createElement(h.b,{to:"/WATCH-ARCHIVE",onClick:this.setReduxSelectedArchive},s.a.createElement("div",{className:"archive-container"},s.a.createElement("h1",{className:"archive-title"},this.props.title),this.props.admin?s.a.createElement("h1",{className:"delete-archive-button",onClick:this.removeArchive},"DELETE"):null,s.a.createElement("p",{className:"archive-description"},this.props.description)))}}]),t}(s.a.Component)),_=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).getResources=a.getResources.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"getResources",value:function(){var e=this;fetch("https://api.bestclosershow.com/resources",{headers:{"Content-Type":"application/json",Authorization:this.props.authToken}}).then(function(e){return 200!==e.status&&console.log("getResources fetch failed"),e.json()}).then(function(t){var a=[];t.docs.forEach(function(t){t.isStreamLink?e.props.dispatch({type:"SETSTREAMADDRESS",streamAddress:t.URL}):a.splice(0,0,t)}),e.props.dispatch({type:"SETARCHIVEDSHOWS",archivedShows:a})}).catch(function(e){return console.error("Error: "+e)})}},{key:"componentDidMount",value:function(){this.getResources()}},{key:"render",value:function(){var e=this,t=this.props.archivedShows.map(function(t){return s.a.createElement(q,{archive:t,dispatch:e.props.dispatch,title:t.title,description:t.description,key:t.title,authToken:e.props.authToken,admin:e.props.admin})});return s.a.createElement("div",{id:"archives-container"},this.props.admin?s.a.createElement(h.b,{to:"/ADD-ARCHIVE"},s.a.createElement("h1",{id:"add-archive-link"},"ADD ARCHIVE")):null,this.props.loggedIn?null:s.a.createElement(m.a,{to:"/ACCOUNT"}),this.props.currentlySubscribed?null:!1===this.props.freeDayTokenUsed?null:s.a.createElement(m.a,{to:"/ACCOUNT"}),s.a.createElement("h1",{onClick:this.getResources,className:t.length<1?"link":null},"ARCHIVED SHOWS"),s.a.createElement("div",null,t))}}]),t}(n.Component),z=Object(p.b)(function(e){return{loggedIn:e.loggedIn,authToken:e.authToken,userName:e.userName,admin:e.admin,archivedShows:e.archivedShows,currentlySubscribed:e.currentlySubscribed,freeDayToken:e.freeDayToken,freeDayTokenUsed:e.freeDayTokenUsed}})(_),J=(a(134),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.archive,t=e.title,a=e.URL,n=e.description,r=e.isStreamLink;return s.a.createElement("div",{id:"watch-archive-container"},this.props.loggedIn?null:s.a.createElement(m.a,{to:"/ACCOUNT"}),this.props.currentlySubscribed?null:this.props.freeDayTokenUsed?s.a.createElement(m.a,{to:"/ACCOUNT"}):null,r?s.a.createElement(m.a,{to:"/STREAM"}):null,s.a.createElement("div",{id:"watch-archive-video-container"},s.a.createElement("video",{id:"archive-video",src:a,type:"video/mp4",autoPlay:!0,controls:!0,controlsList:"nodownload"},"Update to a modern browser to view video."),s.a.createElement("h1",null,t),s.a.createElement("p",{id:"watch-archive-description"},n)),s.a.createElement("div",{id:"archives-chat-wrapper"},s.a.createElement(R,null)))}}]),t}(n.Component)),B=Object(p.b)(function(e){return{loggedIn:e.loggedIn,authToken:e.authToken,userName:e.userName,admin:e.admin,archive:e.selectedArchive,currentlySubscribed:e.currentlySubscribed,freeDayTokenUsed:e.freeDayTokenUsed}})(J),G=(a(135),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={requestSuccessful:!1,recoveryEmail:""},a.updateField=a.updateField.bind(Object(v.a)(a)),a.requestEmailReset=a.requestEmailReset.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"updateField",value:function(e){this.setState(Object(F.a)({},e.target.id,e.target.value))}},{key:"requestEmailReset",value:function(e){var t=this;e.stopPropagation(),e.preventDefault(),fetch("https://api.bestclosershow.com/password-reset-request/".concat(this.state.recoveryEmail)).then(function(e){200!==e.status?window.alert("Email not found"):200===e.status&&t.setState({requestSuccessful:!0})}).catch(function(e){window.alert("An error occured!"+e)})}},{key:"render",value:function(){return s.a.createElement("div",{id:"password-recover-container"},s.a.createElement("form",{className:"form",onSubmit:this.requestEmailReset},s.a.createElement("h1",{className:"form-label"},"GET PASSWORD RESET EMAIL"),s.a.createElement("input",{onChange:this.updateField,id:"recoveryEmail",className:"signup-input",type:"text",placeholder:"Account Email",value:this.state.recoveryEmail}),s.a.createElement("input",{className:"submit-button",type:"submit",value:"REQUEST EMAIL"})),this.state.requestSuccessful?s.a.createElement("div",{id:"request-success-message"},s.a.createElement("h3",null,"Password Recover Email Successfully Sent!"),s.a.createElement("p",null,"If you don't recieve an email within 15 minutes return to this page and try again.")):null)}}]),t}(n.Component)),Y=(a(136),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={title:"",href:"",description:"Archive Description"},a.updateField=a.updateField.bind(Object(v.a)(a)),a.addArchive=a.addArchive.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"updateField",value:function(e){this.setState(Object(F.a)({},e.target.id,e.target.value))}},{key:"addArchive",value:function(e){var t=this;e.preventDefault();var a=this.props.authToken,n=this.state,s=n.title,r=n.href,o=n.description;fetch("https://api.bestclosershow.com/resources/new-resource",{method:"post",headers:{"Content-Type":"application/json",Authorization:a},body:JSON.stringify({title:s,URL:r,description:o})}).then(function(e){200!==e.status?window.alert("Adding Archive Failed. Try again!"):200===e.status&&(window.alert("Archive Added"),t.props.dispatch({type:"CLEARARCHIVES"}))}).catch(function(e){return console.error("Error: "+e)})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("form",{id:"add-resource-form",className:"form",onSubmit:this.addArchive},s.a.createElement("h1",{className:"form-label"},"ADD RESOURCE"),s.a.createElement("input",{onChange:this.updateField,id:"title",className:"signup-input",type:"text",placeholder:"Archive Title",value:this.state.title}),s.a.createElement("input",{onChange:this.updateField,id:"href",className:"signup-input",type:"text",placeholder:"Archive Link Address",value:this.state.href}),s.a.createElement("textarea",{onChange:this.updateField,name:"description",id:"description",form:"add-resource-form",value:this.state.description}),s.a.createElement("input",{className:"submit-button",type:"submit",value:"ADD ARCHIVE"})))}}]),t}(n.Component)),X=Object(p.b)(function(e){return{loggedIn:e.loggedIn,authToken:e.authToken,userName:e.userName,admin:e.admin}})(Y),Q=(a(137),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={resetSuccess:!1,newPassword:"",confirmNewPassword:""},a.sendPasswordResetRequest=a.sendPasswordResetRequest.bind(Object(v.a)(a)),a.updateField=a.updateField.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"updateField",value:function(e){this.setState(Object(F.a)({},e.target.id,e.target.value))}},{key:"sendPasswordResetRequest",value:function(){var e=this;this.state.newPassword!==this.state.confirmNewPassword?window.alert("Passwords do not match!"):fetch("https://api.bestclosershow.com/password-reset-request",{method:"post",body:JSON.stringify({password:this.state.newPassword,confirmPassword:this.state.confirmNewPassword,token:this.props.match.params.resetPasswordAuthToken}),headers:{"Content-Type":"application/json"}}).then(function(t){401===t.status?window.alert("Reset email has expired. Please request another reset email and try again!"):500===t.status?window.alert("Internal server error. Please request another reset email and try again!"):200===t.status&&e.setState({resetSuccess:!0})}).catch(function(e){return window.alert("Error with reset request: ".concat(e))})}},{key:"render",value:function(){return s.a.createElement("div",{id:"password-reset-container"},s.a.createElement("h1",{id:"password-reset-label"},"Reset Password for ",this.props.match.params.userName),s.a.createElement("input",{className:"password-reset-input",value:this.state.newPassword,id:"newPassword",onChange:this.updateField,type:"password",placeholder:"NEW PASSWORD"}),s.a.createElement("input",{className:"password-reset-input",value:this.state.confirmNewPassword,id:"confirmNewPassword",onChange:this.updateField,type:"password",placeholder:"CONFIRM NEW PASSWORD"}),s.a.createElement("button",{className:"password-reset-input",id:"password-reset-submit-button",onClick:this.sendPasswordResetRequest},"Change Password"),this.state.resetSuccess?s.a.createElement("div",{id:"password-reset-success-message"},s.a.createElement("h3",null,"Password Reset Successful!"),s.a.createElement("p",null,"You should now have access to your account!")):null)}}]),t}(n.Component)),$=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(p.a,{store:E},s.a.createElement(h.a,null,s.a.createElement(y,null),s.a.createElement(m.b,{path:"/(|ACCOUNT)/",component:x}),s.a.createElement(m.b,{path:"/STREAM",component:L}),s.a.createElement(m.b,{path:"/ARCHIVES",component:z}),s.a.createElement(m.b,{path:"/WATCH-ARCHIVE",component:B}),s.a.createElement(m.b,{path:"/PASSWORD-RECOVERY",component:G}),s.a.createElement(m.b,{path:"/ADD-ARCHIVE",component:X}),s.a.createElement(m.b,{path:"/RESET-PASSWORD/:resetPasswordAuthToken/:userName",component:Q}),s.a.createElement(k,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},73:function(e,t,a){e.exports=a(138)},78:function(e,t,a){},83:function(e,t,a){},94:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.e028ec73.chunk.js.map