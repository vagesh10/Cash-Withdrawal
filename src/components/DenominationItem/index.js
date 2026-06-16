import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updatebalance} = props
  const {value} = denominationDetails

  const onChangeMoney = () => {
    updatebalance(value)
  }

  return (
    <li className="money-container">
      <button className="button" type="button" onClick={onChangeMoney}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
