import { validateAge, validateEmail, validatName } from "../../utils/validate";
import { Steps } from "../Buyflow.types";

export const validateInput = (label: Steps, value: any) => {
    let isValidInput  = true;
    if(label === Steps.email) {
        isValidInput = validateEmail(value);
    }
    if(label === Steps.name) {
        isValidInput = validatName(value);
    }
    if(label === Steps.age) {
        isValidInput = validateAge(Number(value));
    }
    return isValidInput;
}