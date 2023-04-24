import FadeCard from './components/FadeCard'

function App() {

  const fadeCards = [
    {
      color: 'red',
      animation: 'fadeIn'
    },
    {
      color: 'green',
      animation: 'fadeInLeft'
    },
    {
      color: 'blue',
      animation: 'fadeInTop'
    },
    {
      color: 'orange',
      animation: 'fadeInBottom'
    }
  ]

  return (
    <>
      {
        fadeCards.map((el, idx) => {
          return (
            <FadeCard color={el.color} animation={el.animation} />
          )
        })
      }
    </>
  )
}

export default App
