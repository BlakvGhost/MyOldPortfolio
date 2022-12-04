const app = Vue.createApp({
    data() {
        return {
            data: {},
            lang: "fr",
        };
    },

    methods: {
        getInfo() {
            axios
                .get(`admin/const.data.json`)
                .then((res) => this.data = { ...this.data, ...res.data });
            axios
                .get(`admin/lang/${this.lang}.json`)
                .then((res) => this.data = { ...this.data, ...res.data })
        },
        select() {
            location.assign(`?${this.lang}`);
        },
    },

    mounted() {
        this.lang =
            location.search.length <= 1 ? "fr" : location.search.split("?")[1];
        this.getInfo();
    },    
});
app.mount("#app");
