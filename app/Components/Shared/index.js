import styled from 'styled-components';


export const Row = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
`

export const RowCentered = Row.extend`
  justify-content: center;
  align-content: center;
`

export const Column = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`
export const Section = Column.extend`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 50px 10%;
  border-radius: 100% 0 100% 0/ 100px 0 200px 0;
  ${props => props.topcolor && `border-top: 8px solid ${props.topcolor}`};
  ${props => props.bottomcolor && `border-bottom: 12px solid ${props.bottomcolor}`};
`
export const SectionTitle = styled.h1`
  position: relative;
  font-family: ${props => props.theme.titleFont};
  font-size: 3em;
  margin: 1em 0 1em; 
  ${'' /* ${props => props.image} */};
  &:after {
    content: '';
    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 50px;
    display: inline-block;
    width: 150px;
    height: 100px;
    box-shadow: ${props => props.image && '2px 2px 2px #555'};
    border-radius: 2px 50%/ 20% 20px;
  }
  `
export const SectionBody = styled.div`
  margin-bottom: 100px; 
`
export const Paragraph = styled.p`
  font-family: ${props => props.theme.textFont};
  font-size: 1.15em;
  font-weight: 300;
  line-height: 1.5em;
  max-width: 48em;
  text-align: justify;
  margin-top: 2em;
  &:first-of-type {
    margin-top: 0;
  }
`
