module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
                @import "@/scss/_variables.scss";
                @import "@/scss/_style.scss";
                @import "@/scss/_basics.scss";
                `
            }
        }
    }
};
