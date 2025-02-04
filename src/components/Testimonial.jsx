import React from 'react'

const Testimonial = () => {
  return (
    <div id='testimonial'>
        <h2>Testimonial</h2>

        <section>
            <TestimonialCard name={"Harsh Ashwani"} feedback={"Your Problem Solving Is Great"} />
            <TestimonialCard name={"Ritik Singh"} feedback={"Your DSA Skill is Good"} />
            <TestimonialCard name={"SashiKanth "} feedback={"Your Teaching skills are very good"} />
          
        </section>
    </div>
  )
}


const TestimonialCard=({name,feedback})=>(
    <article>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)

export default Testimonial