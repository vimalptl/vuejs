<template>
  <section>
    <button class="button" @click="activeTab = 1">Set Music</button>
    <b-tabs v-model="activeTab">
      <b-tab-item label="Start">
        <vue-form-generator
          :model="model"
          :schema="firstTabSchema"
          :options="formOptions"
          ref="firstTabForm"
        ></vue-form-generator>
      </b-tab-item>

      <b-tab-item label="Policy">
        <vue-form-generator
          :model="model"
          :schema="secondTabSchema"
          :options="formOptions"
          ref="secondTabForm"
        ></vue-form-generator>
      </b-tab-item>

      <b-tab-item label="Details">
        <vue-form-generator
          :model="model"
          :schema="thirdTabSchema"
          :options="formOptions"
          ref="thirdTabForm"
        ></vue-form-generator>
      </b-tab-item>
      <b-tab-item label="Contact">
        <vue-form-generator
          :model="model"
          :schema="forthTabSchema"
          :options="formOptions"
          ref="forthTabForm"
        ></vue-form-generator>
      </b-tab-item>
      <b-tab-item label="Finish">
        <h4>Your json is ready!</h4>
        <div class="panel-body">
          <pre v-if="model" v-html="model"></pre>
        </div>
      </b-tab-item>
    </b-tabs>
  </section>
</template>
<script>
import Vue from "vue";
import VueFormGenerator from "vue-form-generator";
import VueFormWizard from "vue-form-wizard";
import "vue-form-generator/dist/vfg.css";
import "vue-form-wizard/dist/vue-form-wizard.min.css";

Vue.use(VueFormGenerator);
Vue.use(VueFormWizard);

export default {
  name: "wizard-form",
  data() {
    return {
      model: {},
      props: {
        stepSize: {
          type: String,
          default: "sm",
          validator: value => {
            let acceptedValues = ["xs", "sm", "md", "lg"];
            return acceptedValues.indexOf(value) !== -1;
          }
        }
      },
      formOptions: {
        validationErrorClass: "has-error",
        validationSuccessClass: "has-success",
        validateAfterChanged: true
      },
      firstTabSchema: {
        fields: [
          {
            type: "select",
            label: "Who are you?",
            model: "reportType",
            required: true,
            validator: VueFormGenerator.validators.string,
            values: [
              "Insured",
              "Producer",
              "Injured Employee",
              "Attorney",
              "Other"
            ],
            styleClasses: "col-xs-6"
          },
          {
            type: "input",
            inputType: "text",
            label: "When did it occur?",
            model: "dateInjured",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-xs-6"
          },
          {
            type: "input",
            inputType: "text",
            label: "What is the injured employee's Social Security Number?",
            model: "EMYESSN",
            required: true,
            validator: VueFormGenerator.validators.Social,
            styleClasses: "col-xs-6"
          },
          {
            type: "input",
            inputType: "text",
            label: "Email",
            model: "email",
            required: true,
            validator: VueFormGenerator.validators.email,
            styleClasses: "col-xs-12"
          },
          {
            type: "input",
            inputType: "text",
            label: "Phone",
            model: "phone",
            required: true,
            validator: VueFormGenerator.validators.phone,
            styleClasses: "col-xs-12"
          },
          {
            type: "select",
            label: "Notification by:",
            model: "deliveryType",
            required: true,
            validator: VueFormGenerator.validators.string,
            values: ["Email", "Phone"],
            styleClasses: "col-xs-6"
          }
        ]
      },
      secondTabSchema: {
        fields: [
          {
            type: "input",
            inputType: "text",
            label: "Street name",
            model: "streetName",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-xs-9"
          },
          {
            type: "input",
            inputType: "text",
            label: "Street number",
            model: "streetNumber",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-xs-3"
          },
          {
            type: "input",
            inputType: "text",
            label: "City",
            model: "city",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-xs-6"
          },
          {
            type: "select",
            label: "Country",
            model: "country",
            required: true,
            validator: VueFormGenerator.validators.string,
            values: ["United Kingdom", "Romania", "Germany"],
            styleClasses: "col-xs-6"
          }
        ]
      },
      thirdTabSchema: {
        fields: [
          {
            type: "input",
            inputType: "text",
            label: "Street name",
            model: "streetName",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-xs-9"
          }
        ]
      },
      forthTabSchema: {
        fields: [
          {
            type: "input",
            inputType: "text",
            label: "Street name",
            model: "streetName",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-xs-9"
          }
        ]
      }
    };
  },
  methods: {
    onComplete: function() {
      alert("Yay. Done!");
    },
    validateFirstTab: function() {
      return this.$refs.firstTabForm.validate();
    },
    validateSecondTab: function() {
      return this.$refs.secondTabForm.validate();
    },
    validateThirdTab: function() {
      return this.$refs.thirdTabForm.validate();
    },
    validateForthTab: function() {
      return this.$refs.forthTabForm.validate();
    }
  }
};
</script>