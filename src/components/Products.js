import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <>
      <div>
        <input type="search" placeholder="Search a product" />
      </div>
      <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Products;
