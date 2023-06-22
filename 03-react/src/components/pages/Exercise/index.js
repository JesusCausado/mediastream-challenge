import React, { useState } from 'react'
import './assets/styles.css'

const Exercise01 = () => {
  const movies = [
    {
      id: 1,
      name: 'Star Wars',
      price: 20
    },
    {
      id: 2,
      name: 'Minions',
      price: 25
    },
    {
      id: 3,
      name: 'Fast and Furious',
      price: 10
    },
    {
      id: 4,
      name: 'The Lord of the Rings',
      price: 5
    }
  ]

  const [cart, setCart] = useState([])
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)
  const handleClick = (o) => {
    let arrayTemp = []
    arrayTemp = cart
    const exist = arrayTemp.filter(ele => ele.id === o.id).length
    if (exist === 1) {
      arrayTemp.map(e => {
        if (e.id === o.id) {
          e.quantity = e.quantity + 1
          setTotal(total + e.price)
        }
        return e
      })
    } else {
      o.quantity = 1
      arrayTemp.push(o)
    }
    setCart(arrayTemp)
    setTotal(total + o.price)
    setCount(count + 1)
  }

  const handleClickCart = (type, x) => {
    let arrayTemp = []
    arrayTemp = cart
    const exist = arrayTemp.filter(ele => ele.id === x.id)[0]
    if (exist.quantity === 1 && type === 'Decrement') {
      for (const [i, obj] of arrayTemp.entries()) {
        if (obj.id === x.id) {
          arrayTemp.splice(i, 1)
        }
      }
      setTotal(total - x.price)
      setCount(count - 1)
    } else {
      arrayTemp.map(e => {
        if (e.id === x.id) {
          if (type === 'Increment') {
            e.quantity = e.quantity + 1
            setTotal(total + e.price)
            setCount(count + 1)
          } else {
            e.quantity = e.quantity - 1
            setTotal(total - e.price)
            setCount(count - 1)
          }
        }
        return e
      })
    }
    setCart(arrayTemp)
  }

  return (
    <section className="exercise01">
      <div className="movies__list">
        <ul>
          {movies.map(o => (
            <li className="movies__list-card" key={o.id}>
              <ul>
                <li>
                  ID: {o.id}
                </li>
                <li>
                  Name: {o.name}
                </li>
                <li>
                  Price: ${o.price}
                </li>
              </ul>
              <button onClick={(e) => handleClick(o)}>
                Add to cart
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="movies__cart">
        <ul>
          {cart.map(x => (
            <li className="movies__cart-card" key={x.id}>
              <ul>
                <li>
                  ID: {x.id}
                </li>
                <li>
                  Name: {x.name}
                </li>
                <li>
                  Price: ${x.price}
                </li>
              </ul>
              <div className="movies__cart-card-quantity">
                <button onClick={(e) => handleClickCart('Decrement', x)}>
                  -
                </button>
                <span>
                  {x.quantity}
                </span>
                <button onClick={(e) => handleClickCart('Increment', x)}>
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="movies__cart-total">
          <p>Total: ${total}</p>
          <br />
          <p>Count: {count}</p>
        </div>
      </div>
    </section>
  )
}

export default Exercise01
