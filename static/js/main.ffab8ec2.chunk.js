(this["webpackJsonpreact-blog-template"]=this["webpackJsonpreact-blog-template"]||[]).push([[0],{21:function(e,t,a){},35:function(e,t,a){e.exports=a(87)},40:function(e,t,a){},48:function(e,t,a){},59:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(24),l=a.n(r),o=(a(40),a(7)),i=a(6),s=(a(48),a(17)),m=a.n(s);m.a.initializeApp({apiKey:"AIzaSyDDuD9VvedFdkSXbKfIGV9aSmWOnk7cQb4",authDomain:"react-blog-firebase-43de4.firebaseapp.com",databaseURL:"https://react-blog-firebase-43de4.firebaseio.com",projectId:"react-blog-firebase-43de4",storageBucket:"react-blog-firebase-43de4.appspot.com",messagingSenderId:"1020948357847",appId:"1:1020948357847:web:6bedc940343de3ad43c692",measurementId:"G-MBJ5DW61LV"});var u=m.a,d=(a(21),a(11)),p=a(27),f=function(e){var t={backgroundImage:"url("+e.data.defaultImage+")",backgroundSize:"cover",backgroundPosition:"center",backgroundColor:"#2B2A29",backgroundRepeat:"no-repeat"};return c.a.createElement("div",{className:"project"},c.a.createElement("div",{className:"afterHover",onClick:function(){return Object(i.c)("/projects/"+e.id)}},c.a.createElement("h1",null,e.data.title),c.a.createElement("p",null,"\u2014 view \u2014")),c.a.createElement("div",{className:"child",style:t},c.a.createElement("div",{className:"overlay",onClick:function(){return Object(i.c)("/projects/"+e.id)}})),e.signedIn&&c.a.createElement("div",{className:"admin-icons"},c.a.createElement(i.a,{to:"/edit/"+e.id},c.a.createElement(p.a,{className:"edit-icons"})),c.a.createElement(d.a,{onClick:function(){window.confirm("Sure?")&&u.firestore().collection("projects").doc(e.id).delete().then(console.log("Document was deleted")).catch((function(e){return console.log(e)}))},className:"edit-icons"})))},E=(a(59),a(8)),h=a(28),g=a.n(h),b=a(30),v=a.n(b),j=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){u.firestore().collection("projects").orderBy("title").onSnapshot((function(e){return l(e.docs)}))}),[]),c.a.createElement("main",null,c.a.createElement("div",{className:"intro"},c.a.createElement("h1",null,"Marius Aleksander",c.a.createElement("br",null),"Sletten",c.a.createElement("span",{className:"red"},".")),c.a.createElement("h1",null,"I am a UX designer",c.a.createElement("br",null),"who loves",c.a.createElement("br",null),"Front-end",c.a.createElement("br",null),"development",c.a.createElement("span",{className:"white"},".")),c.a.createElement("h5",null,"scroll")),e.signedIn&&c.a.createElement("div",{className:"add"},c.a.createElement(E.a,{className:"edit-icons",onClick:function(){u.firestore().collection("projects").add({title:"Projecttitle",timestap:u.firestore.FieldValue.serverTimestamp()}).then((function(e){return Object(i.c)("/edit/"+e.id)}))}})),c.a.createElement("h2",null,"Projects",c.a.createElement("span",null,".")),r.length>0?c.a.createElement(v.a,{breakpointCols:{default:2,700:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},r.map((function(t){return c.a.createElement(f,{key:t.id,data:t.data(),id:t.id,signedIn:e.signedIn})}))):c.a.createElement(g.a,null))},N=(a(64),a(31)),k=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),r=a[0],l=a[1];return c.a.createElement("div",{className:"header-containter"},c.a.createElement(N.a,{className:"burger",color:"white",size:"32",onClick:function(){return l(!r)}}),c.a.createElement("header",{className:r?"visible":"",onClick:function(){return l(!1)}},c.a.createElement("div",null,c.a.createElement(i.a,{getProps:function(e){return e.isPartiallyCurrent?{className:"active"}:null},to:"/projects"},"mas",c.a.createElement("span",null,"."))),c.a.createElement("div",{className:"links"},c.a.createElement("p",null,"Find me on:"),c.a.createElement("div",null,c.a.createElement("a",{href:"https://www.linkedin.com/in/marius-aleksander-sletten-92aa3716a/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(E.c,{size:"24"})," ",c.a.createElement(d.b,{className:"none",size:"12",opacity:"70%"})),c.a.createElement("a",{href:"https://github.com/marraleks",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(E.b,{size:"24"})," ",c.a.createElement(d.b,{className:"none",size:"12",opacity:"70%"})),c.a.createElement("a",{href:"mailto:marraleks@hotmail.com",target:"_top"},c.a.createElement(E.d,{size:"24"}),c.a.createElement(d.b,{className:"none",size:"12",opacity:"70%"}))))))},O=(a(65),function(e){return c.a.createElement("main",{className:"login"},!e.signedIn&&c.a.createElement("button",{onClick:function(){var e=new u.auth.GoogleAuthProvider;e.addScope("profile"),e.addScope("email"),u.auth().signInWithPopup(e).catch((function(e){console.log(e)}))}},"sign in"),e.signedIn&&c.a.createElement("div",null,c.a.createElement("h1",null,"You are signed in to firebase"),c.a.createElement("p",null,"Welcome ",u.auth().currentUser.displayName),u.auth().currentUser.photoURL&&c.a.createElement("img",{alt:"profile img",src:u.auth().currentUser.photoURL}),c.a.createElement("button",{onClick:function(){u.auth().signOut()}},"sign out")))}),y=a(14),w=a(18),I=(a(66),a(32)),S=a.n(I),C=function(e){var t=Object(n.useState)({}),a=Object(o.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(""),s=Object(o.a)(i,2),m=s[0],d=s[1];Object(n.useEffect)((function(){u.firestore().collection("projects").doc(e.id).onSnapshot((function(e){return l(e.data())}))}),[e.id]);var p=function(e){e.persist(),l((function(t){return Object(w.a)({},t,Object(y.a)({},e.target.name,e.target.value))}))};return c.a.createElement("main",{className:"edit"},c.a.createElement("h1",null,"Edit project: ",r.title),c.a.createElement("form",{onSubmit:function(t){d("Updating project, please hold"),t.preventDefault(),u.firestore().collection("projects").doc(e.id).update(r).then((function(){return d("project updated")})).catch((function(e){return console.log(e.message)}))}},c.a.createElement("input",{input:"text",onChange:p,name:"title",value:r.title}),c.a.createElement("input",{input:"text",onChange:p,name:"byline",placeholder:"Very short description",value:r.byline}),c.a.createElement("input",{input:"text",onChange:p,name:"tech",placeholder:"Techs used",value:r.tech}),c.a.createElement("input",{input:"text",onChange:p,name:"year",placeholder:"Month and year",value:r.year}),c.a.createElement("input",{input:"text",onChange:p,name:"link",placeholder:"link",value:r.link}),c.a.createElement("textarea",{onChange:p,name:"description",placeholder:"Description of the project",value:r.description}),c.a.createElement("textarea",{input:"text",onChange:p,name:"video",placeholder:"iframe content",value:r.video}),c.a.createElement("textarea",{input:"text",onChange:p,name:"extra",placeholder:"html elements",value:r.extra}),r.defaultImage&&c.a.createElement("img",{src:r.defaultImage,alt:"default"}),c.a.createElement("label",null,c.a.createElement("div",{className:"button"},r.defaultImage?"replace":"upload"),c.a.createElement(S.a,{hidden:!0,accept:"image/*",storageRef:u.storage().ref("images"),onUploadStart:function(){d("Uploading image, please hold")},onUploadError:function(e){d(e)},onUploadSuccess:function(e){u.storage().ref("images").child(e).getDownloadURL().then((function(e){return l((function(t){return Object(w.a)({},t,{defaultImage:e})}))})),d("image uploaded")},onProgress:function(e){console.log(e)}})),c.a.createElement("button",{type:"submit"},"save")),c.a.createElement("p",null,m))},x=(a(72),function(e){return c.a.createElement("div",{className:"subContainer",id:"title-container"},c.a.createElement("h1",null,e.title,c.a.createElement("span",null,".")),c.a.createElement("h5",null,"scroll"))}),U=(a(73),a(19)),z=a.n(U),D=a(33),B=function(e){var t=Object(n.useState)(),a=Object(o.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)(),m=Object(o.a)(s,2),d=m[0],p=m[1],f=Object(n.useState)(),E=Object(o.a)(f,2),h=E[0],g=E[1],b=function(){0===window.pageYOffset&&window.scrollTo({left:0,top:document.querySelector("#title-container").offsetHeight,behavior:"smooth"})};return Object(n.useEffect)((function(){u.firestore().collection("projects").doc(e.id).onSnapshot((function(e){return l(e.data())})),window.setTimeout(b,3e3)}),[e.id]),Object(n.useEffect)((function(){u.firestore().collection("projects").orderBy("title").get().then((function(t){var a=t.docs.map((function(e){return e.id})),n=a.indexOf(e.id);g(n+1===a.length?a[0]:a[n+1]),p(0===n?a[a.length-1]:a[n-1]),window.scrollTo({top:0})}))}),[e.id]),c.a.createElement("main",{className:"detail"},r?c.a.createElement(c.a.Fragment,null,c.a.createElement(x,{title:r.title,className:"project-detail"}),c.a.createElement("div",{className:"projectContainer"},c.a.createElement("div",null,c.a.createElement("h3",null,"Info"),r.byline&&c.a.createElement("div",{className:"projectByline"},"- ",r.byline),r.tech&&c.a.createElement("div",{className:"projectTech"},"- ",r.tech),r.year&&c.a.createElement("div",{className:"projectYear"},"- ",r.year),r.link&&c.a.createElement("div",{className:"projectLink"},"- ",z()(r.link))),c.a.createElement("div",null,c.a.createElement("h3",null,"Brief"),r.description&&c.a.createElement("div",{className:"projectDescription"},r.description))),r.video&&c.a.createElement(D.a,{video:r.video,width:"1024px"}),r.extra&&c.a.createElement("div",{className:"projectExtra"},z()(r.extra)),c.a.createElement("div",{className:"pager"},c.a.createElement(i.a,{to:"/projects/"+d},"prev project"),c.a.createElement(i.a,{to:"/projects/"+h},"next project"))):c.a.createElement("h2",null,"Fetching Project, hold on"))},P=function(){return Object(i.c)("/projects"),c.a.createElement(c.a.Fragment,null)},F=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){u.auth().onAuthStateChanged((function(e){r(!!e)}))})),c.a.createElement("div",null,c.a.createElement(k,{signedIn:a}),c.a.createElement(i.b,null,c.a.createElement(P,{path:"/"}),c.a.createElement(j,{signedIn:a,path:"/projects"}),c.a.createElement(O,{signedIn:a,setSignedIn:r,path:"/login"}),c.a.createElement(C,{path:"/edit/:id"}),c.a.createElement(B,{path:"/projects/:id"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.ffab8ec2.chunk.js.map