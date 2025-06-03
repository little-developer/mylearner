import { setCookieFunction, getCookie } from "../utils";
function login(username:string) {
    let output = setCookieFunction("login_cookie", "Login", 1)
    console.log('login: ' +  output);
    return username;
}

function logout(){
    let output = setCookieFunction("login_cookie", "", 1)
    
    console.log('logout' + output);
    return getCookie("login_cookie") + 'logout';
}

function useAuth() {
    const cookie = getCookie("login_cookie");
    return {
        user: cookie,
        login,
        logout
    };

}

export { login, logout, useAuth };
