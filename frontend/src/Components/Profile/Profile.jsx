import React, { use, useEffect, useState } from 'react'
import { Avatar } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';
import Service from '../../utils/http'
import { Card, Avatar, Text, Group, Center, Badge, Button, Stack } from "@mantine/core";
const obj = new Service();


export default function Profile() {
   


   const [user, setUser] = useState({})


   const getProfileData = async () => {
       try {
           let data = await obj.get("user/me")
           setUser(data)
           console.log(data);
       } catch (error) {
           console.log(error);
       }
   }
   useEffect(() => {


       getProfileData();
   }, [])


   return (
       <div>
           {
            <Center mih="50vh">
                    <Card shadow="sm" padding="lg" radius="lg" withBorder style={{ maxWidth: 350 }}>
                        <Center>
                            <Avatar
                                src={user?.avatar  "https://ui-avatars.com/api/?name=" + user?.name}
                                size={100}
                                radius={100}
                                color="blue"
                            />
                        </Center>


                        <Stack align="center" mt="md" spacing="xs">
                            <Text fw={700} size="lg">
                                {user?.name  "Unknown User"}
                            </Text>


                            <Text size="sm" c="dimmed">
                                {user?.email || "No email provided"}
                            </Text>


                            
                        </Stack>
                    </Card>
                </Center>
               


           }
       </div>
   )
}
