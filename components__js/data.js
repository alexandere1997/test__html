const data = () => {
    let  myDate = new Date();
    let date = myDate.getFullYear()
    let footer__date = document.querySelector(".footer__date");
    footer__date.innerHTML = `${date}`;
}
export default data;