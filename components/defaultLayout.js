import Container from "react-bootstrap/Container";

const DefaultLayout = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default DefaultLayout;
