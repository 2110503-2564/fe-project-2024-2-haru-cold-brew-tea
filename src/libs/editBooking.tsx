export default async function editBooking(sessionId: any, token:any, sessionDate:any) {
  const response = await fetch(`http://localhost:5000/api/v1/session/${sessionId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
      sessionDate: sessionDate
    })
  });

  const data = await response.json();

  if(!response.ok) {
    throw new Error(data.message);
  }

  return data;
}