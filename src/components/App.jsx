import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';



const Container = styled.div`
  width: 400px;
  text-align: left;
  margin: auto;
  padding: 24px;
  `

const Tittle = styled.h1`
font-size: 3  2px;
font-weight: 700;
`
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  text-align: center;
  /* margin: auto; */
  padding: 24px;
   border: 1px solid black; 
`
const Button = styled.button`
  width: 120px;
  margin-top: 15px;
  margin-bottom: 15px;
  font-weight: 600;
  border-radius: 4px;
  border-color: #716f6f;`

const Label = styled.label`
width: 100%;
text-align: left;
   margin-top: 15px;
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 16px;
`
const Input = styled.input`
  font-size: 14px;
  margin-bottom: 15px;
`
const Contacts = styled.ul`
  font-size: 24px;
  font-weight: 700;

`
const ContactItem = styled.li`

  margin-top: 10px;
  margin-bottom: 10px;
`


export class App extends Component {
  
  ContactInputId = nanoid();
  NumberInputId = nanoid();
  ContactItemId = nanoid();
  ContactFilterId = nanoid();

  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: '',
  }
 

handleChange = event => {
  const { name, value } = event.target;
  this.setState({
     
    [name]: value,
      
  })
};
  
  handleSubmit = evt => {
     const{ name, number } = this.state;
    evt.preventDefault();
    this.setState(prevState => ({
      contacts: [{name: name, number: number },...prevState.contacts],
    }));
    
    
    this.reset()
  };
  
  handleSubmitSearch = evt => {
    evt.preventDefault();
    console.log(this.state.filter)
  }
   
   
    reset = () => {
      this.setState({
        name: '',
        number: '',
      })
  }
  
  

  render() {
    const { contacts, name, number, filter } = this.state;
    const ContactsByFilter = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    
    
    return (
    <Container>
        <Tittle>Phonebook</Tittle>
        
<FormWrapper onSubmit={this.handleSubmit}>
  <Label htmlFor={ this.ContactInputId }>Name</Label>
      <Input
      id={this.ContactInputId }      
      type="text"
      name="name"
      value={name}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      onChange={this.handleChange}
          />
  <Label htmlFor={ this.NumberInputId }>Number</Label>        
          <Input
            id={this.NumberInputId}
  type="tel"
            name="number"
            value={number}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
/>
  <Button type='submit'>Add contact</Button>
          
        </FormWrapper>
        <Tittle>Contacts</Tittle>
        <FormWrapper onSubmit={this.handleSubmitSearch}>
          <Label htmlFor={this.ContactFilterId}>Find contacts by name</Label>
          <Input
            id={this.ContactFilterId}
            name="filter"
            value={filter}
            onChange={this.handleChange}
          />
          <Button type='submit'>Search</Button>
        </FormWrapper>
        <Contacts>
          {ContactsByFilter.map(contact => {
            return (<ContactItem key={contact.id}>{contact.name}:   {contact.number}</ContactItem>)
         })} 
          
        </Contacts>

    </Container>
      );
    };
  
};
