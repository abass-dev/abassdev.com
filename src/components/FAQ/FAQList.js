import React, { useState } from 'react';
import './FAQList.css'; // Import the CSS for styling

const FAQList = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle FAQ open/close
  };

  const faqs = [
    {
      id: 1,
      question: 'Which operating system do I use?',
      answer:
        'I primarily use WSL, which stands for Windows Subsystem for Linux, with Kali Linux as my operating system. WSL allows me to run a Linux distribution alongside my Windows environment, providing me with the flexibility and tools of Linux while still using Windows as the host operating system.',
    },
    {
      id: 2,
      question: 'What programming language do I mostly used?',
      answer:
        'PHP and JavaScript are the programming languages I use most frequently.',
    },
    {
      id: 3,
      question: 'What is my favorite Web browser?',
      answer:
        'Tor and Chrome are my favorite Web browsers for browsing and development environnement',
    },
  ];

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => (
        <div key={faq.id} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span className="faq-icon">
              {activeIndex === index ? '-' : '+'}
            </span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQList;
