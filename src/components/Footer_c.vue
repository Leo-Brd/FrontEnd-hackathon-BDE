<script setup> /* BALISE SCRIPT POUR JAVASCRIPT */

</script>

<template> <!-- BALISE TEMPLATE POUR HTML -->
<footer>
  <div class="section">
      <a class="lien_pages" href="/">Accueil</a>
      <a class="lien_pages" href="/Event">Evenements</a>
      <a class="lien_pages" href="/Offers">Bons plans</a>
      <a class="lien_pages" href="/Members">Membres</a>
      <a class="lien_pages" href="/Contact">Contact</a>
      <a class="lien_pages" href="/Shop">Boutique</a>
  </div>
  <p>copyright estiam 2023 - Powered by Quasar</p>
</footer>
</template>

<style scoped> /* BALISE SCRIPT POUR CSS */
footer {
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  text-align: center;

  display: block;
  position: relative;

  width: 100%;
  height: 200px;

  font-size: 20px;
  bottom: 0;
  margin: 0;
  padding: 0;
}

p {
  width: 100%;
  color: black;
  position: absolute;
  bottom: 0;
}

a {
  color: black;
  padding: 30px;
  text-align: center;
  text-decoration: none;
}

a:hover {
  color: black;
  padding: 30px;
  text-align: center;
  text-decoration: underline;
  text-underline-offset: 8px;
}

.section {
  position: absolute;
  background-color: white;
  justify-content: center;
  width: calc(100% - 40px);
  height: 100px;
  text-align: center;
  padding: 10px;
  margin: 40px;
}

</style>