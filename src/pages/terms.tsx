

export default function TermsPage() {
  return (
    <div className="min-h-screen">
   

      <main className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-8">
            Last updated: January 2025
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Magic 24/7, you accept and agree to be
                bound by the terms and provision of this agreement. If you do
                not agree to these terms, please do not use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily use Magic 24/7 for personal
                or commercial purposes. This is the grant of a license, not a
                transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Modify or copy the materials</li>
                <li>
                  Use the materials for any commercial purpose without
                  authorization
                </li>
                <li>
                  Attempt to reverse engineer any software contained in Magic
                  24/7
                </li>
                <li>
                  Remove any copyright or proprietary notations from the
                  materials
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
              <p className="text-muted-foreground leading-relaxed">
                You are responsible for maintaining the confidentiality of your
                account and password. You agree to accept responsibility for all
                activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. Service Modifications
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify or discontinue, temporarily or
                permanently, the service with or without notice. We shall not be
                liable to you or any third party for any modification,
                suspension, or discontinuance of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                5. Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Magic 24/7 shall not be liable for any damages arising out of
                the use or inability to use our service, even if we have been
                notified of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms shall be governed by and construed in accordance
                with the laws of the United States, without regard to its
                conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                7. Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms, please contact us
                at legal@magic247.com.
              </p>
            </section>
          </div>
        </div>
      </main>

    </div>
  );
}
