(this.webpackJsonpkcmf2=this.webpackJsonpkcmf2||[]).push([[0],{168:function(e,A,n){},170:function(e,A,n){},291:function(e,A,n){"use strict";n.r(A);var t,c=n(0),i=n(29),l=n.n(i),o=(n(168),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,301)).then((function(A){var n=A.getCLS,t=A.getFID,c=A.getFCP,i=A.getLCP,l=A.getTTFB;n(e),t(e),c(e),i(e),l(e)}))}),a=n(84),s=n(61),r=(n(121),n(81)),j=n.n(r),O=n(163);!function(e){e.AUTH_TOKEN="AUTH_TOKEN"}(t||(t={}));var b,d,u,h,x,f,g,P,p=function(){var e=Object(O.a)("authToken",(function(){return e=t.AUTH_TOKEN,JSON.parse(localStorage.getItem(e)||"null");var e})),A=e.data,n=e.mutate;return{authToken:A,isLoggedIn:!!A,authAction:{login:function(){var e,A;return e=t.AUTH_TOKEN,A="123",localStorage.setItem(e,JSON.stringify(A)),n()},logout:function(){var e;return e=t.AUTH_TOKEN,localStorage.removeItem(e),window.location.reload(),n()}}}},m=n(27),N=(n(170),n(171),n(161)),v=n.n(N),C=n(25),y=(n(101),n(66)),M=n.n(y),I=(n(71),n(44)),B=n.n(I),w=(n(123),n(93)),T=n.n(w),k=(n(124),n(60)),E=n.n(k),Q=n(26),F=n(53),D=n(3),R=function(e){var A=e.children,n=e.center,t=e.justifyCenter,c=e.alignCenter,i=e.spaceBetween,l=e.direction,o={width:"100%",height:"100%",padding:25,display:"flex",flexDirection:void 0===l?"column":l,justifyContent:(i?"space-between":t&&"center")||n&&"center"||void 0,alignItems:c||n?"center":void 0};return Object(D.jsx)(F.Content,{style:o,children:A})},Y=Object(Q.b)(v.a)(b||(b=Object(C.a)(["\n  width: 100%;\n"]))),K=Q.b.div(d||(d=Object(C.a)(["\n  justify-content: center;\n  font-size: 12px;\n"]))),S=function(){return Object(D.jsx)(R,{children:Object(D.jsxs)(M.a,{gutter:10,style:{alignItems:"flex-end"},children:[Object(D.jsxs)(E.a,{span:4,children:[Object(D.jsx)(K,{children:"\uac80\uc0c9\uc870\uac74"}),Object(D.jsx)(Y,{options:[{label:"\uace0\uac1d\ubc88\ud638",value:"\uace0\uac1d\ubc88\ud638"},{label:"\ud55c\uae00\uc0c1\ud638",value:"\ud55c\uae00\uc0c1\ud638"},{label:"\uc601\ubb38\uc0c1\ud638",value:"\uc601\ubb38\uc0c1\ud638"},{label:"\ub2f4\ub2f9\uc790\uba85",value:"\ub2f4\ub2f9\uc790\uba85"},{label:"\uc804\ud654\ubc88\ud638",value:"\uc804\ud654\ubc88\ud638"},{label:"\uc0ac\uc5c5\uc790\ubc88\ud638",value:"\uc0ac\uc5c5\uc790\ubc88\ud638"},{label:"\ub300\ud45c\uc790\uba85",value:"\ub300\ud45c\uc790\uba85"},{label:"\ubc95\uc778\ubc88\ud638",value:"\ubc95\uc778\ubc88\ud638"}]})]}),Object(D.jsxs)(E.a,{span:4,children:[Object(D.jsx)(K,{children:"\uac80\uc0c9\uc5b4"}),Object(D.jsx)(T.a,{})]}),Object(D.jsx)(E.a,{children:Object(D.jsx)(B.a,{type:"primary",children:"\uac80\uc0c9"})})]})})},L=function(){return Object(D.jsx)("div",{children:"home"})},U=(n(258),n(114)),G=n.n(U),H=(n(153),n(99)),z=n.n(H),V=n(298),W=n(299),q=n(300),J=n(15),Z=Object(Q.b)(T.a)(u||(u=Object(C.a)(["\n  ","\n  height: 40px;\n"])),(function(e){return e.message&&Object(Q.a)(h||(h=Object(C.a)(["\n      border-color: red;\n    "])))})),X=Q.b.p(x||(x=Object(C.a)(["\n  padding: 6px 12px;\n  color: red;\n  font-size: 14px;\n"]))),_=function(e){return Object(D.jsxs)(M.a,{children:[Object(D.jsx)(Z,Object(J.a)(Object(J.a)({},e),{},{message:e.message})),!!e.message&&Object(D.jsx)(X,{children:e.message})]})},$=Object(Q.b)(G.a)(f||(f=Object(C.a)(["\n  width: 70%;\n"]))),ee=Q.b.p(g||(g=Object(C.a)(["\n  font-size: 16px;\n  line-height: 16px;\n"]))),Ae=function(e){var A=p(),n=A.authToken,t=A.authAction;return Object(D.jsx)(R,{center:!0,children:Object(D.jsxs)($,{direction:"vertical",size:12,children:[Object(D.jsx)(ee,{children:"Enter Your Credentials"}),Object(D.jsx)(_,{placeholder:"Enter your ID",prefix:Object(D.jsx)(V.a,{}),suffix:Object(D.jsx)(z.a,{title:"Enter your ID",children:Object(D.jsx)(W.a,{style:{color:"rgba(0,0,0,.45)"}})})}),Object(D.jsx)(_,{message:"\ube44\ubc00\ubc88\ud638\uac00 \ud2c0\ub838\uc500",type:"password",placeholder:"Enter your Password",prefix:Object(D.jsx)(q.a,{}),suffix:Object(D.jsx)(z.a,{title:"Enter your Password",children:Object(D.jsx)(W.a,{style:{color:"rgba(0,0,0,.45)"}})})}),Object(D.jsx)(B.a,{type:"primary",onClick:function(){return t.login(),console.log("data",n),void e.history.push(P.HOME)},children:"Login"})]})})};!function(e){e.HOME="/",e.LOGIN="/login",e.CUSTOMER_LIST="/customerList"}(P||(P={}));var ne,te,ce,ie,le,oe,ae,se,re,je,Oe,be=[{path:P.LOGIN,exact:!0,component:Ae}],de=[{path:P.HOME,exact:!0,component:L},{path:P.CUSTOMER_LIST,exact:!0,component:S}],ue=n(12),he=Object(s.b)({key:"@modal/globalModalVisibleAtom",default:!1}),xe=Object(s.b)({key:"@modal/globalModalContentsAtom",default:null}),fe=function(){var e=Object(s.c)(he),A=Object(ue.a)(e,2),n=A[0],t=A[1],i=Object(s.c)(xe),l=Object(ue.a)(i,2),o=l[0],a=l[1],r=Object(c.useCallback)((function(e){a(e),t(!0)}),[t,a]),j=Object(c.useCallback)((function(){t(!1)}),[t]),O=Object(c.useCallback)((function(){a(null)}),[a]);return{visible:n,setVisible:t,info:o,globalModalActions:{open:r,close:j,resetContents:O}}},ge=Object(Q.b)(F.Header)(ne||(ne=Object(C.a)(["\n  width: 100vw;\n  height: 150px;\n  background-color: #ffcc00;\n  justify-content: center;\n  border-bottom: 6px solid #d40511;\n  display: flex;\n"]))),Pe=Object(Q.b)(M.a)(te||(te=Object(C.a)(["\n  width: 100%;\n"]))),pe=Q.b.div(ce||(ce=Object(C.a)(["\n  align-items: center;\n  flex: 1;\n  display: flex;\n  font-size: 30px;\n  font-weight: bold;\n  color: white;\n  height: 100%;\n"]))),me=Q.b.img(ie||(ie=Object(C.a)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 127px;\n  height: 17px;\n"]))),Ne=function(e){var A=e.title,n=p(),t=n.authAction,c=n.isLoggedIn,i=fe().globalModalActions;return Object(D.jsx)(ge,{children:Object(D.jsxs)(Pe,{children:[Object(D.jsxs)(E.a,{span:22,children:[Object(D.jsx)(me,{src:"data:image/gif;base64,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"}),Object(D.jsx)(pe,{children:A})]}),c&&Object(D.jsx)(E.a,{children:Object(D.jsx)(B.a,{type:"primary",onClick:function(){i.open({type:"confirm",contents:"\ub85c\uadf8\uc544\uc6c3\uc744 \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",onClickConfirm:function(){return t.logout()}})},children:"\ub85c\uadf8\uc544\uc6c3"})})]})})},ve=(n(265),n(38)),Ce=n.n(ve),ye=n(75),Me=n.n(ye),Ie=n(80),Be=n.n(Ie),we=function(e){var A=Object(m.g)();return console.log(e),Object(D.jsxs)(Me.a,{style:{backgroundColor:"#fff"},collapsible:!0,collapsedWidth:100,children:[Object(D.jsx)("div",{className:"logo"}),Object(D.jsxs)(Ce.a,{className:"site-layout-background",theme:"light",defaultSelectedKeys:["1"],mode:"inline",style:{backgroundColor:"#fff"},children:[Object(D.jsxs)(Be.a,{title:"\uae30\uc5c5\uace0\uac1d(B2B)",children:[Object(D.jsx)(Ce.a.Item,{onClick:function(){console.log("???"),A.push(P.CUSTOMER_LIST)},children:"\uace0\uac1d\uc815\ubcf4 \uc870\ud68c"},"00"),Object(D.jsx)(Ce.a.Item,{children:"\uace0\uac1d\uc815\ubcf4 \ub4f1\ub85d"},"01"),Object(D.jsx)(Ce.a.Item,{children:"\uace0\uac1d\uc815\ubcf4 \uc5c5\ub85c\ub4dc"},"02")]},"sub0"),Object(D.jsx)(Ce.a.Item,{children:"\uac1c\uc778\uace0\uac1d"},"2"),Object(D.jsxs)(Be.a,{title:"\uac1c\uc778\ud1b5\uad00\uc815\ubcf4",children:[Object(D.jsx)(Ce.a.Item,{children:"Tom"},"3"),Object(D.jsx)(Ce.a.Item,{children:"Bill"},"4"),Object(D.jsx)(Ce.a.Item,{children:"Alex"},"5")]},"sub1"),Object(D.jsxs)(Be.a,{title:"Billing",children:[Object(D.jsx)(Ce.a.Item,{children:"Team 1"},"6"),Object(D.jsx)(Ce.a.Item,{children:"Team 2"},"8")]},"sub2"),Object(D.jsx)(Ce.a.Item,{children:"Common"},"9")]})]})},Te=Q.b.div(le||(le=Object(C.a)(["\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n"]))),ke=function(e){var A=e.children,n=p(),t=n.authToken,c=n.isLoggedIn;return console.log("logggggin",t),Object(D.jsx)(Te,{children:Object(D.jsxs)(j.a,{style:{minHeight:"100vh"},children:[Object(D.jsx)(Ne,{title:"Korean Customer Master File"}),Object(D.jsxs)(j.a,{style:{flexDirection:"row"},children:[c&&Object(D.jsx)(we,{}),Object(D.jsx)(F.Content,{style:{margin:0,padding:0},children:A})]})]})})},Ee=(n(284),n(162)),Qe=n.n(Ee),Fe=Q.b.div(oe||(oe=Object(C.a)(["\n  width: 100%;\n  background-color: #fff;\n  padding: 24px;\n"]))),De=Q.b.div(ae||(ae=Object(C.a)(["\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n"]))),Re=Q.b.p(se||(se=Object(C.a)(["\n  font-size: 18px;\n  font-weight: 500;\n  font-family: NotoSansKR-Medium;\n  line-height: 24px;\n  letter-spacing: 0px;\n  text-align: center;\n"]))),Ye=Q.b.div(re||(re=Object(C.a)(["\n  width: 100%;\n  align-items: center;\n"]))),Ke=Q.b.p(je||(je=Object(C.a)(["\n  text-align: center;\n  font-size: 14px;\n  line-height: 20px;\n  color: #949494;\n"]))),Se=Q.b.p(Oe||(Oe=Object(C.a)(["\n  font-weight: 500;\n  font-family: NotoSansKR-Medium;\n  font-size: 16px;\n  line-height: 24px;\n  color: #000000;\n"]))),Le=function(){var e=fe(),A=e.visible,n=e.info,t=e.globalModalActions,i=Object(c.useMemo)((function(){return(null===n||void 0===n?void 0:n.type)||"alert"}),[null===n||void 0===n?void 0:n.type]),l=Object(c.useMemo)((function(){return(null===n||void 0===n?void 0:n.title)||""}),[null===n||void 0===n?void 0:n.title]),o=Object(c.useMemo)((function(){return(null===n||void 0===n?void 0:n.cancelText)||"\ucde8\uc18c"}),[null===n||void 0===n?void 0:n.cancelText]),a=Object(c.useMemo)((function(){return(null===n||void 0===n?void 0:n.confirmText)||"\ud655\uc778"}),[null===n||void 0===n?void 0:n.confirmText]),s=Object(c.useMemo)((function(){return(null===n||void 0===n?void 0:n.contents)||null}),[null===n||void 0===n?void 0:n.contents]),r=Object(c.useCallback)((function(){(null===n||void 0===n?void 0:n.onClickConfirm)&&(null===n||void 0===n||n.onClickConfirm()),t.close()}),[n,t]),j=Object(c.useCallback)((function(){(null===n||void 0===n?void 0:n.onClickCancel)&&(null===n||void 0===n||n.onClickCancel()),t.close()}),[n,t]),O=Object(c.useCallback)((function(){var e;null===t||void 0===t||null===(e=t.resetContents)||void 0===e||e.call(t)}),[t]);return Object(D.jsx)(Qe.a,{afterClose:O,visible:A,onCancel:j,onOk:r,cancelText:o,okText:a,cancelButtonProps:{hidden:"alert"===i},children:Object(D.jsxs)(Fe,{children:[!!l&&Object(D.jsx)(De,{children:Object(D.jsx)(Re,{children:l})}),!!s&&Object(D.jsx)(Ye,{children:"string"===typeof s?l?Object(D.jsx)(Ke,{children:s}):Object(D.jsx)(Se,{children:s}):s})]})})};var Ue=function(e){return e.map((function(e,A){return Object(D.jsx)(m.b,{path:"/dhl"+e.path.toString(),exact:e.exact,component:Object(m.h)(e.component)},e.path)}))},Ge=function(){var e=be[0];return Object(D.jsxs)(m.d,{children:[Ue(be),Object(D.jsx)(m.a,{path:"*",to:e.path})]})},He=function(){var e=de[0];return Object(D.jsxs)(m.d,{children:[Ue(de),Object(D.jsx)(m.a,{path:"*",to:e.path})]})},ze=function(){var e=p().isLoggedIn;return Object(D.jsx)("div",{className:"App",children:Object(D.jsxs)(j.a,{children:[Object(D.jsx)(ke,{children:Object(D.jsx)(m.d,{children:e?Object(D.jsx)(m.b,{component:He}):Object(D.jsx)(m.b,{component:Ge})})}),Object(D.jsx)(Le,{})]})})},Ve=function(){return Object(D.jsx)(a.a,{children:Object(D.jsx)(s.a,{children:Object(D.jsx)(ze,{})})})};l.a.render(Object(D.jsx)(Ve,{}),document.getElementById("root")),o()}},[[291,1,2]]]);
//# sourceMappingURL=main.bc95f9de.chunk.js.map