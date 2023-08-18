import { PokeTypes } from "./PokeTypes"
import PropTypes from 'prop-types';

export const PokeInfo = ({name, img, types}) => {
  return (
    <div className="card mb-3">
        <div className="row g-0">
            <div className="col-md-3 d-flex justify-content-center">
                <img src={img} className="img-fluid rounded-start" alt={name}/>
            </div>
            <div className="col-md-9">
                <div className="card-body d-flex flex-column justify-content-center">
                    <h5 className="card-title text-center text-capitalize">{name}</h5>
                    <PokeTypes types={types}/>
                    <button className="btn btn-primary">Ver más</button>
                </div>
            </div>
        </div>
        </div>
  )
}

PokeInfo.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.object)
}

PokeInfo.defaultProps = {
    types: []
}