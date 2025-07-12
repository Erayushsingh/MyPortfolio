import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
    Mail, 
    Phone, 
    MapPin, 
    Send, 
    User, 
    MessageSquare, 
    Github, 
    Linkedin, 
    Twitter,
    CheckCircle,
    AlertCircle
} from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "ayushsingh74340@gmail.com",
            href: "mailto:ayushsingh74340@gmail.com"
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+91 8808020794",
            href: "tel:+918808020794"
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Lucknow, India",
            href: "#"
        }
    ];

    const socialLinks = [
        {
            icon: Github,
            href: "https://github.com/Erayushsingh",
            label: "GitHub"
        },
        {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/ayush-singh-641871260/",
            label: "LinkedIn"
        },
        {
            icon: Twitter,
            href: "https://x.com/AyushSingh87881",
            label: "Twitter"
        }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ""
            });
        }
    };

    const validate = () => {
        let errors = {};
        if (!formData.name.trim()) errors.name = "Name is required";
        if (!formData.email.trim()) errors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
        }
        if (!formData.message.trim()) errors.message = "Message is required";
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validateErrors = validate();
        if (Object.keys(validateErrors).length > 0) {
            setErrors(validateErrors);
        } else {
            setErrors({});
            setIsSending(true);

            emailjs.send(
                "service_zvzcloo",
                "template_puy6tte",
                formData,
                "KrVsZn7vWsPRiJrOS"
            ).then((response) => {
                toast.success("Message sent successfully! I'll get back to you soon.", {
                    icon: <CheckCircle className="text-green-500" />
                });
                setFormData({ name: "", email: "", message: "" });
            }).catch((error) => {
                console.log("FAILED...", error);
                toast.error("Failed to send message. Please try again later.", {
                    icon: <AlertCircle className="text-red-500" />
                });
            }).finally(() => setIsSending(false));
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <section id="contact" className="py-8 md:py-12 lg:py-16 relative overflow-hidden">
            <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-40 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 md:mb-12 lg:mb-16"
                >
                    <div className="flex items-center justify-center space-x-3 mb-6">
                        <Mail className="text-pink-500" size={32} />
                        <h2 className="text-5xl md:text-6xl font-bold">
                            <span className="text-gradient">Let's Connect</span>
                        </h2>
                    </div>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Have a project in mind or want to collaborate? I'd love to hear from you!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <motion.div variants={itemVariants}>
                            <h3 className="text-3xl font-bold text-white mb-6">
                                Get in Touch
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                I'm always open to discussing new opportunities, interesting projects, 
                                or just having a chat about technology and development.
                            </p>
                        </motion.div>

                        {/* Contact Info Cards */}
                        <motion.div variants={itemVariants} className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={index}
                                    href={info.href}
                                    whileHover={{ scale: 1.02, x: 10 }}
                                    className="flex items-center space-x-4 p-4 glass rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 group"
                                >
                                    <div className="p-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                        <info.icon size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">{info.label}</p>
                                        <p className="text-white font-medium">{info.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* Social Links */}
                        <motion.div variants={itemVariants}>
                            <h4 className="text-xl font-semibold text-white mb-4">
                                Follow Me
                            </h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-3 glass rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 group"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="glass p-8 rounded-2xl border border-white/10"
                    >
                        <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Name Input */}
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-white font-medium flex items-center space-x-2">
                                        <User size={16} />
                                        <span>Name</span>
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        placeholder="Your Name"
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                                            errors.name 
                                                ? 'border-red-500 focus:ring-red-500/50' 
                                                : 'border-white/20 focus:border-blue-500 focus:ring-blue-500/50'
                                        }`}
                                    />
                                    {errors.name && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-400 text-sm flex items-center space-x-1"
                                        >
                                            <AlertCircle size={16} />
                                            <span>{errors.name}</span>
                                        </motion.p>
                                    )}
                                </div>

                                {/* Email Input */}
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-white font-medium flex items-center space-x-2">
                                        <Mail size={16} />
                                        <span>Email</span>
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        placeholder="your.email@example.com"
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                                            errors.email 
                                                ? 'border-red-500 focus:ring-red-500/50' 
                                                : 'border-white/20 focus:border-blue-500 focus:ring-blue-500/50'
                                        }`}
                                    />
                                    {errors.email && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-400 text-sm flex items-center space-x-1"
                                        >
                                            <AlertCircle size={16} />
                                            <span>{errors.email}</span>
                                        </motion.p>
                                    )}
                                </div>
                            </div>

                            {/* Message Input */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-white font-medium flex items-center space-x-2">
                                    <MessageSquare size={16} />
                                    <span>Message</span>
                                </label>
                                <motion.textarea
                                    whileFocus={{ scale: 1.02 }}
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    placeholder="Tell me about your project or just say hello!"
                                    onChange={handleChange}
                                    rows="5"
                                    className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                                        errors.message 
                                            ? 'border-red-500 focus:ring-red-500/50' 
                                            : 'border-white/20 focus:border-blue-500 focus:ring-blue-500/50'
                                    }`}
                                />
                                {errors.message && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-400 text-sm flex items-center space-x-1"
                                    >
                                        <AlertCircle size={16} />
                                        <span>{errors.message}</span>
                                    </motion.p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={isSending}
                                whileHover={{ scale: isSending ? 1 : 1.02 }}
                                whileTap={{ scale: isSending ? 1 : 0.98 }}
                                className={`w-full py-4 px-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                                    isSending 
                                        ? 'opacity-70 cursor-not-allowed' 
                                        : 'hover:from-pink-700 hover:to-purple-700 hover:shadow-lg'
                                }`}
                            >
                                {isSending ? (
                                    <>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full"
                                        />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </motion.button>
                        </motion.form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;