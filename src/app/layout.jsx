import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer"


export const metadata = {
  title: "HAYYU Skin Clinic",
  description: "HAYYU Skin Clinic, Surabaya | Sidoarjo | Malang", 
  icons:"/img/favicon.ico"
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
      <link rel="icon" href="./img/favicon.ico" sizes="10px" />
      </head>
      <body>
        <Navbar />
        
        {children} 
                 
        <Footer/> 
        
        </body>
    </html>
  );
}
