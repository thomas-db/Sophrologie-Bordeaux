<template>
    <footer class="Footer">
        <div class="Footer__rotated">

        </div>
        <div class="Footer__client-infos">
            <div class="client-infos__content content p-32">
                <p>{{$languages.strings.not_hesitate_to_contact_me[$languages.country]}}</p>
                <br />
                <p class="font-semibold">France Ehny Sophrologue Praticienne</p>
                <p>35 cours Evrard de Fayolle 33000 Bordeaux</p>
                <p>Email: france.ehny@gmail.com</p>
                <p>Téléphone: 06 08 77 88 95</p>
            </div>
        </div>
        <div class="Footer__rights">
            <div class="rights__content content p-32">
                OK FOOTER
            </div>
        </div>
    </footer>
</template>

<style type="text/scss" scoped>
    @import "./_Footer.scss";
</style>

<script>
    export default {
        props: {
        },
    };
</script>
