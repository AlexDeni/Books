(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{101:function(e,t,a){e.exports=a.p+"static/media/slide2.8ce89b9e.jpg"},102:function(e,t,a){e.exports=a.p+"static/media/slide3.13b28c48.jpg"},103:function(e,t,a){e.exports=a.p+"static/media/slide4.835a2d4a.jpg"},104:function(e,t,a){e.exports=a.p+"static/media/slide5.5242f54c.jpg"},105:function(e,t,a){e.exports=a.p+"static/media/slide6.5513e6aa.jpg"},109:function(e,t,a){e.exports=a(148)},113:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(63),c=a.n(o),l=(a(113),a(43)),i=a(44),s=a(56),u=a(45),m=a(57),d=a(8),p=a(38),f=a(5),E=a(13),A=a.n(E),h=function(e){var t=e.children,a=e.value,n=e.bStyle,o=e.size,c=e.type,l=e.disabled,i=e.onClick,s=e.extraClass,u=A()("btn","btn__bStyle_".concat(n),"btn__size_".concat(o),s);return r.a.createElement("button",{value:a,className:u,type:c,disabled:l,onClick:i},t)};h.defaultProps={bStyle:"default",size:"m",type:"button",disabled:!1};var k=function(e){var t=e.children,a=e.size,n=e.color,o=e.extraClass,c=e.position,l=e.weight,i=A()("description","description__size_".concat(a),"description__color_".concat(n),"description__weight_".concat(l),"description__position_".concat(c),o);return r.a.createElement("p",{className:i},t)};k.defaultProps={size:"m",color:"default",className:"",position:"left",weight:"500"};var b=function(e){var t=e.children,a=e.direction,n=e.justify,o=e.align,c=e.wrap,l=e.extraClass,i=A()("layout","layout__orientation_".concat(a),"layout__justify_".concat(n),"layout__align_".concat(o),"layout__wrap_".concat(c),l);return r.a.createElement("div",{className:i},t)};b.defaultProps={};var g=27,C=29,v="UA";a(117);function y(e){var t=e.image,a=e.withoutImage;return t||a}var w=function(e){var t=e.color,a=e.price,n=e.size,o=e.position,c=e.extraClass,l=e.weight;return r.a.createElement(k,{weight:l,extraClass:c,color:t,size:n,position:o},function(e){switch(v){case"UA":return Math.floor(e);case"USD":return Math.floor(e/g);case"EUR":return Math.floor(e/C);default:return Math.floor(e)}}(a),function(){switch(v){case"UA":return r.a.createElement("span",{className:"price_indent"},"\u0433\u0440\u043d");case"USD":return r.a.createElement("span",{className:"price_indent"},"$");case"EUR":return r.a.createElement("span",{className:"price_indent"},"\u20ac");default:return r.a.createElement("span",{className:"price_indent"},"\u0433\u0440\u043d")}}())},x=a(94),S=a.n(x),O=(a(118),function(e){var t=e.size,a=A()("logo","logo__size_".concat(t));return r.a.createElement("img",{className:a,src:S.a,alt:"logo"})});O.defaultProps={size:"m"};a(119);var j=function(e){var t=e.children,a=e.position,n=e.color,o=e.extraClass,c=e.tagName,l=A()("title","title__position_".concat(a),"title__color_".concat(n),o);return r.a.createElement(b,{extraClass:"block_t"},r.a.createElement(c,{className:l},t))};j.defaultProps={position:"left",tagName:"h2",color:"default"};var B=a(33),N=(a(120),function(e){var t=e.scrollPoint,a=Object(n.useState)(!1),o=Object(B.a)(a,2),c=o[0],l=o[1];Object(n.useEffect)((function(){document.addEventListener("scroll",(function(){i()}))}));var i=function(){window.pageYOffset>t?l(!0):l(!1)};return r.a.createElement(r.a.Fragment,null,c?r.a.createElement("span",{className:"scrollToTop",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}},"\xbb"):"")});N.defaultProps={scrollPoint:300};var z=a(6);function _(e){var t=e.rating,a=[];if(null!==t&&t<=5)for(var n=0;n<t;n++)a.push(r.a.createElement("label",{key:n,className:"active-label"}));else if(t>5)for(var o=0;o<5;o++)a.push(r.a.createElement("label",{key:o,className:"active-label"}));for(;a.length<5;)a.push(r.a.createElement("label",{key:a.length}));return a}var R=function(e){var t=e.rating;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{extraClass:"rating-area",direction:"row",justify:"center"},r.a.createElement(_,{rating:t})))},I="SET_SHOP_CART",F="REMOVE_SHOP_CART",K="ADD_SHOP_CART",W=function(e){return{type:I,payload:e}},P=function(e){return{type:F,payload:e}},T=function(e){return{type:K,payload:e}},U=a(66),J=a.n(U),M="GET_ALL_BOOKS",D="OPEN_BOOK_PROPERTIES",L="ERROR_GET_BOOK",q=function(e){return{type:D,payload:e}},H=function(e){var t=e.title,a=e.author,n=e.image,o=e.rating,c=e.addInShopCart,l=e.openBookProperties,i=e.price,s=e.id,u=e.idChoose,m=!1;for(var p in u)u[p]===s&&(m=!0);return r.a.createElement(b,{extraClass:"book"},r.a.createElement("img",{src:n,alt:n,className:"listImage"}),r.a.createElement("div",{className:"bookCard"},r.a.createElement(k,{size:"l",position:"center"},t),r.a.createElement(R,{rating:o}),r.a.createElement(k,{extraClass:"bookAuthor",position:"center"},"\u0410\u0432\u0442\u043e\u0440: ".concat(a)),r.a.createElement(w,{position:"center",size:"l",price:i}),r.a.createElement(b,{justify:"space-between",direction:"row",extraClass:"book-btn"},r.a.createElement(h,{bStyle:"main",disabled:m,onClick:function(){c(s)}},m?"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0435":"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),r.a.createElement(d.b,{to:"/all/".concat(s),onClick:function(){l(s)}},r.a.createElement(h,{bStyle:"main"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c")))))};H.defaulttypes={author:"\u0410\u0432\u0442\u043e\u0440",rating:0,price:0};var Q=Object(f.b)((function(e){return{idChoose:e.orderBooks.id,books:e.getBooks.books,count:e.orderBooks.count}}),(function(e){return{addInShopCart:Object(z.bindActionCreators)(W,e),openBookProperties:Object(z.bindActionCreators)(q,e)}}))(H);a(138);var V=Object(f.b)((function(e){return{idChoose:e.orderBooks.id,id:e.getBooks.id,books:e.getBooks.books}}),(function(e){return{addInShopCart:Object(z.bindActionCreators)(W,e)}}))((function(e){var t=e.id,a=e.books,n=e.addInShopCart,o=e.idChoose,c=a.find((function(e){return e.id===t})),l=!1;for(var i in o)o[i]===t&&(l=!0);return c?r.a.createElement(b,{extraClass:"container book-info listBooks"},r.a.createElement(b,{wrap:"wrap",direction:"row"},r.a.createElement(b,null,r.a.createElement("img",{src:c.image,alt:c.title}),r.a.createElement(d.b,{to:"/all",className:"property-goBack"},r.a.createElement("span",null,"\u2190"),"Back")),r.a.createElement(b,{extraClass:"book-extra-info"},r.a.createElement(j,{tagName:"h1",color:"blue"},c.title),r.a.createElement(w,{size:"l",price:c.price}),r.a.createElement(h,{disabled:l,extraClass:"btn_order_info",onClick:function(e){e.preventDefault(),n(t)},bStyle:"main",size:"m"},l?"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0435":"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),r.a.createElement(b,{extraClass:"book_info-item"},r.a.createElement(b,{extraClass:"title_line"},r.a.createElement(k,{size:"l"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f")),r.a.createElement(b,{direction:"row"},r.a.createElement("span",null,"\u0410\u0432\u0442\u043e\u0440"),r.a.createElement(k,{weight:"600"},c.author)),r.a.createElement(b,{direction:"row"},r.a.createElement("span",null,"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"),r.a.createElement(k,{weight:"600"},c.rating))),r.a.createElement(b,{extraClass:"book_info-item"},r.a.createElement(b,{extraClass:"title_line"},r.a.createElement(k,{size:"l",className:"additional-info"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435")),r.a.createElement(k,{extraClass:"extra-info",size:"m"},c.info))))):r.a.createElement(b,{extraClass:"container listBooks"},r.a.createElement(k,{size:"l"},"Sorry, but the book was not found"))})),G=function(e){var t=e.setBooks,a=e.setRatingBooks,o=Object(n.useState)(!0),c=Object(B.a)(o,2),l=c[0],i=c[1];return r.a.createElement(h,{extraClass:"rating_btn",bStyle:"main",onClick:function(){if(i(!l),l){var e=t.sort((function(e,t){return t.rating-e.rating}));a(e)}if(!l){var n=t.sort((function(e,t){return e.rating-t.rating}));a(n)}}},"\u041f\u043e \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u0443 ",l?r.a.createElement("span",null,"\u2b07"):r.a.createElement("span",null,"\u2b06"))},Y=function(e){var t=e.books,a=e.updateBooks,o=Object(n.useState)(""),c=Object(B.a)(o,2),l=c[0],i=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{value:l,onChange:function(e){i(e.target.value)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435...",className:"setSearch"}),r.a.createElement(h,{extraClass:"search_btn",bStyle:"main",onClick:function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(l)}));a(e),i("")}},r.a.createElement("span",{"aria-label":"",role:"img"},"\ud83d\udd0d")))},Z=function(e){var t=e.books,a=e.setBooks,n=e.updateBooks,o=e.setRatingBooks;return r.a.createElement(b,{extraClass:"filterBtn",direction:"row",wrap:"wrap"},r.a.createElement(Y,{books:t,updateBooks:n}),r.a.createElement(G,{setBooks:a,setRatingBooks:o}))},X=(a(139),function(e){var t=e.children,a=e.title,n=e.isModalOpen,o=e.onModalClick,c=e.size,l=e.extraClass;if(!n)return null;var i=A()("modal_body","modal_body__size_".concat(c),l);return r.a.createElement(b,{justify:"center",align:"center"},r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:i},r.a.createElement(b,{extraClass:"modal_header",direction:"row"},r.a.createElement(k,{color:"dark",size:"l"},a),r.a.createElement(h,{bStyle:"none",onClick:function(){return o(!1)},extraClass:"modal_close_icon"})),r.a.createElement(b,{extraClass:"modal_item",align:"center",justify:"center"},t))))});X.defaultProps={isModalOpen:!1,title:"",size:"s"};var $=a(96),ee=a.n($),te=function(e){var t=e.books,a=e.num;return r.a.createElement(b,{wrap:"wrap",direction:"row",extraClass:"listBooks",justify:"space-between"},t.map((function(e){if(e.rating>a){var t=e.id,n=e.title,o=e.author,c=e.image,l=e.price,i=e.rating;return r.a.createElement(Q,{key:t,id:t,title:n,author:o,image:y({image:c,withoutImage:ee.a}),price:l,rating:i})}})))};te.defaultProps={num:0};a(140);var ae=function(){return r.a.createElement(b,{align:"center"},r.a.createElement("div",{className:"loader-ring"}))},ne=a(61),re=function(e){var t=e.touched,a=e.message,n=e.name;return t?a?r.a.createElement("div",{className:"form-message invalid"},r.a.createElement(ne.a,{name:n})):r.a.createElement("div",{className:"form-message valid"},"all good"):r.a.createElement("div",{className:"form-message invalid"},"\xa0")},oe=a(99),ce=a(39),le=function(){return ce.c().min(6,"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d  \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").max(30,"*\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u043e\u0439").matches(/[A-z\u00C0-\u00ff]+/,"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b").required("*\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435")},ie=function(){return ce.c().min(4,"\u041b\u043e\u0433\u0438\u043d \u0434\u043e\u043b\u0436\u0435\u043d  \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 4 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").max(20,"*\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u044b\u0439").required("*\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435")},se=ce.a().shape({name:ie(),password:le()}),ue=ce.a().shape({name:ie(),surName:ie(),login:ie(),email:ce.c().email("\u041d\u0435\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b").max(30,"*\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u043e\u0439").required("*\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),password:le(),repeatPassword:ce.c().oneOf([ce.b("password")],"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442").required("*\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435").min(6,"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d  \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").max(30,"*\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u043e\u0439")});a(141);function me(e){var t=["\u0412\u043e\u0439\u0442\u0438","\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"];return"signUp"===e?t.reverse():t}function de(e){var t=e.authType,a=e.formTitle,n=e.onModalClick,o=Object(p.f)();return r.a.createElement(r.a.Fragment,null,oe[t].map((function(e,c){return r.a.createElement(ne.c,{key:c,initialValues:{name:"",email:"",login:"",password:"",repeatPassword:""},validationSchema:"signIn"===t?se:ue,onSubmit:function(e,t){var a=t.setSubmitting,n=t.resetForm;return a(!0),setTimeout((function(){alert(JSON.stringify(e,null,2)),n(),a(!1)}),500)}},(function(c){var l=c.errors,i=c.touched,s=c.handleChange,u=c.handleBlur,m=c.handleSubmit,d=c.isSubmitting;return r.a.createElement("form",{className:"login_form",onSubmit:m},r.a.createElement(k,{color:"dark",position:"center",size:"l"},a),r.a.createElement("div",{className:"inputForm"},e.fields.map((function(e,t){var a=e.type,n=e.placeholder,o=e.name;return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(ne.b,{type:a,placeholder:n,name:o,onChange:s,onBlur:u,className:i.name&&l.name?"has-error":null}),r.a.createElement(re,{message:l,touched:i,name:o}))}))),r.a.createElement(b,{justify:"center",align:"center",extraClass:"btn_form"},r.a.createElement(h,{size:"all",type:"submit",onClick:s},me(t)[0]),r.a.createElement(h,{size:"all",type:"submit",onClick:function(){return function(e){"signIn"===e&&(o.push("/login"),n(!1))}(t)},disabled:d},me(t)[1])))}))})))}a(92);var pe=function(e){var t=e.image,a=e.size,n=e.extraClass,o=e.index,c=A()("slide","slide__size_".concat(a),n);return r.a.createElement("img",{src:t[o].image,alt:"",className:c})};pe.defaultProps={size:"m"};var fe=function(e){var t=e.active,a=e.updateDots,n=e.number;return r.a.createElement("span",{onClick:function(){a(n)},style:{background:"".concat(t?"#f57904":"")}})},Ee=function(e){var t=e.quantityDots,a=e.updateDots,n=e.displayDot,o=e.currentImage;if(n)return r.a.createElement(b,{direction:"row",justify:"center",extraClass:"dots"},t.map((function(e,t){return r.a.createElement(fe,{key:t,active:o===t,number:t,updateDots:a})})))};Ee.defaultProps={displayDot:!1};var Ae=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={currentImage:0,slideShow:!1},a.makePrevSlide=function(e){var t=e.allImg,n=e.currentNum;n>0&&a.setState({currentImage:n-1}),0===n&&a.setState({currentImage:t})},a.makeNextSlide=function(e){var t=e.allImg,n=e.currentNum;t>n&&a.setState({currentImage:n+1}),t===n&&a.setState({currentImage:0})},a.makeSlide=function(e){e.preventDefault();var t=a.props.slidesInfo.length-1,n=a.state.currentImage,r=e.currentTarget.dataset.direct;"prev"===r&&a.makePrevSlide({allImg:t,currentNum:n}),"next"===r&&a.makeNextSlide({allImg:t,currentNum:n})},a.setImageDot=function(e){a.setState({currentImage:e})},a.updateImg=function(){var e=a.props.slidesInfo.length-1,t=a.state.currentImage;e===t&&a.setState({currentImage:0}),e>t&&a.setState({currentImage:t+1})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.slideShow&&(this.timerID=setInterval((function(){return e.updateImg()}),7e3))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=this.props,t=e.slidesInfo,a=e.size,n=e.displayDot,o=this.state.currentImage;return r.a.createElement(b,{extraClass:"slide",justify:"center",direction:"row"},r.a.createElement("span",{className:"arrows","data-direct":"prev",onClick:this.makeSlide}),r.a.createElement(pe,{image:t,size:a,index:o}),r.a.createElement("span",{className:"arrows","data-direct":"next",onClick:this.makeSlide}),r.a.createElement(b,{extraClass:"slide_text"},r.a.createElement(k,{size:"l",color:"white",position:"center"},t[o].content)),r.a.createElement(Ee,{quantityDots:t,currentImage:o,updateDots:this.setImageDot,displayDot:n}))}}]),t}(n.Component),he=(a(142),a(101)),ke=a.n(he),be=a(102),ge=a.n(be),Ce=a(103),ve=a.n(Ce),ye=a(104),we=a.n(ye),xe=a(105),Se=a.n(xe),Oe=[{image:ke.a,content:"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442 \u0438 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0431\u043e\u0433\u0430\u0442\u043e\u043c\u0443, \u0440\u0430\u0437\u043d\u043e\u043e\u0431\u0440\u0430\u0437\u043d\u043e\u043c\u0443 \u0438 \u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u043e\u043c\u0443 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0443 \u0437\u043d\u0430\u043d\u0438\u0439, \u0447\u0442\u043e\u0431\u044b \u0438\u043d\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u0432\u0434\u043e\u0445\u043d\u043e\u0432\u043b\u044f\u0442\u044c \u0438 \u0432\u043e\u0432\u043b\u0435\u043a\u0430\u0442\u044c \u0432\u0430\u0441 \u0432 \u0432\u0430\u0448\u0438 \u0438\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0438 \u0442\u0432\u043e\u0440\u0447\u0435\u0441\u043a\u0438\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u043d\u0438\u044f."},{image:ge.a,content:"\u0417\u0430\u0445\u043e\u0434\u0438 \u0438 \u0432\u044b\u0431\u0438\u0440\u0430\u0439 \u043b\u0443\u0447\u0448\u0438\u0435 \u043a\u043d\u0438\u0433\u0438 \u043f\u043e \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u043c \u0446\u0435\u043d\u0430\u043c, \u0443 \u043d\u0430\u0441 \u0442\u044b \u043d\u0430\u0439\u0434\u0435\u0448\u044c \u0432\u0441\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0435"},{image:ve.a,content:"\u041a\u043d\u0438\u0433\u0430 \u2014 \u044d\u0442\u043e \u043e\u0441\u043d\u043e\u0432\u0430 \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u044b, \u0438 \u0442\u0430\u043a\u043e\u0439 \u043e\u043d\u0430 \u0431\u0443\u0434\u0435\u0442 \u043e\u0441\u0442\u0430\u0432\u0430\u0442\u044c\u0441\u044f \u0435\u0449\u0435 \u043e\u0447\u0435\u043d\u044c \u0434\u043e\u043b\u0433\u043e, \u043d\u0430\u0440\u044f\u0434\u0443 \u0441 \u043d\u043e\u0432\u044b\u043c\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u043c\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f\u043c\u0438."},{image:we.a,content:"\u041d\u0435\u043b\u044c\u0437\u044f \u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043a\u043d\u0438\u0433\u0438 \u0437\u0430\u043f\u0435\u0440\u0442\u044b\u043c\u0438 \u0442\u043e\u0447\u043d\u043e \u0432 \u0442\u044e\u0440\u044c\u043c\u0435, \u043e\u043d\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u043d\u0435\u043f\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u0442\u044c \u0438\u0437 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u0432 \u043f\u0430\u043c\u044f\u0442\u044c."},{image:Se.a,content:"\u041d\u0438\u043a\u043e\u043c\u0443 \u043d\u0435 \u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0441\u0432\u043e\u0438\u0445 \u043a\u043d\u0438\u0433, \u0438\u043d\u0430\u0447\u0435 \u0432\u044b \u0438\u0445 \u0443\u0436\u0435 \u043d\u0435 \u0443\u0432\u0438\u0434\u0438\u0442\u0435. \u0412 \u043c\u043e\u0435\u0439 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0435 \u043e\u0441\u0442\u0430\u043b\u0438\u0441\u044c \u043b\u0438\u0448\u044c \u0442\u0435 \u043a\u043d\u0438\u0433\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u044f \u0432\u0437\u044f\u043b \u043f\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u0443 \u0434\u0440\u0443\u0433\u0438\u0445."}],je=Object(f.b)((function(e){return{books:e.getBooks.books}}))((function(e){var t=e.books;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ae,{slidesInfo:Oe,size:"allWidth",displayDot:!0,slideShow:!0}),r.a.createElement(b,{extraClass:"container"},r.a.createElement(j,{tagName:"h1",position:"center",color:"blue"},"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0442\u043e\u0432\u0430\u0440\u044b"),r.a.createElement(te,{books:t,num:4})))})),Be=function(){return r.a.createElement(b,{extraClass:"container"},r.a.createElement(de,{authType:"signUp",formTitle:"\u0424\u043e\u0440\u043c\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}))},Ne={default:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430, \u0437\u0430\u0439\u0434\u0438\u0442\u0435 \u043f\u043e\u0437\u0436\u0435"};function ze(e){return e.errorText?r.a.createElement(b,{extraClass:"container listBooks"},Ne.default):null}var _e=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={filterStatus:!1,setResult:""},a.handleSearchClick=function(e){a.setState({setResult:e,filterStatus:!0})},a.setRatingBooks=function(e){a.setState({setResult:e})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.books,a=e.loader,n=e.error,o=this.state,c=o.filterStatus,l=o.setResult;if(!t)return null;var i=t;return c&&(i=l),a?r.a.createElement(ae,null):r.a.createElement(b,{extraClass:"container"},r.a.createElement(b,{extraClass:"listBooks"},r.a.createElement(Z,{books:t,setBooks:i,updateBooks:this.handleSearchClick,setRatingBooks:this.setRatingBooks}),r.a.createElement(ze,{errorText:n}),r.a.createElement(te,{books:i})))}}]),t}(n.Component);var Re=Object(f.b)((function(e){return{books:e.getBooks.books,loader:e.getBooks.loader,error:e.getBooks.error}}))(_e),Ie="GET_ALL_NEWS",Fe="OPEN_NEWS_PROPERTIES",Ke="ERROR_GET_NEWS",We=function(e){return{type:Fe,payload:e}};a(143);var Pe=[{path:"/news",component:Object(f.b)((function(e){return{news:e.getNews.news,loader:e.getNews.loader,errorText:e.getNews.error}}),(function(e){return{openNewsContent:Object(z.bindActionCreators)(We,e)}}))((function(e){var t=e.loader,a=e.news,n=e.openNewsContent,o=e.errorText;return o?r.a.createElement(ze,{errorText:o}):t?r.a.createElement(ae,null):r.a.createElement(b,{extraClass:"container listBooks"},r.a.createElement(b,{direction:"row",wrap:"wrap",justify:"space-evenly"},a.data.map((function(e){return r.a.createElement(b,{key:e.id,extraClass:"news-item"},r.a.createElement(d.b,{to:"/news/".concat(e.id),onClick:function(){return function(e){n(e)}(e)}},r.a.createElement(k,{color:"dark",position:"center",size:"l"},e.title)),r.a.createElement(k,{extraClass:"news-content"},(t=e.text,a=150,(t=t.trim()).length<a?t:(t=t.slice(0,a)).trim()+"...")));var t,a}))))})),exact:!0},{path:"/news/:id",component:Object(f.b)((function(e){return{news:e.getNews.id}}))((function(e){var t=e.news;return r.a.createElement(b,{extraClass:"container listBooks"},r.a.createElement(b,{direction:"row",wrap:"wrap",justify:"space-evenly"},r.a.createElement(b,{extraClass:"news_item_content"},r.a.createElement(k,{position:"center",size:"l"},t.title),r.a.createElement(k,{extraClass:"news-content"},t.text))))})),exact:!0},{path:"/login",component:Be,exact:!0},{path:"/all/:id",component:V},{path:"/all",component:Re,exact:!0},{path:"/",component:je,exact:!0}],Te=(a(144),a(11)),Ue=a(10);var Je=Object(f.b)((function(e){return{count:e.orderBooks.count}}))((function(e){var t=e.count,a=e.onShopClick,n=e.color,o=e.size,c=e.colorCount;return r.a.createElement(b,{extraClass:"shop_emblem",align:"center"},r.a.createElement(Ue.a,{size:o,color:n,onClick:function(){return a(!0)},icon:Te.f}),r.a.createElement(k,{size:"l",color:c,extraClass:"countCart"},t))})),Me=function(e){var t=e.onHomeClick,a=e.onShopClick,o=Object(n.useState)(!1),c=Object(B.a)(o,2),l=c[0],i=c[1],s=function(){i(!l)};return r.a.createElement("header",null,r.a.createElement("label",null,r.a.createElement(Ue.a,{color:"#F57904",icon:Te.a,onClick:s})),l?r.a.createElement("nav",{className:"hidden-menu"},r.a.createElement(Ue.a,{color:"white",icon:Te.g,onClick:s}),r.a.createElement(d.c,{exact:!0,onClick:s,to:"/"},r.a.createElement(Ue.a,{color:"white",icon:Te.c}),"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),r.a.createElement(d.c,{onClick:s,to:"/all"},r.a.createElement(Ue.a,{color:"white",icon:Te.b}),"\u0412\u0441\u0435 \u041a\u043d\u0438\u0433\u0438"),r.a.createElement(d.c,{onClick:s,to:"/news"},r.a.createElement(Ue.a,{color:"white",icon:Te.d}),"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"),r.a.createElement(b,{extraClass:"header_phone"},r.a.createElement(k,{color:"dark",size:"m"},r.a.createElement(Ue.a,{size:"1x",color:"#f57904",icon:Te.e})," ","380634576844"),r.a.createElement(k,{color:"dark",size:"m"},r.a.createElement(Ue.a,{size:"1x",color:"#f57904",icon:Te.e})," ","380634576844")),r.a.createElement("div",{className:"hidden-menu_btn"},r.a.createElement(Ue.a,{size:"2x",color:"white",onClick:function(){return t(!0)},icon:Te.i}),r.a.createElement(Je,{size:"2x",color:"white",colorCount:"white",onShopClick:a}))):"",r.a.createElement(b,{extraClass:"container header",direction:"row",justify:"space-around",align:"center"},r.a.createElement(d.c,{to:"/"},r.a.createElement(O,null)," "),r.a.createElement("nav",{className:"nav_header"},r.a.createElement(d.c,{to:"/all"},"\u0412\u0441\u0435 \u041a\u043d\u0438\u0433\u0438b"),r.a.createElement(d.c,{to:"/news"},"\u041d\u043e\u0432\u043e\u0441\u0442\u0438")),r.a.createElement(b,{extraClass:"header_phone"},r.a.createElement(k,{color:"dark",size:"m"},r.a.createElement(Ue.a,{size:"1x",color:"#f57904",icon:Te.e})," ","380634576844"),r.a.createElement(k,{color:"dark",size:"m"},r.a.createElement(Ue.a,{size:"1x",color:"#f57904",icon:Te.e})," ","380634576844")),r.a.createElement(b,{direction:"row",extraClass:"header_btn"},r.a.createElement(Ue.a,{size:"2x",color:"#113d54",onClick:function(){return t(!0)},icon:Te.i}),r.a.createElement(Je,{color:"#113d54",colorCount:"dark",size:"2x",onShopClick:a}))))},De=Object(f.b)(null,(function(e){return{openBookProperties:Object(z.bindActionCreators)(q,e)}}))((function(e){var t=e.selectedBooks,a=e.removeBook,n=e.addBook,o=e.removeBooks,c=e.openBookProperties,l=e.onModalClick,i={};t.map((function(e){return i[e.title]=i[e.title]+1||1}));var s=Object.keys(i).map((function(e){return{id:t.find((function(t){return t.title===e})),sum:i[e],price:i[e]*t.find((function(t){return t.title===e})).price}})),u=function(e){c(Number(e.target.value)),l(!1)};return r.a.createElement("table",{className:"cart_item"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",{className:"basket_tit"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"),r.a.createElement("td",{className:"basket_card"},"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c"))),r.a.createElement("tbody",null,s.map((function(e,t){return r.a.createElement("tr",{key:t,className:"basket_carts"},r.a.createElement("td",null,r.a.createElement("img",{alt:t,src:e.id.image})),r.a.createElement("td",{className:"basket_card_info"},r.a.createElement(d.b,{to:"/all/".concat(e.id.id)},r.a.createElement(h,{size:"l",bStyle:"none",value:e.id.id,onClick:u},e.id.title)),r.a.createElement(w,{price:e.id.price})),r.a.createElement("td",{className:"basket_cart_count"},r.a.createElement(b,{direction:"row",justify:"center",align:"center"},r.a.createElement(h,{size:"l",bStyle:"none",value:e.id.id,onClick:a},"\u2013"),r.a.createElement(k,{weight:"600"},e.sum),r.a.createElement(h,{size:"l",bStyle:"none",value:e.id.id,onClick:n},"+"))),r.a.createElement("td",null,r.a.createElement(w,{position:"center",weight:"600",price:e.price})),r.a.createElement("td",null,r.a.createElement(Ue.a,{color:"darkred",onClick:function(){return o({item:e})},icon:Te.h})))}))))}));function Le(e){var t=e.selectedBooks.reduce((function(e,t){return e+t.price}),0);return r.a.createElement(w,{price:t})}a(147);var qe=Object(f.b)((function(e){return{id:e.orderBooks.id,books:e.getBooks.books,count:e.orderBooks.count}}),(function(e){return{removeShopCart:Object(z.bindActionCreators)(P,e),addShopCart:Object(z.bindActionCreators)(T,e)}}))((function(e){var t=e.id,a=e.books,n=e.count,o=e.removeShopCart,c=e.addShopCart,l=e.onModalClick,i=[],s=function(e){i.push(a.find((function(a){return a.id===t[e]})))};for(var u in t)s(u);return n>0?r.a.createElement(b,{extraClass:"shop_basket_section"},r.a.createElement(De,{onModalClick:l,selectedBooks:i,removeBooks:function(e){var a=t.filter((function(t){return t!==Number(e.item.id.id)}));o(a)},addBook:function(e){t.push(Number(e.target.value)),c(t)},removeBook:function(e){var a=t.indexOf(Number(e.target.value));a>=0&&t.splice(a,1),o(t)},id:t}),r.a.createElement(b,{extraClass:"shopCart shopCart_footer",direction:"row",align:"center",justify:"space-between"},r.a.createElement(h,{bStyle:"none",direction:"row",onClick:function(){return l(!1)}},r.a.createElement("span",null,"\u2190"),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u043f\u043e\u043a\u0443\u043f\u043a\u0430\u043c"),r.a.createElement(b,null,r.a.createElement(b,{direction:"row",extraClass:"basket_amount_price"},"\u0418\u0442\u043e\u0433\u043e: ",r.a.createElement(Le,{selectedBooks:i})),r.a.createElement(h,null,"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c")))):r.a.createElement(k,{color:"dark",size:"l"},"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430")})),He=a(106),Qe=a(22),Ve={books:[],id:[],loader:!0,error:""};var Ge=a(108),Ye={id:[],count:0};var Ze={news:[],id:[],loader:!0,error:""};var Xe=Object(z.combineReducers)({getBooks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(Qe.a)({},e,{books:t.payload,loader:!1});case D:return Object(Qe.a)({},e,{id:t.payload});case L:return Object(Qe.a)({},e,{loader:!1,error:t.payload});default:return e}},orderBooks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(Qe.a)({},e,{id:[].concat(Object(Ge.a)(e.id),[t.payload]),count:e.count+1});case K:return Object(Qe.a)({},e,{id:t.payload,count:e.count+1});case F:return Object(Qe.a)({},e,{id:t.payload,count:t.payload.length});default:return e}},getNews:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ie:return Object(Qe.a)({},e,{news:t.payload,loader:!1});case Fe:return Object(Qe.a)({},e,{id:t.payload});case Ke:return Object(Qe.a)({},e,{error:t.payload,loader:!1});default:return e}}}),$e=a(107),et=Object(z.createStore)(Xe,Object($e.composeWithDevTools)(Object(z.applyMiddleware)(He.a)));et.dispatch((function(e){J.a.get("./books.json").then((function(t){e({type:M,payload:t.data,loader:!1})})).catch((function(t){e({type:L,payload:t.message,loader:!1})}))})),et.dispatch((function(e){J.a.get("https://mysterious-reef-29460.herokuapp.com/api/v1/news").then((function(t){e({type:Ie,payload:t.data,loader:!1})})).catch((function(t){e({type:Ke,payload:t.message,loader:!1})}))}));var tt=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isHomeOpen:!1,isShopOpen:!1},a.onHomeClick=function(e){a.setState({isHomeOpen:e})},a.onShopClick=function(e){a.setState({isShopOpen:e})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isHomeOpen,a=e.isShopOpen;return r.a.createElement(f.a,{store:et},r.a.createElement(d.a,{basename:"/"},r.a.createElement(Me,{onHomeClick:this.onHomeClick,onShopClick:this.onShopClick}),r.a.createElement("section",null,r.a.createElement(p.c,null,Pe.map((function(e){return r.a.createElement(p.a,{path:e.path,component:e.component,exact:e.exact,key:e.path})}))),r.a.createElement(X,{title:"\u0412\u043e\u0439\u0442\u0438",isModalOpen:t,onModalClick:this.onHomeClick},r.a.createElement(de,{authType:"signIn",onModalClick:this.onHomeClick})),r.a.createElement(X,{size:"m",title:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430",isModalOpen:a,onModalClick:this.onShopClick},r.a.createElement(qe,{onModalClick:this.onShopClick}))),r.a.createElement(N,{scrollPoint:250})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(tt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},92:function(e,t,a){},94:function(e,t,a){e.exports=a.p+"static/media/logo.39305e8b.png"},96:function(e,t){e.exports="data:image/jpeg;base64,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"},99:function(e){e.exports=JSON.parse('{"signIn":[{"title":"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442","description":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0432\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442","fields":[{"type":"text","icon":"account_circle","placeholder":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d","name":"name"},{"type":"password","icon":"lock","placeholder":"\u041f\u0430\u0440\u043e\u043b\u044c","name":"password"}]}],"signUp":[{"title":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f","description":"\u0414\u043b\u044f \u0432\u0445\u043e\u0434\u0430 \u0432 \u0447\u0430\u0442 \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f","fields":[{"type":"text","icon":"account_circle","placeholder":"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f","name":"name"},{"type":"text","icon":"account_circle","placeholder":"\u0412\u0430\u0448\u0430 \u0444\u0430\u043c\u0438\u043b\u0438\u044f","name":"surName"},{"type":"text","icon":"account_circle","placeholder":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d","name":"login"},{"type":"email","icon":"email","placeholder":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email","name":"email"},{"type":"password","icon":"lock","placeholder":"\u041f\u0430\u0440\u043e\u043b\u044c","name":"password"},{"type":"password","icon":"lock","placeholder":"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c","name":"repeatPassword"}]}]}')}},[[109,1,2]]]);
//# sourceMappingURL=main.e38fbb5a.chunk.js.map