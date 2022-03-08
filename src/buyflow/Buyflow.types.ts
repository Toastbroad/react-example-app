
export interface BuyFlowRouteParams {
    productId: ProductIds
  }

  export enum ProductIds {
    devIns = 'developer_insurance',
    designerIns = 'designer_insurance',
  }

export interface FormDataType {
      name: string;
      email: string;
      age: number;
      [key: string]: string | number;
  }

  export enum Steps {
    name= "name",
    email="email",
    age="age",
    summary="summary",
}