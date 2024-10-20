export async function sendNotificationsToAll() {
  const response = await fetch(`/api/fcm`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Hello Everyone!",
      body: "This is a notification to all users.",
    }),
  });

  const data = await response.json();
  console.log(data);
}
