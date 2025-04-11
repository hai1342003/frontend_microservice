import React, { useState } from 'react'
import Title from '../components/Title'
import assets from '../assets/assets'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate a network request
    setTimeout(() => {
      setFormStatus('Your message has been sent!')
      setIsSubmitting(false)
      setFormData({
        name: '',
        email: '',
        message: ''
      })
    }, 2000)
  }

  return (
    <div className='bg-gray-50 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 py-16'>
      <div className='text-center mb-16'>
        <Title text1="CONTACT" text2="US" />
        <p className='mt-4 text-gray-500 text-md md:text-lg max-w-2xl mx-auto'>
          Have questions or want to get in touch? We’d love to hear from you!
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
        {/* Contact Information */}
        <div className='space-y-8'>
          <div className='text-gray-700'>
            <h3 className='text-2xl font-semibold mb-4'>Get In Touch</h3>
            <p>If you have any questions, feel free to reach out to us. Our team is here to help you!</p>
            <ul className='space-y-4'>
              <li>
                <b className='font-semibold'>Email:</b> 1xM3o@example.com
              </li>
              <li>
                <b className='font-semibold'>Phone:</b> 0123-456-7890
              </li>
              <li>
                <b className='font-semibold'>Address:</b> Cau Giay, Hanoi, Vietnam
              </li>
            </ul>
          </div>

          <div className='flex items-center justify-center'>
            <img src={assets.contactImage} alt="Contact Us" className='w-full max-w-lg rounded-lg shadow-md object-cover' />
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label htmlFor="name" className='block text-gray-700 font-semibold'>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            <div>
              <label htmlFor="email" className='block text-gray-700 font-semibold'>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            <div>
              <label htmlFor="message" className='block text-gray-700 font-semibold'>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            <div className='text-center'>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 px-6 bg-blue-600 text-white rounded-lg ${isSubmitting ? 'opacity-50' : 'hover:bg-blue-700'}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>

          {formStatus && (
            <div className='mt-6 text-center text-green-600 font-semibold'>
              {formStatus}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact
