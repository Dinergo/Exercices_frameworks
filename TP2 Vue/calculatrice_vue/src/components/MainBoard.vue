<script>
import Bouton from './Bouton.vue'
import Ecran from './Ecran.vue'

export default {
    components : {
        Bouton,
        Ecran,
    },
    data() {
        return {
            result : '',
            buffer : '',
            operation: '-',
            isOperationDisplayed: false,
            isBufferDisplayed: false,
            isFocusOnResult : true
        }
    },
    
    methods : {
        
        changeOperation(symbol) {


            if(this.buffer) {
                this.resultat();
            }
            console.log(this.result)
            this.operation = symbol;
            this.isOperationDisplayed = true;
            this.isFocusOnResult = false;

            if(!this.result) {
                this.result = 0;
                
            }
        },


        select(input){
            if(this.isFocusOnResult) {
                this.result = this.result + input;
            }
            else {
                
                this.buffer = this.buffer + input;
                if(!this.isBufferDisplayed) {
                    this.isBufferDisplayed = true;
                }
            }
        },

        resultat() {

            if(!this.buffer) {
                this.buffer = "0";
            }
            
            switch(this.operation) {
                case '+' :
                     this.result = (parseFloat(this.result) + parseFloat(this.buffer)).toString(10);
                     
                break;
                case '-':
                    this.result = (parseFloat(this.result) - parseFloat(this.buffer)).toString(10);
                break;

                case 'x':
                    this.result = (parseFloat(this.result) * parseFloat(this.buffer)).toString(10);
                break;

                case '%': 
                    this.result = (parseFloat(this.result) / parseFloat(this.buffer)).toString(10);
                break;

                default:
                break;
            }

            this.isOperationDisplayed = false;
            this.operation = "";
            this.isBufferDisplayed = false;
            this.isFocusOnResult = true;
            this.buffer = "";
        },

        virgule(){
            if(this.isFocusOnResult) {
                if(!this.result.includes('.')){
                    this.select('.');
                }
            }
            else {
                if(!this.buffer.includes('.')){
                    this.select('.');
                }
            }
        },

        nettoyage() {
            this.isOperationDisplayed = false;
            this.operation = "";
            this.isBufferDisplayed = false;
            this.buffer = "";
            
            this.isFocusOnResult = true;
            this.result = "";

        }

    }
    
    
    
}
</script>

<template>


<div>

    <Bouton nom='0' @click="select(0)"/>
    <Bouton nom='1' @click="select(1)"/>
    <Bouton nom='2' @click="select(2)"/>
    <Bouton nom='3' @click="select(3)"/>
    <Bouton nom='4' @click="select(4)"/>
    <Bouton nom='5' @click="select(5)"/>
    <Bouton nom='6' @click="select(6)"/>
    <Bouton nom='7' @click="select(7)"/>
    <Bouton nom='8' @click="select(8)"/>
    <Bouton nom='9' @click="select(9)"/>
</div>
<div>
    <Bouton nom='+' @click = "changeOperation('+')"/>    
    <Bouton nom='-' @click = "changeOperation('-')"/>    
    <Bouton nom='x' @click = "changeOperation('x')"/>    
    <Bouton nom='%' @click = "changeOperation('%')"/>
    <Bouton nom='.' @click = "virgule()"/>

</div>

<div>
    <Bouton nom='=' @click = "resultat()"/>    
  
    <Bouton nom='clear' @click = "nettoyage()"/>    

    

</div>
<div>
    <Ecran :valeur='result' displayed = 'true' /> <span> </span>
    <Ecran :valeur='operation' :displayed = 'isOperationDisplayed'  /> <span> </span>
    <Ecran :valeur='buffer' :displayed = 'isBufferDisplayed' />
    
</div>

    



</template>