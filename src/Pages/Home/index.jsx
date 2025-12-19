import { useRef } from "react";
import {
  TitleColor as Title,
  Container,
  TopBackground,
  Form,
  ContainerInput,
  Input,
  Button,
  InputLabel,
} from "./styles";
import UserImage from "../../assets/users.png";

function Home() {
  const inputNameRef = useRef(null);
  const inputAgeRef = useRef(null);
  const inputEmailRef = useRef(null);

  function registerNewUser() {
    console.log(inputNameRef.current.value);
    console.log(inputAgeRef.current.value);
    console.log(inputEmailRef.current.value);
  }
  return (
    <Container>
      <TopBackground>
        <img src={UserImage} alt="Imagem de usuário"></img>
      </TopBackground>

      <Form>
        <Title> Cadastrar usuário </Title>
        <ContainerInput>
          <div>
            <InputLabel>
              Nome<span> *</span>
              <Input
                type="text"
                placeholder="nome de usuarios"
                ref={inputNameRef}
              />
            </InputLabel>
          </div>
          <div></div>
          <InputLabel>
            Idade<span> *</span>
            <Input
              type="number"
              placeholder="idade de usuarios"
              ref={inputAgeRef}
            />
          </InputLabel>
        </ContainerInput>
        <div style={{ width: "100%" }}>
          <InputLabel>
            Email<span> *</span>
            <Input
              type="email"
              placeholder="email de usuarios"
              ref={inputEmailRef}
            />
          </InputLabel>
        </div>

        <Button type="button" onClick={registerNewUser}>
          Cadastrar usuarios
        </Button>
      </Form>
    </Container>
  );
}

export default Home;
