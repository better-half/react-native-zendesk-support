import { NativeModules } from 'react-native'

const { RNZendeskSupport } = NativeModules

interface Config {
  appId: string
  clientId: string
  zendeskUrl: string
}

// MARK: - Initialization

export function initialize(config: Config) {
  RNZendeskSupport.initialize(config)
}

// MARK: - Indentification

export function identifyJWT(token: string) {
  RNZendeskSupport.identifyJWT(token)
}

export function identifyAnonymous(name?: string, email?: string) {
  RNZendeskSupport.identifyAnonymous(name, email)
}

// MARK: - UI Methods

interface HelpCenterOptions {
  hideContactSupport?: boolean
}

export function showHelpCenter(options: HelpCenterOptions) {
  RNZendeskSupport.showHelpCenter(options)
}

export function getTicketUpdateCount(): Promise<number> {
  return RNZendeskSupport.getTicketUpdateCount()
}

interface NewTicketOptions {
  tags?: string[]
}

export function showNewTicket(options: NewTicketOptions) {
  RNZendeskSupport.showNewTicket(options)
}

export function showTicketList() {
  RNZendeskSupport.showTicketList()
}

enum SupportedLocales {
  ar,
  bg,
  cs,
  da,
  de,
  el,
  'en-GB',
  en,
  es,
  fi,
  fil,
  fr,
  he,
  hi,
  hu,
  id,
  it,
  ja,
  ko,
  ms,
  nb,
  nl,
  pl,
  'pt-BR',
  pt,
  ro,
  ru,
  sv,
  th,
  tr,
  vi,
  'zh-Hans',
  'zh-Hant',
}

export function setHelpCenterLocaleOverride(locale: SupportedLocales) {
  RNZendeskSupport.setHelpCenterLocaleOverride(locale)
}