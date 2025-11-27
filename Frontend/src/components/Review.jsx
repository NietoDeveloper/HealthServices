import React, { useState, useEffect } from 'react';

const Review = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your review!!`);
    setComment('');
    setRating(0);
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
          <div className="bg-navy-800 p-6 rounded-lg shadow-lg w-full max-w-md text-white">
            <h2 className="text-2xl font-bold mb-2 text-center">Rate Us</h2> 
            <p className="text-center mb-2">Please take a second to review our services!</p>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <button
                    key={index}
                    type="button"
                    className={`text-5xl transition duration-300 ${
                      starValue <= (hover || rating) ? 'text-yellow-500' : 'text-gray-400'
                    }`}
                    onClick={() => setRating(starValue)}
                    onMouseEnter={() => setHover(starValue)}
                    onMouseLeave={() => setHover(0)}
                  >
                    ★
                  </button>
                );
              })}
            </div>

            <form onSubmit={handleSubmit}>
  <textarea
    className="w-full p-2 rounded-lg bg-navy-700 text-black focus:outline-none mb-4" 
    placeholder="Leave a comment..."
    rows="4"
    value={comment}
    onChange={handleCommentChange}
  ></textarea>

  <button
    type="submit"
    className="bg-yellow-500 text-navy-900 font-bold py-2 px-4 rounded-lg w-full hover:bg-yellow-600 transition duration-300"
  >
    Submit
  </button>
</form>
          </div>
        </div>
      )}
    </>
  );
};

export default Review;
