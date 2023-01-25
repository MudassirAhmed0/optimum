import React from 'react'
import Faq from '../utils/Faq'
const faqData =[
  {
      id:1,
      question:"How do deposits work?",
      answer:"Deposits are automatically eligible for weekly prizes until withdrawn. As described in Terms and Conditions, mail in submissions can also be made within the first two weeks of a Governance period. Individuals submitting a mail-in entry will be treated as if depositing 10 ALGO."
  },
  {
      id:2,
      question:"What fees are associated with the platform?",
      answer:"Deposits are automatically eligible for weekly prizes until withdrawn. As described in Terms and Conditions, mail in submissions can also be made within the first two weeks of a Governance period. Individuals submitting a mail-in entry will be treated as if depositing 10 ALGO."
  },
  {
      id:3,
      question:"What are the risks?",
      answer:"Deposits are automatically eligible for weekly prizes until withdrawn. As described in Terms and Conditions, mail in submissions can also be made within the first two weeks of a Governance period. Individuals submitting a mail-in entry will be treated as if depositing 10 ALGO."
  },
  {
      id:4,
      question:"Are withdrawals limited in the same way as deposits?",
      answer:"Deposits are automatically eligible for weekly prizes until withdrawn. As described in Terms and Conditions, mail in submissions can also be made within the first two weeks of a Governance period. Individuals submitting a mail-in entry will be treated as if depositing 10 ALGO."
  },
  {
      id:5,
      question:"What are the odds of winning?",
      answer:"Deposits are automatically eligible for weekly prizes until withdrawn. As described in Terms and Conditions, mail in submissions can also be made within the first two weeks of a Governance period. Individuals submitting a mail-in entry will be treated as if depositing 10 ALGO."
  },
] 

const Faqs = () => {

  const handleClick =(e)=>{
const selectedDropdown =  e.target.parentElement.querySelector('.main')
    document.querySelectorAll(".main").forEach((dropdown)=>{
      if(selectedDropdown == dropdown){
        dropdown.classList.toggle("active")
        
      }else{
        dropdown.classList.remove("active")

      }
    })

  }
  return (
    <section className="question">
    <div className="Container w-[332px] md:w-[87.65625vw] mx-[auto] pt-[5vw]">
      <div>
        <h2 className="text-[32px] colus leading-[38.4px] md:text-[2.5vw] text-[#F5F5F5] font-[400] md:w-[45.625vw]
text-center mx-[auto] 
md:leading-[3vw]
">do you have more questions? check the answers</h2>
      </div>
      <div className="flex flex-col pt-[32px] pb-[40px] gap-y-[16px] md:gap-y-[1.25vw] md:pt-[2.5vw] md:pb-[6.25vw]">
      
{faqData.map((curEl)=>(
  <Faq key={curEl.id} {...curEl} handleClick={handleClick}/>
  
))}

      
      </div>
    </div>
  </section>
  )
}

export default Faqs