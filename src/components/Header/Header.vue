<template>
    <header class="Header flex content-center flex-wrap ">
            <div class="p-left-right-16 w-full">
                <div class="flex ">
                    <div class="flex-wrap">
                        <el-dropdown trigger="click" class="header__burger-menu">
                        <span class="el-dropdown-link">
                            <img src="../../assets/burger-menu-icon.png" style="width: 36px; height: 36px;" alt="burger-btn"/>
                        </span>
                            <el-dropdown-menu slot="dropdown">
                                <router-link :to="`/`" class="header-link">
                                    <el-dropdown-item>
                                        Accueil
                                    </el-dropdown-item>
                                </router-link>
                                <span v-for="(linkData, index) in links" :key="index">
                                    <router-link :to="`/${linkData.link}`"
                                                 v-bind:class="{ 'header-link': !isLinkActive(`${linkData.routeName}`),
                                                             'header-link-focus': isLinkActive(`${linkData.routeName}`) }">
                                        <el-dropdown-item >

                                            {{linkData.displayName}}

                                        </el-dropdown-item>
                                    </router-link>
                                </span>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <div class="mobile-header-title flex-grow flex items-center">
                        <div class="m-auto">
                            <router-link :to="`/`" class="header-link">
                                <h3>Sophrologie Bordeaux</h3>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        <div class="content">
            <center class="header__normal-size">
                <table>
                    <tr>
                        <td>
                            <SophrologieLogo/>
                        </td>
                        <td>
                            <div class="inline-block align-middle bg-blue m-left-16 m-right-16" style="height: 40px; width: 2px; "></div>
                        </td>
                        <td>
                            <div class="inline-block align-middle m-left-16" v-for="(linkData, index) in links" :key="index">
                                <router-link :to="`/${linkData.link}`"
                                             v-bind:class="{ 'header-link': !isLinkActive(`${linkData.routeName}`),
                                             'header-link-focus': isLinkActive(`${linkData.routeName}`) }">
                                    {{linkData.displayName}}
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
        data: function() {
            return {
                links: [
                    {
                        displayName: this.$languages.strings.who_am_i[this.$languages.country],
                        link: "qui-suis-je",
                        routeName: "WhoAmI",
                    },
                    {
                        displayName: this.$languages.strings.what_is_sophrology[this.$languages.country],
                        link: "qu-est-ce-que-la-sophrologie",
                        routeName: "WhatIsSophrology",
                    },
                    {
                        displayName: this.$languages.strings.sophrology_in_business[this.$languages.country],
                        link: "sophrologie-en-entreprise",
                        routeName: "SophrologyForBusiness",
                    },
                    {
                        displayName: this.$languages.strings.sessions[this.$languages.country],
                        link: "seances",
                        routeName: "Sessions",
                    },
                    {
                        displayName: this.$languages.strings.contact_and_prices[this.$languages.country],
                        link: "contact-et-tarifs",
                        routeName: "ContactAndPrices",
                    }
                ]
            };
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
