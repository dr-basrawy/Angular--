
 export class Store{
name="Amazon Store";
branches=["sohage","alex"];
logo='./../../assets/imgs/2.jpg'

}
export interface IProduct{
    id:number;
    name:string;
    quantity:number;
    price:number;
    PrdimgURL:string;
    categoryID?:number;
    Material:string;
    count?: number;
    description?: string;
}
export interface ICategory{
    id:number;
    name:string;
}
export enum DiscountOffers{
    noDiscount="No Discount",
    tenP="10%",
    fifteenp="15%",

}

