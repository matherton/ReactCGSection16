import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enterdeLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameHasError,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    //nameInputRef.current.value = ""; Not ideal don't manipulate the DOM
    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const inputNameClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const inputEmailClasses = enteredEmailHasError
    ? "form-control invalid"
    : "form-control";

  const inputLastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputNameClasses}>
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" value={enteredName} />
        </div>
        <div className={inputLastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" value={enterdeLastName} />
        </div>
      </div>
      <div className={inputEmailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" value={enteredEmail} />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
