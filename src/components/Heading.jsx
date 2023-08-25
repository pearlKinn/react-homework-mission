import { Link } from 'react-router-dom';
import Logo from './Logo';

function Heading() {
  return <h1>
    <Link to="/">
      <Logo/>
    </Link>
  </h1>;
}

export default Heading;