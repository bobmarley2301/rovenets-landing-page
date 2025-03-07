import * as React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Products from '../components/Products'
import Reviews from '../components/Reviews'
import WhyChooseUs from '../components/WhyChooseUs'
import OrderShipping from '../components/OrderShipping'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const IndexPage = () => {
	return (
		<main>
			<Navbar />
			<Hero />
			<About />
			<Products />
			<Reviews />
			<WhyChooseUs />
			<OrderShipping />
			<Contact />
			<Footer />
		</main>
	)
}

export default IndexPage
