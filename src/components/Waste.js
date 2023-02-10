import React from 'react'

export const Waste = () => {
  return (
    <>
    <div className="wastesec py-5 sm:py-14 ">
        <div className="wrapper">
            <div className="wastebox">
                <div className="wasteimage">
                    <img className="max-h-[686px] rounded-[40px]"  src="./images/waste1.png" alt="" />
                </div>
                <div className="wastetext max-w-[500px] m-auto">
                    <h1 className=" font-semibold  text-2xl sm:text-[44px] leading-8 sm:leading-[61px] text-[#102668]" >Wij brengen restafval tot een schoon nieuw leven</h1>
                    <h2 className=" mt-6 font-semibold text-[20px] leading-[30px] text-[#8DBA38]" >0% afval, 100% clean</h2>
                    <p className=" mt-6 font-semibold text-[15px] leading-[28px] text-[#7D7D7D]" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt luctus dolor eget maximus. Quisque convallis ipsum non odio dapibus, ut fermentum orci egestas. Duis volutpat risus libero, vel efficitur mauris finibus eget. Donec dapibus ultrices dui, ac cursus mi mattis in. Nullam consequat gravida urna, vel volutpat est porttitor id.</p>
                    <button className=" mt-6 h-12 w-[111px] rounded-lg bg-[#102668] font-medium text-[15px] leading-[28px] text-[#FFFFFF]" >Proces</button>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
