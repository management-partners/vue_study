<template>
<div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-1">
            <h2>Build-in Directive</h2>
            <p v-text="'Some text'"></p>
            <p v-html="'<strong>Some text</strong>'"></p>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-1">
            <h2>Custom Directive</h2>
            <p v-high-light="'red'" v-text="'Global dirctive Some text'"></p>
            <p v-high-light-parameter:background="'red'" v-text="'Global directive with parameter Some text'"></p>
            <p v-high-light-parameter-delayed:background.delayed="'red'" v-text="'Global directive have to delay Some text'"></p>
            <hr />
            <p v-local-high-light:background.blink="'green'" v-html="'<strong>Some text</strong>'"></p>
            <p v-html="'<strong>Some text</strong>'"></p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Directive",
    data() {
        return {};
    },
    directives: {
        "local-high-light": {
            bind(el, binding, vnode) {
                var delay = 0;
                if (binding.modifiers["delayed"]) {
                    delay = 300;
                }
                if (binding.modifiers["blink"]) {
                    let mainColor = binding.value;
                    let secondColor = "blue";
                    let currentColor = mainColor;
                    setTimeout(() => {
                        setInterval(() => {
                            currentColor == secondColor ?
                                (currentColor = mainColor) :
                                (currentColor = secondColor);
                            if (binding.arg == "background") {
                                el.style.backgroundColor = currentColor;
                            } else {
                                el.style.backgroundColor = currentColor;
                            }
                        }, 1000);
                    }, delay);
                } else {
                    setTimeout(() => {
                        if (binding.arg == "background") {
                            el.style.backgroundColor = currentColor;
                        } else {
                            el.style.backgroundColor = currentColor;
                        }
                    }, delay);
                }
            },
        },
    },
};
</script>
