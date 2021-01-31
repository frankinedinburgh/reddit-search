import { Container, Header, Content, Footer } from "rsuite";
import Search from "./Components/Search";

function App() {
  return (
    <Container>
      <Header></Header>
      <Content>
        <Search query={"reactjs"} limit={9} />
      </Content>
      <Footer></Footer>
    </Container>
  );
}

export default App;
