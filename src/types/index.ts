export interface ProductItem {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    description: string;
    added: boolean;
}

export interface Props {
    products: ProductItem[];
}