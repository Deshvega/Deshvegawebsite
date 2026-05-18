/* =========================
   OPEN MODAL
========================= */
const submitBtn = document.querySelector("#internshipForm button[type='submit']");
function openInternshipForm(){

    document
    .getElementById("internshipModal")
    .classList
    .add("active");
}

/* =========================
   CLOSE MODAL
========================= */

function closeInternshipForm(){

    document
    .getElementById("internshipModal")
    .classList
    .remove("active");
}

/* =========================
   FORM SUBMIT
========================= */

const form =
document.getElementById(
    "internshipForm"
);

form.addEventListener("submit", async function(e) {
    e.preventDefault();

    // 🚫 PREVENT MULTIPLE CLICKS
    submitBtn.disabled = true;
    submitBtn.innerText = "Submitting...";

    try {
        const fileInput = document.getElementById("resume");
        const file = fileInput.files[0];

        const reader = new FileReader();

        reader.onload = async function () {

            const base64File = reader.result.split(",")[1];

            const formData = new FormData();

            formData.append("name", document.getElementById("name").value);
            formData.append("email", document.getElementById("email").value);
            formData.append("college", document.getElementById("college").value);
            formData.append("message", document.getElementById("message").value);
            formData.append("resume", base64File);

            await fetch("https://script.google.com/macros/s/AKfycbyrHaZifc6XnGBAARREM3lEEDRtVJ6GW04nVc0kHEtQB9cB3-bHfQYHO0GUTSxtQGnb/exec", {
                method: "POST",
                body: formData
            });

            alert("Application Submitted Successfully!");
            form.reset();
            closeInternshipForm();
        };

        reader.readAsDataURL(file);

    } catch (error) {
        console.error(error);
        alert("Submission Failed!");

    } finally {
        // 🔄 Re-enable button (optional after delay)
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerText = "Submit Application";
        }, 3000);
    }
});


const navbar =
document.querySelector(
    ".custom-navbar"
);

window.addEventListener(
    "scroll",
    () => {

        if(window.scrollY > 40){

            navbar.classList.add(
                "scrolled"
            );
        }

        else{

            navbar.classList.remove(
                "scrolled"
            );
        }
    }
);
/* =========================
   VISION MODAL
========================= */

function openVisionModal(){

    document
    .getElementById("visionModal")
    .classList
    .add("active");
}

function closeVisionModal(){

    document
    .getElementById("visionModal")
    .classList
    .remove("active");
}