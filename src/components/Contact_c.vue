<script setup> /* BALISE SCRIPT POUR JAVASCRIPT */
    
</script>

<template>
    <section id="contact">
        <div class="localisation_contact_div">
            <div class="localisation">
                <h3>Notre Adresse</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d36181.009035497416!2d4.842460965122556!3d45.74887381928514!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ebec3c2047f5%3A0xa0af86cfede1fc84!2s%C3%89STIAM%20Lyon!5e0!3m2!1sfr!2sfr!4v1668169787108!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>" 
            </div>

            <div class="form_contact">
                <h3>Envoyer un message</h3>
                <form action="#">
                    <input type="text" placeholder="Nom">
                    <input type="email" placeholder="Adresse Mail">
                    <input type="text" placeholder="Objet">
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <input type="submit" value="Envoyer">
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped>

    #contact {
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 0 12%;
    margin-top: 25vh;
    margin-bottom: 25vh;
    
}
.localisation_contact_div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 100px 0;
    height: 80vh;
}
.localisation {
    width: 49%;
    padding: 15px;
    border-radius: 6px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
}
.localisation iframe {
    width: 100%;
    border-radius: 6px;
}
.localisation_contact_div .form_contact {
    width: 49%;
    height: 100%;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    padding: 15px;
    border-radius: 6px;
}
.localisation_contact_div h3 {
    margin-bottom: 10px;
    font-size: 18px;
}
.localisation_contact_div .form_contact form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
}
.form_contact form input , textarea {
    border: 1px solid #ccc;
    width: 100%;
    margin-bottom: 15px;
    padding: 5px;
    outline: 0;
    border-radius: 6px;
    font-size: 15px;
    resize: none;
}
.form_contact form input[type="submit"]{
    margin-bottom: 0;
    background-color: #6231C6;
    color: #fff;
    border: 0;
}
</style>