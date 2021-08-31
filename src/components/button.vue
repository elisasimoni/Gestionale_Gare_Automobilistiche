<template>
  <div class="Button">
    <router-link to="dbSelect" tag="button">TORNA INDIETRO</router-link>


  </div>
</template>

<script>
export default {
  name: 'button',

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  button{
    width:220px;
    height:70px;
    text-align: center;
    align-items: end;
    border-color: black;
    color: black;
    background-color: gainsboro;
    text-transform: capitalize;
    text-shadow:black;
    font-family: "Arial Black";

  }

</style>