// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {
    activeFaq: [],
  }

  onClickShowPlus = id => {
    this.setState(prevState => ({
      activeFaq: [...prevState.activeFaq, id],
    }))
  }

  onClickHideMinus = id => {
    this.setState(prevState => ({
      activeFaq: prevState.activeFaq.filter(eachFaq => eachFaq !== id),
    }))
  }

  render() {
    const {activeFaq} = this.state
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <h1 className="Faq-heading">FAQs</h1>
        <ul className="faq-list">
          {faqsList.map(eachFaq => (
            <FaqItem
              faqDetails={eachFaq}
              activeFaq={activeFaq}
              onClickHideMinus={this.onClickHideMinus}
              onClickShowPlus={this.onClickShowPlus}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Faqs
