// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  background-image: ${props => {
    const {firstColor, secondColor, gradientDirection} = props
    return `linear-gradient(to ${gradientDirection}, ${firstColor}, ${secondColor})`
  }};
  color: #ffffff;
  text-align: center;
  padding: 30px;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TabContainer = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ColorSelectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ColorSelector = styled.div`
  margin: 10px;
`
export const GenerateButton = styled.button`
  font-family: 'roboto';
  border: 0;
  background-color: #00c9b7;
  color: #181818;
  padding: 15px;
  border-radius: 10px;
  font-size: 20px;
`
export const ColorInput = styled.input`
  border: 0;
  background-color: transparent;
  height: 30px;
  width: 50px;
  outline: #f0f0f0;
`
