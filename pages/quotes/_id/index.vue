<template>
  <div id="codeCard">
    <h1>I am a quote number {{$route.params.id}}</h1>
    <p>{{quote.author}}</p>
    <hr>
    <p>{{quote.body}}</p>
    
    
   
  </div>
</template>

<script>
export default {
  
  computed: {
    quotes(){
      console.log('computed1')
      return this.$store.getters['getQuotes']
    },
    quote(){
      const param = +this.$route.params.id;
      const id = this.quotes.findIndex(item => item.id === param);
      return this.quotes[id];
    }
  },
  mounted(){
    console.log('mounted')
  },
  head(){
    return {
      title: this.quote.author
    }
  }
}
</script>