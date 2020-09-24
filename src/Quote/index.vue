<template>
<div class="container">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuote"></app-header>
    <hr />
    <add-quote @NewQuote="NewQuote" />
    <hr />
    <quote-grid :quotes="quotes" @DelQuote="DelQuote"></quote-grid>
</div>
</template>

<script>
import QuoteGrid from "./QuoteGrid";
import AddQuote from "./QuoteAdd";
import AppHeader from "./Header";
export default {
    name: "Quote",
    data() {
        return {
            quotes: ["Default Quote"],
            maxQuote: 10,
        };
    },
    methods: {
        NewQuote(quote) {
            if (this.quotes.length >= this.maxQuote) {
                alert("Max quote");
            } else {
                this.quotes.push(quote);
            }
        },
        DelQuote(index) {
            this.quotes.splice(index, 1);
        },
    },
    components: {
        QuoteGrid,
        AddQuote,
        AppHeader,
    },
};
</script>

<style>
.panel-body {
    color: #6e6e6e;
}

.quote {
    cursor: pointer;
}

.quote:hover {
    background-color: #ffe2e2;
}
</style>
