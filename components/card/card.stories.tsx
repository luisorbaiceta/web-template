import Card from '.';
import React from 'react';

export const CardStory = () => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  return (
    <Card.Root ref={cardRef}>
      <Card.Collapse
        onClick={(e) => {
          console.log('clicked', e);
        }}
      >
        Collapse
      </Card.Collapse>
    </Card.Root>
  );
};
