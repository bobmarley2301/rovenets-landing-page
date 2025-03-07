import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Тут буде логіка відправки форми
		console.log('Form submitted:', formData)
	}

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}))
	}

	return (
		<section id='contact' className='py-20 bg-white'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-playfair mb-6'>
						Зв'яжіться з нами
					</h2>
					<p className='text-gray-600 text-lg'>
						Ми завжди на зв'язку та готові відповісти на ваші
						питання
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
					{/* Контактна інформація */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className='bg-gray-50 p-8 rounded-lg'>
						<h3 className='text-2xl font-semibold mb-6'>
							Контакти
						</h3>
						<div className='space-y-6'>
							<div>
								<h4 className='font-semibold mb-2'>Адреса</h4>
								<p className='text-gray-600'>
									м. Київ, вул. Прикладна, 1
								</p>
							</div>
							<div>
								<h4 className='font-semibold mb-2'>Телефон</h4>
								<a
									href='tel:+380991234567'
									className='text-gray-600 hover:text-gray-900'>
									+38 (099) 123-45-67
								</a>
							</div>
							<div>
								<h4 className='font-semibold mb-2'>Email</h4>
								<a
									href='mailto:info@handmadebags.com'
									className='text-gray-600 hover:text-gray-900'>
									info@handmadebags.com
								</a>
							</div>
						</div>

						<div className='mt-8'>
							<h4 className='font-semibold mb-4'>
								Соціальні мережі
							</h4>
							<div className='flex space-x-4'>
								<a
									href='https://instagram.com/YOUR_INSTAGRAM'
									target='_blank'
									rel='noopener noreferrer'
									className='text-gray-600 hover:text-gray-900'>
									<svg
										className='w-6 h-6'
										fill='currentColor'
										viewBox='0 0 24 24'>
										<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
									</svg>
								</a>
								<a
									href='https://facebook.com/YOUR_FACEBOOK'
									target='_blank'
									rel='noopener noreferrer'
									className='text-gray-600 hover:text-gray-900'>
									<svg
										className='w-6 h-6'
										fill='currentColor'
										viewBox='0 0 24 24'>
										<path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
									</svg>
								</a>
							</div>
						</div>
					</motion.div>

					{/* Форма зворотного зв'язку */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className='bg-gray-50 p-8 rounded-lg'>
						<form onSubmit={handleSubmit} className='space-y-6'>
							<div>
								<label
									htmlFor='name'
									className='block text-sm font-medium text-gray-700 mb-1'>
									Ваше ім'я
								</label>
								<input
									type='text'
									id='name'
									name='name'
									value={formData.name}
									onChange={handleChange}
									className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent'
									required
								/>
							</div>
							<div>
								<label
									htmlFor='email'
									className='block text-sm font-medium text-gray-700 mb-1'>
									Email
								</label>
								<input
									type='email'
									id='email'
									name='email'
									value={formData.email}
									onChange={handleChange}
									className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent'
									required
								/>
							</div>
							<div>
								<label
									htmlFor='message'
									className='block text-sm font-medium text-gray-700 mb-1'>
									Повідомлення
								</label>
								<textarea
									id='message'
									name='message'
									value={formData.message}
									onChange={handleChange}
									rows={4}
									className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent'
									required
								/>
							</div>
							<button
								type='submit'
								className='w-full bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors'>
								Надіслати повідомлення
							</button>
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Contact
