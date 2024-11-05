import CardGroup from "./components/cardGroup"
import Header from "./components/Header"
import MenuCard from "./components/MenuCard"
import Section from "./components/Section"

function App() {

  return (
    <>
      <Header />
      <Section
        id="menu"
        title="Enjoy a new blend of coffee style"
        desc="Explore all flavours of coffee with us. There is always a new cup worth experiencing"
      >
        <CardGroup>
          <MenuCard />
        </CardGroup>
      </Section>
      <Section
        id="differencies"
        title="Why are we different?"
        desc="We don’t just make your coffee, we make your day!"
      >

      </Section>
    </>
  )
}

export default App
