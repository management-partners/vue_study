<template>
<div>
    <app-quote :quoteName="name">
        <h2 slot="title">{{ QuoteTitle }}</h2>
        <h4 slot="content">{{ Quotecontent }}</h4>
    </app-quote>
</div>
</template>

<script>
import QuoteDetail from './QuoteDetail'

export default {
    name: 'Quote',
    data() {
        return {
            QuoteTitle: 'Quote Title',
            SubTitle: 'Quote subtitle',
            Quotecontent : 'Quote Content here',
            name: 'Quote Name'
        }
    },
    components: {
        appQuote: QuoteDetail
    }
}
</script>
<style scoped>
    h4{
        margin: 2% auto;
        padding: 5%;
    }
</style>
