import React from 'react';

interface Props  {
  leftChild: React.ReactNode;
  rightChild: React.ReactNode;
};

const ResponsiveStack: React.FC<Props> = ({ leftChild, rightChild }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        {leftChild}
      </div>
      <div className="md:w-1/2">
        {rightChild}
      </div>
    </div>
  );
};

export default ResponsiveStack;
