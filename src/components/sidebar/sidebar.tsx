import * as S from './sidebar.styles'

export const Sidebar = () => (
  <S.Wrapper>
    <S.CloseButton />

    <S.Header>
      <S.Logo src='/logo.png' alt='Markee logo' />
    </S.Header>

    <S.Divider>
      <strong>Arquivos</strong>
    </S.Divider>

    <S.AddFileButton>
      <span>+</span>
      <span>Adicionar arquivo</span>
    </S.AddFileButton>

    <S.List>
      {Array(20).fill('Item').map((item, index) => (
        <S.ListItem key={index} tabIndex={0}>
          <span>&#128193;</span>
          <strong>{item}</strong>
        </S.ListItem>
      ))}
    </S.List>
  </S.Wrapper>
)
