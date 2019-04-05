
<template>
  <section class="form-dark">
    <mdb-row>
      <mdb-col md="5">
        <mdb-card class="card-image" :style="{'backgroundImage': 'url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)', 'width': '28rem'}">
          <div class="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
            <div class="text-center">
              <h3 class="white-text mb-5 mt-4 font-weight-bold"><strong> SIGN</strong> <a class="green-text font-weight-bold"><strong> IN</strong></a></h3>
            </div>
            <mdb-input label="Your email" icon="envelope" type="email"/>
            <mdb-input label="Your password" icon="lock" type="password"/>

            <mdb-row class="d-flex align-items-center mb-4">
              <div class="text-center mb-3 col-md-12">
                <mdb-btn color="success"  v-on:click="login()" rounded type="button" class="btn-block z-depth-1">LOGIN</mdb-btn>
              </div>
            </mdb-row>

            <mdb-col md="12">
              <p class="font-small white-text d-flex justify-content-end">Have an account? <a href="#" class="green-text ml-1 font-weight-bold"><router-link to = "/login"> Log in</router-link></a></p>
            </mdb-col>
          </div>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </section>
</template>

<script>
  export default {
      name: 'login',
      data() {
          return {
              input: {
                  email: "",
                  password: ""
              }
          }
      },
      methods: {
          login() {
              if(this.input.email != "" && this.input.password != "") {
                  if(this.input.email == this.$parent.mockAccount.email && this.input.password == this.$parent.mockAccount.password) {
                      this.$emit("authenticated", true);
                      this.$router.replace({ name: "home" });
                  } else {
                      console.log("The Email Address and / or password is incorrect");
                  }
              } else {
                  console.log("An Email Address and password must be present");
              }
          }
      }
  }
</script>
