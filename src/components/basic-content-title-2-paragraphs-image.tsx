import React, {useState} from 'react';
import styled from 'styled-components';

interface BasicContentProps {
    firstParagraphContent: string;
    secondParagraphContent: string;
    imagePath: string;
    titleContent: string
}

const paddingBottom = "1.5em"
const paddingTop = "0.5em"
const paddingLeft = "4em"
const paddingRight = "4em"
const imageWidth = "5em"

const Title = styled.h1`
  font-size: 4em;
  text-align: center;
  color: #dddddd;
  padding-bottom: ${paddingBottom};
  padding-top: ${paddingTop};
`;

const Paragraph = styled.p`
  text-align: justify;
  color: #f0b5b5;
  padding-left: ${paddingLeft};
  padding-right: ${paddingRight};
  padding-bottom: ${paddingBottom};
`;

const Image = styled.img`
  width: 50em;
  padding-top: ${paddingTop};
`;

const BasicContentTitle2ParagrqaphsImage : React.FC<BasicContentProps> = ({titleContent, firstParagraphContent, secondParagraphContent, imagePath}) => {
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

export default BasicContentTitle2ParagrqaphsImage
