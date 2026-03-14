import React from 'react';
import Nav from './nav';
import headerImage from './images/80-NeutralBoho-Paper11.jpg';

const Header = (props) => {
    return (
        <div className="relative bg-white">
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-gray-900 focus:shadow"
            >
                Skip to main content
            </a>
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
                    <main className="mx-auto max-w-7xl px-6 sm:mt-6 sm:px-6 md:my-12 lg:my-15 lg:px-10">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight text-gray-900 font-extrabold sm:text-5xl md:text-6xl">
                                <span className={`inline-block ${props.colorOne} xl:inline`}>{props.titleOne}</span>{' '}
                                <span className={`inline-block ${props.colorTwo} xl:inline`}>{props.titleTwo}</span>
                            </h1>
                            <div className="mt-3 pr-5 text-base text-gray-500 sm:mt-5 sm:mx-auto sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-auto">
                                {props.quote ? (
                                    <p className="md:mt-8">
                                        {props.quote}
                                    </p>
                                ) : null}
                                {props.quoteTwo ? (
                                    <p className="mt-2">
                                        {props.quoteTwo}
                                    </p>
                                ) : null}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    className="h-10 w-full object-cover sm:h-10 md:h-20 lg:w-full lg:h-full"
                    src={headerImage}
                    alt="" />
            </div>
            <div className="">
                <div className="border-t border-gray-200" />
            </div>
        </div>
    );
}

export default Header;
