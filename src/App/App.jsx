import React, { Fragment, Component } from 'react';
import { v4 as uuid } from 'uuid';

//jsx modules
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

//states
import phoneBookState from './data/phoneBook';

//minimal css
// import styles from './main.module.css';

class App extends Component {
  state = phoneBookState;

  addContact = (event) => {
    event.preventDefault();
    this.setState((state)=>{
      const newContact = [{
        id: uuid(),
        name: event.target.form.contactName.value,
        number: event.target.form.contactNumber.value
      }]
      return {
        contacts: [...state.contacts, ...newContact]
      }
    })
  }
  deleteContact = (event) => {
    const findElement = this.state.contacts.filter(el => el.id === event.target.id);
    const indexOfFindElement = this.state.contacts.indexOf(findElement[0]);
    const newContactArray = [...this.state.contacts];
    newContactArray.splice(indexOfFindElement, 1);
    this.setState((state)=>{
      return {
        contacts: [...newContactArray],
      }
    })
  }
  filterContact = (inputValue) => {
    const filterElement = this.state.contacts.filter(el => el.name.toLowerCase().includes(inputValue.toLowerCase()));
    this.setState((state)=>{
      return {
        filter : [...filterElement]
      }
    })
  }

  render() {
    return (
      <Fragment>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact}/>
        <h2>Contacts</h2>
        <Filter filterContact={this.filterContact} />
        <ContactList data={this.state.filter.length>0 ? this.state.filter : this.state.contacts} deleteContact={this.deleteContact}/>
      </Fragment>
    )
  }
}

export default App


