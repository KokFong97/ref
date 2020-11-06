<template>
  <div class="about">
    <div class="py-5 text-center">
      <h2>Submissions</h2>
    </div>
    <div class="row ml-5 mr-5 p-5">
            <table id="eventTable" class="table">
               <thead class="thead-dark">
                  <tr>
                     <th scope="col">#</th>
                     <th scope="col">Name</th>
                     <th scope="col">Email</th>
                     <th scope="col">Address</th>
                     <th scope="col">Country</th>
                     <th scope="col">Postal Code</th>
                     <th scope="col">Profession</th>
                     <th scope="col">Action</th>
                  </tr>
               </thead>
               <tbody>
                  <!-- Write in the template Vue code here to render the table rows -->
                  <tr v-for="(data,index) in formStore.formData" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{data.firstname}} {{data.lastname}}</td>
                    <td>{{data.email}}</td>
                    <td>{{data.address}} {{data.address2}}</td>
                    <td>{{data.country}}</td>
                    <td>{{data.postal_code}}</td>
                    <td>{{data.profession}}</td>
                    <td><button type="button" class="btn btn-primary" @click="deleteMethod(index)">Delete</button></td>
                    
                    
                </tr>
               </tbody>
            </table>
         </div>
  </div>
</template>

<script>
import formStore from "../stores/formStore"

export default {
    data() {
        return {
            formStore : formStore.data
        };
    },
    methods:{
      deleteMethod(index){
        formStore.methods.deleteForm(index)
      }
    }
};
</script>

<style scoped>



</style>
