<template>
    <div>
      <div>
        <div class="lds-ring" v-if="loading"><div></div><div></div><div></div><div></div></div>
      </div>
      <div v-if="!loading"> 
        <h1>{{this.blog.Title}}</h1>
        <div>
          <img class="rounded" :src="this.blog.Thumbnail" alt="Card image cap">
        </div>
        <div>
            {{this.blog.Name}}
        </div>
        <div>
            {{this.blog.Content}}
        </div>
        <div>
          <router-link :to="`/`">
            <button type="button" class="btn btn-danger" @click="del_post">Delete</button>
          </router-link>
        </div>
      </div>
        
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Blog",

  data() {
    return {
      blog: "",
      laoding:false
    };
  },
  //   created() {
  //     this.blog_data();
  //   },
  mounted() {
    this.blog_data();
  },

  methods: {
    async blog_data() {
      this.loading = true
      var id1 = this.$route.params.id;
      console.log(id1);
      let result = await axios.get(
        "https://vuefirebase-ex1-default-rtdb.asia-southeast1.firebasedatabase.app/data/" +
          id1 +
          ".json"
      );
      this.blog = result.data;
      console.log("blogdata", this.blog);
      this.loading = false
      //   const newObj = Object.keys(result.data).map((p) => {
      //     return { ...result.data[p], id: p };
      //   });
      //   console.log("newObj", newObj);
      //   console.log("this.data12", newObj);
      //   this.data1 = newObj;
    },
    async del_post(){
      var id1 = this.$route.params.id;
      console.log(id1);
      let result = await axios.delete(
        "https://vuefirebase-ex1-default-rtdb.asia-southeast1.firebasedatabase.app/data/" +
          id1 +
          ".json"
      );
    }
  },
};
</script>

<style scoped>
</style>