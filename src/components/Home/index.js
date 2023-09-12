import {Component} from 'react'
import {FaRupeeSign} from 'react-icons/fa'
import {SiVerizon} from 'react-icons/si'
import Header from '../Header'

import './index.css'

const List = [{id: 'Basic'}, {id: 'Shopify'}, {id: 'Advanced'}]

const choicesList = [
  {
    id: 'Basic',
    text:
      'Everything you need to sell online, ship products, process payments, and the basics to sell in person.',

    amount: '19,994',
    inCome: 'Get your  first 3 months  for Rs 20/mo',
    title: "what's included on Basic",

    items2: 'Basic Reports',
    items: '2 staff accounts',
    item1: 'Upto 1,000 inventory Basic',
  },
  {
    id: 'Shopify',
    text:
      'Level up your business with professional reporting and more staff accounts.',

    amount: '7,447',
    inCome: 'Get your  first 3 months  for Rs 20/mo',
    title: "what's included on Shopify",

    items2: 'Professional Reports',
    items: '5 staff accounts',
    item1: 'Upto 1,000 inventory Basic',
  },
  {
    id: 'Advanced',
    text:
      'Get the best of Shopify with advanced features and our lowest transaction fees',

    amount: '30,164',
    inCome: 'Get your  first 3 months  for Rs 20/mo',
    title: "what's included on Advanced",

    items2: 'Custom Reports Builder',
    items: '15 staff accounts',
    item1: 'Upto 1,000 inventory Basic',
  },
]

class Home extends Component {
  state = {unqiue: List[0].id}

  renderClick = id => this.setState({unqiue: id})

  render() {
    const {unqiue} = this.state
    const uniquerObject = choicesList.filter(i => unqiue === i.id)
    console.log('')
    return (
      <>
        <Header />
        <div className="small-screen ">
          <ul className="unorder">
            {List.map(i => (
              <li className={unqiue === i.id ? 'li listing' : 'li'} key={i.id}>
                <button
                  className="buttons"
                  type="button"
                  onClick={() => this.renderClick(i.id)}
                >
                  {i.id}
                </button>
              </li>
            ))}
          </ul>
          <div className="divs">
            <div className="div">
              {' '}
              <FaRupeeSign size={50} color="black" />
              <h1 className="heading">{uniquerObject[0].amount}</h1>
              <p className="paraa">
                INR <br /> /mo
              </p>
            </div>
            <h1 className="heads">{uniquerObject[0].inCome}</h1>
          </div>
          <div className="diving">
            <p className="headingss">{uniquerObject[0].title}</p>
            <p className="paraas">
              <SiVerizon className="icons" color="green" />
              {uniquerObject[0].items2}
            </p>
            <p className="paraas">
              <SiVerizon className="icons" color="green" />
              {uniquerObject[0].items}
            </p>
            <p className="paraas">
              <SiVerizon className="icons" color="green" />
              {uniquerObject[0].item1}
            </p>
          </div>
          <div className="y">
            <button className="btn rr" type="button">
              Try for free
            </button>
          </div>
        </div>
        <div className="big-screen">
          <ul className="main">
            {choicesList.map(i => (
              <li className="bg-un" key={i.id}>
                <div className="diving">
                  {' '}
                  <h1 className="heades">{i.id}</h1>
                  <p className="paraas">{i.text}</p>
                </div>

                <div className="un">
                  <div className="div">
                    {' '}
                    <FaRupeeSign size={30} color="black" />
                    <h1 className="heading uuuu">{i.amount}</h1>
                    <p className="paraa ">
                      INR <br /> /mo
                    </p>
                  </div>
                  <h1 className="heads uuu">{i.inCome}</h1>
                </div>
                <div className="diving">
                  <p className="headingss">{i.title}</p>
                  <p className="paraas">
                    <SiVerizon className="icons" color="green" />
                    {i.items2}
                  </p>
                  <p className="paraas">
                    <SiVerizon className="icons" color="green" />
                    {i.items}
                  </p>
                  <p className="paraas">
                    <SiVerizon className="icons" color="green" />
                    {i.item1}
                  </p>
                </div>
                <div className="y">
                  <button className="btn rr" type="button">
                    Try for free
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default Home
