import { createLazyFileRoute } from '@tanstack/react-router'
import { useEffect } from "react"

export const Route = createLazyFileRoute('/fetch')({
  component: Fetch,
})

function Fetch() {
  useEffect(() => {

    const authHeader = 'Basic dXNlcm5hbWU6cGFzc3dvcmQ=';
    fetch(`${import.meta.env.VITE_API_URL}/fetch`, {
      method: "GET",
      headers: {
        Authorization: authHeader,
      }
    })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })

    .then(data => console.log(data));
  },[])

  return <div className="p-2">Hello from fetch!</div>
}