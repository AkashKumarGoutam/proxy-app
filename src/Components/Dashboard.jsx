import React, { useState } from 'react'

const Dashboard = () => {

    const[background ,setBackground] =useState("/img/7041.jpg")

    const handleCheckIn=()=>{
        setBackground("/img/checkin.jpg");
    }
    const handleCheckOut=()=>{
        setBackground("/img/checkout.jpg");
    }

    const handleCheckbox=()=>{
        setBackground("/img/7041.jpg");
    }
  return (
    <div className='flex justify-center items-center '>
    <div style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                minHeight: '100vh', 
                height: '300px', 
                width: '50%', 
                paddingTop:"100px"
            }}>
        <div className='flex items-center justify-center gap-8 py-20 '>
            <button className='border font-semibold p-4 text-xl rounded-xl shadow bg-blue-300 hover:bg-blue-800 hover:text-white' onClick={handleCheckIn}>Check In</button>
            <button className='border font-semibold p-4 text-xl rounded-xl shadow bg-blue-300 hover:bg-blue-800 hover:text-white' onClick={handleCheckOut}>Check Out</button>
            <div className='flex items-center gap-2'>
            <input type='checkbox' className='w-6 h-6 shadow-xl' onClick={handleCheckbox}/>
            <h1 className='text-xl font-semibold'>You want take Break</h1>
            </div>
        </div>

        <div className='flex  justify-center items-center py-8 bg-yellow-100 hidden'>
            <table className='border-2 '>
                <thead>
                    <tr>
                        <th className='border-2 p-2'>SNo.</th>
                        <th className='border-2 p-2'>Check In</th>
                        <th className='border-2 p-2'>Check Out</th>
                        <th className='border-2 p-2'>Break</th>
                        <th className='border-2 p-2'>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                    </tr>
                    <tr>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                    </tr>
                    <tr>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                    </tr>
                    <tr>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                    </tr>
                    <tr>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                    </tr>
                    <tr>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                    </tr>
                    <tr>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                    </tr>
                    <tr>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                        <td className='border-2 p-2'>lilkufgchjkNVK</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
