import { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import '../styles/form.css'
import FormInput from '../components/FormInput'

const FormPage = () => {
  const { formData, updateFormField, submitForm } = useContext(AppContext)
  const [errors, setErrors] = useState({})

  // Simple form validation
  const validateForm = () => {
    const newErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Please enter a valid email'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      submitForm(formData)
      alert('Form submitted successfully!')
    }
  }

  return (
    <div className="form-page">
      <div className="form-container">
        <h1 className="page-title">Contact Form</h1>
        <p className="page-subtitle">Fill out the form below to send us a message</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <FormInput
              label="First Name"
              type="text"
              value={formData.firstName}
              onChange={(e) => updateFormField('firstName', e.target.value)}
              placeholder="John"
              required
              error={errors.firstName}
            />
            <FormInput
              label="Last Name"
              type="text"
              value={formData.lastName}
              onChange={(e) => updateFormField('lastName', e.target.value)}
              placeholder="Doe"
              required
              error={errors.lastName}
            />
          </div>

          <div className="form-row">
            <FormInput
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => updateFormField('email', e.target.value)}
              placeholder="john@example.com"
              required
              error={errors.email}
            />
            <FormInput
              label="Phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => updateFormField('phone', e.target.value)}
              placeholder="+1 (555) 000-0000"
              required
              error={errors.phone}
            />
          </div>

          <FormInput
            label="Subject"
            type="text"
            value={formData.subject}
            onChange={(e) => updateFormField('subject', e.target.value)}
            placeholder="What is this about?"
            required
            error={errors.subject}
          />

          <FormInput
            label="Message"
            type="textarea"
            value={formData.message}
            onChange={(e) => updateFormField('message', e.target.value)}
            placeholder="Your message here..."
            required
            error={errors.message}
          />

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default FormPage
