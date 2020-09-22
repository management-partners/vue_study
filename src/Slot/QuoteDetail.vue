<template>
<div class="quote">
    <slot name="title"></slot>
    <div class="sub">
        <slot name="subtitle">{{ subtitle }}</slot>
    </div>
    <slot name="content"></slot>
    {{ quoteName }}
</div>
</template>

<script>
export default {
    name: 'QuoteDetail',
    props: {
        quoteName: {
            type: String
        }
    },
    data() {
        return {
            subtitle: 'Quote subtitle'
        }
    },

}
</script>

<style>
.quote {
    margin: 2% auto;
    padding: 5%;
}

.sub {
    text-align: center;
    color: slategrey;
}
</style>
