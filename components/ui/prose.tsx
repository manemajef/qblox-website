// import React, { forwardRef } from "react";
// import { cn } from "@/lib/utils";

// // Helper for consistent component creation
// function createProseElement<T extends HTMLElement>(
//     tag: any,
//     defaultClassName: string,
//     displayName: string
// ) {
//     const Component = forwardRef<T, React.HTMLAttributes<T>>((props, ref) => {
//         return React.createElement(
//             tag,
//             { ...props, ref, className: cn(defaultClassName, props.className) },
//             props.children
//         );
//     });
//     Component.displayName = displayName;
//     return Component;
// }

// export const H1 = createProseElement<HTMLHeadingElement>(
//     "h1",
//     "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground",
//     "H1"
// );

// export const H2 = createProseElement<HTMLHeadingElement>(
//     "h2",
//     "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-foreground",
//     "H2"
// );

// export const Title = createProseElement<HTMLHeadingElement>(
//     "h1",
//     "text-4xl font-bold tracking-tight sm:text-6xl text-foreground mb-4",
//     "Title"
// );

// export const P = createProseElement<HTMLParagraphElement>(
//     "p",
//     "leading-7 [&:not(:first-child)]:mt-6 text-foreground",
//     "P"
// );

// export const Lead = createProseElement<HTMLParagraphElement>(
//     "p",
//     "text-xl text-muted-foreground",
//     "Lead"
// );

// export const Q = createProseElement<HTMLQuoteElement>(
//     "blockquote",
//     "mt-6 border-l-2 pl-6 italic text-muted-foreground",
//     "Q"
// );

// export const Ul = createProseElement<HTMLUListElement>(
//     "ul",
//     "my-6 ml-6 list-disc [&>li]:mt-2 text-foreground",
//     "Ul"
// );

// export const Li = createProseElement<HTMLLIElement>(
//     "li",
//     "text-foreground",
//     "Li"
// );

// export const Small = createProseElement<HTMLElement>(
//     "small",
//     "text-sm font-medium leading-none text-foreground",
//     "Small"
// );

// export const Strong = createProseElement<HTMLElement>(
//     "strong",
//     "font-semibold text-foreground",
//     "Strong"
// );

// export const Link = forwardRef<
//     HTMLAnchorElement,
//     React.AnchorHTMLAttributes<HTMLAnchorElement>
// >((props, ref) => {
//     return (
//         <a
//             ref={ref}
//             {...props}
//             className={cn(
//                 "font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors",
//                 props.className
//             )}
//         />
//     );
// });
// Link.displayName = "Link";