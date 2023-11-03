/*  ========================================================================
    # Page
    ========================================================================  */

// Data
import { getPinnedRepos } from '@/data/get-pinned-repos';

// Components
import Section from '@/components/Section';
import Image from 'next/image';
import RepoCard from '@/components/RepoCard';

// Images
import tim from '@/images/tim.jpg';

const Home = async () => {
  const repos = await getPinnedRepos();

  return (
    <main>
      <Section id='about'>
        <div className='container'>
          <div className='grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24'>
            <div>
              <figure className='max-w-sm mx-auto rotate-3 aspect-square'>
                <Image
                  className='w-full h-full rounded-2xl object-cover'
                  src={tim}
                  alt='A picture of Tim.'
                  placeholder='blur'
                />
              </figure>
            </div>
            <div>
              <div className='text-block'>
                <h1>Hey there, I am Tim.</h1>
                <p>
                  Already in my childhood, I had a lot of fun learning and understanding
                  technologies together with my father. Nowadays, I have turned my ever-growing
                  passion for these things into a profession and have become a developer.
                </p>
                <p>
                  My job is to build and optimise high-quality and user-friendly websites for my
                  clients, with whom I regularly exchange ideas to achieve the best possible
                  results. Therefore, I am constantly educating myself in order to be able to offer
                  all potential and current possibilities. I also do a lot of DevOps work to
                  optimise and automate as many processes as possible. To unwind, I like to
                  photograph, listen to music or play a video game.
                </p>
                <p>Here are a few of the technologies I currently use:</p>
              </div>
              <div className='flex flex-wrap gap-2 mt-6'>
                {[
                  'Docker',
                  'CSS3 / SCSS',
                  'Tailwind CSS',
                  'Node.js',
                  'JavaScript / TypeScript',
                  'Webpack',
                  'React',
                  'Next.js',
                  'PHP',
                  'WordPress'
                ].map(item => (
                  <span
                    key={item}
                    className='inline-block px-3 py-2.5 bg-neutral-950 border border-solid border-neutral-900 rounded-xl leading-none'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id='repos'>
        <div className='container'>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 lg:gap-y-8 max-w-5xl mx-auto'>
            {repos?.map(repo => <RepoCard key={repo.name} repo={repo} />)}
          </div>
        </div>
      </Section>

      <Section id='cta'>
        <div className='container'>
          <div className='flex justify-center items-center h-[420px] md:h-[600px] p-6 bg-neutral-950 border border-solid border-neutral-900 rounded-xl'>
            <div className='text-center'>
              <h2 className='mb-4'>Like to get in touch?</h2>
              <p>
                Then feel free to <a href='mailto:timschneider.xyz@gmail.com'>send me an email</a>.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Home;
