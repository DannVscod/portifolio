import { ArrowUp, MessageCircle } from 'lucide-react'
import { useScrollState } from '../hooks/useScrollState'
import { whatsappUrl } from '../utils/whatsapp'

export function FloatingActions() {
  const visible = useScrollState(500)
  return <div className="floating-actions">
    {visible && <a className="floating-button top-button" href="#inicio" aria-label="Voltar ao topo" data-tooltip="Voltar ao topo"><ArrowUp /></a>}
    <a className="floating-button whatsapp-button" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Chamar no WhatsApp" data-tooltip="Chamar no WhatsApp"><MessageCircle /></a>
  </div>
}
