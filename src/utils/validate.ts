const emailRegex =  /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
const nameRegex = /^[a-z0-9_-]{3,50}$/;
const minAgeLength = 0;
const maxAgeLength = 110;


export const validateEmail = (email:string) => {
   return emailRegex.test(email);
}

export const validatName = (name:string) => {
    return nameRegex.test(name);
}

export const validateAge = (age:number) => {
    return age > minAgeLength && age < maxAgeLength;
}
