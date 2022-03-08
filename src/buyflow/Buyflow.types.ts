
export interface BuyflowProps {
    productId: ProductIds
  }

  export enum ProductIds {
    devIns = 'dev_ins',
  }
  
  export const PRODUCT_IDS_TO_NAMES = {
    [ProductIds.devIns]: 'Developer Insurance',
  }

export interface FormDataType {
      name: string;
      email: string;
      age: number;
  }

  export enum Steps {
    name= "name",
    email="email",
    age="age",
    summary="summary",
}