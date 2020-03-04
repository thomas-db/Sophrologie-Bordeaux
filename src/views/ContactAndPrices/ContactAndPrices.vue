<template>
    <div class="ContactAndPrices">
        <div class="ContactAndPrices__top-bg"></div>
        <div class="ContactAndPrices__content content shadow1 p-64">
            <div class="flex bg-gray-200">
                <div class="w-1/2">
                    <h1>Consultation</h1>
                    <h3 class="inline-block m-top-8">• <span class="underline">Consultations individuelles</span></h3>
                    <div class="m-left-13 m-top-16">
                        Je vous reçois à mon domicile,<br />
                        35 cours Evrard de Fayolle<br />
                        33000 Bordeaux
                        <div class="m-top-8">
                            A noter: 4ème étage sans ascenseur.<br />
                            Tram C ou Bus 15 Arrêt « Camille Godard » ou Bus 4 « Arrêt Paul Doumer ».
                        </div>
                    </div>
                    <iframe width="100%" height="500" id="gmap_canvas" class="shadow2 m-top-16"
                            src="https://maps.google.com/maps?q=35%20cours%20Evrard%20de%20Fayolle%2033000%20Bordeaux&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    <a href="https://www.embedgooglemap.net/blog/elementor-review/"></a>

                </div>
                <div class="w-1/2" style="margin-left: 32px;">
                    <h1 style="color:white; user-select: none;">-</h1>
                    <h3 class="inline-block m-top-8">• <span class="underline">Entreprises séances individuelles ou en groupes</span></h3>
                    <div class="m-left-13 m-top-16">Je me déplace sur le lieu de votre établissement.
                        Groupes de 3 à 12 personnes</div>
                    <br />
                    <h3 class="inline-block m-top-8">• <span class="underline">Evènements découverte de la Sophrologie et séances en groupe</span></h3>
                    <div class="m-left-13 m-top-16">
                        Je vous invite à consulter <a href="https://www.facebook.com/BordeauxBienEtre/?tn-str=k*F" target="_blank" class="blue-link">ma page Facebook</a> qui vous permettra de vous informer sur les
                        évènements à venir. Les séances se déroulent dans les espaces bien-être, les espaces associatifs,
                        les clubs sportifs, les maisons de quartier.
                    </div>
                    <br />
                </div>
            </div>
            <br />
            <br />
            <div class="flex bg-gray-200">
                <div class="w-1/2">
                    <h1>Contact</h1>
                    <h3 class="underline inline-block m-top-8">Contacter moi au: </h3> <h3 class="inline-block">06 08 77 88 95</h3>
                    <br />
                    <br />
                    <h3 class="underline">Ou par e-mail: </h3>
                    <el-input placeholder="Adresse mail" v-model="contact.email" class="m-top-8" style="width: 80%;"></el-input>
                    <br />
                    <el-input
                            type="textarea"
                            :rows="7"
                            placeholder="Contenue du message"
                            class="m-top-8"
                            v-model="contact.content">
                    </el-input>
                    <button class="btn m-top-8">Envoyer</button>
                </div>
                <div class="w-1/2" style="margin-left: 32px;">
                    <h1>Tarifs</h1>
                    <div>• Séance individuelle : 50 €<br />
                        <div class="m-left-13">étudiants, -25 ans, demandeurs d’emploi : 40 €</div>
                    </div>
                    <br />
                    <p class="font-semibold">Certaines mutuelles remboursent la sophrologie, renseignez-vous.</p>
                    <br />
                    <div>• Séance en groupe : 15 €
                        <div class="m-left-13">Forfait 10 séances : 120 €</div>
                    </div>
                    <br />
                    <p>• Entreprises : devis sur demande</p>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    </div>
</template>

<style type="text/scss" scoped>
    @import "./_ContactAndPrices.scss";
</style>

<script>
    export default {
        props: {
        },
        data: function () {
            return {
                contact: {
                    email: "",
                    content: "",
                },
            };
        },
    };
</script>
