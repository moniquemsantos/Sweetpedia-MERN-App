const serverURL =
  process.env.NODE_ENV === "production"
    ? "https://sweetpedia-mern-app-server.vercel.app"
    : "https://localhost:5000";

export default serverURL;
