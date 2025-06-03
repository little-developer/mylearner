

export const setCookieFunction = (name:string, value:string, days:number) => {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
    return `Cookie ${name} is set to ${value}`
};

// Function to get a cookie by name
export const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    console.log("cookie: " + value)
    const parts: string[] = value.split(`; ${name}=`);
    if (parts.length === 2) return parts[1].split(";").shift();
    return null;
};