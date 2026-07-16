import React, {useState} from 'react';
import styled from 'styled-components';
import BasicContentProps from '../interfaces/basic-content-interface'

const Title = styled.h1`
  font-size: 4em;
  text-align: center;
  color: #dddddd;
  padding-bottom: 1.5em;
  padding-top: 1em;
`;

const Paragraph = styled.p`
  font-size: 1emm;
  text-align justify;
  color: #f0b5b5;
  padding-left: 10em;
  padding-right: 10em;
  padding-bottom:2em;
`;

const Image = styled.img`
  width: 50em;
  height: auto;
  padding-top: 1.5em;
`;

const BasicContent : React.FC<BasicContentProps> = ({titleContent, firstParagraphContent, secondParagraphContent, imagePath}) => {
    return (
        <>
          <section id="title-area">
            <div id="title">
            <Title>{titleContent}</Title>
            </div>
          </section>

          <section id="content-area">
            <Paragraph id="first-paragraph">{firstParagraphContent}</Paragraph>
            <Paragraph id="second-paragraph">{secondParagraphContent}</Paragraph>
            <Image src={imagePath}/>
          </section>
        </> 
      )
}

export default BasicContent
