import { Container } from "react-bootstrap"
import Footer from "./modulos/footer"
import Menu from "./modulos/navbar"

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo = await res.json()
    // Pass data to the page via props
    return { props: { repo } }
  }
   
  export default function Page({ repo }) {
    return (
      <main>
        <Menu/>
        <Container> 
        <p>stargazers_count: {repo.stargazers_count}</p>
        <p>Name: {repo.name}</p>
        <p>Full name: {repo.full_name}</p>
        </Container>
        <Footer/>
        
      </main>
    )
  }