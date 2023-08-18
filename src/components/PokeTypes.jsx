import PropTypes from 'prop-types';

const getIconUrl = type => `/icons/${type}.png`
const generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
}
export const PokeTypes = ({types}) => {
    return (
        <div className="d-flex justify-content-center gap-2 my-2">
            {types.map(type => <img key={generateKey(type.type.name)} className="typeImg" src={getIconUrl(type.type.name)} alt={type.type.name}/>)}
        </div>
    )
}

PokeTypes.propTypes = {
    types: PropTypes.arrayOf(PropTypes.object)
}

PokeTypes.defaultProps = {
    types: []
}