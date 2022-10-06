<template>
    <div>
        <div class="container-fluid">
            <h1>Hello There</h1>
            <form id="form-group">

                <div>
                    <div class="container-fluid py-3">
                        <input class="form-control" type="text" value="reset"  placeholder="Name.." v-model="result.name" required>
                        <span class="invalid" v-if="!$v.result.name.required && $v.result.name.$dirty">Name is required</span>
                        <span class="invalid" v-if="!$v.result.name.alpha && $v.result.name.required && $v.result.name.$dirty">Invalid input</span>
                        <!-- <span class="invalid" v-if="(!$v.result.name.minLength || !$v.result.name.maxLength) && $v.result.name.$dirty">Name must be between {{ $v.name.$params.minLength.min }} and {{ $v.name.$params.maxLength.max }}</span><br> -->
                    </div>
                    <div class="container-fluid py-3">
                        <input class="form-control" type="text" value="reset" placeholder="Title.." v-model="result.title" required >
                        <span class="invalid" v-if="!$v.result.title.required && $v.result.title.$dirty">Title is required</span>
                        <span class="invalid" v-if="!$v.result.title.alpha && $v.result.title.required && $v.result.title.$dirty">Invalid input</span>
                        <!-- <span class="invalid" v-if="(!$v.result.title.minLength || !$v.result.title.maxLength) && $v.result.title.$dirty">Title must be between {{ $v.name.$params.minLength.min }} and {{ $v.name.$params.maxLength.max }}</span><br> -->
                    </div>
                    <div class="container-fluid py-3">
                      <input class="form-control" type="text" value="reset" placeholder="Thumbnail.." v-model="result.thumbnail" required>
                    </div>
                    <div class="form-group">
                        <label>Content...</label>
                        <textarea class="form-control" value="reset" id="exampleFormControlTextarea1" rows="3" v-model="result.content" required></textarea>
                        <span class="invalid" v-if="!$v.result.content.required && $v.result.content.$dirty">Content is required</span>
                        <span class="invalid" v-if="!$v.result.content.alpha && $v.result.content.required && $v.result.content.$dirty">Invalid input</span>
                        <!-- <span class="invalid" v-if="(!$v.result.name.minLength || !$v.result.name.maxLength) && $v.result.name.$dirty">Content must be between {{ $v.name.$params.minLength.min }} and {{ $v.name.$params.maxLength.max }}</span><br> -->
                    </div>
                    
                </div>
                <div class="container-fluid py-3 d-flex justify-content-around" >
                    <div class="px-3"> 
                        <button type="button" class="btn btn-info" :disabled="!result.name || !result.title || !result.thumbnail || !result.content" @click="click_post">Submit</button>
                    </div>
                    
                    <!-- <div>
                        <button type="button" class="btn btn-info" @click="click_get">Show</button>
                    </div> -->
                </div>
            </form>

            <div>
              <div class="lds-ring" v-if="loading"><div></div><div></div><div></div><div></div></div>
            </div>

            <h1>Results</h1>

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

            
                <div class="card-deck" >
                    <div class="row p-3">
                        <div class="col-sm-6 col-md-4 col-lg-3 p-3" v-for="item in data1" :key="item.id">
                          <!-- <pre>{{item}}</pre> -->
                            <div class="card h-100">
                              <!-- <div class="d-flex">
                                <div class="bi bi-pencil-square mr-auto p-2"></div>
                                <div class="bi bi-x p-2" @click="click_delete(data1['.key'])"></div>
                              </div> -->
                              <div class="d-flex  justify-content-between">
                                <div><i class="bi bi-pencil-square"></i></div>
                                <div><i class="bi bi-x d-flex " @click="click_delete()"></i></div>
                              </div>
                              <img class="rounded" :src="item.Thumbnail" alt="Card image cap">
                              <div class="card-body">
                                <h5 class="card-title " >{{item.Title}}</h5>
                                <!-- <p class="card-text">{{item.Content.substring(0,200)}}</p> -->
                                <p class="card-text"><small class="text-muted">{{item.Content}}</small></p>
                                <router-link :to="`/Blog/${item.id}`">
                                  <button type="button" class="btn btn-info">more</button>
                                </router-link> 
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            

            <!-- <section>
                <div class="container-fluid d-flex">
                    <div class="row text-center">
                        <div class="col-sm-6 col-md-4 col-lg-3 p-3" v-for="item in data" :key="item.id">
                            <div class="card d-flex" >
                               
                                <div class="card-content">
                                    <div class="title px-3 pt-3">
                                        <h5 class="card-title">{{item.Title}}</h5>
                                    </div>
                                    <div class="d-flex flex-row" >
        
                                        <div class="release-date d-flex flex-column text-left p-3 " >
                                            <div>Release date</div>
                                            <div class="date">{{item.Name}} 
                                               -->
                                              <!-- <b-modal id="modal-1" title="BootstrapVue">
                                                <p  class="my-4">{{this.data.overview}}</p>
                                              </b-modal> -->
                                            <!-- </div>
                                            
                                        </div>
                                        <div class="rating p-3">
                                          <div class="rating" >Rating</div>
                                          <div class="d-flex">
                                           
                                            <div class="rating-num">{{item.Content}}</div> 
                                          </div>
                                        </div>
                                      </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> -->
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
        name: "",
        title: "",
        content: "",
        thumbnail: "",
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
  created() {
    this.click_get();
  },
  // beforeDestroy(){
  //   this.click_post()
  // },
  //   mounted() {
  //     this.click_post();
  //   },

  methods: {
    async click_post() {
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
          Name: this.result.name,
          Title: this.result.title,
          Content: this.result.content,
          Thumbnail: this.result.thumbnail,
        }
      );
      // this.x = x+1
    },
    async click_get() {
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
      this.result.name = "";
      this.result.title = "";
      this.result.content = ""; // console.log(result.data)
      this.loading = false;
    },

    async click_delete() {
      let id = this.data1.id;
      console.log("delet",id)
      let result = await axios.delete(
        "https://vuefirebase-ex1-default-rtdb.asia-southeast1.firebasedatabase.app/data/id.json"
      );
    },
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
</style>