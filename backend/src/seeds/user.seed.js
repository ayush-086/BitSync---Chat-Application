import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "KanikaSinghal@example.com",
    fullName: "Kanika Singhal Mam",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "ShwetaChaku@example.com",
    fullName: "Shweta Chaku Mam",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "Anjali@example.com",
    fullName: "Anjali",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    email: "Sophia@example.com",
    fullName: "Sophia",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "Ayushi@example.com",
    fullName: "Ayushi",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  
  {
    email: "Maaria@example.com",
    fullName: "Maaria",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },

  // Male Users
  {
    email: "devanksharma@gmail.com  ",
    fullName: "Devank Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "Abhishek Yadav@example.com",
    fullName: "Abhishek Yadav",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    email: "MontyYadav@gmail.com    ",
    fullName: "Vivek Yadav",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "Ayush@example.com",
    fullName: "Ayush Kumar",
    password: "123456",
    profilePic: "https://res.cloudinary.com/dteliarbt/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1741267749/WhatsApp_Image_2025-03-06_at_18.35.05_5cb36528_tgpl8i.jpg",
  },
  {
    email: "Vijai Singh@example.com",
    fullName: "Vijay Singh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();