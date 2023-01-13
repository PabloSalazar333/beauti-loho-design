import React from 'react';
import { Contact } from '../../models/contact';
import ContactComponent from '../pure/forms/contact';


const ContactListComponet = () => {

    const defaultContac = new Contact('Default name','Default last name','default@email.com',false)

    return (
        <div>
            <div>
                <h1>
                    Your Contak: 
                </h1>
                <ContactComponent contacto={defaultContac}></ContactComponent>
            </div>
        </div>
    );
};



export default ContactListComponet;
