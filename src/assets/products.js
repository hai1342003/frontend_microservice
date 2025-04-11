import laptop1 from "../assets/images/laptop1.png";
import laptop2 from "../assets/images/laptop2.png";
import laptop3 from "../assets/images/laptop3.png";
import laptop4 from "../assets/images/laptop4.png";

const products = [
    {
        _id: '1',
        name: "Laptop ASUS Vivobook 14 OLED A1405VA-KM257W",
        price: 900,
        image: laptop1,
        bestSeller: true,
        category: "Asus",
        description: "Laptop ASUS Vivobook 14 OLED A1405VA-KM257W",
        ram: ["8GB", "16GB", "32GB"],
    },
    {
        _id: '2',
        name: "Laptop ASUS TUF Gaming A15 FA506NCR-HN047W",
        price: 1000,
        image: laptop2,
        bestSeller: false,
        category: "Asus",
        description: "Laptop ASUS TUF Gaming A15 FA506NCR-HN047W",
        ram: ["8GB", "16GB", "32GB"],
    },
    {
        _id: '3',
        name: "Laptop Acer Aspire 3 A314-42P-R3B3 NX.KSFSV.001",
        price: 500,
        image: laptop3,
        bestSeller: true,
        category: "Acer",
        description: "Laptop Acer Aspire 3 A314-42P-R3B3 NX.KSFSV.001",
        ram: ["8GB", "16GB", "32GB"],

    },
    {
        _id: '4',
        name: "Laptop MSI Katana 15 B13UDXK-2270VN V2",
        price: 1100,
        image: laptop4,
        bestSeller: false,
        category: "MSI",
        description: "Laptop MSI Katana 15 B13UDXK-2270VN V2",
        ram: ["8GB", "16GB", "32GB"],
    },
];

export default products;
