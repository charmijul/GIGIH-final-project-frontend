import React from 'react';

function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>PAGE NOT FOUND !!!</h1>
      <a href={`/`}>Go To Homepage</a>
    </div>
  );
}

export default NotFoundPage;