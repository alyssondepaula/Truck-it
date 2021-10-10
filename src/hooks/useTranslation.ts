import { useTranslation as translation } from 'react-i18next'

export const useTranslation = (word: string) => {
  const { t } = translation() 

  return t(word)
}