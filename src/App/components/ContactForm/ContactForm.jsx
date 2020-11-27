import React from 'react';

function ContactForm({addContact}) {
  return (
    <form>
      <label htmlFor="contactName">Name</label>
      <input type="text" name="contactName" id="contactName"/>
      <label htmlFor="contactNumber">Number</label>
      <input type="text" name="contactNumber" id="contactNumber"/>
      <button type='submit' onClick={addContact}>Add contact</button>
    </form>
  )

}

export default ContactForm