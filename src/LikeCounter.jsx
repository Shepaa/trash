import React, { useState } from 'react';

const LikeCounter = () => {
  const [likes, setLikes] = useState(0);

  const incrementLikes = () => setLikes(likes + 1);
  const resetLikes = () => setLikes(0);

  return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>
          <strong>Likes:</strong> {likes}
        </p>
        <button
            onClick={incrementLikes}
            style={{ marginRight: '10px', padding: '10px 20px' }}
        >
          Like 👍
        </button>
        <button
            onClick={resetLikes}
            style={{ padding: '10px 20px', background: '#f44336', color: '#fff', border: 'none' }}
        >
          Reset
        </button>
      </div>
  );
};

export default LikeCounter;
