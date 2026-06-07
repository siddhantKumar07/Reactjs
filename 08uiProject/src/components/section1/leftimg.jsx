import React from 'react'

const leftimg = () => {
  return (
    
           <div className="w-2/6 h-full rounded-3xl bg-[url('https://i.pinimg.com/736x/49/35/6a/49356a364e280e2ede66e661905e43b0.jpg')] bg-cover bg-center bg-no-repeat flex flex-col justify-between pb-6">
        <div className="h-9 w-9 rounded-full text-black bg-white mx-2 my-5 text-center">
          1
        </div>
         <p className=" w-[75%] mt-8 mx-4 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
          nemo eos illo earum obcaecati
        </p>
           <div className="relative h-20 flex justify-between w-[80%] items-center ml-4 "> <div className="bg-green-400 h-12 w-[70%] rounded-4xl text-center pt-2  z-10"> satisfied</div>
        <div className="absolute right-10 h-6 w-12 bg-green-400 rounded-3xl z-0"></div>
            <div className="h-12 w-14 text-2xl text-black rounded-full  z-10 bg-green-400 text-center pt-2"><i className="ri-arrow-right-line  "></i></div>

        </div>
      </div>
    
  )
}

export default leftimg