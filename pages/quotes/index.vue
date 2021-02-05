<template>
  <section>
    <ul>
      <li
        v-for="item in quotes"
        :key="item.id"
        
      >
      <nuxt-link :to="'/quotes/' + item.id" v-html="item.body"></nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  computed: {
    quotes(){
      return this.$store.getters.getQuotes;

    }
  }
}
</script>