import { useNavigate, useParams } from "react-router-dom";
import {StyledHeader, StyledButton} from "../style"
import { goToHome, goToProduct } from "../routes/coordinator";
import { goToProfile } from "../routes/coordinator";

function Header() {

  const navigate = useNavigate()

  return (
    <StyledHeader>
      <StyledButton onClick={() => {goToHome(navigate)}} >
        Ir para página inicial
      </StyledButton>
      <StyledButton onClick={() => {goToProfile(navigate)}}>
        Ir para página de perfil
      </StyledButton>
      <StyledButton onClick={() => {goToProduct(navigate)}}>
        Ir para página de produtos
      </StyledButton>
    </StyledHeader>
  );
}

export default Header;
