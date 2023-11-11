import { useMutation } from 'convex/react';
import { emotionsToEmoji } from './emotionsToEmoji';
import { api } from '../../convex/_generated/api';
import { Id } from '../../convex/_generated/dataModel';
import { Player } from '../../convex/aiTown/player';
import { Conversation } from '../../convex/aiTown/conversation';

export function EmotionChanger({
  worldId,
  target,
  conversation,
  targetName,
}: {
  worldId: Id<'worlds'>;
  target: Player;
  conversation: Conversation;
  targetName: String;
}) {
  const writeMessage = useMutation(api.messages.writeMessage);

  return (
    <div className="box flex-grow">
      <h2 className="bg-brown-700 p-2 flex flex-row font-display text-4xl tracking-wider shadow-solid text-center overflow-x-auto">
        {Object.entries(emotionsToEmoji).map(([key, value]) => (
          <button
            onClick={async () => {
              let messageUuid = crypto.randomUUID();
              let text = `ADMIN: ${targetName}'s emotion is now ${key}`;
              console.log(text);

              await writeMessage({
                worldId,
                playerId: target.id,
                conversationId: conversation.id,
                text,
                messageUuid,
              });
            }}
            key={key}
          >
            {value}
          </button>
        ))}
      </h2>
    </div>
  );
}
