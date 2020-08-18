import React from 'react'

export default function FriendForm(props) {
  // THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!!!
  const { values, update, submit } = props

  const onChange = evt => {
    // 🔥 STEP 5 - IMPLEMENT the change handler for our inputs and dropdown
    // a) pull the name of the input from the event object
    // b) pull the value of the input from the event object
    // c) use the `update` callback coming in through props
    const { name, value } = evt.target
    update(name, value)
  }

  const onSubmit = evt => {
    // 🔥 STEP 6 - IMPLEMENT the submit handler and attach it to the JSX
    // a) don't allow the browser to reload!
    // c) use the `submit` callback coming in through props
    evt.preventDefault()
    submit()
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add a Friend</h2>
        <button disabled={!values.username || !values.email || !values.role ? true : false}>submit</button>      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label>Username:&nbsp;
          {/* 🔥 STEP 7 - Make an input of type `text` for username.
            Controlled inputs need `value` and `onChange` props.
            Inputs render what they're told - their current value comes from app state.
            At each keystroke, a change handler fires to change app state. */}
            <input
              value={values.username}
              onChange={onChange}
              name='username'
              placeholder='type username'
              maxLength='20'
              type='text'>
            </input>
        </label>

        <label>Email:&nbsp;
          {/* 🔥 STEP 8 - Make an input of type `email` or `text` for email. */}
          <input
              value={values.email}
              onChange={onChange}
              name='email'
              placeholder='type email'
              maxLength='20'
              type='email'>
            </input>
        </label>

        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        <label>Role:&nbsp;
          <select onChange={onChange} value={values.role} name='role'>
            <option value="">-- Select a Role</option>
            <option value="student">Student</option>
            <option value="team_lead">Team Lead</option>
            <option value="alumni">Alumni</option>
          </select>
          {/* 🔥 STEP 9 - Make dropdown for role. Dropdowns look very different
            but they can often use the same change handler text inputs use */}
        </label>
      </div>
    </form>
  )
}
