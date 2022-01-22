import { useMemo } from 'react'

import { useSidebar } from 'contexts/sidebar'

import { SidebarActionTypes } from 'providers/sidebar/actions'

import * as S from './sidebar.styles'

export const Sidebar = () => {
  const { state, dispatch } = useSidebar()

  const wrapperClassNames = useMemo(() => {
    const c = []

    if (state.isOpen) {
      c.push('sidebar--opened')
    }

    return c.join(' ')
  }, [state.isOpen])

  const wrapperProps = {
    className: wrapperClassNames,
  }

  return (
    <S.Wrapper {...wrapperProps}>
      <S.CloseButton
        onClick={() => {
          dispatch({ type: SidebarActionTypes.CLOSE })
        }}
      />

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
}
