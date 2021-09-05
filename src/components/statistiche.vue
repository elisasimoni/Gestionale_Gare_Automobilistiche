<template>

  <body>
  <img class="background" src="@/assets/sfo.jpg">
  <router-link id="homeButton" to="dbSelect" tag="button"><img id="home" src="@/assets/arrow.png"></router-link>
  <h1>STATISTICHE</h1>


  <form id="formSelect3">
    <h3>numero di volte in cui l'auto di un produttore ha partecipato a un campionato</h3>
    <p align="center"> Scegli produttore:
      <select id="selectStyle3" v-model="nomeProd"  >
        <option v-for="productor in manufacturer" :key="productor.Name"  >{{productor.Name}}</option>
      </select>
      <input id="confermaProduttore" type='submit' value='Conferma' @click="getPartecipationCar(nomeProd), isProduttore=true" ></p>
  </form>
  <template v-if="isProduttore">
    <table  class="table">
      <thead>
      <tr>
        <th scope="col">Modello</th>
        <th scope="col">Anno</th>
        <th scope="col">Produttore</th>
        <th scope="col">Classe</th>
        <th scope="col">Trasmissione</th>
        <th scope="col">Cambio</th>
        <th scope="col">Numero di campionati disputate</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="car in partecipationCar" :key="car.Model">
        <th scope="row">{{car.Model}}</th>
        <td>{{car.Year}}</td>
        <td>{{car.Brand}}</td>
        <td>{{car.Class}}</td>
        <td>{{car.Drivetrain}}</td>
        <td>{{car.Transmission}}</td>
        <td>{{car.Usage}}</td>
      </tr>



      </tbody>
    </table>
  </template>
  <form id="formSelect2">
    <h3>numero di gare corse su tutti i layout di una pista</h3>
    <p align="center"> Scegli pista:
      <select id="selectStyle2" v-model="pista"  >
        <option v-for="track in track" :key="track.Name">{{track.Name}}</option>
      </select>
      <input id="confermaPista" type='submit' value='Conferma' @click="getPartecipationLayout(pista), isTrack=true" ></p>
  </form>
  <template v-if="isTrack">
    <table  class="table">
      <thead>
      <tr>
        <th scope="col">Circuito</th>
        <th scope="col">Nome</th>
        <th scope="col">Lunghezza</th>
        <th scope="col">Tipo di Layouts</th>
        <th scope="col">Numero di gare disputate</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="race in layouts" :key="race.Track">
        <th scope="row">{{race.Track}}</th>
        <td>{{race.Name}}</td>
        <td>{{race.Length}}</td>
        <td>{{race.Type}}</td>
        <td>{{race.Usage}}</td>
      </tr>



      </tbody>
    </table>
  </template>

  <h2>PISTE PIU' GETTONATE</h2>
  <table  class="table">
    <thead>
    <tr>
      <th scope="col">Nome</th>
      <th scope="col">Nazione</th>
      <th scope="col">Città</th>
      <th scope="col">Numero di gare disputate</th>


    </tr>
    </thead>
    <tbody>
    <tr v-for="gare in mostUsed" :key="gare.Name" >
      <th scope="row">{{gare.Name}}</th>
      <td>{{gare.Nation}}</td>
      <td>{{gare.Location}}</td>
      <td>{{gare.Usage}}</td>

    </tr>

    </tbody>
  </table>
  </body>
</template>
<script>

export default {
  name: "statistiche",
  data() {
    return {
      mostUsed: {},
      manufacturer:{},
      isProduttore: false ,
      partecipationCar: {},
      nomeProd:"",
      isTrack: false,
      track:{},
      layouts:{},
      pista:"",



    }
  },

  mounted() {
    this.getMostUsed();
    this.getNameManufacturer();
    this.getPartecipationCar();
    this.getNameTrack();
    this.getPartecipationLayout();

  },
  methods: {

    async getMostUsed(){
      const res = await  fetch('http://api.progdb.davidebaldelli.it:1234/statistic/mostusedtracks');
      const data = await res.json();
      this.mostUsed = data;
    },
    async getNameManufacturer(){
      const res2 = await  fetch('http://api.progdb.davidebaldelli.it:1234/manufacturer/all');
      const data2 = await res2.json();
      this.manufacturer = data2;
    },
    async getPartecipationCar(produttore){
      const res3 = await  fetch('http://api.progdb.davidebaldelli.it:1234/statistic/brand/car/usage/' + produttore);
      const data3 = await res3.json();
      this.partecipationCar = data3;
    },
    async getNameTrack(){
      const res2 = await  fetch('http://api.progdb.davidebaldelli.it:1234/track/all');
      const data2 = await res2.json();
      this.track = data2;
    },
    async getPartecipationLayout(pista){
      const res2 = await  fetch('http://api.progdb.davidebaldelli.it:1234/statistic/track/layout/usage/' + pista);
      const data2 = await res2.json();
      this.layouts = data2;
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
  width: 100%;
  margin: 0 auto;
  position: relative;
}
tbody tr {
  height: 48px;
  text-align: center;
  border-bottom: 1px solid #E3F1D5;
}
thead tr        {
  background: #cc0033;
  height:60px;
  font-style: italic;
  font-family: "Arial Black";
  font-size: 80px;
  text-align: center;
  color: white;

}
td,th {
  text-align: center;
  font-size: 20px;

}


h1{
  text-align: center;
  font-family: "Arial Black";
  font-style: italic;
  color: black;
}
h2{
  text-align: center;
  font-family: "Arial Black";
  font-style: italic;
  color: black;
}
#confermaProduttore {
  color: white;
  background-color: red;
  text-align: center;
  font-style: italic;
  font-family: "Arial Black";
}
#confermaPista{
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
</style>e>