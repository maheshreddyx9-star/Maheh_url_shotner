import { Container, TextInput } from '@mantine/core'
import UrlForm from './URLform';
import UrlResponse from './URLresponse';
import { useState } from 'react';


export default function UrlShortener() {
  const [ response, setResponse ] = useState(null);
 
   return (
       <Container size={"xs"}>
           {response?<UrlResponse response = {response}/>:<UrlForm setResponse={setResponse}/>}
       </Container>
   )
}
