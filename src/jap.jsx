import React from 'react'

const Ghap = () => {
    let arry=[1,2,3]
  return (
    <div>
        {arry.map((val,index)=>{
            return(
                <div key={index}>{JSON.stringify(val)}</div>
            )

        })}
    </div>
  )
}

export default Ghap