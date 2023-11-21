import Link from "next/link";

const ResumeWriterCard = () => (
  <div className="card w-full bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">Resume Writer</h2>
      <p>Craft a tailored, professional resume with our Assistant GPT.</p>
      <div className="card-actions justify-end">
        <Link href="/resume-writer">
          <button className="btn btn-primary">Start</button>
        </Link>
      </div>
    </div>
  </div>
);

const InterviewMentorCard = () => (
  <div className="card w-full bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">Interview Mentor</h2>
      <p>Ace your job interviews with our Assistant GPT.</p>
      <div className="card-actions justify-end">
        <Link href="/interview-mentor">
          <button className="btn btn-primary">Start</button>
        </Link>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="prose mx-auto p-8">
      <h1>Remake</h1>
      <div className="flex flex-col items-center w-full gap-y-8">
        <ResumeWriterCard />
        <InterviewMentorCard />
      </div>
    </main>
  );
}
