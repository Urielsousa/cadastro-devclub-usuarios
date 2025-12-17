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
import UserImage from "./assets/users.png";

function App() {
  return (
    <Container>
      <TopBackground>
        <img src={UserImage} alt="Imagem de usuário"></img>
      </TopBackground>

      <Form>
        <Title> Cadastrar usuário </Title>
        <ContainerInput>
          <div>
            <div>
              <InputLabel>
                Nome<span> *</span>
                <Input type="text" placeholder="nome de usuarios" />
              </InputLabel>
            </div>
            <div></div>
            <InputLabel>
              Idade<span> *</span>
              <Input type="number" placeholder="idade de usuarios" />
            </InputLabel>
          </div>
          <div>
            <InputLabel>
              Email<span> *</span>
              <Input type="email" placeholder="email de usuarios" />
            </InputLabel>
          </div>
        </ContainerInput>
        <Button>Cadastrar usuarios</Button>
      </Form>
    </Container>
  );
}

export default App;
