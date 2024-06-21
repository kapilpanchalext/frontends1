import React from 'react';

type Props = {
    title: string,
    children?: any
} & React.HTMLAttributes<HTMLDivElement>;

const Section = ({title, children, ...props}: Props) => {
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
};

export default Section;