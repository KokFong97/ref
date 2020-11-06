<template>
 
  <div class="container" id="app">
         <div class="py-5 text-center">
            <h2>Event registration</h2>
         </div>
         <form  class="needs-validation" novalidate @submit="checkForm">
            <div class="form-row">
               <div class="col-md-6 order-md-2 mb-4">
                  <h4 class="d-flex justify-content-between align-items-center mb-3">
                     <span class="text-muted">Location Map</span>
                  </h4>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22564.048603881693!2d103.78184408620263!3d1.2958369709660242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19a0ba4217fb%3A0x5213c91433e6d4e9!2sSingapore%20Institute%20of%20Technology!5e0!3m2!1sen!2ssg!4v1598702991039!5m2!1sen!2ssg" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                  <h5>Singapore Institute of Technology</h5>
                  <p>10 Dover Dr, Singapore 138683</p>
               </div>
               <div class="col-md-6 order-md-1">
                  <h4 class="mb-3">Personal Details</h4>
                  <div class="form-row">
                     <div class="col-md-6 mb-3">
                        <label for="firstName">First name</label>
                        <input type="text" class="form-control" placeholder=""  required v-model="form_data.firstname">
                        <div class="invalid-feedback">
                           Valid first name is required.
                        </div>
                     </div>
                     <div class="col-md-6 mb-3">
                        <label for="lastName">Last name</label>
                        <input type="text" class="form-control" id="lastName" placeholder=""  required v-model="form_data.lastname">
                        <div class="invalid-feedback">
                           Valid last name is required.
                        </div>
                     </div>
                  </div>
                  <div class="mb-3">
                     <label for="email">Email</label>
                     <input type="email" class="form-control" id="email" placeholder="you@example.com" required v-model="form_data.email">
                     <div class="invalid-feedback">
                        Please enter a valid email address.
                     </div>
                  </div>
                  <div class="mb-3">
                     <label for="address1">Address</label>
                     <input type="text" class="form-control" id="address" placeholder="1234 Main St" required v-model="form_data.address">
                     <div class="invalid-feedback">
                        Please enter your address.
                     </div>
                  </div>
                  <div class="mb-3">
                     <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
                     <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" v-model="form_data.address2">
                  </div>
                  <div class="row">
                     <div class="col-md-5 mb-4">
                        <label for="country">Country</label>
                        <select class="custom-select d-block w-100" id="country" required v-model="form_data.country"> 
                           <option value="">Choose...</option>
                           <option>Singapore</option>
                        </select>
                        <div class="invalid-feedback">
                           Please select a valid country.
                        </div>
                     </div>
                     <div class="col-md-5 mb-4">
                        <label for="zip">Postal Code</label>
                        <input type="text" class="form-control" id="zip" placeholder="" required v-model="form_data.postal_code">
                        <div class="invalid-feedback">
                           Zip code required.
                        </div>
                     </div>
                  </div>
                  <div class="mb-3">
                     <label for="profession">Profession</label>
                     <select class="custom-select d-block w-100" id="profession" required v-model="form_data.profession">
                        <option value="">Choose...</option>
                        <option>Frontend Engineer</option>
                        <option>Underpaid Lab TA</option>
                        <option>Other</option>
                     </select>
                     <div class="invalid-feedback">
                        Please select valid profession.
                     </div>
                  </div>
                  <hr class="mb-4">
                  <button class="btn btn-primary btn-lg btn-block" type="submit" >Submit details</button>
                  <div class="mb-4"></div>
               </div>
            </div>
         </form>

      </div>
</template>

<script>
import formStore from "../stores/formStore"

export default {
  data() {
     return{
        form_data : {
               firstname : '',
               lastname : '',
               email : '',
               address : '',
               address2 : '',
               country : '',
               postal_code : '',
               profession : ''
         },
         unbind_data : {
               firstname : '',
               lastname : '',
               email : '',
               address : '',
               address2 : '',
               country : '',
               postal_code : '',
               profession : ''
         },
         formStore : formStore.data

     }
     
    },
  
  methods: {
    submitForm: function() {
      console.log("Submit has been run!");
      formStore.methods.addForm(this.form_data)
      alert("Added new entry. Updated table at submission Page")
      this.$router.push('about')
   }
  ,
   checkForm(event) {
         //console.log(event);
         event.preventDefault();
         event.target.classList.add('was-validated');
         console.log(event.target[0].checkValidity());
         //console.log(event.target.length);
         var boo = true;
         for(var i = 0; i < event.target.length - 1; i++){
            if(event.target[i].checkValidity() == false){
               boo = false;
            }
         }

         if(boo == false){
            console.log("there is a unchecked");
         }
         else{
            console.log("everything is checked");
            this.submitForm();
            
         }
         
         
         
         
      }
       
  
}
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
