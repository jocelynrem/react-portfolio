import React, { useState } from 'react'
import Nav from './nav'
import headerImage from './images/80-NeutralBoho-Paper11.jpg'
import { XIcon } from '@heroicons/react/solid' // Update the import for Heroicons v1

const Header = (props) => {
    const [isBannerVisible, setIsBannerVisible] = useState(true);

    const handleDismiss = () => {
        setIsBannerVisible(false);
    };

    return (
        <div className="relative bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-5 md:pb-8 lg:max-w-2xl lg:w-full lg:pb-10">
                    <svg
                        className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true">
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                    <Nav />
                    {/* Banner */}
                    {isBannerVisible && (
                        <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
                            <div
                                className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                                aria-hidden="true"
                            >
                                <div
                                    className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
                                    style={{
                                        clipPath:
                                            'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                                    }}
                                />
                            </div>
                            <div
                                className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                                aria-hidden="true"
                            >
                                <div
                                    className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
                                    style={{
                                        clipPath:
                                            'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                                    }}
                                />
                            </div>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                                <p className="text-sm leading-6 text-gray-900">
                                    <strong className="font-semibold">New Passion Project</strong>
                                    <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                                        <circle cx={1} cy={1} r={1} />
                                    </svg>
                                    I'm working on a new project to help teachers organize classroom libraries. Check it out at{' '}
                                    <a href="https://booknav-sepia.vercel.app/" className="font-semibold text-blue-600 hover:underline">
                                        https://booknav-sepia.vercel.app/
                                    </a>.
                                </p>
                                <div className="flex flex-1 justify-end">
                                    <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]" onClick={handleDismiss}>
                                        <span className="sr-only">Dismiss</span>
                                        <XIcon className="h-5 w-5 text-gray-900" aria-hidden="true" /> {/* Update the icon */}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    <main className="mx-auto max-w-7xl px-6 sm:mt-6 sm:px-6 md:my-12 lg:my-15 lg:px-10">
                        <div className="sm:text-center lg:text-left">
                            <div className="text-4xl tracking-tight text-gray-900 font-extrabold sm:text-5xl md:text-6xl">
                                <span className={`inline-block ${props.colorOne} xl:inline`}>{props.titleOne}</span>{' '}
                                <span className={`inline-block ${props.colorTwo} xl:inline`}>{props.titleTwo}</span>
                            </div>
                            <p className="mt-3 text-base text-gray-500 pr-5 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto">
                                <div className="md:mt-8">
                                    {props.quote}
                                </div>
                                <div className="mt-2">
                                    {props.quoteTwo}
                                </div>
                            </p>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    className="h-10 w-full object-cover sm:h-10 md:h-20 lg:w-full lg:h-full"
                    src={headerImage}
                    alt="boho rainbow pattern" />
            </div>
            <div className="">
                <div className="border-t border-gray-200" />
            </div>
        </div>
    )
}

export default Header;

