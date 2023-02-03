import './card.styles.css';

const Card = (props) => {

    const { id, name, email } = props;
    const baseUri = 'https://robohash.org';
    return (
        <div className="card-container" key={id}>
            <img src={`${baseUri}/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;