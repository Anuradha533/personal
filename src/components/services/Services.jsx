import React from 'react';
import './Services.css';
import Image1 from '../../assets/RUN.png'
import Image2 from '../../assets/med.png'
import Image3 from '../../assets/wintert.png'

const data = [
    {
        id: 1,
        image: Image1,
        title: "Run for a Cause",
        description:
            "A large-scale event with over 1,000 participants, where we raised funds for various social initiatives",
    },
    {
        id: 2,
        image: Image2,
        title: "Grocery and Medical Aid",
        description:
            "Organized donation drives to provide groceries, blankets, and medical supplies to orphanages, old age homes, and children living with HIV",
    },
    {
        id: 3,
        image: Image3,
        title: "Winter Relief Program",
        description:
            "Coordinated the distribution of winter essentials, such as blankets and electric appliances, to needy families in rural areas",
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Contributions   </h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt='' className='services__img' width="80" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services