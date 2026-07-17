function TestimonialCard({ review }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <img
          src={review.image}
          alt={review.name}
          className="testimonial-avatar"
        />

        <div>
          <h3 className="testimonial-name">
            {review.name}
          </h3>

          <p className="testimonial-location">
            {review.location}
          </p>
        </div>
      </div>

      <div className="testimonial-stars">
        {"⭐".repeat(review.rating)}
      </div>

      <p className="testimonial-review">
        {review.review}
      </p>

      <span className="testimonial-service">
        {review.service}
      </span>
    </div>
  );
}

export default TestimonialCard;