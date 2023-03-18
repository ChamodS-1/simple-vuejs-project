let app = Vue.createApp({

data: function(){
    return{
        input1:'',
        input2:'',
        input3:'',
        input4:'',
        input5:'',
        answer:'0',
        average:'0'
    }
},
methods:{

    input(){

        this.answer=+this.input1 + +this.input2 + +this.input3 + +this.input4 + +this.input5;
        this.average=(+this.input1 + +this.input2 + +this.input3 + +this.input4 + +this.input5)/5;
    }

}

})

app.mount('#app');