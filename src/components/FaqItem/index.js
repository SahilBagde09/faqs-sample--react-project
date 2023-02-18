// Write your code here.
import './index.css'

const FaqItems = props => {
  const {faqDetails, activeFaq, onClickHideMinus, onClickShowPlus} = props
  const {id, questionText, answerText} = faqDetails
  const plusIcon = () => {
    onClickShowPlus(id)
  }
  const minusIcon = () => {
    onClickHideMinus(id)
  }
  return (
    <li className="faq-list-item">
      <div className="question-container">
        <h1 className="question">{questionText}</h1>
        <img
          src={
            activeFaq.includes(id)
              ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
          }
          alt={activeFaq.includes(id) ? 'minus' : 'plus'}
          className="action-button"
          onClick={activeFaq.includes(id) ? minusIcon : plusIcon}
        />
      </div>
      {activeFaq.includes(id) ? (
        <>
          <hr className="hr-rule" />
          <p className="faq-ans">{answerText}</p>{' '}
        </>
      ) : (
        ''
      )}
    </li>
  )
}

export default FaqItems
