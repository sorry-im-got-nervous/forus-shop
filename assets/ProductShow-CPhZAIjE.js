import{_ as u,s as i,c as s,a as e,t as d,l as p,o as a}from"./index-BNJz7PZL.js";const n={props:{id:{type:Number,required:!0},slug:{type:String,required:!0}},computed:{product(){return i.products.find(r=>r.id===this.id)}},methods:{addToCart(){const r={id:this.product.id,name:this.product.name,image:`/images/${this.product.image}`,price:this.product.price,type:"product"};this.$store.dispatch("addToCart",r)}}},l={key:0,class:"product"},m={class:"product-details"},_=["src","alt"];function h(r,c,g,f,C,t){return a(),s("div",null,[t.product?(a(),s("section",l,[e("h1",null,d(t.product.name),1),e("div",m,[e("img",{src:`/images/${t.product.image}`,alt:t.product.name},null,8,_),e("p",null,d(t.product.description),1),e("p",null,"Цена: "+d(t.product.price.toFixed(2))+" ₽",1),e("button",{class:"btn",onClick:c[0]||(c[0]=(...o)=>t.addToCart&&t.addToCart(...o))},"Добавить в корзину")])])):p("",!0)])}const k=u(n,[["render",h]]);export{k as default};
