<script setup> /* JAVASCRIPT */

</script>


<template> <!-- HTML -->

<header>
  <div id="title"><p><span id="bde">BDE</span> éstiam</p></div>

    <ul id="menu">
      <li><a class="lien_pages" href="/">Accueil</a></li>
      <li><a class="lien_pages" href="/Event">Evenements</a></li>
      <li><a class="lien_pages" href="/Offers">Bons plans</a></li>
      <li><a class="lien_pages" href="/Members">Membres</a></li>
      <li><a class="lien_pages" href="/Contact">Contact</a></li>
      <li><a class="lien_pages" href="/Shop">Boutique</a></li>
    </ul>

    <a class="account" href="/Login" >SE CONNECTER</a>
  </header>

<div id="login">
  <div v-if="isCodeVisible" class="q-pa-md" style="max-width: 400px">

<q-form
  @submit="onSubmit"
  @reset="onReset"
  class="q-gutter-md"
>
  <q-input
    filled
    v-model="name"
    label="Your name *"
    hint="Name and surname"
    lazy-rules
    :rules="[ val => val && val.length > 0 || 'Please type something']"
  />

  <q-input
    filled
    type="number"
    v-model="age"
    label="Your age *"
    lazy-rules
    :rules="[
      val => val !== null && val !== '' || 'Please type your age',
      val => val > 0 && val < 100 || 'Please type a real age'
    ]"
  />

  <q-toggle v-model="accept" label="I accept the license and terms" />

  <div>
    <q-btn label="Submit" type="submit" color="primary"/>
    <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
  </div>
</q-form>

</div>
</div>
</template>

<style scoped> /* CSS */
#title {
  color: #6231c6;
  font-size: 25px;
  font-weight: bold;
  position: absolute;
  margin: 0;
  padding: 0;
  left: 10px;
}
#bde {
  color: black;
}
p {
  margin: 0;
  padding: 0;
}

header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 8%;
  height: 70px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

#menu {
  display: flex;
  position: absolute;
  margin: 0px 0px 0px 20%;
  text-align: center;
}

#menu li {
  list-style: none;
  margin: 0 15px;
  justify-content: center;
}

#menu li a {
  text-decoration: none;
  font-size: large;
  font-weight: 300;
  color: #000;
}

#menu li a:hover {
  font-size: 20px;
  font-weight: 300;
  list-style: none;
  color: #6231c6;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.account {
  position: absolute;
  color: white;
  background-color: #6231c6;
  font-size: large;
  text-decoration: none;
  margin: 0px 0px 0px 0px;
  padding: 10px 20px;
  right: 10px;
}

#login{
  margin-left:100 vh;
}

.lien_pages:hover{
  margin-top: 10vh;
  text-decoration: underline;
}
</style>
