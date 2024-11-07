export const appointmentData = [
  {
    imageUrl: "test.jpg",
    header: "Hey",
    text: "Schön, dass du hier bist. Lass uns gemeinsam die Schritte durchgehen, damit wir deinen Termin für dein neues Tattoo planen können.",
    buttons: [{ type: "forward", text: "Los gehts", style: "prime" }],
  },
  {
    imageUrl: "lukas.jpg",
    header: "Wie heißt du?",
    text: "Schön, dass du hier bist. Lass uns gemeinsam die Schritte durchgehen, damit wir deinen Termin für dein neues Tattoo planen können.",
    buttons: [
      { type: "backward", text: "zurück", style: "prime" },
      { type: "forward", text: "weiter", style: "prime" },
    ],
  },
  {
    imageUrl: "presentation.jpg",
    header: "Hi {{Name}}!",
    text: "Ich bin Lukas und ich freue mich darauf, gemeinsam mit dir ein passendes Design zu entwickeln.",
    buttons: [
      { type: "backward", text: "zurück", style: "prime" },
      { type: "forward", text: "weiter", style: "prime" },
    ],
  },
  {
    imageUrl: "color.jpg",
    header: "Dein Style?",
    text: "Welchen Stil wünschst du dir für dein Tattoo? Ob minimalistisch, realistisch oder etwas dazwischen – ich passe mich gern an deine Vorstellungen an.",
    buttons: [
      { type: "backward", text: "zurück" },
      { type: "forward", text: "weiter" },
    ],
  },
  {
    imageUrl: "color.jpg",
    header: "Dein Style?",
    text: "Einfarbig, Zweifarbig  oder Bunt?",
    buttons: [
      { type: "backward", text: "zurück" },
      { type: "forward", text: "weiter" },
    ],
  },
  {
    imageUrl: "reference.jpg",
    header: "Hast du Referenzen?",
    text: "Falls du schon eine Bildvorlage oder Inspiration hast, lade sie gern hier hoch. Das gibt mir eine bessere Vorstellung von deinem Wunsch",
    buttons: [
      { type: "backward", text: "zurück" },
      { type: "forward", text: "weiter" },
    ],
  },
  {
    imageUrl: "target.jpg",
    header: "Wohin das Ding?",
    text: "Wo soll das Tattoo hin? Wähle die Körperstelle aus, die du im Kopf hast. Wenn du noch unschlüssig bist überspring den Schritt einfach!",
    buttons: [
      { type: "backward", text: "zurück" },
      { type: "forward", text: "weiter" },
    ],
  },
  {
    imageUrl: "measure.jpg",
    header: "Wie groß in etwa?",
    text: "",
    buttons: [
      { type: "backward", text: "zurück" },
      { type: "forward", text: "weiter" },
    ],
  },
  {
    imageUrl: "date.jpg",
    header: "Wann passts?",
    text: "Bitte gib mir noch Zwei tage wo es dir generell passt damit ich dir einen Vorschlag machen kann.",
    buttons: [
      { type: "backward", text: "zurück" },
      { type: "forward", text: "weiter" },
    ],
  },
  {
    imageUrl: "yougotmail.jpg",
    header: "You Got Mail",
    text: "Damit ich dich für Details und die Terminbestätigung erreichen kann, brauche ich bitte deine {{ Email adresse}}.",
    buttons: [
      { type: "backward", text: "zurück" },
      { type: "forward", text: "weiter" },
    ],
  },
  {
    imageUrl: "confirmation.jpg",
    header: "YAY !!!",
    text: "Danke dir {{Name}} wir haben es geschafft! Du möchtest also ein {{style}} Tattoo auf {{position}} , dass ca. {{size}} groß ist.",
    buttons: [
      { type: "backward", text: "zurück" },
      { type: "send", text: "Bestätigen" },
    ],
  },
];
