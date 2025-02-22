import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface Review {
  name: string;
  date: string;
  rating: number;
  review: string;
}

interface ReviewCardProps {
  review: Review;
  onDelete?: (review: Review) => void;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, onDelete }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg flex gap-3">
      <img
        src="/api/placeholder/40/40"
        alt={review.name}
        className="w-10 h-10 rounded-full"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium">{review.name}</h4>
            <p className="text-sm text-gray-500">{review.date}</p>
          </div>
          <button 
            className="text-gray-400"
            onClick={() => onDelete?.(review)}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-1 my-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
        <p className="text-gray-600 text-sm">{review.review}</p>
      </div>
    </div>
  );
};

interface ReviewListProps {
  reviews: Review[];
  onDeleteReview?: (review: Review) => void;
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews, onDeleteReview }) => {
  return (
    <div className="space-y-4">
      {reviews.map((review, index) => (
        <ReviewCard 
          key={index} 
          review={review} 
          onDelete={onDeleteReview}
        />
      ))}
    </div>
  );
};

interface ReviewFormData {
  rating: number;
  name: string;
  number: string;
  review: string;
}

interface ReviewFormProps {
  onSubmit: (data: ReviewFormData) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ReviewFormData>({
    rating: 0,
    name: '',
    number: '',
    review: ''
  });
  const [hoveredRating, setHoveredRating] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    // Reset form
    setFormData({ rating: 0, name: '', number: '', review: '' });
  };

  return (
    <div className="mt-8">
      <h3 className="font-medium text-lg mb-4">Submit Your Reviews</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 text-sm">
            Add Your Ratings <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={20}
                className={`cursor-pointer ${
                  (hoveredRating || formData.rating) >= star
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                }`}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                onClick={() => setFormData({ ...formData, rating: star })}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-sm">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 bg-gray-100 rounded-md"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">
              Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={formData.number}
              onChange={(e) => setFormData({ ...formData, number: e.target.value })}
              className="w-full px-3 py-2 bg-gray-100 rounded-md"
              placeholder="0241234578"
              required
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm">
            Write Your Review <span className="text-red-500">*</span>
          </label>
          <textarea
            value={formData.review}
            onChange={(e) => setFormData({ ...formData, review: e.target.value })}
            className="w-full px-3 py-2 bg-gray-100 rounded-md"
            rows={4}
            placeholder="Write Here..."
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-md text-sm"
        >
          Submit Reviews
        </button>
      </form>
    </div>
  );
};

interface ReviewsProps {
  initialReviews?: Review[];
}

const Reviews: React.FC<ReviewsProps> = ({ initialReviews = [] }) => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      name: "Ninsou Abdul",
      date: "24th January,2024",
      rating: 3,
      review: "This building is an excellent example of thoughtful urban development. The exterior design is sleek and modern, while the interior is practical and welcoming. Ventilation is superb, ensuring a comfortable indoor atmosphere, and the use of energy-efficient materials makes it environmentally friendly."
    },
    {
      name: "Ishaah",
      date: "24th January,2024",
      rating: 5,
      review: "This building is an excellent example of thoughtful urban development. The exterior design is sleek and modern, while the interior is practical and welcoming. Ventilation is superb, ensuring a comfortable indoor atmosphere, and the use of energy-efficient materials makes it environmentally friendly."
    },
    ...initialReviews
  ]);

  const handleDeleteReview = (reviewToDelete: Review) => {
    setReviews(reviews.filter(review => review !== reviewToDelete));
  };

  const handleSubmitReview = (formData: ReviewFormData) => {
    const newReview: Review = {
      ...formData,
      date: new Date().toLocaleDateString('en-US', { 
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    };
    setReviews([...reviews, newReview]);
  };

  return (
    <div>
      <ReviewList reviews={reviews} onDeleteReview={handleDeleteReview} />
      <ReviewForm onSubmit={handleSubmitReview} />
    </div>
  );
};

export default Reviews;