<template>
    <div>
        <h1>{{this.blog.Title}}</h1>
        <div>
            {{this.blog.Thumbnail}}
        </div>
        <div>
            {{this.blog.Name}}
        </div>
        <div>
            {{this.blog.Content}}
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
      var id1 = this.$route.params.id;
      console.log(id1);
      let result = await axios.get(
        "https://vuefirebase-ex1-default-rtdb.asia-southeast1.firebasedatabase.app/data/" +
          id1 +
          ".json"
      );
      this.blog = result.data;
      console.log("blogdata", this.blog);

      //   const newObj = Object.keys(result.data).map((p) => {
      //     return { ...result.data[p], id: p };
      //   });
      //   console.log("newObj", newObj);
      //   console.log("this.data12", newObj);
      //   this.data1 = newObj;
    },
  },
};
</script>

<style scoped>
</style>