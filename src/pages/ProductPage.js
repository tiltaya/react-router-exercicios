import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { MainContainer } from "../style";

function ProductPage() {

  const params = useParams()

  return (
    <MainContainer>
      <Header />
      <h1>Página de produtos</h1>
      <h1>Produto: {params.id}</h1>
    </MainContainer>
  );
}

export default ProductPage;
