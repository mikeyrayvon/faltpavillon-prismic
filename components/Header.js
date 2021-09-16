import { useState } from 'react'
import Link from 'next/link'
import {postData} from '../utils/api'

import Container from './Container'

const Header = () => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState([])
  const [success, setSuccess] = useState(false)

  const submitForm = event => {
    event.preventDefault()

    setErrors([])
    setLoading(true)
    setSuccess(false)

    const { first, last, email } = event.target

    // call api endpoint for mailchimp subscription
    postData(`/api/subscribe`, {
      first: first.value,
      last: last.value,
      email: email.value,
    })
      .then(data => {
        if (data.error_count > 0) {
          const errorMessages = data.errors.map(item => item.error)
          setErrors(errorMessages)
          setLoading(false)
        } else {
          console.log('Success', data)
          setErrors([])
          setLoading(false)
          setSuccess(true)
          event.target.reset()
        }
      })
      .catch(error => {
        console.error('Error', error)
        setErrors(['Error'])
        setLoading(false)
      })
  }

  return (
    <header className='pt-4 md:pt-8 pb-8'>
      <Container>
        <div className='dis-row'>
          <div className='w-full xl:w-1/4 md:px-12 xl:px-20 mb-4'>
            <h1><Link href='/'><a>Faltpavillon</a></Link></h1>
          </div>
          <div className='w-full xl:w-1/4 md:px-12 xl:px-20 mb-4'>
            <div><a className='underline' href='mailto:email@faltpavillon.land'>email@faltpavillon.land</a></div>
            <div><a className='underline' href='https://instagram.com/faltpavillon'>@faltpavillon</a></div>
          </div>
          <div className='w-full xl:w-1/2 md:px-12 xl:px-20 mb-4'>
            <form onSubmit={submitForm} className='flex flex-wrap'>
              <div className='mb-4 w-1/2 pr-4'>
                <label className='block' htmlFor='first-name'>
                  <span className='hidden'>First Name</span>
                  <input className='block w-full border-b border-black bg-transparent focus:ring-0 focus:border-green-400' id='first' name='first' type='text' autoComplete='given-name' placeholder='First Name' required />
                </label>
              </div>
              <div className='mb-4 w-1/2'>
                <label className='block' htmlFor='last-name'>
                  <span className='hidden'>Last Name</span>
                  <input className='block w-full border-b border-black bg-transparent focus:ring-0 focus:border-green-400' id='last' name='last' type='text' autoComplete='family-name' placeholder='Last Name' required />
                </label>
              </div>
              <div className='mb-4 w-3/4 pr-4'>
                <label className='block' htmlFor='email'>
                  <span className='hidden'>Email</span>
                  <input className='block w-full border-b border-black bg-transparent focus:ring-0 focus:border-green-400' id='email' name='email' type='email' autoComplete='email' placeholder='Email' required />
                </label>
              </div>
              <div className='mb-4 w-1/4'>
                <button
                  type='submit'
                  className='w-full disabled:opacity-50 disabled:cursor-default disabled:pointer-events-none focus:ring-0 focus:border-green-600 border border-black bg-white h-full'
                  disabled={loading}>{loading ? 'Subscribing...' : 'Subscribe'}</button>
              </div>
            </form>
            <div className='mb-4'>
              {errors.length > 0 &&
                <ul>
                  {errors.map(error => (
                    <li className='mb-2 text-yellow-500 text-xs'>{error}</li>
                  ))}
                </ul>
              }
              {success &&
                <span className='text-green-500 text-xs'>Subscribed</span>
              }
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
};

export default Header;
