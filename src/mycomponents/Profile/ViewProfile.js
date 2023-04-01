import './Profile.css';
const ViewProfile = (props) => {
    const { profileStateHandler } = props
    return (
        <div className="stsportal-container" >
            
                <div className="px-3 mb-4 profile" style={{ boxShadow: "0px 6px 6px rgba(9, 9, 4, 0.57)", borderRadius: "5px"}}>
                  <div className="row">
                  <svg xmlns="http://www.w3.org/2000/svg" style={{height:"10%",width:"10%"}} fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                  </svg>
                  </div>
                  <div className="row pb-4 px-3">
                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item col-3">Enrollment No</li>
                        <li className="list-group-item col-9"></li>
        
                      </ul>
                      <ul className="list-group list-group-horizontal-sm">
                        <li className="list-group-item col-3">Name</li>
                        <li className="list-group-item col-9"></li>
                        
                      </ul>
                      <ul className="list-group list-group-horizontal-md">
                        <li className="list-group-item col-3">Email-Id</li>
                        <li className="list-group-item col-9" ></li>
                        
                      </ul>
                      <ul className="list-group list-group-horizontal-lg">
                        <li className="list-group-item col-3">Branch</li>
                        <li className="list-group-item col-9"></li>
                      </ul>

                      <ul className="list-group list-group-horizontal-lg">
                        <li className="list-group-item col-3">LinkedIN URL</li>
                        <li className="list-group-item col-9"></li>
                      </ul>

                      <ul className="list-group list-group-horizontal-lg">
                        <li className="list-group-item col-3">GitHub URL</li>
                        <li className="list-group-item col-9"></li>
                      </ul>
                  </div>

                  

                  <div className='row pb-3'>
                  <div className='col justify-content-md-end d-grid gap-2 d-md-flex' >
                    <button className='btn btn-success' type="button" style={{background:"#90EE90"}}>share</button>
                  </div>

                  <div className='col justify-content-md-end '>
                    <button onClick={() => profileStateHandler("Edit")} className='btn btn-success' type="button" style={{background:"#179fe7"}}>Edit</button>
                  </div>
                  </div>
                </div>
                </div>
            
    )
}

export default ViewProfile