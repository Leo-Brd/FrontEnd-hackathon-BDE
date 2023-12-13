<script setup> /* BALISE SCRIPT POUR JAVASCRIPT */
</script>

<template>
    <div>
        <h1>PAGE BONS PLANS</h1>
        <h1>Profitez de <span>Réductions </span>toute l'année</h1>
        <p>Plein de réductions toute l'année</p>
        <div>
            <img src="../assets/img/page-acceuil.png" alt="Image d'accueil">
        </div>

        <div class="reductions">
            <img src="../assets/img/réductions1.png" alt="Réduction 1">
            <img src="../assets/img/réduction2.png" alt="Réduction 2">
            <img src="../assets/img/réductions3.png" alt="Réduction 3">
        </div>
    </div>

    <footer>
        <p> BDE éstiam Copyright 2022 </p>
    </footer>
</template>

<style scoped>
/* Styles spécifiques à la page Bon Plan */
#bons-plans {
    margin-top: 100px;
    padding: 0 8%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
}

#bons-plans .left {
    width: 40%;
}

#bons-plans .left h1 {
    font-size: 35px;
    margin-bottom: 10px;
}

#bons-plans .left h1 span {
    color: #6231C6;
}

#bon-plan .left p {
    margin-bottom: 30px;
    color: rgb(62, 62, 62);
    font-size: 20px;
}

#bons-plans .left a {
    background-color: #6231C6;
    padding: 10px 20px;
    font-size: 14px;
    color: #fff;
    transition: 0.5s;
}

#bons-plans .left a:hover {
    background-color: #000;
}

#bons-plans .right {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

#bons-plans .right img {
    width: 100%;
}

</style>
