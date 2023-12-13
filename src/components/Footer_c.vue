<script setup> /* BALISE SCRIPT POUR JAVASCRIPT */

</script>

<template> <!-- BALISE TEMPLATE POUR HTML -->
<footer id="footer">
    <div id="pages">
        <a href="App.vue">Accueil</a>
        <a href="Event.vue">Evenements</a>
        <a href="Offers.vue">Bons plans</a>
        <a href="Members.vue">Membres</a>
        <a href="Contact.vue">Contact</a>
        <a href="Shop.vue">Boutique</a>
    </div>
    <div id="contacts">
        Address : 29 avenue Leclerc
        Number : 04 28 29 25 75
        City : 69007 Lyon
        Mail : bde.estiam.lyon7@gmail.com
    </div>
    <div id="reseaux">
        <a href="https://www.instagram.com/bde.estiam_lyon">Instagram</a>
        <a href="https://discord.com/invite/wwKDpn7r">Discord</a>
        <a href="https://www.facebook.com/profile.php/?id=100068550985078&name=xhp_nt__fb__action__open_user&locale=fr_FR">Facebook</a>
    </div>

</footer>
</template>

<style scoped> /* BALISE SCRIPT POUR CSS */
footer {
    display: flex;
    margin-top: auto;
    position: fixed;
    background-color: #6231C6;
    text-align: center;
    width: 100%;
    margin: 0;
    padding: 5px;
    color: #fff;
    font-size: 20px;
    bottom: 0;
}

#pages {
    display: flex;
    justify-content: center;
    width: 30%;
    display: inline-block;
}

#contacts {
    display: flex;
    justify-content: center;
    width: 30%;
    display: inline-block;
}

#reseaux {
    display: flex;
    justify-content: center;
    width: 30%;
    display: inline-block;
}

#footer{
    text-align: center;
    display:flex;
    justify-content: center;
    
}
</style>