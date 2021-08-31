<template>

  <body>
  <h1>CLASSI</h1>

  <table class="table">
    <thead>
    <tr>
      <th scope="col">Nome</th>

    </tr>
    </thead>
    <tbody>
    <tr v-for="classes in classi" :key="classes.Name" >
      <th scope="row">{{classes.Name}}</th>
    </tr>

    </tbody>
  </table>
  <h2>Cerca Gare in base alla Classe</h2>
  <form class="example"  style="margin:auto;max-width:300px">
    <input type="text" v-model.trim="classe" placeholder="Search.." >
    <button @click = getGara(classe)  type="submit"><i class="fa fa-search"></i>CERCA</button>
  </form>
    <template v-if="this.isOn" class="ricerca">
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
      <tr v-for="gare in gareClasse" :key="gare.Name" >
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
  <h2>Cerca Campionato in base alla Classe</h2>
  <form class="example"  style="margin:auto;max-width:300px">
    <input type="text" v-model.trim="campionatoClasse" placeholder="Search..">
    <button @click = getCampionato(campionatoClasse)  type="submit"><i class="fa fa-search"></i>CERCA</button>
  </form>
  <template v-if="this.isOnCampionato" class="ricerca">
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
      <tr v-for="champion in campionatiClasse" :key="champion.Name" >
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

  </body>
</template>
<script>
export default {
  name: "Class",
  data() {
    return {
      classi: {},
      gareClasse: {},
      campionatiClasse: {},
      campionatoClasse:"",
      classe: "",
      isOn: false,
      isOnCampionato: false
    }
  },

  mounted() {
    this.getGara();
    this.getCampionato();
    this.getName();

  },
  methods: {

    async getName(){
      const res = await  fetch('http://api.progdb.davidebaldelli.it:1234/class/all');
      const data = await res.json();
      this.classi = data;
    },
    async getGara(classe){
      const res2 = await fetch('http://api.progdb.davidebaldelli.it:1234/race/class/' + classe);
      const data2 = await res2.json();
      this.gareClasse = data2;
      if(classe == null){
        this.isOn=false
      }
      else{
        this.isOn=true
      }
    },
    async getCampionato(classe){
      const res3 = await fetch('http://api.progdb.davidebaldelli.it:1234/championship/class/' + classe);
      const data3 = await res3.json();
      this.campionatiClasse = data3;
      if(classe == null){
        this.isOnCampionato=false
      }
      else{
        this.isOnCampionato=true
      }
    }

  }
};
</script>
<style>

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

}


form.example input[type=text] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 80%;
  background: #f1f1f1;
}

form.example button {
  float: left;
  width: 80px;
  padding: 15.5px;
  background: red;
  color: white;
  font-style: italic;
  font-family: "Arial Black";
  font-size: 12px;

  position: absolute;
  border: 1px solid grey;
  border-left: none;
  cursor: pointer;
}

form.example button:hover {
  background: #0b7dda;
}

form.example::after {
  content: "";
  clear: both;
  display: table;
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

blockquote {
  color:white;
  text-align:center;
}
</style>