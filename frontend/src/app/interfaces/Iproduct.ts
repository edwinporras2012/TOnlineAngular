export interface Product {
    producId: string | number;
    categoryId: number;
    nombre: string;
    descripcion: string;
    marca: string;
    precio: number;
    img: string;
    disponibilidad: boolean;
    color: string;
    review: number;
    existencia: number
}
