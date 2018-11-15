import React from 'react';

const boxes = [
  {
    date: "2018 - En Cours",
    description: `King Djay est un animateur localisé en Normandie. Pour dynamiser son activité hors de sa
    région, il m’a été demandé de développer un site web vitrine pouvant présenter un bon
    nombre de ses activités. Aussi, cela fait plus sérieux. Je développe ce site web avec React couplé à Redux. Il est hébergé sur Netlify. Étant donné qu'il y aura une gestion de contenu, il était intéressant de permettre cette gestion sans une intervention de ma part. J'ai alors utilisé un CMS nommé Contentful. Son module Javascript permet de faire très simplement des requêtes http afin de récupérer les données à afficher. Ainsi, King Djay n'a juste qu'à mettre son contenu sur Contentful, le site web récupérera tout cela et adaptera sa vue. Une dernière chose, étant aussi DJ, j'ai eu la bonne idée d'inclure un lecteur audio afin de promouvoir ses mixs que j'ai développé from scratch.`,
    link: "https://kingdjayk.netlify.com",
    title: "Site web vitrine pour un animateur professionnel"
  },
  {
    date: "2018 - En Cours",
    description: `Le projet ITM est une mise en situation réelle d’interconnexion entre terminaux mobiles. Le
    sujet proposé est de mettre à disposition d’une entreprise des systèmes pouvant intéragir
    entre eux. Ceci est un travail de groupe. Je m’occupe de la conception d’une application web
    qui permettrait à la RH de gérer les présences et absences du personnel et voir en temps réel
    leur position dans le batiment. Je développe cette application avec React et j'utilise firebase comme base de données. 3 autres applications mobiles ont été développées sous Android Studio. Nous avons utilisé les technologies bluetooth et NFC. Le projet est toujours en cours.`,
    link: "https://itmproject.netlify.com",
    title: "Projet Universitaire ITM"
  },
  {
    date: "2017 - 2018",
    description: `Ce projet a été réalisé avec le framework hybride Ionic pour la partie mobile et Angular pour le site web.
    FlashLike est une application destinée à améliorer l'e-reputation d'un commerce, association ou institution désirant avoir une visibilité sur les réseaux sociaux. Subdivisé en 2 parties, une partie application et une partie site web, elle doit permettre d'un côté, aux commerçants désignés par le terme "adhérent" de pouvoir enregistrer leur local via leur coordonnées GPS et de mettre à disposition des clients finaux appelés "Flashliker" un code QR à flasher, et de l'autre une application mobile permettant aux Flashlikers de scanner le QR Code d'un adhérent puis liker ou disliker le lieu. La notion principale vue lors de ce projet est la synchronisation de deux applications distinctes. En effet, il fallait que les changements opérés dans l'une se répercutent dans l'autre. Pour se faire, j'ai utilisé la plateforme cloud firebase et son plugin dédié à Angular nommé AngularFire.`,
    link: "https://flashlike-8d9ed.firebaseapp.com/",
    title: "Projet universitaire Ionic: FlashLike"
  },
  {
    date: "2017 - 2018",
    description: `Ce projet est une compilation de tout mon apprentissage javascript.
    En tant qu'autodidacte, j'ai commencé une série de mini-projets sur divers concepts, problématiques, notions pertinents régulièrement rencontrés dans le web development. Je me focalise particulièrement sur le css et le javascript. Pour celà ces mini-projets sont faits en pur html - css - vanilla. De plus, c'est aussi une occasion pour moi de développer les nombreuses possibilités qu'offre l'ES6, mettre en pratique les notions de bases du développement web et explorer le grand panel d'outils et API qui accompagne javascript. J'aborde les notions suivantes:\r\n
    - Les APIs;
    - Le responsive design: grid, flexbox et bootstrap (tous les projets ne le sont pas);
    - Les animations et designs en css;
    - Les animations et fonctionnalités dynamiques en javascript;
    J'ai déployé ce projet sur la plateforme de cloud heroku. Il est régulièrement mis à jour.`,
    link: "https://js-work.herokuapp.com/",
    title: "Projet personnel JS work Project"
  },
  {
    date: "2016 - 2017",
    description: `Dans ce projet, je me suis intéressé aux applications temps réel.
    Dans ce sens, SocketIO est très apprécié par les développeurs Javascript.
    SocketIO, c'est une bibliothèque offrant de multiples outils vous permettant d'échanger des données entre votre application et l'utilisateur en temps en réel. Tout ceci en utilisant particulièrement un API Javascript nommé WebSocket. Le cas du chat étant l'exemple le plus évoqué, j'ai tenu à aborder ce cas avec React. La difficulté de cet outil vient d'une bonne maîtrise de node.js.
    L'application n'étant pas encore finie, je mettrais à disposition un lien plus tard.`,
    title: "Projet personnel React Chat App with SocketIO"
  },
  {
    date: "2016 - 2017",
    description: `Ceci est un projet personnel. Une simple application CRUD reliée à la base de données firebase de Google. Cette petite application est l'une des premières dans mon apprentissage de ReactJs. Ayant déjà travaillé avec firebase sur un projet universitaire dans lequel j'utilisais Angular 2, c'est tout naturellement que je me suis intéressé à son usage avec React. Cette application utilise les systèmes d'authentification sur firebase et d'échange en temps réel avec sa base de données.
    Concernant firebase, c'est une plateforme cloud construite par Google proposant l'authentification, la base, l'hébergement et bien d'autres services. Sa base de données est définie comme NoSQL. Légère, rapide et simple d'utilisation, il faut cependant se familiariser avec sa documentation. La notion principale mise en évidence ici est la programmation réactive, concept qui m'intéresse énormément.`,
    link: "https://react-app-firebase-post.herokuapp.com/",
    title: "Projet personnel React Firebase Post"
  },
  {
    date: "2013 - 2014",
    description: `Sunulab est une entreprise de services numériques à Dakar au Sénégal. Aussi incubateur de projets, c'est l'un des pôles clés du développement digital de la ville de Dakar.
    Lors de ce stage, j'ai épaulé l'équipe back-end dans l'élaboration d'une plateforme de partage solidaire de livres. Le projet étant financé par l'Etat sénagalais, il était vital pour moi de bien appréhender les notions acquises et les mettre en pratique. La plateforme se nomme Sankofa et a été développée en PHP5. Lles fonctionnalités à mettre en place pour le site web sont les suivantes:
    - Système d'authentification;
    - Un calendrier des dates d'emprunt et de remises de livres;
    - Une liste de personnes souhaitant partager et de personnes recherchant des livres.`,
    title: "Stage Assistant développeur PHP chez Sunulab"
  },
  {
    date: "2012 - 2013",
    description: `SQYCAB est une entreprise de transport de personnel dans Saint Quentin en Yveline.
    Ce stage est le début de mon initiation au développement web. Après une période de formation html - css par mon tuteur de stage, la mission qui m'a été confiée était de l'accompagner dans la refonte du site web de la société. Les notions à appliquer étaient particulièrement les animations et les transitions. Il m'a fallu donc bien éditer le code html afin d'être cohérent avec le code css. La plus value de ce stage est l'écriture d'un code "propre" et "lisible" car afin de bien utiliser la puissance du css, les balises html doivent être agencées de la manière la plus concises possibles.`,
    title: "Stage Assistant web developpeur chez SQYCAB"
  }
];

