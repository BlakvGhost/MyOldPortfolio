const app = Vue.createApp({
    data() {
        return {
            data: {},
            lang: "fr",
            soClick: '*',
            loading: true
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
        loadNewTab: function(e) {
            this.soClick = e.target.getAttribute('data-type');
        }
    },
    mounted() {
        this.lang =
            location.search.length <= 1 ? "fr" : location.search.split("?")[1];
        this.getInfo();
        this.loading = false;
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
        new fJs.AutoWriteText();
    }
});
app.mount("#app");
