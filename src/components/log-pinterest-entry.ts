export const logPinterestEntry = async (image: string) => {
  const response = await fetch("/.netlify/functions/log-variable", {
    method: "POST",
    body: JSON.stringify({ date: new Date().toISOString(), image }),
  });

  if (response.ok) {
    console.log("Pinterest entry logged successfully");
  } else {
    console.error("Failed to log Pinterest entry");
  }
};
