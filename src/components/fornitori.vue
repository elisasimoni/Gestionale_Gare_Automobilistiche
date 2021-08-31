<template>

  <body>
  <h1>PRODUTTORI</h1>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">Nome</th>
      <th scope="col">Nazione</th>

    </tr>
    </thead>
    <tbody>
    <tr v-for="manufacturer in productor" :key="manufacturer.Name" >
      <th scope="row">{{manufacturer.Name}}</th>
      <td>{{manufacturer.Nation}}</td>


    </tr>
    </tbody>
  </table>
  </body>
</template>
<script>
export default {
  name: "Productor",
  data() {
    return {
      productor: {}
    }
  },
  beforeMount(){
    this.getName();
  },
  methods: {
    async getName(){
      const res = await fetch('http://api.progdb.davidebaldelli.it:1234/manufacturer/all');
      const data = await res.json();
      this.productor = data;
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
thead tr        {
  height:60px;
  background: #cc0033;
  font-size:16px;
  text-align: center;

}
td,th{
  text-align: center;
}


body               {
  background:#0000;
  font:400 14px 'Calibri','Arial';
  padding:20px;

}

h1{
  text-align: center;
}

blockquote {
  color:white;
  text-align:center;
}
</style>