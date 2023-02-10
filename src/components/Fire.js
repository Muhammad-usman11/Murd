import React from 'react'

export const Fire = () => {
  return (
    <>
    <div className="wastesec py-5 sm:py-14 ">
        <div className="wrapper">
            <div className="wastebox">
                
                <div className="wastetext max-w-[500px] m-auto">
                    <h2 className=" mt-6 font-semibold text-[20px] leading-[30px] text-[#8DBA38]" >Verbranding</h2>
                    <h1 className=" font-semibold  text-2xl sm:text-[44px] leading-8 sm:leading-[61px] text-[#102668]" >We starten met de verbranding van het huisvuil</h1>
                    
                    <p className=" mt-6 font-semibold text-[15px] leading-[28px] text-[#7D7D7D]" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt luctus dolor eget maximus. Quisque convallis ipsum non odio dapibus, ut fermentum orci egestas. Duis volutpat risus libero, vel efficitur mauris finibus eget. Donec dapibus ultrices dui, ac cursus mi mattis in. Nullam consequat gravida urna, vel volutpat est porttitor id.</p>
                    <div className="btngroup flex gap-5 items-center">
                    <button className=" mt-6 h-12 w-[119px] rounded-lg bg-[#EEF2FC] font-medium text-[15px] leading-[28px] text-[#102668]" >Huisvuil</button>
                    <button className=" mt-6 h-[68px] w-[156px] rounded-lg bg-[#102668] font-medium text-[15px] leading-[28px] text-[#FFFFFF]" >Verbranding</button>
                    <button className=" mt-6 h-12 w-[119px] rounded-lg bg-[#EEF2FC] font-medium text-[15px] leading-[28px] text-[#102668]" >Bodemas</button>
                    </div>
                    
                </div>
                <div className="wasteimage">
                    <img className="max-h-[686px] "  src="./images/fire.png" alt="" />
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
