import Link from "next/link";
const AdminHeader = () =>{
    return (
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link href="./">
            <a href="#" className="nav-link"> หน้าแรก</a>
            </Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">
              Contact
            </a>
            
          </li>
          <li className="nav-item d-none d-sm-inline-block">
          <Link href="users">
            <a href="#" className="nav-link">
              ตารางรายการสมาชิก
            </a>
            </Link>
          </li>

          <li className="nav-item d-none d-sm-inline-block">
          <Link href="register">
            <a href="#" className="nav-link">
              สมัครสมาชิก
            </a>
            </Link>
          </li>
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Navbar Search */}
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="navbar-search"
              href="#"
              role="button"
            >
              <i className="fas fa-search" />
            </a>
            <div className="navbar-search-block">
              <form className="form-inline">
                <div className="input-group input-group-sm">
                  <input
                    className="form-control form-control-navbar"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <i className="fas fa-search" />
                    </button>
                    <button
                      className="btn btn-navbar"
                      type="button"
                      data-widget="navbar-search"
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
        </ul>
      </nav>
    );
}

export default AdminHeader