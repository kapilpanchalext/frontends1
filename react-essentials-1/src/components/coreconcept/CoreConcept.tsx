type Props = {
    title: string;
    description: string;
    img: string;
}

function CoreConcept({ title, description, img }: Props) {
    return(
        <li>
        <img src={img} alt={title}></img>
        <h3>{title}</h3>
        <p>{description}</p>
        </li>
    );
}

export default CoreConcept;