<template>
  <section class="form-dark">
    <mdb-row>
      <mdb-col md="5">
        <mdb-card class="card-image" :style="{'backgroundImage': 'url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)', 'width': '28rem'}">
          <div class="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
            <div class="text-center">
              <h3 class="white-text mb-5 mt-4 font-weight-bold"><strong> USER SIGN</strong> <a class="green-text font-weight-bold"><strong> UP</strong></a></h3>
            </div>
            <mdb-input label="Association ID" type="number"/>
            <mdb-input label="Country" type="text"/>
            <mdb-input label="Name" type="text"/>
            <mdb-input label="User-Group" type="text"/>
            <mdb-input label="User-Role" type="text"/>
            <mdb-input label="Email" type="email"/>
            <mdb-input label="Password" type="password"/>
            <mdb-input class="my-5" type="checkbox" id="defaultCheck17" label="Accept the Terms and Conditions" />
            <mdb-row class="d-flex align-items-center mb-4">
              <div class="text-center mb-3 col-md-12">
                <mdb-btn color="success" rounded type="button" class="btn-block z-depth-1">Sign in</mdb-btn>
              </div>
            </mdb-row>
          </div>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </section>
</template>

<script>
    export default{

    }
</script>