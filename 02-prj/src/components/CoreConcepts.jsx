import { CORE_CONCEPTS } from '../data.js'
import CoreConcept from './CoreConcept.jsx'
import Section from './Section.jsx'
export default function CoreConcepts(){
    return (
        <Section id="core-concepts" title="Core Concepts">
          {/*
          <ul>
            <CoreConcept
              image = {CORE_CONCEPTS[0].image}
              title = {CORE_CONCEPTS[0].title}
              description = {CORE_CONCEPTS[0].description}
            ></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[1]}/> 
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul> */}
          <ul>
            {CORE_CONCEPTS.map((item)=> <CoreConcept key={item.title} {...item} /> )}
          </ul>
        </Section>
    );
}
