import { ArrowUpRight, Github } from 'lucide-react'

const projects = [
    {
        title: 'Stockupdater',
        description:
            'Automatically updates webshop inventory levels from a remote FTP server via the webshop API.',
        image: 'projects/awss3.png',
        tags: ['AWS', 'NodeJS', 'Javascript'],
        github: 'https://github.com/hugohim/StockUpdater-FTP-to-API-.git'
    },
    {
        title: 'Web game',
        description: 'Tetris inspired game built with javascript.',
        image: 'projects/tetris.png',
        tags: ['Javascript', 'Web-development'],
        link: 'https://hugohim.github.io/TetrisInspiredBridgeGame',
        github: 'https://github.com/hugohim/TetrisInspiredBridgeGame.git'
    }
]

const repmax = {
    title: 'Repmax - App store released app',
    description:
        'Built and shipped a workout tracking app with React Native, Expo and TypeScript, letting users log workouts, track progression and analyze training history. Designed the full architecture, including a PostgreSQL database on Supabase with row-level security on every table. Built the UI from scratch with NativeWind (Tailwind CSS) instead of pre-built component libraries.',
    image: 'projects/repmax.png',
    tags: ['React Native', 'Expo', 'Typescript', 'Supabase', 'NativeWind'],
    link: 'https://apps.apple.com/se/app/repmax-track-gym-sets/id6763502063',
    github: ''
}

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            <div className="container gap-8 mx-auto px-6 relative z-10">
                {/* Bg glows */}
                <div className="absolute right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-highlight/20 rounded-full blur-3xl" />
                <div className="container mx-auto px-6 relative z-10"></div>

                {/* Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Featured work
                    </span>
                    <h2 className="text-4xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
                        My projects
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A selection of my own coding projects, ranging from
                        university coursework to short-term client work and
                        self-driven projects where I explore new technologies.
                    </p>
                </div>

                {/* Projects grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* left col */}
                    <div className="items-start ">
                        {projects.map((project, idx) => (
                            <div
                                key={idx}
                                className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 mb-8"
                                style={{
                                    animationDelay: `${(idx + 1) * 100}ms`
                                }}
                            >
                                {/* Image */}
                                <div className="relative overflow-hidden aspect-video">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div
                                        className="absolute inset-0
                                        bg-gradient-to-t from-card via-card/50
                                        to-transparent opacity-60"
                                    />
                                    {/* Overlay Links */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {project.link &&
                                            project.link !== '#' && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                                >
                                                    <ArrowUpRight className="w-5 h-5" />
                                                </a>
                                            )}
                                        {project.github &&
                                            project.github !== '#' && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                                >
                                                    <Github className="w-5 h-5" />
                                                </a>
                                            )}
                                    </div>
                                </div>

                                {/* Contents */}
                                <div className="p-6 space-y-4">
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <ArrowUpRight
                                            className="w-5 h-5
                                                        text-muted-foreground group-hover:text-primary
                                                        group-hover:translate-x-1
                                                        group-hover:-translate-y-1 transition-all"
                                        />
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        {project.description}
                                    </p>
                                    <div className="flex gap-2">
                                        {project.tags.map((tag, tagIdx) => (
                                            <span
                                                key={tagIdx}
                                                className="px-4 py-1.5 rounded-full bg-surface text-sm border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-400"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right col */}
                    <div
                        className="group glass rounded-2xl overflow-hidden animate-fade-in self-start"
                        style={{ animationDelay: `${4 * 100}ms` }}
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden ">
                            <img
                                src={repmax.image}
                                alt={repmax.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div
                                className="absolute inset-0
                                bg-gradient-to-t from-card via-card/50
                                to-transparent opacity-60"
                            />
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a
                                    href={repmax.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                >
                                    <ArrowUpRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                        {/* Contents */}
                        <div className="p-6 space-y-4 ">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                    {repmax.title}
                                </h3>
                                <ArrowUpRight
                                    className="w-5 h-5
                                        text-muted-foreground group-hover:text-primary
                                        group-hover:translate-x-1
                                        group-hover:-translate-y-1 transition-all"
                                />
                            </div>
                            <p className="text-muted-foreground text-sm">
                                {repmax.description}
                            </p>

                            <div className="flex flex-wrap gap-2 ">
                                {repmax.tags.map((tag, tagIdx) => (
                                    <span
                                        key={tagIdx}
                                        className="px-4 py-1.5 rounded-full bg-surface text-sm border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-400"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
