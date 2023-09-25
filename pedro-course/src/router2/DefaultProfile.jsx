import { Link } from "react-router-dom"

function DefaultProfile() {
  return (
    <div>
      <h2>Oh nothing to see here, the two profiles i have are:</h2>
      <ul>
        <li><Link to={"spinach"}>Spinach </Link></li>
        <li><Link to={"popeye"}>Popeye </Link></li>
      </ul>
    </div>
  )
}

export default DefaultProfile
