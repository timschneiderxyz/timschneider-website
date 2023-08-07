/*  ========================================================================
    # Components - Section
    ========================================================================  */

const Section = ({ id, children }: { id: string; children: React.ReactNode }) => {
  return (
    <section id={id} className='relative py-16 lg:py-20'>
      <div className='container'>{children}</div>
    </section>
  );
};

export default Section;
