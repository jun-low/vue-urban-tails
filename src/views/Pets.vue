<template>
  <v-container grid-list-md fluid>
    <v-layout wrap>
      <!-- <v-flex xs12 sm4 md3>
        <v-card color="grey lighten-2">
          <v-img src="https://goo.gl/6CQNDo" height="170px"> </v-img>
          <v-card-title>
            <div>
              <h3>Looking for a dog?</h3>
            </div>
          </v-card-title>
        </v-card>
      </v-flex> -->
      <v-flex xs12 sm4 md3 v-for="pet in dogs" :key="pet.breed">
        <app-dog :dog="pet"></app-dog>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { Dogs } from "../data/dogs";
import Dog from "../components/Dog.vue";

  export default {
    components: {
      appDog: Dog
    },
    data () {
      return{
        dogs: Dogs
      };
    }
  }
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}
</style>