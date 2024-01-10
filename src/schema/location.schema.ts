import {number, object, string} from "zod";

export const locationSchema = object({
    lat: number({required_error: 'Latitude is required'}),
    long: number({required_error: 'Length is required'}),
    time: string({required_error: 'Date is required'}),
});