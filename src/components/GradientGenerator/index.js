import {Component} from 'react'

import {
  BgContainer,
  TabContainer,
  ColorSelectionContainer,
  ColorSelector,
  GenerateButton,
  ColorInput,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    direction: 'top',
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    gradientDirection: 'top',
  }

  onChangeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  onClickGenerate = () => {
    const {color1, color2, direction} = this.state
    this.setState({
      firstColor: color1,
      secondColor: color2,
      gradientDirection: direction,
    })
  }

  onClickDirection = directionItem => {
    this.setState({direction: directionItem.value})
  }

  renderGradientDirectionItems = () => {
    const {direction} = this.state
    return (
      <TabContainer>
        {gradientDirectionsList.map(each => (
          <GradientDirectionItem
            key={each.directionId}
            onClickDirection={this.onClickDirection}
            activeStatus={each.value === direction}
            each={each}
          >
            {each.displayText}
          </GradientDirectionItem>
        ))}
      </TabContainer>
    )
  }

  render() {
    const {
      color1,
      color2,
      firstColor,
      secondColor,
      gradientDirection,
    } = this.state
    return (
      <BgContainer
        data-testid="gradientGenerator"
        firstColor={firstColor}
        secondColor={secondColor}
        gradientDirection={gradientDirection}
      >
        <h1>Generate a CSS Color Gradient</h1>
        <p>Choose Direction</p>
        {this.renderGradientDirectionItems()}
        <p>Pick the colors</p>
        <ColorSelectionContainer>
          <ColorSelector>
            <p>{firstColor}</p>
            <ColorInput
              value={color1}
              onChange={this.onChangeColor1}
              type="color"
              id="color1"
            />
          </ColorSelector>
          <ColorSelector>
            <p>{secondColor}</p>
            <ColorInput
              value={color2}
              onChange={this.onChangeColor2}
              type="color"
              id="color2"
            />
          </ColorSelector>
        </ColorSelectionContainer>
        <GenerateButton onClick={this.onClickGenerate} type="button">
          Generate
        </GenerateButton>
      </BgContainer>
    )
  }
}

export default GradientGenerator
