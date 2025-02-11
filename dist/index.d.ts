import { Division, District, Upazila, GeoData } from "./types";
export declare const getDivisions: () => GeoData;
/**
 * Get a division by ID or Name (English or Bangla)
 */
export declare const getDivision: (query: number | string) => Division | undefined;
/**
 * Get districts by division ID or Name
 */
export declare const getDistricts: (query: number | string) => District[];
/**
 * Get upazilas by district ID or Name inside a specific division
 */
export declare const getUpazilas: (districtQuery: number | string, divisionQuery: number | string) => Upazila[];
/**
 * Search for a division, district, or upazila by name (English or Bangla)
 */
export declare const searchGeoData: (query: string) => (Division | District | Upazila)[];
declare const _default: {
    getDivisions: () => GeoData;
    getDivision: (query: number | string) => Division | undefined;
    getDistricts: (query: number | string) => District[];
    getUpazilas: (districtQuery: number | string, divisionQuery: number | string) => Upazila[];
    searchGeoData: (query: string) => (Division | District | Upazila)[];
};
export default _default;
