import Link from 'next/link';
import { TextHoverEffect } from "@/components/ui/text-hover-effect"
import AnimationContainer from '../global/animation-container';
import Image from 'next/image';
import { NAV_LINKS } from '@/utils';

const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 md:pb-0 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">

            <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div>

            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">

                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                        <div className="flex items-start">
                            <Image src={'/assets/logo.png'} alt="Quick Rank Logo" width={200} height={200} />
                        </div>
                        <p className="text-muted-foreground mt-4 text-sm text-start">
                            The Only Tool You Need to Dominate Online Content.
                        </p>
                        <span className="mt-4 text-neutral-200 text-sm flex items-center">
                            Made by <Link href="#" className="font-semibold ml-1">David</Link>
                        </span>
                    </div>
                </AnimationContainer>

                <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <AnimationContainer delay={0.2}>
                            <div className="">
                                <h3 className="text-base font-medium text-white">
                                    Quick Links
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    {NAV_LINKS.map((link) => (
                                        <li className="mt-2" key={link.title}>
                                            <Link href={link.href} className="hover:text-foreground transition-all duration-300">
                                                {link.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimationContainer>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <AnimationContainer delay={0.5}>
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-white">
                                    Company
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="">
                                        <Link href="/" className="hover:text-foreground transition-all duration-300">
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="#" className="hover:text-foreground transition-all duration-300">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="#" className="hover:text-foreground transition-all duration-300">
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                    </div>
                </div>

            </div>

            <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
                <AnimationContainer delay={0.6}>
                    <p className="text-sm text-muted-foreground mt-8 md:mt-0">
                        &copy; {new Date().getFullYear()} Quick Rank AI. All rights reserved.
                    </p>
                </AnimationContainer>
            </div>

            <div className="h-[20rem] lg:h-[20rem] hidden md:flex items-center justify-center">
                <TextHoverEffect text="QUICK RANK" />
            </div>
        </footer>
    )
}

export default Footer
