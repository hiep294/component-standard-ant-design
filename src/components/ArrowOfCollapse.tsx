import React, { useState } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';

const ArrowOfCollapse = () => {
  const [rotating, setRotating] = useState(false);
  return (
    <ArrowRightOutlined
      className={`${rotating ? 'rotate-90' : ''}`}
      onClick={() => setRotating(!rotating)}
    />
  );
};

export default ArrowOfCollapse;
