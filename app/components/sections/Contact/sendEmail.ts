import { FormData } from "."

export function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email"

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      if (confirm(response.message)) {
        location.reload()
      }
    })
    .catch((err) => {
      alert(err)
    })
}
