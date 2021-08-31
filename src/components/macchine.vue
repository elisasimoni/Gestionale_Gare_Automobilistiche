<template>
  <body>
<h1>AUTO</h1>
  <table  class="table">
    <thead>
    <tr>
      <th scope="col">Modello</th>
      <th scope="col">Anno</th>
      <th scope="col">Produttore</th>
      <th scope="col">Classe</th>
      <th scope="col">Trasmissione</th>
      <th scope="col">Cambio</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="car in car" :key="car.Model" >
      <th scope="row">{{car.Model}}</th>
      <td>{{car.Year}}</td>
      <td>{{car.Brand.Name}}</td>
      <td>{{car.Class}}</td>
      <td>{{car.Drivetrain}}</td>
      <td>{{car.Transmission}}</td>
    </tr>

    </tbody>
  </table>
  </body>
  </template>

<script>
export default {
  name: "Macchine",
  data() {
    return {
      car: {}


    }
  },
  mounted(){
    this.getCar();
  },
  methods: {
    async getCar(){
      const res = await fetch('http://api.progdb.davidebaldelli.it:1234/car/all');
      const data = await res.json();
      this.car = data;
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

blockquote {
  color:white;
  text-align:center;
}
h2{
  text-align: center;
}
</style>