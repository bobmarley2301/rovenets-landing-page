import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const products = [
	{
		id: 1,
		name: 'Класичний рюкзак',
		category: 'backpacks',
		price: '2500 грн',
		image: '/images/backpack-1.jpg',
		description: 'Універсальний рюкзак з натуральної шкіри',
	},
	{
		id: 2,
		name: 'Сумка-шопер',
		category: 'bags',
		price: '1800 грн',
		image: '/images/bag-1.jpg',
		description: 'Елегантна сумка для щоденних прогулянок',
	},
	// Додайте більше товарів тут
]

const categories = [
	{ id: 'all', name: 'Всі' },
	{ id: 'backpacks', name: 'Рюкзаки' },
	{ id: 'bags', name: 'Сумки' },
	{ id: 'accessories', name: 'Аксесуари' },
]

const Products = () => {
	const [activeCategory, setActiveCategory] = useState('all')

	const filteredProducts =
		activeCategory === 'all'
			? products
			: products.filter((product) => product.category === activeCategory)

	return (
		<section id='products' className='py-20 bg-gray-50'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-playfair mb-6'>
						Наша продукція
					</h2>
					<p className='text-gray-600 text-lg'>
						Відкрийте для себе унікальні вироби ручної роботи
					</p>
				</motion.div>

				{/* Фільтри */}
				<div className='flex flex-wrap justify-center gap-4 mb-12'>
					{categories.map((category) => (
						<button
							key={category.id}
							onClick={() => setActiveCategory(category.id)}
							className={`px-6 py-2 rounded-full transition-colors ${
								activeCategory === category.id
									? 'bg-gray-900 text-white'
									: 'bg-white text-gray-900 hover:bg-gray-100'
							}`}>
							{category.name}
						</button>
					))}
				</div>

				{/* Галерея товарів */}
				<Swiper
					modules={[Navigation, Pagination]}
					spaceBetween={30}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					breakpoints={{
						640: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 3,
						},
					}}>
					{filteredProducts.map((product) => (
						<SwiperSlide key={product.id}>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8 }}
								viewport={{ once: true }}
								className='bg-white rounded-lg overflow-hidden shadow-lg'>
								<div className='relative h-64'>
									<img
										src={product.image}
										alt={product.name}
										className='w-full h-full object-cover'
									/>
								</div>
								<div className='p-6'>
									<h3 className='text-xl font-semibold mb-2'>
										{product.name}
									</h3>
									<p className='text-gray-600 mb-4'>
										{product.description}
									</p>
									<div className='flex justify-between items-center'>
										<span className='text-xl font-semibold'>
											{product.price}
										</span>
										<a
											href={`https://wa.me/YOUR_PHONE_NUMBER?text=Замовлення: ${product.name}`}
											target='_blank'
											rel='noopener noreferrer'
											className='bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors'>
											Замовити
										</a>
									</div>
								</div>
							</motion.div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default Products
