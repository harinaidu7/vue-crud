<template>
    <div>
        <div class="container-fluid">


          <!-- form start -->
          
          <form id="form-group">
             
                <!-- <div class="container-fluid p-0">Blog</div> -->
                <div class="header">
                  <h1>BLOG DETAILS</h1>
                </div>

                <div>
                    <div class="container-fluid py-3">
                      <label class="form-lable">Name</label>
                        <input class="form-input" type="text" value="reset" v-model="result.Name" >
                        <span class="invalid" v-if="!$v.result.Name.required && $v.result.Name.$dirty">Name is required</span>
                        <span class="invalid" v-if="!$v.result.Name.alpha && $v.result.Name.Required && $v.result.Name.$dirty">Invalid input</span>
                        <!-- <span class="invalid" v-if="(!$v.result.Name.minLength || !$v.result.Name.maxLength) && $v.result.Name.$dirty">Name must be between {{ $v.Name.$params.minLength.min }} and {{ $v.name.$params.maxLength.max }}</span><br> -->
                    </div>
                    <div class="container-fluid py-3">
                      <label>Title</label>
                        <input class="form-control" type="text" value="reset" v-model="result.Title"  >
                        <span class="invalid" v-if="!$v.result.Title.required && $v.result.Title.$dirty">Title is required</span>
                        <span class="invalid" v-if="!$v.result.Title.alpha && $v.result.Title.required && $v.result.Title.$dirty">Invalid input</span>
                        <span class="invalid" v-if="(!$v.result.Title.minLength || !$v.result.Title.maxLength) && $v.result.Title.$dirty">Title must be between {{ $v.Title.$params.minLength.min }} and {{ $v.Title.$params.maxLength.max }}</span><br>
                    </div>
                    <div class="container-fluid py-3">
                      <label>Image URL</label>

                      <input class="form-control" type="text" value="reset" v-model="result.Thumbnail" >
                    </div>
                    <div class="form-group">
                        <label>Content...</label>
                        <textarea class="form-control" value="reset" id="exampleFormControlTextarea1" rows="3" v-model="result.Content" ></textarea>
                        <!-- <span class="invalid" v-if="!$v.result.Content.required && $v.result.Content.$dirty">Content is required</span> -->
                        <!-- <span class="invalid" v-if="!$v.result.Content.alpha && $v.esult.Content.required && $v.result.Content.$dirty">Invalid input</span> -->
                        <span class="invalid" v-if="(!$v.result.Content.minLength || !$v.result.Content.maxLength) && $v.result.Content.$dirty">Content must be between {{ $v.Content.$params.minLength.min }} and {{ $v.Content.$params.maxLength.max }}</span><br> 
                    </div>
                    
                </div>
                <div class="container-fluid py-3 d-flex justify-content-around" >
                    <div class="px-3"> 
                        <button type="button" class="btn btn-info" :disabled="!result.Name || !result.Title || !result.Thumbnail || !result.Content" @click="submit_blog">Submit</button>
                    </div>
                    
                    <!-- <div>
                        <button type="button" class="btn btn-info" @click="click_get">Show</button>
                    </div> -->
                </div>
            </form>
            <!-- form start -->

            <!-- loader start -->
            <div>
              <div class="lds-ring" v-if="loading"><div></div><div></div><div></div><div></div></div>
            </div>
            <!-- loader end -->


            <h1>Blogs</h1>

            <!-- <section>
                <div class="container-fluid d-flex">
                    <div class="card px-3"  v-for="item in data1" :key="item.id">
                        <div class="card-body" >
                          <h5 class="card-title">{{item.Title}}</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Author : {{item.Name}}</h6>
                          <p class="card-text">{{item.Content}}</p>
                        </div>
                    </div>
                </div>

            </section> -->
            <!-- <div class="row py-3">
                <div class="col-sm-6 col-md-4 col-lg-3" v-for="item in data1" :key="item.id">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">{{item.Title}}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Author : {{item.Name}}</h6>
                      <p class="card-text">{{item.Content}}</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
            </div>     -->

            <!-- Blog card start -->
                <div class="card-deck" >
                    <div class="row p-3">
                        <div class="col-sm-6 col-md-4 col-lg-3 p-3" v-for="item in data1" :key="item.id">
                          <!-- <pre>{{item}}</pre> -->
                            <div class="card h-100">
                              
                              <!-- <div class="d-flex">
                                <div class="bi bi-pencil-square mr-auto p-2"></div>
                                <div class="bi bi-x p-2" @click="click_delete(data1['.key'])"></div>
                              </div> -->
                              <img class="rounded card-img" :src="item.Thumbnail" alt="Card image cap">
                              <div class="card-body">
                                <div>
                                  <h5 class="card-title " >{{item.Title}}</h5>
                                </div>
                                <div>
                                  <p class="card-text"><small class="text-muted">{{item.Name}}</small></p>
                                </div>
                                <div>
                                  <p class="card-text">{{item.Content.substring(0,200)}}</p>
                                </div>
                                <div>
                                  <div class="d-flex  justify-content-between py-3">
                                      <router-link :to="`/Blog/${item.id}`">
                                         <button type="button" class="btn btn-primary btn-lg">more</button>
                                      </router-link> 
                                      <router-link :to="`/Edit/${item.id}`">
                                        <button type="button" class="btn btn-primary btn-lg" >Edit</button>
                                      </router-link>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>

            <!-- Blog card end -->
                
                
          
        </div>
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
// import { required, minLength } from "@vuelidate/validators";
export default {
  name: "Home",
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
        Name: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(20),
          alpha,
        },
        Title: {
          required,
          maxLength: minLength(3),
          maxLength: maxLength(200),
          alpha,
        },
        Content: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(2000),
          alpha,
        },
      },
    };
  },
  created() {
    this.get_blog();
  },
  mounted() {
    // this.edit_blog();
    // this.result = newObj
  },
  // beforeDestroy(){
  //   this.click_post()
  // },
  // mounted() {
  //   this.click_post();
  // },

  methods: {
    async submit_blog() {
      console.log(this.v$);
      this.$v.$touch();
      // this.v$.validate()
      if (!this.v$.$error) {
        alert("success");
      } else {
        alert("not valid");
      }
      if (!this.$v.$invalid) {
        // console.log(`Name : ${this.name} Email: ${this.title}`);
      }
      // let x = this.result.x
      // this.x = x++
      let result = await axios.post(
        "https://vuefirebase-ex1-default-rtdb.asia-southeast1.firebasedatabase.app/data.json",
        {
          Name: this.result.Name,
          Title: this.result.Title,
          Content: this.result.Content,
          Thumbnail: this.result.Thumbnail,
        }
      );
      // this.x = x+1
    },
    async get_blog() {
      this.loading = true;
      let result1 = await axios.get(
        "https://vuefirebase-ex1-default-rtdb.asia-southeast1.firebasedatabase.app/data.json"
      );
      // console.log(result.data)
      this.data1 = result1.data;
      console.log("this.data1", result1.data);

      const newObj = Object.keys(result1.data).map((p) => {
        return { ...result1.data[p], id: p };
      });
      console.log("newObj", newObj);
      console.log("this.data12", newObj);
      this.data1 = newObj;

      // this.uid = result1;
      // console.log(this.uid);
      this.loading = false;
      this.result.Name = "";
      this.result.Title = "";
      this.result.Content = ""; // console.log(result.data)
    },

    // async click_delete() {
    //   let del_data = this.data1.id;
    //   console.log("del", del_data);
    //   let result = await axios.delete(
    //     "https://vuefirebase-ex1-default-rtdb.asia-southeast1.firebasedatabase.app/data.json"
    //   );
    // },

    // async edit_blog() {
    //   var id1 = this.$route.params.id;
    //   console.log(id1);
    //   let result1 = await axios.get(
    //     "https://vuefirebase-ex1-default-rtdb.asia-southeast1.firebasedatabase.app/data/" +
    //       id1 +
    //       ".json"
    //   );
    //   // console.log("mounted",result.data)
    //   this.result = result1.data;
    //   console.log("edit data", this.result);
    // },
    // async click_get(){
    //      let result = await axios.get('https://vuefirebase-ex1-default-rtdb.asia-southeast1.firebasedatabase.app/data.json')
    //         // console.log(result.data)
    //         this.data1 = result.data
    //         console.log(this.data1)
    // },
    // submitForm(){
    //      // Your form submission
    //      this.$refs.anyName.reset(); // This will clear that form
    //   }
  },
};
</script>

<style scoped>
.bi-x {
  font-size: 25px;
  color: red;
}
.valid {
  color: green;
}
.invalid {
  color: rgb(199, 15, 15);
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid rgb(12, 12, 12);
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: rgb(3, 3, 3) transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.card-img {
  width: 100%;
  height: 100%;
  /*object-fit: cover;*/
}
form {
  background-color: #ec4d37;
  max-width:70% ;
  
  margin: 30px auto;
  background: #a9a9a9;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select{
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
 background-color: #efefef;
}
textarea {
  background-color: #efefef;
}
button,.btn {
  background: #ff3b3f;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
.card-body{
  background: #a9a9a9;
}
.header{
  text-align: center
}

</style>