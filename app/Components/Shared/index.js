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