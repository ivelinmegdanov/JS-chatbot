function returnTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const formattedTime = ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2);
    const timestamp = Date.now();

    let x, y;
    for (let i = 1; i <= Math.sqrt(timestamp); i++) {
        if (timestamp % i === 0) {
            x = i;
            y = timestamp / i;
        }
    }

    const timeResponse = [
        { text: `абе май е ${formattedTime}.`, chance: 0.5 },
        { text: "абе май е 12:45.", chance: 0.1 },
        { text: `Ако умножиш ${x} по ${y} ще получиш unix timestamp, който лесно можеш сам да си пресметнеш и да получиш текущата дата.`, chance: 0.1 },
    ];

    if(hours >= 18) {
        timeResponse.push({text: `Шес бес десет мина бе, ${formattedTime} е...`, chance: 0.5});
    } else {
        timeResponse.push({text: `Шес бес десет, няма бе ${formattedTime} е...`, chance: 0.5});
    }

    if(hours === 17 && minutes === 50){
        response.innerHTML += `<p>Шес бес десет е!</p>`;
    }
    

    response.innerHTML += `<p>${getRandomResponse(timeResponse)}</p>`;
}