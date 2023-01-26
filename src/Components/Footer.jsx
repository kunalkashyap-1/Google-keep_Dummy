const _date = new Date();

function Footer(){
    return <footer >
        <p>© Copyright {_date.getFullYear()}</p>
    </footer>
}

export default Footer;