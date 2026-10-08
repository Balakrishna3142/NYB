import DynamicForm from "./DynamicForm";
import formConfig from "./formConfig";

const UserForm = () => {
  return (
    <div>
      <h1>User Registration</h1>

      <DynamicForm config={formConfig} />
    </div>
  );
};

export default UserForm;