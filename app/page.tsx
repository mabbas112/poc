import Header from "../components/header";
import Home from "../components/home";
import Container from "../shared/container";

const Page = () => {
  return (
    <Container>
      <div className="w-full max-w-screen-lg mt-20">
        <Header />
        <Home />
      </div>
    </Container>
  );
}

export default Page;
