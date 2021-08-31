<template>
 <div>
   <h1>{{msg}}</h1>

  <div id="container">


    <ul id="griglia">
      <li><router-link to="team"><img class="ImgProduct"  src="@/assets/tachimetro.png"></router-link><p>TEAM</p></li>
      <li><router-link to="piloti"><img class="ImgProduct" src="@/assets/pilota.png"></router-link><p>PILOTI</p></li>
      <li><router-link to="campionati"><img class="ImgProduct"  src="@/assets/coppa.png"></router-link><p>CAMPIONATI</p></li>
      <li><router-link to="circuiti"><img class="ImgProduct"  src="@/assets/circuito.png"></router-link><p>CIRCUITI</p></li>
      <li><router-link to="classi"><img class="ImgProduct" src="@/assets/classe.png"></router-link><p>CLASSI</p></li>
      <li><router-link to="macchine"><img class="ImgProduct" src="@/assets/car.png"></router-link><p>AUTO</p></li>
      <li><router-link to="produttori"><img class="ImgProduct" src="@/assets/meccanico.png"></router-link><p>PRODUTTORI</p></li>
      <li><router-link to="statistiche"><img class="ImgProduct" src="@/assets/statistica.png"></router-link><p>STATISTICHE</p></li>

    </ul>
  </div>
 </div>
</template>

<script>
export default {
  name: 'dbSelect',
  data () {
    return {
      msg: 'GESTIONALE GARE AUTOMOBILISTICHE'
    }
  }
}
</script>

<style scoped>
.ImgProduct {
  display: inline; /* altrimenti di default e` inline */
  width: 135px;
  height: 135px;
  line-height: 150px; /* centra immagine in vert. */
  align-items: center;
  text-align: center; /* centra immagine in orizz. */
  margin: 0;
  padding:0;

}
.ImgProduct:hover {
  border-color: #0000; /* cambia colore all'hover */
}

.ImgProduct img {
  border: none;
  display: inline; /* solo nel caso ci fosse qualche attributo in prec che la rende block */
}
.ImgProduct:hover img {
  border: none;
}
#griglia {
  padding: 0;
  margin: 0;
}
#griglia > li {
  border: 2px solid #0000;
  display: inline-block;
  width: 160px;
  height: 160px;
  margin: 10px;
  background-color: #0000;
}

#container {

  max-width:850px;
  margin:0 auto;
  padding: 20px;
  text-align: center;
  align-items: center;
}
#griglia li p {
  padding: 5px 5px 0 5px;
  margin: 0;
  font-size: 20px;
  font-style: italic;

  font-family: "Arial Black";
  color: black;
}

#griglia li {
  display: inline-block;
  width: 180px;
  height: 180px;
  margin: 10px;
  vertical-align: top;
  zoom: 1;
  *display: inline;
}
button{
  display:inline-block;
  padding:0.7em 1.4em;
  margin:0 0.3em 0.3em 0;
  border-radius:0.15em;
  box-sizing: border-box;
  text-decoration:none;
  font-family: "Arial Black";
  font-style: italic;
  text-transform:uppercase;
  font-weight:400;
  color:#FFFFFF;
  background-color:red;
  box-shadow:inset 0 -0.6em 0 -0.35em #0000;
  text-align:center;
  position: absolute;


}
h1{
  font-family: "Arial Black";
  font-style: italic;
  color: black;
}

</style>