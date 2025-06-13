import './App.css';
import Card from "./Card.jsx"

import actionMovie from './assets/action.jpg'
import comedyMovie from './assets/comedy.jpg'
import crimeMovie from './assets/crime.jpg'
import dramaMovie from './assets/drama.jpg'
import fantasyMovie from './assets/fantasy.jpg'
import horrorMovie from './assets/horror.jpg'
import musicalMovie from './assets/musical.jpg'
import romanceMovie from './assets/romance.jpg'
import scifiMovie from './assets/scifi.jpg'
import thrillerMovie from './assets/thriller.jpg'

const App = () => {

  const handleButtonClick = () => {
  };

  return (
    <div className="App">
      <h1>Best Films in Each Genres</h1>
      <h2>Interested in Watching the Best Movies in Each Genres? Check them out!!</h2>

      <a href="https://www.imdb.com/title/tt0468569/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%2520dark">
        <Card genre="Action" picture={actionMovie} movie="The Dark Knight" description="A gripping 2008 action film that follows Batman as he battles the anarchic Joker, whose reign of chaos threatens Gotham City. Combining intense action sequences with psychological depth, the film explores themes of justice, morality, and heroism in a dark, gritty urban landscape." onButtonClick={handleButtonClick} />
      </a>
      <a href="https://www.imdb.com/title/tt0942385/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_tropic%2520">
        <Card genre="Comedy" picture={comedyMovie} movie="Tropic Thunder" description="A satirical 2008 comedy that follows a group of pampered actors filming a war movie who accidentally find themselves in a real-life conflict. Blending outrageous humor with Hollywood parody, the film pokes fun at the movie industry, method acting, and action film clichés." onButtonClick={handleButtonClick} />
      </a>
      <a href="https://www.imdb.com/title/tt0240772/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_ocean%27s%2520">
        <Card genre="Crime" picture={crimeMovie} movie="Ocean's Eleven" description="A slick 2001 crime film about a charismatic mastermind who assembles a skilled team to pull off an elaborate heist targeting three Las Vegas casinos. Combining clever planning, high-stakes tension, and sharp wit, the film delivers a stylish and thrilling caper." onButtonClick={handleButtonClick}/>
      </a>
      <a href="https://www.imdb.com/title/tt2582802/?ref_=fn_all_ttl_1">
        <Card genre="Drama" picture={dramaMovie} movie="Whiplash" description="An intense 2014 drama that follows a young jazz drummer pushed to his limits by a ruthless music instructor. Set in a prestigious music conservatory, the film explores ambition, obsession, and the high cost of greatness through electrifying performances and emotional conflict." onButtonClick={handleButtonClick}/>
      </a>
      <a href="https://www.imdb.com/title/tt2015381/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_guardians%2520of">
        <Card genre="Fantasy" picture={fantasyMovie} movie="Guardians of the Galaxy" description="An adventurous 2014 fantasy film set in a vibrant, cosmic universe where a mismatched group of heroes teams up to stop a powerful villain. Packed with humor, epic battles, and magical technology, it blends space fantasy with a fun, irreverent spirit." onButtonClick={handleButtonClick}/>
      </a>
      <a href="https://www.imdb.com/title/tt15791034/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_barbarian">
        <Card genre="Horror" picture={horrorMovie} movie="Barbarian" description="A suspenseful 2022 horror film about a woman who discovers unsettling secrets in a rental home she shares with a stranger. As she investigates the house's dark hidden depths, the story unfolds with shocking twists, blending psychological terror with visceral horror." onButtonClick={handleButtonClick}/>
      </a>
      <a href="https://www.imdb.com/title/tt3783958/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_la%2520la%2520land">
        <Card genre="Musical" picture={musicalMovie} movie="La La Land" description=" A vibrant 2016 musical film that follows the romance between an aspiring actress and a passionate jazz musician in Los Angeles. Filled with dazzling song-and-dance numbers, the film celebrates dreams, love, and the bittersweet choices that shape our lives." onButtonClick={handleButtonClick}/>
      </a>
      <a href="https://www.imdb.com/title/tt0098635/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_when%2520harry%2520">
        <Card genre="Romance" picture={romanceMovie} movie="When Harry Met Sally..." description="A charming 1989 romance film that explores whether men and women can truly be just friends. Spanning years of chance encounters and evolving friendship, the film blends witty dialogue with heartfelt moments as Harry and Sally navigate love, timing, and connection in New York City." onButtonClick={handleButtonClick}/>
      </a>
      <a href="https://www.imdb.com/title/tt0470752/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_ex%2520mach">
        <Card genre="Sci-Fi" picture={scifiMovie} movie="Ex Machina" description="A thought-provoking 2014 science fiction film about a young programmer who is invited to test a highly advanced humanoid AI. As he interacts with the intelligent and mysterious robot, questions of consciousness, ethics, and control unravel in a tense, futuristic setting." onButtonClick={handleButtonClick}/>
      </a>
      <a href="https://www.imdb.com/title/tt2872718/?ref_=nv_sr_srsg_0_tt_6_nm_2_in_0_q_nightcrawler">
        <Card genre="Thriller" picture={thrillerMovie} movie="Nightcrawler" description="A gripping 2014 thriller that follows a driven loner who dives into the world of crime journalism in Los Angeles. As he begins capturing increasingly graphic footage for news broadcasts, his ambition blurs the line between observer and participant, creating a chilling portrait of moral decay and media exploitation." onButtonClick={handleButtonClick}/>
      </a>
    </div>
  );
}

export default App;