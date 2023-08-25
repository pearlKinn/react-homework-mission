import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className="flex gap-4 p-5 font-extralight">
        <li>
          <NavLink
            to="/techit"
            className={({ isActive }) =>
              isActive ? 'font-semibold text-orange-500' : 'font-semibold'
            }
          >
            테킷 스쿨
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/track"
            className={({ isActive }) =>
              isActive ? 'font-semibold  text-orange-500' : 'font-semibold'
            }
          >
            온보딩 트랙
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/station"
            className={({ isActive }) =>
              isActive ? 'font-semibold  text-orange-500' : 'font-semibold'
            }
          >
            스타트업 스테이션
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
