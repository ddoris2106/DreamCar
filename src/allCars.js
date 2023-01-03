import { getCar } from '../apis/carAPI';
// retrieve cars with api
// Use queries instead of calling all cars to filter responses?
const getCars = async () => {
  try {
    let res = await getCar();
    let data = res.json;

    return data;
  }
  catch(err){
    console.error(err);

    return err;
  }
};

// const getCars = () => {
//     try {
//       const response = await fetch(`api/`, {
//         method: 'GET',
//       });
//       return response.json();
//   } 
//   catch (err) {
//     console.error(err);
//     return { err };
//   }
// };

// const ALLCARS = getCars();


// All cars in database
const ALLCARS = [
    {brandName: "Nissan", carName: "Juke", releaseYear: 2017, cost: 19000, bodyType: "SUV", driveTrain: "All Wheel Drive", engine: "Turbo", fuelEconomy: "28 MPG", cargo: "10.5 ft³", depreciation: 2000, maintenence: 1200},
    // https://carbuzz.com/compare/nissan-juke-s-vs-sl-vs-sv
    {brandName: "Toyota", carName: "C-HR", releaseYear: 2021, cost: 22000, bodyType: "SUV", driveTrain: "Front Wheel Drive", engine: "4 Cylinder", fuelEconomy: "29 MPG", cargo: "19.1 ft³", depreciation: 2000, maintenence: 1200},
    // https://carbuzz.com/cars/toyota/c-hr
    {brandName: "Hyundai", carName: "Kona", releaseYear: 2021, cost: 21000, bodyType: "SUV", driveTrain: "All Wheel Drive", engine: "Turbo", fuelEconomy: "27 MPG", cargo: "19.2 ft³", depreciation: 2000, maintenence: 1200},
    // https://carbuzz.com/cars/hyundai/kona
    {brandName: "Jeep", carName: "Compass", releaseYear: 2021, cost: 24000, bodyType: "SUV", driveTrain: "Front Wheel Drive", engine: "V8", fuelEconomy: "26 MPG", cargo: "ft³", depreciation: 2000, maintenence: 1200},
    // 
    {brandName: "Lexus", carName: "RX Hybrid", releaseYear: 2021, cost: 48000, bodyType: "SUV", driveTrain: "All Wheel Drive", engine: "V6", fuelEconomy: "30 MPG", cargo: "ft³", depreciation: 2000, maintenence: 1200},
    //https://carbuzz.com/cars/lexus/rx-hybrid/2021
    {brandName: "BMW", carName: "X6", releaseYear: 2020, cost: 65000, bodyType: "SUV", driveTrain: "All Wheel Drive", engine: "Turbo", fuelEconomy: "23 MPG", cargo: "ft³", depreciation: 2000, maintenence: 1200},
    // 
    {brandName: "Infiniti", carName: "Fx35", releaseYear: 2013, cost: 25000, bodyType: "SUV", driveTrain: "All Wheel Drive", engine: "V6", fuelEconomy: "18 MPG", cargo: "ft³", depreciation: 2000, maintenence: 1200},
    // https://carbuzz.com/cars/infiniti/fx/2013-infiniti-fx35-base
    {brandName: "BMW", carName: "M40i", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "All Whell Drive", engine: "V8", fuelEconomy: "something", cargo: "ft³", depreciation: 2000, maintenence: 1200},
    // 
    {brandName: "Toyota", carName: "Rav 4", releaseYear: 2021, cost: 26000, bodyType: "SUV", driveTrain: "All Wheel Drive", engine: "V8", fuelEconomy: "30 MPG", cargo: "ft³", depreciation: 2000, maintenence: 1200}, 
    // https://carbuzz.com/cars/toyota/rav4/specs-and-trims
    {brandName: "Range Rover", carName: "Evoque", releaseYear: 2021, cost: 43000, bodyType: "SUV", driveTrain: "All Wheel Drive", engine: "Turbo", fuelEconomy: "24 MPG", cargo: "ft³", depreciation: 2000, maintenence: 1200},
    // https://carbuzz.com/cars/land-rover/range-rover-evoque/2021
    {brandName: "Nissan", carName: "Rogue", releaseYear: 2021, cost: 26000, bodyType: "SUV", driveTrain: "All Whell Drive", engine: "V8", fuelEconomy: "29 MPG", cargo: "ft³", depreciation: 2000, maintenence: 1200}, 
    // https://carbuzz.com/cars/nissan/rogue/2021-nissan-rogue-s
    {brandName: "Mitsubishi", carName: "Outlander Sport", releaseYear: 2022, cost: 24745, bodyType: "SUV", driveTrain: "All Whell Drive", engine: "4-Cylinder", fuelEconomy: "27 MPG", cargo: "ft³", depreciation: 2000, maintenence: 1200},
    // https://carbuzz.com/cars/mitsubishi/outlander-sport
    {brandName: "Range Rover", carName: "Velar", releaseYear: 2021, cost: 66900, bodyType: "SUV", driveTrain: "All Whell Drive", engine: "4-Cylinder", fuelEconomy: "23 MPG", cargo: "ft³", depreciation: 2000, maintenence: 1200},
    // https://carbuzz.com/cars/land-rover/range-rover-velar/2021/specs-and-trims
    {brandName: "Mazda", carName: "CX5", releaseYear: 2022, cost: 32500, bodyType: "SUV", driveTrain: "All Whell Drive", engine: "4-Cylinder", fuelEconomy: "24 MPG", cargo: "8.3 ft³", depreciation: 2000, maintenence: 1200},
    // https://carbuzz.com/cars/mazda/cx-5
    {brandName: "Kia", carName: "K5", releaseYear: 2023, cost: 28000, bodyType: "Sedan", driveTrain: "Front Wheel Drive", engine: "4-Cylinder", fuelEconomy: "28 MPG", cargo: "16 ft³", depreciation: 2000, maintenence: 1200},
    // https://carbuzz.com/cars/kia/k5
    {brandName: "Kia", carName: "Forte", releaseYear: 2023, cost: 22000, bodyType: "SUV", driveTrain: "Front Wheel Drive", engine: "4-Cylinder", fuelEconomy: "33 MPG", cargo: "15.3 ft³", depreciation: 2000, maintenence: 1200},
    // https://carbuzz.com/cars/kia/forte
    {brandName: "Jaguar", carName: "F-Pace", releaseYear: 2023, cost: 58500, bodyType: "SUV", driveTrain: "All Whell Drive", engine: "4-Cylinder", fuelEconomy: "something", cargo: "22 ft³", depreciation: 2000, maintenence: 1200},
    // https://carbuzz.com/search?q=jaguar+f-pace
    {brandName: "Jaguar", carName: "Fx", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "All Whell Drive", engine: "V8", fuelEconomy: "something", cargo: "ft³", depreciation: 2000, maintenence: 1200},
    // 
    {brandName: "Honda", carName: "HR-V", releaseYear: 2023, cost: 26500, bodyType: "SUV", driveTrain: "All Whell Drive", engine: "4-Cylinder", fuelEconomy: "29 MPG", cargo: "24.4 ft³", depreciation: 2000, maintenence: 1200},
    // https://carbuzz.com/cars/honda/hr-v/2023
    {brandName: "Lexus", carName: "Rx 350", releaseYear: 2023, cost: 33000, bodyType: "SUV", driveTrain: "All Whell Drive", engine: "4-Cylinder", fuelEconomy: "24 MPG", cargo: "ft³", depreciation: 2000, maintenence: 1200},
    // https://carbuzz.com/cars/lexus/rx/2023-lexus-rx-350
    {brandName: "Kia", carName: "Sorento", releaseYear: 2023, cost: 37000, bodyType: "SUV", driveTrain: "All Whell Drive", engine: "4-Cylinder", fuelEconomy: "26 MPG", cargo: "ft³", depreciation: 2000, maintenence: 1200},
    // https://carbuzz.com/cars/kia/sorento/2023
    {brandName: "Hyundai", carName: "Tucson", releaseYear: 2023, cost: 32000, bodyType: "SUV", driveTrain: "All Whell Drive", engine: "4-Cylinder", fuelEconomy: "30 MPG", cargo: "ft³", depreciation: 2000, maintenence: 1200},
    // https://carbuzz.com/cars/hyundai/tucson
    {brandName: "GMC", carName: "Terrain", releaseYear: 2023, cost: 34000, bodyType: "SUV", driveTrain: "All Whell Drive", engine: "4-Cylinder", fuelEconomy: "26 MPG", cargo: "ft³", depreciation: 2000, maintenence: 1200},
    // https://carbuzz.com/cars/gmc/terrain
    {brandName: "Volvo", carName: "XC 40", releaseYear: 2023, cost: 40000, bodyType: "SUV", driveTrain: "All Whell Drive", engine: "4-Cylinder", fuelEconomy: "28 MPG", cargo: "ft³", depreciation: 2000, maintenence: 1200},
    // https://carbuzz.com/cars/volvo/xc40/2023
    {brandName: "Dodge", carName: "Dart Limited", releaseYear: 2016, cost: 24000, bodyType: "Sedan", driveTrain: "Front Wheel Drive", engine: "4-Cylinder", fuelEconomy: "29 MPG", cargo: "13.1 ft³", depreciation: 2000, maintenence: 1200},
    // https://carbuzz.com/cars/dodge/dart/2016-dodge-dart-limited
    {brandName: "Dodge", carName: "Charger", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "ft³", depreciation: 2000, maintenence: 1200},
    // 
    {brandName: "Chrysler", carName: "Envision", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "ft³", depreciation: 2000, maintenence: 1200},
    {brandName: "Hyundai", carName: "Elantra", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "ft³", depreciation: 2000, maintenence: 1200},
    {brandName: "Audi", carName: "Q5", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "ft³", depreciation: 2000, maintenence: 1200},
    {brandName: "Audi", carName: "A5", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "ft³", depreciation: 2000, maintenence: 1200},
    {brandName: "Audi", carName: "S5", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "ft³", depreciation: 2000, maintenence: 1200},
    {brandName: "Infiniti", carName: "Q70", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
    {brandName: "BMW", carName: "530i", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
    {brandName: "Mercedes", carName: "CLA 250", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
    {brandName: "Mercedes", carName: "E300", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
    {brandName: "Alfa Romeo", carName: "Guila Q4", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
    {brandName: "Alfa Romeo", carName: "Stelvio Q4", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
    {brandName: "Acura", carName: "ILX", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
    {brandName: "BMW", carName: "650i", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
    {brandName: "Lincoln", carName: "MKC", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
    {brandName: "Audi", carName: "SQS", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
    {brandName: "Maserati", carName: "Q4 Levante", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
    {brandName: "BMW", carName: "XDrive 35i", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
    {brandName: "Audi", carName: "IRS 3", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
    {brandName: "Subaru", carName: "Outback", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
    {brandName: "Porshe", carName: "Macon", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
    {brandName: "Genesis", carName: "GV70", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200}
];

export default ALLCARS;

/*
CREATE TABLE brand (
	brand_id					SERIAL PRIMARY KEY,
  brandName					VARCHAR(100) NOT NULL,
  logo_address			VARCHAR(150) NOT NULL
);

CREATE TABLE car (
  car_id						SERIAL PRIMARY KEY,
  brandName					    VARCAHR(100) NOT NULL,
  carName						VARCHAR(100) NOT NULL,	
  releaseYear				    INT,
  cost							INT,
  bodyType					    VARCHAR(10),
  driveTrain				    VARCHAR(100),
  engine						VARCHAR(10),
  fuelEconomy				    VARCHAR(10),
  cargo							VARCHAR(10),
  depreciation			        INT,
  maintenence				    INT
);

CREATE TABLE car_images (
  car_id						INT PRIMARY KEY,
  thumbnail					    VARCHAR(150) NOT NULL,
  front							VARCHAR(150) NOT NULL,
  right_side				    VARCHAR(150) NOT NULL,
  left_side					    VARCHAR(150) NOT NULL,
  back						   	VARCHAR(150) NOT NULL
);
*/

