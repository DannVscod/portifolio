import { siteConfig } from '../config/site'

export const whatsappUrl = (service?: string) => {
  const message = service
    ? `Olá, Danrley! Encontrei seu site e gostaria de solicitar um orçamento para ${service}.`
    : 'Olá, Danrley! Encontrei seu site e gostaria de solicitar um orçamento.'
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`
}

export const whatsappCustomUrl = (message: string) =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`
