(this["webpackJsonpimage-upload"]=this["webpackJsonpimage-upload"]||[]).push([[0],{66:function(e,a,t){},92:function(e,a,t){"use strict";t.r(a);var n,r=t(0),c=t.n(r),o=t(15),i=t.n(o),l=(t(66),t(26)),d=t.n(l),s=t(43),u=t(21),j=t(93),b=t(44),p=t(111),g=t(106),h=t(108),m=t(112),O=t(113),x=t(109),f=t(110),v=t(1),w=t(6),k=function(e){var a=e.percentage,t=e.value,r=e.upLoadImage,c=e.loading,o=v.default.span(n||(n=Object(b.a)(["\n    margin: 0 0 0 1rem;\n    cursor:pointer;\n  "])));return Object(w.jsxs)(p.a,{children:[Object(w.jsx)(g.a,{background:"brand",as:"header",children:Object(w.jsx)(j.a,{pad:"medium",children:Object(w.jsx)("h1",{children:"Image Cloud"})})}),Object(w.jsxs)(j.a,{align:"center",background:"neutral-2",pad:"medium",basis:"small",children:[Object(w.jsxs)(j.a,{pad:"medium",border:{color:"white",size:"small"},direction:"row",align:"stretch",children:[Object(w.jsx)(h.a,{name:"file",onChange:r}),Object(w.jsx)(o,{children:Object(w.jsx)(f.a,{color:"white",size:"large"})})]}),Object(w.jsx)(j.a,{height:"small",width:"small",pad:"medium",align:"center",children:c?Object(w.jsx)(m.a,{color:"brand",size:"1rem"}):Object(w.jsx)(O.a,{fit:"cover",src:t})}),Object(w.jsx)(x.a,{values:[{value:a,label:"white",color:"brand"}],"aria-label":"meter",background:{color:"light-2"},max:"100",color:"dark-1",round:!0,alignSelf:"center"})]})]})},C=t(60),y=t.n(C);var S=function(){var e=Object(r.useState)(void 0),a=Object(u.a)(e,2),t=a[0],n=a[1],c=Object(r.useState)(!1),o=Object(u.a)(c,2),i=o[0],l=o[1],b=Object(r.useState)(0),p=Object(u.a)(b,2),g=p[0],h=p[1],m=function(){var e=Object(s.a)(d.a.mark((function e(a){var t,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.target.files,(r=new FormData).append("file",t[0]),r.append("upload_preset","yoaninterview"),l(!0),h(0),e.next=8,y.a.post("\thttps://api.cloudinary.com/v1_1/dxrdytbzb/image/upload",r,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(e){console.log(Math.round(100*e.loaded/e.total)),h(Math.round(100*e.loaded/e.total))}});case 8:c=e.sent,n(c.data.secure_url),l(!1);case 11:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(w.jsx)(j.a,{align:"center",alignContent:"center",pad:"large",children:Object(w.jsx)(k,{value:t,upLoadImage:m,percentage:g,loading:i})})},F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,114)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,c=a.getLCP,o=a.getTTFB;t(e),n(e),r(e),c(e),o(e)}))};i.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(S,{})}),document.getElementById("root")),F()}},[[92,1,2]]]);
//# sourceMappingURL=main.5af587bd.chunk.js.map