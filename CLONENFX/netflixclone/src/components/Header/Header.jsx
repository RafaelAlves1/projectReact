import './Header.css';


function Header({black}){
  return(
    <div>
      <header className={black ? 'black' : '' }>
          <div className="header--logo">
            <a href="/">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/640px-Netflix_2015_logo.svg.png" alt="logotipo" />
            </a>
          </div>

          <div className="header--user">
            <a href="/">
              <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Usuario" />
            </a>
          </div>
      </header>
    </div>
  );
}

export default Header;