<template>

  <body>
  <h1>CIRCUITI</h1>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">Nome</th>
      <th scope="col">Nazione</th>
      <th scope="col">Città</th>

      <th scope="col">Layout</th>


    </tr>
    </thead>
    <tbody>
    <tr v-for="circuit in track" :key="circuit.Name" >
      <th scope="row">{{circuit.Name}}</th>
      <td>{{circuit.Nation}}</td>
      <td>{{circuit.Location}}</td>
      <td>{{circuit.Name}}</td>
<!--      <div v-for="layout in circuit.Layouts" :key="layout.Name">-->
<!--        <td>Nome: {{layout.Name}}</td>-->
<!--        <td>Lughezza: {{layout.Length}}</td>-->
<!--        <td>Tipologia: {{layout.TrackType}}</td>-->

<!--      </div>-->

    </tr>
    </tbody>
  </table>
  </body>
</template>
<script>
export default {
  name: "Circuit",
  data() {
    return {
      track: {}
    }
  },
  beforeMount(){
    this.getName();
  },
  methods: {
    async getName(){
      const res = await fetch('http://api.progdb.davidebaldelli.it:1234/track/all');
      const data = await res.json();
      this.track = data;
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