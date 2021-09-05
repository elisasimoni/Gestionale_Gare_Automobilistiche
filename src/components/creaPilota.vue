<template>
  <body>
  <img class="background" src="@/assets/sfo.jpg">
  <router-link id="homeButton" to="dbSelect" tag="button"><img id="home" src="@/assets/arrow.png"></router-link>
  <h1>CREA PILOTA</h1>
  <form >
    <p align="center"><input  placeholder="Nome"  v-model.trim="pilot.Name"></p>
    <p align="center"><input  placeholder="Cognome" v-model.trim="pilot.Surname"></p>
    <form>
      <p align="center"> <label>Inserire data di nascita:
        <input type="datetime-local"  v-model.trim="data">
        <select v-model="fuso">

          <option timeZoneId="1" gmtAdjustment="GMT-12:00" useDaylightTime="0" value=":00-12:00">(GMT-12:00) International Date Line West</option>
          <option timeZoneId="2" gmtAdjustment="GMT-11:00" useDaylightTime="0" value=":00-11:00">(GMT-11:00) Midway Island, Samoa</option>
          <option timeZoneId="3" gmtAdjustment="GMT-10:00" useDaylightTime="0" value=":00-10:00">(GMT-10:00) Hawaii</option>
          <option timeZoneId="4" gmtAdjustment="GMT-09:00" useDaylightTime="1" value=":00-09:00">(GMT-09:00) Alaska</option>
          <option timeZoneId="5" gmtAdjustment="GMT-08:00" useDaylightTime="1" value=":00-08:00">(GMT-08:00) Pacific Time (US & Canada)</option>
          <option timeZoneId="6" gmtAdjustment="GMT-08:00" useDaylightTime="1" value=":00-08:00">(GMT-08:00) Tijuana, Baja California</option>
          <option timeZoneId="7" gmtAdjustment="GMT-07:00" useDaylightTime="0" value=":00-07:00">(GMT-07:00) Arizona</option>
          <option timeZoneId="8" gmtAdjustment="GMT-07:00" useDaylightTime="1" value=":00-07:00">(GMT-07:00) Chihuahua, La Paz, Mazatlan</option>
          <option timeZoneId="9" gmtAdjustment="GMT-07:00" useDaylightTime="1" value=":00-07:00">(GMT-07:00) Mountain Time (US & Canada)</option>
          <option timeZoneId="10" gmtAdjustment="GMT-06:00" useDaylightTime="0" value=":00-06:00">(GMT-06:00) Central America</option>
          <option timeZoneId="11" gmtAdjustment="GMT-06:00" useDaylightTime="1" value=":00-06:00">(GMT-06:00) Central Time (US & Canada)</option>
          <option timeZoneId="12" gmtAdjustment="GMT-06:00" useDaylightTime="1" value=":00-06:00">(GMT-06:00) Guadalajara, Mexico City, Monterrey</option>
          <option timeZoneId="13" gmtAdjustment="GMT-06:00" useDaylightTime="0" value=":00-06:00">(GMT-06:00) Saskatchewan</option>
          <option timeZoneId="14" gmtAdjustment="GMT-05:00" useDaylightTime="0" value=":00-05:00">(GMT-05:00) Bogota, Lima, Quito, Rio Branco</option>
          <option timeZoneId="15" gmtAdjustment="GMT-05:00" useDaylightTime="1" value=":00-05:00">(GMT-05:00) Eastern Time (US & Canada)</option>
          <option timeZoneId="16" gmtAdjustment="GMT-05:00" useDaylightTime="1" value=":00-05:00">(GMT-05:00) Indiana (East)</option>
          <option timeZoneId="17" gmtAdjustment="GMT-04:00" useDaylightTime="1" value=":00-04:00">(GMT-04:00) Atlantic Time (Canada)</option>
          <option timeZoneId="18" gmtAdjustment="GMT-04:00" useDaylightTime="0" value=":00-04:00">(GMT-04:00) Caracas, La Paz</option>
          <option timeZoneId="19" gmtAdjustment="GMT-04:00" useDaylightTime="0" value=":00-04:00">(GMT-04:00) Manaus</option>
          <option timeZoneId="20" gmtAdjustment="GMT-04:00" useDaylightTime="1" value=":00-04:00">(GMT-04:00) Santiago</option>
          <option timeZoneId="21" gmtAdjustment="GMT-03:30" useDaylightTime="1" value=":00-03:30">(GMT-03:30) Newfoundland</option>
          <option timeZoneId="22" gmtAdjustment="GMT-03:00" useDaylightTime="1" value=":00-03:00">(GMT-03:00) Brasilia</option>
          <option timeZoneId="23" gmtAdjustment="GMT-03:00" useDaylightTime="0" value=":00-03:00">(GMT-03:00) Buenos Aires, Georgetown</option>
          <option timeZoneId="24" gmtAdjustment="GMT-03:00" useDaylightTime="1" value=":00-03:00">(GMT-03:00) Greenland</option>
          <option timeZoneId="25" gmtAdjustment="GMT-03:00" useDaylightTime="1" value=":00-03:00">(GMT-03:00) Montevideo</option>
          <option timeZoneId="26" gmtAdjustment="GMT-02:00" useDaylightTime="1" value=":00-02:00">(GMT-02:00) Mid-Atlantic</option>
          <option timeZoneId="27" gmtAdjustment="GMT-01:00" useDaylightTime="0" value=":00-01:00">(GMT-01:00) Cape Verde Is.</option>
          <option timeZoneId="28" gmtAdjustment="GMT-01:00" useDaylightTime="1" value=":00-01:00">(GMT-01:00) Azores</option>
          <option timeZoneId="29" gmtAdjustment="GMT+00:00" useDaylightTime="0" value=":00+00:00">(GMT+00:00) Casablanca, Monrovia, Reykjavik</option>
          <option timeZoneId="30" gmtAdjustment="GMT+00:00" useDaylightTime="1" value=":00+00:00">(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London</option>
          <option timeZoneId="31" gmtAdjustment="GMT+01:00" useDaylightTime="1" value=":00+01:00">(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna</option>
          <option timeZoneId="32" gmtAdjustment="GMT+01:00" useDaylightTime="1" value=":00+01:00">(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague</option>
          <option timeZoneId="33" gmtAdjustment="GMT+01:00" useDaylightTime="1" value=":00+01:00">(GMT+01:00) Brussels, Copenhagen, Madrid, Paris</option>
          <option timeZoneId="34" gmtAdjustment="GMT+01:00" useDaylightTime="1" value=":00+01:00">(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb</option>
          <option timeZoneId="35" gmtAdjustment="GMT+01:00" useDaylightTime="1" value=":00+01:00">(GMT+01:00) West Central Africa</option>
          <option timeZoneId="36" gmtAdjustment="GMT+02:00" useDaylightTime="1" value=":00+02:00">(GMT+02:00) Amman</option>
          <option timeZoneId="37" gmtAdjustment="GMT+02:00" useDaylightTime="1" value=":00+02:00">(GMT+02:00) Athens, Bucharest, Istanbul</option>
          <option timeZoneId="38" gmtAdjustment="GMT+02:00" useDaylightTime="1" value=":00+02:00">(GMT+02:00) Beirut</option>
          <option timeZoneId="39" gmtAdjustment="GMT+02:00" useDaylightTime="1" value=":00+02:00">(GMT+02:00) Cairo</option>
          <option timeZoneId="40" gmtAdjustment="GMT+02:00" useDaylightTime="0" value=":00+02:00">(GMT+02:00) Harare, Pretoria</option>
          <option timeZoneId="41" gmtAdjustment="GMT+02:00" useDaylightTime="1" value=":00+02:00">(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius</option>
          <option timeZoneId="42" gmtAdjustment="GMT+02:00" useDaylightTime="1" value=":00+02:00">(GMT+02:00) Jerusalem</option>
          <option timeZoneId="43" gmtAdjustment="GMT+02:00" useDaylightTime="1" value=":00+02:00">(GMT+02:00) Minsk</option>
          <option timeZoneId="44" gmtAdjustment="GMT+02:00" useDaylightTime="1" value=":00+02:00">(GMT+02:00) Windhoek</option>
          <option timeZoneId="45" gmtAdjustment="GMT+03:00" useDaylightTime="0" value=":00+03:00">(GMT+03:00) Kuwait, Riyadh, Baghdad</option>
          <option timeZoneId="46" gmtAdjustment="GMT+03:00" useDaylightTime="1" value=":00+03:00">(GMT+03:00) Moscow, St. Petersburg, Volgograd</option>
          <option timeZoneId="47" gmtAdjustment="GMT+03:00" useDaylightTime="0" value=":00+03:00">(GMT+03:00) Nairobi</option>
          <option timeZoneId="48" gmtAdjustment="GMT+03:00" useDaylightTime="0" value=":00+03:00">(GMT+03:00) Tbilisi</option>
          <option timeZoneId="49" gmtAdjustment="GMT+03:30" useDaylightTime="1" value=":00+03:30">(GMT+03:30) Tehran</option>
          <option timeZoneId="50" gmtAdjustment="GMT+04:00" useDaylightTime="0" value=":00+04:00">(GMT+04:00) Abu Dhabi, Muscat</option>
          <option timeZoneId="51" gmtAdjustment="GMT+04:00" useDaylightTime="1" value=":00+04:00">(GMT+04:00) Baku</option>
          <option timeZoneId="52" gmtAdjustment="GMT+04:00" useDaylightTime="1" value=":00+04:00">(GMT+04:00) Yerevan</option>
          <option timeZoneId="53" gmtAdjustment="GMT+04:30" useDaylightTime="0" value=":00+04:30">(GMT+04:30) Kabul</option>
          <option timeZoneId="54" gmtAdjustment="GMT+05:00" useDaylightTime="1" value=":00+05:00">(GMT+05:00) Yekaterinburg</option>
          <option timeZoneId="55" gmtAdjustment="GMT+05:00" useDaylightTime="0" value=":00+05:00">(GMT+05:00) Islamabad, Karachi, Tashkent</option>
          <option timeZoneId="56" gmtAdjustment="GMT+05:30" useDaylightTime="0" value=":00+05:30">(GMT+05:30) Sri Jayawardenapura</option>
          <option timeZoneId="57" gmtAdjustment="GMT+05:30" useDaylightTime="0" value=":00+05:30">(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi</option>
          <option timeZoneId="58" gmtAdjustment="GMT+05:45" useDaylightTime="0" value=":00+05:45">(GMT+05:45) Kathmandu</option>
          <option timeZoneId="59" gmtAdjustment="GMT+06:00" useDaylightTime="1" value=":00+06:00">(GMT+06:00) Almaty, Novosibirsk</option>
          <option timeZoneId="60" gmtAdjustment="GMT+06:00" useDaylightTime="0" value=":00+06:00">(GMT+06:00) Astana, Dhaka</option>
          <option timeZoneId="61" gmtAdjustment="GMT+06:30" useDaylightTime="0" value=":00+06:30">(GMT+06:30) Yangon (Rangoon)</option>
          <option timeZoneId="62" gmtAdjustment="GMT+07:00" useDaylightTime="0" value=":00+07:00">(GMT+07:00) Bangkok, Hanoi, Jakarta</option>
          <option timeZoneId="63" gmtAdjustment="GMT+07:00" useDaylightTime="1" value=":00+07:00">(GMT+07:00) Krasnoyarsk</option>
          <option timeZoneId="64" gmtAdjustment="GMT+08:00" useDaylightTime="0" value=":00+08:00">(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi</option>
          <option timeZoneId="65" gmtAdjustment="GMT+08:00" useDaylightTime="0" value=":00+08:00">(GMT+08:00) Kuala Lumpur, Singapore</option>
          <option timeZoneId="66" gmtAdjustment="GMT+08:00" useDaylightTime="0" value=":00+08:00">(GMT+08:00) Irkutsk, Ulaan Bataar</option>
          <option timeZoneId="67" gmtAdjustment="GMT+08:00" useDaylightTime="0" value=":00+08:00">(GMT+08:00) Perth</option>
          <option timeZoneId="68" gmtAdjustment="GMT+08:00" useDaylightTime="0" value=":00+08:00">(GMT+08:00) Taipei</option>
          <option timeZoneId="69" gmtAdjustment="GMT+09:00" useDaylightTime="0" value=":00+09:00">(GMT+09:00) Osaka, Sapporo, Tokyo</option>
          <option timeZoneId="70" gmtAdjustment="GMT+09:00" useDaylightTime="0" value=":00+09:00">(GMT+09:00) Seoul</option>
          <option timeZoneId="71" gmtAdjustment="GMT+09:00" useDaylightTime="1" value=":00+09:00">(GMT+09:00) Yakutsk</option>
          <option timeZoneId="72" gmtAdjustment="GMT+09:30" useDaylightTime="0" value=":00+09:30">(GMT+09:30) Adelaide</option>
          <option timeZoneId="73" gmtAdjustment="GMT+09:30" useDaylightTime="0" value=":00+09:30">(GMT+09:30) Darwin</option>
          <option timeZoneId="74" gmtAdjustment="GMT+10:00" useDaylightTime="0" value=":00+10:00">(GMT+10:00) Brisbane</option>
          <option timeZoneId="75" gmtAdjustment="GMT+10:00" useDaylightTime="1" value=":00+10:00">(GMT+10:00) Canberra, Melbourne, Sydney</option>
          <option timeZoneId="76" gmtAdjustment="GMT+10:00" useDaylightTime="1" value=":00+10:00">(GMT+10:00) Hobart</option>
          <option timeZoneId="77" gmtAdjustment="GMT+10:00" useDaylightTime="0" value=":00+10:00">(GMT+10:00) Guam, Port Moresby</option>
          <option timeZoneId="78" gmtAdjustment="GMT+10:00" useDaylightTime="1" value=":00+10:00">(GMT+10:00) Vladivostok</option>
          <option timeZoneId="79" gmtAdjustment="GMT+11:00" useDaylightTime="1" value=":00+11:00">(GMT+11:00) Magadan, Solomon Is., New Caledonia</option>
          <option timeZoneId="80" gmtAdjustment="GMT+12:00" useDaylightTime="1" value=":00+12:00">(GMT+12:00) Auckland, Wellington</option>
          <option timeZoneId="81" gmtAdjustment="GMT+12:00" useDaylightTime="0" value=":00+12:00">(GMT+12:00) Fiji, Kamchatka, Marshall Is.</option>
          <option timeZoneId="82" gmtAdjustment="GMT+13:00" useDaylightTime="0" value=":00+13:00">(GMT+13:00) Nuku'alofa</option>
        </select>



      </label>

      </p>
    </form>
   <form v-if="pilot.Name != nullo && pilot.Surname!=nullo">
     <p align="center"> <button tag="button" @click="getFirstNameLetter(pilot.Name),saveCF(first,pilot.Surname), addDateFuso(data,fuso), generate=true">GENERA CF</button></p>
     {{pilot.Birthdate}}
     <template v-if="generate" id="cf">
        <h3 align="center">{{this.first + this.pilot.Surname}}</h3>

      </template>
    </form>

    <p align="center">
      Inserire il genere:
      <input  type="radio" v-model.trim="pilot.Sex" value="M"> M
      <input  type="radio" v-model.trim="pilot.Sex"  value="F"> F
    </p>

      <form >
        <p align="center"> Scegliere nazione:
          <select  v-model="pilot.Nation"  >
            <option v-for="country in countries" :key="country.name" >{{country.name}}</option>
          </select></p>
      </form>



    <p align="center">

      <template v-if="pilot.Name!=nullo && pilot.Surname !=nullo && pilot.Sex!=nullo  && pilot.Nation!=nullo && pilot.Birthdate!=nullo">
      <input  id="creapilota" type="button" value="Inserisci" @click="newPilot"/>

      </template>
      <template v-if="pilot.Name==nullo || pilot.Surname ==nullo || pilot.Sex==nullo ||  pilot.Nation==nullo || pilot.Birthdate==nullo">

        <input  id="creapilotaNo" type="button" value="Inserisci" @click="alert('Si prega di compilare tutti i campi')">
      </template>

    </p>
  </form>
  </body>
</template>

<script>
export default {
  name: "Driver",
  data() {
    return {
      nome:"",
      cognome:"",
      compleanno:"",
      genere:"",
      countries: {},
      teams:{},
      team:"",
      nullo:"",
      first:"",
      generate: false,
      pilot:{
        Name:"",
        Surname:"",
        CF:"",
        Sex:"",
        Nation:"",
        Birthdate:"",
      },
    postId:"",
      data:"",
      fuso:":00+01:00"

    }
  },
  mounted(){
    this.getNation();
    this.getTeams();
    this.getFirstNameLetter();
    this.saveCF();
    this.newPilot();
    this.addDateFuso();
  },
  methods: {
    async getNation(){
      const res3 = await fetch("https://restcountries.eu/rest/v2/all");
      const data3 = await res3.json();
      this.countries = data3;
    },
    async getTeams(){
      const res = await fetch('http://api.progdb.davidebaldelli.it:1234/team/all');
      const data = await res.json();
      this.teams = data;
    },
    getFirstNameLetter(name) {
      var x = name;
      this.first = (x.charAt(0));
    },
    async newPilot(){
      this.axios.post("http://api.progdb.davidebaldelli.it:1234/driver/new", this.pilot).then(res=>console.log(res.data)).catch(error=>console.log(error));
    },
    saveCF(a,b){
      this.pilot.CF=a+b;

    },
    addDateFuso(a,b){
      this.pilot.Birthdate=a+b;
    }




  }
};
</script>

<style scoped>
#creapilota{
  text-align: center;
  font-family: "Arial Black";
  font-style: italic;
  height: 40px;
  background-color: red;
  color: #FFFFFF;
}
#creapilotaNo{
  text-align: center;
  font-family: "Arial Black";
  font-style: italic;
  height: 40px;
  background-color: red;
  color: #FFFFFF;
}
#cf{
  text-align: center;
  font-family: "Arial Black";
  font-size: medium;

}
</style>