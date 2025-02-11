"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchGeoData = exports.getUpazilas = exports.getDistricts = exports.getDivision = exports.getDivisions = void 0;
const bd_geo_location_json_1 = __importDefault(require("./data/bd-geo-location.json"));
/**
 * Get all divisions
 */
let cachedDivisions;
const getDivisions = () => {
    if (cachedDivisions) {
        return cachedDivisions; // Return cached version if available
    }
    cachedDivisions = bd_geo_location_json_1.default.map((division) => (Object.assign(Object.assign({}, division), { id: Number(division.id), districts: division.districts.map((district) => (Object.assign(Object.assign({}, district), { id: Number(district.id), division_id: Number(district.division_id), upazilas: district.upazilas.map((upazila) => (Object.assign(Object.assign({}, upazila), { id: Number(upazila.id), district_id: Number(upazila.district_id) }))) }))) })));
    return cachedDivisions;
};
exports.getDivisions = getDivisions;
/**
 * Get a division by ID or Name (English or Bangla)
 */
const getDivision = (query) => {
    const convertedQuery = typeof query === "string" ? query.toLowerCase() : query;
    return (0, exports.getDivisions)().find((division) => division.id === Number(query) ||
        division.name.toLowerCase() === convertedQuery ||
        division.bn_name === convertedQuery);
};
exports.getDivision = getDivision;
/**
 * Get districts by division ID or Name
 */
const getDistricts = (query) => {
    const division = (0, exports.getDivision)(query);
    return division ? division.districts : [];
};
exports.getDistricts = getDistricts;
/**
 * Get upazilas by district ID or Name inside a specific division
 */
const getUpazilas = (districtQuery, divisionQuery) => {
    const districts = (0, exports.getDistricts)(divisionQuery);
    const convertedQuery = typeof districtQuery === "string" ? districtQuery.toLowerCase() : districtQuery;
    const district = districts.find((d) => d.id === Number(districtQuery) || d.name.toLowerCase() === convertedQuery || d.bn_name === convertedQuery);
    return district ? district.upazilas : [];
};
exports.getUpazilas = getUpazilas;
/**
 * Search for a division, district, or upazila by name (English or Bangla)
 */
const searchGeoData = (query) => {
    query = query.toLowerCase();
    const results = [];
    (0, exports.getDivisions)().forEach((division) => {
        if (division.name.toLowerCase().includes(query) || division.bn_name.includes(query)) {
            results.push(division);
        }
        division.districts.forEach((district) => {
            if (district.name.toLowerCase().includes(query) || district.bn_name.includes(query)) {
                results.push(district);
            }
            district.upazilas.forEach((upazila) => {
                if (upazila.name.toLowerCase().includes(query) || upazila.bn_name.includes(query)) {
                    results.push({
                        id: upazila.id,
                        name: upazila.name,
                        bn_name: upazila.bn_name,
                    });
                }
            });
        });
    });
    return results;
};
exports.searchGeoData = searchGeoData;
exports.default = {
    getDivisions: exports.getDivisions,
    getDivision: exports.getDivision,
    getDistricts: exports.getDistricts,
    getUpazilas: exports.getUpazilas,
    searchGeoData: exports.searchGeoData,
};
