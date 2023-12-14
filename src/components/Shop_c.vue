<script setup> /* BALISE SCRIPT POUR JAVASCRIPT */

</script>

<template>
    <section id="products">
        <h1 class="section_title">Nos produits</h1>
        <div class="images">
            <ul>
                <li class="products">
                   <div>
                       <img src="../assets/img/sac.jpg" alt="sac">
                   </div>
                   <span>SAC</span>
                   <span class="prix">15€</span>
                   <a href="#">ACHETER MAINTENANT</a>
                </li>
                 <li class="products">
                    <div>
                        <img src="../assets/img/pull.jpg" alt="pull">
                    </div>
                    <span>SWEAT A CAPUCHE</span>
                    <span class="prix">35€</span>
                    <a href="#">ACHETER MAINTENANT</a>
                 </li>
                 <li class="products">
                    <div>
                        <img src="../assets/img/tshirt.jpg" alt="tshirt">
                    </div>
                    <span>T-SHIRT</span>
                    <span class="prix">20€</span>
                    <a href="#">ACHETER MAINTENANT</a>
                 </li>
                 <li class="products">
                    <div>
                        <img src="../assets/img/casquette.jpg" alt="casquette">
                    </div>
                    <span>T-SHIRT</span>
                    <span class="prix">20€</span>
                    <a href="#">ACHETER MAINTENANT</a>
                 </li>
                 <li class="products">
                    <div>
                        <img src="../assets/img/mug.jpg" alt="mug">
                    </div>
                    <span>T-SHIRT</span>
                    <span class="prix">20€</span>
                    <a href="#">ACHETER MAINTENANT</a>
                 </li>
                 <li class="products">
                    <div>
                        <img src="../assets/img/sweat.jpg" alt="sweat">
                    </div>
                    <span>T-SHIRT</span>
                    <span class="prix">20€</span>
                    <a href="#">ACHETER MAINTENANT</a>
                 </li>
            </ul>
        </div>
    </section>

</template>



<style scoped>

.section_title {
    text-transform: uppercase;
    position: relative;
    font-size: 25px;
    margin-top: 120px;
}
.section_title:before {
    position: absolute;
    left: 10px;
    bottom: 0;
    content: "";
    background-color: #6231C6;
    width: 100%;
    height: 5px;
    border-radius: 6px;
}
.section_title:after {
    position: absolute;
    top: 0;
    left: -10px;
    content: "";
    background-color: #6231C6;
    width: 100%;
    height: 5px;
    border-radius: 6px;
}




h1{
  width: 100%;
  text-align: center;
}
.images ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 100px auto;
    padding: 8%;
    margin-top: 0vh;
}
.images li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2.665%;
    transition: 0.5s;
    height: 300px;
    width: 28%;
}

.images li div {
    width: 84%;
    height: 87%;
    margin-bottom: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    
}
.images li div img {
    height: 100%;
    width: 100%;
}

.images li:hover {
    transform: scale(1.05);
    margin: 34px;
}
.images li span {
    color: #000;
    font-size: 18px;
}
#products li span.prix {
   color: #21930c;
   font-weight: bold;
   margin: 0;
}
#products li a {
    background-color: #6231C6;
    color: #fff;
    padding: 5px 20px;
    font-size: 15px;
}
#commitment {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column;
}
.list_commitment {
    margin: 100px 0px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.events {
    margin-left: 30px;
}

.titre-membres {
    font-size: 30px;
    text-align: center;
    font-weight: 700;
}

.poles {
    font-weight: 700;
}

.membres {
    font-size: 25px;
    text-align: left;
}

.Personnes {
    color: #6231C6;
}

.reductions {
    margin-left: 180px;
}

.commitment {
    width: 25%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    padding: 20px;
    margin: 20px;
}



@media (max-width:682px) {
    header {
        padding: 0 10px;
    }
    header .menu {
        display: none;
    }
    #home {
        padding:  0 10px;
        justify-content: center;
        flex-direction: column;
    }
    #home .left ,   #home .right {
        width: 100%;
    }
    #home h1 {
        margin-top: 100px;
    }
    .right {
        margin-top: 50px;
        width: 60%;
    }
    .images li {
        width: 100%;
    }
    #commitment {
        padding: 0 10px;
    }
    .commitment {
        width: 100%;
    }
    #contact {
        height: auto;
    }
    .localisation_contact_div {
        height: auto;
        flex-direction: column;
        width: 100%;
    }
    .localisation{
        width: 100%;
        margin-bottom: 30px;
    }
    .localisation_contact_div .form_contact {
        width: 100%;

    }
    .menu_toggle {
        height: 50px;
        width: 50px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .menu_toggle span {
       width: 35px;
       background-color: #6231C6;
       height: 5px;
       border-radius: 6px;
       transition: 0.5s;
    }
    .menu_toggle span.active {
        width: 0px;
    }
    .menu_toggle::before {
        position: absolute;
        content: "";
        width: 20px;
        height: 5px;
        background-color: #6231C6;
        transform:translateY(10px);
        border-radius: 6px;
        transition: 0.5s;
    }
    .menu_toggle.active::before {
        width: 28px;
        transform: rotate(45deg);
    }
    .menu_toggle::after {
        position: absolute;
        content: "";
        width: 20px;
        height: 5px;
        background-color: #6231C6;
        transform:translateY(-10px);
        border-radius: 6px;
        transition: 0.5s;
    }
    .menu_toggle.active::after {
        width: 28px;
        transform: rotate(-45deg);
    }
    header .menu.responsive {
        position: absolute;
        top: 50px;
        left: 0;
        display: flex;
        width: 100%;
        height: 50px;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        z-index: 2;
        background-color: #fff;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }
}

</style>
