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
    updated() {
        new fJs.Intersection({
            elt: '.revealElement',
            class: "animate__animated animate__pulse opacity-100",
            root: null,
            ratio: 0.2,
            rootMargin: '0px',
            threshold: 0.7,
        });
    }
});
app.mount("#app");
