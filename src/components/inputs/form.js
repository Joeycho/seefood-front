import MobxReactForm from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";

const plugins = {
  dvr: dvr(validatorjs)
};

const fields = [
  {
    name: "name",
    label: "Email",
    placeholder: "Insert Email",
    rules: "required|email|string|between:5,25",
    value: "s.jobs@apple.com"
  },
  {
    name: "price",
    label: "Email",
    placeholder: "Insert Email",
    rules: "required|email|string|between:5,25",
    value: "s.jobs@apple.com"
  },
  {
    name: "due_date",
    label: "Email",
    placeholder: "Insert Email",
    rules: "required|email|string|between:5,25",
    value: "s.jobs@apple.com"
  },
  {
    name: "comment",
    label: "Email",
    placeholder: "Insert Email",
    rules: "required|email|string|between:5,25",
    value: "s.jobs@apple.com"
  }
];

const hooks = {
  onSuccess(form) {
    alert("Form is valid! Send the request here.");
    // get field values
    console.log("Form Values!", form.values());
  },
  onError(form) {
    alert("Form has errors!");
    // get all form errors
    console.log("All form errors", form.errors());
  }
};

export default new MobxReactForm({ fields }, { plugins, hooks });
