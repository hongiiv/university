import React from "react"
import BrandBlockLeft from "./BrandBlockLeft"
import SearchBlock from "./SearchBlock"
import MenuBlockRight from "./MenuBlockRight"

const Navbar = ({
  app = null,
  includeSearch = false,
  onSearchClick = null,
}) => (
  <nav
    className="sticky top-0 z-40 bg-white border-b shadow-sm border-solid border-coolGray-100 flex items-center justify-between w-full p-2 leading-4"
    style={{ height: "65px" }}
  >
    <BrandBlockLeft app={app} />
    {includeSearch && <SearchBlock onSearchClick={onSearchClick} />}
    <MenuBlockRight />
  </nav>
)

export default Navbar
