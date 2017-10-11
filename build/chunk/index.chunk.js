webpackJsonp([1],{125:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),i=a(7),u=l(i),o=a(83),m=l(o),f=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={publications:[]},a}return c(t,e),s(t,[{key:"componentDidMount",value:function(){this.getPublications()}},{key:"getPublications",value:function(){var e=this;(0,m.default)("https://api.github.com/users/zincode/repos").then(function(e){return e.json()}).then(function(t){t.message||e.setState({publications:t.filter(function(e){return!e.fork}).sort(function(e,t){return e.stargazers_count<t.stargazers_count}).slice(0,8)})})}},{key:"render",value:function(){var e=this.props,t=e.basics,a=e.work,l=e.project,n=e.education,r=e.awards,c=e.skills,s=e.interests,i=e.references,o=this.state.publications;return u.default.createElement("section",{className:"col-md-9 card-wrapper pull-right"},u.default.createElement("div",{className:"card background-card"},u.default.createElement("h4",{className:"text-uppercase"},"背景资料"),u.default.createElement("hr",null),u.default.createElement("div",{className:"background-details"},u.default.createElement("div",{className:"detail",id:"about"},u.default.createElement("div",{className:"icon"},u.default.createElement("i",{className:"fs-lg icon-board"}),u.default.createElement("span",{className:"mobile-title"},"自我描述")),u.default.createElement("div",{className:"info"},u.default.createElement("h4",{className:"title text-uppercase"},"自我描述"),u.default.createElement("ul",{className:"list-unstyled clear-margin"},u.default.createElement("li",{className:"card card-nested clearfix"},u.default.createElement("div",{className:"content mop-wrapper"},u.default.createElement("ul",null,t.summary.map(function(e,t){return u.default.createElement("li",{key:t,className:"mop-wrapper"},u.default.createElement("p",null,e))}))))))),u.default.createElement("div",{className:"detail",id:"work-experience"},u.default.createElement("div",{className:"icon"},u.default.createElement("i",{className:"fs-lg icon-office"}),u.default.createElement("span",{className:"mobile-title"},"工作经历")),u.default.createElement("div",{className:"info"},u.default.createElement("h4",{className:"title text-uppercase"},"工作经历"),u.default.createElement("ul",{className:"list-unstyled clear-margin"},a.map(function(e,t){return u.default.createElement("li",{key:t,className:"card card-nested clearfix"},u.default.createElement("div",{className:"content"},u.default.createElement("div",{className:"header"},u.default.createElement("h4",{className:"header-title"},u.default.createElement("a",{href:e.website,target:"_blank"},e.company)),u.default.createElement("p",{className:"header-text"},e.position)),u.default.createElement("p",{className:"text-muted"},u.default.createElement("small",null,u.default.createElement("span",{className:"space-right"},e.startDate," - ",e.endDate))),u.default.createElement("div",{className:"mop-wrapper space-bottom"},u.default.createElement("p",null,e.summary)),u.default.createElement("ul",null,e.highlights.map(function(e,t){return u.default.createElement("li",{key:t,className:"mop-wrapper"},u.default.createElement("p",null,e))}))))})))),u.default.createElement("div",{className:"detail",id:"education"},u.default.createElement("div",{className:"icon"},u.default.createElement("i",{className:"fs-lg icon-graduation-cap"}),u.default.createElement("span",{className:"mobile-title"},"教育经历")),u.default.createElement("div",{className:"info"},u.default.createElement("h4",{className:"title text-uppercase"},"教育经历"),u.default.createElement("div",{className:"content"},u.default.createElement("ul",{className:"list-unstyled clear-margin"},n.map(function(e,t){return u.default.createElement("li",{key:t,className:"card card-nested"},u.default.createElement("div",{className:"content"},u.default.createElement("p",{className:"clear-margin relative"},u.default.createElement("strong",null,e.institution,"，",e.studyType,"， "),e.area),u.default.createElement("p",{className:"text-muted"},u.default.createElement("small",null,e.startDate," - ",e.endDate)),u.default.createElement("i",null,e.gpa),u.default.createElement("div",{className:"space-top labels"},e.courses.map(function(e,t){return u.default.createElement("span",{key:t,className:"label label-info"},e)}))))}))))),u.default.createElement("div",{className:"detail",id:"project-experience"},u.default.createElement("div",{className:"icon"},u.default.createElement("i",{className:"fs-lg icon-child"}),u.default.createElement("span",{className:"mobile-title"},"项目经验")),u.default.createElement("div",{className:"info"},u.default.createElement("h4",{className:"title text-uppercase"},"项目经验"),u.default.createElement("div",{className:"content"},u.default.createElement("ul",{className:"list-unstyled clear-margin"},l.map(function(e,t){return u.default.createElement("li",{key:t,className:"card card-nested"},u.default.createElement("div",{className:"content"},u.default.createElement("div",{className:"header"},u.default.createElement("h4",{className:"header-title"},u.default.createElement("a",{href:e.website,target:"_blank"},e.organization)),u.default.createElement("p",{className:"header-text"},e.position)),u.default.createElement("p",{className:"text-muted"},u.default.createElement("small",null,e.startDate," - ",e.endDate)),u.default.createElement("div",{className:"mop-wrapper space-bottom"},u.default.createElement("p",null,"技术栈：",e.summary)),u.default.createElement("ul",null,e.highlights.map(function(e,t){return u.default.createElement("li",{key:t,className:"mop-wrapper"},u.default.createElement("p",null,e))}))))}))))),u.default.createElement("div",{className:"detail",id:"publications"},u.default.createElement("div",{className:"icon"},u.default.createElement("i",{className:"fs-lg icon-newspaper"}),u.default.createElement("span",{className:"mobile-title"},"作品展示（链接可访问）")),u.default.createElement("div",{className:"info"},u.default.createElement("h4",{className:"title text-uppercase"},"作品展示（链接可访问）"),u.default.createElement("div",{className:"content"},u.default.createElement("ul",{className:"list-unstyled clear-margin"},o.map(function(e,t){return u.default.createElement("li",{key:t,className:"card card-nested"},u.default.createElement("div",{className:"content"},u.default.createElement("div",{className:"header"},u.default.createElement("h4",{className:"header-title"},u.default.createElement("a",{href:e.html_url,target:"_blank"},e.name)),u.default.createElement("p",{className:"header-text"},e.owner.login)),u.default.createElement("p",{className:"text-muted"},u.default.createElement("small",null,e.releaseDate)),u.default.createElement("div",{className:"mop-wrapper"},u.default.createElement("p",null,e.description))))}))))),u.default.createElement("div",{className:"detail",id:"skills"},u.default.createElement("div",{className:"icon"},u.default.createElement("i",{className:"fs-lg icon-tools"}),u.default.createElement("span",{className:"mobile-title"},"技能评价")),u.default.createElement("div",{className:"info"},u.default.createElement("h4",{className:"title text-uppercase"},"技能评价"),u.default.createElement("div",{className:"content"},u.default.createElement("ul",{className:"list-unstyled clear-margin"},c.map(function(e,t){return u.default.createElement("li",{key:t,className:"card card-nested card-skills"},u.default.createElement("div",{className:"skill-info"},u.default.createElement("strong",null,e.name),u.default.createElement("div",{className:"space-top labels"},e.keywords.map(function(e,t){return u.default.createElement("span",{key:t,className:"label label-info"},e)}))))}))))),u.default.createElement("div",{className:"detail",id:"awards"},u.default.createElement("div",{className:"icon"},u.default.createElement("i",{className:"fs-lg icon-trophy"}),u.default.createElement("span",{className:"mobile-title"},"荣誉证书")),u.default.createElement("div",{className:"info"},u.default.createElement("h4",{className:"title text-uppercase"},"荣誉证书"),u.default.createElement("div",{className:"content"},u.default.createElement("ul",{className:"list-unstyled clear-margin"},r.map(function(e,t){return u.default.createElement("li",{key:t,className:"card card-nested"},u.default.createElement("div",{className:"content"},u.default.createElement("p",{className:"clear-margin"},u.default.createElement("strong",null,e.title," "),e.awarder),u.default.createElement("p",{className:"text-muted"},u.default.createElement("small",null,e.date)),u.default.createElement("div",{className:"mop-wrapper"},u.default.createElement("p",null,e.summary))))}))))),u.default.createElement("div",{className:"detail",id:"interests"},u.default.createElement("div",{className:"icon"},u.default.createElement("i",{className:"fs-lg icon-heart"}),u.default.createElement("span",{className:"mobile-title"},"兴趣爱好")),u.default.createElement("div",{className:"info"},u.default.createElement("h4",{className:"title text-uppercase"},"兴趣爱好"),u.default.createElement("div",{className:"content"},u.default.createElement("ul",{className:"list-unstyled clear-margin"},s.map(function(e,t){return u.default.createElement("li",{key:t,className:"card card-nested"},u.default.createElement("p",null,u.default.createElement("strong",null,e.name)),u.default.createElement("div",{className:"space-top labels"},e.keywords.map(function(e,t){return u.default.createElement("span",{key:t,className:"label label-info"},e)})))}))))),u.default.createElement("div",{className:"detail",id:"references"},u.default.createElement("div",{className:"icon"},u.default.createElement("i",{className:"fs-lg icon-thumbs-up"}),u.default.createElement("span",{className:"mobile-title"},"座右铭")),u.default.createElement("div",{className:"info"},u.default.createElement("h4",{className:"title text-uppercase"},"座右铭"),u.default.createElement("div",{className:"content"},u.default.createElement("ul",{className:"list-unstyled clear-margin"},i.map(function(e,t){return u.default.createElement("li",{key:t,className:"card card-nested"},u.default.createElement("blockquote",{className:"quote"},u.default.createElement("p",null,e.reference),u.default.createElement("small",null,e.name)))}))))))))}}]),t}(u.default.Component);t.default=f},126:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),i=a(7),u=l(i),o=function(e){function t(e){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return c(t,e),s(t,[{key:"render",value:function(){return u.default.createElement("section",{className:"col-md-12 card-wrapper"},u.default.createElement("div",{className:"footer"},"简历模板由 skyvow 设计开发，最后更新于",u.default.createElement("span",{className:"date"},"2017-09-26")))}}]),t}(u.default.Component);t.default=o},127:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),i=a(7),u=l(i),o=a(46),m=l(o),f=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handlerClick=function(e){var t=a.state.isOpen;a.setState({isOpen:!t})},a.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&(t.scrollIntoView(),a.setState({isOpen:!1}))}},a.state={isOpen:!1},a}return c(t,e),s(t,[{key:"render",value:function(){var e=this,t=this.state.isOpen,a=(0,m.default)({"js-floating-nav-trigger":!0,"floating-nav-trigger":!0,"is-open":t}),l=(0,m.default)({"floating-nav":!0,"js-floating-nav":!0,"is-visible":t});return u.default.createElement("section",{className:"col-md-12 nav-card-wrapper"},u.default.createElement("a",{className:a,href:"javascript:;",onClick:this.handlerClick},u.default.createElement("i",{className:"icon-bars"}),u.default.createElement("span",{className:"close-icon"},"×")),u.default.createElement("a",{className:a,href:"javascript:;",onClick:this.props.renderHTMLtoPDF,style:{bottom:"80px"}},u.default.createElement("i",{className:"glyphicon glyphicon-download-alt",style:{lineHeight:"50px"}})),u.default.createElement("nav",{className:l},u.default.createElement("ul",{className:"list-unstyled"},u.default.createElement("li",null,u.default.createElement("a",{href:"javascript:;",onClick:function(){return e.scrollToAnchor("about")}},u.default.createElement("i",{className:"mr-10 icon-board"}),"自我描述")),u.default.createElement("li",null,u.default.createElement("a",{href:"javascript:;",onClick:function(){return e.scrollToAnchor("work-experience")}},u.default.createElement("i",{className:"mr-10 icon-office"}),"工作经历")),u.default.createElement("li",null,u.default.createElement("a",{href:"javascript:;",onClick:function(){return e.scrollToAnchor("education")}},u.default.createElement("i",{className:"mr-10 icon-graduation-cap"}),"教育经历")),u.default.createElement("li",null,u.default.createElement("a",{href:"javascript:;",onClick:function(){return e.scrollToAnchor("project-experience")}},u.default.createElement("i",{className:"mr-10 icon-child"}),"项目经验")),u.default.createElement("li",null,u.default.createElement("a",{href:"javascript:;",onClick:function(){return e.scrollToAnchor("publications")}},u.default.createElement("i",{className:"mr-10 icon-newspaper"}),"作品展示")),u.default.createElement("li",null,u.default.createElement("a",{href:"javascript:;",onClick:function(){return e.scrollToAnchor("skills")}},u.default.createElement("i",{className:"mr-10 icon-tools"}),"技能评价")),u.default.createElement("li",null,u.default.createElement("a",{href:"javascript:;",onClick:function(){return e.scrollToAnchor("awards")}},u.default.createElement("i",{className:"mr-10 icon-trophy"}),"荣誉证书")),u.default.createElement("li",null,u.default.createElement("a",{href:"javascript:;",onClick:function(){return e.scrollToAnchor("interests")}},u.default.createElement("i",{className:"mr-10 icon-heart"}),"兴趣爱好")),u.default.createElement("li",null,u.default.createElement("a",{href:"javascript:;",onClick:function(){return e.scrollToAnchor("references")}},u.default.createElement("i",{className:"mr-10 icon-thumbs-up"}),"座右铭")))))}}]),t}(u.default.Component);t.default=f},128:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),u=a(7),o=l(u),m=a(46),f=l(m),d=function(e){function t(e){return r(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return s(t,e),i(t,[{key:"render",value:function(){var e="https://s.gravatar.com/avatar/9acdb04e603c1cac2b893190f6dd5911?s=100&amp;r=pg&amp;d=mm",t=this.props,a=t.basics,l=t.languages;return o.default.createElement("section",{className:"col-md-3 card-wrapper profile-card-wrapper affix"},o.default.createElement("div",{className:"card profile-card"},o.default.createElement("span",{className:"profile-pic-container"},o.default.createElement("div",{className:"profile-pic"},o.default.createElement("img",{className:"media-object img-circle center-block",src:a.picture||e})),o.default.createElement("div",{className:"name-and-profession text-center"},o.default.createElement("h3",null,o.default.createElement("b",null,a.name)),o.default.createElement("h4",null,o.default.createElement("b",null,a.position)),o.default.createElement("h5",{className:"text-muted"},a.label))),o.default.createElement("hr",null),o.default.createElement("div",{className:"contact-details clearfix"},o.default.createElement("div",{className:"detail"},o.default.createElement("span",{className:"icon"},o.default.createElement("i",{className:"icon fs-lg icon-profile"})),o.default.createElement("span",{className:"info"},a.gender," ",a.age,"岁 ",a.worklife,"年工作经验")),o.default.createElement("div",{className:"detail"},o.default.createElement("span",{className:"icon"},o.default.createElement("i",{className:"icon fs-lg icon-location"})),o.default.createElement("span",{className:"info"},a.location)),o.default.createElement("div",{className:"detail"},o.default.createElement("span",{className:"icon"},o.default.createElement("i",{className:"icon fs-lg icon-phone"})),o.default.createElement("span",{className:"info"},a.phone)),o.default.createElement("div",{className:"detail"},o.default.createElement("span",{className:"icon"},o.default.createElement("i",{className:"icon fs-lg icon-mail"})),o.default.createElement("span",{className:"info"},o.default.createElement("a",{className:"link-disguise",href:"mailto:"+a.email},a.email))),o.default.createElement("div",{className:"detail"},o.default.createElement("span",{className:"icon"},o.default.createElement("i",{className:"icon fs-lg icon-link"})),o.default.createElement("span",{className:"info"},o.default.createElement("a",{href:a.website,target:"_blank"},a.website))),o.default.createElement("div",{className:"detail"},o.default.createElement("span",{className:"icon",title:"Languages I speak"},o.default.createElement("i",{className:"icon fs-lg icon-language"})),l.map(function(e,t){return o.default.createElement("span",{key:t,className:"info"},e.language)}))),o.default.createElement("hr",null),o.default.createElement("div",{className:"social-links text-center"},o.default.createElement("div",null,a.profiles.map(function(e,t){var a=(0,f.default)(n({iconfont:!0,"social-link":!0},"iconfont-"+e.network,e.network));return o.default.createElement("a",{key:t,className:a,href:e.url,target:"_blank"})})))))}}]),t}(o.default.Component);t.default=d},129:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),i=a(7),u=l(i),o=a(82),m=l(o),f=a(84),d=l(f),p=a(128),E=l(p),h=a(126),b=l(h),N=a(125),v=l(N),y=a(127),g=l(y),w=a(132),k=l(w),_=function(e){function t(){var e,a,l,c;n(this,t);for(var s=arguments.length,i=Array(s),u=0;u<s;u++)i[u]=arguments[u];return a=l=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),l.renderHTMLtoPDF=function(){(0,m.default)(document.body,{onrendered:function(e){var t=e.width,a=e.height,l=t/592.28*841.89,n=a,r=0,c=595.28,s=592.28/t*a,i=e.toDataURL("image/jpeg",1),u=new d.default("","pt","a4");if(n<l)u.addImage(i,"JPEG",0,0,c,s);else for(;n>0;)u.addImage(i,"JPEG",0,r,c,s),n-=l,r-=841.89,n>0&&u.addPage();u.save("王小勇-web前端.pdf")}})},c=a,r(l,c)}return c(t,e),s(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("loading");e.style.display="none"}},{key:"render",value:function(){return u.default.createElement("div",{className:"container-fluid"},u.default.createElement("div",{className:"row main clearfix"},u.default.createElement(g.default,{renderHTMLtoPDF:this.renderHTMLtoPDF}),u.default.createElement(E.default,k.default),u.default.createElement(v.default,k.default),u.default.createElement(b.default,null)))}}]),t}(u.default.Component);t.default=_},132:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={basics:{position:"web前端工程师",name:"王小勇",gender:"男",age:"25",worklife:"1.5",label:"Different but not less",picture:"http://oaxfgzulv.bkt.clouddn.com/avatar.jpg",email:"838432498@qq.com",phone:"18333116993",website:"https://github.com/zincode",summary:["个人主攻 web 前端方向，有一定nodejs和php经验。","喜欢关注 web 前端相关新技术，对于新技术有很强的学习兴趣。","喜欢设计界面优美的程序","热爱前端这份工作，也热爱一切美好的事物，对于我来说，是一种责任、是一种快乐。"],location:"石家庄市桥西区",profiles:[{network:"github",username:"",url:"https://github.com/ZinCode"},{network:"zhihu",username:"JSMotion",url:"https://www.zhihu.com/people/hzimmer/activities"}]},work:[{company:"北京鲜柚科技有限公司",position:"web前端工程师",website:"",startDate:"2016-10",endDate:"2017-08",summary:"北京鲜柚科技有限公司",highlights:["庖丁项目开发组","使用vue框架编写债有主官网","重构债有主微信网页版代码","开发相应债有主微信小程序","负责AutoDoc网站功能模块及后台管理系统的设计","开发waterfall前台功能页面","负责债有主网站功能模块及后台管理系统的设计","负责配合后台开发人员，完成页面的交互及接口对接"]}],project:[{organization:"债有主官网、债有主后台管理、AutoDoc后台管理、waterfall后台管理",position:"web前端工程师",website:"",startDate:"2016.10",endDate:"2017.03",summary:"Vue2.0 + Vue-router + Vuex + elementUI + webpack + ES6 + postcss",highlights:["基于 vue + elementUI 前端框架开发，采用 webpack 作为自动化构建工具","基于 nodejs 开发环境，使用 webpack 自动化构建工具，实时编译代码，热更新","采用 vuex 管理前端数据流，其中债有主官网实现微信登陆以及支付功能","使用vue2.0重构债有主后台管理，使操作更加方便，优化代码质量"]},{organization:"债有主微信网页",position:"web前端工程师",website:"公众号债有主",startDate:"2017.03",endDate:"2017.04",summary:"Vue2.3 + Vuex + Vue-router + MintUI + Webpack + ES7 + jQueryMobileUI",highlights:["使用vue + mintUI + jqueryMobileUI前端框架开发，使用ES7最新语法，async/await处理异步请求","实现用户的浏览、订阅、分享、标记、事件提醒、查看消息记录等常用功能，","通过可视化公式来查看金融文档符合工具"]},{organization:"债有主微信小程序",position:"web前端工程师",website:"对应债有主微信小程序",startDate:"2017.04",endDate:"2017.05",summary:"微信小程序",highlights:["基于微信小程序自有框架开发，使用promise全局处理微信异步请求接口","实现功能与债有主微信网页版相同，关联相应公众号，优化用户体验","抽离公共组件，增强代码复用性，关联原有PC用户，打通整个用户数据"]}],education:[{institution:"河北科技大学",area:"自动化",studyType:"本科",startDate:"2011-09",endDate:"2015-06",gpa:"4.0",courses:["C语言","模电与数电","微机原理"]}],awards:[{title:"全国计算机二级证书",date:"2013-11-01",awarder:"教育部考试中心",summary:""}],publications:[{name:"蝶恋果微信小程序",publisher:"JSM",releaseDate:"2017-10",website:"https://github.com/ZinCode/dielianguo",summary:"微信小程序-商城，提供商品浏览，分类，下单，支付(未完善)等一系列电商的基础功能",highlights:["asdfasdf"]},{name:"m-mall-admin",publisher:"skyvow",releaseDate:"2016-12",website:"https://github.com/skyvow/m-mall-admin",summary:"微信小程序-小商城后台（基于 nodejs 实现 restful API）"},{name:"skyvow.github.io",publisher:"skyvow",releaseDate:"2017-4",website:"https://github.com/skyvow/skyvow.github.io",summary:"My resume - 基于 React + React-router + ES6 前端项目"}],skills:[{name:"前端",level:"master",keywords:["HTML","CSS","Javascript","Sass","Postcss","Webpack","Vue","React","微信小程序"]},{name:"后端",level:"master",keywords:["Nodejs","express","PHP","thinkphp5.0"]}],languages:[{language:"中文",fluency:"母语"}],interests:[{name:"社交",keywords:["知乎","掘金","微信","虾米","网易云"]},{name:"爱好",keywords:["骑行","果粉","会修电脑😄"]}],references:[{name:"鲁迅（我确实说过这句话）",reference:"没事儿就多喝水"}]}}});