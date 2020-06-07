import React, { useState } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';

const ArrowOfCollapse = () => {
  const [rotating, setRotating] = useState(false);
  return (
    <ArrowRightOutlined
      style={{ transform: `rotate(${rotating ? '90deg' : '0deg'})` }}
      onClick={() => setRotating(!rotating)}
    />
  );
};

export default ArrowOfCollapse;
