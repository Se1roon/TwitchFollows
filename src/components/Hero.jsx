import Header from "./Header";
import Button from "./Button";
import Footer from "./Footer";

const Hero = () => {
  return (
    <section className="hero">
      <Header
        item1Content={
          <h1>
            <span>Search</span> for your follows
          </h1>
        }
        item2Content={
          <p>
            Use the <span>username</span> to search for your follows and see
            when have you started following the streamer! You will be able to
            see the streamers you are following and time when you've followed
            them!
          </p>
        }
      />
      <Button text={"Let's start"} useLink={true} link={true} />
      <Footer />
    </section>
  );
};

export default Hero;
