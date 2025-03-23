const pokedex = [
    { name: "Bulbasaur", dexNumber: 1, entry: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon." },
    { name: "Ivysaur", dexNumber: 2, entry: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs." },
    { name: "Venusaur", dexNumber: 3, entry: "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight." },
    { name: "Charmander", dexNumber: 4, entry: "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail." },
    { name: "Charmeleon", dexNumber: 5, entry: "When it swings its burning tail, it elevates the temperature to unbearably high levels." },
    { name: "Charizard", dexNumber: 6, entry: "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally." },
    { name: "Squirtle", dexNumber: 7, entry: "After birth, its back swells and hardens into a shell. It powerfully sprays foam from its mouth." },
    { name: "Wartortle", dexNumber: 8, entry: "Often hides in water to stalk unwary prey. For swimming fast, it moves its ears to maintain balance." },
    { name: "Blastoise", dexNumber: 9, entry: "A brutal Pokémon with pressurized water jets on its shell. They are used for high-speed tackles." },
    { name: "Caterpie", dexNumber: 10, entry: "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls." },
    { name: "Metapod", dexNumber: 11, entry: "This Pokémon is vulnerable to attack while its shell is soft, exposing its weak and tender body." },
    { name: "Butterfree", dexNumber: 12, entry: "In battle, it flaps its wings at great speed to release highly toxic dust into the air." },
    { name: "Weedle", dexNumber: 13, entry: "Often found in forests, eating leaves. It has a sharp venomous stinger on its head." },
    { name: "Kakuna", dexNumber: 14, entry: "Almost incapable of moving, this Pokémon can only harden its shell to protect itself from predators." },
    { name: "Beedrill", dexNumber: 15, entry: "Flies at high speed and attacks using its large venomous stingers on its forelegs and tail." },
    { name: "Pidgey", dexNumber: 16, entry: "A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand." },
    { name: "Pidgeotto", dexNumber: 17, entry: "Very protective of its sprawling territorial area, this Pokémon will fiercely peck at any intruder." },
    { name: "Pidgeot", dexNumber: 18, entry: "When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp." },
    { name: "Rattata", dexNumber: 19, entry: "Bites anything when it attacks. Small and very quick, it is a common sight in many places." },
    { name: "Raticate", dexNumber: 20, entry: "Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey." },
    { name: "Spearow", dexNumber: 21, entry: "Eats bugs in grassy areas. It has to flap its short wings at high speed to stay airborne." },
    { name: "Fearow", dexNumber: 22, entry: "With its huge and magnificent wings, it can keep aloft without ever having to land for rest." },
    { name: "Ekans", dexNumber: 23, entry: "Moves silently and stealthily. Eats the eggs of birds, such as Pidgey and Spearow, whole." },
    { name: "Arbok", dexNumber: 24, entry: "A very aggressive Pokémon that is quick to anger. It bites at anything that moves." },
    { name: "Pikachu", dexNumber: 25, entry: "Burrows deep underground in arid locations far from water. It only emerges to hunt for food." },
    { name: "Raichu", dexNumber: 26, entry: "Long-bodied Pokémon that twists and squirms through the grass. It leaves a trail as it moves." },
    { name: "Sandshrew", dexNumber: 27, entry: "It has an extremely sharp sense of direction. It can unerringly return home to its nest, however far it may be removed from its familiar surroundings." },
    { name: "Sandslash", dexNumber: 28, entry: "When several of these Pokémon gather, their electricity could build and cause lightning storms." },
    { name: "Nidoran♀", dexNumber: 29, entry: "It keeps its tail raised to monitor its surroundings. If you yank its tail, it will try to bite you." },
    { name: "Nidorina", dexNumber: 30, entry: "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks." },
    { name: "Nidoqueen", dexNumber: 31, entry: "This Pokémon is full of vitality. It constantly changes its standing location by bouncing." },
    { name: "Nidoran♂", dexNumber: 32, entry: "Capable of bouncing high into the air, it moves around by bouncing along with its spring-like tail." },
    { name: "Nidorino", dexNumber: 33, entry: "If it is safe, it will drink fresh milk every day to grow strong." },
    { name: "Nidoking", dexNumber: 34, entry: "A Pokémon that looks like a blue fox. It is very agile and is said to be able to run over water." },
    { name: "Clefairy", dexNumber: 35, entry: "A Pokémon that is covered with a fluffy, curly fleece. If its fleece is broken in battle, it grows back in just three days." },
    { name: "Clefable", dexNumber: 36, entry: "It constantly listens with its large ears for danger. It will not rest until it is completely sure its surroundings are safe." },
    { name: "Vulpix", dexNumber: 37, entry: "A Pokémon that is often seen near the nests of Pidgey and Pidgeotto. It loves to eat the eggs of other Pokémon." },
    { name: "Ninetales", dexNumber: 38, entry: "This Pokémon is known to be a bit of a troublemaker. It likes to pull pranks and cause mischief." },
    { name: "Jigglypuff", dexNumber: 39, entry: "It uses the fine hair that covers its body to sense air currents and predict its enemy’s actions." },
    { name: "Wigglytuff", dexNumber: 40, entry: "It is a very energetic Pokémon that moves fast. It can instantly freeze moisture in the air, forming ice crystals." },
    { name: "Zubat", dexNumber: 41, entry: "It can take down even an Indian elephant with its strong, sharp claws." },
    { name: "Golbat", dexNumber: 42, entry: "It is said to be a descendant of an ancient, mystical beast. It has a very noble and powerful presence." },
    { name: "Oddish", dexNumber: 43, entry: "A Pokémon that has a unique sense of smell. It can track down prey from great distances." },
    { name: "Gloom", dexNumber: 44, entry: "It is said to be the incarnation of north winds. It appears wherever people are fighting." },
    { name: "Vileplume", dexNumber: 45, entry: "It is known as the king of birds. It has the ability to control the winds." },
    { name: "Paras", dexNumber: 46, entry: "A Pokémon that appears to be composed of multiple tentacles. It is highly intelligent and has been observed using tools." },
    { name: "Parasect", dexNumber: 47, entry: "It is capable of flight and has the ability to manipulate the weather." },
    { name: "Venonat", dexNumber: 48, entry: "It is said to be the guardian of the oceans. It can cause tsunamis by flapping its wings." },
    { name: "Venomoth", dexNumber: 49, entry: "A legendary Pokémon said to be the leader of the birds. It is said to bring peace to the land." },
    { name: "Diglett", dexNumber: 50, entry: "This Pokémon is said to be the messenger of the sun. It appears when the sun rises and disappears when it sets." },
    { name: "Dugtrio", dexNumber: 51, entry: "It is said to be a spirit Pokémon that brings luck to those who see it." },
    { name: "Meowth", dexNumber: 52, entry: "This Pokémon has the ability to create rain clouds. It is said to appear during times of drought." },
    { name: "Persian", dexNumber: 53, entry: "It is a Pokémon that is known to inhabit the depths of the sea. It has the ability to control water currents." },
    { name: "Psyduck", dexNumber: 54, entry: "A Pokémon that is known to be able to travel through time. It is said to be able to manipulate the fabric of reality." },
    { name: "Golduck", dexNumber: 55, entry: "A Pokémon that is known to be the creator of the universe. It is said to be the source of all life." },
    { name: "Mankey", dexNumber: 56, entry: "This Pokémon is known to have the ability to create and manipulate stars. It is said to be the guardian of the cosmos." },
    { name: "Primeape", dexNumber: 57, entry: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon." },
    { name: "Growlithe", dexNumber: 58, entry: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs." },
    { name: "Arcanine", dexNumber: 59, entry: "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight." },
    { name: "Poliwag", dexNumber: 60, entry: "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail." },
    { name: "Poliwhirl", dexNumber: 61, entry: "When it swings its burning tail, it elevates the temperature to unbearably high levels." },
    { name: "Poliwrath", dexNumber: 62, entry: "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally." },
    { name: "Abra", dexNumber: 63, entry: "After birth, its back swells and hardens into a shell. It powerfully sprays foam from its mouth." },
    { name: "Kadabra", dexNumber: 64, entry: "Often hides in water to stalk unwary prey. For swimming fast, it moves its ears to maintain balance." },
    { name: "Alakazam", dexNumber: 65, entry: "A brutal Pokémon with pressurized water jets on its shell. They are used for high-speed tackles." },
    { name: "Machop", dexNumber: 66, entry: "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls." },
    { name: "Machoke", dexNumber: 67, entry: "This Pokémon is vulnerable to attack while its shell is soft, exposing its weak and tender body." },
    { name: "Machamp", dexNumber: 68, entry: "In battle, it flaps its wings at great speed to release highly toxic dust into the air." },
    { name: "Bellsprout", dexNumber: 69, entry: "Often found in forests, eating leaves. It has a sharp venomous stinger on its head." },
    { name: "Weepinbell", dexNumber: 70, entry: "Almost incapable of moving, this Pokémon can only harden its shell to protect itself from predators." },
    { name: "Victreebel", dexNumber: 71, entry: "Flies at high speed and attacks using its large venomous stingers on its forelegs and tail." },
    { name: "Tentacool", dexNumber: 72, entry: "A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand." },
    { name: "Tentacruel", dexNumber: 73, entry: "Very protective of its sprawling territorial area, this Pokémon will fiercely peck at any intruder." },
    { name: "Geodude", dexNumber: 74, entry: "When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp." },
    { name: "Graveler", dexNumber: 75, entry: "Bites anything when it attacks. Small and very quick, it is a common sight in many places." },
    { name: "Golem", dexNumber: 76, entry: "Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey." },
    { name: "Ponyta", dexNumber: 77, entry: "Eats bugs in grassy areas. It has to flap its short wings at high speed to stay airborne." },
    { name: "Rapidash", dexNumber: 78, entry: "With its huge and magnificent wings, it can keep aloft without ever having to land for rest." },
    { name: "Slowpoke", dexNumber: 79, entry: "Moves silently and stealthily. Eats the eggs of birds, such as Pidgey and Spearow, whole." },
    { name: "Slowbro", dexNumber: 80, entry: "A very aggressive Pokémon that is quick to anger. It bites at anything that moves." },
    { name: "Magnemite", dexNumber: 81, entry: "Burrows deep underground in arid locations far from water. It only emerges to hunt for food." },
    { name: "Magneton", dexNumber: 82, entry: "Long-bodied Pokémon that twists and squirms through the grass. It leaves a trail as it moves." },
    { name: "Farfetch'd", dexNumber: 83, entry: "It has an extremely sharp sense of direction. It can unerringly return home to its nest, however far it may be removed from its familiar surroundings." },
    { name: "Doduo", dexNumber: 84, entry: "When several of these Pokémon gather, their electricity could build and cause lightning storms." },
    { name: "Dodrio", dexNumber: 85, entry: "It keeps its tail raised to monitor its surroundings. If you yank its tail, it will try to bite you." },
    { name: "Seel", dexNumber: 86, entry: "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks." },
    { name: "Dewgong", dexNumber: 87, entry: "This Pokémon is full of vitality. It constantly changes its standing location by bouncing." },
    { name: "Grimer", dexNumber: 88, entry: "Capable of bouncing high into the air, it moves around by bouncing along with its spring-like tail." },
    { name: "Muk", dexNumber: 89, entry: "If it is safe, it will drink fresh milk every day to grow strong." },
    { name: "Shellder", dexNumber: 90, entry: "A Pokémon that looks like a blue fox. It is very agile and is said to be able to run over water." },
    { name: "Cloyster", dexNumber: 91, entry: "A Pokémon that is covered with a fluffy, curly fleece. If its fleece is broken in battle, it grows back in just three days." },
    { name: "Gastly", dexNumber: 92, entry: "It constantly listens with its large ears for danger. It will not rest until it is completely sure its surroundings are safe." },
    { name: "Haunter", dexNumber: 93, entry: "A Pokémon that is often seen near the nests of Pidgey and Pidgeotto. It loves to eat the eggs of other Pokémon." },
    { name: "Gengar", dexNumber: 94, entry: "This Pokémon is known to be a bit of a troublemaker. It likes to pull pranks and cause mischief." },
    { name: "Onix", dexNumber: 95, entry: "It uses the fine hair that covers its body to sense air currents and predict its enemy’s actions." },
    { name: "Drowzee", dexNumber: 96, entry: "It is a very energetic Pokémon that moves fast. It can instantly freeze moisture in the air, forming ice crystals." },
    { name: "Hypno", dexNumber: 97, entry: "It can take down even an Indian elephant with its strong, sharp claws." },
    { name: "Krabby", dexNumber: 98, entry: "It is said to be a descendant of an ancient, mystical beast. It has a very noble and powerful presence." },
    { name: "Kingler", dexNumber: 99, entry: "A Pokémon that has a unique sense of smell. It can track down prey from great distances." },
    { name: "Voltorb", dexNumber: 100, entry: "It is said to be the incarnation of north winds. It appears wherever people are fighting." },
    { name: "Electrode", dexNumber: 101, entry: "It is known as the king of birds. It has the ability to control the winds." },
    { name: "Exeggcute", dexNumber: 102, entry: "A Pokémon that appears to be composed of multiple tentacles. It is highly intelligent and has been observed using tools." },
    { name: "Exeggutor", dexNumber: 103, entry: "It is capable of flight and has the ability to manipulate the weather." },
    { name: "Cubone", dexNumber: 104, entry: "It is said to be the guardian of the oceans. It can cause tsunamis by flapping its wings." },
    { name: "Marowak", dexNumber: 105, entry: "A legendary Pokémon said to be the leader of the birds. It is said to bring peace to the land." },
    { name: "Hitmonlee", dexNumber: 106, entry: "This Pokémon is said to be the messenger of the sun. It appears when the sun rises and disappears when it sets." },
    { name: "Hitmonchan", dexNumber: 107, entry: "It is said to be a spirit Pokémon that brings luck to those who see it." },
    { name: "Lickitung", dexNumber: 108, entry: "This Pokémon has the ability to create rain clouds. It is said to appear during times of drought." },
    { name: "Koffing", dexNumber: 109, entry: "It is a Pokémon that is known to inhabit the depths of the sea. It has the ability to control water currents." },
    { name: "Weezing", dexNumber: 110, entry: "A Pokémon that is known to be able to travel through time. It is said to be able to manipulate the fabric of reality." },
    { name: "Rhyhorn", dexNumber: 111, entry: "A Pokémon that is known to be the creator of the universe. It is said to be the source of all life." },
    { name: "Rhydon", dexNumber: 112, entry: "This Pokémon is known to have the ability to create and manipulate stars. It is said to be the guardian of the cosmos." },
    { name: "Chansey", dexNumber: 113, entry: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon." },
    { name: "Tangela", dexNumber: 114, entry: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs." },
    { name: "Kangaskhan", dexNumber: 115, entry: "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight." },
    { name: "Horsea", dexNumber: 116, entry: "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail." },
    { name: "Seadra", dexNumber: 117, entry: "When it swings its burning tail, it elevates the temperature to unbearably high levels." },
    { name: "Goldeen", dexNumber: 118, entry: "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally." },
    { name: "Seaking", dexNumber: 119, entry: "After birth, its back swells and hardens into a shell. It powerfully sprays foam from its mouth." },
    { name: "Staryu", dexNumber: 120, entry: "Often hides in water to stalk unwary prey. For swimming fast, it moves its ears to maintain balance." },
    { name: "Starmie", dexNumber: 121, entry: "A brutal Pokémon with pressurized water jets on its shell. They are used for high-speed tackles." },
    { name: "Mr. Mime", dexNumber: 122, entry: "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls." },
    { name: "Scyther", dexNumber: 123, entry: "This Pokémon is vulnerable to attack while its shell is soft, exposing its weak and tender body." },
    { name: "Jynx", dexNumber: 124, entry: "In battle, it flaps its wings at great speed to release highly toxic dust into the air." },
    { name: "Electabuzz", dexNumber: 125, entry: "Often found in forests, eating leaves. It has a sharp venomous stinger on its head." },
    { name: "Magmar", dexNumber: 126, entry: "Almost incapable of moving, this Pokémon can only harden its shell to protect itself from predators." },
    { name: "Pinsir", dexNumber: 127, entry: "Flies at high speed and attacks using its large venomous stingers on its forelegs and tail." },
    { name: "Tauros", dexNumber: 128, entry: "A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand." },
    { name: "Magikarp", dexNumber: 129, entry: "Very protective of its sprawling territorial area, this Pokémon will fiercely peck at any intruder." },
    { name: "Gyarados", dexNumber: 130, entry: "When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp." },
    { name: "Lapras", dexNumber: 131, entry: "Bites anything when it attacks. Small and very quick, it is a common sight in many places." },
    { name: "Ditto", dexNumber: 132, entry: "Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey." },
    { name: "Eevee", dexNumber: 133, entry: "Eats bugs in grassy areas. It has to flap its short wings at high speed to stay airborne." },
    { name: "Vaporeon", dexNumber: 134, entry: "With its huge and magnificent wings, it can keep aloft without ever having to land for rest." },
    { name: "Jolteon", dexNumber: 135, entry: "Moves silently and stealthily. Eats the eggs of birds, such as Pidgey and Spearow, whole." },
    { name: "Flareon", dexNumber: 136, entry: "A very aggressive Pokémon that is quick to anger. It bites at anything that moves." },
    { name: "Porygon", dexNumber: 137, entry: "Burrows deep underground in arid locations far from water. It only emerges to hunt for food." },
    { name: "Omanyte", dexNumber: 138, entry: "Long-bodied Pokémon that twists and squirms through the grass. It leaves a trail as it moves." },
    { name: "Omastar", dexNumber: 139, entry: "It has an extremely sharp sense of direction. It can unerringly return home to its nest, however far it may be removed from its familiar surroundings." },
    { name: "Kabuto", dexNumber: 140, entry: "When several of these Pokémon gather, their electricity could build and cause lightning storms." },
    { name: "Kabutops", dexNumber: 141, entry: "It keeps its tail raised to monitor its surroundings. If you yank its tail, it will try to bite you." },
    { name: "Aerodactyl", dexNumber: 142, entry: "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks." },
    { name: "Snorlax", dexNumber: 143, entry: "This Pokémon is full of vitality. It constantly changes its standing location by bouncing." },
    { name: "Articuno", dexNumber: 144, entry: "Capable of bouncing high into the air, it moves around by bouncing along with its spring-like tail." },
    { name: "Zapdos", dexNumber: 145, entry: "If it is safe, it will drink fresh milk every day to grow strong." },
    { name: "Moltres", dexNumber: 146, entry: "A Pokémon that looks like a blue fox. It is very agile and is said to be able to run over water." },
    { name: "Dratini", dexNumber: 147, entry: "A Pokémon that is covered with a fluffy, curly fleece. If its fleece is broken in battle, it grows back in just three days." },
    { name: "Dragonair", dexNumber: 148, entry: "It constantly listens with its large ears for danger. It will not rest until it is completely sure its surroundings are safe." },
    { name: "Dragonite", dexNumber: 149, entry: "A Pokémon that is often seen near the nests of Pidgey and Pidgeotto. It loves to eat the eggs of other Pokémon." },
    { name: "Mewtwo", dexNumber: 150, entry: "This Pokémon is known to be a bit of a troublemaker. It likes to pull pranks and cause mischief." },
    { name: "Mew", dexNumber: 151, entry: "It uses the fine hair that covers its body to sense air currents and predict its enemy’s actions." },
];

const startGameButton = document.getElementById("start-game");
const submitGuessButton = document.getElementById("submit-guess");
const pokedexEntryElement = document.getElementById("pokedex-entry");
const guessInput = document.getElementById("guess");
const feedbackElement = document.getElementById("feedback");
const resetGameButton = document.getElementById("reset-game");
    
let currentPokemon = null;
let roundsPlayed = 0;
let correctGuesses = 0;
let attemptsLeft = 3;
let previousPokemon = new Set;
    
// Function to calculate similarity between two words
function similarity(s1, s2) {
    let longer = s1.length > s2.length ? s1 : s2;
    let shorter = s1.length > s2.length ? s2 : s1;
    let matchCount = 0;
    
    for (let i = 0; i < shorter.length; i++) {
        if (shorter[i] === longer[i]) matchCount++;
    };  
    return (matchCount / longer.length) * 100; // Percentage similarity
};
    
// Function to find the closest Pokémon name in the Pokédex
function findClosestPokemon(guess) {
    let closestMatch = null;
    let highestSimilarity = 0;
    
    for (let pokemon of pokedex) {
        let sim = similarity(guess, pokemon.name.toLowerCase());
        if (sim > highestSimilarity) {
            highestSimilarity = sim;
            closestMatch = pokemon;
        };
    };
        return closestMatch;
};
    
// Function to provide hints based on Pokédex number
function getHint(guessDex, correctDex) {
    let difference = Math.abs(guessDex - correctDex);
    
    if (difference <= 5) return "🔥 You're on fire!!!";
    if (difference <= 10) return "🔥 Ooh, you're warm!";
    if (difference <= 20) return "🤔 Are you sure you know Pokémon?";
    return "📖 Maybe you should read the Pokédex more often, you're really far off.";
    };

// Function to end the game and provide results
function endGame() {
    let finalMessage = "";
    
    if (correctGuesses === 5) {
        finalMessage = "🎉 You won the big prize! Collect at your nearest PokéCenter!";
    } else if (correctGuesses === 4) {
        finalMessage = "🏆 You sure know your Kanto Pokémon!";
    } else if (correctGuesses === 3) {
        finalMessage = "📚 You might need to study your Pokémon to become a better trainer~";
    } else if (correctGuesses === 2) {
        finalMessage = "🎒 It looks like you might be starting your journey! Go see Professor Oak for your first Pokémon and Pokédex!";
    } else if (correctGuesses === 1) {
        finalMessage = "😬 Oh dear, maybe this won't do... have you tried another job besides being a Pokémon trainer?";
    } else {
        finalMessage = "🚫 I'm sorry... You might need a new fandom.";
    };
    
    feedbackElement.textContent = finalMessage;
    submitGuessButton.style.display = "none";
    guessInput.style.display = "none";
};
    
// Function to start a new round
function startNewRound() {
    if (roundsPlayed >= 5) {
        endGame();
        return;
    };
    
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * pokedex.length);
    } while (previousPokemon.has(randomIndex)); // Ensure no duplicates
    
    currentPokemon = pokedex[randomIndex];
    previousPokemon.add(randomIndex);
    pokedexEntryElement.textContent = currentPokemon.entry;
    feedbackElement.textContent = "";
    guessInput.value = "";
    attemptsLeft = 3;
    roundsPlayed++;
};
    
// Event listener for the start button
startGameButton.addEventListener("click", () => {
    startNewRound();
    startGameButton.style.display = "none";
    document.getElementById("containerTwo").classList.remove("hidden");
    submitGuessButton.style.display = "block";
    guessInput.style.display = "block";
});
    
// Event listener for the guess submission
submitGuessButton.addEventListener("click", () => {
    if (!currentPokemon) {
        feedbackElement.textContent = "Click 'Start Game' first!";
        return;
    };
    
    const userGuess = guessInput.value.trim().toLowerCase();
    const correctAnswer = currentPokemon.name.toLowerCase();
    
    if (similarity(userGuess, correctAnswer) >= 80) {
        feedbackElement.textContent = `✅ Correct! It's ${currentPokemon.name}!`;
        correctGuesses++;
        startNewRound();
    } else {
        let closestMatch = findClosestPokemon(userGuess);
        let hint = getHint(closestMatch.dexNumber, currentPokemon.dexNumber);
    
        feedbackElement.textContent = `❌ Incorrect! Hint: ${hint}`;
        attemptsLeft--;
    
        if (attemptsLeft === 0) {
            feedbackElement.textContent = `😢 The correct answer was ${currentPokemon.name}. Moving to the next Pokémon.`;
            setTimeout(startNewRound, 2000);
        };
    };
    guessInput.value = ""; // Clear input
 });

 // Reset Game Function
resetGameButton.addEventListener("click", () => {
    location.reload();
});