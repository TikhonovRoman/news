
export const usePosts = defineStore('posts', {
  state: () => ({
    posts:[],
  }),
  getters: {

  },
  actions: {
      createPosts() {
          for (let i = 0; i < 6; i++) {
              let postText='Lorem ipsum'
              let src=`/img/${i+1}.jpg`
              let heading='product'+i

              this.posts.push({id:i,head:heading,image:src, text: postText})
          }
          console.log(this.posts);
      }
  },

})
