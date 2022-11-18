import { LightningElement, wire } from 'lwc';

// importando referencias dos campos
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';

// importando a função getContacts() da classe ContactController, onde fica tambem
// disponiveis devido ao @AuraEnable.
import getContacts from '@salesforce/apex/ContactController.getContacts';

import { reduceErrors } from 'c/ldsUtils';

// criando um array de objetos onde seus atributos são 'puxados' do import
const COLUMNS = [
    { label: 'First Name', fieldName: FIRSTNAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Last Name', fieldName: LASTNAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Email', fieldName: EMAIL_FIELD.fieldApiName, type: 'text' }
];


export default class ContactList extends LightningElement {

columns = COLUMNS; 
// usado o @wire com a função getContacts o este resultado é armazenado na variável contacts
@wire(getContacts) contacts;


get errors() {
    return (this.contacts.error) ?
        reduceErrors(this.contacts.error) : [];
}

}