

async function getUser(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json()
    return data.data
  }
  
  async function UserxPage({params}) {
  
    const user = await getUser(params.id)
  
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header text-center">
              <img style={{borderRadius:'50%'}} src={user.avatar} alt="imagen" />
            </div>
            <div className="card-body text-center">
                <h3>{user.last_name} {user.first_name}</h3>
                <p>{user.email}</p>
            </div>
          </div>
        </div> 
      </div>
    )
  }
  
  export default UserxPage