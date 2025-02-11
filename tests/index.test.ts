import { getDivisions, getDivision, getDistricts } from "../src/index";

describe("GeoData Functions", () => {
  test("Should return all divisions", () => {
    const divisions = getDivisions();
    expect(divisions.length).toBeGreaterThan(0);
  });

  test("Should get division by ID", () => {
    const division = getDivision(1); // ✅ Now using getDivision()
    expect(division).toBeDefined();
    expect(division?.id).toBe(1);
  });

  test("Should get division by Name (English)", () => {
    const division = getDivision("Dhaka"); // ✅ Should work for name lookup
    expect(division).toBeDefined();
    expect(division?.name).toBe("Dhaka");
  });

  test("Should get division by Name (Bangla)", () => {
    const division = getDivision("ঢাকা"); // ✅ Should work for Bangla name lookup
    expect(division).toBeDefined();
    expect(division?.bn_name).toBe("ঢাকা");
  });

  test("Should return undefined for non-existing division", () => {
    const division = getDivision(999); // ✅ Should return undefined for invalid ID
    expect(division).toBeUndefined();
  });

  test("Should get districts of a division", () => {
    const districts = getDistricts(1);
    expect(districts.length).toBeGreaterThan(0);
  });
});
