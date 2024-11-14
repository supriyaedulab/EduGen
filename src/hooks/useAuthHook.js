import { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";

const client = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
});


const useAuth = () => {
  const isRun = useRef(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [err, setErr] = useState(false);
  // console.log("client", client)
  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true;

    console.log("Initializing Keycloak...");
    // Initialize Keycloak and set auth state
    client.init({ onLoad: "login-required" }).then(authenticated => {
      // console.log("Authentication status:", authenticated); // Logs true if authenticated, false otherwise
      setIsAuthenticated(authenticated);
      setToken(client.token);
    }).catch(error => {
      console.error("Keycloak initialization failed:", error); // Logs if there's an error during initialization
      console.dir(error);
      setErr(error)
    });
    // Set up a refresh interval to keep the token valid
    const refreshInterval = setInterval(() => {
      client.updateToken(30).then(refreshed => {
        if (refreshed) {
          setToken(client.token);
        }
      });
    }, 60000); // Refresh token every 60 seconds

    return () => clearInterval(refreshInterval);
  }, []);

  return { isAuthenticated, token ,err};
};

export { useAuth };
