import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Programmation',
      color: '#6BCB77' // vert doux
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      color: '#56CFE1' // bleu ciel élégant
    },
    {
      id: uuidv4(),
      name: 'Science des données',
      color: '#B5E48C' // vert tendre
    },
    {
      id: uuidv4(),
      name: 'DevOps',
      color: '#FF6B6B' // rouge saumon doux
    },
    {
      id: uuidv4(),
      name: 'UX et Design',
      color: '#F28482' // rose corail pastel
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FFD166' // jaune pastel
    },
    {
      id: uuidv4(),
      name: 'Innovation et Gestion',
      color: '#F4A261' // orange doux
    }
  ]);

  const initialData = [
    {
      id: uuidv4(),
      favorite: false,
      name: 'FATOU NGOUMOU',
      role: 'Développeuse de logiciels et formatrice',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'JEAN-MARC EKOMBO',
      role: 'Ingénieur Logiciel chez Stone Age',
      image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'ARNAUD MBAPPE',
      role: 'Développeur Python et JavaScript chez Alura',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'SOPHIE DOUALA',
      role: 'Directrice Générale de Alura',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'AÏCHA BIKOA',
      role: 'Développeuse de logiciels et formatrice',
      image: 'https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'PATRICE ABENA',
      role: 'Ingénieur Logiciel chez Stone Age',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'MARIAM BELLO',
      role: 'Développeuse Python et JavaScript chez Alura',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'MARCEL NGOA',
      role: 'Directeur Technique de Alura',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'ESTHER NTANGA',
      role: 'Développeuse de logiciels et formatrice',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'ALAIN SOH',
      role: 'Ingénieur Logiciel chez Stone Age',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'VANESSA EBOT',
      role: 'Développeuse Python et JavaScript chez Alura',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'DAVID MBALLA',
      role: 'Expert en Technologie et PDG de Alura',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'NADEGE FOTSO',
      role: 'Développeuse de logiciels et formatrice',
      image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'ROGER TCHUITCHA',
      role: 'Ingénieur Logiciel chez Stone Age',
      image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'CHANTAL TCHAKOUNTE',
      role: 'Développeuse Python et JavaScript chez Alura',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'PAUL BIYA',
      role: 'Fondateur et Directeur de Alura',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'BRIGITTE TCHUENTE',
      role: 'Développeuse de logiciels et formatrice',
      image: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'STEVE FOKOU',
      role: 'Ingénieur Logiciel chez Stone Age',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'MIRIAM ESSOMBA',
      role: 'Développeuse Python et JavaScript chez Alura',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'JACQUES SONG',
      role: 'Directeur de l Innovation chez Alura',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'SANDRA MBALLA',
      role: 'Développeuse de logiciels et formatrice',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'ERIC NDOUMBE',
      role: 'Ingénieur Logiciel chez Stone Age',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'LAURETTE KAMGA',
      role: 'Développeuse Python et JavaScript chez Alura',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'FRANÇOIS XAVIER',
      role: 'Directeur Marketing chez Alura',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      team: teams[5].name
    },
  ]

  const [members, setMembers] = useState(initialData);

  const onNewMemberAdded = (member) => {
    // console.log(member);
    // update the array with its original content, plus the new member's data at the end of the array
    setMembers([...members, member]);
  }

  const deleteMember = (id) => {
    setMembers(members.filter(member => member.id !== id))
  }

  const changeTeamColor = (id, color) => {
    setTeams(teams.map(team => {
      if (team.id === id){
        team.color = color;
      }
      return team;
    }))
  }

  const addNewTeam = (team) => {
    setTeams([...teams, {...team, id: uuidv4()}])
  }

  const toggleFavorite = (id) => {
    setMembers(members.map((member) => {
      if (member.id === id) member.favorite = !member.favorite
      return member;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form 
        teams={teams.map(team => team.name)} 
        onRegisteredMember={member => onNewMemberAdded(member)} 
        onRegisteredTeam={addNewTeam}
      />
      <section className="times">
        <h1>Minha Organização</h1>
        {teams.map(team => (
          <Team 
            key={team.id} 
            team={team}             
            members={members.filter(member => member.team === team.name)}
            onDelete={deleteMember}
            onColorChange={changeTeamColor}
            onFavorite={toggleFavorite}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default App;
