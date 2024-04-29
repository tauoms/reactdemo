const Form = (props) => {
  return (
    <div>
      <h2>Form</h2>
      <form>
        <div>
          <label htmlFor="firstNameInput">First name: </label>
          <input
            type="text"
            name="fname"
            id="firstNameInput"
            onChange={props.changeFormHandler}
          />
        </div>
        <div>
          <label htmlFor="lastNameInput">Last name: </label>
          <input
            type="text"
            name="lname"
            id="lastNameInput"
            onChange={props.changeFormHandler}
          />
        </div>
        <div>
          <label htmlFor="emailInput">E-mail: </label>
          <input
            type="text"
            name="email"
            id="emailInput"
            onChange={props.changeFormHandler}
          />
        </div>
        <div>
          <label htmlFor="phoneInput">Phone: </label>
          <input
            type="tel"
            name="tel"
            id="phoneInput"
            onChange={props.changeFormHandler}
          />
        </div>
        <div>
          <label htmlFor="messageInput">Message: </label>
          <textarea
            name="message"
            id="messageInput"
            onChange={props.changeFormHandler}
          />
        </div>

        {/* <input type="submit" value="Submit" onSubmit={props.changeHandler} /> */}
      </form>
    </div>
  );
};

export default Form;
