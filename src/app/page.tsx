import NavBar from '../components/navbar';

export default function Page() {
  return (
    <section>
      <div className="grid grid-cols-1 gap-4 my-8">
      <NavBar />
        <section id="about" className="text-black h-screen bg-black text-center flex">
          <h1 className="m-auto font-sans text-7xl text-purple-600 font-bold">About</h1>
        </section>
        <section id="blog" className="text-black h-screen bg-purple-900 flex">
          <h1 className="m-auto font-sans text-7xl text-black font-bold">Blog</h1>
        </section>
        <section id="contact" className="text-black h-screen bg-black text-center flex">
          <h1 className="m-auto font-sans text-7xl text-purple-600 font-bold">Contact</h1>
        </section>
        <section id="projects" className="text-black h-screen bg-purple-900 flex">
          <h1 className="m-auto font-sans text-7xl text-black font-bold">Projects</h1>
        </section>
      </div>
    </section>
  );
}
