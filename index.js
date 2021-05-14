document.addEventListener("DOMContentLoaded", () => {
    const contactMeForm = document.getElementById("contact-form");

    contactMeForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const contactInfo = new FormData(contactMeForm);

        const name = contactInfo.get("name");
        const email = contactInfo.get("email");
        const message = contactInfo.get("message");
        const date = new Date();
        const dateCreated = date.toLocaleString("en-us", {
            timeZone: "America/Chicago",
        });
        
        const data = {
            name: name,
            email: email,
            message: message,
            created: dateCreated,
        };

        await fetch("https://sheet.best/api/sheets/fe924d9e-7277-434d-9872-49c4e11f244f",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        window.location = "http://cjnewcomer.github.io";
    });
});