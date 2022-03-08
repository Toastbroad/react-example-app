import { FormDataType, ProductIds, Steps } from "./Buyflow.types";

export const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: 'Developer Insurance',
  [ProductIds.designerIns]: 'Designer Insurance',
}

export const PRODUCT_IDS_TO_FIRST_STEP = {
  [ProductIds.devIns]: Steps.email,
  [ProductIds.designerIns]: Steps.name,
}

export const DEFAULT_FORM_DATA: FormDataType = {
    name: '',
    email: '',
    age: 0,
  }

export const stepStateMap = {
  [Steps.name]: {next: Steps.email},
  [Steps.email]: {next: Steps.age},
  [Steps.age]: {next: Steps.summary},
  [Steps.summary]: {next: Steps.summary},
}

export const fieldType = {
  [Steps.name]: "string",
  [Steps.email]: "string",
  [Steps.age]: "number",
}

export const getPageTitle = (productId: ProductIds) => `Buying ${PRODUCT_IDS_TO_NAMES[productId]}`;