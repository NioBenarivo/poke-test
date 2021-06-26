import Button from '@components/Button';

export default function ErrorPage({ error }) {
  let messageErr;

  if (
    !!error &&
    error.networkError && 
    typeof window !== 'undefined' && 
    !window.navigator.online
  ) {
    messageErr = 'A network error occured'
  } else {
    messageErr = 'An error occured'
  }
  return (
    <div>
      <h1>{messageErr}</h1>
      <p>Click the button to reload the page</p>
      <Button onClick={() => window.location.reload}>
        Reload
      </Button>
    </div>
  )
}
