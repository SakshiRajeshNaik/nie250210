function PageHeader({ pageNumber }) {
  return (
      <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
              <a className="navbar-brand" href="/">Coffee Order Page</a>
              <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
              >
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                          <a className={pageNumber === 1 ? "nav-link active" : "nav-link"} href="/coffee/list">
                              Coffee
                          </a>
                      </li>
                      <li className="nav-item">
                          <a className={pageNumber === 2 ? "nav-link active" : "nav-link"} href="/coffee/create">
                              Add Coffee
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  );
}

export default PageHeader;