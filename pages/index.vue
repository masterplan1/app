<template>
  <section>
    <nav>
      <nuxt-link to="/">ValentineQuote</nuxt-link>
    </nav>
    <main>
      <div>
        <h1>Love4</h1>
        <img 
          src="/image5.jpg" 
          alt="Val image digit"
          width="50%"
        >
        <nuxt-link :to="`/quotes/${id}`" class="button">Get Random LoveQuote</nuxt-link>
      </div>
      <!-- <p>{{quotes[0]}}</p> -->
    </main>
  </section>
</template>

<script>
import _ from 'lodash'
export default {
  data(){
    return {
      id: 2002
    }
  },
  created(){
    const ids = this.quotes.map(q => q.id);
    this.id = _.sample(ids);
  },
  computed: {
    quotes(){
      console.log('computed')
      return this.$store.getters['getQuotes']
    },
  }
}
</script>

<style>
  nav {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 56px;
    background: rgb(240, 49, 49);
    box-shadow: 0 1px 3px pink;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  nav a {
    color: white;
    text-decoration: none;
    font-size: 1.5em;
    font-weight: lighter;
  }
  main{
    padding-top: 56px;
    /* min-height: calc(100vh - 56px); */
    display: flex;
    align-items: center;
  }
  main div {
    margin: 0 auto;
    flex-basis: 90%;
    text-align: center;

   }
   main div .button {
     display: block;
     margin: 0 auto;
     background: rosybrown;
     border: 0;
     padding: 1.1em;
     font-size: 1.2em;
     color: white;
     margin-top: 18px;
     border-radius: 5px;
     text-decoration: none;
     max-width: 300px;
   }
   main div .button:hover{
     background: rgb(230, 166, 47);
     transform: scale(1.005);
   }
   main div h1 {
     font-size: 3em;
     font-weight: lighter;
     text-align: center;
     margin: 20px 0;
   }
   main div img{
     border-radius: 10px;
     box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
   }
</style>



