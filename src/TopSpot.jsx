import PropTypes from 'prop-types';

const TopSpot = ({ name, description, location }) => {

    const locationString = `${location[0]},${location[1]}`;

    return (
        <>
            {/* Places each value in proper element then all returns back to App.jsx to render */}
            <h4 data-testid='name'>{ name }</h4>
            <p data-testid='description'>{ description }</p>
            <a className='btn btn-primary' 
                target='_blank' 
                href={`https://maps.google.com/?q=${locationString}`}
            >
                    Google Maps
            </a>
        </>
    )
};

TopSpot.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.arrayOf(PropTypes.number),
}

export default TopSpot;