import React from 'react';
import './Testimonials.css';
import Image3 from '../../assets/bob.png'
import Image4 from '../../assets/bliss.png'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

	const data = [
		{
			id: 1,
			image: Image4,
			title: "Sharon Bliss",
			subtitle: "Manager @ Community Information services and web specialist",
			comment: "You've been a great help during the transition phase and consistently delivered quality work—really appreciate your support!"
		},
		{
			id: 2,
			image: Image3,
			title: "BOB MARTEL",
			subtitle: "Systems-Manager @ Urban college",
			comment: "Nice work supporting students and staff with tech issues—really appreciated!",
		},

	];

	return (
		<section className="testimonials container section">

			<h2 className="section__title">Testimonials</h2>

			<Swiper className="testimonial__container grid"
				modules={[Pagination]}
				spaceBetween={30}
				slidesPerView={1}
				loop={true}
				grabCursor={true}
				pagination={{ clickable: true }}>
				{data.map(({ id, image, title, subtitle, comment }) => {
					return (
						<SwiperSlide className="testimonial__item" key={id}>
							<div className="thumb">
								<img src={image} alt="" />
							</div>
							<h3 className="testimonial__title">{title}</h3>
							<span className="subtitle">{subtitle}</span>
							<div className="comment">{comment}</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}

export default Testimonials