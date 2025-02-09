

// properties destrutturate, l'alternativa è un oggetto props acceduto tramite notazione puntata
// la cosa bella della destrutturazione è che si può anche dare dei valori di default
export default function CoreConcept({image,title,description}){
  return (
    <li>
      <img src={image} alt="{title}"></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}