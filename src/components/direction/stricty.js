import Vue from "vue"
Vue.directive("stricky",{
    update:function (el,binding){
        let {val,oldValue}=binding;
        if(value&&(value!=oldValue)){
            let child=document.getElementById(value)
            el.scrollTop=child.offsetTop
        }
    }
})