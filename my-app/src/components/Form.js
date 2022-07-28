import React from 'react'

function Form(props) {

const {change, submit, errors} = props;
const {firstname, lastname, email, password, tos} = props.values;

const onSubmit = (e) => {
    e.preventDefault();
    submit();
}

const onChange = (e) => {
  const {name, value, type, checked} = e.target;
  const newVal = type === 'checkbox' ? checked : value;
  change(name, newVal);   
}

  return (
    <div>
        <p>{errors.firstname}</p>
        <p>{errors.lastname}</p>
        <p>{errors.email}</p>
        <p>{errors.password}</p>
        <p>{errors.tos}</p>
        <form onSubmit={onSubmit}>
          <label > Enter Your First Name
            <input type="text" name="firstname" value={firstname} onChange={onChange} />
          </label>
            
          <label> Enter Your Last Name
            <input type="text" name="lastname" value={lastname} onChange={onChange} />
          </label> 

          <label> Enter Your Email
            <input type="email" name="email" value={email} onChange={onChange} />
          </label>

          <lable>Enter Your Password
            <input type="password" name="password" value={password} onChange={onChange} />
          </lable>

          <lable>Terms of Service:
            <input type="checkbox" name="tos" checked={tos} onChange={onChange}/>
          </lable>

          <input type="submit" value="Create a friend!" />
        </form>
    </div>
  )
}

export default Form