export const emotionsToEmoji = {
  Joy: '😊',
  Sadness: '😢',
  Anger: '😠',
  Surprise: '😮',
  Fear: '😨',
  Disgust: '🤢',
  Trust: '🤝',
  Anticipation: '🕰️',
  Love: '😍',
  Loneliness: '🌑',
  Guilt: '😔',
  Shame: '😳',
  Curiosity: '🔍',
  Excitement: '🎉',
  Nostalgia: '📷',
  Empathy: '💞',
  Envy: '💚',
  Gratitude: '🙏',
  Hope: '🌟',
  Boredom: '😑',
  Contentment: '😌',
  Frustration: '😤',
  Pride: '🦚',
  Embarrassment: '😶‍🌫️',
  Awe: '😯',
};

export function getEmotionPrompt() {
  return `You MUST have to reply ending with an emotion tag, the available tags is, PLEASE DO NOT MAKE UP Emotion that are not in the tags here: ${Object.entries(
    emotionsToEmoji,
  ).reduce((x, [key, value]) => `${x},<${key}>`, '')}`;
}
