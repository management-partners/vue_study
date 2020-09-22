<template>
    <div class="row">
        <app-quote v-for="(quote, index) in quotes" :key="index" @click.native="deteteQuote(index)"> {{ quote }}</app-quote>
    </div>
</template>

<script>
import Quote from './Quote'

export default {
    name: 'QuoteGrid',
    props: ['quotes'],
    components: {
        AppQuote: Quote
    },
    methods: {
        deteteQuote(index){
            this.$emit('DelQuote', index);
        }
    },
}
</script>
<style>

</style>