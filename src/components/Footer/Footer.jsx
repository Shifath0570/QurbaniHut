import Image from "next/image";
import NavImage from "../../../public/asset/QurbaniHatt.png"

const Footer = () => {
    return (
        <footer className="bg-green-200 py-10 mt-10">
            <div className="flex justify-between items-center py-10 container mx-auto">
                <div className="footer-col">
                    <Image src={NavImage} alt="nav_Icon" height={40} width={50}></Image>
                    {/* <h2 className="logo">QurbaniHat</h2> */}
                    <p>Qurbani Made Easy. Trusted platform for buying and managing your Qurbani animals.</p>
                </div>

                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Cows</a></li>
                        <li><a href="#">Goats</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Social Links</h3>
                    <div className="flex flex-col">
                        <a href="#">🌐 Facebook</a>
                        <a href="#">📸 Instagram</a>
                        <a href="#">▶️ YouTube</a>
                        <a href="#">💬 WhatsApp</a>
                    </div>
                </div>

                <div className="footer-col">
                    <h3>Contact</h3>
                    <p>📍 Chattogram, Bangladesh</p>
                    <p>📞 +880 1234-567890</p>
                    <p>📧 support@qurbanihat.com</p>
                </div>

            </div>


            <div className="text-center">
                <p>© 2026 QurbaniHat. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;