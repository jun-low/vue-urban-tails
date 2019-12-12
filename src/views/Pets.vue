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
import axios from "axios";
import Axios from 'axios';

// Configured axios to always start API calls to the URL
axios.defaults.baseURL = "https://dog.ceo/api";


  export default {
    components: {
      appDog: Dog
    },
    data () {
      return{
        dogs: Dogs
      };
    },
    created () {
      this.dogs.forEach(dog => {
        dog.img = "";
      });
      const linksArray = this.dogs.map(
      dog => "/breed/" + dog.breed + "/images/random"
      );
      axios.all(linksArray.map(link => axios.get(link)))
      .then(
        axios.spread((...res) => {
          this.dogs.forEach((dog, index) => {
            dog.img = res[index].data.message;
          });
        })
      );
    //   axios.get('/breed/husky/images/random')
    //   .then(res => {
    //     // console.log(res.data)
    //     const husky = this.dogs.find( dog => dog.breed === 'husky');
    //     husky.img = res.data.message
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    }
  }
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}
</style>