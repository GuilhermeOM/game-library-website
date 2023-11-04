import Caption from '../Caption';
import Card from '../Card';
import { GiSwordsEmblem, GiMountainRoad, GiPunchBlast } from 'react-icons/gi';

export default function GenreCardList() {
  return (
    <ul className='flex w-full md:inline-flex flex-col md:flex-row items-center gap-8'>
      <li>
        <Card className='cursor-pointer mask-img-b overflow-hidden flex-col hover:scale-105 transition ease-in-out delay-70'>
          <h4>RPG</h4>
          <Caption>
            A role-playing game (sometimes spelled roleplaying game, RPG) is a
            game in which players assume the roles of characters in a fictional
            setting. Players take responsibility for acting out these roles
            within a narrative, either through literal acting or through a
            process of structured decision-making regarding character
            development. Actions taken within many games succeed or fail
            according to a formal system of rules and guidelines.
          </Caption>
          <GiSwordsEmblem size={28} className='absolute top-2 right-4' />
        </Card>
      </li>
      <li>
        <Card className='cursor-pointer mask-img-b overflow-hidden flex-col hover:scale-105 transition ease-in-out delay-70'>
          <h4>Adventure</h4>
          <Caption>
            An adventure game (rarely called a quest game) is a video game genre
            in which the player assumes the role of a protagonist in an
            interactive story, driven by exploration and/or puzzle-solving. The
            genre's focus on story allows it to draw heavily from other
            narrative-based media, such as literature and film, encompassing a
            wide variety of genres. Most adventure games (text and graphic) are
            designed for a single player, since the emphasis on story and
            character makes multiplayer design difficult.
          </Caption>
          <GiMountainRoad size={28} className='absolute top-2 right-4' />
        </Card>
      </li>
      <li>
        <Card className='cursor-pointer mask-img-b overflow-hidden flex-col hover:scale-105 transition ease-in-out delay-70'>
          <h4>Fighting</h4>
          <Caption>
            A fighting game is a genre of video game that involves combat
            between two or more characters. Fighting game combat often features
            mechanics such as blocking, grappling, counter-attacking, and
            chaining attacks together into "combos". Characters generally engage
            in battle using hand-to-hand combat—often some form of martial arts.
            The fighting game genre is related to, but distinct from, the beat
            'em up genre, which pits large numbers of computer-controlled
            enemies against one or more player characters.
          </Caption>
          <GiPunchBlast size={28} className='absolute top-2 right-4' />
        </Card>
      </li>
    </ul>
  );
}
