import React from 'react';

// import image from '/gallery.webp';
// import imageLarge from '/gallery.webp';

// import image1 from '/gallery1.webp';
// import image1Large from '/gallery1-large.webp';

// import image2 from '/gallery2.webp';
// import image2Large from '/gallery2-large.webp';

// import image3 from '/gallery3.webp';
// import image3Large from '/gallery3-large.webp';

// import image4 from '/gallery4.webp';
// import image4Large from '/gallery4-large.webp';

// import image5 from '/gallery5.webp';
// import image5Large from '/gallery5-large.webp';

// import image6 from '/gallery6.webp';
// import image6Large from '/gallery6-large.webp';

// import image7 from '/gallery7.webp';
// import image7Large from '/gallery7-large.webp';

// import image8 from '/gallery8.webp';
// import image8Large from '/gallery8-large.webp';

// import image9 from '/gallery9.webp';
// import image9Large from '/gallery9-large.webp';

// import image10 from '/gallery10.webp';
// import image10Large from '/gallery10-large.webp';

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
              srcSet={gallery + "-large.webp 1000w, " + gallery + ".webp 300w"}
              sizes="(max-width: 56.25em) 100vw, 50vw"
              alt="Main Gallery"
              className="gallery__img"
              src={gallery + "-large.webp"}
            />
            
            <img
              srcSet={gallery1 + "-large.webp 1000w, " + gallery1 + ".webp 300w"}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 1"
              className="composition__photo composition__photo--p1"
              src={gallery1 + "-large.webp"}
            />

            <img
              srcSet={gallery2 + "-large.webp 1000w, " + gallery2 + ".webp 300w"}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 2"
              className="composition__photo composition__photo--p2"
              src={gallery2 + "-large.webp"}
            />

            <img
              srcSet={gallery3 + "-large.webp 1000w, " + gallery3 + ".webp 300w"}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 3"
              className="composition__photo composition__photo--p3"
              src={gallery3 + "-large.webp"}
            />

            <img
              srcSet={gallery4 + "-large.webp 1000w, " + gallery4 + ".webp 300w"}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 4"
              className="composition__photo composition__photo--p4"
              src={gallery4 + "-large.webp"}
            />

            <img
              srcSet={gallery5 + "-large.webp 1000w, " + gallery5 + ".webp 300w"}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 5"
              className="composition__photo composition__photo--p5"
              src={gallery5 + "-large.webp"}
            />

            <img
              srcSet={gallery6 + "-large.webp 1000w, " + gallery6 + ".webp 300w"}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 6"
              className="composition__photo composition__photo--p6"
              src={gallery6 + "-large.webp"}
            />

            <img
              srcSet={gallery7 + "-large.webp 1000w, " + gallery7 + ".webp 300w"}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 7"
              className="composition__photo composition__photo--p7"
              src={gallery7 + "-large.webp"}
            />

            <img
              srcSet={gallery8 + "-large.webp 1000w, " + gallery8 + ".webp 300w"}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 8"
              className="composition__photo composition__photo--p8"
              src={gallery8 + "-large.webp"}
            />

            <img
              srcSet={gallery9 + "-large.webp 1000w, " + gallery9 + ".webp 300w"}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 9"
              className="composition__photo composition__photo--p9"
              src={gallery9 + "-large.webp"}
            />

            <img
              srcSet={gallery10 + "-large.webp 1000w, " + gallery10 + ".webp 300w"}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 10"
              className="composition__photo composition__photo--p10"
              src={gallery10 + "-large.webp"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;