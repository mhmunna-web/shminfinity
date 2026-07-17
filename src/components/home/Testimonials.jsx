import testimonialData from "../../data/testimonialData";
import SectionTitle from "../ui/SectionTitle";
import TestimonialCard from "../ui/TestimonialCard";
import "../../styles/testimonials.css";

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <SectionTitle>
        What Our Customers Say
      </SectionTitle>

      <div className="testimonials-container">
        {testimonialData.map((review) => (
          <TestimonialCard
            key={review.id}
            review={review}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;