import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';

export const Faq = () => {
      const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere. "
    }
  ];

  return (
    <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className='mx-auto sm:w-[334px] md:w-[686px] lg:w-[896px] xl:w-[846px] my-[40px] flex flex-col gap-[28px]'>
        <div className=" bg-white">
      <h2 className="pb-[28px] text-center text-[#4F46E5] font-poppins font-semibold leading-[33px] tracking-[0.4px] sm:text-[27px]">Frequently asked questions</h2>
      <div className='flex flex-col gap-[28px]'>
      {faqs.map((faq, index) => (
        <div key={index} className="bg-[#FAF8FF] p-[24px] rounded-md  flex flex-col gap-[13px]">
          <button
            className="flex justify-between items-start gap-[40px] w-full text-left text-gray-800 font-medium"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className={`leading-[28px] tracking-[0px] sm:text-[20px] md:text-[22px]  font-medium ${openIndex === index? "text-[#4F46E5]": "text-black"} font-inter`}>{faq.question}</span>
            <span className={`pt-2 ${openIndex === index? "text-[#4F46E5]": "text-black"} w-[14px] h-[14px]`}>
              {openIndex === index ? <FaMinus/>: <FaPlus />}
            </span>
          </button> 

          {openIndex === index && faq.answer && (
            <p className="leading-[30px] tracking-[0px] text-[#6F6C90] sm:text-[16px]
             md:text-[18px]   font-normal font-inter">{faq.answer}</p>
            )}
          </div>
      ))}
    </div>
    </div>
    </div>
  )
}
