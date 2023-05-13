import './index.css'

import {Component} from 'react'

class CoinToss extends Component {
  state = {isHead: true, isTotal: 0, totalHeads: 0, totalTails: 0}

  onClickToisButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        isHead: true,
        isTotal: prevState.isTotal + 1,
        totalHeads: prevState.totalHeads + 1,
      }))
    } else {
      this.setState(prevState => ({
        isHead: false,
        isTotal: prevState.isTotal + 1,
        totalTails: prevState.totalTails + 1,
      }))
    }
  }

  render() {
    const {isHead, isTotal, totalHeads, totalTails} = this.state
    const imgUrl = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="app-container">
        <div className="bg-container">
          <div>
            <h1 className="heading">Coin Toss Game</h1>
            <p className="paragraph">Heads (or) Tails</p>
            <div className="image-container">
              <img src={imgUrl} alt="toss result" className="image" />

              <button
                type="button"
                className="button"
                onClick={this.onClickToisButton}
              >
                Toss Coin
              </button>
            </div>
            <div className="count-container">
              <p className="paragraph">Total: {isTotal}</p>
              <p className="paragraph">Heads: {totalHeads}</p>
              <p className="paragraph">Tails: {totalTails}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
