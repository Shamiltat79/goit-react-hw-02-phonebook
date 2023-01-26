import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';







const Container = styled.div`
  width: 400px;
  text-align: center;
  margin: auto;
  padding: 24px;
  `

const Tittle = styled.h1`
font-size: 18px;
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
`
const Label = styled.label`
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

export class App extends Component {
  
  ContactInputId = nanoid();
  NumberInputId = nanoid();
  ContactItemId = nanoid();

  state = { contacts: [],
    name: '',
    number: '',
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
     
      [name]: value,
      
    })
  }
  
  handleSubmit = evt => {
    evt.preventDefault();
    console.log(this.state.contacts);
    this.setState(prevState => {
       this.state.contacts.push({ name: this.state.name, number: this.state.number })
    });
    
     this.reset()
   };
   
   
    reset = () => {
      this.setState({
        name: '',
        number: '',
      })
    }
  

  render() {
    const { name, contacts, number } = this.state;
    
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
        <Contacts>
          {contacts.map(contact => {
            return (<li key={this.ContactItemId}>{contact.name}:{contact.number}</li>)
         })} 
          
        </Contacts>

    </Container>
      );
    };
  
};
