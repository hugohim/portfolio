import { Description } from '@radix-ui/react-toast';
import { Code2, Users, Lightbulb, PcCase } from 'lucide-react';

const highlights =  [
        {
        icon: Code2,
        title: "Code quality",
        description: "I value code that is readable, scalable and mantainable"
        },

        {
                icon: Users,
                title: "Team member",
                description: "With hands-on experience in Scrum and collaborative development, I value leveraging each team member’s strengths and am comfortable working in such environments"

        },
        {
                icon: Lightbulb,
                title: "Technical skills",
                description: "Staying ahead with the latest technologies and always looking to improve",
        },
        {
            icon: PcCase,
            title: "Linux",
            description: "I use Linux as my daily driver, I admire its customizability and and the level of control it provides",

        }
]



export const About = () => {

    return(
        <section id='about' className='py-32 relative overflow-hidden'>
            <div className='container lg:flex gap-8 mx-auto px-6 relative z-10'>
                    <div className='flex-1 space-y-8 my-6 w-400'>
                    <span className='text-secondary-foreground text-sm tracking-wider uppercase'>About me</span>
                    {/* Left column */}
                    <div>
                    </div>
                    <h2 className='text-4xl font-sans font-bold text-secondary-foreground'>
                        Building the future,
                        <span className='text-white font-serif italic font-semibold'> eager to learn and improve</span>
                    </h2>
                    <div className='space-y-4 flex-1 text-muted-foreground animate-fade-in animation-delay-200'>
                        <p>
                            I'm 22 years old with a big passion for tech and software. My journey started when attending 
                            attending software engineering at Stockholm University, building a fundational understanding and a wide
                            range of concepts within the computer science area. Now I have graduated the bachelor and focused on improving
                            my tech stack and adopting modern frameworks to create full functional apps.
                            
                        </p>
              
                            <p>
                                University gave me a deep understanding of programming principles and the ins and outs of Java, while personal projects
                                and real-world experience have expanded my skills in JavaScript, React, backend development, and AWS.
                                I enjoy working across the stack and understanding how systems scale for real users.
                            </p>
                            <p>
                                When I'm not coding, I enjoy staying active through gym training and playing padel.
                                I'm a calm and collaborative person who enjoys working with others toward shared goals.
                                I thrive in open and professional environments where knowledge is shared, ideas are discussed,
                                and continuous learning is encouraged.
                            </p>
                    </div>

                </div>
                    {/* Highlights */}
                    <div className='grid grid-cols-2 gap-6 flex-1 mt-20'>
                        {highlights.map((item, idx ) => (
                           <div className='glass p-6 rounded-3xl group animate-fade-in '>
                            <div className='bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 hover:bg-primary/20'>
                                <item.icon className='text-primary w-6 h-6'/>
                            </div>
                            <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
                            <p className='text-muted-foreground'>{item.description}</p>
                           </div> 
                        ))}
                    </div>
            </div>


        </section>
        )
        }