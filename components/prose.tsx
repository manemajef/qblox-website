import { cn } from "@/lib/utils"
type PropsType = {
    className?: string;
    children?: React.ReactNode;
}
export function Prose({ className = '', children }: { className?: string, children?: React.ReactNode }) {
    return (
        <div className={cn(className, "max-w-2xl p-4")}>
            {children}
        </div>
    )
}

export function Title({ className = '', children }: PropsType) {
    return (
        <h1 className={cn("text-5xl sm:text-6xl lg:text-8xl font-bold text-foreground/85 tracking-tight leading-tight my-4", className)}>
            {children}
        </h1>
    )
}
export function H1({ className = '', children }: PropsType) {
    return (
        <h1 className={cn(className, 'text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground/85 font-sans')}>
            {children}
        </h1>
    )
}

export function H2({ className = '', children }: PropsType) {
    return (
        <h1 className={cn(className, 'text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight')}>
            {children}
        </h1>
    )
}

export function H3({ className = '', children }: PropsType) {
    return (
        <h3 className={cn("text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-foreground/85 mt-8 mb-4", className)}>
            {children}
        </h3>
    )
}

export function H4({ className = '', children }: PropsType) {
    return (
        <h4 className={cn("text-2xl sm:text-3xl font-semibold leading-tight tracking-tight text-foreground/85 mt-6 mb-3", className)}>
            {children}
        </h4>
    )
}

export function P({ className = '', children }: PropsType) {
    return (
        <p className={cn("text-lg sm:text-xl leading-relaxed text-foreground/80 mb-6", className)}>
            {children}
        </p>
    )
}

export function Lead({ className = '', children }: PropsType) {
    return (
        <p className={cn("text-xl sm:text-2xl text-muted-foreground mb-8 font-light leading-relaxed", className)}>
            {children}
        </p>
    )
}

export function Small({ className = '', children }: PropsType) {
    return (
        <small className={cn("text-sm font-medium leading-none text-muted-foreground", className)}>
            {children}
        </small>
    )
}

export function Strong({ className = '', children }: PropsType) {
    return (
        <strong className={cn("font-bold text-foreground", className)}>
            {children}
        </strong>
    )
}

export function Description({ className = '', children }: PropsType) {
    return (
        <p className={cn("text-sm text-muted-foreground", className)}>
            {children}
        </p>
    )
}

export function Ul({ className = '', children }: PropsType) {
    return (
        <ul className={cn("list-disc list-outside ml-6 space-y-2 mb-6 marker:text-muted-foreground", className)}>
            {children}
        </ul>
    )
}

export function Li({ className = '', children }: PropsType) {
    return (
        <li className={cn("text-lg sm:text-xl text-foreground/80 pl-2", className)}>
            {children}
        </li>
    )
}

export function Quote({ className = '', children }: PropsType) {
    return (
        <blockquote className={cn("border-l-4 border-primary pl-6 italic text-xl sm:text-2xl text-muted-foreground my-8 py-2", className)}>
            {children}
        </blockquote>
    )
}

export function Link({ className = '', href, children }: PropsType & { href?: string }) {
    return (
        <a href={href} className={cn("font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors cursor-pointer", className)}>
            {children}
        </a>
    )
}

export function ExampleProse() {
    return (
        <div className="min-h-screen bg-background">
            <Prose className="mx-auto py-24">
                <Title>The Art of Qblox</Title>
                <Lead>
                    Discover how simple cubes can transform into complex architectural masterpieces through creativity, engineering, and a bit of imagination.
                </Lead>

                <H1>Getting Started</H1>
                <P>
                    Qblox is more than just a toy; it's a <Strong>tool for imagination</Strong>. With our unique interlocking system, you can build in <Link href="#">three dimensions</Link>, defying gravity and expectation.
                </P>

                <H2>Core Concepts</H2>
                <P>
                    Understanding the basics is crucial. Here is what you need to know to start your journey:
                </P>
                <Ul>
                    <Li>Snap-together mechanics that hold tight.</Li>
                    <Li>Structural integrity for tall towers.</Li>
                    <Li>Color theory application in 3D space.</Li>
                </Ul>

                <Quote>
                    "The only limit is your imagination. And maybe gravity."
                </Quote>

                <H3>Advanced Techniques</H3>
                <P>
                    Once you've mastered the basics, try these advanced moves:
                </P>

                <H4>Cantilevers</H4>
                <P>
                    Building out into space requires balance. Ensure your base is heavy enough to support the extension.
                </P>

                <Description>
                    Tip: Use diagonal connections for extra stability.
                </Description>

                <div className="mt-12 border-t pt-6">
                    <Small>Last updated: October 2023</Small>
                </div>
            </Prose>
        </div>
    )
}