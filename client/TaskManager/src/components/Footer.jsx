import { FaLinkedin, FaGithub, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialLinks = [
    {
        icon: <FaLinkedin size={18} />,
        href: 'https://linkedin.com/in/divyanshu-vishwakarma',
        label: 'LinkedIn',
    },
    {
        icon: <FaGlobe size={18} />,
        href: 'https://portfolio-indol-chi-dj8bau2hvr.vercel.app',
        label: 'Portfolio',
    },
    {
        icon: <FaGithub size={18} />,
        href: 'https://github.com/Divyanshu11010',
        label: 'GitHub',
    },
    {
        icon: <FaEnvelope size={18} />,
        href: 'mailto:sv090999@gmail.com',
        label: 'Email',
    },
];

function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-slate-800 text-gray-300 py-4 px-6 text-sm"
        >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-2 lg:space-y-0">

                {/* Animated Text */}
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.03 }}
                    className="text-center lg:text-left transition duration-300"
                >
                    <motion.span
                        whileHover={{
                            color: '#ffffff',
                            textShadow: '0px 0px 6px rgba(255, 255, 255, 0.5)',
                        }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className="font-medium text-white"
                    >
                        Designed & Developed by Divyanshu V
                    </motion.span>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    className="flex space-x-4 justify-center lg:justify-end"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            aria-label={link.label}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition duration-300 transform hover:-translate-y-1"
                        >
                            {link.icon}
                        </a>
                    ))}
                </motion.div>

            </div>
        </motion.footer>
    );
}

export default Footer;