<template>

  <body>
  <img class="background" src="@/assets/sfo.jpg">
  <router-link id="homeButton" to="dbSelect" tag="button"><img id="home" src="@/assets/arrow.png"></router-link>
  <h1>PILOTI</h1>
  <p align="center"><button id="pulsante" @click="getTopFive(); isTop=true" >VISUALIZZA TOP 5</button>



  <form >
  <p align="center">
    <input type="radio" id="gare"  name="choice" value="gare" @click="gare=1; campionati=0; displayYear=true"> Visualizzare gare a cui i piloti di una determinata nazione partecipano
    <input type="radio" id="campionati" name="choice" value="campionati" @click="campionati=1; gare=0; displayYear=true"> Visualizzare campionati a cui i piloti di una determinata nazione partecipano
  </p>
  </form>


  <template id="countriesForm" v-if="displayYear">
    <form id="formSelect">
      <p align="center"> Scegli nazione:
        <select id="selectStyle" v-model="nation"  >
          <option v-for="country in countries" :key="country.name" >{{country.name}}</option>
        </select>
        <input id="confermaAnno" type='submit' value='Conferma' @click="getDriverNation(nation); getChampionship(nation); isRaceNation=true, stato=nation" ></p>
    </form>
  </template>
  <template v-if="isRaceNation && gare==1">
    <h2>Gare a cui i piloti che vengono da {{stato}} partecipano </h2>
    <table  class="table">
      <thead>
      <tr>
        <th scope="col">Nome</th>
        <th scope="col">Data</th>
        <th scope="col">Circuito</th>
        <th scope="col">Nazione Circuito</th>
        <th scope="col">Città Circuito</th>
        <th scope="col">Layouts Circuito</th>
        <th scope="col">Layout</th>
        <th scope="col">Campionato</th>

      </tr>
      </thead>
      <tbody>
      <tr v-for="gare in countryPilot" :key="gare.Name" >
        <th scope="row">{{gare.Name}}</th>
        <td>{{gare.Date}}</td>
        <td>{{gare.Track.Name}}</td>
        <td>{{gare.Track.Nation}}</td>
        <td>{{gare.Track.Location}}</td>
        <td>{{gare.Track.Layouts}}</td>

        <td>{{gare.LayoutName}}</td>
        <td>{{gare.ChampionshipName}}</td>
      </tr>

      </tbody>
    </table>
  </template>
  <template v-if="isRaceNation && campionati==1" class="ricerca">
    <h2>Campionati a cui i piloti che vengono da {{stato}}  partecipano </h2>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">Nome</th>
        <th scope="col">Anno</th>
        <th scope="col">EntryList</th>
        <th scope="col">Gare</th>
        <th scope="col">Classi</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="champion in championship" :key="champion.Name" >
        <th scope="row">{{champion.Name}}</th>
        <td>{{champion.Year}}</td>
        <td>{{champion.EntryList}}</td>
        <td>{{champion.Races}}</td>
        <div v-for="classes in champion.Classes" :key="classes.Name">
          <td>{{classes.Name}}</td>
        </div>
      </tr>
      </tbody>
    </table>
  </template>
  <form id="formSelectCar">
    <h3>Visualizzare con quale macchina il pilota ha gareggiato</h3>
    <p align="center"> Scegli CF e circuito:
      <select id="selectStyle2" v-model="cf"  >
        <option v-for="drivers  in driver" :key="drivers.CF" >{{drivers.CF}}</option>
      </select>
      <select id="selectStyle3" v-model="track"  >
        <option v-for="track  in circuit" :key="track.Name" >{{track.Name}}</option>
      </select>
      <input id="confermaCarTrack" type='submit' value='Conferma' @click="getAutoPilot(cf,track); isCarPilot=true" ></p>
  </form>


  <template v-if="isCarPilot">
  <table  class="table">
    <thead>
    <tr>
      <th scope="col">Modello</th>
      <th scope="col">Anno</th>
      <th scope="col">Produttore</th>
      <th scope="col">Classe</th>
      <th scope="col">Trazione</th>
      <th scope="col">Trasmissione</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="car in pilotCar" :key="car.Model" >
      <th scope="row">{{car.Model}}</th>
      <td>{{car.Year}}</td>
      <td>{{car.Brand.Name}}</td>
      <td>{{car.Class}}</td>
      <td>{{car.Drivetrain}}</td>
      <td>{{car.Transmission}}</td>
    </tr>

    </tbody>
  </table>
  </template>
  <h3 align="center">Inserire codice fiscale per visualizzari i campionati di un pilota</h3>
  <form class="example"  style="margin:auto;max-width:300px">
    <input type="text" v-model.trim="CF" placeholder="Search.." >
    <button @click = "getChampionshipCF(CF); isCF=true" type="submit"><i class="fa fa-search"></i>CERCA</button>
  </form>
  <template v-if="isCF">
   <div  v-for="cf in pilotCF" :key="cf.CF"  >
      <div v-if="cf.CF == CF">
        <h3 align="center">Campionati del pilota {{cf.Surname}} {{cf.Name}}</h3>
      </div>
    </div>


    <table class="table">
      <thead>
      <tr>
        <th scope="col">Nome</th>
        <th scope="col">Anno</th>
        <th scope="col">EntryList</th>
        <th scope="col">Gare</th>
        <th scope="col">Classi</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="champion in champCF" :key="champion.Name" >
        <th scope="row">{{champion.Name}}</th>
        <td>{{champion.Year}}</td>
        <td>{{champion.EntryList}}</td>
        <td>{{champion.Races}}</td>
        <div v-for="classes in champion.Classes" :key="classes.Name">
          <td>{{classes.Name}}</td>
        </div>
      </tr>
      </tbody>
    </table>
  </template>
  <template v-if="isTop">
    <h2>TOP 5</h2>
  <table class="table">

      <thead>
      <tr>
        <th scope="col">Cognome</th>
        <th scope="col">Nome</th>
        <th scope="col">Codice Fiscale</th>
        <th scope="col">Genere</th>
        <th scope="col">Data di Nascita</th>
        <th scope="col">Nazionalità</th>
        <th scope="col">Numero di gare all'attivo</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="pilot in topfive" :key="pilot.Surname" >
        <th scope="row">{{pilot.Surname}}</th>
        <td>{{pilot.Name}}</td>
        <td>{{pilot.CF}}</td>
        <td>{{pilot.Sex}}</td>
        <td>{{pilot.Birthdate}}</td>
        <td>{{pilot.Nation}}</td>
        <td>{{pilot.Races}}</td>

      </tr>
      </tbody>

  </table>
