import Button from './Button';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="bg-gray- flex min-h-full items-center justify-center bg-gray-500">
      <div className="mx-auto max-w-md bg-white p-4 text-center">
        <h1>Something went wrong 😥</h1>
        <p>{error.message}</p>
        <Button type="primary" onClick={resetErrorBoundary}>
          Try Again
        </Button>
      </div>
    </div>
  );
}

export default ErrorFallback;
