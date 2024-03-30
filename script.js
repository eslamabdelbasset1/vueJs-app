const { createApp } = Vue;

createApp({
    data(){
        return{
            name: "Eslam",
            number: 0,
            age: "25",
            link: "https://google.com",

            students: ["Eslam", "Ahmed", "Mohamed"],
        };
    },
    methods:{
        sayHi(){
            return "Hello World!";
        },
        testFun(){
            this.number++;
        }
    },


}).mount("#app-root");