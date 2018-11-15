import React from 'react';
import Circular from './Circular';
import Bar from './Bar';

const front = {
  title: "FrontEnd",
  tab: [
    {name: "Javascript", value: 75},
    {name: "HTML5", value: 85},
    {name: "CSS3", value: 70},
    {name: "ReactJs", value: 70},
    {name: "Angular2", value: 60}
  ]
};

const back = {
  title: "BackEnd",
  tab: [
    {name: "NodeJS", value: 65}
    {name: "PHP", value: 50},
    {name: "MySQL", value: 55},
    {name: "Firebase", value: 65},
    {name: "MongoDB", value: 65},
    {name: "Laravel5.5", value: 40}
  ]
};

const mobile = {
  title: "Programmation Mobile",
  tab: [
    {name: "Ionic 2", value: 65},
    {name: "Android Studio", value: 55},
    {name: "React Native", value: 60}
  ]
};

const responsive = {
  title: "Responsive Design",
  tab: [
    {name: "Bootstrap 3", value: 70},
    {name: "Material Design", value: 60},
    {name: "Semantic React UI", value: 75},
    {name: "CSS GRID / Flexbox", value: 75}
  ]
};

const personal = {
    title: "Compétences Personnelles",
    tab: [
    {name: "Autodidacte", value: `J'ai développé mon sens autodidacte afin de m'améliorer dans le développement web. Je vais rechercher le plus souvent les informations pertinentes qui me permettront de mieux comprendre un concept, un langage, un framework.`},
    {name: "Codeur", value: `A mes heures perdues je code. J'en ai fait une habitude. Reprendre des projets déjà réalisés ou me pencher sur de nouveaux projets. Le but est d'avoir les bons réflexes, les bons mécanismes qui amélioreront ma productivité.`},
    {name: "Focus", value: `Je reste très concentré sur une tâche. C'est une particularité à double tranchant. En en apprenant plus sur le codage, trouver le juste milieu lorsque l'on met toute son attention sur une tâche est un excellent atout.`},
    {name: "Veille technologique", value: `Je m'informe constamment sur les nouveautés des technologies que j'utilise. Mis à jour des bugs, nouvelle version ou encore différents outils qui seront très utils dans le développement`},
    {name: "Esprit d'equipe", value: `Travailler à plusieurs est la façon la plus optimale de réussir un projet dans les temps. Cependant, plusieurs personnes travaillant sur un seul projet peut vite créer la confusion. J'optimise la lisibilité de mon code et ma productivité avec des outils comme github. Parallèlement, je lis et essaie de comprendre du code provenant d'une autre personne. Celà me permet de cerner une vision différente de la mienne.`}
  ]
};

const language = {
  title: "Langues",
  tab: [
    {name: "Français", value: 100},
    {name: "Anglais", value: 70}
  ]
};

class Competence extends React.Component {

  expandBlock = () => {
    if (this.props.index !== -1) {
      this.props.expandBlock(this.props.index);
    }
  }

  minimizeBlock = () => {
    if (this.props.index === -1) {
      this.props.expandBlock(-1);
    }
  }

  expand = () => (
    <ul className="competence" onClick={this.expandBlock.bind(this)}>
      <li><h1>{this.props.title}</h1><span className="close" onClick={this.minimizeBlock.bind(this)}>X</span></li>
      <li>
        <ul className="item">
          <h3>{front.title}</h3>
          {
            front.tab.map((item, i) => <li key={i}><Bar name={item.name} value={item.value} /></li>)
          }
        </ul>
      </li>
      <li>
        <ul className="item">
          <h3>{back.title}</h3>
          {
            back.tab.map((item, i) => <li key={i}><Bar name={item.name} value={item.value} /></li>)
          }
        </ul>
      </li>
      <li>
        <ul className="item">
          <h3>{mobile.title}</h3>
          {
            mobile.tab.map((item, i) => <li key={i}><Bar name={item.name} value={item.value} /></li>)
          }
        </ul>
      </li>
      <li>
        <ul className="item">
          <h3>{responsive.title}</h3>
          {
            responsive.tab.map((item, i) => <li key={i}><Bar name={item.name} value={item.value} /></li>)
          }
        </ul>
      </li>
      <li>
        <ul className="item">
          <h3>{personal.title}</h3>
          {
            personal.tab.map((item, i) =>
              <li key={i}>
                <b>{item.name}</b>: <i>{item.value}</i>
              </li>)
          }
        </ul>
      </li>
      <li>
        <ul className="item">
          <h3>{language.title}</h3>
          {
            language.tab.map((item, i) => <li key={i}><Bar name={item.name} value={item.value} /></li>)
          }
        </ul>
      </li>
    </ul>
  );

  minimize = () => (
    <ul className={this.props.boxStyle} onClick={this.expandBlock.bind(this)}>
      <li><h1><span><img src={require("./img/skills.png")} alt="" /></span> {this.props.title}</h1></li>
      <li>
        <h4>Developpement</h4>
        <ul className="development">
          <li>
            <Circular size={50} value={80} />
            <span><img src={require("./img/webdesign.png")} alt="front-end" /></span>
          </li>
          <li>
            <Circular size={50} value={45} />
            <span><img src={require("./img/server.png")} alt="back-end" /></span>
          </li>
          <li>
            <Circular size={50} value={70} />
            <span><img src={require("./img/mobile.png")} alt="mobile development" /></span>
          </li>
          <li>
            <Circular size={50} value={60} />
            <span><img src={require("./img/responsive.png")} alt="responsive design" /></span>
          </li>
        </ul>
      </li>
      <li>
        <h4>Personnelle</h4>
        <ul className="personal">
          <li><span><img src={require("./img/autodidacte.png")} alt="autodidacte" /></span></li>
          <li><span><img src={require("./img/code.png")} alt="codeur à temps perdu" /></span></li>
          <li><span><img src={require("./img/focus.png")} alt="concentré" /></span></li>
          <li><span><img src={require("./img/learning.png")} alt="veille technologique" /></span></li>
          <li><span><img src={require("./img/teamwork.png")} alt="esprit d'equipe" /></span></li>
        </ul>
      </li>
      <li>
        <h4>Langue</h4>
        <ul className="language">
          <li>
            <Circular size={50} value={100} />
            <span><img src={require("./img/fr.png")} alt="français" /></span>
          </li>
          <li>
            <Circular size={50} value={75} />
            <span><img src={require("./img/uk.png")} alt="anglais" /></span>
          </li>
        </ul>
      </li>
    </ul>
  )

  render() {
    return (
      this.props.index !== -1 ?
        this.minimize()
        :
        this.expand()
    );
  }
}

export default Competence;
