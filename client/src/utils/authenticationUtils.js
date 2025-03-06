export const getAccessToken = () => {
    const authenticationDataJSON = localStorage.getItem('authenticationData');

    if(!authenticationDataJSON) {
        return '';
    }

    const authData = JSON.parse(authenticationDataJSON);

    return authData?.accessToken;
}