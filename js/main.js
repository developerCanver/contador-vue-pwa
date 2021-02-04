const app = Vue.createApp({
    data(){
        return{
            title: "Contador App - Vue",
            count: 0,
        }
    },
    methods: {//metodos que se llamo el darle click por clg
        disCount(){ //() envio de parametros
           this.count -= 1; 
        },
        addcount(){
            this.count += 1;
            console.log("add");
        },
        modCount(instruction = "add", limit = 1){
            if(instruction === "dis") 
                this.count -= limit;
            else
                this.count += limit;
        }

    }
})