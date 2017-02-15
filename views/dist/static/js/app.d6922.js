webpackJsonp([16,14],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var o=n(1),u=a(o),i=n(432),l=n(350),s=a(l),r=n(16),c=n(144),f=a(c),d=n(345),p=a(d);window.axios=p.default,(0,i.render)(u.default.createElement(r.Provider,{store:f.default},u.default.createElement(s.default,null)),document.getElementById("app"))},17:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0});var o=n(121),u=n(261),i=a(u),l={register:(0,o.createAction)(i.RESGISTER_EVENT,function(e,t,n){return{type:e,fn:t,data:n}}),execute:(0,o.createAction)(i.EXECUTE,function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return{type:e,args:n}})};t.default=l},47:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0});var o=n(121),u=n(260),i=a(u),l={setStatus:(0,o.createAction)(i.SET_STATUS),setAccessToken:(0,o.createAction)(i.SET_ACCESSTOKEN),setUserInfo:(0,o.createAction)(i.SET_USERINFO),subscribeEvents:(0,o.createAction)(i.SUBSCRIBE_EVENTS,function(e,t){return{key:e,fn:t}}),unsubscribeEvents:(0,o.createAction)(i.UNSUBSCRIBE_EVENTS),refresh:(0,o.createAction)(i.REFRESH)};t.default=l},126:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=void 0;a={host:"",withCredentials:!1,socket_host:"http://nightcat.win"},t.default=a},144:function(e,t,n){"use strict";var a,a=n(352);e.exports=a()},260:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SET_STATUS="SET_STATUS",t.SET_ACCESSTOKEN="SET_ACCESSTOKEN",t.SET_USERINFO="SET_USERINFO",t.SUBSCRIBE_EVENTS="SUBSCRIBE_EVENTS",t.UNSUBSCRIBE_EVENTS="UNSUBSCRIBE_EVENTS",t.REFRESH="REFRESH"},261:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.RESGISTER_EVENT="RESGISTER_EVENT",t.EXECUTE="EXECUTE"},262:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.userRequired=t.autoLogin=t.createRoute=t.createChildRoutes=t.createIndexRoute=t.createComponent=void 0;var o=n(144),u=a(o),i=function(e,t,a){return{path:e,getComponent:function(e,a){n.e(0,function(e){a(null,n(253)("./"+t+"/index.jsx").default)})}}},l=function(e){return function(t,a){n.e(0,function(t){a(null,n(253)("./"+e+"/index.jsx").default)})}},s=function(e){return function(t,a){n.e(0,function(t){a(null,{component:n(253)("./"+e+"/index.jsx").default})})}},r=function(e){return function(t,a){!function(t){a(null,e)}(n)}},c=function(e,t,n){var a=u.default.getState().auth.isLogin;if(a)return void n();var o=window.localStorage.token;o?axios.post("/verify",{}).then(function(e){var t=e.data;window.localStorage.token=t.token,u.default.dispatch({type:"SET_STATUS",payload:t}),n()}).catch(function(e){window.localStorage.removeItem("token"),n()}):n()},f=function(e,t){var n=u.default.getState().auth.isLogin;if(!n)return void t("/Sign?message="+encodeURIComponent("请先登录")+"&link="+e.location.pathname)};t.createComponent=l,t.createIndexRoute=s,t.createChildRoutes=r,t.createRoute=i,t.autoLogin=c,t.userRequired=f},342:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(76),u=a(o),i=n(5),l=a(i),s=n(2),r=a(s),c=n(3),f=a(c),d=n(7),p=a(d),m=n(6),h=a(m),E=n(1),v=a(E),g=n(344),_=a(g),y=n(343),S=a(y),k=n(16),C=n(14),b=n(17),T=a(b);n(399),n(398);var w=function(e){function t(e){(0,r.default)(this,t);var n=(0,p.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.state={notice:{show:!1},menu:{}},n.timer=null,n.offsetView=n.offsetView.bind(n),n}return(0,h.default)(t,e),(0,f.default)(t,[{key:"componentWillMount",value:function(){this.props.actions.register("notice",this.openNotice.bind(this)),this.props.actions.register("menu",this.setMenu.bind(this))}},{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){return e.refs.container.style.display="block"})}},{key:"offsetView",value:function(){this.refs.view.classList.toggle("offset")}},{key:"setMenu",value:function(e,t){this.setState({menu:(0,u.default)({show:e},t)})}},{key:"openNotice",value:function(e,t,n){var a=this;this.setState({notice:(0,u.default)({show:!0,message:e},n)}),t&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){a.setState({notice:(0,u.default)({show:!1,message:e},n)})},t))}},{key:"render",value:function(){return v.default.createElement("div",{ref:"container",style:{display:"none"}},v.default.createElement("div",{ref:"view",className:"container"},this.props.children),v.default.createElement(S.default,(0,u.default)({ref:"menu"},this.state.menu,{callback:this.offsetView})),v.default.createElement(_.default,(0,u.default)({key:"Message"},this.state.notice)))}}]),t}(E.Component),N=function(e){return{store:e}},R=function(e){return{actions:(0,C.bindActionCreators)(T.default,e)}};t.default=(0,k.connect)(N,R)(w),w.propTypes={children:E.PropTypes.any,store:E.PropTypes.object,actions:E.PropTypes.any}},343:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),u=a(o),i=n(2),l=a(i),s=n(3),r=a(s),c=n(7),f=a(c),d=n(6),p=a(d),m=n(1),h=a(m),E=n(24),v=a(E),g=n(45);n(396);var _=n(16),y=n(14),S=n(17),k=a(S),C=n(47),b=a(C),T=function(e){function t(e){(0,l.default)(this,t);var n=(0,f.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e));return n.state={sideShow:!1,isLogin:!1,userInfo:null},n.toggleMenu=n.toggleMenu.bind(n),n.signout=n.signout.bind(n),n.linkClick=n.linkClick.bind(n),n.windowClick=n.windowClick.bind(n),n}return(0,p.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){document.body.addEventListener("click",this.windowClick,!1),this.props.authConf.subscribeEvents("Menu",this.getUserInfo.bind(this)),this.getUserInfo()}},{key:"componentWillUnmount",value:function(){this.props.authConf.unsubscribeEvents("Menu"),document.body.removeEventListener("click",this.windowClick,!1)}},{key:"getUserInfo",value:function(){var e=this.props.auth,t=e.isLogin,n=e.userInfo;t&&n&&this.setState({isLogin:!0,userInfo:{name:n.name,profile:n.profile,avatar:n.avatar}})}},{key:"signout",value:function(){var e=this;axios.post("/signout",{}).then(function(t){t.success&&(e.props.actions.execute("notice","退出成功！",2e3,{status:"success"}),e.clearWebStorage(),e.setState({isLogin:!1,userInfo:null}))}).catch(function(t){return e.props.actions.execute("notice",t.message,2e3,{status:"error"})})}},{key:"clearWebStorage",value:function(e){window.localStorage.removeItem("token")}},{key:"windowClick",value:function(e){this.state.sideShow&&!this.refs.sideMenu.contains(e.target)&&this.toggleMenu()}},{key:"toggleMenu",value:function(){this.props.callback&&this.props.callback(),this.setState({sideShow:!this.state.sideShow})}},{key:"gotoSign",value:function(e,t,n){this.linkClick(e),this.context.router.push(t+("?link="+(this.context.router.location.pathname+(n?"&signup=1":""))))}},{key:"linkClick",value:function(e){e.currentTarget.classList.contains("active")||this.toggleMenu()}},{key:"render",value:function(){var e=(0,v.default)("menu",{show:this.props.show,open:this.state.sideShow});return h.default.createElement("div",{className:e},h.default.createElement("div",{className:"menu-btn menu-btn-outside",onClick:this.toggleMenu},h.default.createElement("i",{className:"iconfont icon-menu"}),h.default.createElement("span",null,"Menu")),h.default.createElement("div",{ref:"sideMenu",className:"side-menu"},h.default.createElement("div",{className:"menu-btn menu-btn-inside",onClick:this.toggleMenu},h.default.createElement("i",{className:"iconfont icon-menu"}),h.default.createElement("span",null,"Menu")),h.default.createElement("div",{className:"link-group"},h.default.createElement(g.IndexLink,{to:"/",activeClassName:"active",className:"link",onClick:this.linkClick},h.default.createElement("i",{className:"iconfont icon-home"}),h.default.createElement("span",null,"Home")),h.default.createElement(g.Link,{to:"/games",activeClassName:"active",className:"link",onClick:this.linkClick},h.default.createElement("i",{className:"iconfont icon-game"}),h.default.createElement("span",null,"All Game")),h.default.createElement(g.Link,{to:"/games/local",activeClassName:"active",className:"link",onClick:this.linkClick},h.default.createElement("i",{className:"iconfont icon-singleGames"}),h.default.createElement("span",null,"Single Game")),h.default.createElement(g.Link,{to:"/games/online",activeClassName:"active",className:"link",onClick:this.linkClick},h.default.createElement("i",{className:"iconfont icon-onlineGames"}),h.default.createElement("span",null,"Online Game")),h.default.createElement(g.Link,{to:"/about",activeClassName:"active",className:"link",onClick:this.linkClick},h.default.createElement("i",{className:"iconfont icon-about"}),h.default.createElement("span",null,"About Me"))),this.props.showUserGroup&&(this.state.isLogin?h.default.createElement("div",{className:"user-group"},h.default.createElement("div",{className:"personal-information"},h.default.createElement("img",{className:"avatar",src:this.state.userInfo.avatar}),h.default.createElement("h2",{className:"user-name"},this.state.userInfo.name),h.default.createElement("small",{className:"user-profile"},this.state.userInfo.profile),h.default.createElement("div",{className:"follow"},h.default.createElement("a",{href:"https://github.com/NightCatSama",target:"_blank"},h.default.createElement("i",{className:"iconfont icon-github"})),h.default.createElement("a",{href:"https://twitter.com/NightCatSama",target:"_blank"},h.default.createElement("i",{className:"iconfont icon-twitter"})),h.default.createElement("a",{href:"http://weibo.com/p/1005053909739860",target:"_blank"},h.default.createElement("i",{className:"iconfont icon-sina"})))),h.default.createElement("div",{className:"sign-btn-group"},h.default.createElement(g.Link,{to:"/user",className:"sign-btn blue-btn",onClick:this.linkClick},"My info"),h.default.createElement("a",{href:"javascript:;",className:"sign-btn",onClick:this.signout},"Sign out"))):h.default.createElement("div",{className:"user-group"},h.default.createElement("div",{className:"sign-btn-group"},h.default.createElement(g.Link,{to:"/sign",className:"sign-btn blue-btn",onClick:this.linkClick},"Sign in"),h.default.createElement(g.Link,{to:"/sign?signup=1",className:"sign-btn green-btn",onClick:this.linkClick},"Sign up"))))))}}]),t}(m.Component),w=function(e){return{auth:e.auth}},N=function(e){return{actions:(0,y.bindActionCreators)(k.default,e),authConf:(0,y.bindActionCreators)(b.default,e)}};t.default=(0,_.connect)(w,N)(T),T.propTypes={show:m.PropTypes.bool,callback:m.PropTypes.func,showUserGroup:m.PropTypes.bool,store:m.PropTypes.object,auth:m.PropTypes.object,authConf:m.PropTypes.object,actions:m.PropTypes.object},T.defaultProps={show:!0,showUserGroup:!0},T.contextTypes={router:h.default.PropTypes.any.isRequired}},344:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),u=a(o),i=n(2),l=a(i),s=n(3),r=a(s),c=n(7),f=a(c),d=n(6),p=a(d),m=n(1),h=a(m),E=n(212),v=a(E),g=n(24),_=a(g);n(397);var y=function(e){function t(e){(0,l.default)(this,t);var n=(0,f.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e));return n.shouldComponentUpdate=v.default.shouldComponentUpdate.bind(n),n}return(0,p.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e={loading:"loading",success:"success",error:"error",warning:"warning"},t=(0,_.default)("message",this.props.status,{show:this.props.show}),n=(0,_.default)("iconfont","icon-"+e[this.props.status||"warning"]);return h.default.createElement("div",{className:t,style:this.props.styles},h.default.createElement("i",{className:n}),h.default.createElement("span",null,this.props.message))}}]),t}(m.Component);t.default=y,y.propTypes={show:m.PropTypes.bool,styles:m.PropTypes.object,message:m.PropTypes.any,status:m.PropTypes.string},y.defaultProps={show:!1,styles:null,message:"",status:""}},345:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(147),u=a(o),i=n(324),l=a(i),s=n(144),r=a(s),c=n(126),f=a(c),d=l.default.create({baseURL:f.default.host,withCredentials:f.default.withCredentials});d.interceptors.request.use(function(e){var t=r.default.getState().auth,n=t.isLogin,a=t.accessToken;return n&&a&&(e.headers.accessToken=a),e}),d.interceptors.response.use(function(e){return e.data},function(e){try{return u.default.reject(e.response.data)}catch(e){return u.default.reject({success:!1,message:"未知错误"})}}),t.default=d},346:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u,i=n(61),l=o(i),s=n(18),r=o(s),c=n(121),f=n(260),d=a(f),p={isLogin:!1,accessToken:null,userInfo:null,events:{},signin_time:null},m=(0,c.handleActions)((u={},(0,l.default)(u,d.SET_STATUS,function(e,t){var n=t.payload;return window.localStorage.token=n.token,(0,r.default)({},e,{isLogin:!0,signin_time:new Date},n)}),(0,l.default)(u,d.SET_ACCESSTOKEN,function(e,t){var n=t.payload;return(0,r.default)({},e,{accessToken:n})}),(0,l.default)(u,d.SET_USERINFO,function(e,t){var n=t.payload;return(0,r.default)({},e,{userInfo:(0,r.default)(e.userInfo,n)})}),(0,l.default)(u,d.SUBSCRIBE_EVENTS,function(e,t){var n=t.payload,a=(0,r.default)({},e);return a.events[n.key]=n.fn,a}),(0,l.default)(u,d.UNSUBSCRIBE_EVENTS,function(e,t){var n=t.payload,a=(0,r.default)({},e);return delete a[n],a}),(0,l.default)(u,d.REFRESH,function(e,t){t.payload;for(var n in e.events)e.events[n]();return e}),u),p);t.default=m},347:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u,i=n(61),l=o(i),s=n(18),r=o(s),c=n(121),f=n(261),d=a(f),p={},m=(0,c.handleActions)((u={},(0,l.default)(u,d.RESGISTER_EVENT,function(e,t){var n=t.payload,a={};return a[n.type]=n.fn,(0,r.default)({},e,a)}),(0,l.default)(u,d.EXECUTE,function(e,t){var n=t.payload,a=n.type,o=n.args;return"function"==typeof e[a]&&e[a].apply(null,o),(0,r.default)({},e)}),u),p);t.default=m},348:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(14),u=n(347),i=a(u),l=n(346),s=a(l),r=(0,o.combineReducers)({eventBus:i.default,auth:s.default});t.default=r},349:function(e,t,n){"use strict";var a=n(262);e.exports=[{path:"sign",getComponent:function(e,t){n.e(5,function(e){t(null,n(134).default)})}},{path:"active_account",getComponent:function(e,t){n.e(9,function(e){t(null,n(128).default)})}},{path:"about",getComponent:function(e,t){n.e(13,function(e){t(null,n(127).default)})}},{path:"my-friends",getComponent:function(e,t){n.e(6,function(e){t(null,n(132).default)})}},{path:"user(/:account)",onEnter:a.userRequired,getComponent:function(e,t){n.e(10,function(e){t(null,n(143).default)})},getIndexRoute:function(e,t){n.e(11,function(e){t(null,{component:n(142).default})})},getChildRoutes:function(e,t){!function(e){t(null,[{path:"/game-data(/:account)",getComponent:function(e,t){n.e(12,function(e){t(null,n(141).default)})}}])}(n)}},{path:"games(/:type)",getComponent:function(e,t){n.e(7,function(e){t(null,n(129).default)})}},{path:"single-games",onEnter:a.userRequired,getComponent:function(e,t){n.e(1,function(e){t(null,n(104).default)})},getIndexRoute:function(e,t){n.e(1,function(e){t(null,{component:n(104).default})})},getChildRoutes:function(e,t){!function(e){t(null,[{path:"factory",getComponent:function(e,t){n.e(4,function(e){t(null,n(136).default)})}}])}(n)}},{path:"online-games",onEnter:a.userRequired,getComponent:function(e,t){n.e(2,function(e){t(null,n(103).default)})},getIndexRoute:function(e,t){n.e(2,function(e){t(null,{component:n(103).default})})},getChildRoutes:function(e,t){!function(e){t(null,[{path:"gobang",getComponent:function(e,t){n.e(3,function(e){t(null,n(133).default)})}}])}(n)}}]},350:function(e,t,n){"use strict";e.exports=n(351)},351:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),u=a(o),i=n(2),l=a(i),s=n(3),r=a(s),c=n(7),f=a(c),d=n(6),p=a(d),m=n(1),h=a(m),E=n(45),v=n(262),g=n(342),_=a(g),y=n(349),S=a(y),k={path:"/",component:_.default,getIndexRoute:function(e,t){n.e(8,function(e){t(null,{component:n(130).default})})},childRoutes:S.default,onEnter:v.autoLogin},C=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return h.default.createElement("div",null,h.default.createElement(E.Router,{history:E.browserHistory,routes:k}))}}]),t}(m.Component);t.default=C},352:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var o=n(14),u=n(348),i=a(u),l=function(e){var t=(0,o.createStore)(i.default,e,window.devToolsExtension?window.devToolsExtension():void 0);return t};e.exports=l},396:function(e,t){},397:function(e,t){},398:function(e,t){},399:function(e,t){}});