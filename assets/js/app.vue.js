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
        $(".isotope-wrapper").each(function() {
            var $isotope = $(".isotope-box", this);
            var $filterCheckboxes = $('input[type="radio"]', this);
        
            var filter = function() {
              var type = $filterCheckboxes.filter(":checked").data("type") || "*";
              if (type !== "*") {
                type = '[data-type="' + type + '"]';
              }
              $isotope.isotope({ filter: type });
            };
        
            $isotope.isotope({
              itemSelector: ".isotope-item",
              layoutMode: "masonry"
            });
        
            $(this).on("change", filter);
            filter();
          });
    }
});
app.mount("#app");
