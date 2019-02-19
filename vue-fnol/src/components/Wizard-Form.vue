<template>
  <div class="container" style="margin-top:50px;">
    <div class="row">
      <div class="col-xs-8 col-xs-offset-2">
        <div class="panel panel-default">
          <form-wizard
            @on-complete="onComplete"
            stepSize="xs"
            color="#06123b"
            error-color="#a94442"
            title="File a Claim"
            subtitle=" "
          >
            <tab-content title="Start" icon="ti-user" :before-change="validateFirstTab">
              <vue-form-generator
                :model="model"
                :schema="firstTabSchema"
                :options="formOptions"
                ref="firstTabForm"
              ></vue-form-generator>
            </tab-content>
            <tab-content title="Policy" icon="ti-settings" :before-change="validateSecondTab">
              <vue-form-generator
                :model="model"
                :schema="secondTabSchema"
                :options="formOptions"
                ref="secondTabForm"
              ></vue-form-generator>
            </tab-content>
            <tab-content title="Details" icon="ti-settings" :before-change="validateThirdTab">
              <vue-form-generator
                :model="model"
                :schema="thirdTabSchema"
                :options="formOptions"
                ref="thirdTabForm"
              ></vue-form-generator>
            </tab-content>
            <tab-content title="Contact" icon="ti-settings" :before-change="validateForthTab">
              <vue-form-generator
                :model="model"
                :schema="forthTabSchema"
                :options="formOptions"
                ref="forthTabForm"
              ></vue-form-generator>
            </tab-content>
            <tab-content title="Last step" icon="ti-check">
              <h4>Your json is ready!</h4>
              <div class="panel-body">
                <pre v-if="model" v-html="model"></pre>
              </div>
            </tab-content>
          </form-wizard>
        </div>
      </div>
    </div>
  </div>
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
      model: {
        firstName: "",
        lastName: "",
        email: "",
        streetName: "",
        streetNumber: "",
        city: "",
        country: ""
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
            required: false,
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
            type: "dateTimePicker",
            label: "When did it occur?",
            model: "dateInjured",
            dateTimePickerOptions: {
              format: "YYYY-MM-DD HH:mm A"
            },
            required: false,
            styleClasses: "col-xs-6"
          },
          {
            type: "input",
            inputType: "text",
            label: "What is the injured employee's Social Security Number?",
            model: "EMYESSN",
            required: false,
            validator: VueFormGenerator.validators.Social,
            styleClasses: "col-xs-12"
          },
          {
            type: "input",
            inputType: "text",
            label: "Email",
            model: "email",
            required: false,
            validator: VueFormGenerator.validators.email,
            styleClasses: "col-xs-6"
          },
          {
            type: "masked",
            label: "Phone",
            model: "phone",
            required: false,
            mask: "(999) 999-9999",
            styleClasses: "col-xs-6"
          },
          {
            type: "select",
            label: "Notification by:",
            model: "deliveryType",
            required: false,
            validator: VueFormGenerator.validators.string,
            values: ["Email", "Phone"],
            styleClasses: "col-xs-6"
          },
          {
            groups: [
              {
                legend: "User Details",
                fields: [
                  {
                    type: "input",
                    inputType: "text",
                    label: "Name",
                    model: "name"
                  },
                  {
                    type: "input",
                    inputType: "number",
                    id: "current_age",
                    label: "Age",
                    model: "age"
                  }
                ]
              }
            ]
          }
        ]
      },
      secondTabSchema: {
        fields: [
          {
            label: "Policy #",
            model: "policyNumber",
            help: "",
            placeholder: "",
            inputType: "text",
            type: "input",
            styleClasses: "col-xs-6"
          },
          {
            label: "State",
            model: "policyState",
            help: "",
            placeholder: "",
            fieldOptions: {
              "-- Select One --": ""
            },
            type: "select",
            values: [
              {
                id: "id-1",
                name: "California",
                value: "CA"
              },
              {
                id: "id-2",
                name: "Nevada",
                value: "NV"
              },
              {
                id: "id-3",
                name: "Arizona",
                value: "AZ"
              },
              {
                id: "id-4",
                name: "Texas",
                value: "TX"
              }
            ],
            styleClasses: "col-xs-6"
          }
        ]
      },
      thirdTabSchema: {
        fields: [
          {
            label:
              "Date of Injusry or onset of Illness (mm/dd/yyyy hh:mm AM/PM)",
            model: "dateInjured",
            help: "",
            placeholder: "",
            type: "dateTimePicker",
            dateTimePickerOptions: {
              format: "YYYY-MM-DD hh:mm A"
            },
            readonly: true,
            disabled: true
          },
          {
            label: "Time Employee Began Work (hh:mm AM/PM)",
            model: "time_employee_began_work_hhmm_ampm_1550510213640",
            help: "",
            placeholder: "",
            dateTimePickerOptions: {
              format: "hh:mm A"
            },
            type: "dateTimePicker"
          },
          {
            label: "If Employee died, Date of Death:",
            model: "if_employee_died_date_of_death_1550511246446",
            help: "",
            placeholder: "",
            dateTimePickerOptions: {
              format: "YYYY-MM-DD"
            },
            type: "dateTimePicker"
          },
          {
            label:
              "Unable to work for at least one full day after date of injury?",
            model:
              "unable_to_work_for_at_least_one_full_day_after_date_of_injury_1550511284062",
            help: "",
            placeholder: "",
            fieldOptions: {
              noneSelectedText: ""
            },
            type: "select",
            values: [
              {
                id: "id-1",
                name: "Yes",
                value: "yes_1550511280542"
              },
              {
                id: "id-2",
                name: "No",
                value: "no_1550511284062"
              }
            ]
          },
          {
            label: "Date Last Worked (mm/dd/yyyy)",
            model: "date_last_worked_mmddyyyy_1550511307771",
            help: "",
            placeholder: "",
            dateTimePickerOptions: {
              format: "YYYY-MM-DD"
            },
            type: "dateTimePicker"
          },
          {
            label: "Date Returned To Work: (mm/dd/yyyy)",
            model: "date_returned_to_work_mmddyyyy_1550511428028",
            help: "",
            placeholder: "",
            dateTimePickerOptions: {
              format: "YYYY-MM-DD"
            },
            type: "dateTimePicker"
          },
          {
            label: "Still Off Work?:",
            model: "still_off_work_1550511459655",
            help: "",
            placeholder: "",
            fieldOptions: {
              noneSelectedText: ""
            },
            type: "select",
            values: [
              {
                id: "id-1",
                name: "Yes",
                value: "yes_1550511456607"
              },
              {
                id: "id-2",
                name: "No",
                value: "no_1550511459655"
              }
            ]
          },
          {
            label: "Paid Full Wages, For Day Of Injury, Or Last Day Worked:",
            model:
              "paid_full_wages_for_day_of_injury_or_last_day_worked_1550511484594",
            help: "",
            placeholder: "",
            fieldOptions: {
              noneSelectedText: ""
            },
            type: "select",
            values: [
              {
                id: "id-1",
                name: "Yes",
                value: "yes_1550511480998"
              },
              {
                id: "id-2",
                name: "No",
                value: "no_1550511484594"
              }
            ]
          },
          {
            label: "Salary being continued?   ",
            model: "salary_being_continued__1550511506699",
            help: "",
            placeholder: "",
            fieldOptions: {
              noneSelectedText: ""
            },
            type: "select",
            values: [
              {
                id: "id-1",
                name: "Yes",
                value: "yes_1550511503914"
              },
              {
                id: "id-2",
                name: "No",
                value: "no_1550511506698"
              }
            ]
          },
          {
            label:
              "Date of Employer's Knowledge/Notice of Injury: (mm/dd/yyyy)",
            model:
              "date_of_employers_knowledgenotice_of_injury_mmddyyyy_1550511537792",
            help: "",
            placeholder: "",
            dateTimePickerOptions: {
              format: "YYYY-MM-DD"
            },
            type: "dateTimePicker"
          },
          {
            label: "Date Employee was provided Claim form: (mm/dd/yyyy)",
            model:
              "date_employee_was_provided_claim_form_mmddyyyy_1550511553558",
            help: "",
            placeholder: "",
            dateTimePickerOptions: {
              format: "YYYY-MM-DD"
            },
            type: "dateTimePicker"
          },
          {
            label: "Specific Injury/Illness:",
            model: "specific_injuryillness_1550511572523",
            help: "",
            placeholder: "",
            fieldOptions: {
              noneSelectedText: ""
            },
            type: "select",
            values: [
              {
                id: "id-1",
                name: "Yes",
                value: "yes_1550517824499"
              },
              {
                id: "id-2",
                name: "No",
                value: "no_1550517827603"
              }
            ]
          },
          {
            label: "Part of Body Affected:",
            model: "part_of_body_affected_1550517725115",
            help: "",
            placeholder: "",
            fieldOptions: {
              noneSelectedText: ""
            },
            type: "select",
            values: [
              {
                id: "id-1",
                name: "test",
                value: "test_1550517725114"
              }
            ]
          },
          {
            label: "Medical Diagnosis (If available):",
            model: "medical_diagnosis_if_available_1550517745031",
            help: "",
            placeholder: "",
            fieldOptions: {
              inputType: "text"
            },
            type: "input"
          },
          {
            label:
              "Location where Event or Exposure Occurred: ((Number,Street,City,Zip)",
            model:
              "location_where_event_or_exposure_occurred_numberstreetcityzip_1550517799855",
            help: "",
            placeholder: "",
            fieldOptions: {
              max: 500,
              rows: 4
            },
            type: "textArea",
            hint: "Max 500 characters"
          },
          {
            label: "County:",
            model: "county_1550517810446",
            help: "",
            placeholder: "",
            inputType: "text",
            type: "input"
          },
          {
            label: "On Employer's Premises?:",
            model: "on_employers_premises_1550517827603",
            help: "",
            placeholder: "",
            fieldOptions: {
              noneSelectedText: ""
            },
            type: "select",
            values: [
              {
                id: "id-1",
                name: "Yes",
                value: "yes_1550517824499"
              },
              {
                id: "id-2",
                name: "No",
                value: "no_1550517827603"
              }
            ]
          },
          {
            label: "Department where Event Occurred:",
            model: "department_where_event_occurred_1550517843273",
            help: "",
            placeholder: "",
            inputType: "text",
            type: "input"
          },
          {
            label: "Other Workers Injured/Ill in this event?:",
            model: "other_workers_injuredill_in_this_event_1550517870091",
            help: "",
            placeholder: "",
            fieldOptions: {
              noneSelectedText: ""
            },
            type: "select",
            values: [
              {
                id: "id-1",
                name: "Yes",
                value: "yes_1550517866914"
              },
              {
                id: "id-2",
                name: "No",
                value: "no_1550517870091"
              }
            ]
          },
          {
            label:
              "Equipment, Materials and Chemicals the Employee was using when the event occurred:",
            model:
              "equipment_materials_and_chemicals_the_employee_was_using_when_the_event_occurred_1550517890449",
            help: "",
            placeholder: "",
            inputType: "text",
            type: "input"
          },
          {
            label:
              "Specific Activity the Employee was performing when the event or exposure occurred:   ",
            model:
              "specific_activity_the_employee_was_performing_when_the_event_or_exposure_occurred__1550517900152",
            help: "",
            placeholder: "",
            fieldOptions: {
              max: 500,
              rows: 4
            },
            type: "textArea",
            hint: "Max 500 characters"
          },
          {
            label: "How Injury/Illness Occurred; Describe Sequence of Events:",
            model:
              "how_injuryillness_occurred_describe_sequence_of_events_1550517916649",
            help: "",
            placeholder: "",
            fieldOptions: {
              max: 500,
              rows: 4
            },
            type: "textArea",
            hint: "Max 500 characters"
          }
        ]
      },
      forthTabSchema: {
        fields: [
          {
            label: "First Name:",
            model: "first_name_1550508491891",
            help: "",
            placeholder: "",
            inputType: "text",
            type: "input",
            styleClasses: "col-xs-5"
          },
          {
            label: "Last Name:",
            model: "last_name_1550508609636",
            help: "",
            placeholder: "",
            inputType: "text",
            type: "input",
            styleClasses: "col-xs-5"
          },
          {
            label: "Middle Initial:",
            model: "middle_initial_1550508483898",
            help: "",
            placeholder: "",
            inputType: "text",
            type: "input",
            styleClasses: "col-xs-2"
          },
          {
            label: "Social Security #:",
            model: "social_security__1550508509924",
            help: "",
            placeholder: "",
            fieldOptions: {
              inputType: "text"
            },
            type: "input"
          },
          {
            label: "Birth Date",
            model: "emp_bithdate",
            help: "",
            placeholder: "",
            dateTimePickerOptions: {
              format: "YYYY-MM-DD"
            },
            type: "dateTimePicker"
          },
          {
            label: "Mailing Address:",
            model: "mailing_address_1550509289778",
            help: "",
            placeholder: "",
            inputType: "text",
            type: "input",
            styleClasses: "col-xs-12"
          },
          {
            label: "City",
            model: "city_1550509294411",
            help: "",
            placeholder: "",
            inputType: "text",
            type: "input",
            styleClasses: "col-xs-4"
          },
          {
            label: "State:",
            model: "state_1550509369903",
            help: "",
            placeholder: "",
            fieldOptions: {
              noneSelectedText: ""
            },
            type: "select",
            values: [
              {
                id: "id-1",
                name: "California",
                value: "california_1550509365288"
              },
              {
                id: "id-2",
                name: "Navada",
                value: "navada_1550509369903"
              }
            ],
            styleClasses: "col-xs-4"
          },
          {
            label: "Zip",
            model: "zip_1550509312757",
            help: "",
            placeholder: "",
            inputType: "text",
            type: "input",
            styleClasses: "col-xs-4"
          },

          {
            label: "Gender",
            model: "gender_1550508551038",
            help: "",
            placeholder: "",
            fieldOptions: {
              value: "value",
              name: "name"
            },
            type: "radios",
            values: [
              {
                id: "id-1",
                name: "Male",
                value: "male_1550508539510"
              },
              {
                id: "id-2",
                name: "Female",
                value: "female_1550508551038"
              }
            ]
          },
          {
            label: "Occupation",
            model: "occupation_1550508570713",
            help: "",
            placeholder: "",
            inputType: "text",
            type: "input"
          },
          {
            label: "Date of Hire",
            model: "date_of_hire_1550508634884",
            help: "",
            placeholder: "",
            dateTimePickerOptions: {
              format: "YYYY-MM-DD"
            },
            type: "dateTimePicker"
          },
          {
            label: "Employee Usually Works (Hours)",
            model: "employee_usually_works_hours_1550508674688",
            help: "",
            placeholder: "",
            inputType: "text",
            type: "input"
          },
          {
            label: "Days per week:",
            model: "days_per_week_1550508725499",
            help: "",
            placeholder: "",
            inputType: "text",
            type: "input"
          },
          {
            label: "Total Weekly:",
            model: "total_weekly_1550508753928",
            help: "",
            placeholder: "",
            inputType: "text",
            type: "input"
          },
          {
            label: "Employee Status:",
            model: "employee_status_1550508801022",
            help: "",
            placeholder: "",
            fieldOptions: {
              value: "value",
              name: "name"
            },
            type: "radios",
            values: [
              {
                id: "id-1",
                name: "Regular Full-Time",
                value: "regular_full-time_1550508778741"
              },
              {
                id: "id-2",
                name: "Part-Time",
                value: "part-time_1550508785054"
              },
              {
                id: "id-3",
                name: "Temporary",
                value: "temporary_1550508796815"
              },
              {
                id: "id-4",
                name: "Seasonal",
                value: "seasonal_1550508801022"
              }
            ]
          },
          {
            label: "Under what Class Code were wages assigned?",
            model: "under_what_class_code_were_wages_assigned_1550508847829",
            help: "",
            placeholder: "",
            fieldOptions: {
              noneSelectedText: ""
            },
            type: "select",
            values: [
              {
                id: "id-1",
                name: "9079",
                value: "9079_1550508841798"
              },
              {
                id: "id-2",
                name: "8017",
                value: "8017_1550508847828"
              }
            ]
          },
          {
            label: "Gross Wage Salary ($)",
            model: "gross_wage_salary__1550508876762",
            help: "",
            placeholder: "",
            inputType: "text",
            type: "input"
          },
          {
            label: "Wages Per:",
            model: "wages_per_1550508952041",
            help: "",
            placeholder: "",
            fieldOptions: {
              noneSelectedText: ""
            },
            type: "select",
            values: [
              {
                id: "id-1",
                name: "Year",
                value: "year_1550508938257"
              },
              {
                id: "id-2",
                name: "Month",
                value: "month_1550508941321"
              },
              {
                id: "id-3",
                name: "Week",
                value: "week_1550508945185"
              },
              {
                id: "id-4",
                name: "Day",
                value: "day_1550508948285"
              },
              {
                id: "id-5",
                name: "Hour",
                value: "hour_1550508952041"
              }
            ]
          },
          {
            label:
              "Other Wages not reported? (eg. Tips,meals, lodging, overtime bones, etc.)",
            model:
              "other_wages_not_reported_eg_tipsmeals_lodging_overtime_bones_etc_1550509019384",
            help: "",
            placeholder: "",
            fieldOptions: {
              value: "value",
              name: "name"
            },
            type: "radios",
            values: [
              {
                id: "id-1",
                name: "Yes",
                value: "yes_1550508986342"
              },
              {
                id: "id-2",
                name: "No",
                value: "no_1550508989093"
              }
            ]
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
<style>
body {
  font-size: 10px;
}
.vue-form-generator .form-control {
  font-size: 12px;
}
pre {
  overflow: auto;
}
pre .string {
  color: #885800;
}
pre .number {
  color: blue;
}
pre .boolean {
  color: magenta;
}
pre .null {
  color: red;
}
pre .key {
  color: green;
}

.panel {
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  border-color: #ddd;
}
</style>