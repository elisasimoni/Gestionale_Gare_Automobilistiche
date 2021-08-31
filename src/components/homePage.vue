<template>
  <div class="Title">
    <h1>GESTIONALE GARE AUTOMOBILISTICHE</h1>
    <img src="@/assets/log_auto.png">
    <p align="center"><router-link to="dbSelect" tag="button" >CLICCA QUI PER CONTINUARE</router-link></p>
    <p>"Progetto per il corso di 'Basi di Dati' di Sofia Bagagli, Davide Baldelli e Elisa Simoni"</p>


  </div>
</template>

<script>

export default {
  name: 'homePage',
  props: {
    credit: String,

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 20px 0 0;
}

a {
  color: #42b983;
}
p {
  margin-top: 50px;
  align-content: end;
  color: black;
}
img {
  width: 370px;
  height: 370px;

}
button{


  text-decoration:none;
  font-family: "Arial Black";
  font-style: italic;
  text-transform:uppercase;
  font-weight:400;
  color:#FFFFFF;
  background-color:red;
  box-shadow:inset 0 -0.6em 0 -0.35em #0000;



}
h1{
  font-family: "Arial Black";
  font-style: italic;
  color: black;
}

</style>
