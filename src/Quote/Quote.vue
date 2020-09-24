<template>
<div class="col-sm-4 col-md-3 col-lg-2">
    <div class="panle panel-defaul">
        <div class="panel-body quote">
            <slot></slot>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Quote",
    data() {
        return {};
    },
};
</script>

<style>
.panel-body {
    color: #6e6e6e;
}

.quote {
    cursor: pointer;
    text-align: center;
    border: 1px solid #6e6e6e;
    padding: 1%;
    border-radius: 10px;
    margin-bottom: 5%;
}

.quote:hover {
    background-color: #ffe2e2;
}
</style>
