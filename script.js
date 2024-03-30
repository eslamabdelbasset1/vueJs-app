const { createApp } = Vue;
const my_component ={
    template: "<h3>hello World!</h3>",
};
createApp({
    data(){
        return{
        };
    },
    components:{
        my_component,
    }


}).mount("#app-root");