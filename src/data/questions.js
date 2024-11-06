export const questionBank = {
    "Self-Control and Patience": [
      { id: 1, text: "I can control my emotions and remain calm even when things don't go as planned.", category: "Self-Control" },
      { id: 2, text: "I often find myself able to wait for the right moment before making decisions.", category: "Self-Control" },
      { id: 3, text: "When facing a setback, I tend to reflect and adjust instead of reacting impulsively.", category: "Self-Control" },
      { id: 4, text: "I am able to stay composed and not rush into things, especially in challenging situations.", category: "Self-Control" },
      { id: 5, text: "People describe me as patient and level-headed when dealing with difficult circumstances.", category: "Self-Control" },
    ],
    "Focus on the Target": [
      { id: 6, text: "I make a strong effort to understand what drives others without needing to ask directly.", category: "Focus" },
      { id: 7, text: "I am often aware of subtle shifts in people's mood or behavior before they mention anything.", category: "Focus" },
      { id: 8, text: "I am good at figuring out what someone values most, even when they don't explicitly say it.", category: "Focus" },
      { id: 9, text: "I tend to observe people's behavior closely, paying attention to details others may overlook.", category: "Focus" },
    ],
    "Adaptability and Flexibility": [
      { id: 10, text: "I can easily adjust how I behave depending on the social setting or company.", category: "Adaptability" },
      { id: 11, text: "I am comfortable navigating different types of social situations with ease.", category: "Adaptability" },
      { id: 12, text: "I find it natural to shift between different sides of my personality depending on what the situation requires.", category: "Adaptability" },
    ],
    "Emotional Intelligence": [
      { id: 13, text: "I am often able to sense what others are feeling, even when they don't openly express it.", category: "EQ" },
      { id: 14, text: "I find myself able to listen attentively and pick up on the emotional undertones in conversations.", category: "EQ" },
      { id: 15, text: "People often confide in me because they feel I understand them without needing many words.", category: "EQ" },
    ],
    "Indifference and Detachment": [
      { id: 16, text: "I am able to maintain my independence even in close relationships.", category: "Detachment" },
      { id: 17, text: "I don't tend to become overly attached or clingy when someone pulls away emotionally.", category: "Detachment" },
      { id: 18, text: "I can walk away from a situation without feeling the need to chase after someone who withdraws.", category: "Detachment" },
    ],
    "Subtlety and Indirectness": [
      { id: 19, text: "I am able to get my point across without having to state everything directly.", category: "Subtlety" },
      { id: 20, text: "I often find that people understand my intentions without me needing to be too explicit.", category: "Subtlety" },
      { id: 21, text: "I prefer to use hints or suggestions rather than directly stating what I want.", category: "Subtlety" },
    ],
    "Control over Image": [
      { id: 22, text: "I am mindful of how my appearance and behavior influence how people perceive me.", category: "Image Control" },
      { id: 23, text: "I consciously make choices about how I present myself in different situations.", category: "Image Control" },
      { id: 24, text: "I am aware of how my body language and expressions affect the way others react to me.", category: "Image Control" },
    ],
    "Confidence and Self-Assuredness": [
      { id: 25, text: "I am comfortable making decisions without doubting myself or seeking reassurance.", category: "Confidence" },
      { id: 26, text: "People often describe me as someone who projects confidence in both words and actions.", category: "Confidence" },
      { id: 27, text: "I feel at ease taking the lead in conversations or social situations.", category: "Confidence" },
    ],
    "Creating and Maintaining Tension": [
      { id: 28, text: "I enjoy creating a balance between being available and slightly distant in interactions.", category: "Tension" },
      { id: 29, text: "I am able to keep people interested by not revealing everything too soon.", category: "Tension" },
      { id: 30, text: "I can create a sense of intrigue by leaving people wanting more from our conversations.", category: "Tension" },
    ],
    "Mastering the Art of the Chase": [
      { id: 31, text: "I enjoy the process of building anticipation rather than rushing towards outcomes.", category: "Chase" },
      { id: 32, text: "I am comfortable with taking my time and letting relationships develop naturally.", category: "Chase" },
      { id: 33, text: "I can create excitement through subtle gestures and playful interactions without being direct.", category: "Chase" },
    ],
  };
  
  export const options = [
    { id: 'sa', text: "Strongly Agree", value: 5 },
    { id: 'a', text: "Agree", value: 4 },
    { id: 'n', text: "Neutral", value: 3 },
    { id: 'd', text: "Disagree", value: 2 },
    { id: 'sd', text: "Strongly Disagree", value: 1 },
  ];
  
  export function getRandomQuestions() {
    const categories = Object.keys(questionBank);
    const selectedQuestions = [];
  
    // Select one question from each category
    categories.forEach(category => {
      const categoryQuestions = questionBank[category];
      const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
      selectedQuestions.push(categoryQuestions[randomIndex]);
    });
  
    return selectedQuestions;
  }
  