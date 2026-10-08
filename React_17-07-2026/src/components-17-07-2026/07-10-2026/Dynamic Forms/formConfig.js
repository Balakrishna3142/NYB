const formConfig = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "Enter first name",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter email",
    required: true,
  },
  {
    name: "age",
    label: "Age",
    type: "number",
    placeholder: "Enter age",
    required: true,
  },
  {
    name: "gender",
    label: "Gender",
    type: "select",
    required: true,
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
      { label: "Other", value: "other" },
    ],
  },
  {
    name: "skills",
    label: "Skills",
    type: "checkbox",
    options: [
      { label: "React", value: "react" },
      { label: "JavaScript", value: "javascript" },
      { label: "Node.js", value: "node" },
    ],
  },
];

export default formConfig;