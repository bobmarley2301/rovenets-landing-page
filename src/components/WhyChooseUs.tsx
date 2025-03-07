import React from 'react'
import { motion } from 'framer-motion'

const advantages = [
	{
		icon: '🌿',
		title: 'Екологічні матеріали',
		description:
			'Ми використовуємо тільки якісні, екологічно чисті матеріали для наших виробів',
	},
	{
		icon: '✋',
		title: '100% Handmade',
		description:
			'Кожен виріб створюється вручну з особливою увагою до деталей',
	},
	{
		icon: '🛫',
		title: 'Доставка по всьому світу',
		description: 'Швидка та надійна доставка в будь-яку точку світу',
	},
	{
		icon: '🎁',
		title: 'Індивідуальні замовлення',
		description: 'Створюємо унікальні вироби згідно з вашими побажаннями',
	},
]

const WhyChooseUs = () => {
	return (
		<section id='why-choose-us' className='py-20 bg-gray-50'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-playfair mb-6'>
						Чому обирають нас?
					</h2>
					<p className='text-gray-600 text-lg'>
						Наші переваги, які роблять нас унікальними
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{advantages.map((advantage, index) => (
						<motion.div
							key={advantage.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							viewport={{ once: true }}
							className='bg-white p-6 rounded-lg shadow-lg text-center'>
							<div className='text-4xl mb-4'>
								{advantage.icon}
							</div>
							<h3 className='text-xl font-semibold mb-2'>
								{advantage.title}
							</h3>
							<p className='text-gray-600'>
								{advantage.description}
							</p>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.8 }}
					viewport={{ once: true }}
					className='mt-16 text-center'>
					<a
						href='#contact'
						className='inline-block bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors'>
						Зв'язатися з нами
					</a>
				</motion.div>
			</div>
		</section>
	)
}

export default WhyChooseUs
