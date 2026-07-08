import { Metadata } from 'next'
import { PageHeader, PageSection, ProseSection } from '@/components/studio'

export const metadata: Metadata = {
  title: 'Legal Notice - Raimonvibe',
  description: 'Legal notice, terms of use, and liability information for Raimonvibe website.',
}

export default function LegalNotice() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Legal notice" />
      <PageSection>
        <ProseSection className="max-w-2xl">
          <p>Last updated: October, 2024</p>
          <p>
            Welcome to raimonvibe. By using our website, you agree to the terms and conditions set out in this
            legal notice.
          </p>
          <h2>Terms of use</h2>
          <p>
            The information on this website is intended for general information purposes only. While we endeavor
            to ensure accuracy and currency, we make no warranties about completeness, reliability, suitability,
            or availability.
          </p>
          <p>
            Raimonvibe cannot be held liable for any loss or damage arising from the use of this website.
          </p>
          <p>
            This website may contain links to third-party sites not under our control. Inclusion of links does
            not imply endorsement.
          </p>
          <h2>Contact</h2>
          <p>
            Email: <a href="mailto:info@raimonvibe.com">info@raimonvibe.com</a>
            <br />
            Website: <a href="https://raimonvibe.com">https://raimonvibe.com</a>
          </p>
          <p>Copyright © {new Date().getFullYear()} raimonvibe. All rights reserved.</p>
        </ProseSection>
      </PageSection>
    </>
  )
}
