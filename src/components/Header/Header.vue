<template>
    <header class="Header flex content-center flex-wrap ">
        <div class="content m-auto">
<!--            <center>-->
                <SophrologieLogo class="inline-block align-middle m-left-32"/>
                <div class="inline-block align-middle bg-blue m-left-32" style="height: 40px; width: 2px; "></div>
                <div class="inline-block align-middle m-left-32">
                    <router-link to="/qui-suis-je">
                        {{$languages.strings.who_am_i[$languages.country]}}
                    </router-link>
                </div>
                <div class="inline-block align-middle m-left-16">
                    <router-link to="/qu-est-ce-que-la-sophrologie">
                        {{$languages.strings.what_is_sophrology[$languages.country]}}
                    </router-link>
                </div>
                <div class="inline-block align-middle m-left-16">
                    <router-link to="/sophrologie-en-entreprise">
                        {{$languages.strings.sophrology_in_business[$languages.country]}}
                    </router-link>
                </div>
                <div class="inline-block align-middle m-left-16">
                    <router-link to="/seances">
                        {{$languages.strings.sessions[$languages.country]}}
                    </router-link>
                </div>
                <div class="inline-block align-middle m-left-16">
                    <router-link to="/contact-et-tarifs">
                        {{$languages.strings.contact_and_prices[$languages.country]}}
                    </router-link>
                </div>
<!--            </center>-->
        </div>

<!--        <div class="Header__burger-menu-icon" v-on:click="(navBurgerMenuOpen) ? showBurgerMenu(false) : showBurgerMenu(true)">-->
<!--            &lt;!&ndash;<div class="icon-nav-burger-menu" v-on:click="test()">&ndash;&gt;-->
<!--            <table style="margin:auto;">-->
<!--                <tr>-->
<!--                    <td>-->
<!--                        azd-->
<!--                        <img v-if="navBurgerMenuOpen" src="@/assets/icon-menu-close.png"-->
<!--                             alt="cart"-->
<!--                             style="margin-top:-6px; width:30px; height:30px; ">-->
<!--                        <img v-else src="@/assets/icon-menu.png"-->
<!--                             alt="cart"-->
<!--                             style="margin-top:-6px; width:30px; height:30px; ">-->

<!--                    </td>-->
<!--                </tr>-->
<!--            </table>-->
<!--        </div>-->
    </header>
</template>

<style type="text/scss" scoped>
    @import "./_Header.scss";
</style>

<script>
    import SophrologieLogo from "../SophrologieLogo/SophrologieLogo";
    export default {
        components: {SophrologieLogo},
        props: {
        },
        mounted() {
            console.log("this.$languages.country");
            console.log(this.$languages.country);
        }
    };
</script>
