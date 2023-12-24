const h1 = document.getElementById("h1");
const h2 = document.getElementById("h2");

let advices = [
    "You are what you believe in. You become that which you believe you can become.",
    "Man is made by his belief. As he believes, so he is.",
    "Death is as sure for that which is born, as birth is for that which is dead. Therefore grieve not for what is inevitable.",
    "You are only entitled to the action, never to its fruits.",
    "One who sees inaction in action, and action in inaction, is intelligent among men.",
    "Whatever action is performed by a great man, common men follow in his footsteps, and whatever standards he sets by exemplary acts, all the world pursues.",
    "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.",
    "Through selfless service, you will always be fruitful and find the fulfillment of your desires.",
    "The spirit is beyond destruction. No one can bring an end to the spirit which is everlasting.",
    "Amongst thousands of persons, hardly one strives for perfection; and amongst those who have achieved perfection, hardly one knows me in truth.",
    "Whatever action is performed by a great man, common men follow in his footsteps, and whatever standards he sets by exemplary acts, all the world pursues.",
    "Krishna says: “Arjuna, I am the taste of pure water and the radiance of the sun and moon. I am the sacred word and the sound heard in the air, and the courage of human beings. I am the sweet fragrance in the earth and the radiance of fire; I am the life in every creature and the striving of the spiritual aspirant.",
    "Seek refuge in the attitude of detachment and you will amass the wealth of spiritual awareness. The one who is motivated only by the desire for the fruits of their action, and anxious about the results, is miserable indeed.",
    "Work for work’s sake, not for yourself. Act but do not be attached to your actions. Be in the world, but not of it.",
    "Whatever happened, happened for the good. Whatever is happening, is happening for the good. Whatever will happen, will also happen for the good.",
    "Change is the law of the universe.",
    "The soul is neither born nor does it die; it is eternal.",
    "Lust, anger, and greed are the three gates to self-destructive hell.",
    "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.",
    "There is neither this world nor the world beyond. nor happiness for the one who doubts.",
    "A person can rise through the efforts of his own mind; or draw himself down, in the same manner.",
    "He who has faith in wisdom Who lives in self-harmony,Whose faith is his life; And he who finds wisdom,Soon finds peace Supreme.",
    "Those who are interested in self-realization, in terms of mind and sense control, offer the functions of all the senses, as well as the vital force, as oblations into the fire of the controlled mind.",
    "All created beings are demanifest in their beginning, manifest in their interim state, and demanifest again when they are annihilated. So what needs is there for lamentation?",
    "Sever the ignorant doubt in your heart with the sword of self-knowledge. Observe your discipline, arise.",
    "Blessed is the human birth; even the dwellers in heaven desire this birth; for true knowledge and pure love may be attained only by a human being.",
    "Strive to still your thoughts. Make your mind one-pointed in meditation.",
    "Because the fool wants to become God, He never finds him. The master is already God, Without ever wishing to be.",
    "There are two ways of passing from this world – one in light and one in darkness. When one passes in light, he does not come back; but when one passes in darkness, he returns.",
    "As the kindled fire consumes the fuel, so in the flame of wisdom the embers of action are burnt to ashes.",
    "The self-controlled soul, who moves amongst sense objects, free from either attachment or repulsion, he wins eternal peace.",

    "There is more happiness in doing one’s own without excellence than in doing another’s well.",

    "Delusion arises from anger. The mind is bewildered by delusion. Reasoning is destroyed when the mind is bewildered. One falls down when reasoning is destroyed.",

    "The self-controlled soul, who moves amongst sense objects, free from either attachment or repulsion, he wins eternal peace.",

    "It is both near and far, both within and without every creature; it moves and is unmoving. In its subtlety, it is beyond comprehension. It is invisible, yet appears divided into separate creatures. Know it to be the creator, the preserver, and the destroyer. Dwelling in every heart, it is beyond the darkness. It is called the light of the lights, the object and goal of knowledge, and knowledge itself.",

    "When a person is devoted to something with complete faith, I unify his faith in that. Then, when his faith is completely unified, he gains the object of his devotion.",

    "It is better to strive in one’s own dharma than to succeed in the dharma of another. Nothing is ever lost in following one’s own dharma. But competition in another’s dharma breeds fear and insecurity.",

    "When a man dwells on the objects of sense, he creates an attraction for them; attraction develops into desire, and desire breeds anger.",

    "No purifier equals knowledge, and in time the man of perfect discipline discovers this in his own spirit.",

    "Those who live in accordance with the divine laws without complaining, firmly established in the faith, are released from karma. Those who violate these laws, criticizing and complaining, are utterly deluded and are the cause of their own suffering.",

    "The power of God is with you at all times; through the activities of mind, senses, breathing, and emotions; and is constantly doing all the work using you as a mere instrument.",

    "Let the motive be in the deed and not in the event. Be not one whose motive for action is the hope of reward.",

    "The egoistic man thinks, “I am the doer”. In reality, Prakriti does everything. A Jnani who remains a silent witness and who knows the essence of the division of quality and functions is not bound.",

    "Whatever you do, make it an offering to me—the food you eat, the sacrifices you make, the help you give, even your suffering.",

    "The actions of a great man are an inspiration for others. Whatever he does becomes a standard for others to follow.",

    "Faithful, intent, his senses subdued, he gains knowledge; gaining knowledge, he soon finds perfect peace.",

    "Set thy heart upon thy work but never its reward.",

    "We are kept from our goal not by obstacles, but by a clear path to a lesser goal.",

    "You came empty handed and you will leave empty-handed.",

    "Anything in this world can be achieved or overcome through the “Power of will”.",
]

function getAdvice() {
    let get = Math.floor(Math.random() * advices.length);
    h1.innerHTML = (advices[get]);

    function generateRandomNumber() {
        // Generate a random decimal number between 0 (inclusive) and 1 (exclusive)
        const randomDecimal = Math.random();

        // Scale the random decimal to the desired range (1 to 50)
        const randomNumber = Math.floor(randomDecimal * 50) + 1;

        return randomNumber;
    }
    const randomNum = generateRandomNumber();
    h2.innerHTML = "#" + randomNum + " Advice";
}
