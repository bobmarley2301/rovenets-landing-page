import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
	const values = [
		{
			icon: '🌿',
			title: 'Sustainability',
			description: 'Екологічні матеріали та відповідальне виробництво',
		},
		{
			icon: '✋',
			title: 'Handmade',
			description: "Кожен виріб зроблений вручну з любов'ю",
		},
		{
			icon: '🎁',
			title: 'Custom Orders',
			description: 'Індивідуальні замовлення для ваших унікальних потреб',
		},
	]

	return (
		<section id='about' className='py-20 bg-white'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className='max-w-3xl mx-auto text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-playfair mb-6'>
						Про наш бренд
					</h2>
					<p className='text-gray-600 text-lg'>
						Наша історія почалася з любові до якісних речей та
						бажання створювати унікальні вироби. Кожна сумка та
						рюкзак - це результат ретельного підбору матеріалів та
						майстерності наших майстрів.
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{values.map((value, index) => (
						<motion.div
							key={value.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							viewport={{ once: true }}
							className='text-center p-6 bg-gray-50 rounded-lg'>
							<div className='text-4xl mb-4'>{value.icon}</div>
							<h3 className='text-xl font-semibold mb-2'>
								{value.title}
							</h3>
							<p className='text-gray-600'>{value.description}</p>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					viewport={{ once: true }}
					className='mt-16 relative h-96 rounded-lg overflow-hidden'>
					<img
						src='/images/workshop.jpg'
						alt='Our workshop'
						className='w-full h-full object-cover'
					/>
				</motion.div>
			</div>
		</section>
	)
}

export default About
