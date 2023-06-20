'use client'

type ErrorProperties = {
  error: Error
  reset: () => void
}

export default function GlobalError({ error, reset, }: ErrorProperties) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
        <p>{error.message}</p>
      </body>
    </html>
  )
}