</template>



  <table class="table">
    <thead>
    <tr>
      <th scope="col">Cognome</th>
      <th scope="col">Nome</th>
      <th scope="col">Codice Fiscale</th>
      <th scope="col">Genere</th>
      <th scope="col">Data di Nascita</th>
      <th scope="col">Nazionalità</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="pilot in driver" :key="pilot.Surname" >
      <th scope="row">{{pilot.Surname}}</th>
      <td>{{pilot.Name}}</td>
      <td>{{pilot.CF}}</td>
      <td>{{pilot.Sex}}</td>
      <td>{{pilot.Birthdate}}</td>
      <td>{{pilot.Nation}}</td>

    </tr>
    </tbody>
  </table>


  </body>


</template>
<script>
export default {
  name: "Driver",
  data() {
    return {
      driver: {},
      topfive:{},
      isTop: false,
      countries: {},
      countryPilot:{},
      nation: "",
      isRaceNation: false,
      gare: 0,
      campionati: 0,
      championship: {},
      displayYear: false,
      stato:"",
      champCF: {},
      CF: "",
      isCF: false,
      pilotCF:{},
      cfequalPilot: "",
      pilotCar: {},
      isCarPilot: false,
      circuit:{},
      track: ""

    }
  },
  mounted(){
    this.getName();
    this.getTopFive();
    this.getNation();
    this.getDriverNation();
    this.getChampionship();
    this.getChampionshipCF();
    this.getAutoPilot();
    this.getTrack();
  },
  methods: {
    async getName(){
      const res = await fetch('http://api.progdb.davidebaldelli.it:1234/driver/all');
      const data = await res.json();
      this.driver = data;
    },
    async getTopFive(){
      const res2 = await fetch('http://api.progdb.davidebaldelli.it:1234/driver/fivewithmoreraces');
      const data2 = await res2.json();
      this.topfive = data2;

    },
    async getNation(){
      const res3 = await fetch("https://restcountries.eu/rest/v2/all");
      const data3 = await res3.json();
      this.countries = data3;

    },
    async getDriverNation(nation){
      const res3 = await fetch("http://api.progdb.davidebaldelli.it:1234/race/nation/driver/" + nation);
      const data3 = await res3.json();
      this.countryPilot = data3;

    },
    async getChampionship(nation){
      const res4 = await fetch("http://api.progdb.davidebaldelli.it:1234/championship/nation/driver/" + nation);
      const data4 = await res4.json();
      this.championship = data4;

    },
    async getChampionshipCF(CF){


      const res5 = await fetch("http://api.progdb.davidebaldelli.it:1234/championship/driver/" + CF);
      const data5 = await res5.json();
      this.champCF = data5;
      const res6 = await fetch("http://api.progdb.davidebaldelli.it:1234/driver/all");
      const data6 = await res6.json();
      this.pilotCF =  data6;
    },
    async getAutoPilot(cf, track){
      const res7 = await fetch('http://api.progdb.davidebaldelli.it:1234/car/driver/' + cf +'/track/' + track);
      const prova = 'http://api.progdb.davidebaldelli.it:1234/car/driver/' + cf +'/track/' + track;
      console.log(prova);
      const data7 = await res7.json();
      this.pilotCar =  data7;

    },
    async getTrack(){
      const res7 = await fetch('http://api.progdb.davidebaldelli.it:1234/track/all');
      const data7 = await res7.json();
      this.circuit =  data7;

    },



  }
};
</script>
<style>
.background{
  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  z-index: -1;
  width: 98.5%;
  height: 100%;
  overflow: hidden;


}
table {
  border-spacing: 1px;
  border-collapse: collapse;
  background: white;
  border-radius: 6px;
  overflow: hidden;
  max-width: 800px;
  width: 50%;
  margin: 0 auto;
  position: relative;
}
tbody tr {
  height: 48px;
  border-bottom: 1px solid #E3F1D5;
  text-align: center;
}
td,th{
  text-align: center;
}

thead tr        {
  height:60px;
  background: #cc0033;
  font-size:20px;
  text-align: center;

}
body               {
  background:#0000;
  font:400 14px 'Calibri','Arial';
  padding:20px;

}
button{
  position: center;
}
#confermaCarTrack{
  color: white;
  background-color: red;
  text-align: center;
  font-style: italic;
  font-family: "Arial Black";
}
#{
  color: white;
  background-color: red;
  text-align: center;
  font-style: italic;
  font-family: "Arial Black";
}

blockquote {
  color:white;
  text-align:center;
}
h2{
  text-align: center;
}
</style>