import {MdErrorOutline} from 'react-icons/md'
import './index.css'

const Notfound = () => (
  <>
    <div className="not-found-container">
      <MdErrorOutline />
    </div>
    <p className="notfound-messege">Oops...its a wrong page</p>
  </>
)

export default Notfound
