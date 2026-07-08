import { Metadata } from 'next'
import { PageHeader, PageSection, ProseSection } from '@/components/studio'

export const metadata: Metadata = {
  title: 'Privacy Notice - Raimonvibe',
  description: 'Privacy notice and data protection information for Raimonvibe website.',
}

export default function PrivacyNotice() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy statement" />
      <PageSection>
        <ProseSection className="max-w-2xl">
          <p>
            The company, located at Timpaan 1-B 1628 MT Hoorn, is responsible for the processing of
            personal data as shown in this privacy statement.
          </p>

          <h2>Contact details</h2>
          <p>
            <strong>Website name:</strong> raimonvibe
            <br />
            <strong>Website URL:</strong> <a href="https://raimonvibe.eu">https://raimonvibe.eu</a>
            <br />
            <strong>Name:</strong> Raimon
            <br />
            <strong>Address:</strong> Timpaan 1-B
            <br />
            <strong>Postal code and city:</strong> 1628 MT Hoorn
            <br />
            <strong>Email address:</strong> <a href="mailto:info@raimonvibe.com">info@raimonvibe.com</a>
          </p>

          <h2>Personal data that we process</h2>
          <p>Raimonvibe may process the following personal data when you visit our website:</p>
          <ul className="mb-6 list-disc space-y-2 pl-5">
            <li>Contact information such as your email address when you fill out a contact form.</li>
            <li>Information about your browsing behavior to improve our services, including data collected through cookies.</li>
          </ul>

          <h2>Purpose of and basis for processing personal data</h2>
          <ul className="mb-6 list-disc space-y-2 pl-5">
            <li>To contact you and respond to your requests, if you have given us permission.</li>
            <li>To analyze website use and improve our services based on legitimate interest.</li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h2>Sharing personal data with third parties</h2>
          <p>
            Raimonvibe will not sell or disclose your personal data to third parties without permission,
            unless necessary to perform our agreement with you or to comply with a legal obligation.
          </p>

          <h2>Security and retention of personal data</h2>
          <p>
            We implement appropriate measures to protect your data from unlawful processing, loss,
            misuse, unauthorized access, disclosure, alteration, or destruction.
          </p>

          <h2>Automated decision-making</h2>
          <p>The company uses the following analytics and cookie tools:</p>
          <ul className="mb-6 list-disc space-y-2 pl-5">
            <li>
              <a href="https://heapanalytics.com/">Heap Analytics</a>
            </li>
            <li>
              <a href="https://cookie-script.com/">CookieScript</a>
            </li>
          </ul>

          <h2>Cookies, or similar techniques, that we use</h2>
          <p>
            The company uses functional, analytical, and tracking cookies. During your first visit we
            inform you about these cookies and ask for your permission to place them.
          </p>

          <h2>View, adjust, or delete data</h2>
          <p>
            You have the right to access, correct, or delete your personal data. Send requests to{' '}
            <a href="mailto:info@raimonvibe.com">info@raimonvibe.com</a>.
          </p>

          <h2>How we protect personal data</h2>
          <p>
            If you believe your data is not properly secured, contact us at{' '}
            <a href="mailto:info@raimonvibe.com">info@raimonvibe.com</a>.
          </p>

          <h2>Mobile apps</h2>
          <p>This privacy notice applies to the raimonvibe website. Our Android apps have separate policies:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <a href="/apps/animal-guesses/privacy">Animal Guesses privacy policy</a>
            </li>
            <li>
              <a href="/apps/music-guesses/privacy">Music Guesses privacy policy</a>
            </li>
          </ul>
        </ProseSection>
      </PageSection>
    </>
  )
}