class Professionnel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expand: false
    };
  }

  expandBlock = () => {
    if (this.props.index !== -1) {
      this.props.expandBlock(this.props.index);
    }
  }

  expandBox = () => {
    let expand = this.state.expand;
    console.log(this.box);
    //this.setState({expand: !expand});
  }

  minimizeBlock = () => {
    if (this.props.index === -1) {
      this.props.expandBlock(-1);
    }
  }

  expand = () => (
    <ul className="professionnel" onClick={this.expandBlock.bind(this)}>
      <li><h1>{this.props.title}</h1><span className="close" onClick={this.minimizeBlock.bind(this)}>X</span></li>
      {
        boxes.map((box, index) => <li className="box" key={index}>
        <i>{box.date}</i>: <b>{box.title}</b>
        <h5>{box.description}</h5>
        {box.link ? <h4>Pour tester l'application, cliquez <a href={box.link}>ici</a></h4> : ''}
        </li>)
      }
    </ul>
  );

  minimize = () => (
    <ul className={this.props.boxStyle} onClick={this.expandBlock.bind(this)}>
      <li><h1><span><img src={require("./img/tie.png")} alt="" /></span> {this.props.title}</h1></li>
      <li>
        <i>2018 - En Cours</i>: <b>Site web vitrine pour un animateur professionnel</b>
        <h5>King Djay est un animateur localisé en Normandie. Pour dynamiser son activité hors de sa
        région, il m’a été demandé de développer un site web vitrine pouvant présenter un bon
        nombre de ses activités. Passez la souris pour en savoir plus</h5>
      </li>
      <li>
        <i>2018 - En Cours</i>: <b>Projet Universitaire ITM</b>
        <h5>Le projet ITM est une mise en situation réelle d’interconnexion entre terminaux mobiles. Le
        sujet proposé est de mettre à disposition d’une entreprise des systèmes pouvant intéragir
        entre eux. Passez la souris pour en savoir plus</h5>
      </li>
      <li>
        <i>2017 - 2018</i>: <b>Projet Ionic: FlashLike</b>
        <h5>Ce projet a été réalisé avec le framework hybride Ionic version 2 pour la partie mobile et Angular 2 pour le site web. Passez la souris pour en savoir plus</h5>
      </li>
      <li>.<br/>.<br/>.</li>
    </ul>
  );

  render() {
    return (
      this.props.index !== -1 ?
      this.minimize()
      :
      this.expand()
    );
  }
}

export default Professionnel;
