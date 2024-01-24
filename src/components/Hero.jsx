import {logo} from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex 
    justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo"
        className="w-28 object-contain" />
        
        <button
          type="button"
          onClick={() => window.open('https://github.com/mahak-shar')}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articleswith <br 
        className="max-md:hideen"/>
        <span 
        className="orange_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        Simpilfy your reading with Summize,an
        open-source article summarizer
        that tranforms lengthy articles into
        clear and concise summaries
      </h2>

    </header>
  )
}

export default Hero