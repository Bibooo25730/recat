import React, { Component } from 'react'
import "./style.scss"
export default class index extends Component {
    handleBack = () => {
     window.history.back()
}
  render() {
    return (
        <div className='head'>
        <div className='left'><svg className="icon" onClick={this.handleBack} aria-hidden="true">
                   <use xlinkHref="#icon-fanhui"></use>
            </svg><span>{this.props.title }</span><span></span> </div>
      </div>
    )
  }
}
