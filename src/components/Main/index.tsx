import * as S from './styles';

const Main = ({
  title = 'Boilerplate',
  description = 'Typescript, React, Graphql, And Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="imagem da logo da empresa que é paracido com uma caixa"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
);

export default Main;
