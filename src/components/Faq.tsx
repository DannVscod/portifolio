import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/content'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  return <div className="faq-list">{faqs.map((faq, index) => {
    const open = openIndex === index
    const panelId = `faq-panel-${index}`
    return <div className={`faq-item ${open ? 'faq-item--open' : ''}`} key={faq.question}>
      <button type="button" aria-expanded={open} aria-controls={panelId} onClick={() => setOpenIndex(open ? null : index)}>
        <span>{faq.question}</span><ChevronDown aria-hidden="true" />
      </button>
      <div className="faq-answer" id={panelId} role="region" aria-hidden={!open}><div><p>{faq.answer}</p></div></div>
    </div>
  })}</div>
}
