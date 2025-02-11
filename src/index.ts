import geoData from "./data/bd-geo-location.json";
import { Division, District, Upazila, GeoData } from "./types";

/**
 * Get all divisions
 */

let cachedDivisions: GeoData | undefined;
export const getDivisions = (): GeoData => {
  if (cachedDivisions) {
    return cachedDivisions; // Return cached version if available
  }

  cachedDivisions = geoData.map((division) => ({
    ...division,
    id: Number(division.id),
    districts: division.districts.map((district) => ({
      ...district,
      id: Number(district.id),
      division_id: Number(district.division_id),
      upazilas: district.upazilas.map((upazila) => ({
        ...upazila,
        id: Number(upazila.id),
        district_id: Number(upazila.district_id),
      })),
    })),
  }));

  return cachedDivisions;
};

/**
 * Get a division by ID or Name (English or Bangla)
 */
export const getDivision = (query: number | string): Division | undefined => {
  const convertedQuery = typeof query === "string" ? query.toLowerCase() : query;
  return getDivisions().find(
    (division) =>
      division.id === Number(query) ||
      division.name.toLowerCase() === convertedQuery ||
      division.bn_name === convertedQuery
  );
};

/**
 * Get districts by division ID or Name
 */
export const getDistricts = (query: number | string): District[] => {
  const division = getDivision(query);
  return division ? division.districts : [];
};

/**
 * Get upazilas by district ID or Name inside a specific division
 */
export const getUpazilas = (districtQuery: number | string, divisionQuery: number | string): Upazila[] => {
  const districts = getDistricts(divisionQuery);
  const convertedQuery = typeof districtQuery === "string" ? districtQuery.toLowerCase() : districtQuery;
  const district = districts.find(
    (d) => d.id === Number(districtQuery) || d.name.toLowerCase() === convertedQuery || d.bn_name === convertedQuery
  );
  return district ? district.upazilas : [];
};

/**
 * Search for a division, district, or upazila by name (English or Bangla)
 */
export const searchGeoData = (query: string): (Division | District | Upazila)[] => {
  query = query.toLowerCase();
  const results: (Division | District | Upazila)[] = [];

  getDivisions().forEach((division) => {
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
          } as Upazila);
        }
      });
    });
  });

  return results;
};



export default {
  getDivisions,
  getDivision,
  getDistricts,
  getUpazilas,
  searchGeoData,
};
