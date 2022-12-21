<template>
    <div class="SophrologieLogo">
        <router-link to="/">
            <table style="width: 184px; " class="inline-block">
                <tr>
                    <td>
                        <img src="@/assets/logo_jpg.jpg" style="width: 56px;" class="inline-block" alt="Sophrologie_logo">
                    </td>
                    <td>
                        <div class="text-normal-bold m-left-8">Sophrologue</div>
                        <div class="text-normal-bold company-name__text m-left-8">Bordeaux</div>
                    </td>
                </tr>
            </table>
        </router-link>
    </div>
</template>

<style type="text/scss" scoped>
    @import "./_SophrologieLogo.scss";
</style>

<script>
    export default {
        props: {
        },
    };
</script>
