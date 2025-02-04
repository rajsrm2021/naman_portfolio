import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assets/data.json";
import pic1 from "../assets/photo1.jpg";
import pic2 from "../assets/photo 2.jpg";
import pic3 from "../assets/photo 3.jpg";

const Work = () => {
  const photos = [pic1]; // Array of photos to display

  return (
    <div id="work">
      <h2>MY PROJECTS</h2>
      <section>
        <article>
          <Carousel
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={3000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {data.projects.map((project, index) => (
              <div key={project.title} className="workItem">
                <div className="photoGrid">
                  {photos.map((photo, idx) => (
                    <img src={photo} alt={`Slide ${index}-${idx}`} key={idx} />
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Work;
