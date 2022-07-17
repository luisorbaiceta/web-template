import Card from '.';
import React from 'react';
import { SharedAnimation, useSharedAnimation } from '~/lib/use-shared-animation';
import { MainProvider } from '~/contexts/main';

const CardWrapper = {
  decorators: [
    (Story: React.FC) => (
      <div style={{ margin: '3em' }}>
        <MainProvider allowVirtualScroll={false} allowAnimations={true}>
          <SharedAnimation>
            <p>Some text</p>
            <Story />
          </SharedAnimation>
        </MainProvider>
      </div>
    ),
  ],
};

export const Default = () => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  useSharedAnimation((gsap, st, tl) => {
    const tween = gsap.fromTo(
      cardRef.current,
      { opacity: 0 },
      { duration: 1, opacity: 1 },
    );
    tl.add(tween, 0);
    return () => {
      tl.remove(tween);
    };
  });
  return (
    <Card.Root ref={cardRef}>
      <Card.Collapse
        onClick={(e) => {
          console.log('clicked', e);
        }}
      >
        Collapse
      </Card.Collapse>
      <Dummy />
    </Card.Root>
  );
};

const Dummy = () => {
  const pRef = React.useRef<HTMLParagraphElement>(null);
  useSharedAnimation((gsap, st, tl) => {
    const tween = gsap.fromTo(pRef.current, { opacity: 0 }, { duration: 1, opacity: 1 });
    tl.add(tween, 1);

    return () => {
      tl.remove(tween);
    };
  });
  return (
    <div>
      <p ref={pRef}>Animated test</p>
    </div>
  );
};

export default CardWrapper;
