"use client";
import React, { useState } from 'react'
import axios from 'axios';

 const UpdateTalent = () => {
    const [title , setTitle] = useState("")
    const [Description ,setDescription] = useState("")
    const [Price,setPrice] = useState("")
    const [Category ,setCategory] = useState("")
    const [Rating ,setRating] = useState("")
    const [Delivery,setDelivery] = useState("")
    const [image,setImage] = useState("")
    
    // Function to handle talent update
    const handleUpdate = (id: number , newdata :Object) => {
        axios.put(`http://127.0.0.1:5000/api/talents/${id}`, newdata).then((response) => {
          console.log('Talent updated successfully', response.data)
           // Toggle refetch to trigger useEffect
        }).catch((error) => { console.log(error) })
      };
    
  return (
    < div className=''>

    <div className='flex flex-col'>
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg ">
        <img src="https://t3.ftcdn.net/jpg/00/65/25/06/360_F_65250693_GYPSBTBF4Yh8mC6riC8wWoHCTzNR2ff9.jpg" alt=""  className='w-72 h-28 -mt-8 ml-32'/>
        <div className="mb-4">
            <div className="relative">
                <label className="block text-gray-700 text-sm font-bold mb-2" >Title:</label>
                <input type="text" className=" outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder=" Your Title" onChange={()=>{}}/>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i className="fas fa-user text-gray-400"></i>
                </div>
            </div>
        </div>
        <div className="mb-4">
            <div className="relative">
                <label  className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
                <textarea  className=" outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder=" Your Description" onChange={()=>{}} />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i className="fas fa-user text-gray-400"></i>
                </div>
            </div>
        </div>
        <div className="mb-4">
            <div className="relative">
                <label  className="block text-gray-700 text-sm font-bold mb-2">Price:</label>
                <input type="text" className=" outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder=" Your Price" onChange={()=>{}} />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i className="fas fa-user text-gray-400"></i>
                </div>
            </div>
        </div>
        <div className="mb-4">
            <div className="relative">
                <label className="block text-gray-700 text-sm font-bold mb-2">Category:</label>
                <input type="text" className=" outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder=" Your Category"  onChange={()=>{}} />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i className="fas fa-user text-gray-400"></i>
                </div>
            </div>
        </div>
        <div className="mb-4">
            <div className="relative">
                <label  className="block text-gray-700 text-sm font-bold mb-2">Rating:</label>
                <input type="text" className=" outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Rating" onChange={()=>{}} />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i className="fas fa-user text-gray-400"></i>
                </div>
            </div>
        </div>

        <div className="mb-4">
            <div className="relative">
                <label  className="block text-gray-700 text-sm font-bold mb-2">Delivery:</label>
                <input type="text" className=" outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                placeholder="Your Delivery" onChange={()=>{}}/>
                   
                <div className="mb-2">
            <label  className="block text-gray-700 text-sm font-bold mb-2 mt-6">Upload Image:</label>
            <img src="" className='w-14 '/>
            <input type="file"  className="outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={()=>{}} />
            
            <button className=" ml-72 mt-2 bg-[#108a00] hover:bg-[#3d9731] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >upload!</button>
        </div>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i className="fas fa-user text-gray-400"></i>
                </div>
            </div>
        </div>

        <button className=" w-52 ml-28 mt-8 bg-black  hover:bg-[#3d9731] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value="submit" >Update</button>
    </div>

</div>
</div>
  )
}

export default UpdateTalent;