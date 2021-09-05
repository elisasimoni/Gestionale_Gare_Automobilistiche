<template>

  <body>
  <img class="background" src="@/assets/sfo.jpg">
  <router-link id="homeButton" to="dbSelect" tag="button"><img id="home" src="@/assets/arrow.png"></router-link>
  <h1>GARE</h1>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">Nome</th>
      <th scope="col">Data</th>
      <th scope="col">Circuito</th>
      <th scope="col">Nazione</th>
      <th scope="col">Città</th>
      <th scope="col">Layout</th>
      <th scope="col">Campionato</th>

    </tr>
    </thead>
    <tbody>
    <tr v-for="races in race" :key="races.Name" >
      <th scope="row">{{races.Name}}</th>
      <td>{{races.Date}}</td>
      <td>{{races.Track.Name}}</td>
      <td>{{races.Track.Nation}}</td>
      <td>{{races.Track.Location}}</td>
      <td>{{races.LayoutName}}</td>
      <td>{{races.Championship.Name}}</td>

    </tr>
    </tbody>
  </table>
  </body>
</template>
<script>
export default {
  name: "Gare",
  data() {
    return {
      race: {}
    }
  },
  beforeMount(){
    this.getName();
  },
  methods: {
    async getName(){
      const res = await fetch('https://api.progdb.davidebaldelli.it/race/all');
      const data = await res.json();
      this.race = data;
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
  border-bottom: 1px solid #E3F1D5;
}
td,th{
  text-align: center;
}

thead tr        {
  height:60px;
  background: #cc0033;
  font-size:16px;
  text-align: center;

}
body               {
  background:#0000;
  font:400 14px 'Calibri','Arial';
  padding:20px;
}


blockquote {
  color:white;
  text-align:center;
}
</style>