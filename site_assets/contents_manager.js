document.title = "R1DF"

// Tracker variables
let extras_shown = false; /// if true: extras are listed

// Togglers
const extras_switch = document.getElementById("extras_switch")

// Pages / Sections
const main_page = document.getElementById("main_page")
const projects_page = document.getElementById("projects_page")
const extras_section = document.getElementById("extras_section")

// Toggler functions
show_projects = () => {
    document.title = "R1DF - Projects"
    main_page.style.display = "none"
    projects_page.style.display = "block"
}

return_to_main = () => {
    document.title = "R1DF"
    main_page.style.display = "block"
    projects_page.style.display = "none"
    extras_section.style.display = "none"
    extras_switch.innerHTML = "Show Extras"
    extras_shown = false;
}

toggle_extras = () => {
    if (extras_shown) {
        extras_section.style.display = "none"
        extras_switch.innerHTML = "Show Extras"
    } else {
        extras_section.style.display = "block"
        extras_switch.innerHTML = "Hide Extras"
    }
    extras_shown = !extras_shown;
}
