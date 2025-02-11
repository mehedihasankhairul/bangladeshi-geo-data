export interface Upazila {
    id: number;
    district_id: number;
    name: string;
    bn_name: string;
}
export interface District {
    id: number;
    division_id: number;
    name: string;
    bn_name: string;
    lat?: string;
    lon?: string;
    upazilas: Upazila[];
}
export interface Division {
    id: number;
    name: string;
    bn_name: string;
    url?: string;
    districts: District[];
}
export type GeoData = Division[];
