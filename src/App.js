import React, { Component } from 'react';
import './App.css';
//import {Block} from './components/Block';
import Competence from './components/Competence/Competence';
import Info from './components/Info/Info';
import Professionnel from './components/Professionnel/Professionnel';
import Scolaire from './components/Scolaire/Scolaire';

const blocks = [
  {name: 'Info', component: Info},
  {name: 'Professionnel', component: Professionnel},
  {name: 'Competence', component: Competence},
  {name: 'Scolaire', component: Scolaire}
];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: -1
    }
  }

  expandBlock(index) {
    this.setState({index, blockSelect: blocks.filter((block, i) => i === index)});
  }

  setDescription = id => {
    let text = "";
    switch (id) {
      case 0:
        text = "Vous êtes dans le block Info. Il concerne mes informations personnelles. Passez la souris sur l'un des champs pour voir l'animation. Cliquez sur la croix en haut à droite pour revenir à la liste.";
        break;
      case 1:
        text = "Vous êtes dans le bloc Professionnel. Ce bloc concerne les projets sur lesquels j'ai travaillé. Projets de stage, universitaires ou personnels, passez la souris sur un champ de la liste pour en savoir plus. Cliquez sur la croix en haut à droite pour revenir à la liste.";
        break;
      case 2:
        text = "Vous êtes dans le bloc Compétence. Il présentes mes compétences, autant dans le développement que personnellement. Cliquez sur la croix en haut à droite pour revenir à la liste.";
        break;
      case 3:
        text = "Vous êtes dans le bloc Scolaire. Il présente mon parcours scolaire. Cliquez sur la croix en haut à droite pour revenir à la liste.";
        break;
      default:
        text = "Bienvenue sur mon CV intéractif. Il a été codé en ReactJs mais utilise essentiellement les fonctionnalités es6. Cliquez sur un block pour voir en détails et laissez-vous guider. Bon visionnage!!!";
        break;
    }
    return (<p>{text}</p>);
  }

  render() {
    return (
      <div className="main">
        <div className="describe">
          {
            this.setDescription(this.state.index)
          }
        </div>
        <div className='list'>
          {
            this.state.index !== -1 ?
            <div className='block-expand'>
              {
                blocks.filter((block, i) => i === this.state.index).map((block, i) => <block.component boxStyle="boxStyle" expandBlock={this.expandBlock.bind(this)} index={-1} key={i} title={block.name} />)
              }
            </div>
            :
            <div className='block'>
              {
                blocks.map((block, i) => <block.component boxStyle="boxStyle" expandBlock={this.expandBlock.bind(this)} index={i} key={i} title={block.name} />)
              }
            </div>
          }
        </div>
        <div className="static"></div>
      </div>

    );
  }
}

export default App;
