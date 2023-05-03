import React from 'react';

import image from '../img/gallery.webp';
import imageLarge from '../img/gallery.webp';

import image1 from '../img/gallery1.webp';
import image1Large from '../img/gallery1-large.webp';

import image2 from '../img/gallery2.webp';
import image2Large from '../img/gallery2-large.webp';

import image3 from '../img/gallery3.webp';
import image3Large from '../img/gallery3-large.webp';

import image4 from '../img/gallery4.webp';
import image4Large from '../img/gallery4-large.webp';

import image5 from '../img/gallery5.webp';
import image5Large from '../img/gallery5-large.webp';

import image6 from '../img/gallery6.webp';
import image6Large from '../img/gallery6-large.webp';

import image7 from '../img/gallery7.webp';
import image7Large from '../img/gallery7-large.webp';

import image8 from '../img/gallery8.webp';
import image8Large from '../img/gallery8-large.webp';

import image9 from '../img/gallery9.webp';
import image9Large from '../img/gallery9-large.webp';

import image10 from '../img/gallery10.webp';
import image10Large from '../img/gallery10-large.webp';

const AboutUs = () => {
  return (
    <section className="section-about">
      <div className="row">
      <div className="u-center-text">
        <h2 className="heading-secondary u-margin-bottom-medium">
          About Us
        </h2>
      </div>

        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
          Our Philosophy
          </h3>
          <p className="paragraph">
          At Little Pizza Truck, we believe that sharing pizza has the unique power to unite people with joyful hearts and full stomachs. As a family-owned catering business, we provide tailored, upscale experiences using fresh, seasonal ingredients and eco-friendly practices like locally-sourced produce. Our team is committed to enhancing events, fostering connections, and respecting our food's origins while minimizing our environmental impact. We strive to create unforgettable experiences that can be enjoyed anywhere. 
          </p>

          {/* <a href="#" className="btn-text">
            Learn more &rarr;
          </a> */}
        </div>
        <div className="col-1-of-2">
          <div className="composition">

            <img
              srcSet={image + "-large.webp 1000w, " + image + ".webp 300w"}
              sizes="(max-width: 56.25em) 100vw, 50vw"
              alt="Main image"
              className="image__img"
              src={image + "-large.webp"}
            />
            
            <img
              srcSet={image1 + "-large.webp 1000w, " + image1 + ".webp 300w"}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 1"
              className="composition__photo composition__photo--p1"
              src={image1 + "-large.webp"}
            />

            <img
              srcSet={image2 + "-large.webp 1000w, " + image2 + ".webp 300w"}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 2"
              className="composition__photo composition__photo--p2"
              src={image2 + "-large.webp"}
            />

            <img
              srcSet={image3 + "-large.webp 1000w, " + image3 + ".webp 300w"}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 3"
              className="composition__photo composition__photo--p3"
              src={image3 + "-large.webp"}
            />

            <img
              srcSet={image4 + "-large.webp 1000w, " + image4 + ".webp 300w"}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 4"
              className="composition__photo composition__photo--p4"
              src={image4 + "-large.webp"}
            />

            <img
              srcSet={image5 + "-large.webp 1000w, " + image5 + ".webp 300w"}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 5"
              className="composition__photo composition__photo--p5"
              src={image5 + "-large.webp"}
            />

            <img
              srcSet={image6 + "-large.webp 1000w, " + image6 + ".webp 300w"}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 6"
              className="composition__photo composition__photo--p6"
              src={image6 + "-large.webp"}
            />

            <img
              srcSet={image7 + "-large.webp 1000w, " + image7 + ".webp 300w"}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 7"
              className="composition__photo composition__photo--p7"
              src={image7 + "-large.webp"}
            />

            <img
              srcSet={image8 + "-large.webp 1000w, " + image8 + ".webp 300w"}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 8"
              className="composition__photo composition__photo--p8"
              src={image8 + "-large.webp"}
            />

            <img
              srcSet={image9 + "-large.webp 1000w, " + image9 + ".webp 300w"}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 9"
              className="composition__photo composition__photo--p9"
              src={image9 + "-large.webp"}
            />

            <img
              srcSet={image10 + "-large.webp 1000w, " + image10 + ".webp 300w"}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 10"
              className="composition__photo composition__photo--p10"
              src={image10 + "-large.webp"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;