const { createApp } = Vue;

createApp({
    data(){
        return{
            name: "Eslam",
            age: "25",
            link: "https://google.com",
        };
    },
    methods:{
        sayHi(){
            return "Hello World!";
        },
    },
}).mount("#app-root");