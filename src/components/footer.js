//src/components/footer.js
import { TiSocialGithubCircular, TiSocialLinkedinCircular } from "react-icons/ti";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="bg-rem-gray px-6 py-4">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-center gap-3 text-center lg:flex-row lg:text-left">
          <p className="text-base leading-7 text-gray-700">
            Interested in accessible digital content, inclusive design, or accessibility-focused collaboration?
          </p>

          <div className="flex items-center justify-center">
            <a href="mailto:jocelynrem@gmail.com" aria-label="Email Jocelyn Remington">
              <MdEmail className="h-8 w-8 inline-block mx-3 text-rem-blue" />
            </a>
            <a href="https://www.linkedin.com/in/jocelynrem/" target="_blank" rel="noopener noreferrer" aria-label="Visit Jocelyn Remington on LinkedIn. Opens in a new tab.">
              <TiSocialLinkedinCircular className="h-10 w-10 inline-block mx-3 text-rem-blue" />
            </a>
            <a href="https://github.com/jocelynrem" target="_blank" rel="noopener noreferrer" aria-label="Visit Jocelyn Remington on GitHub. Opens in a new tab.">
              <TiSocialGithubCircular className="h-10 w-10 inline-block mx-3 text-rem-blue" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
