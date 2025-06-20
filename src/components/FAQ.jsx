import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'What is your design process?',
      answer: 'My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.'
    },
    {
      question: 'What tools and software do you use for UX design?',
      answer: 'IQuisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae, accumsan auctor mi..'
    },
    {
      question: 'How do you measure the success of your designs?',
      answer: 'Suspendisse massa risus, pretium id interdum in, dictum sit amet ante. Fusce vulputate purus sed tempus feugiat.'
    }
  ]

  return (
    <section className="section" style={{background: "#010208"}}>
      <div className="container" >
        <h2 className="section-title"><img src="/src/assets/star.svg" alt="star icon" /> Frequently asked questions</h2>
        
        <div style={{ maxWidth: '800px' }}>
          {faqs.map((faq, index) => (
            <div key={index} style={{
              borderBottom: '1px solid #333',
              padding: '1.5rem 0'
            }}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                {faq.question}
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {openIndex === index && (
                <div style={{ marginTop: '1rem', color: '#888', lineHeight: '1.6' }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
