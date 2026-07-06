
function toggleMenu(){document.getElementById("mainNav").classList.toggle("active")}
document.querySelectorAll(".nav a").forEach(function(link){
  link.addEventListener("click",function(){
    if(window.innerWidth<=1080){document.getElementById("mainNav").classList.remove("active")}
  });
});
document.querySelectorAll(".form").forEach(function(form){
  form.addEventListener("submit",function(e){
    e.preventDefault();
    alert("Thank you. This static form is ready for Google Form, email service, WhatsApp, or backend connection.");
  });
});
(function(){
  var current=location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(function(a){
    var href=a.getAttribute("href");
    if(href===current){a.classList.add("active")}
  });
})();
