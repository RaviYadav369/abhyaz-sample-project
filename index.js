
const homeNavSection = () => {
   const parentElement = document.querySelector(".main-nav")
   const newEle = document.querySelector(".new-ele")
   let html = ''
   html = `
   <section class="new-element">
   <div>Dashboard</div>
   <div>Courses</div>
   <div>Courses Search</div>
   </section>

   `
   newEle.innerHTML = html;


   parentElement.appendChild(newEle)
}
const ProfileNavSection = () => {
   const parentElement = document.querySelector(".profile-section-list")
   const newProf = document.querySelector(".pro-nav")
   let html = '';
   html = `
      <section class="profile-navigation">
            <div>Profile</div>
            <div>Grades</div>
            <div>Calendar</div>
            <div>Messages</div>
            <div>Private Files</div>
            <div>Reports</div>
            <section class="languages">
                  <div>Preferences</div>
                  <div>Language</div>
            </section>
            <div>Log Out</div>
      </section>
`
newProf.innerHTML= html;
parentElement.appendChild(newProf)
}
const ProfileNavSectionRemove = () => {
   const parentElement = document.querySelector(".profile-section-list")
   const newProf = document.querySelector(".pro-nav")

parentElement.removeChild(newProf)
}
const homeNavSectionRemove = () => {
   const parentElement = document.querySelector("#home-item")
   const newEle = document.querySelector(".new-ele")
   console.log(newEle);
   console.log(parentElement);
   newEle.classList.add("none")

   // parentElement.removeChild(newEle)

}
document.addEventListener("DOMContentLoaded", () => {
   const homeNav = document.querySelector("#home-item")
   homeNav.addEventListener("click", homeNavSection)
   const profileNav = document.querySelector("#profile-nav")
   profileNav.addEventListener("click", ProfileNavSection)
   // window.addEventListener("click",ProfileNavSectionRemove)

   // profileNav.removeEventListener("click",ProfileNavSectionRemove)
   // homeNav.addEventListener("toggle",homeNavSectionRemove)

   document.getElementById("myDetails").addEventListener("toggle", myFunction);

   function myFunction() {
   }
})