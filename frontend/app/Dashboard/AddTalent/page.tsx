"use client"

import { useState } from 'react'
import axios from 'axios'
import Sidebar from '../Sidebar'
import { useRouter } from 'next/navigation'

const AddTalent = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [delivery, setDelivery] = useState('')
  const [res, setRes] = useState({})

  const router = useRouter()

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file to upload.")
      return
    }

    try {
      const data = new FormData()
      data.append("file", file)
      // Append other fields to the FormData object
      data.append("title", title)
      data.append("description", description)
      data.append("price", price)
      data.append("category", category)
      data.append("delivery", delivery)

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
      const res = await axios.post("http://127.0.0.1:5000/api/talents/upload", data, config)
      setRes(res.data)
      setImageUrl(res.data.secure_url)
      console.log(res.data.secure_url)
      console.log('Talent added successfully')
    } catch (error: any) {
      alert(error.message)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await handleUpload()
    try {
      const response = await axios.post(`http://127.0.0.1:5000/api/talents/add`, {
        title,
        description,
        imageUrl,
        price,
        category,
        delivery,
      })
      console.log('Talent added:', response.data)
      // Redirect to the dashboard after adding the talent
      router.push('/Dashboard')
    } catch (error) {
      console.error('Error adding talent:', error)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Add Talent</h2>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div>
            <label className="block text-lg font-semibold mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Enter title..."
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 h-32 resize-none"
              placeholder="Enter description..."
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">Image</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Enter price..."
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            >
              <option value="">Select a category</option>
              <option value="Programming">Programming</option>
              <option value="Art & Design">Art & Design</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">Delivery Time</label>
            <input
              type="text"
              value={delivery}
              onChange={(e) => setDelivery(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Enter delivery time..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-3 rounded-lg font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
          >
            Add Talent
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddTalent
