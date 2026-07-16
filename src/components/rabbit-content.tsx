import React, {useState} from 'react';
import styled from 'styled-components';
import BasicContentProps from './content-interfaces'
import rabbitImage from '../assets/rabbit.png'


const Image = styled.img`
  width: 10em;
  height: auto;
  padding-top: 1.5em;
  text-align: center;
`;

const RabbitContent = () => {
    return (
        <Image src={rabbitImage}
        />
      )
}

export default RabbitContent
