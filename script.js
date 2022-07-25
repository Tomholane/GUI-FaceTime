var settingsmenu = document.querySelector(".setting-menu");
var dropdowns = document.querySelector(".dropdown");
var darkBtn = document.getElementById("dark-btn");
function SettingsMenuToggle()
{
    settingsmenu.classList.toggle("settings-menu-height");
}
function DropDownToggle()
{
    dropdowns.classList.toggle("dropdown-on");
}
darkBtn.onclick = function()
{
    darkBtn.classList.toggle("dark-btn-on")
    document.body.classList.toggle("dark-theme");
}