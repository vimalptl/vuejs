<template>
  <div class="panel-body">
        <form-wizard @on-complete="onComplete"
                     scope="props"
                     color="blue"
                     error-color="#a94442"
                     >
            <tab-content title="Start"
                         icon="ti-user" :before-change="validateFirstTab">
               <vue-form-generator :model="model" 
                                   :schema="firstTabSchema"
                                   :options="formOptions"
                                   ref="firstTabForm"
                                   >
                                     
               </vue-form-generator>
            </tab-content>
            <tab-content title="Policy"
                         icon="ti-settings" :before-change="validateSecondTab">
             <vue-form-generator :model="model" 
                                   :schema="secondTabSchema"
                                   :options="formOptions"
                                   ref="secondTabForm"
                                   >                                
               </vue-form-generator>
            </tab-content>
            <tab-content title="Details"
                         icon="ti-settings" :before-change="validateThirdTab">
             <vue-form-generator :model="model" 
                                   :schema="thirdTabSchema"
                                   :options="formOptions"
                                   ref="thirdTabForm"
                                   >                                
               </vue-form-generator>
            </tab-content>
            <tab-content title="Contact"
                         icon="ti-settings" :before-change="validateForthTab">
             <vue-form-generator :model="model" 
                                   :schema="forthTabSchema"
                                   :options="formOptions"
                                   ref="forthTabForm"
                                   >                                
               </vue-form-generator>                              
            </tab-content>
            <tab-content title="Last step"
                         icon="ti-check">
              <h4>Your json is ready!</h4>
              <div class="panel-body">
                <pre v-if="model" v-html="model"></pre>
              </div>
            </tab-content>
        </form-wizard>

  </div>
</template>
<script>
import Vue from 'vue'
import VueFormGenerator from 'vue-form-generator'
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-generator/dist/vfg.css'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

Vue.use(VueFormGenerator)
Vue.use(VueFormWizard)

export default {
  name : 'testform', 
  data () {
    return {
      model:{
    firstName:'',
    lastName:'',
    email:'',
    streetName:'',
    streetNumber:'',
    city:'',
    country:''
   },
   props: {
    stepSize: {
        type: String,
        default: 'sm',
        validator: (value) => {
        let acceptedValues = ['xs', 'sm', 'md', 'lg']
        return acceptedValues.indexOf(value) !== -1
        }
    }
  },
   formOptions: {
    validationErrorClass: "has-error",
    validationSuccessClass: "has-success",
    validateAfterChanged: true
   },
   firstTabSchema:{
     fields:[{
        type: "input",
				inputType: "text",
        label: "First name",
        model: "firstName",
        required:true,
        validator:VueFormGenerator.validators.string,
        styleClasses:'col-xs-6'
     },
     {
        type: "input",
				inputType: "text",
        label: "Last name",
        model: "lastName",
        required:true,
        validator:VueFormGenerator.validators.string,
        styleClasses:'col-xs-6'
     },
      {
        type: "input",
				inputType: "text",
        label: "Email",
        model: "email",
        required:true,
        validator:VueFormGenerator.validators.email,
        styleClasses:'col-xs-12'
     }
     ]
   },
   secondTabSchema:{
     fields:[
     {
        type: "input",
				inputType: "text",
        label: "Street name",
        model: "streetName",
        required:true,
        validator:VueFormGenerator.validators.string,
        styleClasses:'col-xs-9'
     },
      {
        type: "input",
				inputType: "text",
        label: "Street number",
        model: "streetNumber",
        required:true,
        validator:VueFormGenerator.validators.string,
        styleClasses:'col-xs-3'
      },
      {
        type: "input",
				inputType: "text",
        label: "City",
        model: "city",
        required:true,
        validator:VueFormGenerator.validators.string,
        styleClasses:'col-xs-6'
      },
      {
        type: "select",
        label: "Country",
        model: "country",
        required:true,
        validator:VueFormGenerator.validators.string,
        values:['United Kingdom','Romania','Germany'],
        styleClasses:'col-xs-6'
      },
     ]
   },
      thirdTabSchema:{
     fields:[
     {
        type: "input",
				inputType: "text",
        label: "Street name",
        model: "streetName",
        required:true,
        validator:VueFormGenerator.validators.string,
        styleClasses:'col-xs-9'
     }
     ]
   },
      forthTabSchema:{
     fields:[
     {
        type: "input",
				inputType: "text",
        label: "Street name",
        model: "streetName",
        required:true,
        validator:VueFormGenerator.validators.string,
        styleClasses:'col-xs-9'
     }
     ]
   }
 }},
   methods: {
    onComplete: function(){
      alert('Yay. Done!');
   },
   validateFirstTab: function(){
     return this.$refs.firstTabForm.validate();
   },
   validateSecondTab: function(){
     return this.$refs.secondTabForm.validate();
   },
   validateThirdTab: function(){
     return this.$refs.thirdTabForm.validate();
   },
   validateForthTab: function(){
     return this.$refs.forthTabForm.validate();
   },

}
  }
</script>
<style>
 .wizard-icon-circle {
    width: 50px;
    height: 50px;
}
pre {
	overflow: auto;
}
	pre .string { color: #885800; }
	pre .number { color: blue; }
	pre .boolean { color: magenta; }
	pre .null { color: red; }
	pre .key { color: green; }  
</style>