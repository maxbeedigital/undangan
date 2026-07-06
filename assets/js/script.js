document.addEventListener("DOMContentLoaded", () => {

    // ===========================
    // DATA
    // ===========================

    document.getElementById("coupleName").innerHTML =
        `${wedding.groom.nickName} <span>&</span> ${wedding.bride.nickName}`;

    document.getElementById("weddingDate").innerHTML =
        wedding.wedding.date;

    // ===========================
    // NAMA TAMU
    // ===========================

    const url = new URL(window.location.href);

    const guest = url.searchParams.get("to");

    if (guest) {

        document.getElementById("guestName").innerHTML =
            decodeURIComponent(guest);

    }

    // ===========================
    // BUKA UNDANGAN
    // ===========================

    const btn = document.getElementById("openInvitation");

    btn.addEventListener("click", () => {

        document.getElementById("cover").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("cover").style.display = "none";

        },700);

    });

});
