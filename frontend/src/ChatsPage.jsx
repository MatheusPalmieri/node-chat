import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => (
  <div style={{ height: "100vh" }}>
    <PrettyChatWindow
      projectId="54d9d14f-ad5a-42e4-99d8-40ed6c852ace"
      username={props.user.username}
      secret={props.user.secret}
      style={{ height: "100%" }}
    />
  </div>
);

export default ChatsPage;
