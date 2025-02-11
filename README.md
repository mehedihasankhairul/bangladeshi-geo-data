# 📌 Bangladesh Geo Data (Divisions, Districts, Upazilas)

&#x20;&#x20;

## 🏆 Overview

`bangladeshi-geo-data` provides **Bangladesh's geographical data**, including **Divisions, Districts, and Upazilas**, in a **structured and searchable format**.

✅ Supports **English & Bangla names**\
✅ **Efficient search functionality**\
✅ Lightweight & easy to use

---

## 📦 Installation

### **Using NPM**

```sh
npm install bangladeshi-geo-data
```

### **Using Yarn**

```sh
yarn add bangladeshi-geo-data
```

---

## 🚀 Usage Examples

### **1️⃣ Importing the Package**

```ts
import { getDivisions, getDivision, getDistricts, getUpazilas, searchGeoData } from "bangladeshi-geo-data";
```

---

### **2️⃣ Get All Divisions**

```ts
console.log(getDivisions());
```

---

### **3️⃣ Get Division by ID or Name**

```ts
console.log(getDivision(1)); // Fetch division by ID
console.log(getDivision("Dhaka")); // Fetch division by name
console.log(getDivision("ঢাকা")); // Fetch division by Bangla name
```

---

### **4️⃣ Get Districts by Division ID or Name**

```ts
console.log(getDistricts(1)); // Fetch districts in division ID 1
console.log(getDistricts("Dhaka")); // Fetch districts in Dhaka division
```

---

### **5️⃣ Get Upazilas by District Name**

```ts
console.log(getUpazilas("Dhaka", "Dhaka")); // Fetch Upazilas in Dhaka District
```

---

### **6️⃣ Search for Any Division, District, or Upazila**

```ts
console.log(searchGeoData("Gazipur"));
console.log(searchGeoData("সাভার")); // Bangla search
```

---

## 🎯 Real-Life Use Cases

### **1️⃣ E-commerce Address Management**
If you're building an e-commerce platform, you can use `bangladeshi-geo-data` to allow users to select their **division, district, and upazila** while filling out their shipping address.

```ts
const userDivision = getDivision("Dhaka");
const userDistricts = getDistricts("Dhaka");
const userUpazilas = getUpazilas("Dhaka", "Dhaka");
```

### **2️⃣ Government & NGO Data Analysis**
Organizations working in **rural development** can filter and analyze data by **region**.

```ts
const floodProneDistricts = ["Sunamganj", "Sylhet", "Kurigram"];
const districtsData = floodProneDistricts.map((name) => getDistricts(name));
```

### **3️⃣ Location-Based Filtering in Apps**
If you're building a **real estate, healthcare, or service-based app**, you can filter data based on users' locations.

```ts
const userSearch = searchGeoData("Comilla");
console.log("Matching Locations:", userSearch);
```

---

## 🎯 Features

- 📍 **Accurate Geo Data** (Bangladesh's **Divisions, Districts, and Upazilas**)
- 🔍 **Searchable** (Find by **ID, English name, or Bangla name**)
- 🚀 **Lightweight & Fast**
- 🔄 **Regularly Updated**
- 🏆 **Well-structured TypeScript support**

---

## ⚙️ API Methods

| Method            | Description                                       | Input Type      | Example Input                   |                                           |
| ----------------- | ------------------------------------------------- | --------------- | ------------------------------- | ----------------------------------------- |
| `getDivisions()`  | Get all divisions                                 | `()`            | `getDivisions()`                |                                           |
| `getDivision()`   | Get a division by **ID or Name**                  | `number|string` | `getDivision(1)` / `getDivision("Dhaka")` |
| `getDistricts()`  | Get districts by **Division ID or Name**          | `number|string` | `getDistricts("Dhaka")`                   |
| `getUpazilas()`   | Get upazilas by **District Name & Division**      | `string,string` | `getUpazilas("Dhaka", "Dhaka")` |                                           |
| `searchGeoData()` | Search for **any** division, district, or upazila | `string`        | `searchGeoData("Gazipur")`      |                                           |

---

## 🛠️ Contributing

Contributions are **welcome!** 🎉\
To contribute:

1. **Fork this repository**
2. Create a **new feature branch**
3. Submit a **Pull Request (PR)**

📌 If you find any **missing data or incorrect names**, please **open an issue**.

---

## 📜 License

Licensed under the **MIT License**.\
You are free to **use, modify, and distribute** this package.

📌 **Maintainer**: [Mehedi Hasan Khairul](https://github.com/mhkhairul)\
📌 **NPM Package**: [bangladeshi-geo-data](https://www.npmjs.com/package/bangladeshi-geo-data)

---

## 📢 Contact & Support

🔗 **GitHub:** [GitHub Repo](https://github.com/mhkhairul/bangladeshi-geo-data)\
🔗 **NPM:** [NPM Package](https://www.npmjs.com/package/bangladeshi-geo-data)

🚀 **Enjoy using `bangladeshi-geo-data`!** Let us know if you have any suggestions or feedback! 🚀

