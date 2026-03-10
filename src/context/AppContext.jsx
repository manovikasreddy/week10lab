import { createContext, useState, useCallback, useContext } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  // State management
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submissions, setSubmissions] = useState([])
  const [theme, setTheme] = useState('light')

  // Form handler
  const updateFormField = useCallback((field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }, [])

  // Submit form
  const submitForm = useCallback((data) => {
    const submission = {
      id: Date.now(),
      timestamp: new Date().toLocaleString(),
      ...data,
    }
    setSubmissions((prev) => [submission, ...prev])
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
    return submission
  }, [])

  // Toggle theme
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }, [])

  const value = {
    formData,
    updateFormField,
    submitForm,
    submissions,
    theme,
    toggleTheme,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

// Custom hook for using context
export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider')
  }
  return context
}
