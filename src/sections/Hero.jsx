import { Button } from "../components/Button"
import { ArrowRight, Download, Handshake, Check, Github, Linkedin } from 'lucide-react';

const skills = [
    "React",
    "React Native",
    "Java",
    "Javascript",
    "Typescript",
    "AWS",
    "Firebase",
    "Tailwind CSS",
    "Git",
    "GraphQL API",
    "SQL"
]

export const Hero = () => {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Hero Bg */}
        <div className="absolute inset-0">
      {/*       <img 
            src="/hero-bg.png"
            alt="Hero image"
            className="w-full h-full object-cover opacity-40" 
            />
            <div className="absolute b-100 inset-0 bg-gradient-to-b from-background/25 via-background/80 to-background"/>
 */}
            {/* Dots */}
            <div>
                {[...Array(40)].map((_, i) => (
                        <div 
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                               backgroundColor: "#20B2A6",
                               left: `${Math.random() * 100}%`,
                               top: `${Math.random() * 100}%`,
                               animation: `slow-drift ${10 + Math.random() * 10}s ease-in-out infinite`, 
                        }}
                        key={i}
                        />
                ))}
            </div>
        </div>
         
         {/* Content */}
         <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* Left column */} 
                <div className="flex flex-col gap-10 animate-fade-in animation-delay-300">

                    <div>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded full"/> 
                            Software Engineer • Bachelor in Computer Science
                        </span>
                    </div>
                {/* Title */}
                <div className="flex flex-col animate-fade-in">
                    <h1 className="text-7xl italic font-sans">
                        Hello, I'm 
                    </h1>
                        <h1 className="text-7xl font-bold glow-text italic text-primary font-sans">
                        Hugo Thim
                    </h1>
                </div>
                <p className="text-xl text-muted-foreground max-w-lg">
                        Hi, I'm a software engineer specialized in Java, React, Backend, Frontend and Javascript. I’m passionate about computers and building creative, thoughtful software.
                </p>
              
                {/* CTA */}
                 <div className="flex gap-4 animate-fade-in animation-delay-300">
                    <a href="#contact">
                        <Button size="lg"> 
                            Contact me 
                        <ArrowRight />
                        </Button>
                    </a>
{/*                     <button className=" group relative flex items-center inline-flex gap-4 bg-muted shadow-md shadow-primary rounded-full px-8 py-4 text-lg hover:bg-primary">
                        Download CV
                        <div className="relative w-5 h-7">
                            <Download 
                                className="absolute inset-0 
                                duration-700
                                transition-all
                                group-hover:opacity-0
                                group-hover:scale-75"  
                            />
                            <Handshake
                            className=" h-7 w-5
                            duration-700
                            absolute inset-0
                            opacity-0
                            scale-75
                            transition-all
                            group-hover:opacity-100
                            group-hover:scale-100
                            group-hover:animate-buttonCV"
                            />
                        </div>
                    </button> */}
                 </div>

                 {/* Socials */}
                 <div className="flex items-center gap-2 animate-fade-in animation-delay-400">
                    <span className="text-sm text-muted-foreground">Follow: </span>
                    {[
                        {icon: Github, href: "https://github.com/hugohim"},
                        {icon: Linkedin, href: "https://www.linkedin.com/in/hugo-thim-b677872ba/"},
                    ].map((social, idx) => (
                        <a 
                        key={idx}
                         href={social.href}
                         className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-400"
                         target="_blank"
                         >
                            {<social.icon className="w-5 h-5" />}
                        </a>
                    ))}
                 </div>

            </div>

            {/* Right column - Face image*/}
            <div className="relative animate-fade-in animation-delay-300">

                {/*Profile image */}
                <div className="relative max-w-md mx-auto">
                    <div className="absolute inset-0 
                        rounded-3xl bg-gradient-to-br 
                        from-primary/30 via-transparent 
                        to-primary/10 blur-2xl animate-pulse" />
                    <div className="relative glass rounded-3xl p-3 glow-border">
                        <img src="meAI.png" alt="Hugo Thim profile picture"
                        className="w-full aspect-[4/5] object-cover rounded-2xl "
                        /> 
                        {/* Floating badge */}
                        <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                                <span className="text-sm font-medium">Available for work</span>
                            </div>
                        </div>

                     </div>
                </div>
            </div>
        </div>

            {/* Skils  */}
            <div className="mt-50 self-center animate-fade-in animation-delay-600">
                <p className="text-md text-muted-foreground text-center mb-6">Technologies i work with:</p>
                <div className="relative overflow-hidden ">
                    <div className="flex animate-marquee">
                        {
                        [...skills, ...skills].map((skill, idx) => (
                            <div key={idx} className="flex-shrink-0 px-8 py-4">
                                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                            </div>
                        ))
                        
                        }
                    </div>
                </div>
            </div>


                        
         </div>
         
    </section>
    );
}