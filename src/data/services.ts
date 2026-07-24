import type { LucideIcon } from 'lucide-react'
import { PanelsTopLeft, Globe2, Workflow, Wrench, Cpu, Cloud, ShieldCheck } from 'lucide-react'

export interface Service {
  title: string
  description: string
  items: string[]
  icon: LucideIcon
}

export const services: Service[] = [
  { title: 'Criação de Sites', description: 'Sites profissionais para divulgar sua empresa, apresentar seus serviços e facilitar o contato com novos clientes.', icon: Globe2, items: ['Sites institucionais', 'Landing pages', 'Portfólios profissionais', 'Páginas para divulgação de serviços', 'Atualização e manutenção de sites'] },
  { title: 'Sistemas Personalizados', description: 'Soluções desenvolvidas de acordo com a rotina e as necessidades do seu negócio.', icon: PanelsTopLeft, items: ['Controle de clientes e atendimentos', 'Organização de vendas e serviços', 'Painéis para centralizar informações', 'Controle de processos internos', 'Melhorias em sistemas existentes', 'Integração entre ferramentas'] },
  { title: 'Automação de Processos', description: 'Redução de tarefas manuais e repetitivas para economizar tempo e diminuir erros.', icon: Workflow, items: ['Automatização de planilhas', 'Relatórios automáticos', 'Organização e tratamento de dados', 'Integração entre sistemas', 'Redução de tarefas repetitivas'] },
  { title: 'Suporte Técnico', description: 'Atendimento para resolver problemas, melhorar o desempenho e manter os computadores funcionando corretamente.', icon: Wrench, items: ['Formatação de computadores', 'Instalação e configuração de sistemas', 'Instalação de programas', 'Limpeza preventiva', 'Otimização de desempenho', 'Backup e configuração'] },
  { title: 'Hardware e Upgrades', description: 'Melhorias e manutenção para aumentar a vida útil e o desempenho dos equipamentos.', icon: Cpu, items: ['Instalação de SSD', 'Upgrade de memória', 'Diagnóstico de problemas', 'Montagem e manutenção', 'Orientação para compra de componentes'] },
  { title: 'Soluções Microsoft e Nuvem', description: 'Organização de usuários, arquivos, acessos e ferramentas para facilitar o trabalho da empresa.', icon: Cloud, items: ['Microsoft 365', 'Microsoft Azure', 'Configuração de usuários e acessos', 'Backup em nuvem', 'Organização de ambientes', 'Administração de contas e permissões'] },
  { title: 'Segurança e Organização de Dados', description: 'Organização de informações, definição de acessos e aplicação de boas práticas para proteger dados importantes no dia a dia.', icon: ShieldCheck, items: ['Organização de arquivos e informações', 'Revisão de permissões e acessos', 'Boas práticas de proteção de dados', 'Backup e recuperação de informações', 'Orientação sobre privacidade e segurança'] },
]
