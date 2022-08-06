import "../styles/footer.css"
import github from "../assets/github 1.svg"
const Footer= (props) => {
  return (
<div id = "Footer">
        Contato
    <div>
        <div id = "Buttons_Footer">
       <button> <img src={github} alt = "icon Github"></img></button> 
        </div>

        <div id = "Contacts">
                <div id = "Contacts_esquerda"> lorem ipsum  lorem ipsum lorem ipsum</div>
                <div id = "Contacts_direita"> lorem ipsum  lorem ipsum lorem ipsum</div> 
        </div>

    </div>
    
</div>
  );
};

export default Footer;
