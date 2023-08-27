export interface IApiProducts {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export interface IApiResponse {
    limit: number;
    products: IApiProducts[];
    skip: number;
    total: number;
}
