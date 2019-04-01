<template>
  <div class="page-container md-layout-column">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">My Farm Statistics
      </span>

      <div class="md-toolbar-section-end">
        <md-button >Dropdowns</md-button>
      </div>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">MyFarm</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon></md-icon>
          <span class="md-list-item-text">Home</span>
        </md-list-item>

        <md-list-item>
          <md-icon></md-icon>
          <span class="md-list-item-text">Graphs</span>
        </md-list-item>

        <md-list-item>
          <md-icon></md-icon>
          <span class="md-list-item-text">Statistics</span>
        </md-list-item>

        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text">Trash</span>
        </md-list-item>
      </md-list>
    </md-drawer>

    <md-content>
      <b-nav pills right>
        <button class = "btn btn-success" v-b-modal.modal-prevent active> Add Association</button>
      </b-nav>
      

    <b-modal
      id="modal-prevent"
      ref="modal"
      title="Add Association"
      @ok="handleOk"
      @shown="clearName"
    >
      <form @submit.stop.prevent="handleSubmit">
        <b-form-input v-model="name" placeholder="Add Name"></b-form-input>
        <b-form-input id="input" v-model="location" placeholder="Enter Location"></b-form-input>
      </form>
    </b-modal>

    <div class="card">
  <h3 class="card-header text-center font-weight-bold text-uppercase py-4">Associations</h3>
  <div class="card-body">
    <div id="table" class="table-editable">
      <table class="table table-bordered table-responsive-md table-striped text-center">
        <tr>
          <th class="text-center">Name</th>
          <th class="text-center">Location</th>
        </tr>
        <tr>
          <td class="pt-3-half" contenteditable="true"><p v-for="n in names">{{ n }}</p></td>
          <td class="pt-3-half" contenteditable="true"><p v-for="l in locations">{{ l }}</p></td>  
        </tr>
       
      </table>
    </div>
  </div>
</div>


    </md-content>
  </div>
</template>

<script>
import { mdbTableEditable } from 'mdbvue';
  export default {
    name: 'Temporary',
    data: () => ({
      showNavigation: false,
      showSidepanel: false
    }),
    data :() => {
      return {
        name: '',
        names: [],
      }
    },

    methods: {
      clearName() {
        this.name = ''
      },
      handleOk(evt) {
        // Prevent modal from closing
        evt.preventDefault()
        if (!this.name) {
          alert('Please enter your name')
        } else {
          this.handleSubmit()
        }
      },
      handleSubmit() {
        this.names.push(this.name)
        this.clearName()
        this.$nextTick(() => {
          // Wrapped in $nextTick to ensure DOM is rendered before closing
          this.$refs.modal.hide()
        })
      }
    },

    name: 'TableEditablePage',
    components: {
      mdbTableEditable
    },
    data:()=> {
      return {
        columns: [
          {
            label: 'Name',
            field: 'name',
          },
          {
            label: 'Location',
            field: 'location',
          }
        ],
        rows: [
          {
            name: 'Albert',
            location: 'Tanzania'
          },
          {
            name: 'Mutesasira',
            location: 'Uganda'
          }
        ]
      };
    }

  }
</script>

<style lang="scss" scoped>
  .page-container {
    min-height: 300px;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 250px;
    max-width: calc(100vw - 125px);
  }

  .md-content {
    padding: 16px;
  }
</style>