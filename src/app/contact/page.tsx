import { Metadata } from 'next'
import { PageHeader, PageSection, ProseSection } from '@/components/studio'
import OrganicImage from '@/components/studio/OrganicImage'
import { STUDIO_IMAGES } from '@/data/studio-images'

export const metadata: Metadata = {
  title: 'Contact - Raimonvibe',
  description: 'Get in touch with Raimon for web development projects, collaborations, or general inquiries.',
}

const inputClass =
  'mt-2 w-full rounded-xl border border-ink/10 bg-canvas px-4 py-3 text-ink transition focus:border-accent-cobalt/50 focus:outline-none focus:ring-2 focus:ring-accent-cobalt/20 dark:border-white/15 dark:bg-canvas-dark dark:text-ink-muted'

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s <em className="font-serif italic font-normal text-accent-orange">talk</em>
          </>
        }
        description="Share an idea, ask a question, or start a collaboration."
      />
      <PageSection>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <form
            method="POST"
            action="https://formspree.io/f/xwplqeky"
            aria-label="Contact form"
            className="studio-form space-y-5 rounded-2xl border border-ink/5 bg-white/50 p-6 dark:border-white/10 dark:bg-white/5 md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block text-sm font-medium">
                Name
                <input type="text" name="name" required className={inputClass} />
              </label>
              <label className="block text-sm font-medium">
                Email
                <input type="email" name="email" required className={inputClass} />
              </label>
            </div>
            <label className="block text-sm font-medium">
              Reason for contact
              <select name="category" required className={inputClass}>
                <option value="">— Please choose —</option>
                <option value="Landing Page Request">Request a landing page</option>
                <option value="General Inquiry">General question</option>
                <option value="Support or Follow-up">Follow-up / support</option>
                <option value="Feedback">Feedback</option>
                <option value="Other">Something else</option>
              </select>
            </label>
            <fieldset>
              <legend className="text-sm font-medium">Priority</legend>
              <div className="mt-2 flex flex-wrap gap-4 text-sm">
                <label className="flex items-center gap-2">
                  <input type="radio" name="priority" value="Low" defaultChecked />
                  Low
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="priority" value="Normal" />
                  Normal
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="priority" value="High" />
                  High
                </label>
              </div>
            </fieldset>
            <label className="block text-sm font-medium">
              Message
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell me about your project or question"
                className={inputClass}
              />
            </label>
            <div className="flex flex-wrap gap-3 pt-2">
              <button type="submit" className="studio-pill-btn studio-pill-btn-primary">
                Send message ↗
              </button>
              <button type="reset" className="studio-pill-btn studio-pill-btn-secondary">
                Reset
              </button>
            </div>
          </form>

          <div className="flex flex-col">
            <OrganicImage
              src={STUDIO_IMAGES.contactIdeas}
              alt="Creative ideas concept"
              width={600}
              height={450}
              mask="rounded"
              sizes="(max-width: 1024px) 100vw, 50vw"
              wrapperClassName="aspect-[4/3] w-full"
              accentClassName="bg-accent-lavender/35 p-2"
            />
            <ProseSection className="mx-0 mt-8 max-w-none">
              <h2>Direct reach</h2>
              <p>
                <a href="mailto:info@raimonvibe.com" className="font-medium text-ink underline underline-offset-4 dark:text-ink-muted">
                  info@raimonvibe.com
                </a>
              </p>
              <p className="text-sm">
                Timpaan 1-B · 1628 MT Hoorn · Netherlands
              </p>
              <p className="mt-6">
                I read every message and aim to respond within a few business days.
              </p>
            </ProseSection>
          </div>
        </div>
      </PageSection>
    </>
  )
}
