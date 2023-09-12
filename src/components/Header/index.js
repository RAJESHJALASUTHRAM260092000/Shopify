import {Component} from 'react'
import {FiChevronDown} from 'react-icons/fi'
import {FaBars} from 'react-icons/fa'
import {VscError} from 'react-icons/vsc'
import './index.css'

class Header extends Component {
  state = {clicks: false}

  onRenderChanging = () =>
    this.setState(prev => ({
      clicks: !prev.clicks,
    }))

  render() {
    const {clicks} = this.state
    return (
      <>
        <div className="bg-container">
          <div className="Screen">
            {' '}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png"
              className="website_logo"
              alt="website_logo"
            />
          </div>
          <div className="Screen">
            <p className="paragraph"> Start free trial</p>
            {!clicks ? (
              <button
                className="button"
                type="button"
                onClick={this.onRenderChanging}
              >
                <FaBars size={30} color="black" />
              </button>
            ) : (
              <button
                className="button"
                type="button"
                onClick={this.onRenderChanging}
              >
                <VscError size={30} color="black" />
              </button>
            )}
          </div>

          <div className="bg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png"
              className="website_logo"
              alt="website_logo"
            />
            <p className="para">
              Solution {'   '}
              <FiChevronDown className="icon" />
            </p>
            <p className="para">Pricing</p>
            <p className="para">
              Resources
              <FiChevronDown className="icon" />
            </p>
          </div>
          <div className="bg">
            <p className="para">Log in</p>
            <button className="btn" type="button">
              Start free trial
            </button>
          </div>
        </div>
        {clicks && (
          <div className="bgrr Screen">
            <p className="para">
              Solution {'   '}
              <FiChevronDown className="icon" />
            </p>
            <p className="para">Pricing</p>
            <p className="para">
              Resources
              <FiChevronDown className="icon" />
            </p>
            <button className="btn" type="button">
              Login
            </button>
          </div>
        )}
      </>
    )
  }
}

export default Header
