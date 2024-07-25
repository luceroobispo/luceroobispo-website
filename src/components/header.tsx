import Image from 'next/image';

function Header() {
    return (
        <header className="font-['Open_Sans']">
            {/* Title and main image */}
            <div className="bg-pink_dark text-white py-16 px-10">
                <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start pt-16">
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl font-bold">Hello, I’m Lucero Obispo</h1>
                        <p className="text-base md:text-lg mt-4">Software engineering student with a love for mobile development. I’m into hackathons, competitive programming, and volunteering to boost tech education. Always excited to connect and collaborate!</p>
                    </div>
                    <div className="hidden md:block md:w-1/2"></div>
                </div>
            </div>

            {/* Quick links */}
            <div className="bg-yellow_light text-black py-8 md:py-3 px-10">
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    <a href="https://github.com/luceroobispo" className="w-full md:w-1/2 flex items-center justify-center mb-4 md:mb-0 hover:text-pink_dark" target="_blank" rel="noopener noreferrer">
                        <Image src={"/images/github-icon.png"} width={40} height={40} alt="GitHub Icon" />
                        <p className="text-lg ml-4">https://github.com/luceroobispo</p>
                    </a>
                    <a href="https://www.linkedin.com/in/luceroobispo" className="w-full md:w-1/2 flex items-center justify-center hover:text-pink_dark" target="_blank" rel="noopener noreferrer">
                        <Image src={"/images/linkedin-icon.png"} width={40} height={40} alt="LinkedIn Icon" />
                        <p className="text-lg ml-4">https://www.linkedin.com/in/luceroobispo</p>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;