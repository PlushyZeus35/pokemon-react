
export const PokeSkel = () => {
  return (
    <div className="card mb-3">
        <div className="row g-0">
            <div className="col-md-3 d-flex justify-content-center align-items-center">
                <div id="bigSpinner" className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            <div className="col-md-9">
                <div className="card-body">
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-6"></span>
                        <span className="placeholder col-8"></span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
