import cbdGift from "../assets/images/images1.jpeg";
import christmasBox from "../assets/images/img2.jpeg";
import medicineBox from "../assets/images/img4.jpeg";
import soapSleeve from "../assets/images/img3.jpeg";
import kraftSoapBox from "../assets/images/img4.jpeg";
import kraftSoapBox1 from "../assets/images/back1.jpeg";

// You can customize the images array if you want to show different thumbnails per product
const productData = [
  {
    title: "CBD Gift Boxes",
    description: "Perfect for gifting CBD products.",
    imageSrc: cbdGift,
    images: [cbdGift, christmasBox, medicineBox],
  },
  {
    title: "Christmas Favor Boxes",
    description: "Festive packaging for Christmas treats and favors.",
    imageSrc: christmasBox,
    images: [christmasBox, cbdGift, medicineBox],
  },
  {
    title: "Medicine Boxes",
    description: "Secure and organized packaging for medical products.",
    imageSrc: medicineBox,
    images: [medicineBox, cbdGift, christmasBox],
  },
  {
    title: "Soap Sleeve Packaging",
    description: "Elegant and minimal sleeves for handmade soaps.",
    imageSrc: soapSleeve,
    images: [soapSleeve, kraftSoapBox, kraftSoapBox1],
  },
  {
    title: "Kraft Soap Boxes",
    description: "Eco-friendly kraft boxes for artisanal soaps.",
    imageSrc: kraftSoapBox,
    images: [kraftSoapBox, kraftSoapBox1, soapSleeve],
  },
  {
    title: "Kraft Soap Boxes",
    description: "Durable kraft packaging ideal for soap bars.",
    imageSrc: kraftSoapBox1,
    images: [kraftSoapBox1, kraftSoapBox, soapSleeve],
  },
];

export default productData;
