import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/forms/contact';


const ContactListComponet = () => {

    const defaultContact = new Contact('Default name', 'Default last name', 'default@email.com', false);

    return (
        <div>
            <div>
                <h1>
                    Your Contact:
                </h1>
                <ContactComponent contacto={defaultContact}></ContactComponent>
            </div>
        </div>
    );
};



export default ContactListComponet;
