import React from 'react'

const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h1 className="text-4xl font-bold mb-6 text-primary">Welcome to the Tennis Club!</h1>
      <section className="max-w-2xl rounded-lg bg-card p-8 shadow-md">
        <p className="mb-4 text-lg">
          Discover your passion for tennis at our friendly community club. Whether you are an
          experienced player or just starting out, our club offers a welcoming environment for
          everyone who loves the sport.
        </p>
        <ul className="list-disc pl-6 mb-4 text-base">
          <li>Beautifully maintained courts, open year-round</li>
          <li>Coaching and training sessions for all ages</li>
          <li>Social events, tournaments, and leagues</li>
          <li>Modern clubhouse and relaxing lounge</li>
        </ul>
        <p>
          Join us today for fun, fitness, and friendly competition! We invite you to become part of
          the Tennis Club family.
        </p>
      </section>
    </main>
  )
}

export default HomePage
