function Footer() {

  const date = new Date();

  return (
    <>
      <footer>
        <div className="footer">
          <p>© lopestalks {date.getFullYear()} • Todos os direitos reservados</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
  