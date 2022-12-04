<template>
    <div class="ContactAndPrices">
        <div class="ContactAndPrices__top-bg page-top-bg"></div>
        <div class="ContactAndPrices__content page-content content shadow1">
            <div class="content--first-block bg-gray-200">
                <div class="first-block--consultation">
                    <h1>Consultation</h1>

                  <!-- Doctolib commented
                  <h3 class="inline-block m-top-8" style="text-decoration: none;">• <span class="underline">Prise de rendez-vous en ligne avec Doctolib</span></h3>
                  <div class="m-left-13 m-top-16">
                    <a href="https://www.doctolib.fr/sophrologue/bordeaux/france-ehny?utm_campaign=website-button&amp;utm_source=france-ehny-website-button&amp;utm_medium=referral&amp;utm_content=option-3&amp;utm_term=france-ehny"
                       target="_blank">
                      <button class="docto-button">Prendre rendez-vous !</button>
                    </a>
                  </div>
                  -->
                    <h3 class="inline-block m-top-32">• <span class="underline">Consultations individuelles</span></h3>
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
                <div class="first-block--business-and-events" style="">
                    <img src="@/assets/photo_cabinet.jpg" style="width: 100%;" class="inline-block">
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
            <div class="content--second-block bg-gray-200">
                <div class="second-block--contact">
                    <h1>Contact</h1>
                    <h3 class="underline inline-block m-top-8">Contactez moi au: </h3> <h3 class="inline-block">06 08 77 88 95</h3>
                    <br />
                    <br />
                    <h3 class="underline">Ou par e-mail: (france.ehny@gmail.com)</h3>
                    <form @submit.prevent="sendEmail" id="send-email-form">
                        <el-input placeholder="Adresse mail"
                                  v-model="contact.email"
                                  required
                                  type="email"
                                  name="_replyto"
                                  class="m-top-8"
                                  style="width: 80%;"></el-input>
                        <br />
                        <el-input
                                type="textarea"
                                name="message"
                                :rows="7"
                                placeholder="Contenue du message"
                                class="m-top-8"
                                required
                                v-model="contact.content">
                        </el-input>
                        <button class="btn m-top-8" ref="buttonSendEmailRef">Envoyer</button>
                    </form>
                </div>
                <div class="second-block--individual">
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
    import axios from "axios";

    export default {
      metaInfo: {
        title: 'Contact',
        titleTemplate: `%s - Sophrologie Bordeaux`,
        meta: [
          {'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'},
          {name: 'viewport', content: 'width=device-width, initial-scale=1'},
          {name: 'description', content: "Sophrologue à Bordeaux. La sophrologie est un outil fabuleux qui permet d’être pilote de sa vie, d’optimiser ses capacités et de s’adapter au..."}
        ]
      },
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
        methods: {
            sendEmail() {
                if (this.contact.email && this.contact.content) {
                    /** Button active loading mode */
                    let day = new Date().getDay();

                    /** On free formspree only 50 mails per form, so i have two forms */
                    let formspreeId = "mlenzdzb";
                    if (day >= 15)
                        formspreeId = "mlenzdqb";

                    this.$refs.buttonSendEmailRef.disabled = true;
                    this.$refs.buttonSendEmailRef.classList.add("loading");
                    /** https://www.youtube.com/watch?v=tGEi95Z7duw */
                    /** https://formspree.io/ */
                    /** debra...@gmail.com*/
                    return new Promise((resolve, reject) => {
                        axios.post(`https://formspree.io/${formspreeId}`, { message: this.contact.content, _replyto: this.contact.email }).then((response) => {

                            this.$notify({
                                title: 'Succès',
                                message: "Votre mail a bien été envoyé",
                                type: 'success'
                            });
                            /** Reset button */
                            this.$refs.buttonSendEmailRef.disabled = false;
                            this.$refs.buttonSendEmailRef.classList.remove("loading");
                            resolve();
                        }).catch((error) => {
                            this.$notify.error({
                                    title: "Erreur lors de l'envoie de mail",
                                    message: `Le mail n'a pas été envoyé`
                                });
                            /** Reset button */
                            this.$refs.buttonSendEmailRef.disabled = false;
                            this.$refs.buttonSendEmailRef.classList.remove("loading");
                            reject();
                        });
                    });
                } else {
                    this.$notify({
                        title: 'Attention',
                        message: "Vous n'avez pas rempli toutes les informations",
                        type: 'warning'
                    });
                }
            }
        }
    };
</script>
