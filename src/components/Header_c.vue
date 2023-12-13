<script setup>
/* Script setup content goes here */
</script>

<template>
  <header>
    <div id="logo">
      <p><span>BDE </span>éstiam</p>
    </div>

    <ul id="menu">
      <li><a class="lien_pages" href="/">Accueil</a></li>
      <li><a class="lien_pages" href="/Event">Evenements</a></li>
      <li><a class="lien_pages" href="/Offers">Bons plans</a></li>
      <li><a class="lien_pages" href="/Members">Membres</a></li>
      <li><a class="lien_pages" href="/Contact">Contact</a></li>
      <li><a class="lien_pages" href="/Shop">Boutique</a></li>
    </ul>

    <button id="account_btn">COMPTE</button>
  </header>
</template>

<style scoped>
    header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 20;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 8%;
    height: 50px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
}
#logo {
    color: #6231C6;
    font-size: 25px;
    font-weight: bold;
}
header .logo span {
    color: #000;
}
header button {
    background-color: #6231C6;
    cursor: pointer;
    color: #fff;
    padding: 5px 25px;
}
#menu {
    display: flex;
}
#menu li {
    list-style: none;
    margin: 0 15px;
    justify-content:center;
}
#menu li a {
    font-size: 14px;
    color: #000;
    font-weight: 300;
    transition: 0.2s;
}
#menu li a:hover {
    color: #6231C6;
    text-transform: uppercase;
}
#account_btn {
  border-radius: 0;
}

</style>


