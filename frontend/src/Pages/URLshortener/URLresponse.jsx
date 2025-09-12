import { Text } from '@mantine/core';
import Service from '../../utils/http';
//import Service from '../../utils/http.js';

const obj = new Service();


export default function URLresponse(props) {
   const surl = obj.getBaseURL() + '/api/s/' + props?.response?.shortCode;
   return (
       <div>
           <Text color="blue"> {surl} </Text>
       </div>
   )
}
