import React from 'react'
import { useTranslation } from 'react-i18next'
import brasil from '../../assets/flags/brasil.svg'
import eua from '../../assets/flags/eua.svg'
import styles from './styles.module.scss'


const Flag = ({ image, isSelected, ...props }: any) => (
  <img alt="flag" src={image} className={isSelected ? 'flag selected' : styles.flaginactive} {...props} />
)


export function FlagSelector(){
  const { i18n } = useTranslation()

  function handleChangeLanguage(language: string) {
    i18n.changeLanguage(language)
  }

  const selectedLanguage = i18n.language
  return (
    <div className={styles.container}>
      <text>Selecione o idioma</text>
      <div>
      <Flag
        image={brasil}
        isSelected={selectedLanguage === 'pt-BR'}
        onClick={() => handleChangeLanguage('pt-BR')} 
      />
      <Flag
        image={eua}
        isSelected={selectedLanguage === 'en-US'} 
        onClick={() => handleChangeLanguage('en-US')}
      />
    </div>
    </div>
  )
}