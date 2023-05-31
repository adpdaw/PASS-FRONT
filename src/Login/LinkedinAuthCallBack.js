import React, { useEffect,useState,useContext } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { datosContexto } from '../index_components/Context/Context';

function LinkedinAuthCallback() {
  const context = useContext(datosContexto);
    const location = useLocation();
  const Navigate = useNavigate();
  const [authenticationInProgress, setAuthenticationInProgress] = useState(false);


  useEffect(() => {
    const handleAuthentication = async () => {
      try {
        if (authenticationInProgress) {
          return; // Exit if authentication process is already in progress
        }
        setAuthenticationInProgress(true);

        // Extract the authorization code from the query string
        const urlSearchParams = new URLSearchParams(location.search);
        const code = urlSearchParams.get('code');

        if (code) {
          // Make a request to your backend API to handle the Google authentication
          const response = await fetch('http://localhost/api/auth-linkedin/call-back', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json',
            },
            body: new URLSearchParams({
                  code,
                  redirect_uri: 'http://localhost:3000/auth-linkedin/call-back',
                }),
            });

          if (response.ok) {
            const data = await response.json();
             context.saveToken(data.user,data.token);
             const expirationTime = new Date().getTime() + (60 * 60 * 1000); // Set expiration time to 1 hour from now
             localStorage.setItem('expirationTime', expirationTime);
            
            console.log(data)

            Navigate('/')

            // Process the received tokens as needed
          } else {
            const error = await response.json();
            console.log(error)
          }
        } else {

          // Handle the case where the authorization code is not present
        }

        setAuthenticationInProgress(false); // Reset the flag after handling authentication
      } catch (error) {
        console.log(error)

        // Handle any errors that occur during the authentication process
        //console.log('Authentication error:', error);
        // Redirect the user to an error page or display an error message
      }
    };

    handleAuthentication();
  }, []);

  return <div></div>;
}

export default LinkedinAuthCallback;