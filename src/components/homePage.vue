<template >

  <div class="Title">
    <img class="background" src="@/assets/ferrari.gif">
    <h1>GESTIONALE GARE AUTOMOBILISTICHE</h1>
    <img class="logo" src="@/assets/tachi.png">
    <p align="center"><router-link to="dbSelect" tag="button" >CLICCA QUI PER CONTINUARE</router-link></p>
    <p>"Progetto per il corso di 'Basi di Dati' di Sofia Bagagli, Davide Baldelli e Elisa Simoni"</p>


    </div>





</template>

<script>

export default {
  name: 'homePage',
  data () {
    return {

    }
  }

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
  font-size: large;
  font-family: "Arial Black";
  font-style: italic;
}
.logo {
  margin-top: 50px;
  width: 370px;
  height: 370px;


}
button{


  text-decoration:none;
  font-family: "Arial Black";
  font-style: italic;
  height: 50px;
  width: 350px;
  text-align: center;
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
.background{
  position: absolute;

  display: block;
  background-color: black;
  top: 0;
  bottom: 0;
  z-index: -1;
  width: 98.5%;
  height: 100%;
  overflow: hidden;
  -webkit-filter: blur(4px);

}


</style>
