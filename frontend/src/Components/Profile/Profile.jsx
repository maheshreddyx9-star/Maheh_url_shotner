import React, { useEffect, useState } from 'react'
import Service from '../../utils/http'
import { Center, Text, Card, Avatar, Loader, Stack } from '@mantine/core';

const obj = new Service();

export default function Profile() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const getProfileData = async () => {
    try {
      let data = await obj.get("user/me");
      setUser(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  if (loading) {
    return (
      <Center style={{ marginTop: "50px" }}>
        <Loader size="lg" color="yellow" />
      </Center>
    );
  }

  return (
    <Center style={{ marginTop: "60px" }}>
      <Card shadow="md" padding="xl" radius="lg" withBorder style={{ width: 450, textAlign: "center" }}>
        {/* Profile Picture */}
        <Avatar
          src={
            
            "https://i.redd.it/4gxn2898h1j61.jpg"
          }
          alt={user?.name}
          size={350}
          radius="50%"
          style={{ margin: "0 auto" }}
        />

        <Stack spacing="xs" mt="md" >
          {/* Name */}
          <Text size="xl" weight={700} style={{ textTransform: "uppercase" }}>
            {user?.name}
          </Text>

          {/* Email */}
          <Text size="sm" color="red">
            {user?.email}
          </Text>

          {/* Custom User ID */}
          <Text size="sm">
            <b>User ID:</b> 2210040076
          </Text>

          {/* Created Date */}
          <Text size="sm">
            <b>Account Created:</b>{" "}
            {user?.createdAt ? new Date(user.createdAt).toLocaleString() : ""}
          </Text>
        </Stack>
      </Card>
    </Center>
  );
}