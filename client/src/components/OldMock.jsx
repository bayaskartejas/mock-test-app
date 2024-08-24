import React from 'react'

function OldMock() {
  return (
    <div className='w-full mt-3 brder border-red-600'>
    <div className='flex'>
      <div onClick={()=>{
        setOptionClicked(true)
        if(question.a === 1){
          document.getElementById(index + "A").style.backgroundColor = "#00B386"
          document.getElementById(index + "A").style.color = "#ffffff"
        }
        else{
          document.getElementById(index + "A").style.backgroundColor = "#EF5350"
          document.getElementById(index + "A").style.color = "#ffffff"
          if(question.a === 2){
            document.getElementById(index + "B").style.backgroundColor = "#00B386"
            document.getElementById(index + "B").style.color = "#ffffff"
          }
          else if(question.a === 3){
            document.getElementById(index + "C").style.backgroundColor = "#00B386"
            document.getElementById(index + "C").style.color = "#ffffff"
          }
          else if(question.a === 4){
            document.getElementById(index + "D").style.backgroundColor = "#00B386"
            document.getElementById(index + "D").style.color = "#ffffff"
          }
        }
      }} id={index + "A"} className='w-full border-2 rounded-3xl mx-2 my-2 sm:h-12 h-10 flex justify-center items-center hover:bg-slate-100 cursor-pointer'>
        {question[1]}
      </div>
      <div onClick={()=>{
        setOptionClicked(true)
        if(question.a === 2){
          document.getElementById(index + "B").style.backgroundColor = "#00B386"
          document.getElementById(index + "B").style.color = "#ffffff"
        }
        else{
          document.getElementById(index + "B").style.backgroundColor = "#EF5350"
          document.getElementById(index + "B").style.color = "#ffffff"
          if(question.a === 1){
            document.getElementById(index + "A").style.backgroundColor = "#00B386"
            document.getElementById(index + "A").style.color = "#ffffff"
          }
          else if(question.a === 3){
            document.getElementById(index + "C").style.backgroundColor = "#00B386"
            document.getElementById(index + "C").style.color = "#ffffff"
          }
          else if(question.a === 4){
            document.getElementById(index + "D").style.backgroundColor = "#00B386"
            document.getElementById(index + "D").style.color = "#ffffff"
          }
        }
      }} id={index + "B"} className='w-full border-2 rounded-3xl mx-2 my-2 sm:h-12 h-10 flex justify-center items-center hover:bg-slate-100 cursor-pointer'>
        {question[2]}
      </div>
    </div>
    <div className='flex'>
      <div onClick={()=>{
        setOptionClicked(true)
        if(question.a === 3){
          document.getElementById(index + "C").style.backgroundColor = "#00B386"
          document.getElementById(index + "C").style.color = "#ffffff"
        }
        else{
          document.getElementById(index + "C").style.backgroundColor = "#EF5350"
          document.getElementById(index + "C").style.color = "#ffffff"
          if(question.a === 1){
            document.getElementById(index + "A").style.backgroundColor = "#00B386"
            document.getElementById(index + "A").style.color = "#ffffff"
          }
          else if(question.a === 2){
            document.getElementById(index + "B").style.backgroundColor = "#00B386"
            document.getElementById(index + "B").style.color = "#ffffff"
          }
          else if(question.a === 4){
            document.getElementById(index + "D").style.backgroundColor = "#00B386"
            document.getElementById(index + "D").style.color = "#ffffff"
          }
        }
      }} id={index + "C"} className='w-full border-2 rounded-3xl mx-2 my-2 sm:h-12 h-10 flex justify-center items-center hover:bg-slate-100 cursor-pointer'>
        {question[3]}
      </div>
      <div onClick={()=>{
        setOptionClicked(true)
        if(question.a === 4){
          document.getElementById(index + "D").style.backgroundColor = "#00B386"
          document.getElementById(index + "D").style.color = "#ffffff"
        }
        else{
          document.getElementById(index + "D").style.backgroundColor = "#EF5350"
          document.getElementById(index + "D").style.color = "#ffffff"
          if(question.a === 1){
            document.getElementById(index + "A").style.backgroundColor = "#00B386"
            document.getElementById(index + "A").style.color = "#ffffff"
          }
          else if(question.a === 2){
            document.getElementById(index + "B").style.backgroundColor = "#00B386"
            document.getElementById(index + "B").style.color = "#ffffff"
          }
          else if(question.a === 3){
            document.getElementById(index + "C").style.backgroundColor = "#00B386"
            document.getElementById(index + "C").style.color = "#ffffff"
          }
        }
      }} id={index + "D"} className='w-full border-2 rounded-3xl mx-2 my-2 sm:h-12 h-10 flex justify-center items-center hover:bg-slate-100 cursor-pointer'>
        {question[4]}
      </div>
    </div>
    <div>
      {question.a}
    </div>
  </div>
  )
}

export default OldMock