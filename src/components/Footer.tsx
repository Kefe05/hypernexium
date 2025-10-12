import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, Twitter, Github, Mail } from 'lucide-react'

export default function Footer() {
    return (
        <footer className='relative bg-slate-900 text-white'>
            

            <div className='relative z-10 max-w-7xl mx-auto px-6 py-16'>
                {/* Main Footer Content */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>

                    {/* Logo & Description */}
                    <div className='lg:col-span-1'>
                        <Link href="/" className='inline-block mb-6'>
                            <Image
                                src="/logo.png"
                                alt="Hyper Nexium Logo"
                                width={140}
                                height={45}
                                className="h-12 w-auto"
                            />
                        </Link>
                        <p className='text-gray-400 text-sm leading-relaxed mb-6'>
                            Powering smart enterprises beyond limits with innovative IT solutions and strategic consulting.
                        </p>

                        {/* Social Links */}
                        <div className='flex space-x-4'>
                            <Link href="#" className='text-gray-400 hover:text-brand-accent transition-colors'>
                                <Linkedin className='w-5 h-5' />
                            </Link>
                            <Link href="#" className='text-gray-400 hover:text-brand-accent transition-colors'>
                                <Twitter className='w-5 h-5' />
                            </Link>
                            <Link href="#" className='text-gray-400 hover:text-brand-accent transition-colors'>
                                <Github className='w-5 h-5' />
                            </Link>
                            <Link href="#" className='text-gray-400 hover:text-brand-accent transition-colors'>
                                <Mail className='w-5 h-5' />
                            </Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className='text-sm font-semibold text-gray-300 uppercase tracking-wider mb-6'>
                            Services
                        </h3>
                        <ul className='space-y-4'>
                            <li>
                                <Link href="/services" className='text-gray-400 hover:text-white transition-colors text-sm'>
                                    Cloud Infrastructure
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className='text-gray-400 hover:text-white transition-colors text-sm'>
                                    Cybersecurity
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className='text-gray-400 hover:text-white transition-colors text-sm'>
                                    Digital Transformation
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className='text-gray-400 hover:text-white transition-colors text-sm'>
                                    Enterprise Software
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className='text-sm font-semibold text-gray-300 uppercase tracking-wider mb-6'>
                            Company
                        </h3>
                        <ul className='space-y-4'>
                            <li>
                                <Link href="/about" className='text-gray-400 hover:text-white transition-colors text-sm'>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className='text-gray-400 hover:text-white transition-colors text-sm'>
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className='text-gray-400 hover:text-white transition-colors text-sm'>
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className='text-gray-400 hover:text-white transition-colors text-sm'>
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact CTA */}
                    <div>
                        <h3 className='text-sm font-semibold text-gray-300 uppercase tracking-wider mb-6'>
                            Ready to Transform?
                        </h3>
                        <p className='text-gray-400 text-sm mb-6 leading-relaxed'>
                            Connect with our experts today and discover how we can accelerate your digital transformation.
                        </p>
                        <Link
                            href="/contact"
                            className='inline-flex items-center px-6 py-3 bg-brand-accent hover:bg-brand-primary text-white rounded-full text-sm font-medium transition-colors'
                        >
                            Get Started
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='border-t border-gray-700 pt-8'>
                    <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
                        <div className='text-gray-500 text-sm'>
                            © 2025 Hyper Nexium Technologies. All Rights Reserved.
                        </div>

                        <div className='flex items-center space-x-6'>
                            <Link href="/privacy" className='text-gray-500 hover:text-gray-300 text-sm transition-colors'>
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className='text-gray-500 hover:text-gray-300 text-sm transition-colors'>
                                Terms of Service
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
