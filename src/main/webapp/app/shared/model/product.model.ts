export interface IProduct {
  id?: number;
  name?: string;
  description?: string;
  barcode?: string;
  imageURL?: string;
  modelNumber?: string;
  technicalSpecs?: string;
}

export const defaultValue: Readonly<IProduct> = {};
