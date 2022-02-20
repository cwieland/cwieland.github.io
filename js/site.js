$(document).ready(function () {
    // Set the active class on the navigation based on the current page
    $("nav, a").find(".active").removeClass("active");
    switch (window.location.pathname.toLowerCase())
    {
        case "/":
        case "/index.html":
            $("#liNews").addClass("active");
            break;

        case "/tools.html":
            $("#liTools").addClass("active");
            break;

        case "/demos.html":
            $("#liDemos").addClass("active");
            $("#liDemosPage").addClass("active");
            break;

        case "/emulator/missile1.html":
            $("#liDemos").addClass("active");
            $("#liMissile1").addClass("active");
            break;

        case "/emulator/missile2.html":
            $("#liDemos").addClass("active");
            $("#liMissile2").addClass("active");
            break;

        case "/emulator/missile3.html":
            $("#liDemos").addClass("active");
            $("#liMissile3").addClass("active");
            break;

        case "/emulator/missile4.html":
            $("#liDemos").addClass("active");
            $("#liMissile4").addClass("active");
            break;

        case "/emulator/missile5.html":
            $("#liDemos").addClass("active");
            $("#liMissile5").addClass("active");
            break;

        case "/emulator/missile6.html":
            $("#liDemos").addClass("active");
            $("#liMissile6").addClass("active");
            break;

        case "/emulator/missile7.html":
            $("#liDemos").addClass("active");
            $("#liMissile7").addClass("active");
            break;

        case "/emulator/timer1.html":
            $("#liDemos").addClass("active");
            $("#liTimer1").addClass("active");
            break;

        case "/emulator/palette_V2_cartridge_reproduction.html":
            $("#liDemos").addClass("active");
            $("#liPaletteV2").addClass("active");
            break;
    }
});
