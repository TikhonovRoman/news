<template>
<div class="blockName">
  <h1>Рекомендуемое</h1>
</div>
  <div class="container">
    <template v-for="(el) of products.articles" :key="el.id">
      <div class="box-2">
        <img :src="el.urlToImage" />
        <div>
          <h3>{{ el.title }}</h3>
          <p class="text-p" align="justify">{{ el.content }}</p>
        </div>
      </div>
    </template>
  </div>
</template>


<script setup>
const { data: products } = await useFetch('https://newsapi.org/v2/everything?q=tesla&from=2023-03-23&sortBy=publishedAt&apiKey=c3393800c8864cf0b5d59a7243571bca')
console.log(products)
// import {mapStores} from 'pinia'
// export default {
//   data() {
//     return {};
//   },

//   computed: {
//     ...mapStores(usePosts),
//   },
//   methods: {
//     getClass(id) {
//       let res;
//       res = id == 0 ? "box-1" : "box-2";
//       console.log(res);
//       return res;
//     },
//   },

//   beforeMount() {
//     this.postsStore.createPosts();

//     console.log(this.postsStore.posts);
//   },
// };
</script>




