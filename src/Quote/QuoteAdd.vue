<template>
<div class="row">
    <form action="#">
        <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
            <label for="title"> Add Quote</label>
            <textarea name="quote" id="quote" cols="100" rows="3" v-model="quote"></textarea>
        </div>
        <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
            <button class="btn btn-primary" @click.prevent="AddQuote">Add Quote</button>
        </div>
        
    </form>

</div>
</template>

<script>
export default {
    name: 'Quote',
    data() {
        return {
            quote:''
        }
    },
    methods: {
        AddQuote(){
            this.$emit('NewQuote', this.quote);
            this.quote = ''
        }
    },
}
</script>

<style>
form{
    margin: 0px auto;
}
.panel-body {
    color: #6e6e6e;
}

.quote {
    cursor: pointer;
    text-align: center;
}

.quote:hover {
    background-color: #ffe2e2;
}
</style>
