import React from 'react';

import { ContactText, DeleteButton, ContactItem } from './ContactItem.styled';

function ContItem({ name, number, id, onDeleteContact }) {
  return (
    <ContactItem>
      <ContactText>
        {name}:{number}
      </ContactText>
      <DeleteButton type="button" onClick={onDeleteContact}>
        Delete
      </DeleteButton>
    </ContactItem>
  );
}

export default ContItem;
