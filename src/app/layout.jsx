import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer"



export const metadata = {
  title: "HAYYU Skin Clinic",
  description: "HAYYU Skin Clinic, Surabaya | Sidoarjo | Malang",  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Navbar />
        
        {children} 
                 
        <Footer className=""/> 
        
        </body>
    </html>
  );
}
