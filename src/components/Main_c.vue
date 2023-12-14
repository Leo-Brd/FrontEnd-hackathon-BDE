<script setup> /* BALISE SCRIPT POUR JAVASCRIPT */

</script>

<template>
    <section id="home">
        <div class="left">
            <h1>Bienvenue sur le site officiel du <span>BDE de l'éstiam</span></h1>
            <p>Ce site vous permet de découvrir le BDE de l'Estiam, ses étudiants ainsi que de rentrer en contact avec eux. Vous pouvez également accéder à notre boutique en ligne et vous inscrire pour de prochains évènements qui seront communiqués sur ce site.</p>
        </div>
        
        <div class="right">
            <img alt="image d'accueil" src="../assets/img/logoBDE.png">
        </div>
    </section>
</template>

<style scoped>
    #home {
    margin-top: 50px;
    height: calc(100vh - 50px);
    padding: 0 8%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
}


::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
}
::-webkit-scrollbar-thumb{
    background-color: #6231C6;
}

#home .left {
    width: 40%;
    margin-left: 0vh;
    text-align: center;
}
#home .left h1 {
    font-size: 35px;
    margin-bottom: 10px;
}
#home .left h1 span {
    color: #6231C6;
}
#home .left p {
    margin-bottom: 30px;
    color: rgb(62, 62, 62);
    font-size: 20px;
}
#home .left a {
    background-color: #6231C6;
    padding: 10px 20px;
    font-size: 14px;
    color: #fff;
    transition: 0.5s;
}
#home .left a:hover {
    background-color: #000;
}
#home .right {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
#home .right img {
    width: 100%;
}
</style>