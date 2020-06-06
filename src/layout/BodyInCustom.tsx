import React from 'react';

const BodyInCustom = (props: any) => {
  return (
    <div style={{ margin: '40px', border: '2px solid #333', padding: '20px' }}>
      {props.children}
    </div>
  );
};

export default BodyInCustom;
