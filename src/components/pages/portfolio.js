import React from 'react'
import Header from '../header';
import Footer from '../footer';
import firstFriday from '../images/FIRSTFRIDAY2.png'
import bluegrass from '../images/SunriseBluegrass.png'
import chamber from '../images/chamber-ad.png'
import murphy from '../images/Murphy-Fam-Xmas.png'
import WebPortfolio from '../portfolio';
import beSeated from '../images/web/be-seated.png'
import codeQuiz from '../images/web/code-quiz.png'
import fitnessTracker from '../images/web/fitness-tracker.png'
import notetaker from '../images/web/Notetaker.png'
import pourDecisions from '../images/web/pour-decisions.png'
import weather from '../images/web/weather-dashboard.png'

function PrintDesigns(props) {
    return (
        <div className="print-design mb-20 md:mb-1 md:col-span-1">
            <img alt={props.alt} src={props.src} />
        </div>
    );
}

export default function Portfolio() {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Header
                titleOne="Jocelyn's"
                colorOne="text-rem-tan"
                titleTwo="Portfolio"
                quote='"I believe she has such a positive impact in every environment she is in. Jocelyn will go above and beyond to ensure she provides the best quality work!"'
            />
            <div className="my-3 container mx-auto">
                <h1 className="font-thin text-4xl ml-5 mt-5">Developer Portfolio</h1>
                <div className="md: grid p-2 lg:grid-cols-3 md:grid-cols-1 mx-auto place-items-center">
                    <WebPortfolio
                        preview={beSeated}
                        alt="preview of be seated app"
                        website="https://beseated.herokuapp.com/"
                        title="Be|Seated"
                        githubRepo="https://github.com/jocelynrem/project-2"
                        text1="Role: UI/UX lead, logo design"
                    />
                    <WebPortfolio
                        preview={pourDecisions}
                        alt="preview of pour decisions app"
                        website="https://thompsonel11.github.io/Project_1/"
                        title="Pour Decisions"
                        githubRepo="https://github.com/thompsonel11/Project_1"
                        text1="Role: UI/UX lead, API, & Javascript"
                    />
                    <WebPortfolio
                        preview={fitnessTracker}
                        alt="preview of fitness tracker app with graph results"
                        website="https://workout-tracker-jremington.herokuapp.com/stats"
                        title="Fitness Tracker"
                        githubRepo="https://github.com/jocelynrem/workoutTracker"
                        text1="Role: Backend using MongoDB"
                    />

                    <WebPortfolio
                        preview={codeQuiz}
                        alt="preview of code quiz app"
                        website="https://jocelynrem.github.io/Code-Quiz/"
                        title="Code Quiz"
                        githubRepo="https://github.com/jocelynrem/Code-Quiz"
                        text1="Role: UI/UX, Javascript"
                    />
                    <WebPortfolio
                        preview={weather}
                        alt="preview of weather app"
                        website="https://jocelynrem.github.io/weather-dahboard/"
                        title="Weather Dashboard"
                        githubRepo="https://github.com/jocelynrem/weather-dahboard"
                        text1="Role: Design, API, & search functionality"
                    />
                    <WebPortfolio
                        preview={notetaker}
                        alt="preview of notetaker app"
                        website="https://calm-fortress-51934.herokuapp.com/notes"
                        title="Notetaker"
                        githubRepo="https://github.com/jocelynrem/note_taker"
                        text1="Role: Backend- Express.js & JSON files"
                    />

                </div>
            </div>
            <div className="my-3 container mx-auto">
                <h1 className="font-thin text-4xl ml-5 mt-5">Print Portfolio</h1>
                <div className="grid md:pb-16 p-2 md:grid-cols-4 md:justify-evenly mx-auto place-items-center">
                    <PrintDesigns alt="first friday logo" src={firstFriday} />
                    <PrintDesigns alt="poster for bluegrass concert" src={bluegrass} />
                    <PrintDesigns alt="ad for charter school" src={chamber} />
                    <PrintDesigns alt="poster for Murphy Family Christmas concert" src={murphy} />
                </div>
            </div>
            <Footer />
        </div>
    )
}