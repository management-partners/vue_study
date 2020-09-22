<template>
    <div class="container">
        <add-quote @NewQuote="NewQuote"/>
        <hr>
       <quote-grid :quotes="quotes" @DelQuote="DelQuote"></quote-grid>
    </div>
</template>
<script>
import QuoteGrid from './QuoteGrid'
import AddQuote from './QuoteAdd'
export default {
    name: 'Quote',
    data() {
        return {
            quotes: ['Default Quote'],
            maxQuote: 10
        }
    },
    methods: {
        NewQuote(quote){
            this.quotes.push(quote);
        },
        DelQuote(index){
            this.quotes.splice(index, 1)
        }
    },
    components:{
        QuoteGrid,
        AddQuote
    }
}
</script>
<style>
    .panel-body{
        color: #6e6e6e;
    }
    .quote{
        cursor: pointer;
    }
    .quote:hover{
        background-color: #ffe2e2;
    }
</style>