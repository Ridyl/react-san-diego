import PropTypes from 'prop-types';
import TopSpot from "/src/TopSpot";

const TopSpots = ({ spots }) => (
    <>
        {/* Maps each object sent from App.jsx and then sends all values to TopSpot.jsx */}
        {spots.map((topspot) => (
            <div className='container' data-testid="topspot" id='topspot' key={topspot.id}>
                <TopSpot
                    name={topspot.name}
                    description={topspot.description}
                    location={topspot.location}
                />
            </div>
        ))}
    </>
);

TopSpots.propTypes = {
    spots: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            description: PropTypes.string,
            location: PropTypes.arrayOf([PropTypes.number]),
        })
    ).isRequired,
};

export default TopSpots;
