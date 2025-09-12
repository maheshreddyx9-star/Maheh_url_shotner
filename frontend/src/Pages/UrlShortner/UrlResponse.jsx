import { Text, TextInput, Button, ActionIcon } from "@mantine/core";
import { QRCodeSVG } from "qrcode.react";
import { IconCopy, IconCheck } from "@tabler/icons-react";
import { CopyButton } from "@mantine/core";
import Service from "../../utils/http";

const obj = new Service();

export default function UrlResponse(props) {
  const surl = obj.getBaseURL() + "/api/s/" + props?.response?.shortCode;

  return (
    <div style={{ textAlign: "center" }}>
      
      <Text c="teal" fw={600} mb="lg">
        {surl}
      </Text>

     
      <QRCodeSVG
        value={surl}
        size={350}
        imageSettings={{
          excavate: true,
          src: "/HomeBackground.png",
          height: 80,
          width: 80,
        }}
      />

      
      <CopyButton value={surl} timeout={100}>
        {({ copied, copy }) => (
          <TextInput
            value={surl}
            readOnly
            mt="md"
            rightSection={
              <ActionIcon
                color={copied ? "teal" : "blue"}
                variant="subtle"
                onClick={copy}
              >
                {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
              </ActionIcon>
            }
          />
        )}
      </CopyButton>

      {/* Reset button */}
      <Button mt="md" color="orange" onClick={() => props.setResponse(null)}>
        Reset
      </Button>
    </div>
  );
}