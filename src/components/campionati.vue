<template>
    <body>
    <img class="background" src="@/assets/sfo.jpg">
    <router-link id="homeButton" to="dbSelect" tag="button"><img id="home" src="@/assets/arrow.png"></router-link>
    <h1>CAMPIONATI</h1>

    <p align="center"><button id="pulsante2" @click="displayChoice=true, isEntry=true" >ENTRY DI UN CAMPIONATO</button></p>


       <template v-if="isEntry">
         <p align="center">inserisci anno e nome campionato <select v-model="year"  >

           <option value="2021">2021</option>
           <option value="2020" class="r-kemksi">2020</option><option value="2019" class="r-kemksi">2019</option><option value="2018" class="r-kemksi">2018</option><option value="2017" class="r-kemksi">2017</option><option value="2016" class="r-kemksi">2016</option><option value="2015" class="r-kemksi">2015</option><option value="2014" class="r-kemksi">2014</option><option value="2013" class="r-kemksi">2013</option><option value="2012" class="r-kemksi">2012</option><option value="2011" class="r-kemksi">2011</option><option value="2010" class="r-kemksi">2010</option><option value="2009" class="r-kemksi">2009</option><option value="2008" class="r-kemksi">2008</option><option value="2007" class="r-kemksi">2007</option><option value="2006" class="r-kemksi">2006</option><option value="2005" class="r-kemksi">2005</option><option value="2004" class="r-kemksi">2004</option><option value="2003" class="r-kemksi">2003</option><option value="2002" class="r-kemksi">2002</option><option value="2001" class="r-kemksi">2001</option><option value="2000" class="r-kemksi">2000</option><option value="1999" class="r-kemksi">1999</option><option value="1998" class="r-kemksi">1998</option><option value="1997" class="r-kemksi">1997</option><option value="1996" class="r-kemksi">1996</option><option value="1995" class="r-kemksi">1995</option><option value="1994" class="r-kemksi">1994</option><option value="1993" class="r-kemksi">1993</option><option value="1992" class="r-kemksi">1992</option><option value="1991" class="r-kemksi">1991</option><option value="1990" class="r-kemksi">1990</option><option value="1989" class="r-kemksi">1989</option><option value="1988" class="r-kemksi">1988</option><option value="1987" class="r-kemksi">1987</option><option value="1986" class="r-kemksi">1986</option><option value="1985" class="r-kemksi">1985</option><option value="1984" class="r-kemksi">1984</option><option value="1983" class="r-kemksi">1983</option><option value="1982" class="r-kemksi">1982</option><option value="1981" class="r-kemksi">1981</option><option value="1980" class="r-kemksi">1980</option><option value="1979" class="r-kemksi">1979</option><option value="1978" class="r-kemksi">1978</option><option value="1977" class="r-kemksi">1977</option><option value="1976" class="r-kemksi">1976</option><option value="1975" class="r-kemksi">1975</option><option value="1974" class="r-kemksi">1974</option><option value="1973" class="r-kemksi">1973</option><option value="1972" class="r-kemksi">1972</option><option value="1971" class="r-kemksi">1971</option><option value="1970" class="r-kemksi">1970</option><option value="1969" class="r-kemksi">1969</option><option value="1968" class="r-kemksi">1968</option><option value="1967" class="r-kemksi">1967</option><option value="1966" class="r-kemksi">1966</option><option value="1965" class="r-kemksi">1965</option><option value="1964" class="r-kemksi">1964</option><option value="1963" class="r-kemksi">1963</option><option value="1962" class="r-kemksi">1962</option><option value="1961" class="r-kemksi">1961</option><option value="1960" class="r-kemksi">1960</option><option value="1959" class="r-kemksi">1959</option><option value="1958" class="r-kemksi">1958</option><option value="1957" class="r-kemksi">1957</option><option value="1956" class="r-kemksi">1956</option><option value="1955" class="r-kemksi">1955</option><option value="1954" class="r-kemksi">1954</option><option value="1953" class="r-kemksi">1953</option><option value="1952" class="r-kemksi">1952</option><option value="1951" class="r-kemksi">1951</option><option value="1950" class="r-kemksi">1950</option><option value="1949" class="r-kemksi">1949</option><option value="1948" class="r-kemksi">1948</option><option value="1947" class="r-kemksi">1947</option><option value="1946" class="r-kemksi">1946</option><option value="1945" class="r-kemksi">1945</option><option value="1944" class="r-kemksi">1944</option><option value="1943" class="r-kemksi">1943</option><option value="1942" class="r-kemksi">1942</option><option value="1941" class="r-kemksi">1941</option><option value="1940" class="r-kemksi">1940</option><option value="1939" class="r-kemksi">1939</option><option value="1938" class="r-kemksi">1938</option><option value="1937" class="r-kemksi">1937</option><option value="1936" class="r-kemksi">1936</option><option value="1935" class="r-kemksi">1935</option><option value="1934" class="r-kemksi">1934</option><option value="1933" class="r-kemksi">1933</option><option value="1932" class="r-kemksi">1932</option><option value="1931" class="r-kemksi">1931</option><option value="1930" class="r-kemksi">1930</option><option value="1929" class="r-kemksi">1929</option><option value="1928" class="r-kemksi">1928</option><option value="1927" class="r-kemksi">1927</option><option value="1926" class="r-kemksi">1926</option><option value="1925" class="r-kemksi">1925</option><option value="1924" class="r-kemksi">1924</option><option value="1923" class="r-kemksi">1923</option><option value="1922" class="r-kemksi">1922</option><option value="1921" class="r-kemksi">1921</option><option value="1920" class="r-kemksi">1920</option><option value="1919" class="r-kemksi">1919</option><option value="1918" class="r-kemksi">1918</option><option value="1917" class="r-kemksi">1917</option><option value="1916" class="r-kemksi">1916</option><option value="1915" class="r-kemksi">1915</option><option value="1914" class="r-kemksi">1914</option><option value="1913" class="r-kemksi">1913</option><option value="1912" class="r-kemksi">1912</option><option value="1911" class="r-kemksi">1911</option><option value="1910" class="r-kemksi">1910</option><option value="1909" class="r-kemksi">1909</option><option value="1908" class="r-kemksi">1908</option><option value="1907" class="r-kemksi">1907</option><option value="1906" class="r-kemksi">1906</option><option value="1905" class="r-kemksi">1905</option><option value="1904" class="r-kemksi">1904</option><option value="1903" class="r-kemksi">1903</option><option value="1902" class="r-kemksi">1902</option><option value="1901" class="r-kemksi">1901</option>
         </select>
           <select  v-model="nome"  >

             <option v-for="champ in champList" :key="champ.Name">{{champ.Name}}</option>
           </select></p>
         <p align="center"><button @click = "getEntry(nome,year); isEntryDisplay=true, isAuto=false" >CERCA</button></p>
       </template>
    <p align="center"><button id="pulsante" @click="displayChoice=true, isAutoButton=true" >AUTO DI UNO SPECIFICO CAMPIONATO</button></p>
    <template v-if="isAutoButton">
      <p align="center">inserisci anno e nome campionato <select v-model="year2"  >

        <option value="2021">2021</option>
        <option value="2020" class="r-kemksi">2020</option><option value="2019" class="r-kemksi">2019</option><option value="2018" class="r-kemksi">2018</option><option value="2017" class="r-kemksi">2017</option><option value="2016" class="r-kemksi">2016</option><option value="2015" class="r-kemksi">2015</option><option value="2014" class="r-kemksi">2014</option><option value="2013" class="r-kemksi">2013</option><option value="2012" class="r-kemksi">2012</option><option value="2011" class="r-kemksi">2011</option><option value="2010" class="r-kemksi">2010</option><option value="2009" class="r-kemksi">2009</option><option value="2008" class="r-kemksi">2008</option><option value="2007" class="r-kemksi">2007</option><option value="2006" class="r-kemksi">2006</option><option value="2005" class="r-kemksi">2005</option><option value="2004" class="r-kemksi">2004</option><option value="2003" class="r-kemksi">2003</option><option value="2002" class="r-kemksi">2002</option><option value="2001" class="r-kemksi">2001</option><option value="2000" class="r-kemksi">2000</option><option value="1999" class="r-kemksi">1999</option><option value="1998" class="r-kemksi">1998</option><option value="1997" class="r-kemksi">1997</option><option value="1996" class="r-kemksi">1996</option><option value="1995" class="r-kemksi">1995</option><option value="1994" class="r-kemksi">1994</option><option value="1993" class="r-kemksi">1993</option><option value="1992" class="r-kemksi">1992</option><option value="1991" class="r-kemksi">1991</option><option value="1990" class="r-kemksi">1990</option><option value="1989" class="r-kemksi">1989</option><option value="1988" class="r-kemksi">1988</option><option value="1987" class="r-kemksi">1987</option><option value="1986" class="r-kemksi">1986</option><option value="1985" class="r-kemksi">1985</option><option value="1984" class="r-kemksi">1984</option><option value="1983" class="r-kemksi">1983</option><option value="1982" class="r-kemksi">1982</option><option value="1981" class="r-kemksi">1981</option><option value="1980" class="r-kemksi">1980</option><option value="1979" class="r-kemksi">1979</option><option value="1978" class="r-kemksi">1978</option><option value="1977" class="r-kemksi">1977</option><option value="1976" class="r-kemksi">1976</option><option value="1975" class="r-kemksi">1975</option><option value="1974" class="r-kemksi">1974</option><option value="1973" class="r-kemksi">1973</option><option value="1972" class="r-kemksi">1972</option><option value="1971" class="r-kemksi">1971</option><option value="1970" class="r-kemksi">1970</option><option value="1969" class="r-kemksi">1969</option><option value="1968" class="r-kemksi">1968</option><option value="1967" class="r-kemksi">1967</option><option value="1966" class="r-kemksi">1966</option><option value="1965" class="r-kemksi">1965</option><option value="1964" class="r-kemksi">1964</option><option value="1963" class="r-kemksi">1963</option><option value="1962" class="r-kemksi">1962</option><option value="1961" class="r-kemksi">1961</option><option value="1960" class="r-kemksi">1960</option><option value="1959" class="r-kemksi">1959</option><option value="1958" class="r-kemksi">1958</option><option value="1957" class="r-kemksi">1957</option><option value="1956" class="r-kemksi">1956</option><option value="1955" class="r-kemksi">1955</option><option value="1954" class="r-kemksi">1954</option><option value="1953" class="r-kemksi">1953</option><option value="1952" class="r-kemksi">1952</option><option value="1951" class="r-kemksi">1951</option><option value="1950" class="r-kemksi">1950</option><option value="1949" class="r-kemksi">1949</option><option value="1948" class="r-kemksi">1948</option><option value="1947" class="r-kemksi">1947</option><option value="1946" class="r-kemksi">1946</option><option value="1945" class="r-kemksi">1945</option><option value="1944" class="r-kemksi">1944</option><option value="1943" class="r-kemksi">1943</option><option value="1942" class="r-kemksi">1942</option><option value="1941" class="r-kemksi">1941</option><option value="1940" class="r-kemksi">1940</option><option value="1939" class="r-kemksi">1939</option><option value="1938" class="r-kemksi">1938</option><option value="1937" class="r-kemksi">1937</option><option value="1936" class="r-kemksi">1936</option><option value="1935" class="r-kemksi">1935</option><option value="1934" class="r-kemksi">1934</option><option value="1933" class="r-kemksi">1933</option><option value="1932" class="r-kemksi">1932</option><option value="1931" class="r-kemksi">1931</option><option value="1930" class="r-kemksi">1930</option><option value="1929" class="r-kemksi">1929</option><option value="1928" class="r-kemksi">1928</option><option value="1927" class="r-kemksi">1927</option><option value="1926" class="r-kemksi">1926</option><option value="1925" class="r-kemksi">1925</option><option value="1924" class="r-kemksi">1924</option><option value="1923" class="r-kemksi">1923</option><option value="1922" class="r-kemksi">1922</option><option value="1921" class="r-kemksi">1921</option><option value="1920" class="r-kemksi">1920</option><option value="1919" class="r-kemksi">1919</option><option value="1918" class="r-kemksi">1918</option><option value="1917" class="r-kemksi">1917</option><option value="1916" class="r-kemksi">1916</option><option value="1915" class="r-kemksi">1915</option><option value="1914" class="r-kemksi">1914</option><option value="1913" class="r-kemksi">1913</option><option value="1912" class="r-kemksi">1912</option><option value="1911" class="r-kemksi">1911</option><option value="1910" class="r-kemksi">1910</option><option value="1909" class="r-kemksi">1909</option><option value="1908" class="r-kemksi">1908</option><option value="1907" class="r-kemksi">1907</option><option value="1906" class="r-kemksi">1906</option><option value="1905" class="r-kemksi">1905</option><option value="1904" class="r-kemksi">1904</option><option value="1903" class="r-kemksi">1903</option><option value="1902" class="r-kemksi">1902</option><option value="1901" class="r-kemksi">1901</option>
      </select>
        <select  v-model="nome2"  >

          <option v-for="champ in champList" :key="champ.Name">{{champ.Name}}</option>
        </select></p>
      <p align="center"> <button @click = "getAutoCampionato(nome2,year2); isAuto=true, isEntryDisplay=false" >CERCA</button></p>
    </template>



    <template v-if="isEntryDisplay">
      <h2>ENTRY</h2>
      <table class="table">
        <thead>
        <tr>
          <th scope="col">Modellox</th>
          <th scope="col">Anno</th>
          <th scope="col">Brand</th>
          <th scope="col">Classe</th>
          <th scope="col">Trasmissione</th>
          <th scope="col">Cambio</th>
          <th scop="col">Numero di Gara</th>
          <th scop="col">Team</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="Entry in entry" :key="Entry.Model" >
          <td>{{Entry.Car.Model}}</td>
          <td>{{Entry.Car.Year}}</td>
          <td>{{Entry.Car.Brand.Name}}</td>
          <td>{{Entry.Car.Class}}</td>
          <td>{{Entry.Car.Drivetrain}}</td>
          <td>{{Entry.Car.Transmission}}</td>
          <td>{{Entry.RaceNumber}}</td>
          <td>{{Entry.Team.Name}}</td>
        </tr>

        </tbody>
      </table>

    </template>
      <template v-if="isAuto">
        <h2>AUTO PRESENTI A UNO SPECIFICO CAMPIONATO</h2>
        <table class="table">
        <thead>
        <tr>
          <th scope="col">Modello</th>
          <th scope="col">Anno</th>
          <th scope="col">Brand</th>
          <th scope="col">Classe</th>
          <th scope="col">Trasmissione</th>
          <th scope="col">Cambio</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="car in carChampion" :key="car.Model" >
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

    <table class="table">
      <thead>
      <tr>
        <th scope="col">Nome</th>
        <th scope="col">Anno</th>
        <th scope="col">Classi</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="champion in championship" :key="champion.Name" >
        <th scope="row">{{champion.Name}}</th>
        <td>{{champion.Year}}</td>
        <div v-for="classes in champion.Classes" :key="classes.Name">
          <td>{{classes.Name}}</td>
        </div>
      </tr>
      </tbody>
    </table>
  </body>
