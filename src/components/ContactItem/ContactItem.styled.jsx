import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  padding: 5px 10px;
  width: 300px;
`;

export const ContactText = styled.span`
  display: inline-flex;
  margin: 0px 0px;
  color: #191970;
  font-size: large;
  font-weight: 600;
  justify-items: left;
`;

export const DeleteButton = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
  border-radius: 2px;
  color: #191970;
  background-color: #9370db;
  cursor: pointer;
  border-radius: 2px;
  border: 0;
`;
