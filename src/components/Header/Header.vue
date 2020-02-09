<template>
    <header class="Header flex content-center flex-wrap ">
        <div class="content m-auto">
            {{$languages.strings.who_am_i[$languages.country]}}
            {{$languages.strings.what_is_sophrology[$languages.country]}}
            {{$languages.strings.contact_and_prices[$languages.country]}}
        </div>
    </header>
</template>

<style type="text/scss" scoped>
    @import "./_Header.scss";
</style>

<script>
    export default {
        props: {
        },
        mounted() {
            console.log("this.$languages.country");
            console.log(this.$languages.country);
        }
    };
</script>
