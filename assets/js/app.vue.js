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
        $(".owl-carousel").owlCarousel({
            items: 4,
            lazyLoad: true,
            loop: true,
            dots: true,
            margin: 30,
            responsiveClass: true,
            responsive: {
              0: {
                items: 1
              },
              600: {
                items: 1
              },
              1000: {
                items: 1
              }
            }
          });
    },
    
});
app.mount("#app");
