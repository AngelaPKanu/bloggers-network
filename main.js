const themes = () => {
    const theme = document.querySelector("body");
    let daily = new Date();
    let dailyTheme = daily.getDay();
    switch (dailyTheme) {
        case 0:
            theme.style.backgroundColor = "DodgerBlue";
            break;
        case 1:
            theme.style.backgroundColor = "lime";
            break;
        case 2:
            theme.style.backgroundColor = "MediumSeaGreen";
            break;
        case 3:
            theme.style.backgroundColor = "#ff8533";
            break;
        case 4:
            theme.style.backgroundColor = "tomato";
            break;
        case 5:
            theme.style.backgroundColor = "#99eeff";
            break;
        case 6:
            theme.style.backgroundColor = "#00ff80";
            break;
        default:
            theme.style.backgroundColor = "white";
    }
}
