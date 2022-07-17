import Text from './';

export const Paragraph = () => {
  return (
    <Text.P>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
      unknown printer took a galley of type and scrambled it to make a type specimen book.
    </Text.P>
  );
};

export const Title = () => {
  return (
    <>
      <Text.H1>New Haven&apos;s School of Design</Text.H1>
      <Text.P className='mt-4 max-w-2xl'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make a type specimen
        book.
      </Text.P>
    </>
  );
};
