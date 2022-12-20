export interface Product{
    id_producto?: number | string;
    nombre: string;
    precio: number;
    existencia: number;
    categoryId: number;
    descripcion: string;
    marca: string;
    img: string;
    disponibilidad: boolean;
    color: string;
    review: number
}