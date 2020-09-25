export const fruitsMixin = {
    data() {
        return {
            globalFilter: " GLOBAL Filter",
            localFilter: "Local Filter",
            fruits: ["Apple", "Mango", "Lemon", "banana", "organe"],
            selected: "",
        };
    },

    computed: {
        filterFruit() {
            return this.fruits.filter((el) => {
                return el.match(this.selected);
            });
        },
    },
}