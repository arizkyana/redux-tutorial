import CampaignRepository from '@/libraries/repositories/campaign';
import { useHomeDispatch } from '@/redux/reducers/home/slices';

export async function getServerSideProps() {
  const data = await CampaignRepository.getData(10);
  return {
    props: {
      campaign: data,
    },
  };
}

export default function LandingPage({ campaign }) {
  const { doFetchCampaign } = useHomeDispatch();

  const handleOnScrollPage = async (current) => {
    try {
      await doFetchCampaign(current + 10);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="w-screen relative bg-red-50 min-h-screen">
      <nav className="border bg-green-50 h-16 flex justify-start items-center">
        <div className="h-full container mx-auto flex justify-between items-center">
          <div className="font-bold">
            Logo
          </div>
          <div className="grid grid-cols-5 gap-3 text-center">
            <div>
              <a href="/">Home</a>
            </div>
            <div>
              <a href="/">Courses</a>
            </div>
            <div>
              <a href="/">Services</a>
            </div>
            <div>
              <a href="/">Testimonial</a>
            </div>
            <div>
              <a href="/">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      <main className="">
        <section id="banner" className="container mx-auto">
          <div className="w-full flex flex-col lg:flex-row justify-between items-start">
            <div className="w-full lg:w-3/4 border">
              <h1 className="font-bold text-3xl">
                Learn new skills online with top educators.
              </h1>
              <h2 className="font-semibold text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum inventore omnis cupiditate asperiores veritatis corrupti nemo sint, debitis exercitationem, eaque architecto totam nihil at? Velit atque asperiores dignissimos! Animi, inventore!
              </h2>
              <div>
                <button type="button" className="bg-gray-800 hover:bg-gray-700 text-gray-200 px-6 py-3 rounded-2xl">
                  Start learning today
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/4 border">
              Gambar
            </div>
          </div>
        </section>
        <section id="survey" className="container mx-auto">
          Survey
        </section>
        <section id="feature" className="container mx-auto">
          Feature
        </section>
        <section id="services" className="container mx-auto">
          Services
        </section>
        <section id="testimonial" className="container mx-auto">
          Testimonial
        </section>
        <section id="cta" className="container mx-auto">
          CTA (Call to action)
        </section>
      </main>
      <footer className="border absolute bottom-0 w-full bg-gray-50">
        <div className="container mx-auto">
          footer
        </div>
      </footer>
    </div>
  );
}
