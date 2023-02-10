import React from 'react'
import { Button } from './Button'

export const FourImage = () => {
  return (
    <>
    <div className="fourimagesec py-5 sm:py-14">
        <div className="wrapper">
            <h1 className=" font-semibold text-[34px] leading-[47px] text-[#102668]" >Nu even alles op een rijtje</h1>
            <div className="fourimagebox">
                <div className="fourimage">
                    <img className=" my-[30px] " src="./images/four1.png" alt="" />
                    <h1 className="font-semibold text-xl text-[#102668]" >Verbranding</h1>
                    <p className="font-normal text-base text-[#7D7D7D] mt-5 " >Lozrem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt luctus dolor eget maximus. Quisque convallis ipsum non</p>
                </div>
                <div className="fourimage"><img className=" my-[30px] " src="./images/four2.png" alt="" />
                    <h1 className="font-semibold text-xl text-[#102668]" >Bodemas</h1>
                    <p className="font-normal text-base text-[#7D7D7D] mt-5 " >Lozrem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt luctus dolor eget maximus. Quisque convallis ipsum non</p> </div>
                <div className="fourimage">
                <img className="my-[30px] " src="./images/four3.png" alt="" />
                    <h1 className="font-semibold text-xl text-[#102668]" >Behandeling</h1>
                    <p className="font-normal text-base text-[#7D7D7D] mt-5 " >Lozrem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt luctus dolor eget maximus. Quisque convallis ipsum non</p>
                </div>
                <div className="fourimage">
                <img className=" my-[30px] " src="./images/four4.png" alt="" />
                    <h1 className="font-semibold text-xl text-[#102668]" >Producten</h1>
                    <p className="font-normal text-base text-[#7D7D7D] mt-5 " >Lozrem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt luctus dolor eget maximus. Quisque convallis ipsum non</p>
                </div>
            </div>
        </div>
    </div>
    
    
    </>
  )
}
