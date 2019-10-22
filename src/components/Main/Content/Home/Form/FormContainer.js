import Form from './Form';
import { inputsChangeActionCreator, submitFormActionCreator } from '../../../../../redux/home-form-reducer';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    homeForm: state.homeForm,
    items: state.homeForm.form.items
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    submitForm: (event) => {
      event.preventDefault();
      dispatch(submitFormActionCreator());
    },
    inputChange: (event) => {
      dispatch(inputsChangeActionCreator(event));
    }
  };
};

const FormContainer = connect(mapStateToProps,mapDispatchToProps)(Form);

export default FormContainer;
