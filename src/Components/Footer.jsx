import React from 'react'
import {FaDiscord, FaGithub, FaTwitch, FaTwitter} from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-violet-300 w-full ">
            <div className="container mx-auto flex items-center justify-between text-blue-200 text-sm px-6 py-4">
                <p>
                    © Nova 2024. All rights reserved
                </p>
                <div className="flex items-center gap-4 ">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.discord.com"><FaDiscord className="size-4 hover:text-white" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com"><FaTwitter className="size-4 hover:text-white" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.github.com"><FaGithub className="size-4 hover:text-white" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.twitch.com"><FaTwitch className="size-4 hover:text-white" /></a>
                </div>
                {/*<p>this is inline</p>*/}
            <a className="hover:underline" href="#privacy-policy">Privacy Policy</a>
            </div>
        </div>
    )
}
export default Footer
