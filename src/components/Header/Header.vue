<template>
    <header class="Header flex content-center flex-wrap ">
        <div class="content m-auto">
            <center>
                <table>
                    <tr>
                        <td>
                            <SophrologieLogo/>
                        </td>
                        <td>
                            <div class="inline-block align-middle bg-blue m-left-16 m-right-16" style="height: 40px; width: 2px; "></div>
                        </td>
                        <td>
                            <div class="inline-block align-middle m-left-16">
                                <router-link to="/qui-suis-je"
                                             v-bind:class="{ 'header-link': !isLinkActive('WhoAmI'),
                                             'header-link-focus': isLinkActive('WhoAmI') }">
                                    {{$languages.strings.who_am_i[$languages.country]}}
                                </router-link>
                            </div>
                            <div class="inline-block align-middle m-left-16">
                                <router-link to="/qu-est-ce-que-la-sophrologie"
                                             v-bind:class="{ 'header-link': !isLinkActive('WhatIsSophrology'),
                                             'header-link-focus': isLinkActive('WhatIsSophrology') }">
                                    {{$languages.strings.what_is_sophrology[$languages.country]}}
                                </router-link>
                            </div>
                            <div class="inline-block align-middle m-left-16">
                                <router-link to="/sophrologie-en-entreprise"
                                             v-bind:class="{ 'header-link': !isLinkActive('SophrologyForBusiness'),
                                             'header-link-focus': isLinkActive('SophrologyForBusiness') }">
                                    {{$languages.strings.sophrology_in_business[$languages.country]}}
                                </router-link>
                            </div>
                            <div class="inline-block align-middle m-left-16">
                                <router-link to="/seances"
                                             v-bind:class="{ 'header-link': !isLinkActive('Sessions'),
                                             'header-link-focus': isLinkActive('Sessions') }">
                                    {{$languages.strings.sessions[$languages.country]}}
                                </router-link>
                            </div>
                            <div class="inline-block align-middle m-left-16">
                                <router-link to="/contact-et-tarifs"
                                             v-bind:class="{ 'header-link': !isLinkActive('ContactAndPrices'),
                                             'header-link-focus': isLinkActive('ContactAndPrices') }">
                                    {{$languages.strings.contact_and_prices[$languages.country]}}
                                </router-link>
                            </div>
                        </td>
                    </tr>
                </table>
            </center>
        </div>
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
            console.info("this.$route.currentRoute")
            console.info(this.$route.name)
        },
        methods: {
            isLinkActive(linkName) {
                return this.$route.name === linkName;
            }
        },
    };
</script>
