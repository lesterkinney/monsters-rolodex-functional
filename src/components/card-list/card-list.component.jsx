import Card from "../card/card.component";
import './card-list.styles.css';

const CardList = ({ monsters }) => {
    return (
        <div className="card-list">
            {monsters.map((monster) => (
                <Card key={monster.id} id={monster.id} name={monster.name} email={monster.email} />
            ))
            }
        </div>
    );
}

export default CardList;