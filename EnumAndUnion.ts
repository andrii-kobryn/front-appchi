enum Days {
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sut,
    Sun

}

function getActivity(day: Days): string {
    let activity: string = "";
    switch (day) {
        case Days.Mon:
        case Days.Tue:
        case Days.Wed:
        case Days.Thu:
        case Days.Fri:
            return "Work";
        case Days.Sut:
            return "Cleaning";
        case Days.Sun:
            return "Do what you want... I don't care!"
        default:
            return "WTF?"
    }
}