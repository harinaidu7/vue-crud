<template>
    <div>
        <div class="container-fluid">
            <h1>Hello There</h1>
            <form id="form-group">

                <div>
                    <div class="container-fluid py-3">
                        <input class="form-control" type="text" value="reset"  placeholder="Name.." v-model="result.name" required>
                    </div>
                    <div class="container-fluid py-3">
                        <input class="form-control" type="text" value="reset" placeholder="Title.." v-model="result.title" required >
                    </div>
                    <div class="form-group">
                        <label>Content...</label>
                        <textarea class="form-control" value="reset" id="exampleFormControlTextarea1" rows="3" v-model="result.content" required></textarea>
                    </div>
                    
                </div>
                <div class="container-fluid py-3 d-flex justify-content-around" >
                    <div class="px-3"> 
                        <button type="button"  value="Submit" class="btn btn-info" @click="click_post">Submit</button>
                    </div>
                    
                    <!-- <div>
                        <button type="button" class="btn btn-info" @click="click_get">Show</button>
                    </div> -->
                </div>
            </form>

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
                            <div class="card h-100">
                              <div class="d-flex justify-content-end"><i class="bi bi-x" @click="click_delete(data1['.key'])"></i></div>
                              <img class="rounded" src="../assets/logo.png" alt="Card image cap">
                              <div class="card-body">
                                <h5 class="card-title " >{{item.Title}}</h5>
                                <p class="card-text">{{item.Content.substring(0,200)}}</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      result: {
        name: "",
        title: "",
        content: "",
      },
      data1: [],
      uid:''
    };
  },
  //   mounted() {
  //     this.click_post();
  //   },

  methods: {
    async click_post() {
     
      let result = await axios.post(
        "https://vuefirebase-ex1-default-rtdb.asia-southeast1.firebasedatabase.app/data.json",
        {
          Name: this.result.name,
          Title: this.result.title,
          Content: this.result.content,
          
        }
      );
     
      let result1 = await axios.get(
        "https://vuefirebase-ex1-default-rtdb.asia-southeast1.firebasedatabase.app/data.json"
      );
      // console.log(result.data)
      this.data1 = result1.data;
      console.log(result1.data[id]);
      this.uid =  result1
      console.log(this.uid)
      this.result.name = "",
      this.result.title = "",
      this.result.content = ''
      
      // console.log(result.data)
    },

    async click_delete() {
      let result = await axios.delete(
        "https://vuefirebase-ex1-default-rtdb.asia-southeast1.firebasedatabase.app/data.json" 
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
</style>