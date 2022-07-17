import { NextPageContext } from 'next';

function Error({ statusCode, title }: { title?: string; statusCode: number }) {
  return (
    <>
      <h1>{title || 'Ups! There is an error'}</h1>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    </>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
