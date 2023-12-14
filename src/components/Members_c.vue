<script setup>
/* BALISE SCRIPT POUR JAVASCRIPT */
</script>

<template>
<div class="container">
  <div class="left">
    <h1>Tous les membres du <span color="#9c27b0" >BDE</span></h1>
    <h6 >
      Voici ci-dessous la liste de tous les membres du BDE de l'éstiam Lyon.
      Ils sont divisés en plusieurs pôles (trésorerie, communication,
      événementiels...)
    </h6>
  </div>

  <div class="right">
    <q-img
      src="../assets/img/logoBDE.png"
      sizes="(max-width: 120px) 120w"
      style="width: 50%;"
    ></q-img>
  </div>
</div>


  <div id="q-app" style="min-height: 100vh">
    <div class="q-pa-md row items-center justify-around q-gutter-md">
      <q-card class="my-card" flat bordered>
        <img
          src="../assets/img/salwa.png"
        />

        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="primary" name="person_outline"></q-icon>
            </q-item-section>

            <q-item-section>
              <q-item-label>Salwa Adjar</q-item-label>
              <q-item-label caption>Présidente</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
      <q-card class="my-card" flat bordered>
        <img src="../assets/img/Snapchat-69.jpg" style="max-width: 100%" />

        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="primary" name="person_outline"></q-icon>
            </q-item-section>

            <q-item-section>
              <q-item-label>Quentin RAILLARD</q-item-label>
              <q-item-label caption>vice-président</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
      <q-card class="my-card" flat bordered>
        <img src="../assets/img/aziz.png" />

        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="primary" name="local_bar"></q-icon>
            </q-item-section>

            <q-item-section>
              <q-item-label>Aziz Aloui</q-item-label>
              <q-item-label caption>Responsable Event</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>

    <div class="q-pa-md row items-center justify-evenly q-gutter-md">
      <q-card class="my-card" flat bordered>
        <img
          src="../assets/img/elouann.png"
        />

        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="primary" name="account_balance"></q-icon>
            </q-item-section>

            <q-item-section>
              <q-item-label>Elouann HOSTA</q-item-label>
              <q-item-label caption>Responsable Trésorerie</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
      <q-card class="my-card" flat bordered>
        <img src="../assets/img/lise.png" />

        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="primary" name="groups"></q-icon>
            </q-item-section>

            <q-item-section>
              <q-item-label>Lise BENOIT</q-item-label>
              <q-item-label caption>Responsable Communication</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>
  </div>
</template>

<style scoped>
.my-card {
  width: 100%;
  max-width: 300px;
}

#q-app {
  margin-top: 10vh;
}
.container {
  display: flex;
}

.left {
  flex: 1;
  padding: 20px; /* Ajoutez du padding au besoin */
  margin-left: 150px;
}

.right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px; /* Ajoutez du padding au besoin */
  margin-right: 200px;
}

</style>
