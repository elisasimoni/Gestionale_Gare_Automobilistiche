<template>
  <body>
  <img class="background" src="@/assets/sfo.jpg">
  <router-link id="homeButton" to="dbSelect" tag="button"><img id="home" src="@/assets/arrow.png"></router-link>
  <h1>CREA PILOTA</h1>
  <form >
    <p align="center"><input  placeholder="Nome"  v-model.trim="nome"></p>
    <p align="center"><input  placeholder="Cognome" v-model.trim="cognome"></p>
   <form v-if="nome != nullo && cognome!=nullo">
     <p align="center"> <button tag="button" @click="getFirstNameLetter(nome), generate=true">GENERA CF</button></p>
      <template v-if="generate" id="cf">
        <h3 align="center">{{this.first + this.cognome}}</h3>
      </template>
    </form>
    <form>
     <p align="center"> <label>Inserire data di nascita:
        <input type="date"  v-model.trim="compleanno">

      </label>
     </p>
    </form>
    <p align="center">
      Inserire il genere:
      <input  type="radio" v-model.trim="genere" value="maschio"> M
      <input  type="radio" v-model.trim="genere"  value="femmina"> F
    </p>

      <form >
        <p align="center"> Scegliere nazione:
          <select  v-model="nation"  >
            <option v-for="country in countries" :key="country.name" >{{country.name}}</option>
          </select></p>
      </form>

    <form >
      <p align="center"> Scegliere team di appartenenza:
        <select  v-model="team"  >
          <option v-for="gruppo in teams" :key="gruppo.Name" >{{gruppo.Name}}</option>
        </select></p>
    </form>

    <p align="center">
      <template v-if="nome!=nullo && cognome !=nullo && genere!=nullo && team!=nullo && nation!=nullo && compleanno!=nullo">
      <input  id="creapilota" type="button" value="Inserisci" onClick=" " />
      </template>
      <template v-if="nome==nullo || cognome ==nullo || genere==nullo || team==nullo || nation==nullo || compleanno==nullo">
        <input  id="creapilotaNo" type="button" value="Inserisci" onClick="window.alert('Si prega di compilare tutti i campi')">
      </template>
    </p>
  </form>
  </body>
</template>

<script>
export default {
  name: "Driver",
  data() {
    return {
      nome:"",
      cognome:"",
      compleanno:"",
      genere:"",
      countries: {},
      teams:{},
      team:"",
      nullo:"",
      first:"",
      generate: false


    }
  },
  mounted(){
    this.getNation();
    this.getTeams();
    this.getFirstNameLetter();
  },
  methods: {
    async getNation(){
      const res3 = await fetch("https://restcountries.eu/rest/v2/all");
      const data3 = await res3.json();
      this.countries = data3;
    },
    async getTeams(){
      const res = await fetch('http://api.progdb.davidebaldelli.it:1234/team/all');
      const data = await res.json();
      this.teams = data;
    },
    getFirstNameLetter(name) {
      var x = name;
      this.first = (x.charAt(0));
    }



  }
};
</script>

<style scoped>
#creapilota{
  text-align: center;
  font-family: "Arial Black";
  font-style: italic;
  height: 40px;
  background-color: red;
  color: #FFFFFF;
}
#creapilotaNo{
  text-align: center;
  font-family: "Arial Black";
  font-style: italic;
  height: 40px;
  background-color: red;
  color: #FFFFFF;
}
#cf{
  text-align: center;
  font-family: "Arial Black";
  font-size: medium;

}
</style>