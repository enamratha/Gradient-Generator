// Style your elements here
import styled from 'styled-components'

export const DirectionTab = styled.button`
  background-color: #ffffff;
  opacity: ${props => (props.activeStatus ? 1 : 0.5)};
  height: 30px;
  width: 70px;
  border: 0;
  border-radius: 3px;
  margin-right: 5px;
`
