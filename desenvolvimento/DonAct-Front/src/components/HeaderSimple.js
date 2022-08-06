import "../styles/headerSimple.css"


const HeaderSimple = (props) => {
  return (
    <div className = "header">
        <div className="header_content">
          
            <div className="header_icons">
                <span className="material-icons">
                    person
                </span>
                <label>Olá usuário</label>
            </div>
        </div>

    </div>
  );
};

export default HeaderSimple;
