<template>
    <div>
        <form id="form-group">

            <div>
                <div class="container-fluid py-3">
                    <input class="form-control" type="text" value="reset"  placeholder="Name.." v-model="result.Name" required>
                    <span class="invalid" v-if="!$v.result.name.required && $v.result.name.$dirty">Name is required</span>
                    <span class="invalid" v-if="!$v.result.name.alpha && $v.result.name.required && $v.result.name.$dirty">Invalid input</span>
                    <span class="invalid" v-if="(!$v.result.name.minLength || !$v.result.name.maxLength) && $v.result.name.$dirty">Name must be between {{ $v.name.$params.minLength.min }} and {{ $v.name.$params.maxLength.max }}</span><br>
                </div>
                <div class="container-fluid py-3">
                    <input class="form-control" type="text" value="reset" placeholder="Title.." v-model="result.Title" required >
                    <span class="invalid" v-if="!$v.result.title.required && $v.result.title.$dirty">Title is required</span>
                    <span class="invalid" v-if="!$v.result.title.alpha && $v.result.title.required && $v.result.title.$dirty">Invalid input</span>
                    <span class="invalid" v-if="(!$v.result.title.minLength || !$v.result.title.maxLength) && $v.result.title.$dirty">Title must be between {{ $v.name.$params.minLength.min }} and {{ $v.name.$params.maxLength.max }}</span><br>
                </div>
                <div class="container-fluid py-3">
                  <input class="form-control" type="text" value="reset" placeholder="Thumbnail.." v-model="result.Thumbnail" required>
                </div>
                <div class="form-group">
                    <label>Content...</label>
                    <textarea class="form-control" value="reset" id="exampleFormControlTextarea1" rows="3" v-model="result.Content" required></textarea>
                    <span class="invalid" v-if="!$v.result.content.required && $v.result.content.$dirty">Content is required</span>
                    <span class="invalid" v-if="!$v.result.content.alpha && $v.result.content.required && $v.result.content.$dirty">Invalid input</span>
                    <!-- <span class="invalid" v-if="(!$v.result.name.minLength || !$v.result.name.maxLength) && $v.result.name.$dirty">Content must be between {{ $v.name.$params.minLength.min }} and {{ $v.name.$params.maxLength.max }}</span><br> -->
                </div>
                
            </div>
            <div class="container-fluid py-3 d-flex justify-content-around" >
                <div class="px-3"> 
                    <router-link :to="'/'">
                        <button type="button" class="btn btn-info" :disabled="!result.Name || !result.Title || !result.Thumbnail || !result.Content" @click="update_blog">Update</button>
                    </router-link>
                </div>
                
                <!-- <div>
                    <button type="button" class="btn btn-info" @click="click_get">Show</button>
                </div> -->
            </div>
        </form>

    </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  minLength,
  maxLength,
  alpha,
  between,
} from "vuelidate/lib/validators";
import axios from "axios";
    export default {
        name:'Blog',
        setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      v$: useVuelidate(),
      result: {
        Name: "",
        Title: "",
        Content: "",
        Thumbnail: "",
        x: "",
      },
      data1: [],
      loading: false,
      // uid: "",
    };
  },
  validations() {
    return {
      result: {
        name: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(20),
          alpha,
        },
        title: {
          required,
          maxLength: minLength(3),
          maxLength: maxLength(20),
          alpha,
        },
        content: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(20),
          alpha,
        },
      },
    };
  },
//   mounted(){
//     this.edit_blog()
//       // this.result = newObj
//   },

  
    async created(){
     
     var id1 = this.$route.params.id;
     console.log(id1);
     let result1 = await axios.get("https://vuefirebase-ex1-default-rtdb.asia-southeast1.firebasedatabase.app/data/" + id1 + ".json")
     console.log("mounted",result1.data)
       this.result = result1.data
       console.log("edit data",this.result)
     },

     methods:{
       async update_blog(){
        var id1 = this.$route.params.id;
            let result = await axios.put("https://vuefirebase-ex1-default-rtdb.asia-southeast1.firebasedatabase.app/data/" + id1 + ".json",
            {
          Name: this.result.Name,
          Title: this.result.Title,
          Content: this.result.Content,
          Thumbnail: this.result.Thumbnail,
        })
            
        }
     }
  
    }
</script>

<style scoped>

</style>