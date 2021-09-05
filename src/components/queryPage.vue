<template>

  <body>
  <h1>TEAM</h1>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">Nome</th>
      <th scope="col">Nazione</th>

    </tr>
    </thead>
    <tbody>
    <tr v-for="teams in team" :key="teams.Name" >
      <th scope="row">{{teams.Name}}</th>
      <td>{{teams.Nation}}</td>


    </tr>
    </tbody>
  </table>
  </body>
</template>
<script>
export default {
  name: "Teams",
  data() {
    return {
      team: {}
    }
  },
  beforeMount(){
    this.getName();
  },
  methods: {
    async getName(){
      const res = await fetch('https://api.progdb.davidebaldelli.it/team/all');
      const data = await res.json();
      this.team = data;
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
  background: #33FF99;
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