<template>
    <div class="container">
        
    <div class="q-pa-md" style="max-width: 400px">
        <h1 class="title">Connectez-vous</h1>
  
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="mail"
          label="Votre Mail Estiam"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something@estiam.com']"
        />
  
        <q-input
          filled
          type="password"
          v-model="age"
          label="Votre Mot de passe"
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Please type your Password',
            val => val > 0 && val < 100 || 'Please type a valid password'
          ]"
        />
  
        <q-toggle v-model="accept" label="J'accepte la license et les termes du contrat" />
  
        <div>
          <q-btn label="Se connecter" href="/" type="submit" color="primary"/>
          <q-btn label="Annuler" href="/" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
  
    </div>
</div>
  </template>
  
  <script>
  import { useQuasar } from 'quasar'
  import { ref } from 'vue'
  
  export default {
    setup () {
      const $q = useQuasar()
  
      const name = ref(null)
      const age = ref(null)
      const accept = ref(false)
  
      return {
        name,
        age,
        accept,
  
        onSubmit () {
          if (accept.value !== true) {
            $q.notify({
              color: 'red-5',
              textColor: 'white',
              icon: 'warning',
              message: 'You need to accept the license and terms first'
            })
          }
          else {
            $q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: 'Submitted'
            })
          }
        },
  
        onReset () {
          name.value = null
          age.value = null
          accept.value = false
        }
      }
    }
  }
  </script>

  <style scoped>
  .container{
    display:flex;
    justify-content: flex-center;
  }

  .q-pa-md{
    margin-top: 20vh;
    margin-left: 80vh;
    margin-bottom: 30vh;
  }

  .title{
    font-size:30px;
    color: purple;
    margin-left: 6.5vh;
  }
</style>