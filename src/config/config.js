const URL_BACKEND_TOP = window.location.hostname.includes("localhost")
  ? "http://localhost:8080"
  : "https://my-json-server.typicode.com/mrsMatheusrocha/rochaflix/db";

export default {
  URL_BACKEND_TOP,
};