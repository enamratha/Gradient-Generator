// Write your code here
import {DirectionTab} from './styledComponents'

const GradientDirectionItem = props => {
  const {children, onClickDirection, each, activeStatus} = props
  const onClickButton = () => {
    onClickDirection(each)
  }
  return (
    <li>
      <DirectionTab
        type="button"
        onClick={onClickButton}
        activeStatus={activeStatus}
      >
        {children}
      </DirectionTab>
    </li>
  )
}

export default GradientDirectionItem