</template>
<script>
export default {
  name: "Championship",
  data() {
    return {
      championship: {},
      champList:{},
      carChampion:{},
      entry: {},
      displayChoice: false,
      isAuto:false,
      isAutoButton: false,
      isEntry: false,
      isEntryDisplay: false,
      Year:{}
    }
  },
  mounted(){
    this.getName();
    this.getAutoCampionato();
    this.getEntry();
    this.getYear();
  },
  methods: {
    async getName(){
      const res = await fetch('http://api.progdb.davidebaldelli.it:1234/championship/all');
      const data = await res.json();
      this.championship = data;
      this.champList = Object.values(data.reduce((r, o) => {
        r[o.Name] = r[o.Name] || o;
        return r;
      },{}));

    },
    async getAutoCampionato(nomeChamp, annoChamp){
      const res2 = await fetch('http://api.progdb.davidebaldelli.it:1234/car/championship/' + nomeChamp + "/" + annoChamp);
      const data2 = await res2.json();
      this.carChampion = data2;
    },
    async getEntry(nomeChamp, annoChamp){
      const res3 = await fetch('http://api.progdb.davidebaldelli.it:1234/entry/championship/' + nomeChamp + "/" + annoChamp);
      const data3 = await res3.json();
      this.entry = data3;
    },
    async getYear(){
      const resYear = await fetch('https://virtserver.swaggerhub.com/xeli00/OnlyYear/1.0.0/inventory');
      const dataYear = await resYear.json();
      this.Year = dataYear;
    }
  }
};
</script>
<style>
#home{
  height: 100px;
  width: 100px;
  z-index: -1;

}
#homeButton{
  background-color: transparent;
  border: transparent;
}
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
  border-bottom: 1px solid #E3F1D5;
}
td,th{
  text-align: center;
}

thead tr        {
  height:60px;
  background: #cc0033;
  font-size:16px;


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
button{
  text-align: center;
  font-family: "Arial Black";
  font-style: italic;
  height: 40px;
  background-color: red;
  color: #FFFFFF;
}
</style>