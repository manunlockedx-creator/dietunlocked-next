export const metadata = {
  title: "Privacy Policy | ManUnlocked",
  description: "How ManUnlocked handles analytics, form submissions, and reader privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-950">Privacy Policy</h1>
      <div className="mt-6 space-y-5 text-lg leading-8 text-zinc-700">
        <p>
          We collect limited analytics and form submission data so the site can function, improve, and communicate
          with readers who explicitly opt in.
        </p>
        <p>
          We do not sell personal information. If you submit your email, it is used only for the newsletter or lead
          magnet flow you requested.
        </p>
      </div>
    </main>
  );
}
